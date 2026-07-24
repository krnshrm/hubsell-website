// ============================= LEARNING NOTES =============================
// A NODE UTILITY SCRIPT, not part of the website build. Files in scripts/
// are run by hand via the package.json "scripts" entries (npm run <name>)
// for one-off jobs like migrating assets or converting exports. Read
// package.json to see which command runs which file. Safe to study, but
// nothing on the site imports them.
// ==========================================================================
/**
 * csv-to-comparisons.mjs
 *
 * Converts the Webflow "Comparisons" CSV export into one Markdown file per
 * competitor under src/content/comparisons/<slug>.md.
 *
 * A comparison is NOT a single rich-text body (unlike the blog and stories).
 * It is a set of named sections (TL;DR, Core difference, Feature table, Data
 * quality, Pricing, the two "Who should choose" columns, CTA, Sources). So every
 * section maps to its own YAML frontmatter field, and the Markdown body is left
 * empty. The HTML sections are written as JSON-quoted scalars (valid YAML) and
 * rendered later with set:html.
 *
 * What it does to each row:
 *   - strips zero-width export characters and normalises non-breaking spaces.
 *   - rewrites absolute hubsell.com links in any HTML field to relative paths.
 *   - formats the "Last fact-checked" date (a JS Date string) to "June 13, 2026".
 *   - builds EVERY row. The Comparisons rows are all marked draft in Webflow
 *     because they were drafted there and never launched; they are the launch
 *     pages, so draft/archived are not used to filter.
 *
 * Re-runnable. Usage:
 *   node scripts/csv-to-comparisons.mjs --csv <file> [--clean]
 * If --csv is omitted it looks for a *Comparisons*.csv in the repo root, the
 * current folder, and ~/Downloads.
 */
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

// ---- args ----
const argv = process.argv.slice(2);
const flags = { csv: '', out: 'src/content/comparisons', clean: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--csv') flags.csv = argv[++i];
  else if (a === '--out') flags.out = argv[++i];
  else if (a === '--clean') flags.clean = true;
}

// auto-find a Comparisons CSV if none was given
if (!flags.csv) {
  const dirs = ['.', process.cwd(), path.join(homedir(), 'Downloads')];
  for (const d of dirs) {
    try {
      const hit = (await readdir(d)).find((f) => /comparison/i.test(f) && f.endsWith('.csv'));
      if (hit) { flags.csv = path.join(d, hit); break; }
    } catch { /* dir may not exist */ }
  }
}
if (!flags.csv || !existsSync(flags.csv)) {
  console.error('No CSV found. Pass one with --csv <file>.');
  process.exit(1);
}

// ---- a small RFC-4180 CSV parser (handles "" escaping and commas/quotes in fields) ----
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
      else field += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// ---- helpers ----
const cleanText = (s) => (s || '')
  .replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '') // zero-width chars
  .replace(/\u00a0/g, ' ')                           // non-breaking space
  .trim();

// rewrite absolute hubsell.com links to relative paths (same as the other converters)
const relativeInternalLinks = (html) =>
  html.replace(/href="https?:\/\/(?:www\.)?hubsell\.com(\/[^"]*)?"/gi, (_m, p) => `href="${p || '/'}"`);

// clean an HTML field: strip export junk, relink, trim. Structure is left intact.
function cleanHtml(html) {
  let out = (html || '').replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '').replace(/\u00a0/g, ' ');
  out = relativeInternalLinks(out);
  return out.trim();
}

// "Sat Jun 13 2026 00:00:00 GMT+0000 (...)" -> "June 13, 2026" (UTC, deterministic)
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function formatDate(raw) {
  const s = cleanText(raw);
  if (!s) return '';
  const d = new Date(s);
  if (isNaN(d.getTime())) return s; // leave as-is if unparseable
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

// ---- load CSV ----
const rows = parseCSV(await readFile(flags.csv, 'utf8'));
const header = rows[0].map((h) => h.trim());
const col = (name) => header.indexOf(name);
const need = ['Name', 'Slug', 'Hero subhead', 'TL;DR', 'Core difference', 'Feature table'];
const missing = need.filter((n) => col(n) === -1);
if (missing.length) { console.error('CSV is missing expected columns: ' + missing.join(', ')); process.exit(1); }

// build every row that has a slug (draft/archived are NOT used to filter — see header)
const data = rows.slice(1).filter((r) =>
  r.length >= header.length && (r[col('Slug')] || '').trim());

// ---- prepare output dir ----
await mkdir(flags.out, { recursive: true });
if (flags.clean) {
  for (const f of await readdir(flags.out)) if (f.endsWith('.md')) await unlink(path.join(flags.out, f));
}

// ---- write one file per comparison ----
const yaml = (v) => JSON.stringify(v); // JSON strings are valid YAML flow scalars (handles HTML safely)
let written = 0;
for (const r of data) {
  const slug = cleanText(r[col('Slug')]);
  const txt = (n) => cleanText(r[col(n)]);          // plain-text field
  const html = (n) => cleanHtml(r[col(n)]);          // HTML field (set:html later)

  // (field, value) pairs, in render order. Empty values are skipped.
  const pairs = [
    ['title', txt('Name')],
    ['category', txt('Competitor category')],
    ['competitorLogo', cleanText(r[col('Competitor logo')])],
    ['hubsellLogo', cleanText(r[col('hubsell logo')])],
    ['metaTitle', txt('Meta title')],
    ['metaDescription', txt('Meta description')],
    ['heroSubhead', txt('Hero subhead')],
    ['tldr', html('TL;DR')],
    ['coreDifference', html('Core difference')],
    ['featureTable', html('Feature table')],
    ['dataQuality', html('Data quality')],
    ['pricing', html('Pricing comparison')],
    ['chooseCompetitor', html('Who should choose the competitor')],
    ['chooseHubsell', html('Who should choose hubsell')],
    ['ctaHeading', txt('CTA heading')],
    ['ctaButtonText', txt('CTA button text')],
    ['ctaLink', txt('CTA link')],
    ['lastFactChecked', formatDate(r[col('Last fact-checked')])],
    ['sources', html('Sources')],
  ];

  const fm = ['---'];
  for (const [k, v] of pairs) if (v) fm.push(`${k}: ${yaml(v)}`);
  fm.push('---');

  // a comparison has no single body; all content lives in the fields above.
  await writeFile(path.join(flags.out, slug + '.md'), fm.join('\n') + '\n', 'utf8');
  written++;
  const hasTable = /<table/i.test(html('Feature table'));
  console.log(`wrote ${slug}.md  (${txt('Competitor category') || 'no category'}, feature table: ${hasTable ? 'yes' : 'NO'})`);
}
console.log('\nDone. ' + written + ' comparisons written to ' + flags.out);
