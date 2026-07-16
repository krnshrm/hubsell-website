#!/usr/bin/env node
// Add domains to the email blocklists. Two modes:
//
//   npm run block -- baddomain.com                (ad-hoc: throwaways, spam)
//   npm run block:competitor -- competitor.com    (competitor list)
//
// Ad-hoc domains go to src/data/blocked-domains.ts (kept alphabetical).
// Competitor domains go to COMPETITOR_DOMAINS in src/data/free-email-domains.ts
// (appended under a CLI marker so the hand-written category groups stay intact).
// Validates the shape, lowercases, dedupes across BOTH lists.
// Full guide: docs/BLOCKING-DOMAINS.md
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ADHOC_FILE = join(ROOT, 'src', 'data', 'blocked-domains.ts');
const COMP_FILE = join(ROOT, 'src', 'data', 'free-email-domains.ts');
const ADHOC_RE = /(export const BLOCKED_DOMAINS[\s\S]*?=\s*\[)([\s\S]*?)(\];)/;
const COMP_RE = /(export const COMPETITOR_DOMAINS[\s\S]*?=\s*\[)([\s\S]*?)(\];)/;
const CLI_MARKER = '  // Added via npm run block:competitor';
const DOMAIN_RE = /^(?!-)[a-z0-9-]{1,63}(?<!-)(\.(?!-)[a-z0-9-]{1,63}(?<!-))+$/;

const rawArgs = process.argv.slice(2);
const competitorMode = rawArgs.includes('--competitor');
const args = rawArgs.filter((a) => a !== '--competitor').map((d) => d.trim().toLowerCase().replace(/^@/, ''));

if (args.length === 0) {
  console.error('Usage: npm run block -- domain.com [more...]');
  console.error('       npm run block:competitor -- domain.com [more...]');
  process.exit(1);
}
const bad = args.filter((d) => !DOMAIN_RE.test(d));
if (bad.length) {
  console.error('Not valid domain(s): ' + bad.join(', '));
  process.exit(1);
}

function domainsIn(src, re) {
  const m = src.match(re);
  if (!m) return null;
  return { m, list: [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]) };
}

const adhocSrc = readFileSync(ADHOC_FILE, 'utf-8');
const compSrc = readFileSync(COMP_FILE, 'utf-8');
const adhoc = domainsIn(adhocSrc, ADHOC_RE);
const comp = domainsIn(compSrc, COMP_RE);
if (!adhoc || !comp) {
  console.error('Could not find the domain arrays. Check blocked-domains.ts and free-email-domains.ts.');
  process.exit(1);
}

const added = [];
if (competitorMode) {
  let body = comp.m[2];
  const have = new Set(comp.list);
  for (const d of args) {
    if (have.has(d)) { console.log(`already a competitor: ${d}`); continue; }
    if (adhoc.list.includes(d)) { console.log(`already blocked (ad-hoc list): ${d}`); continue; }
    if (!body.includes(CLI_MARKER)) body = body.replace(/\n$/, '') + '\n' + CLI_MARKER + '\n';
    body = body.replace(/\n$/, '') + `\n  '${d}',\n`;
    have.add(d); added.push(d);
  }
  if (added.length) writeFileSync(COMP_FILE, compSrc.replace(comp.m[0], comp.m[1] + body + comp.m[3]), 'utf-8');
} else {
  const have = new Set(adhoc.list);
  for (const d of args) {
    if (have.has(d)) { console.log(`already blocked: ${d}`); continue; }
    if (comp.list.includes(d)) { console.log(`already blocked (competitor list): ${d}`); continue; }
    have.add(d); added.push(d);
  }
  if (added.length) {
    const body = '\n' + [...have].sort().map((d) => `  '${d}',`).join('\n') + '\n';
    writeFileSync(ADHOC_FILE, adhocSrc.replace(adhoc.m[0], adhoc.m[1] + body + adhoc.m[3]), 'utf-8');
  }
}

if (added.length) {
  const label = competitorMode ? 'competitor' : 'blocked';
  console.log(`${label}: ${added.join(', ')}`);
  console.log('Next: npm run build && git add . && git commit -m "Block domain: ' + added.join(', ') + '" && git push');
} else {
  console.log('No changes.');
}
