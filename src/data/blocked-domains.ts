// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// ==========================================================================
// Manually blocked email domains: throwaways, spam senders, and anything else
// we refuse on the book-a-call, demo, and contact forms. Checked on the client
// (instant feedback) and on the server (authoritative), exact match plus all
// subdomains. The submitter sees "This domain is restricted."
//
// TO ADD A DOMAIN, either edit this list directly (one per line, in quotes,
// trailing comma) or run:
//
//   npm run block -- baddomain.com
//
// then ship it:
//
//   npm run build
//   git add . && git commit -m "Block domain: baddomain.com" && git push
//
// Competitor domains live separately in free-email-domains.ts
// (COMPETITOR_DOMAINS, npm run block:competitor); this file is for ad-hoc
// blocks. Full guide: docs/BLOCKING-DOMAINS.md
export const BLOCKED_DOMAINS: readonly string[] = [
  'virgilian.com',
];
