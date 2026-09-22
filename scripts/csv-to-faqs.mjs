/**
 * csv-to-faqs.mjs
 *
 * Converts the Webflow "FAQs" CSV export into a single data file,
 * src/data/faqs.ts, which is the one source for FAQs: the homepage section shows
 * the entries flagged `onHomepage`, and the /faqs page shows them all.
 *
 * Per row it cleans export junk, rewrites absolute hubsell.com links to relative,
 * and reads the "Show on home page?" flag. It skips archived/draft rows and any
 * leftover "(old)" duplicates (slug ending in -old). Re-runnable.
 *
 * Usage: node scripts/csv-to-faqs.mjs [--csv <file>]
 * With no --csv it looks for a *FAQs*.csv in the repo root, the current folder, and ~/Downloads.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

const argv = process.argv.slice(2);
let csvPath = '';
for (let i = 0; i < argv.length; i++) if (argv[i] === '--csv') csvPath = argv[++i];
if (!csvPath) {
  for (const d of ['.', process.cwd(), path.join(homedir(), 'Downloads')]) {
    try {
      const hit = (await readdir(d)).find((f) => /faq/i.test(f) && f.endsWith('.csv'));
      if (hit) { csvPath = path.join(d, hit); break; }
    } catch { /* skip */ }
  }
}
if (!csvPath || !existsSync(csvPath)) { console.error('No FAQs CSV found. Pass one with --csv <file>.'); process.exit(1); }

// minimal RFC-4180 parser
function parseCSV(text) {
  const rows = []; let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const cleanText = (s) => (s || '').replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '').replace(/\u00a0/g, ' ').trim();
const cleanHtml = (s) => cleanText(s).replace(/href="https?:\/\/(?:www\.)?hubsell\.com(\/[^"]*)?"/gi, (_m, p) => `href="${p || '/'}"`);
const truthy = (s) => /^(true|yes|1)$/i.test(cleanText(s));

const rows = parseCSV(await readFile(csvPath, 'utf8'));
const header = rows[0].map((h) => h.trim());
const col = (n) => header.indexOf(n);
for (const need of ['Question', 'Slug', 'Answer']) {
  if (col(need) === -1) { console.error('CSV missing column: ' + need); process.exit(1); }
}
const homeCol = header.findIndex((h) => /show on home ?page/i.test(h));

const items = rows.slice(1)
  .filter((r) => r.length >= header.length)
  .map((r) => ({
    question: cleanText(r[col('Question')]),
    slug: cleanText(r[col('Slug')]),
    answer: cleanHtml(r[col('Answer')]),
    onHomepage: homeCol > -1 ? truthy(r[homeCol]) : false,
    _archived: truthy(r[col('Archived')]),
    _draft: truthy(r[col('Draft')]),
  }))
  .filter((f) => f.question && f.slug)
  .filter((f) => !f._archived && !f._draft)
  .filter((f) => !/-old$/.test(f.slug) && !/\(old\)\s*$/i.test(f.question)); // drop leftover duplicates

const j = (v) => JSON.stringify(v);
const body = items.map((f) =>
  `  {\n    question: ${j(f.question)},\n    slug: ${j(f.slug)},\n    answer: ${j(f.answer)},\n    onHomepage: ${f.onHomepage},\n  },`
).join('\n');

const out = `// Auto-generated from the Webflow FAQs export by scripts/csv-to-faqs.mjs.
// Single source for FAQs: the homepage section (Faq.astro) shows the \`onHomepage\`
// entries; the /faqs page shows them all. Edit here or re-run the converter.
export interface Faq {
  question: string;
  slug: string;
  answer: string; // HTML
  onHomepage: boolean;
}

export const faqs: Faq[] = [
${body}
];

export const homeFaqs = faqs.filter((f) => f.onHomepage);
`;

await writeFile('src/data/faqs.ts', out, 'utf8');
console.log(`Wrote src/data/faqs.ts — ${items.length} FAQs (${items.filter((f) => f.onHomepage).length} on the homepage).`);
