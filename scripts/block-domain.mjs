#!/usr/bin/env node
// Add one or more domains to the email blocklist (src/data/blocked-domains.ts).
//
//   npm run block -- baddomain.com another.io
//
// Validates the shape, lowercases, dedupes, and keeps the list alphabetical.
// After running: npm run build, commit, push.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'blocked-domains.ts');
const DOMAIN_RE = /^(?!-)[a-z0-9-]{1,63}(?<!-)(\.(?!-)[a-z0-9-]{1,63}(?<!-))+$/;

const args = process.argv.slice(2).map((d) => d.trim().toLowerCase().replace(/^@/, ''));
if (args.length === 0) {
  console.error('Usage: npm run block -- domain.com [domain2.io ...]');
  process.exit(1);
}
const bad = args.filter((d) => !DOMAIN_RE.test(d));
if (bad.length) {
  console.error('Not valid domain(s): ' + bad.join(', '));
  process.exit(1);
}

const src = readFileSync(FILE, 'utf-8');
const m = src.match(/(export const BLOCKED_DOMAINS[\s\S]*?=\s*\[)([\s\S]*?)(\];)/);
if (!m) {
  console.error('Could not find the BLOCKED_DOMAINS array in ' + FILE);
  process.exit(1);
}

const current = [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]);
const before = new Set(current);
const added = [];
for (const d of args) {
  if (before.has(d)) console.log(`already blocked: ${d}`);
  else { before.add(d); added.push(d); }
}
const sorted = [...before].sort();
const body = '\n' + sorted.map((d) => `  '${d}',`).join('\n') + '\n';
writeFileSync(FILE, src.replace(m[0], m[1] + body + m[3]), 'utf-8');

if (added.length) {
  console.log(`blocked: ${added.join(', ')}`);
  console.log(`list now has ${sorted.length} domain(s).`);
  console.log('Next: npm run build && git add . && git commit -m "Block domain: ' + added.join(', ') + '" && git push');
} else {
  console.log('No changes.');
}
