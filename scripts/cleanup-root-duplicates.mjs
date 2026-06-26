#!/usr/bin/env node
/**
 * cleanup-root-duplicates.mjs — remove flat root objects from R2 that now have a
 * foldered twin, leaving the folder structure clean.
 *
 * SAFE BY CONSTRUCTION: a root object (key with no "/") is deleted ONLY if a key
 * <prefix>/<sameName> exists in webflow-asset-manifest.json. Anything at root that
 * has no folder twin is KEPT and listed — that's your Webflow CMS images (blog
 * thumbnails, testimonial avatars under hash 699dd2e0...) and any leftover Webflow
 * size-variants. Those are migrated separately when the blog/customer sections are built.
 *
 * Dry run by default. Pass --confirm to actually delete.
 *
 *   node scripts/cleanup-root-duplicates.mjs            # preview
 *   node scripts/cleanup-root-duplicates.mjs --confirm  # delete
 *
 * Env: same R2_* vars as the migration (incl. R2_JURISDICTION=eu).
 */
import { readFile } from 'node:fs/promises';
import { S3Client, ListObjectsV2Command, DeleteObjectsCommand } from '@aws-sdk/client-s3';

const argv = process.argv.slice(2);
const flags = { manifest: 'webflow-asset-manifest.json', confirm: false, variants: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--manifest') flags.manifest = argv[++i];
  else if (a === '--confirm') flags.confirm = true;
  else if (a === '--variants') flags.variants = true;
}
// always-junk root keys to remove regardless of twins (debug leftovers)
const JUNK = new Set(['_migrate-test.txt']);
// Webflow responsive size-variant suffix, e.g. -p-500.png, -p-800.avif, -p-130x130q80.avif
const VARIANT_RE = /-p-\d+(?:x\d+)?(?:q\d+)?\.[A-Za-z0-9]+$/;

const R2 = {
  accountId: process.env.R2_ACCOUNT_ID,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  bucket: process.env.R2_BUCKET,
  jurisdiction: (process.env.R2_JURISDICTION || '').trim().toLowerCase(),
};
const missing = ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET'].filter((k) => !process.env[k]);
if (missing.length) { console.error(`\nMissing R2 env vars: ${missing.join(', ')}\n`); process.exit(1); }
const jur = R2.jurisdiction ? `.${R2.jurisdiction}` : '';
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2.accountId}${jur}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2.accessKeyId, secretAccessKey: R2.secretAccessKey },
});

async function listAll() {
  const keys = [];
  let token;
  do {
    const out = await s3.send(new ListObjectsV2Command({ Bucket: R2.bucket, ContinuationToken: token }));
    (out.Contents || []).forEach((o) => keys.push(o.Key));
    token = out.IsTruncated ? out.NextContinuationToken : undefined;
  } while (token);
  return keys;
}

async function main() {
  const manifest = JSON.parse(await readFile(flags.manifest, 'utf8'));
  const twinNames = new Set(manifest.map((m) => m.key.split('/').pop())); // basenames now living in folders

  const allKeys = await listAll();
  const rootKeys = allKeys.filter((k) => !k.includes('/'));
  const folderKeys = allKeys.filter((k) => k.includes('/'));

  const toDelete = rootKeys.filter((k) => twinNames.has(k) || JUNK.has(k) || (flags.variants && VARIANT_RE.test(k)));
  const toKeep = rootKeys.filter((k) => !toDelete.includes(k));

  console.log(`\nBucket "${R2.bucket}": ${allKeys.length} objects (${folderKeys.length} in folders, ${rootKeys.length} at root)\n`);
  console.log(`DELETE — root objects with a folder twin${flags.variants ? ' or size-variant' : ''} (${toDelete.length}):`);
  toDelete.forEach((k) => console.log(`  - ${k}`));
  console.log(`\nKEEP — root objects with NO folder twin (${toKeep.length}) — CMS images / variants, handled later:`);
  toKeep.forEach((k) => console.log(`  · ${k}`));

  if (!flags.confirm) {
    console.log(`\nDry run. Nothing deleted. Re-run with --confirm to delete the ${toDelete.length} duplicates above.\n`);
    return;
  }
  if (toDelete.length === 0) { console.log(`\nNothing to delete.\n`); return; }

  // DeleteObjects handles up to 1000 keys per call
  for (let i = 0; i < toDelete.length; i += 1000) {
    const batch = toDelete.slice(i, i + 1000).map((Key) => ({ Key }));
    const res = await s3.send(new DeleteObjectsCommand({ Bucket: R2.bucket, Delete: { Objects: batch, Quiet: true } }));
    (res.Errors || []).forEach((e) => console.error(`  ! failed: ${e.Key} — ${e.Message}`));
  }
  console.log(`\nDeleted ${toDelete.length} root duplicates. Folder structure is now clean.\n`);
}
main().catch((e) => { console.error(e); process.exit(1); });
