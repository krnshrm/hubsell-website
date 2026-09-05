# GA4 / GSC analysis session recap

_Created 2026-09-05. A verbatim record of five analysis questions and answers from a single
chat session: a 28-day GSC/GA4 shape check, a near-page-one query gap analysis, a
decision-proximity page comparison, a title/description CTR fix with diffs, and a 90-day
section comparison (insights vs glossary vs knowledge vs use-cases). Kept as a point-in-time
record — the underlying data will move; re-pull before acting on anything here more than a
few weeks old._

---

## 1. "Pull the last 28 days from GSC for sc-domain:hubsell.com and from GA4 for properties/338895211..."

Last 28 days (2026-08-07 → 2026-09-04, Europe/Berlin). No recommendations, just the shape.

**GSC totals — `sc-domain:hubsell.com`:** 132 clicks, 52,876 impressions, 0.25% CTR, avg position 21.8.

**Top 10 queries (GSC):**

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| hubsell | 40 | 107 | 37.4% | 1.0 |
| b2b terms | 4 | 133 | 3.0% | 2.1 |
| sales movies | 3 | 433 | 0.7% | 9.5 |
| b2b outreach techniques | 1 | 1 | 100% | 10.0 |
| b2b sales terms | 1 | 17 | 5.9% | 4.5 |
| best sales movies | 1 | 216 | 0.5% | 13.0 |
| famous sales movies | 1 | 21 | 4.8% | 10.6 |
| lead qualification methods | 1 | 7 | 14.3% | 6.0 |
| movie on sales | 1 | 22 | 4.6% | 9.2 |
| movies about sales | 1 | 157 | 0.6% | 7.9 |

**Top 10 landing pages by sessions (GA4, `properties/338895211`):**

| Landing page | Sessions |
|---|---|
| `/` | 112 |
| `(not set)` | 73 |
| `/auth/login` | 59 |
| `/styleguide` | 37 |
| `/flows?…user=5d2d8bbe…` | 31 |
| `/data/contacts?…enrichmentStatus=Completed&page=1` | 27 |
| `/settings/user/profile` | 13 |
| `/flows/6a008ef21cd191af539c8a9d` | 12 |
| `/flows?…user=679b56a8…` | 12 |
| `/settings/admin-section` | 11 |

142 landing pages total.

**Traffic by country (GA4, sessions, top 15 of 30):**

| Country | Sessions |
|---|---|
| India | 361 |
| Germany | 148 |
| United States | 75 |
| Singapore | 28 |
| United Kingdom | 15 |
| Vietnam | 12 |
| Thailand | 10 |
| Israel | 8 |
| Pakistan | 8 |
| Belgium | 7 |
| Brazil | 4 |
| Canada | 4 |
| China | 4 |
| Italy | 4 |
| Belarus | 3 |

That's the shape as pulled, no read on it yet.

---

## 2. "Find GSC queries from the last 28 days with position between 8 and 20 and impressions above 100... For the top 5, read the matching page in the repo and tell me specifically what is missing..."

Filtered GSC query+page pairs (last 28 days) with position 8–20 and impressions >100 — 19 rows, all landing on 3 posts. Top 5 by impressions map to 2 pages:

| # | Query | Impr. | Clicks | Position | Page |
|---|---|---|---|---|---|
| 1 | b2b data | 1243 | 0 | 14.7 | `/insights/b2b-data-for-b2b-sales/` |
| 2 | b2b marketing data | 820 | 0 | 10.3 | `/insights/b2b-data-for-b2b-sales/` |
| 3 | best practices for professional outreach without disclosing personal data | 520 | 0 | 8.9 | `/insights/b2b-data-compliance/` |
| 4 | best practices for professional outreach without personal data | 513 | 0 | 9.7 | `/insights/b2b-data-compliance/` |
| 5 | b2b sales data | 509 | 0 | 11.7 | `/insights/b2b-data-for-b2b-sales/` |

I read both `.md` files in full (`src/content/insights/b2b-data-for-b2b-sales.md`, `src/content/insights/b2b-data-compliance.md`). Every one of these 5 queries has **zero clicks** despite hundreds of impressions at positions 9–15 — that's the signal to explain, and the content explains it.

### `src/content/insights/b2b-data-for-b2b-sales.md` (queries 1, 2, 5)

- **Line 2** (`title`): `"B2B data for sales: what it is and how to use it"` — matches "b2b data" (query 1) but contains neither "marketing" nor "sales data" as a phrase, only "for sales."
- **Line 4** (`description`): `"Understand the essentials of B2B data with this comprehensive guide. Learn how to define, manage, and convert business information into successful sales."` — same gap: "B2B data" is there, "marketing data" and "sales data" are not. That's a plausible reason queries 2 and 5 sit 4-6 positions below query 1 even though they're the same topic.
- **Line 15** (body), under `<h2 id="">What types of B2B data are there</h2>`: the article names exactly 8 subtypes with their own `<h3>` — Account, Contact, Engagement, Intent, Firmographic, Demographic, Chronographic, Technographic. There is no "Marketing data" or "Sales data" subtype anywhere in that list, even though those are your #2 (820 impr.) and #5 (509 impr.) queries by volume on this page. There's no heading for a searcher (or Google) to match "marketing data" or "sales data" against.
- Structural gap that likely affects query 1 too: the compliance post (below) opens with a `<strong>Table of contents</strong>` jump-list right after the intro. This post has no equivalent — it's the longer piece (24 min read, ~15 H2/H3s) and has zero navigation aid, which hurts both dwell/structure signals and snippet eligibility for a broad, competitive query like "b2b data" at position 14.7.

**Specific fix, not generic:** add "Marketing data" and "Sales data" as named `<h3>` subtypes inside the existing "What types of B2B data are there" section (or add explicit synonyms in that section's opening sentence), and add a table of contents matching the compliance post's pattern.

### `src/content/insights/b2b-data-compliance.md` (queries 3, 4)

- **Line 4** (`description`): `"Ensure your B2B data protection is rock-solid and your cold outreach remains fully compliant with local laws. This guide covers essential definitions of data compliance and provides actionable steps to align your outbound sales strategy with current regulations and safety standards."` — never uses the phrase "personal data," which is the exact term in both underperforming queries. That's a likely explanation for 0 clicks at position 8.9–9.7: the meta description Google shows doesn't visually match what the searcher typed.
- **Line 15** (body): the page does define the distinction early — `<strong id="">Business data:</strong> Business data is information related to a business, such as its name, public email and landline number. Business data is not protected under data compliance laws.` But that distinction is never carried forward into practice. The `<h2 id="">Five guidelines for sending cold emails legally</h2>` section's `<h3>1. Source relevant contacts</h3>` talks only about ICP targeting — it never says "target business data, not personal data" as a guideline, despite that being precisely what both queries are asking for ("outreach without personal/disclosing personal data").
- Scanning every `<h2>`/`<h3>` in line 15, none of them contain the phrase "personal data" as a technique — it only appears in the legal-definitions section near the top. So there's no heading-level relevance match anywhere in the document for "outreach without personal data," which is exactly the phrase in both queries.

**Specific fix, not generic:** add a 6th guideline (or rewrite guideline 1) titled something like "Target business data, not personal data" that explicitly ties the business-vs-personal distinction already defined near the top into a concrete outreach practice, and put "personal data" in the meta description (line 4) so the SERP snippet matches the query.

---

## 3. "Using GA4, show me sessions and engagement rate for /pricing, /book-a-call, the /vs/* comparison pages, and the /solutions/* pages over the last 28 days..."

### GA4 — sessions & engagement rate, last 28 days (`properties/338895211`)

| Page | Sessions | Engagement rate |
|---|---|---|
| `/pricing/` | 27 | 77% |
| `/book-a-call/` | 12 | 66% |
| `/solutions/role/sdr/` | 10 | 30% |
| `/solutions/team/sales-teams/` | 3 | 66% |
| `/solutions/team/founders/` | 3 | 33% |
| `/vs/apollo/` | 1 | 0% |
| `/vs/zoominfo/` | 1 | 0% |
| `/vs/cognism/`, `/vs/lusha/`, `/vs/seamless/` | 0 | — (no sessions recorded at all) |
| `/solutions/` (overview), `/solutions/role/marketing/`, `/solutions/role/sales-leader/`, `/solutions/role/sales-operations/`, `/solutions/team/agencies/`, `/solutions/team/revops/` | 0 | — (no sessions recorded at all) |

Pulled by `pagePath` (any session that touched the page, not just landing sessions) so this counts internal traffic from nav/CTAs too, not just entries.

### GSC — queries driving traffic to each, last 28 days (`sc-domain:hubsell.com`)

- **`/pricing*`**: no data. Zero search impressions for any URL containing `/pricing` in 28 days.
- **`/book-a-call*`**: no data. Zero search impressions.
- **`/vs/*`**: no data. Zero search impressions for any comparison page — not low CTR, not buried position, literally absent from search results for every query in the period.
- **`/solutions/*`**: 13 rows, all with 1-6 impressions, 0 clicks. Every query is either the branded term `hubsell` (position 1, someone already knew the brand), the `site:hubsell.com` operator (not organic discovery), a customer name (`sensolus`), or noise (a scraper's negative-site-filtered `"hotjar"` query, matching the pattern from your first pull). The one real category query, `outbound sales`, hit the **Dutch** `/nl/solutions/team/sales-teams/` at position 71.3 — invisible.

### Which page underperforms relative to its distance from a decision

**The `/vs/*` comparison pages**, clearly. Per how you've told me to weigh this: comparison pages are named as a strong secondary signal that sits close to the decision, second only to pricing. The data says the opposite of "close to the decision" — they're not in the funnel at all:

- 3 of 5 comparison pages (`cognism`, `lusha`, `seamless`) had **zero sessions from any channel**, not just search, in 28 days. `apollo` and `zoominfo` had exactly one session each.
- Zero organic search impressions for any of them. That's not a ranking or CTR problem to fix with a meta description — these pages don't have a single query attached to them. Someone typing "hubsell vs apollo" or "apollo alternative" (both plausible, high-intent, bottom-of-funnel searches for a company you're positioned against) is not finding these pages at all.
- Compare that to `/pricing`: also zero search impressions, but it has real sessions (27) and a strong 77% engagement rate. That gap is explained by the pattern above it — `/pricing` is reached by internal navigation from people already on the site, which is exactly the intended path. The comparison pages have no equivalent internal path working for them either, since even that isn't producing sessions.

Second, milder finding: **6 of 9 built `/solutions/*` pages** (`marketing`, `sales-leader`, `sales-operations`, `agencies`, `revops`, and the `/solutions/` overview itself) had zero sessions from any source in 28 days. That's not underperformance so much as total dormancy — those pages aren't being reached by search, nav, or CTAs at all in the period, which is worth knowing regardless of ranking.

I'd treat `/vs/*` as the priority: it's the page type your own analysis criteria calls out as decision-adjacent, and it's the one with the starkest zero across every source, not a partial signal like `/solutions/` or `/pricing`.

---

## 4. "Find pages with impressions above 500 and CTR under 2 percent over the last 28 days. Read the title and meta description for each in the repo and propose rewrites. Show me a diff, do not write anything yet."

Filtered GSC pages (last 28 days, `sc-domain:hubsell.com`), impressions >500 and CTR <2%, deduped across URL variants (www/non-www, trailing slash) to one row per content page:

| Page | Impressions (all variants) | Clicks | Best position |
|---|---|---|---|
| `/insights/b2b-data-compliance/` | 14,020 | 6 | 8.8 |
| `/insights/cold-email-templates-b2b-sales/` | 6,582 | 5 | 18.2 |
| `/insights/b2b-data-for-b2b-sales/` | 6,213 | 1 | 17.1 |
| `/insights/` (blog index) | 3,937 | 2 | 57.8 |
| `/insights/lead-qualification-methods/` | 3,382 | 2 | 35.2 |
| `/insights/the-best-sales-assessment-tests/` | 2,743 | 1 | 21.3 |
| `/insights/sales-movies/` | 2,861 | 15 | 11.8 |
| `/insights/buying-signals-indicate-prospect-interested/` | 2,494 | 1 | 22.6 |
| `/insights/glossary-b2b-sales-and-marketing/` | 1,219 | 21 | 16.4 |
| `/insights/how-to-sell-to-manufacturing-companies/` | 990 | 1 | 35.5 |
| `/insights/sales-methodologies-complex-deals/` | 979 | 1 | 33.4 |
| `/insights/how-to-sell-to-pharmaceutical-companies/` | 977 | 2 | 24.9 |
| `/insights/books-about-sales/` | 949 | 2 | 33.3 |
| `/insights/digital-body-language-b2b-sales/` | 902 | 1 | 10.1 |
| `/insights/how-to-avoid-email-domain-blacklist-and-remove-ip/` | 588 | 0 | 57.3 |

**Excluding `/insights/` (blog index) from the rewrite:** its description is already 100 characters, well formed. Its problem is average position 57.8 — a ranking-depth problem, not a snippet problem. A title/description rewrite won't move a page that's on page 5+.

**Root cause on the other 14, verified by reading every file:** every single one has a `description` field of **283–300 characters**. `BaseLayout.astro:106` (`<meta name="description" content={description} />`) writes it to the page with no truncation, so the full string ships. Google's desktop snippet cuts at roughly 155–160 characters. I computed the exact cutoff for each — **all 14 are truncated mid-clause**, e.g. `b2b-data-compliance` cuts at `"...essential definitions of da"` and `sales-movies` cuts at `"...the entrepreneurial drive i"`. None of the 14 end on a complete sentence at the truncation point. That's a uniform, mechanical explanation for near-zero CTR across otherwise reasonable positions (8.8 to 35.5) — the searcher sees a sentence fragment, not a pitch.

Titles are all under 56 characters and fine as-is; I didn't touch them. Diffs below are description-only, each rewritten to a complete sentence under 140 characters so nothing gets cut:

```diff
--- src/content/insights/b2b-data-compliance.md
@@ line 4 @@
- description: "Ensure your B2B data protection is rock-solid and your cold outreach remains fully compliant with local laws. This guide covers essential definitions of data compliance and provides actionable steps to align your outbound sales strategy with current regulations and safety standards."
+ description: "How to run GDPR-compliant cold outreach using business data instead of personal data, plus the cold email laws for the EU, US, and beyond."
```

```diff
--- src/content/insights/b2b-data-for-b2b-sales.md
@@ line 4 @@
- description: "Understand the essentials of B2B data with this comprehensive guide. Learn how to define, manage, and convert business information into successful sales. Discover how a structured database of individual contacts and key data points can optimize your various marketing and sales activities today."
+ description: "What B2B data is, the types you need for sales and marketing, and how to source, clean, and use it to build pipeline."
```

```diff
--- src/content/insights/cold-email-templates-b2b-sales.md
@@ line 4 @@
- description: "Master your B2B outreach with these nine proven cold email templates. From AIDA and PAS to storytelling with the SAS formula, this comprehensive guide covers everything you need to know. Learn best practices for subject lines, personalization, and using quality data to increase your reply rates."
+ description: "9 proven B2B cold email templates using AIDA, PAS, and SAS, plus subject line and personalization tips to lift reply rates."
```

```diff
--- src/content/insights/sales-movies.md
@@ line 4 @@
- description: "Explore the diverse world of sales through these 15 iconic movies. From the high-pressure real estate of Glengarry Glen Ross to the entrepreneurial drive in The Founder, this list covers essential dramas and comedies that showcase the ethics, persistence, and reality of the sales profession."
+ description: "15 sales movies every salesperson should watch, from Glengarry Glen Ross to The Founder, ranked for the lessons they teach."
```

```diff
--- src/content/insights/buying-signals-indicate-prospect-interested.md
@@ line 4 @@
- description: "Identify and leverage 31 crucial buying signals to close more B2B deals. This guide categorizes signs from prospect calls, email outreach, and company insights—like new funding or leadership changes. Master how to spot interest through website behavior and social media to focus on the right leads."
+ description: "31 buying signals to spot in calls, emails, and company news, so you know which prospects are ready to close."
```

```diff
--- src/content/insights/lead-qualification-methods.md
@@ line 4 @@
- description: "Boost your sales efficiency by mastering lead qualification. This comprehensive guide explores 12 proven methodologies, including BANT, MEDDIC, and SPIN, to help you identify high-fit prospects early. Learn how to leverage automation and ideal customer profiles to improve your close rates."
+ description: "12 lead qualification methods, including BANT, MEDDIC, and SPIN, and when to use each to find high-fit prospects faster."
```

```diff
--- src/content/insights/the-best-sales-assessment-tests.md
@@ line 4 @@
- description: "Discover top sales assessment tests to streamline your hiring and find the best fit for your team. This guide covers popular tools like MBTI, DISC, and the Grit Scale, explaining how each reveals key personality traits, motivations, and behaviors essential for success in B2B sales roles today."
+ description: "The best sales assessment tests for hiring, including MBTI, DISC, and the Grit Scale, and what each one measures."
```

```diff
--- src/content/insights/glossary-b2b-sales-and-marketing.md
@@ line 4 @@
- description: "Navigate the complex world of B2B sales and marketing with our comprehensive glossary of technical and informal terms. Stay updated on the latest industry jargon and essential concepts to sharpen your strategy. This guide helps professionals master the language of modern business development."
+ description: "A complete glossary of B2B sales and marketing terms, from ABM to win rate, for reps, marketers, and RevOps."
```

```diff
--- src/content/insights/how-to-sell-to-manufacturing-companies.md
@@ line 4 @@
- description: "The manufacturing industry faces significant challenges post-pandemic, from revenue recovery to supply chain streamlining. Based on the 2021 State of Manufacturing Report, 91% of leaders are increasing digital transformation investments while 68% prioritize building supply chain resilience."
+ description: "How to sell to manufacturing companies: the buyers, sales cycle, and messaging that work in a post-pandemic industry."
```

```diff
--- src/content/insights/sales-methodologies-complex-deals.md
@@ line 4 @@
- description: "Explore thirteen powerful B2B sales methodologies designed to close complex deals and drive revenue. From SPIN Selling and The Challenger Sale to modern signal-based approaches, this guide reviews the core principles, unique benefits, and practical applications of each strategy to help your team succ"
+ description: "13 B2B sales methodologies for complex deals, from SPIN Selling to signal-based selling, compared side by side."
```

```diff
--- src/content/insights/how-to-sell-to-pharmaceutical-companies.md
@@ line 4 @@
- description: "Explore the rapid growth of the global pharmaceutical manufacturing market, valued at USD 404.1 billion in 2020. This post delves into the key drivers behind this expansion, including technological advancements and increasing healthcare needs, and what they mean for the future of the industry."
+ description: "How to sell to pharmaceutical companies: the regulations, buying committee, and sales approach that work."
```

```diff
--- src/content/insights/books-about-sales.md
@@ line 4 @@
- description: "Explore our curated list of the greatest sales books to master prospecting, negotiation, and the psychology of persuasion. Featuring timeless classics and modern guides from experts like Robert Cialdini and Chris Voss, these reads will help you build mindset and skills to close more deals."
+ description: "22 of the best sales books to read this year, covering prospecting, negotiation, and persuasion, from Cialdini to Voss."
```

```diff
--- src/content/insights/digital-body-language-b2b-sales.md
@@ line 4 @@
- description: "Master digital body language to enhance your virtual communication and B2B sales pitches. This guide explores key strategies from Erica Dhawan to build trust through emails and video calls. Learn how to read prospect cues, mirror behavior on Zoom, and ensure your digital persona is authentic."
+ description: "How to read digital body language on email and video calls, and use it to build trust with B2B buyers."
```

```diff
--- src/content/insights/how-to-avoid-email-domain-blacklist-and-remove-ip.md
@@ line 4 @@
- description: "Learn how to protect your sender reputation by understanding email blacklists. This guide covers the different types of IP and domain blacklists, common causes like high bounce rates and spam complaints, and actionable tips to stay off them. Plus, discover how to use email warm-up for outreach."
+ description: "How to avoid an email or IP blacklist, what causes it, and the exact steps to get delisted and protect your sender reputation."
```

Nothing written. Two things worth flagging before you say go:

1. This same 283–300-character pattern is very likely site-wide, not confined to these 14 — worth a full audit of every `description` field in `src/content/` and `src/data/` rather than fixing only the pages that happen to clear 500 impressions this month.
2. `sales-movies.md` already has 15 clicks at 0.52% CTR and position 11.8 — it's the one page here getting real traffic, so it's the best control to watch after a description change: if CTR moves and position doesn't drop, that's confirmation the fix works before touching the other 13.

---

## 5. "Compare the insights, glossary, knowledge and use-cases sections in GA4 and GSC over the last 90 days..."

### GA4 — sessions & engagement, last 90 days (`properties/338895211`)

| Section | Sessions | Avg. engagement rate | Avg. session duration | Distinct pages with traffic |
|---|---|---|---|---|
| Insights (blog) | 1,035 | **9.6%** | 28 sec | 109 |
| Glossary | 17 | 58.8% | 69 sec | 11 |
| Knowledge center | 63 | **77.8%** | **166 sec** | 17 |
| Use-cases | 18 | 50.0% | 58 sec | 13 |

One honest gap: I tried to pull "reached pricing" / "converted" per section directly, which is the real buyer test in your own criteria. I can't. I checked what events this GA4 property actually records (`eventName` breakdown, 90 days): `form_start` (296) and `form_submit` (205) exist, but **`form_submit_success` and `cta_click` — the event names `src/scripts/track.ts` and CLAUDE.md say get pushed — have never fired once in 90 days.** And when I pulled every landing page that produced a `form_submit`, every single one was an app.hubsell.com product page (`/auth/login`, `/settings/*`, `/flows/*`, `/signup/*`) — none from any marketing page, let alone these four sections. Two separate problems worth flagging on their own: the GTM-to-GA4 event names don't match what the code documents, and this GA4 property appears to be tracking app.hubsell.com traffic mixed in with the marketing site. Neither is fixable from this analysis; both should go on your list.

Given that, engagement rate and session duration are the best proxy I have for "behaves like a buyer" (reads, doesn't bounce), per your own criteria.

### GSC — 90 days (`sc-domain:hubsell.com`)

| Section | Impressions | Clicks | Top queries |
|---|---|---|---|
| Insights | 153,362 | 208 (0.14% CTR) | `sales movies`, `movies about sales`, `best sales movies`, `famous sales movies`, `b2b terms`, `b2b terminology`, `b2b landing page examples`, `lead qualification methods` |
| Glossary | 9,313 | **5** (0.05% CTR) | `crm`, `geo`, `sales pipeline stages`, `b2b data`, `mql`, `outbound sales`, `firmographic data`, `technographic data`, `ideal customer profile`, `wat is geo` — all single-word/definitional, all position 30-80, **zero clicks on every one** |
| Use-cases | 426 | **0** | `leadgeneratie tool`, `outbound sale software`, `multichannel outreach software`, `outbound platform`, `crm koppeling sales`, `direct sales software` |
| Knowledge center | **0** | 0 | none — not one query returned any data for `/knowledge/` in 90 days |

### The verdict

**Nothing here converts, by the record.** None of the four sections shows a single tracked conversion event in 90 days — that's the real headline, and it's a tracking gap, not necessarily a content one. Judging by the proxy you gave me (engagement, not sessions):

**Closest to buyer behavior, by query intent: Use-cases.** Its queries are the only ones on this list that are actual product-category searches — "leadgeneratie tool," "outbound sale software," "multichannel outreach software," "outbound platform" — someone typing that is shopping. It's also the smallest section by volume (426 impressions total) and ranks so badly (position 28-69) that it converts zero of that intent into a single click. This is a starved channel, not a dead one — worth more investment, not less.

**Closest to buyer behavior, by on-page engagement: Knowledge center.** 78% engagement rate, 166-second average session — the best numbers on this table by a wide margin. But be clear about what that means: it has zero organic search presence, so those 63 sessions in 90 days are existing app users looking up help articles, not prospects. Good content doing its actual job (support), not a funnel signal. Don't read its engagement rate as "this is working for growth" — it isn't built to.

**The audience CLAUDE.md says you don't care about: Glossary, unambiguously.** Every single top query is a bare term lookup — "crm," "geo," "mql," "b2b data" — the exact "students and job seekers" pattern named in your own criteria, at positions so deep (30-80) that even the impression volume barely means anything. 9,313 impressions and 5 clicks in 90 days. Zero of the top 20 queries carries buying intent.

**Blunt call: the glossary is not earning its build.** 66 terms times 3 locales is real, ongoing maintenance surface, and it produces one order of magnitude fewer sessions (17) than even the tiny use-cases section (18) despite 20x the impressions. It is functioning exactly as a dictionary, not as a funnel, and its own traffic pattern is the textbook definition of what you told me to exclude. I would not write more glossary entries. I would not call it broken enough to delete outright — it may still carry AEO/citation value per the business notes, and internal links from it to other pages aren't nothing — but as a section you're growing to bring in buyers, stop.

**Second, softer call: Insights is carrying dead weight.** 109 pages, 153K impressions, the most total clicks (208) — but the worst engagement rate of the four (9.6%) and the shortest sessions (28 seconds), and its top clicked queries are dominated by the same low-intent pattern as the glossary (`sales movies` cluster, bare `b2b terms`/`terminology`). It's not one thing to cut — `lead-qualification-methods` and the cold-email/data-compliance posts are legitimate practitioner content mixed into the same bucket as a movie listicle. I'd split how you judge it rather than write off the whole section: the listicle and glossary-style posts inside Insights are the same audience you don't want, just filed under a different content type than the actual Glossary.
