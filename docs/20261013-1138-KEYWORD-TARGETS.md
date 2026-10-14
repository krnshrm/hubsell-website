# hubsell.com keyword targets

Last updated 2026-10-14.

This file holds three things:

1. **Which page owns which keyword**, as built on 2026-10-13 and 2026-10-14.
2. **The internal linking structure** that feeds those pages.
3. **The Search Console check** to run against the keyword groups, with the 2026-10-13 baseline to compare against.

When a page's target keyword changes, update the ownership table here in the same change.

## 1. Page ownership

One page per keyword. A page that is not the owner should link to the owner, not compete with it.

| Page | Primary keyword | Secondary keywords |
|---|---|---|
| `/` | outbound sales platform | B2B data, GDPR, email and LinkedIn |
| `/use-cases/outbound-sales` | outbound sales software | links to the homepage as "outbound sales platform" |
| `/platform/multichannel-outreach` | multichannel outreach platform | email, LinkedIn and phone, LinkedIn automation (one mention) |
| `/use-cases/multichannel-outreach` | LinkedIn and email outreach (automation) | retargeted on 2026-10-13 so it no longer competes with the platform page |
| `/platform/live-data` | B2B data provider | GDPR-compliant B2B data (own section), B2B contact data, prospecting data |
| `/platform/enrichment` | contact data enrichment | verified work emails, direct dials (own section) |
| `/platform/crm-sync` | automatic CRM sync | Salesforce, HubSpot, and Pipedrive integration (own section) |
| `/platform/deliverability` | email deliverability | email verification, catch-all |
| `/platform/personalization` | personalized outreach at scale | |
| `/use-cases/lead-generation` | B2B lead generation software | Dutch page: leadgeneratie software, leadgeneratie tool |
| `/use-cases/account-based-outreach` | account-based outreach software | buying committee |
| `/vs/apollo`, `/vs/cognism`, `/vs/zoominfo`, `/vs/lusha`, `/vs/seamless` | "[competitor] alternative" | "[competitor] vs hubsell", "[competitor] competitors" |
| `/comparisons` | alternatives overview | sales engagement (not yet worked on) |
| `/integrations` | CRM integrations for Salesforce, HubSpot, and Pipedrive | LinkedIn |
| `/solutions/team/founders` | founder-led sales | |
| `/solutions/team/agencies` | outbound software for lead generation agencies | |
| `/pricing` | hubsell pricing | Sales Intelligence |

Blog guides keep the research searches (for example "what are buying signals", "what is intent data", "b2b data" as a bare term). They link on to the owning product page; a product page will not rank for these.

### Placement standard

Every owning page carries its primary keyword in:

- the `<title>`, near the start
- the H1. Where the H1 is a slogan, the keyword sits inside the H1 as a small lead-in line (homepage: "Outbound sales platform"; comparisons: "[competitor] alternative")
- the first sentence of the page
- at least one H2
- the meta description
- 3 to 6 natural mentions in the body, roughly 0.5 to 1.5% of the words

Image alt text describes the image; it is not a keyword slot.

### Where the copy lives

- Homepage H1 lead-in and first sentence: `src/components/HeroScene.astro` (`kw`, `sub`), title in `src/pages/index.astro`
- Platform pages: `src/data/platform-content.ts`, `platform.de.ts`, `platform.nl.ts` (the `extra` field adds a keyword section)
- Use-cases: `src/content/usecases*/` (`title`, `metaTitle`, `subhead`)
- Comparisons: `metaTitle` in `src/content/comparisons*/`; H1 lead-in, first sentence and decision H2 from `altName`, `altIntro` and `chooseH2` in `src/i18n/pages.ts`

German and Dutch copies change in the same commit as the English.

## 2. Internal linking structure

The aim is to move a reader one step closer to a decision: blog post to product page, product page to pricing or a comparison, then to the demo.

- **Demo:** every page links to `/book-a-call` through `SIGNUP_URL`. This is not the gap.
- **Pricing:** a "See pricing" text link sits next to "Book a demo" on platform, use-case, comparison and customer-story pages (top and bottom). It is a `.link`, not a second button. Labels: "See pricing", "Zu den Preisen", "Bekijk de prijzen" (`cta.seePricing` in `src/i18n/ui.ts`).
- **Comparisons:**
  - `/platform/live-data` links to the Cognism and ZoomInfo pages.
  - `/platform/enrichment` links to the Lusha, Seamless and Apollo pages.
  - The two homepage FAQs on Outreach/Salesloft and ZoomInfo/Apollo link to `/comparisons` and the ZoomInfo and Apollo pages.
  - The blog "Prospect data" topic links to `/comparisons`.
- **Blog template links:** `HUB_LINKS` in `src/pages/insights/[slug].astro` maps each topic to product pages. The link text is the target keyword ("Live B2B data provider", "Multichannel outreach platform", "B2B lead generation software"). "Sales skills" gets no product links.
- **Links inside blog text** (62 posts as of 2026-10-14):
  - Only existing words are turned into links; the post text stays verbatim.
  - At most 5 links per post, one per destination, product pages first, then related guides.
  - Never in headings, bold labels, tables of contents, example emails or example subject lines.
  - Skipped: posts tagged only "Sales skills" (movies, books, podcasts, courses, assessment tests, career advice) and the B2B terms glossary post. Their audience is students and job seekers.
- **Redirects for guessed URLs** (`public/_redirects`):
  - `/signup` and `/trial` go to the app signup page (302 while the trial CTA is still changing).
  - `/login` goes to the app.
  - `/demo` goes to `/book-a-call/`.
  - `/docs` goes to `/knowledge/`.
  - `/flow` and `/flows` go to `/platform/multichannel-outreach/`.

When a new product page or comparison ships, add it to `HUB_LINKS` and link it from the closest platform page.

## 3. Search Console check

Purpose: for every keyword group below, find where hubsell.com stands, which page Google ranks for it, and whether that is the owning page. Then turn the results into a ranked list of what to do.

### How to pull the data

- **Property:** use `sc-domain:hubsell.com`, keep only `www.hubsell.com` and `hubsell.com` (apex) rows, and normalise. The URL-prefix property `https://www.hubsell.com/` only holds data from 2026-07-27 and was sparse until September. On 2026-10-13 it showed 69k impressions for the last 3 months against 135k in the domain property. Switch back to the URL-prefix property once it covers 3 full months (from about 2026-12).
- **Date range:** the last 3 months, ending two days ago (GSC lag). For any group under 50 impressions, also look at the last 12 months.
- **Normalise page URLs before comparing anything.** Strip the host, the query string and the trailing slash, then add clicks and impressions together and take an impression-weighted average position. One page can appear as up to four rows otherwise.
  ```python
  def norm(url):
      p = re.sub(r'^https?://(www\.)?hubsell\.com', '', url.strip())
      return p.split('?')[0].rstrip('/') or '/'
  ```
- **Query matching:** treat each keyword as a group. Include close variants (singular and plural, word order, "tool" vs "software" vs "platform", with and without "b2b"). List the actual queries found under each group.
- **Leave out prompt-style queries:** 7 or more words, questions, or strings such as "refusal: cannot enrich…". They look automated (AI agents or rank trackers), get no clicks, and on 2026-10-13 made up most of A4 (5,725 impressions) and a large part of A7 (3,164). Report them as a separate count.
- **Treat as suspect:** "[competitor] vs upcell / scalelist / lead411", including "…for sdrs" and "…for agencies". These names appear nowhere on the site, the queries get no clicks, and they made up most of C4 and a third of C3.
- **Countries:** report target markets and everything else separately. Target markets are the 27 EU member states, the United Kingdom, Switzerland, Norway, the United States and Canada. Show everything else as one "out of market" total.
- **Localised pages:** a `/de/` or `/nl/` copy of the owning page counts as a match. Check the German groups against `/de/` pages as well as the whole site.
- **Subdomains:** check that no `app.` or `staging.` page ranks where a marketing page should (on 2026-10-13: 215 impressions, all brand).

### What to report for each keyword group

| Column | Meaning |
|---|---|
| Group | The keyword group name from this file |
| Top queries | Up to 5 real queries in the group, with impressions |
| Impressions | Total, target markets only |
| Clicks | Total, target markets only |
| CTR | Clicks divided by impressions |
| Avg position | Impression-weighted |
| Ranking page | The page Google shows most for this group (normalised) |
| Target page | The owning page (listed below) |
| Match | Yes if the ranking page is the owning page |
| Change | Against the 2026-10-13 baseline below |
| Verdict | One of: **win** (already top 10 on the right page), **push** (positions 8 to 20, right page), **redirect** (wrong page ranks, usually a blog post), **build** (no page or no impressions), **ignore** (wrong audience or no volume) |

After the table, list the 10 best opportunities in order: target-market impressions times how far the group is from page one, weighted towards commercial intent. Say plainly where the data is too thin to judge ("noise" is a valid answer).

The on-page changes went live on 2026-10-13 and 2026-10-14. Do not read a change before about 2026-11-11 as a result of them.

### Keyword groups and the 2026-10-13 baseline

Baseline: target markets only, 2026-07-11 to 2026-10-10, domain property normalised, prompt-style queries left out.

#### A. Core targets

| # | Group | Main queries | Target page | Baseline impr. / clicks / pos. | Baseline ranking page | Verdict then |
|---|---|---|---|---|---|---|
| A1 | Category | outbound sales platform, outbound sales software, outbound platform | `/` (homepage); "software" on `/use-cases/outbound-sales` | 91 / 0 / 33.1 | `/use-cases/outbound-sales` | build |
| A2 | Wedge | multichannel outreach platform, multichannel outreach tool, multi-channel outreach | `/platform/multichannel-outreach` | 279 / 2 / 21.9 | `/platform/multichannel-outreach` (56%) | push |
| A3 | Prospecting | b2b prospect data, b2b prospecting tool, prospecting platform | `/platform/live-data` | 91 / 0 / 24.5 | blog: b2b-data-for-b2b-sales | redirect |
| A4 | GDPR | gdpr-compliant b2b data, compliant b2b data, gdpr b2b contact data | `/platform/live-data` (GDPR section, added 2026-10-13) | 579 / 0 / 11.3 | blog: b2b-data-compliance | redirect |
| A5 | Brand | hubsell, hubsell reviews, hubsell pricing, hubsell login | `/`, `/hubsell-reviews`, `/pricing` | 1,306 / 35 / 9.1 | `/` | win |
| A6 | Engagement category | sales engagement platform, sales engagement software | `/comparisons` or a new page | 29 / 0 / 38.6 | `/glossary/sales-engagement` | build |
| A7 | Data provider | b2b data provider, b2b company data, b2b data services, b2b contact database | `/platform/live-data` | 13,154 / 0 / 19.1 (provider-intent subset: 1,589 at 17.3) | blog: b2b-data-for-b2b-sales | redirect |
| A8 | Lead generation | lead generation software, b2b lead generation tool, leadgeneratie software | `/use-cases/lead-generation` | 357 / 0 / 29.3 | `/nl/use-cases/lead-generation` | push |

#### B. LinkedIn automation and prospecting

| # | Group | Main queries | Target page | Baseline | Verdict then |
|---|---|---|---|---|---|
| B1 | LinkedIn automation | linkedin automation tool, linkedin outreach automation, automate linkedin outreach | `/use-cases/multichannel-outreach` | 0 | build |
| B2 | LinkedIn prospecting | linkedin prospecting tool, linkedin lead generation tool | `/use-cases/multichannel-outreach` | 0 | build |
| B3 | Sales Navigator | sales navigator automation, export sales navigator leads, sales navigator to crm | new page or `/platform/live-data` | 47 / 0 / 13.8, all "tips" searches on the blog | ignore |
| B4 | Safety | safe linkedin automation, linkedin automation without getting banned | FAQ or blog guide | 0 | build |

#### C. Competitor alternatives

Check each as "[name] alternative", "[name] alternatives", "[name] competitors", "[name] vs" and "hubsell vs [name]".

| # | Competitor | Target page | Baseline impr. / pos. | Verdict then |
|---|---|---|---|---|
| C1 | Apollo | `/vs/apollo` | 5 / 19.6 (page indexed but not ranking) | build |
| C2 | ZoomInfo | `/vs/zoominfo` | 211 / 31.0, split with `/nl/vs/zoominfo` and `/vs/cognism` | push |
| C3 | Cognism | `/vs/cognism` | 990 / 22.3; "alternative(s)" and "competitors" 273 at 23 to 31 | push |
| C4 | Lusha | `/vs/lusha` | 201 / 15.2, mostly suspect queries | push |
| C5 | Seamless.ai | `/vs/seamless` | 49 / 16.8 | push, thin |
| C6 | Outreach | new `/vs/outreach` | 1 | build |
| C7 | Salesloft | new `/vs/salesloft` | 0 | build |
| C8 | lemlist | new `/vs/lemlist` | 0 | build |
| C9 | La Growth Machine | new `/vs/la-growth-machine` | 0 | build |
| C10 | Waalaxy | new `/vs/waalaxy` | 0 | build |
| C11 | Expandi | new `/vs/expandi` | 0 | build |
| C12 | HeyReach | new `/vs/heyreach` | 0 | build |
| C13 | Clay | new `/vs/clay` | 0 | build |

#### D. hubsell's own sources

| # | Group | Main queries | Target page | Baseline |
|---|---|---|---|---|
| D1 | Post engagement | linkedin post engagement leads, people who liked a linkedin post | `/platform/live-data` or a new social prospecting page | 0 |
| D2 | Event attendees | linkedin event attendees list, export linkedin event attendees | same as D1 | 0 |
| D3 | Hiring signals | companies hiring sales reps, hiring signals, hiring intent leads | same as D1 | 1 |

#### E. Signals and intent

Decision 2026-10-13: these are research searches. The blog guides keep them and link to `/platform/live-data`; do not try to move them to a product page.

| # | Group | Main queries | Page | Baseline impr. / pos. |
|---|---|---|---|---|
| E1 | Buying signals | buying signals, sales signals, signal-based selling | blog: buying-signals-indicate-prospect-interested | 1,958 / 37.3 (12 months: 12,802) |
| E2 | Intent data | intent data, b2b intent data, buyer intent data | blog: intent-data-b2b-sales-marketing | 2,075 / 41.8 (12 months: 12,645) |
| E3 | Job changes | job change alerts, job change tracking | `/platform/live-data` | 0 |

#### F. Contact data and verification

| # | Group | Main queries | Target page | Baseline |
|---|---|---|---|---|
| F1 | Email finder | email finder, b2b email finder, find business email | `/platform/enrichment` | 1 |
| F2 | Phone finder | b2b phone number finder, mobile number finder, direct dial data | `/platform/enrichment` | 25, none with phone-finder intent |
| F3 | Verification | email verification tool, catch-all email verification | `/platform/deliverability` or `/platform/enrichment` | 13, on a glossary page |

#### G. Sales intelligence (the separate data product)

| # | Group | Main queries | Target page | Baseline |
|---|---|---|---|---|
| G1 | Sales intelligence | sales intelligence platform, tool, software | `/pricing` (Sales Intelligence section) or a new product page | 0 |

#### H. CRM integration

| # | Group | Main queries | Target page | Baseline |
|---|---|---|---|---|
| H1 | HubSpot | linkedin hubspot integration, sync linkedin to hubspot | `/platform/crm-sync`, `/integrations` | 8, Dutch queries unrelated to LinkedIn |
| H2 | Pipedrive | linkedin pipedrive integration, sync linkedin to pipedrive | same | 0 |
| H3 | Salesforce | linkedin salesforce integration, sync linkedin to salesforce | same | 0 |

#### I. Segments

| # | Group | Main queries | Target page | Baseline | Verdict then |
|---|---|---|---|---|---|
| I1 | Agencies | outbound for agencies, lead generation agency software | `/solutions/team/agencies` | 90, mostly people looking to hire an agency | ignore |
| I2 | Founders | founder-led sales, founder led outbound | `/solutions/team/founders` | 2 | build |
| I3 | SDR | sdr tools, sdr software, sdr productivity | `/solutions/role/sdr` | 323, definitions and outsourcing | ignore |

#### J. German

Check against `/de/` pages and the whole site. On 2026-10-13 the `/de/` pages got no German commercial searches at all.

| # | Group | Main queries | Target page | Baseline |
|---|---|---|---|---|
| J1 | Leadgenerierung | b2b leadgenerierung software, leadgenerierung tool, leads generieren b2b | `/de/use-cases/lead-generation` | 3 |
| J2 | Vertriebsautomatisierung | vertriebsautomatisierung, vertrieb automatisieren | `/de/` | 0 German queries |
| J3 | LinkedIn Automatisierung | linkedin automatisierung, linkedin akquise tool | `/de/platform/multichannel-outreach` | 0 |
| J4 | DSGVO | dsgvo-konforme b2b-daten, b2b daten dsgvo | `/de/platform/live-data` | 35, legal definitions on glossary pages (ignore) |
| J5 | Kontaktdaten | b2b kontaktdaten, b2b adressen kaufen, firmenkontakte datenbank | `/de/platform/enrichment` | 2 |
| J6 | Neukundengewinnung | neukundengewinnung b2b, akquise tool, kaltakquise software | `/de/` | 0 |

## Out of scope

- **AI SDR, AI sales agent:** hubsell does not write messages with AI, so ranking for these would bring the wrong expectations. Only report them if they bring real target-market impressions (none on 2026-10-13).
- **Glossary-only terms** (what is DMARC, what is a cadence): these pull students and job seekers. Report them only if one of the groups above lands on a glossary page.
- **Sales skills posts** (movies, books, podcasts, courses, assessment tests, career advice): high impressions, wrong audience. No growth tasks and no product links.
- **Free email or B2C intent** (free email finder, find anyone's phone number): wrong audience.

## Open items

- `/use-cases/multichannel-outreach`: the title targets "LinkedIn and email outreach automation", but "LinkedIn automation" is not yet in the H1 or body.
- `/use-cases/outbound-sales`: title is still the bare "Outbound Sales Software | hubsell".
- `/integrations`: title is still "Integrations: connect hubsell to your CRM and channels"; only the H1 changed.
- **Groups with no page to rank:** B1, B2, B4, C6 to C13, D1 to D3, E3, F1, F2, G1, H1 to H3, I2, J1 to J3, J5, J6.
- **Next check:** about 2026-11-11. Re-run section 3 against the baseline. Also pull GA4 (host `www.hubsell.com`) for sessions that go from a blog post to `/pricing` and `/book-a-call`. GA4 only holds consented data from 2026-09-30, so this is the first point with enough sessions to read.

## Output of a check

1. The full table, one row per group, sorted by section, with the change against the baseline.
2. The top 10 opportunities, each with: group, current position and page, the proposed action (push, redirect, build), and why.
3. A short list of groups with no data at all, so we know which pages have to be built before they can rank.
