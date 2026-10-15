# Platform pages redesign: pattern and status

Started 2026-10-15. Pages are built one at a time and deployed together once the
category is finished.

## Status

| Page | Status | Notes |
|---|---|---|
| `/platform` | Built (2026-10-15), in review | Overview, keyword "sales engagement platform". Hero uses the old homepage visual (HeroPipelineFlow). Six-tool compare, four stage rows with each page's hero slice, deliverability and signal-based personalization cards, why one platform, proof, closing, 10 FAQs. |
| `/platform/live-data` | Done (2026-10-15) | Reference page for the pattern below. en, de, nl. |
| `/platform/enrichment` | Done (2026-10-15) | Field by field, six enrichment steps with fractional pricing, catch-all verification. No waterfall: hubsell sources and orchestrates, only phones from partners. |
| `/platform/multichannel-outreach` | Done (2026-10-15) | Step by step (8 flow steps), safe LinkedIn automation. Facts confirmed by the owner. |
| `/platform/crm-sync` | Built (2026-10-15), in review | One-way sync into the CRM today (two-way is planned, say so only in the FAQ). Contacts pushed by hand or by rule, field mapping, matching to existing records, suppression of CRM contacts. "Two-way" claims removed site-wide. |
| `/platform/deliverability` | Built (2026-10-15), in review | Own Google or Microsoft mailboxes through their APIs; SPF, DKIM and DMARC set up by the hubsell team (a checker may come later); a daily cap per mailbox, no number published; sending windows; stop on reply or bounce; recent, relevant data as part of deliverability. |
| `/platform/personalization` | Built (2026-10-15), in review | Signal-based: AI drafts each message from the signal and the company website; a flow per signal. |
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

- No heading line with only one or two words (balanced wrapping, see CLAUDE.md).
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
| `/integrations` | Built (2026-10-15), in review | CRM (Salesforce, HubSpot, Pipedrive) and email (Google Workspace, Microsoft 365). LinkedIn and Sales Navigator removed from the page by decision (trademark and endorsement risk); a FAQ explains LinkedIn steps run inside flows. AI integrations to follow once the MCP is set up. |
