# Blog-content series and editing standard (/insights)

_Last updated: 2026-09-15. Companion to `docs/HANDOFF.md`. Covers two things: the
workstream that turns the founder's LinkedIn posts into blog posts, and the editing
gate every new or updated post must pass before it ships. Owned by ONE dedicated chat
at a time._

---

## Part 1 — The editing gate (apply to every post)

Adapted from a 5-step AI-content editing checklist. The steps are sound practice and
line up with what search engines reward. Note that the headline figures quoted with
the original checklist ("444% across 744 articles", "91% freshness") come from an
agency lead magnet with no published methodology; treat the steps as the standard and
ignore those numbers as a benchmark.

No post merges to `main` until all five are answered.

### 1. Inject firsthand experience
Every post carries a real client story or a number from our own dashboard. A human
with skin in the game must demonstrably have touched the page.
- Our advantage: posts are built from the founder's own LinkedIn archive, which is
  full of campaigns he ran himself.
- Worked example: the reply-rate post uses a real sequence (269 contacts, 10 bounced,
  10 replies, 8 positive, 5 calls, 3 offers).
- Constraint from the LinkedIn workstream: never name a customer, and never publish
  anything that harms the company. Founder-run campaign numbers are fine when they
  were already public in his own LinkedIn post; anything not yet public needs his
  explicit go-ahead.

### 2. Add something the model could not know
Proprietary data or a specific example from the business. If the same paragraph could
sit on a competitor's site, it is not defensible and it does not ship.
- Good: "for some hubsell users 3% is the low end of their conversion band."
- Bad: any generic restatement of a best practice.

### 3. Cut the filler and tighten every claim
Delete the padding and the hedging. Every sentence earns its place.
- House style, which is also the anti-filler rule: no em dashes, no AI-sounding
  words, plain and clear language, ranges spelled out ("3 or 4", "6 months").
- `description` must be a complete sentence UNDER 160 characters. Google cuts the
  desktop snippet at roughly 155 to 160; anything longer ships truncated mid-clause
  and reads as a fragment. This was a measured, site-wide failure (see Part 3).

### 4. Fact-check and refresh
Update the stats, kill the dead links, make it current.
- Any statistic needs a source that can be named. If it cannot be verified, soften
  the claim or cut it. Do not attribute a number to an institution on memory alone.
- Open item: the intent-data claim in `why-b2b-databases-are-flawed` is deliberately
  softened because a specific MIT study could not be confirmed. Sharpen it only if
  the source turns up.
- Legacy posts lean on aging figures (a 2021 manufacturing report, a 2020 market
  size). Refresh these when touching those files.

### 5. Put a real author on it
A name, a role, and a face that stands behind the claims.
- Set `author: "karan"` in frontmatter. The key indexes `AUTHORS` in
  `src/data/site.ts`, which carries name, title, R2 photo, and LinkedIn URL.
- This renders a byline under the title AND upgrades the Article schema `author`
  from an Organization to a Person with `url`, `image`, `jobTitle`, and `worksFor`.
- Posts with NO `author` field render no byline and keep the Organization fallback.
  That is deliberate: the 87 posts migrated from Webflow were not written by a named
  person, and putting someone's name on them would be false attribution. Only byline
  a post when a named human actually wrote or substantially rewrote it.

**The rule: AI writes the draft. Humans make it worth ranking. Never let AI publish.**

---

## Part 2 — The series workstream

Source material (a CSV export of about 59 LinkedIn posts, plus a zip of longer drafts)
lives ONLY in the dedicated blog chat. It is not in the repo, so other chats cannot
see it and should not try to reproduce this work.

### Cadence (SEO)
- About 2 posts per week.
- ONE post per commit. Never batch new posts into a single commit. A steady drip of
  dated posts reads as a healthy publishing rhythm; a bulk dump does not.
- Set `publishedAt` to the REAL go-live date, not the draft date. Bump it when a
  queued draft finally merges.

### Per-post conventions
- File: `src/content/insights/<slug>.md`, lowercase hyphenated slug.
- Frontmatter: `title` (keyword-shaped, not the punchy LinkedIn opener), `topics`,
  `description` (under 160 chars, see gate step 3), `summary`, `publishedAt`,
  `coverImage`, `thumbnail`, `readTime`, `author`, `featured: false`, `draft: false`,
  optional `cta`.
- Body is raw HTML rendered with `set:html` into `.prose`: plain `<h2>`, `<p>`,
  `<ol>/<ul><li>`, `<strong>`, `<blockquote>`. The empty `id=""` attributes in
  migrated posts are a Webflow artifact and are not needed on new posts.
- CTA: never hardcode a link in the body. The template renders its own block from
  `SIGNUP_URL`. Use the `cta` frontmatter field for a topical override line.
- Topic tags in use: Sales skills, Outbound sales, Cold email, Sales operations, Lead
  generation, Prospect data, Email deliverability, Industry guides, Personalization,
  Multichannel outreach, LinkedIn, Data enrichment. Reuse these.

### Images (Cloudflare R2)
- Two per post under `insights/` on `assets.hubsell.com`, Webflow-style naming:
  `<24-hex>_<Title-With-Hyphens>.png` (cover) and
  `<24-hex>_Thumbnail-<Title-With-Hyphens>.png` (thumbnail). The hex prefix is just a
  unique tag, but the frontmatter URL and the R2 object name must match exactly.
- The founder uploads on his Mac. Claude cannot reach R2 to verify. Upload BEFORE the
  post merges, or the live post shows broken images.

### Status
| # | Post | Slug | State |
| --- | --- | --- | --- |
| 1 | Why every B2B database is flawed | `why-b2b-databases-are-flawed` | Live (commit `84e9907`). Byline added 2026-09-15. Founder to confirm its two R2 images are uploaded. |
| 2 | How to measure cold outreach reply rates | `how-to-measure-cold-outreach-reply-rates` | Drafted in chat, awaiting sign-off. Images generated, not uploaded. |

### Candidate backlog (from recent LinkedIn posts)
- Buying signals you can actually watch: observable first-party intent. The
  constructive counterpart to "third-party intent data is noise."
- AI copy in outbound: fully automated AI underperforms; human-reviewed AI wins.
- The LinkedIn secret-sharing play: why "comment to unlock" is a lead-gen tactic.
- Rented vs owned channels: outbound runs on channels you rent, and owners keep
  tightening them.
- A priority matrix for SDR work: do, automate, outsource, or drop.
- How sales development keeps reinventing itself.

### Voice notes (from the founder's own edits)
Parenthetical asides; the "eleventy zillion" register; specific operational language
("spin and burn domains" over generic phrasing); dark humor inside parentheses, never
in headline copy. The blog runs deliberately more measured than LinkedIn: no emoji,
fewer jokes. That difference is intentional, so the two channels read differently.

Permanently parked: the "Selling Committee" framing that implied using executive
accounts for outreach. Executives do not want their accounts used. Stay buyer-side.

---

## Part 3 — Context from the 2026-09-05 analysis

Read `docs/20260905-0934-GA4-GSC-ANALYSIS-RECAP.md` before planning topics. Headlines:

1. Insights over 90 days: 153,362 impressions, 208 clicks (0.14% CTR), 9.6%
   engagement rate, 28-second sessions. The worst engagement of the four content
   sections.
2. Top clicked queries are the `sales movies` cluster and bare `b2b terms` lookups.
   That is a low-intent audience, so this is a TOPIC SELECTION problem. The editing
   gate raises the quality of each page; it does not change which pages we publish.
   Choose topics with buying intent.
3. **Measurement is broken.** `form_submit_success` and `cta_click` have never fired
   in 90 days, and no marketing page produced a single tracked conversion. Until that
   is fixed, no content change here can be proven to work. This is the highest-value
   open item and it is not a content task.

### Done on 2026-09-15
- All 14 over-length post descriptions rewritten (was 283 to 316 chars, now 102 to
  138), from the diffs in the analysis doc. These had been written on 2026-09-05 and
  never applied.
- Author byline shipped: `AUTHORS` registry in `src/data/site.ts`, optional `author`
  field in the insights schema, byline in the post template, Person author in the
  Article schema. Applied to post 1 only.

### Still open
- A full audit of every `description` in `src/content/` and `src/data/` outside
  insights. The 283-to-300-character pattern is likely site-wide.
- `sales-movies` is the best control to watch: it had real traffic (15 clicks, 0.52%
  CTR, position 11.8) before the rewrite. If CTR rises and position holds, the fix
  works before judging the other 13.
- The GA4 property appears to mix app.hubsell.com traffic with the marketing site.

---

## Coordination note for parallel chats
- While this series is active, do NOT bulk-edit `src/content/insights/` or batch blog
  posts from another chat. Single unrelated fixes are fine.
- This workstream also touches `src/data/site.ts` (AUTHORS), `src/content.config.ts`
  (insights schema), `src/pages/insights/[slug].astro` (byline), `docs/SITEMAP.md`,
  and this file.
- One post per commit, so history stays clean and rollback stays easy.
