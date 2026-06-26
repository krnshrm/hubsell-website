#!/usr/bin/env node
/**
 * migrate-from-manifest.mjs — upload the full Webflow asset library to R2, foldered.
 *
 * Unlike migrate-assets.mjs (which crawls pages for referenced URLs), this reads a
 * manifest produced from the Webflow Assets API — the COMPLETE library, 219 assets,
 * each already mapped to a folder prefix (logos/, avatars/, brand/, ...). It downloads
 * each asset's ORIGINAL (not Webflow's -p-500 resize variants — Astro will handle
 * responsive sizing) and uploads it to its foldered R2 key, skipping anything already
 * there. Idempotent: safe to re-run; only missing keys get uploaded.
 *
 * Usage:
 *   # preview (no creds, no writes):
 *   node scripts/migrate-from-manifest.mjs --dry-run
 *   # upload (needs the R2_* env vars, incl. R2_JURISDICTION=eu):
 *   node scripts/migrate-from-manifest.mjs
 *
 * Env (same as migrate-assets.mjs):
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET,
 *   R2_JURISDICTION (eu)   R2_PUBLIC_BASE (default https://assets.hubsell.com)
 */
import { readFile } from 'node:fs/promises';
import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

const argv = process.argv.slice(2);
const flags = { manifest: 'webflow-asset-manifest.json', concurrency: 8, dryRun: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--manifest') flags.manifest = argv[++i];
  else if (a === '--concurrency') flags.concurrency = Number(argv[++i]) || 8;
  else if (a === '--dry-run') flags.dryRun = true;
  else if (a === '--help' || a === '-h') { console.log('See header of scripts/migrate-from-manifest.mjs'); process.exit(0); }
}

const R2 = {
  accountId: process.env.R2_ACCOUNT_ID,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  bucket: process.env.R2_BUCKET,
  jurisdiction: (process.env.R2_JURISDICTION || '').trim().toLowerCase(),
};

const warn = (...a) => console.warn('  ! ', ...a);

function makeClient() {
  const missing = ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET'].filter((k) => !process.env[k]);
  if (missing.length) { console.error(`\nMissing R2 env vars: ${missing.join(', ')}\nRun with --dry-run to preview without creds.\n`); process.exit(1); }
  const jur = R2.jurisdiction ? `.${R2.jurisdiction}` : '';
  return new S3Client({
    region: 'auto',
    endpoint: `https://${R2.accountId}${jur}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2.accessKeyId, secretAccessKey: R2.secretAccessKey },
  });
}

async function existsInR2(s3, key) {
  try { await s3.send(new HeadObjectCommand({ Bucket: R2.bucket, Key: key })); return true; }
  catch (e) {
    const code = e?.$metadata?.httpStatusCode;
    if (code === 404 || e?.name === 'NotFound' || e?.name === 'NoSuchKey') return false;
    throw e;
  }
}

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'hubsell-asset-migrator' } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

async function uploadOne(s3, entry) {
  if (await existsInR2(s3, entry.key)) return 'skipped';
  const body = await fetchBuffer(entry.sourceUrl);
  await s3.send(new PutObjectCommand({
    Bucket: R2.bucket, Key: entry.key, Body: body,
    ContentType: entry.contentType || 'application/octet-stream',
    CacheControl: 'public, max-age=31536000, immutable',
  }));
  return 'uploaded';
}

async function pool(items, n, fn) {
  const results = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) || 1 }, async () => {
    while (i < items.length) { const idx = i++; try { results[idx] = await fn(items[idx], idx); } catch (e) { results[idx] = { error: e }; } }
  });
  await Promise.all(workers);
  return results;
}

async function main() {
  const manifest = JSON.parse(await readFile(flags.manifest, 'utf8'));
  console.log(`\nManifest: ${flags.manifest} — ${manifest.length} assets`);

  // per-folder summary
  const byPrefix = {};
  for (const m of manifest) byPrefix[m.prefix] = (byPrefix[m.prefix] || 0) + 1;
  console.log('Folders: ' + Object.entries(byPrefix).sort().map(([p, n]) => `${p}/(${n})`).join('  '));

  if (flags.dryRun) {
    console.log(`\n--dry-run: would upload to these keys (first 8 shown):`);
    manifest.slice(0, 8).forEach((m) => console.log(`  ${m.key}`));
    console.log(`  ... and ${manifest.length - 8} more. Re-run without --dry-run to upload.\n`);
    return;
  }

  const s3 = makeClient();
  console.log(`\nUploading to R2 bucket "${R2.bucket}" (jurisdiction "${R2.jurisdiction || 'default'}") ...`);
  let done = 0;
  const results = await pool(manifest, flags.concurrency, async (m) => {
    const r = await uploadOne(s3, m);
    done++;
    if (r === 'uploaded') console.log(`  [${done}/${manifest.length}] ${m.key}`);
    return r;
  });

  let uploaded = 0, skipped = 0, failed = 0;
  results.forEach((r, i) => {
    if (r === 'uploaded') uploaded++;
    else if (r === 'skipped') skipped++;
    else { failed++; warn(`failed: ${manifest[i].key} — ${r?.error?.message || r}`); }
  });
  console.log(`\nDone. uploaded=${uploaded} skipped=${skipped} failed=${failed}.`);
  if (failed) console.log(`Re-run the same command to retry just the failures (uploaded keys are skipped).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
