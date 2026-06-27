#!/usr/bin/env node
/**
 * csv-to-insights.mjs — convert the Webflow "Blog Posts" CSV export into Astro
 * content-collection markdown files at src/content/insights/<slug>.md.
 *
 * One .md per post: YAML frontmatter (the metadata) + the post body as raw HTML.
 * The post template renders the body with set:html, so Markdown never touches it.
 *
 * What it does to each post body (faithful migration, structure fixes only):
 *   - rewrites every Webflow CDN image URL to its R2 URL, looked up from
 *     insights-asset-manifest.json (cover and thumbnail are joined by Item ID;
 *     any inline body image is matched by source URL). An inline image not yet
 *     in the manifest gets a new manifest entry so the next R2 upload grabs it.
 *   - turns internal hubsell.com links into relative links (same as the legal
 *     pages); external citation links stay absolute.
 *   - demotes body headings one level (h1 -> h2, ...) so they do not collide
 *     with the post title's single h1.
 *   - strips zero-width export characters and normalises non-breaking spaces.
 *   - keeps the Loom iframe and every other tag as-is.
 * The Sources field (image credits / references) is cleaned and its bare URLs
 * are linked, then stored in frontmatter and rendered as a block under the post.
 *
 * Read time is computed from the body at 200 words per minute.
 * Words are never rewritten. Only structure and links are adjusted.
 *
 * Usage (from the repo root, no extra deps needed):
 *   node scripts/csv-to-insights.mjs --csv ~/Downloads/hubsell_CMS_collections_-_Blog_Posts_-_69ba99af89c8c7b11a029cd7.csv
 *   # options:
 *   --out src/content/insights        (output folder)
 *   --manifest insights-asset-manifest.json
 *   --clean                           (delete existing .md in --out first)
 *   --dry-run                         (report only, write nothing)
 */
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

// ---- args ----
const argv = process.argv.slice(2);
const flags = { csv: '', out: 'src/content/insights', manifest: 'insights-asset-manifest.json', clean: false, dryRun: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--csv') flags.csv = argv[++i];
  else if (a === '--out') flags.out = argv[++i];
  else if (a === '--manifest') flags.manifest = argv[++i];
  else if (a === '--clean') flags.clean = true;
  else if (a === '--dry-run') flags.dryRun = true;
  else if (a === '--help' || a === '-h') { console.log('See header of scripts/csv-to-insights.mjs'); process.exit(0); }
}

// auto-find a Blog Posts CSV in the cwd if none was given
if (!flags.csv) {
  try {
    const here = await readdir('.');
    const guess = here.find((f) => /blog.?posts.*\.csv$/i.test(f));
    if (guess) { flags.csv = guess; console.log(`No --csv given; using ./${guess}`); }
  } catch {}
}
if (!flags.csv || !existsSync(flags.csv)) {
  console.error('\nMissing CSV. Pass it with:\n  node scripts/csv-to-insights.mjs --csv <path-to-blog-posts.csv>\n');
  process.exit(1);
}

// ---- a small RFC-4180 CSV parser (handles "" escaping and commas/quotes in fields) ----
function parseCSV(text) {
  text = text.replace(/\r\n?/g, '\n');
  const rows = [];
  let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQ = false;
      } else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// ---- helpers ----
const cleanText = (s) => (s || '')
  .replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '') // zero-width chars
  .replace(/\u00a0/g, ' ')                          // non-breaking space -> space
  .trim();

const stripTags = (h) => (h || '').replace(/<[^>]+>/g, ' ');

function readTimeFromText(text) {
  const words = stripTags(text).trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function toISODate(webflowDate) {
  const d = new Date(cleanText(webflowDate));
  return Number.isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
}

const WF_URL = /https:\/\/cdn\.prod\.website-files\.com\/[^"'\s<>]+/g;
const CTYPE = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp', avif: 'image/avif', svg: 'image/svg+xml' };

function keyFromUrl(url) {
  const base = decodeURIComponent(url.split('/').pop());
  return 'insights/' + base.replace(/[\s-]+/g, '-'); // match the existing manifest naming
}
const PUBLIC_BASE = 'https://assets.hubsell.com/';

// ---- transforms on the post body ----
function demoteHeadings(html) {
  return html.replace(/<(\/?)(h)([1-6])\b/gi, (_m, slash, h, n) => `<${slash}${h}${Math.min(6, parseInt(n, 10) + 1)}`);
}
function rewriteImages(html, urlMap) {
  return html.replace(WF_URL, (u) => urlMap[u] || u);
}
function relativeInternalLinks(html) {
  return html.replace(/href="https?:\/\/(?:www\.)?hubsell\.com(\/[^"]*)?"/gi, (_m, p) => `href="${p || '/'}"`);
}
// Known post slugs, filled after the CSV is parsed. Used to repoint broken
// internal links at their real /insights/<slug>/ path.
const SLUGS = new Set();
function fixBrokenHrefs(html) {
  // Leave good links alone: relative (/...), anchors, mailto/tel, and real
  // external URLs (valid host). A broken link is either a bare non-/ string or
  // an absolute URL whose "host" has spaces or % (the title pasted as a URL).
  // Those get slugified; if the slug is a known post, point at /insights/.
  return html.replace(/href="([^"]*)"/g, (m, h) => {
    if (/^(mailto:|tel:|#|\/)/i.test(h)) return m;
    const abs = h.match(/^https?:\/\/([^/?#]*)/i);
    if (abs) {
      const host = abs[1];
      if (host && !/[\s%]/.test(host) && /^[a-z0-9.-]+(?::\d+)?$/i.test(host)) return m; // real external link
    }
    let slug = h.replace(/^https?:\/\//i, '');
    try { slug = decodeURIComponent(slug); } catch {}
    slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    if (!slug) return m;
    return SLUGS.has(slug) ? `href="/insights/${slug}/"` : `href="/${slug}"`;
  });
}
function transformBody(html, urlMap) {
  let out = html || '';
  out = rewriteImages(out, urlMap);
  out = relativeInternalLinks(out);
  out = fixBrokenHrefs(out);
  out = demoteHeadings(out);
  out = out.replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '').replace(/\u00a0/g, ' ');
  return out.trim();
}
function transformSources(html) {
  let out = (html || '').replace(/[\u200b\u200c\u200d\u2060\ufeff]/g, '').replace(/\u00a0/g, ' ');
  // link bare URLs that are plain text (preceded by > or whitespace, not by ="...)
  out = out.replace(/(>|\s)(https?:\/\/[^\s<]+)/g, (_m, pre, url) => `${pre}<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
  return out.trim();
}

// ---- load CSV + manifest ----
const rows = parseCSV(await readFile(flags.csv, 'utf8'));
const header = rows[0].map((h) => h.trim());
const idx = (name) => header.indexOf(name);
const need = ['Name', 'Slug', 'Item ID', 'Published On', 'Snippet', 'Post Body', 'Post Summary', 'Main Image', 'Thumbnail image', 'Featured?', 'Sources'];
const missingCols = need.filter((n) => idx(n) === -1);
if (missingCols.length) { console.error('CSV is missing expected columns: ' + missingCols.join(', ')); process.exit(1); }
const data = rows.slice(1).filter((r) => r.length >= header.length && (r[idx('Slug')] || '').trim());
for (const r of data) SLUGS.add((r[idx('Slug')] || '').trim());

let manifest = [];
if (existsSync(flags.manifest)) manifest = JSON.parse(await readFile(flags.manifest, 'utf8'));
const mainById = {}, thumbById = {}, urlMap = {};
for (const m of manifest) {
  urlMap[m.sourceUrl] = m.publicUrl;
  if (m.kind === 'main') mainById[m.id] = m.publicUrl;
  if (m.kind === 'thumb') thumbById[m.id] = m.publicUrl;
}

// pre-scan: register any body image URL not already in the manifest (e.g. inline images)
const additions = [];
const seenKeys = new Set(manifest.map((m) => m.key));
for (const r of data) {
  const body = r[idx('Post Body')] || '';
  for (const u of body.match(WF_URL) || []) {
    if (urlMap[u]) continue;
    const key = keyFromUrl(u);
    const publicUrl = PUBLIC_BASE + key; // key already starts with "insights/"
    urlMap[u] = publicUrl;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      const ext = key.split('.').pop().toLowerCase();
      const entry = { id: r[idx('Item ID')], kind: 'inline', prefix: 'insights', contentType: CTYPE[ext] || 'application/octet-stream', sourceUrl: u, key, publicUrl };
      additions.push(entry);
      manifest.push(entry);
    }
  }
}

// ---- prepare output dir ----
if (!flags.dryRun) {
  await mkdir(flags.out, { recursive: true });
  if (flags.clean) {
    for (const f of await readdir(flags.out)) if (f.endsWith('.md')) await unlink(path.join(flags.out, f));
  }
}

// ---- write one file per post ----
const yaml = (v) => JSON.stringify(v); // JSON strings are valid YAML flow scalars
let written = 0, noImage = 0, emptyBody = 0;
for (const r of data) {
  const get = (c) => r[idx(c)] ?? '';
  const slug = get('Slug').trim();
  const title = cleanText(get('Name'));
  const description = cleanText(get('Snippet'));
  const summary = cleanText(get('Post Summary'));
  const publishedAt = toISODate(get('Published On'));
  const featured = get('Featured?').trim().toUpperCase() === 'TRUE';
  const itemId = get('Item ID');
  const coverImage = mainById[itemId] || '';
  const thumbnail = thumbById[itemId] || '';
  const rawBody = get('Post Body');
  const body = transformBody(rawBody, urlMap);
  const sources = transformSources(get('Sources'));
  const readTime = readTimeFromText(rawBody || summary);

  if (!coverImage && !thumbnail) noImage++;
  if (!body) emptyBody++;

  const fm = ['---'];
  fm.push(`title: ${yaml(title)}`);
  if (description) fm.push(`description: ${yaml(description)}`);
  if (summary) fm.push(`summary: ${yaml(summary)}`);
  if (publishedAt) fm.push(`publishedAt: ${publishedAt}`);
  if (coverImage) fm.push(`coverImage: ${yaml(coverImage)}`);
  if (thumbnail) fm.push(`thumbnail: ${yaml(thumbnail)}`);
  if (readTime) fm.push(`readTime: ${yaml(readTime)}`);
  fm.push(`featured: ${featured}`);
  if (sources) fm.push(`sources: ${yaml(sources)}`);
  fm.push('draft: false');
  fm.push('---');

  const file = fm.join('\n') + '\n\n' + body + '\n';
  if (!flags.dryRun) await writeFile(path.join(flags.out, `${slug}.md`), file, 'utf8');
  written++;
}

// ---- write back the manifest if we added inline images ----
if (additions.length && !flags.dryRun) {
  await writeFile(flags.manifest, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

console.log(`\nInsights conversion ${flags.dryRun ? '(dry run) ' : ''}done.`);
console.log(`  posts written:        ${written}`);
console.log(`  posts with no image:  ${noImage}`);
console.log(`  posts with empty body:${emptyBody}`);
console.log(`  manifest additions:   ${additions.length}${additions.length ? ' (' + additions.map((a) => a.key).join(', ') + ')' : ''}`);
console.log(`  output folder:        ${flags.out}`);
