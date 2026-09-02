#!/usr/bin/env node
// Runs automatically before every build, via the "prebuild" script.
//
// Why this exists: on 2 Sep 2026 package.json asked for hs-block v1.1.0 while
// package-lock.json still pinned v1.0.0. Cloudflare builds with `npm ci`, which
// installs from the lockfile, so the live site ran code with no disposable-domain
// rule and accepted every throwaway address. Nothing failed. Nothing logged.
// We found out by testing a form by hand.
//
// This turns that class of problem into a failed build. A failed build means
// the previous deploy keeps serving, which is the right outcome: an out-of-date
// site beats a site whose signup gate quietly stopped working.
function printFix() {
  return [
    '',
    '  Most likely the lockfile pins an older hs-block than package.json asks for.',
    '  Plain `npm install` will NOT re-resolve a git dependency. Run:',
    '',
    '    npm install "github:krnshrm/hs-block#vX.Y.Z"',
    '    grep -A2 \'"node_modules/hs-block"\' package-lock.json',
    '    npm run check:email',
    '    git add package-lock.json && git commit -m "Lockfile: hs-block vX.Y.Z"',
    '',
    '  Full context: docs/BLOCKING-DOMAINS.md',
    '',
  ].join('\n');
}

// Imported dynamically so that a pin too old to have these exports produces the
// explanation below rather than a raw Node resolution stack trace.
let hs, selftest;
try {
  hs = await import('hs-block');
  selftest = await import('hs-block/selftest');
} catch (err) {
  console.error('\n  Email rules self-test could NOT RUN\n');
  console.error(`    ${err && err.message ? err.message.split('\n')[0] : err}\n`);
  console.error('  The installed hs-block is older than the one package.json asks for.');
  console.error(printFix());
  process.exit(1);
}

const {
  validateEmail,
  FREE_EMAIL_DOMAINS,
  COMPETITOR_DOMAINS,
  DISPOSABLE_DOMAINS,
  LIST_VERSION,
} = hs;
const { runSelfTest, FIXTURES } = selftest;

const counts = {
  free: FREE_EMAIL_DOMAINS.size,
  competitors: COMPETITOR_DOMAINS.length,
  disposable: DISPOSABLE_DOMAINS.length,
};

const { failures, warnings, passed } = runSelfTest(validateEmail, counts);

for (const w of warnings) {
  console.warn(`  warning  ${w}`);
}

if (failures.length) {
  console.error('\n  Email rules self-test FAILED\n');
  for (const f of failures) console.error(`    ${f}`);
  console.error(`\n  hs-block version loaded: ${LIST_VERSION}`);
  console.error(
    `  lists: ${counts.free} free, ${counts.competitors} competitors, ${counts.disposable} disposable\n`,
  );
  console.error(printFix());
  process.exit(1);
}

console.log(
  `  email rules ok: ${passed}/${FIXTURES.length} checks, hs-block v${LIST_VERSION}, ` +
    `${counts.disposable} disposable domains`,
);
