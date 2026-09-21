# AEO tracked prompts — HubSpot AI visibility

Written 2026-09-21. Tracks what is (and should be) monitored in HubSpot's AI
visibility tool, which tests whether ChatGPT, Gemini, Claude, Perplexity, and
Google AI Mode/Overviews mention or cite hubsell when answering a set of
tracked prompts. This is separate from GSC and GA4, which cannot measure AI
citations at all. See `CLAUDE.md` for the wider GEO/AEO context (the homepage
and `/vs/*` FAQPage schema work from the same date) and `docs/HANDOFF.md` for
the comparison-page FAQ standing rule these prompts draw on.

**Portal:** hubsell, HubSpot account `143832891`, business unit id `0`.
**Manage prompts directly:** `https://app-eu1.hubspot.com/ai-visibility/143832891/prompts`.

**Known blocker:** the Claude Code MCP connection to this HubSpot portal has
`get_aeo_metrics` (read) but not `marketing.aeo.write`, so a Claude session
cannot create or delete prompts itself. Adding prompts is a manual step in the
HubSpot UI until that scope is granted. Reading results (visibility, mentions,
citations, per-assistant breakdown) works today.

## Already tracked (14 of 25 prompt slots used)

### Original 10, HubSpot auto-generated

Created automatically when AEO setup completed. All `UNBRANDED`,
`CONSIDERATION` stage, location `US`. Baseline read on 2026-09-21: hubsell
mentioned in 1 of 30 runs (3.3% average visibility), cited once. Share of
voice on these 10: ZoomInfo 90%, Apollo 64%, Outreach 58%, Salesloft 28%,
Cognism 24%, Reply 22%, Instantly 19%, lemlist 13%, hubsell 0.07%.

These test the wrong thing for hubsell on two axes: they frame the category as
an outbound *agency/service* ("which agency helps SaaS scale meetings"),
which hubsell is not, and they're scoped to the US, where hubsell does not
sell. Kept for the historical baseline, not because they're a good test.

1. Which outbound lead generation service is best for US tech startups?
2. Which outbound opportunity generation agency helps SaaS scale meetings in the US?
3. What is the best outbound sales development service for multichannel outreach?
4. What is the best outbound appointment setting service for B2B software?
5. What outbound lead research service should SDR managers at SaaS firms compare?
6. Which outbound lead generation agency specializes in GDPR-compliant prospecting for SaaS?
7. Which outbound lead generation service suits mid-market SaaS sales teams?
8. Which outbound prospecting service combines data enrichment with campaign orchestration? (the one run with a hubsell mention)
9. What outbound opportunity generation service fits SaaS companies with small SDR teams?
10. How should VP Sales choose an outbound pipeline generation service?

### Added 2026-09-21, platform + Europe framing

Added by the founder from the first round of suggestions. `UNBRANDED`,
`CONSIDERATION`, location `GB` (used as the closest available proxy for
Europe). Ran once each: still 0 mentions on all four, same day the prompts
were created, so this is a first data point, not a trend.

11. What is the best B2B sales engagement platform for a European outbound sales team?
12. What software combines live B2B contact data with email and LinkedIn outreach in one platform?
13. What's a GDPR-compliant alternative to ZoomInfo or Apollo for a European SaaS company?
14. Which platform lets a small SDR team run email, LinkedIn, and phone outreach from one tool?

## To add — 11 remaining, fills to 25/25 capacity

Each one is grounded in specific, already-fact-checked content elsewhere on
the site, not a new claim invented for this list.

**From the `/vs/*` comparison pages** (`src/content/comparisons/*.md` —
`dataQuality`, `pricing`, `coreDifference`, `chooseCompetitor`/`chooseHubsell`
fields; same source the FAQPage schema on those pages was built from):

15. What's a better option than Apollo for live-sourced B2B contact data instead of a static database?
16. What's a good alternative to Cognism for European mobile number verification, without a five-figure annual contract?
17. What's a ZoomInfo alternative with month-to-month pricing instead of an annual contract?
18. How does Cognism source and verify its data?
19. What's the best Cognism alternative for a team that needs verified mobile numbers in Europe?
20. Is Cognism a data source, or does it also run outreach?
21. Which outbound platform is best for a Berlin-based B2B SaaS company doing GDPR-compliant prospecting?
22. What's an alternative to Apollo or ZoomInfo priced per contact instead of per seat plus credits?
23. Which B2B outbound tool avoids the annual contract lock-in that ZoomInfo and Cognism require?

**From the current homepage** (`src/components/VolumeVsPrecision.astro`, and
the 2026-09-21 hero rewrite in `src/data/home-i18n.ts` — eyebrow "For founders
and heads of sales with 6+ tools", and `src/data/pricing-page`'s "Solopreneurs
& GTM Teams"):

24. What's more effective for B2B outbound: sending to a whole market, or targeting a small list on buying signals?
25. What's the best outbound tool for a founder or small sales team without a dedicated SDR?

All 11 are unbranded by design (no "hubsell" in the prompt text), so they test
whether hubsell gets recommended unprompted rather than only answering when
asked about by name directly.

## What to watch after adding

- Re-pull `get_aeo_metrics` with `include=[SUMMARY, PROMPTS, CITATIONS, COMPETITORS, ASSISTANT_BREAKDOWN]`
  no sooner than a week after the last prompt run — one day of data, as seen
  on the 4 added 2026-09-21, is not a trend.
- Watch whether the Europe/platform-framed prompts (11–25) score any higher
  than the original US/agency-framed 10. If they don't, the visibility gap is
  not a targeting problem and the fix has to be on-page (more comparison
  pages, more FAQ coverage) rather than prompt selection.
- `ASSISTANT_BREAKDOWN` on the original 10 showed hubsell's one mention and
  citation came from ChatGPT only; Gemini and Perplexity had zero owned
  mentions. Worth checking per-assistant again once the new prompts have run
  a few times, since the three engines are pulling from different sources
  (Perplexity's citations skewed toward review-listicle sites, not vendor
  sites).
