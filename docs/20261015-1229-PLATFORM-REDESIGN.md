# Platform pages redesign: pattern and status

Started 2026-10-15. Pages are built one at a time and deployed together once the
category is finished.

## Status

| Page | Status | Notes |
|---|---|---|
| `/platform/live-data` | Done (2026-10-15) | Reference page for the pattern below. en, de, nl. |
| `/platform/enrichment` | To do | |
| `/platform/multichannel-outreach` | To do | |
| `/platform/crm-sync` | To do | |
| `/platform/deliverability` | To do | |
| `/platform/personalization` | To do | Open question: keep, merge into multichannel, or retire. |
| `/platform` (overview) | To do | Becomes the map of the five stages. |

## Page pattern (as on live data)

Section order and backgrounds:

1. Hero (tint): keyword eyebrow, H1, subtitle, CTA group; flow slice on the right
   (`PlatformHeroSlice`); stages strip below (`PlatformStages`).
2. Before and after (navy): table, database or old way versus hubsell.
3. Feature row (white): heading left, product widget right.
4. Deep-dive section (tint), for example "signal by signal" on live data: a
   two-column list with an H3 per item, no cards.
5. How it works (white): the stepped walkthrough.
6. Detail section (tint), for example GDPR on live data.
7. Proof (white): customer story and quote.
8. Closing CTA (navy).
9. FAQ (tint): 10 questions written for answer engines, also emitted as FAQPage
   schema.

Heading rules:

- Every section uses `SectionHead`: a keyword eyebrow, then an H2 in two colours
  (accent words in coral). No section without an eyebrow.
- Eyebrows and H2s target the page's keyword groups in
  `docs/20261013-1138-KEYWORD-TARGETS.md`; German uses the German groups.
- Facts in copy and FAQs come from the founder or from text already on the site.
  No superlatives that cannot be proven (German competition law).

How a page switches to the new layout: give its data entry in
`src/data/platform-content.ts` (and `.de.ts`, `.nl.ts`) the fields `compare`,
`heads`, `faqs`, and optionally `heroSlice` and `signals`. Pages without
`compare` keep the old layout.
