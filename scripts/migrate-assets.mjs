#!/usr/bin/env node
/**
 * migrate-assets.mjs — Webflow CDN  ->  Cloudflare R2 asset migrator.
 *
 * What it does, in one idempotent pass:
 *   1. DISCOVER  every Webflow-CDN asset URL referenced by your sources.
 *      Sources can be live page URLs and/or local folders/files. When a source
 *      is a URL, any Webflow stylesheets it links are also fetched and scanned,
 *      so fonts/images referenced inside webflow.css are caught too.
 *   2. UPLOAD    each asset to R2 (skipping anything already there), with the
 *      correct Content-Type and a long immutable cache header. Webflow filenames
 *      are hash-prefixed, so they're used verbatim as flat R2 keys.
 *   3. MAP       writes asset-map.json  { oldWebflowUrl -> R2 publicUrl }.
 *   4. REWRITE   (with --rewrite) replaces every old URL with its R2 URL across
 *      your local text files in place.
 *
 * Because discovery is manifest-driven and uploads skip existing keys, you can
 * safely re-run this every phase — only new assets get processed.
 *
 * Only media/font/document assets are uploaded to R2. Webflow's .css/.js bundles
 * are intentionally NOT uploaded — those belong in the repo. (Their internal
 * font/image url()s ARE migrated, and rewritten when you scan the imported CSS.)
 *
 * Usage:
 *   # preview what would happen (no R2 writes, no creds needed):
 *   node scripts/migrate-assets.mjs --dry-run \
 *     --from https://www.hubsell.com --from ./src --from ./public
 *
 *   # do the upload (needs R2_* env vars):
 *   node scripts/migrate-assets.mjs \
 *     --from https://www.hubsell.com --from ./src --from ./public
 *
 *   # then repoint every reference in the repo to assets.hubsell.com:
 *   node scripts/migrate-assets.mjs --rewrite --from ./src --from ./public
 *
 * Env (only needed for upload; the website never reads these):
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET,
 *   R2_PUBLIC_BASE    (default https://assets.hubsell.com)
 *   R2_JURISDICTION   (optional; set to "eu" for EU-jurisdiction buckets,
 *                      "fedramp" for FedRAMP — leave unset for the default.
 *                      Adds the <jur> segment to the S3 API endpoint:
 *                      https://<account>.<jur>.r2.cloudflarestorage.com)
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { basename, extname, join, resolve } from 'node:path';
import mime from 'mime-types';
import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

// Webflow has used several CDN hostnames over the years.
const CDN_RE =
  /https?:\/\/(?:cdn\.prod\.website-files\.com|assets-global\.website-files\.com|assets\.website-files\.com|uploads-ssl\.webflow\.com|daks2k3a4ib2z\.cloudfront\.net)\/[^\s"'`)<>\\]+/g;

const ASSET_EXTS = new Set([
  'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'ico', 'bmp', 'tif', 'tiff',
  'mp4', 'webm', 'mov', 'm4v', 'mp3', 'wav', 'ogg',
  'woff', 'woff2', 'ttf', 'otf', 'eot', 'pdf',
]);

const CT_OVERRIDES = {
  avif: 'image/avif', webp: 'image/webp', svg: 'image/svg+xml', ico: 'image/x-icon',
  woff: 'font/woff', woff2: 'font/woff2', ttf: 'font/ttf', otf: 'font/otf',
  eot: 'application/vnd.ms-fontobject',
};

const TEXT_EXTS = new Set([
  'html', 'htm', 'css', 'js', 'mjs', 'cjs', 'ts', 'tsx', 'jsx', 'astro', 'vue',
  'svelte', 'json', 'md', 'mdx', 'txt', 'xml',
]);

// ---------------------------------------------------------------- args
const argv = process.argv.slice(2);
const flags = { from: [], rewrite: false, dryRun: false, out: 'asset-map.json', concurrency: 8 };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--from') flags.from.push(argv[++i]);
  else if (a === '--out') flags.out = argv[++i];
  else if (a === '--concurrency') flags.concurrency = Number(argv[++i]) || 8;
  else if (a === '--rewrite') flags.rewrite = true;
  else if (a === '--dry-run') flags.dryRun = true;
  else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
}
if (flags.from.length === 0) flags.from = ['./src', './public'];

const R2 = {
  accountId: process.env.R2_ACCOUNT_ID,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  bucket: process.env.R2_BUCKET,
  jurisdiction: (process.env.R2_JURISDICTION || '').trim().toLowerCase(),
  publicBase: (process.env.R2_PUBLIC_BASE || 'https://assets.hubsell.com').replace(/\/+$/, ''),
};

// ---------------------------------------------------------------- helpers
const isUrl = (s) => /^https?:\/\//i.test(s);
const log = (...a) => console.log(...a);
const warn = (...a) => console.warn('  ! ', ...a);

function printHelp() {
  log(readFileHeader());
}
function readFileHeader() {
  return 'See the comment block at the top of scripts/migrate-assets.mjs for usage.';
}

function keyFor(url) {
  const u = new URL(url);
  const raw = decodeURIComponent(basename(u.pathname));
  // Webflow filenames are hash-prefixed (already unique), so the human-readable
  // tail can be made URL-safe without risk of collision. This keeps every R2 key
  // free of spaces/encoded chars, so the public URL == the object key verbatim.
  const ext = extname(raw).toLowerCase();
  const stem = raw.slice(0, raw.length - extname(raw).length);
  const safeStem = stem
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[^A-Za-z0-9._-]+/g, '-')                 // unsafe runs -> hyphen
    .replace(/-{2,}/g, '-')                             // collapse repeats
    .replace(/^[-.]+|[-.]+$/g, '');                     // trim ends
  return (safeStem || 'asset') + ext;
}
function extOf(name) {
  return extname(name).slice(1).toLowerCase();
}
function isAssetUrl(url) {
  try { return ASSET_EXTS.has(extOf(keyFor(url))); } catch { return false; }
}
function contentTypeFor(key) {
  const ext = extOf(key);
  return CT_OVERRIDES[ext] || mime.lookup(key) || 'application/octet-stream';
}
function cleanUrl(url) {
  // strip any trailing punctuation the regex may have grabbed from CSS/markup
  return url.replace(/[)\]}'",;]+$/, '');
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'hubsell-asset-migrator' } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}
async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'hubsell-asset-migrator' } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function localTextFiles(sources) {
  const files = [];
  for (const s of sources) {
    const abs = resolve(s);
    const st = await stat(abs).catch(() => null);
    if (!st) { warn(`source not found: ${s}`); continue; }
    if (st.isDirectory()) files.push(...(await walk(abs)).filter((f) => TEXT_EXTS.has(extOf(f))));
    else files.push(abs);
  }
  return files;
}

async function pool(items, n, fn) {
  const results = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) || 1 }, async () => {
    while (i < items.length) {
      const idx = i++;
      try { results[idx] = await fn(items[idx], idx); }
      catch (e) { results[idx] = { error: e }; }
    }
  });
  await Promise.all(workers);
  return results;
}

// ---------------------------------------------------------------- discover
async function discover() {
  const docs = [];
  const visited = new Set();
  const queue = [...flags.from];

  while (queue.length) {
    const src = queue.shift();
    if (visited.has(src)) continue;
    visited.add(src);

    if (isUrl(src)) {
      let text;
      try { text = await fetchText(src); } catch (e) { warn(`fetch failed ${src}: ${e.message}`); continue; }
      docs.push(text);
      // enqueue Webflow stylesheets so their internal url() assets are captured
      for (const m of text.matchAll(CDN_RE)) {
        const u = cleanUrl(m[0]);
        if (u.split('?')[0].toLowerCase().endsWith('.css') && !visited.has(u)) queue.push(u);
      }
    } else {
      const abs = resolve(src);
      const st = await stat(abs).catch(() => null);
      if (!st) { warn(`source not found: ${src}`); continue; }
      if (st.isDirectory()) {
        for (const f of (await walk(abs)).filter((f) => TEXT_EXTS.has(extOf(f)))) {
          docs.push(await readFile(f, 'utf8'));
        }
      } else {
        docs.push(await readFile(abs, 'utf8'));
      }
    }
  }

  const assets = new Map(); // url -> key
  const keyOwners = new Map(); // key -> url (collision detection)
  for (const text of docs) {
    for (const m of text.matchAll(CDN_RE)) {
      const url = cleanUrl(m[0]);
      if (!isAssetUrl(url)) continue;
      if (assets.has(url)) continue;
      const key = keyFor(url);
      if (keyOwners.has(key) && keyOwners.get(key) !== url) {
        warn(`key collision "${key}" from two URLs — keeping first:\n      ${keyOwners.get(key)}\n      ${url}`);
        continue;
      }
      keyOwners.set(key, url);
      assets.set(url, key);
    }
  }
  return assets;
}

// ---------------------------------------------------------------- upload
function makeClient() {
  const missing = ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET']
    .filter((k) => !process.env[k]);
  if (missing.length) {
    console.error(`\nMissing R2 env vars: ${missing.join(', ')}\n` +
      `Set them (see .env.example) or run with --dry-run to preview.\n`);
    process.exit(1);
  }
  const jur = R2.jurisdiction ? `.${R2.jurisdiction}` : '';
  return new S3Client({
    region: 'auto',
    endpoint: `https://${R2.accountId}${jur}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2.accessKeyId, secretAccessKey: R2.secretAccessKey },
  });
}

async function existsInR2(s3, key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2.bucket, Key: key }));
    return true;
  } catch (e) {
    const code = e?.$metadata?.httpStatusCode;
    if (code === 404 || e?.name === 'NotFound' || e?.name === 'NoSuchKey') return false;
    throw e;
  }
}

async function uploadOne(s3, url, key) {
  if (await existsInR2(s3, key)) return 'skipped';
  const body = await fetchBuffer(url);
  await s3.send(new PutObjectCommand({
    Bucket: R2.bucket,
    Key: key,
    Body: body,
    ContentType: contentTypeFor(key),
    CacheControl: 'public, max-age=31536000, immutable',
  }));
  return 'uploaded';
}

// ---------------------------------------------------------------- rewrite
async function rewrite(map) {
  const files = await localTextFiles(flags.from.filter((s) => !isUrl(s)));
  let changedFiles = 0;
  let replacements = 0;
  for (const f of files) {
    let txt = await readFile(f, 'utf8');
    let n = 0;
    for (const [oldUrl, newUrl] of Object.entries(map)) {
      if (txt.includes(oldUrl)) {
        const before = txt;
        txt = txt.split(oldUrl).join(newUrl);
        if (txt !== before) n++;
      }
    }
    if (n) { await writeFile(f, txt); changedFiles++; replacements += n; log(`  rewrote ${f} (${n})`); }
  }
  return { changedFiles, replacements };
}

// ---------------------------------------------------------------- main
async function main() {
  log(`\nDiscovering Webflow assets from:\n  ${flags.from.join('\n  ')}\n`);
  const assets = await discover();
  const urls = [...assets.keys()].sort();
  log(`Found ${urls.length} unique asset(s).`);

  // Build the map up front (also used by --rewrite, and printed in dry-run).
  const map = {};
  for (const url of urls) map[url] = `${R2.publicBase}/${assets.get(url)}`;

  if (flags.dryRun) {
    log(`\n--dry-run: no R2 writes. Planned mapping:\n`);
    for (const url of urls) log(`  ${url}\n    -> ${map[url]}`);
    await writeFile(flags.out, JSON.stringify(map, null, 2));
    log(`\nWrote ${flags.out} (${urls.length} entries). Re-run without --dry-run to upload.\n`);
    return;
  }

  if (flags.rewrite && urls.length === 0) {
    // pure rewrite from an existing map
    let existing = {};
    try { existing = JSON.parse(await readFile(flags.out, 'utf8')); }
    catch { console.error(`No assets discovered and no ${flags.out} to rewrite from.`); process.exit(1); }
    const r = await rewrite(existing);
    log(`\nRewrite complete: ${r.replacements} replacement(s) across ${r.changedFiles} file(s).\n`);
    return;
  }

  const s3 = makeClient();
  log(`\nUploading to R2 bucket "${R2.bucket}" (public base ${R2.publicBase}) ...`);
  const results = await pool(urls, flags.concurrency, async (url) => uploadOne(s3, url, assets.get(url)));

  let uploaded = 0, skipped = 0, failed = 0;
  results.forEach((r, i) => {
    if (r === 'uploaded') uploaded++;
    else if (r === 'skipped') skipped++;
    else { failed++; warn(`failed: ${urls[i]} — ${r?.error?.message || r}`); }
  });

  await writeFile(flags.out, JSON.stringify(map, null, 2));
  log(`\nDone. uploaded=${uploaded} skipped=${skipped} failed=${failed}. Map -> ${flags.out}`);

  if (flags.rewrite) {
    log(`\nRewriting local references ...`);
    const r = await rewrite(map);
    log(`Rewrite complete: ${r.replacements} replacement(s) across ${r.changedFiles} file(s).`);
  } else {
    log(`\nNext: rewrite references with\n  node scripts/migrate-assets.mjs --rewrite --from ./src --from ./public\n`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
