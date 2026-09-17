# Blog-content series and editing standard (/insights)

_Last updated: 2026-09-17. Companion to `docs/HANDOFF.md`. Covers two things: the
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
- Set `author: "karan"` in frontmatter, and `coAuthors: ["riya"]` for anyone who
  contributed. Keys index `AUTHORS` in `src/data/site.ts`, which carries name,
  title, company, R2 photo, LinkedIn URL, and bio. Registered: `karan`, `riya`,
  `sebastian`, `guido`, `kylie`. An unknown key is dropped rather than throwing,
  so a frontmatter typo costs a missing name, not a failed build.
- `company` is where the person works NOW, not where they worked when they wrote
  the post. For former colleagues that is another company, which is intentional:
  an accurate current affiliation is a stronger trust signal than a stale one.
  The hubsell connection belongs in the bio, which is how all five are written.
- This renders three things: a compact byline under the title (stacked photos, names
  joined with "and"), a "More about the author" box at the end of the post with one
  card per author (larger photo, name, role, company, bio, LinkedIn link with icon),
  and one Person entry per author in the Article schema with `url`, `image`,
  `jobTitle`, and `worksFor`, instead of the Organization fallback. The heading
  pluralises automatically when there is more than one author.
- To add a second author, add an entry to `AUTHORS` with the same five fields (name,
  title, photo, url, bio) and reference its key. Photos go on R2 next to the
  call-host avatars.
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
- `toc`: optional boolean. A contents list renders in the left column on posts with
  4 or more `h2` headings. It is suppressed automatically when more than half the
  headings are numbered ("1. ...", "2. ..."), because on a listicle every heading is
  an item rather than a section and the contents list just duplicates the article.
  Catalogue posts whose headings are names or titles with no numbering (podcasts,
  books, courses, CRMs, templates, landing pages, movies, channels) set `toc: false`
  explicitly. `toc: true` forces it on. 48 of 88 posts show one.
- The `/insights` overview has a search box that filters the post cards in the
  browser with no index file or network call. It matches on title, description, and
  topics, so a tag like "Email deliverability" is findable even when the word is not
  in the title. Nothing to maintain: a new post is searchable as soon as it builds.
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
3. ~~**Measurement is broken.**~~ FIXED on 2026-09-06 (GTM version 46). At the time of
   the analysis `form_submit_success` and `cta_click` had never fired and no marketing
   page had produced a tracked conversion, which is why the analysis could not judge
   any page by conversion. That is no longer true. Real conversion data starts
   2026-09-06.

### Done on 2026-09-15
- All 14 over-length post descriptions rewritten (was 283 to 316 chars, now 102 to
  138), from the diffs in the analysis doc. These had been written on 2026-09-05 and
  never applied.
- Author byline shipped: `AUTHORS` registry in `src/data/site.ts`, optional `author`
  field in the insights schema, byline in the post template, Person author in the
  Article schema. Applied to post 1 only.

### Description audit, run 2026-09-15 (all collections)
The Sept 5 suspicion was right, and it is worse than the 14 pages that happened to
clear 500 impressions. Measured across every content collection:

| Collection | Over 160 chars | Total | Longest |
| --- | --- | --- | --- |
| insights | **74** | 88 | 300 |
| comparisons (de) | 5 | 5 | 214 |
| usecases (de) | 4 | 4 | 220 |
| comparisons (nl) | 4 | 5 | 181 |
| usecases (nl) | 3 | 4 | 192 |
| comparisons (en) | 2 | 5 | 167 |
| customerstories (en/de/nl) | 2 each | 6 each | 192 |
| knowledge | 0 | 14 | clean |
| glossary | n/a | 66 x3 | uses `definition`, not `description` |

- **The blog is the real problem: 74 posts still over, 224 to 300 chars, median 294.**
  Every one truncates mid-clause in a Google snippet. Same mechanical cause as the 14
  already fixed.
- The de/nl overages are mild (161 to 220) and lower priority.
- Rewriting the remaining 74 well means reading each post, so it is a sizeable job,
  not a find-and-replace. Do it in batches and keep one post per commit where it
  overlaps with new posts.

## TODO — agreed plan, not yet started (as of 2026-09-15)

Work through the 5-step editing gate across the back catalogue. Ordered by value.

### 1. Batch pass over the 73 remaining posts (steps 3 and 4)
Batches of 15 to 20, ONE commit per batch, four or five rounds. Each post gets all
three of these in a single edit so the file is touched once:
- Rewrite `description` to a complete sentence UNDER 160 characters. 73 of 88 are
  still over, running 224 to 300 characters, median 294. Every one truncates
  mid-clause in a Google snippet.
- Cut filler from the intro and tighten hedged claims. 21 posts contain stock
  phrases (re-measured 2026-09-17); scan for "in today's fast-paced", "in the ever-changing", "delve into",
  "seamless", "leverage", "robust", "comprehensive guide", "in conclusion".
- Add 2 or 3 internal links to related posts, hyperlinking text that is already in
  the copy rather than bolting on a "related reading" line.
Order the batches by GSC impressions (the founder has the GSC/GA connector), not
alphabetically, so the pages that already get traffic are fixed first.

### 2. Flag and refresh stale facts (step 4)
22 posts reference a year between 2010 and 2023 (re-measured 2026-09-17; the 19 quoted
on 2026-09-15 was a slight undercount). `ultimate-list-best-crm-software-for-b2b`
cites six different years up to 2021 and is almost certainly out of date. Claude
cannot check external links from the sandbox (network is limited to package
registries), so dead external links need a link checker or a manual pass.

### 3. Audit all 88 for proprietary content (step 2)
Produce a ranked table: which posts contain a named customer, a real number from the
business, a first-person campaign account, or an original framework, and which are
generic enough to sit on a competitor's site. Output is a triage list, not a fix.
Roughly 200,000 words, so this is a sampling plus heuristics pass, not a full read.

### 4. Firsthand experience blocks (step 1)
Add a dedicated, visually distinct block that renders only when a post has something
real behind it. Proposed shape, so it stays out of the body HTML and is easy to audit:

```yaml
experience:
  text: "We ran this across 269 contacts. 10 bounced, 8 replied positively, 5 booked calls."
  author: "karan"
```

IMPORTANT: this needs the founder's own material. Claude must not invent a client
story or a dashboard number to fill the block. Realistically this applies to 10 to 20
posts, not all 88. Never name a customer.

### 5. RESOLVED 2026-09-06, was the blocker on everything above
Conversion tracking is fixed. The 2026-09-15 version of this file said it was broken
and that it outranked all content work. That was already out of date when written: the
GTM container was republished as version 46 on 2026-09-06 with 4 custom event triggers
and 4 GA4 event tags, so `cta_click`, `form_start`, `form_error` and
`form_submit_success` have reached GA4 since that date. See CLAUDE.md for the tag
inventory and the known harmless leftovers.

Two things follow from this:
- Data before 2026-09-06 does not exist for these events. Never compare across that
  date and report the jump as a real movement.
- The batch order below no longer has to use GSC impressions as a proxy for value.
  Order by what actually converts once there is enough data to read.

### Also queued
- Post 2 of the series (cold outreach reply rates) is drafted and unpublished. The
  2-posts-per-week cadence has not started. PAUSED by the founder on 2026-09-17 until
  the batch pass below is done.
- ~~Confirm the four author photos are on R2.~~ DONE 2026-09-17: all four avatars and
  the post-1 cover image were verified live via `web_fetch` (method recorded in
  `docs/HANDOFF.md`). No broken author images.
- The de/nl `comparisons`, `usecases`, and `customerstories` descriptions are mildly
  over (161 to 220 chars). Lower priority than the blog.

---

### Still open
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
