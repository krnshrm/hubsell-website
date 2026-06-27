/**
 * csv-to-customerstories.mjs
 *
 * Converts the Webflow "Customer Stories" CSV export into one Markdown file
 * per story under src/content/customerstories/<slug>.md.
 *
 * Each file: YAML frontmatter (the metadata) + the story body as raw HTML.
 *
 * What it does to each row:
 *   - maps the champion photo ("Customer image") to its R2 avatar URL when we
 *     already have one on R2; otherwise leaves the source URL so the image
 *     still loads (Sensolus + Staffbase photos are added to R2 later).
 *   - rewrites absolute hubsell.com links in the body to relative paths.
 *   - repoints the one broken {{template-variable}} link to the story page.
 *   - strips zero-width export characters and normalises non-breaking spaces.
 *   - collects the three result metric/name pairs into a `results` list.
 *
 * Re-runnable. Usage:
 *   node scripts/csv-to-customerstories.mjs --csv <file> [--clean]
 * If --csv is omitted it looks for a *Customer_Stories*.csv in the repo root,
 * the current folder, and ~/Downloads.
 */
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

// ---- args ----
const argv = process.argv.slice(2);
const flags = { csv: '', out: 'src/content/customerstories', clean: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--csv') flags.csv = argv[++i];
  else if (a === '--out') flags.out = argv[++i];
  else if (a === '--clean') flags.clean = true;
}

// auto-find a Customer Stories CSV if none was given
if (!flags.csv) {
  const dirs = ['.', process.cwd(), path.join(homedir(), 'Downloads')];
  for (const d of dirs) {
    try {
      const hit = (await readdir(d)).find((f) => /customer.?stories/i.test(f) && f.endsWith('.csv'));
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

// Champion photos we already have on R2 (keyed by the human part of the source filename).
const AVATAR = {
  'richard-wood': 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp',
  'laurent-schauvliege': 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif',
  'rachel-chan': 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif',
  'mark-grasmayer': 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif',
  // ee-sensolus, pm-staffbase: not on R2 yet — source URL kept until those are uploaded.
};
function mapAvatar(url) {
  const u = cleanText(url);
  if (!u) return '';
  const base = u.split('/').pop().replace(/\.[a-z0-9]+$/i, '');
  const key = base.split('_').pop().toLowerCase();
  return AVATAR[key] || u;
}

// ---- transforms on the story body ----
function relativeInternalLinks(html) {
  return html.replace(/href="https?:\/\/(?:www\.)?hubsell\.com(\/[^"]*)?"/gi, (_m, p) => `href="${p || '/'}"`);
}
// repoint a broken {{...}} / %7B%7B...%7D%7D export link at the story page itself
function fixBrokenHref(html, slug) {
  return html.replace(/href="([^"]*)"/g, (m, h) =>
    (/\{\{|%7B%7B/i.test(h)) ? `href="/customerstories/${slug}/"` : m);
}
function transformBody(html, slug) {
  let out = (html || '').replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '').replace(/\u00a0/g, ' ');
  out = relativeInternalLinks(out);
  out = fixBrokenHref(out, slug);
  return out.trim();
}

// ---- load CSV ----
const rows = parseCSV(await readFile(flags.csv, 'utf8'));
const header = rows[0].map((h) => h.trim());
const col = (name) => header.indexOf(name);
const need = ['Name', 'Slug', 'Snippet', 'Testimonial', 'Customer champion', 'Custmer champion title', 'Customer name', 'Customer image', 'Customer story content'];
const missing = need.filter((n) => col(n) === -1);
if (missing.length) { console.error('CSV is missing expected columns: ' + missing.join(', ')); process.exit(1); }

const data = rows.slice(1).filter((r) =>
  r.length >= header.length &&
  (r[col('Slug')] || '').trim() &&
  String(r[col('Draft')]).toLowerCase() !== 'true' &&
  String(r[col('Archived')]).toLowerCase() !== 'true');

// ---- prepare output dir ----
await mkdir(flags.out, { recursive: true });
if (flags.clean) {
  for (const f of await readdir(flags.out)) if (f.endsWith('.md')) await unlink(path.join(flags.out, f));
}

// ---- write one file per story ----
const yaml = (v) => JSON.stringify(v); // JSON strings are valid YAML flow scalars
let written = 0;
for (const r of data) {
  const slug = cleanText(r[col('Slug')]);
  const get = (n) => cleanText(r[col(n)]);

  const results = [];
  for (const i of [1, 2, 3]) {
    const metric = get(`Result ${i} metric`);
    const label = get(`Result ${i} name`);
    if (metric || label) results.push({ metric, label });
  }

  const fm = [];
  fm.push('---');
  fm.push('title: ' + yaml(get('Name')));
  if (get('Snippet')) fm.push('description: ' + yaml(get('Snippet')));
  if (get('Customer name')) fm.push('company: ' + yaml(get('Customer name')));
  if (get('Customer champion')) fm.push('champion: ' + yaml(get('Customer champion')));
  if (get('Custmer champion title')) fm.push('championTitle: ' + yaml(get('Custmer champion title')));
  const photo = mapAvatar(r[col('Customer image')]);
  if (photo) fm.push('championImage: ' + yaml(photo));
  if (get('Testimonial')) fm.push('testimonial: ' + yaml(get('Testimonial')));
  if (results.length) {
    fm.push('results:');
    for (const x of results) {
      fm.push('  - metric: ' + yaml(x.metric));
      fm.push('    label: ' + yaml(x.label));
    }
  }
  fm.push('---');

  const body = transformBody(r[col('Customer story content')], slug);
  await writeFile(path.join(flags.out, slug + '.md'), fm.join('\n') + '\n\n' + body + '\n', 'utf8');
  written++;
  console.log('wrote ' + slug + '.md  (' + results.length + ' results, photo: ' + (photo.includes('assets.hubsell.com') ? 'R2' : 'source') + ')');
}
console.log('\nDone. ' + written + ' customer stories written to ' + flags.out);
