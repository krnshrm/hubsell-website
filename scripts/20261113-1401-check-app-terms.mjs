#!/usr/bin/env node
// Runs after every build ("postbuild") and reads the built pages in dist/<locale>/.
//
// The website uses the app's words and form of address in every language. The
// copy is spread over data files, markdown collections and components, several
// of them holding more than one language, so the only place where "this text is
// German" is certain is the built page under /de/. That is what is checked.
//
//   npm run check:terms                    words to avoid, form of address, variant
//   npm run check:terms -- --pairs         also compare each page with its English page
//   npm run check:terms -- --locale nl     one language
//   npm run check:terms -- --all           list every finding (default: 15 per rule)
//   npm run check:terms -- --strict        fail on any finding, in any language
//   --quiet (used by postbuild)            counts only for the report-only languages
//
// A finding fails the build only for the languages in `enforce`
// (scripts/20261113-1401-app-terms.config.mjs). The comparison with the English
// page never fails a build: it is a reading list, and marketing copy may
// rephrase.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { enforce, avoid, style, allow } from './20261113-1401-app-terms.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const only = args.includes('--locale') ? args[args.indexOf('--locale') + 1] : null;
const LIMIT = flag('--all') ? Infinity : 15;

if (!existsSync(dist)) {
  console.error('\n  No dist/ folder. Run `npm run build` first.\n');
  process.exit(1);
}
const { terms, locales, source } = JSON.parse(readFileSync(join(root, 'docs/20261113-1401-app-terms.json'), 'utf8'));

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', shy: '', ndash: '–', mdash: '—', hellip: '…', euro: '€', rarr: '→', larr: '←', middot: '·', copy: '©' };
const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n] ?? m);
const tidy = (s) => decode(s).replace(/[­​]/g, '').replace(/\s+/g, ' ').trim();

// Tags that sit inside a sentence. Everything else ends a piece of text.
const INLINE = 'a|span|strong|em|b|i|u|mark|small|sup|sub|code|abbr|cite|q|s|del|ins|wbr|label';

// The page as a list of sentences and labels, in page order.
function segments(html) {
  const out = [];
  const body = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|svg|noscript|template)\b[\s\S]*?<\/\1>/gi, ' ');
  for (const m of body.matchAll(/<meta\b[^>]*\b(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)"[^>]*>/gi)) {
    const c = /\bcontent="([^"]*)"/i.exec(m[0]);
    if (c) out.push(tidy(c[1]));
  }
  for (const m of body.matchAll(/\b(?:alt|aria-label|placeholder|title)="([^"]+)"/gi)) out.push(tidy(m[1]));
  const text = body
    // two inline elements back to back are separate labels (a term and its definition in a card)
    .replace(new RegExp(`</(?:${INLINE})>(?=<(?:${INLINE})\\b)`, 'gi'), '\n')
    .replace(new RegExp(`</?(?:${INLINE})\\b[^>]*>`, 'gi'), '')
    .replace(/<br\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '\n');
  for (const line of text.split('\n')) {
    const t = tidy(line);
    if (t) out.push(t);
  }
  return out;
}

function pages(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) out.push(p);
    }
  };
  walk(dir);
  return out.sort();
}
const isStub = (html) => /<meta http-equiv="refresh"/i.test(html);
const urlOf = (file) => '/' + relative(dist, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordPattern = (words) => new RegExp(`(?<![\\p{L}-])(${words.map(escape).join('|')})(?![\\p{L}-])`, 'giu');

const allowed = (f) => allow.some((a) =>
  a.locale === f.locale
  && (a.page === undefined || f.page.startsWith(a.page))
  && (a.word === undefined || a.word.toLowerCase() === f.word.toLowerCase())
  && (a.text === undefined || f.text.includes(a.text)));

// One finding per distinct sentence; the header and footer repeat on every page.
const findings = new Map();
const add = (f) => {
  if (allowed(f)) return;
  const key = [f.locale, f.rule, f.word.toLowerCase(), f.text].join('\u0000');
  const hit = findings.get(key);
  if (hit) hit.pages.add(f.page);
  else findings.set(key, { ...f, pages: new Set([f.page]) });
};

const lower = (s) => s.toLocaleLowerCase();
function stems(term, locale) {
  if (term.match?.[locale]) return term.match[locale].map(lower);
  const forms = term[locale].map(lower);
  let prefix = forms[0] ?? '';
  for (const f of forms) while (!f.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix.length >= 4 ? [prefix] : forms;
}

const checked = [];
for (const locale of locales.filter((l) => l !== 'en' && (!only || l === only))) {
  const dir = join(dist, locale);
  if (!existsSync(dir)) continue;
  const rules = [
    ...avoid.filter((a) => a.locale === locale).map((a) => ({ rule: `term:${a.term}`, why: a.why, pattern: wordPattern(a.words) })),
    ...style.filter((s) => s.locale === locale).map((s) => ({ rule: s.rule, why: s.why, pattern: s.pattern })),
  ];
  const paired = terms.filter((t) => t.pair).map((t) => ({
    id: t.id,
    en: wordPattern(t.enMatch ?? t.en),
    stems: stems(t, locale),
    word: t[locale].join(' / '),
  }));
  let count = 0;
  for (const file of pages(dir)) {
    const html = readFileSync(file, 'utf8');
    if (isStub(html)) continue;
    count++;
    const page = urlOf(file);
    const segs = segments(html);
    for (const text of segs) {
      for (const r of rules) {
        r.pattern.lastIndex = 0;
        for (const m of text.matchAll(r.pattern)) add({ locale, rule: r.rule, why: r.why, word: m[1], text, page });
      }
    }
    if (!flag('--pairs')) continue;
    const enFile = join(dist, relative(dir, file));
    if (!existsSync(enFile)) continue;
    const enSegs = segments(readFileSync(enFile, 'utf8'));
    const sameShape = enSegs.length === segs.length;
    for (const t of paired) {
      const has = (s) => { t.en.lastIndex = 0; return t.en.test(s); };
      const uses = (s) => t.stems.some((stem) => lower(s).includes(stem));
      if (sameShape) {
        enSegs.forEach((en, i) => {
          if (has(en) && !uses(segs[i]) && en !== segs[i]) {
            add({ locale, rule: `pair:${t.id}`, why: `English says "${t.id}", the app's word is "${t.word}"`, word: t.id, text: `${segs[i]}   [en: ${en}]`, page });
          }
        });
      } else {
        const enCount = enSegs.filter(has).length;
        const locCount = segs.filter(uses).length;
        if (enCount >= 2 && locCount < enCount / 2) {
          add({ locale, rule: `pair:${t.id}`, why: `English says "${t.id}", the app's word is "${t.word}"`, word: t.id, text: `whole page: English uses the term in ${enCount} places, the translation uses "${t.word}" in ${locCount}`, page });
        }
      }
    }
  }
  checked.push({ locale, count });
}

const list = [...findings.values()];
const failing = list.filter((f) => !f.rule.startsWith('pair:') && (flag('--strict') || enforce.includes(f.locale)));

console.log(`\n  App terms and form of address (term list from hubsell-client ${source.commit})`);
for (const { locale, count } of checked) {
  const mine = list.filter((f) => f.locale === locale);
  const hard = mine.filter((f) => !f.rule.startsWith('pair:'));
  const state = enforce.includes(locale) ? 'fails the build' : 'report only';
  console.log(`\n  ${locale}: ${count} pages, ${hard.length} finding(s) (${state})${flag('--pairs') ? `, ${mine.length - hard.length} to read against English` : ''}`);
  const byRule = new Map();
  for (const f of mine) (byRule.get(f.rule) ?? byRule.set(f.rule, []).get(f.rule)).push(f);
  for (const [rule, items] of byRule) {
    console.log(`${flag('--quiet') ? '' : '\n'}    ${rule}: ${items.length}   (${items[0].why})`);
    if (flag('--quiet') && !(enforce.includes(locale) && !rule.startsWith('pair:'))) continue;
    for (const f of items.slice(0, LIMIT)) {
      const where = [...f.pages];
      const text = f.text.length > 220 ? f.text.slice(0, 220) + '…' : f.text;
      console.log(`      "${f.word}"  ${where[0]}${where.length > 1 ? ` (+${where.length - 1} pages)` : ''}`);
      console.log(`         ${text}`);
    }
    if (items.length > LIMIT) console.log(`      … ${items.length - LIMIT} more (add --all)`);
  }
}
if (!checked.length) console.log('\n  No translated pages found in dist/.');

if (failing.length) {
  console.error(`\n  ${failing.length} finding(s) fail the build. Use the app's word (docs/20261113-1401-APP-TERMS.md),`);
  console.error('  or, when the text is right as it is (a customer quote, a competitor\'s "sequence"),');
  console.error('  add it to `allow` in scripts/20261113-1401-app-terms.config.mjs with the reason.\n');
  process.exit(1);
}
console.log('');
