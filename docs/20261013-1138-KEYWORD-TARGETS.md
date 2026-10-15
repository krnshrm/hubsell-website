# hubsell.com keyword targets: Search Console check

Purpose: for every keyword below, find out where hubsell.com stands today, which page Google ranks for it, and whether that is the page that should own it. Then turn the results into a ranked list of what to do.

## How to pull the data

- **Properties:**
  - Use `https://www.hubsell.com/` for the main pull.
  - Use `sc-domain:hubsell.com` only to check for `app.` or `staging.` pages ranking where a marketing page should.
- **Date range:** the last 3 months (GSC data lags about two days). For anything with fewer than 50 impressions, also look at the last 12 months.
- **Normalise page URLs before comparing anything.** Strip the host, the query string and the trailing slash, then add clicks and impressions together and take an impression-weighted average position. One page can appear as up to four rows otherwise.
  ```python
  def norm(url):
      p = re.sub(r'^https?://(www\.)?hubsell\.com', '', url.strip())
      return p.split('?')[0].rstrip('/') or '/'
  ```
- **Query matching:** treat each keyword as a group. Include close variants (singular and plural, word order, "tool" vs "software" vs "platform", with and without "b2b"). List the actual queries found under each group.
- **Countries:** report target markets and everything else separately. Target markets are the 27 EU member states, the United Kingdom, Switzerland, Norway, the United States and Canada. Show everything else as one "out of market" total.
- **German keywords:** check against the `/de/` pages as well as the whole site.

## What to report for each keyword group

| Column | Meaning |
|---|---|
| Group | The keyword group name from this file |
| Top queries | Up to 5 real queries in the group, with impressions |
| Impressions | Total, target markets only |
| Clicks | Total, target markets only |
| CTR | Clicks divided by impressions |
| Avg position | Impression-weighted |
| Ranking page | The page Google shows most for this group (normalised) |
| Target page | The page that should own it (listed below) |
| Match | Yes if the ranking page is the target page |
| Verdict | One of: **win** (already top 10 on the right page), **push** (positions 8 to 20, right page), **redirect** (wrong page ranks, usually a blog post), **build** (no page or no impressions), **ignore** (wrong audience or no volume) |

After the table, list the 10 best opportunities in order: target-market impressions times how far the group is from page one, weighted towards commercial intent. Say plainly where the data is too thin to judge ("noise" is a valid answer).

## Keyword groups

### A. Core targets (already chosen)

| # | Group | Main queries | Target page | Known so far |
|---|---|---|---|---|
| A1 | Category | outbound sales platform, outbound sales software, outbound platform | `/` (homepage) | |
| A2 | Wedge | multichannel outreach platform, email and linkedin outreach, linkedin and email automation | `/platform/multichannel-outreach` | Platform page around position 15 |
| A3 | Prospecting | b2b prospecting tool, sales prospecting software, prospecting platform | `/platform/live-data` | |
| A4 | GDPR | gdpr-compliant b2b data, gdpr compliant prospecting, compliant b2b data, gdpr b2b contact data | `/platform/live-data` (GDPR section) | "compliant b2b data" around position 7; homepage appeared for "where can i get gdpr-compliant b2b data for outbound sales?" |
| A5 | Brand | hubsell, hubsell reviews, hubsell pricing, hubsell login | `/`, `/hubsell-reviews`, `/pricing` | |
| A6 | Engagement category | sales engagement platform, sales engagement software | `/platform` (overview, since 2026-10-15) | |
| A7 | Data provider | b2b contact data, b2b data provider, b2b contact database | `/platform/enrichment` or `/platform/live-data` | Currently lands on a blog post |
| A8 | Lead generation | lead generation software, b2b lead generation tool | `/use-cases/lead-generation` | |

### B. LinkedIn automation and prospecting

| # | Group | Main queries | Target page |
|---|---|---|---|
| B1 | LinkedIn automation | linkedin automation tool, linkedin outreach automation, automate linkedin outreach | `/platform/multichannel-outreach` or a new LinkedIn outreach page |
| B2 | LinkedIn prospecting | linkedin prospecting tool, linkedin lead generation tool | same as B1 |
| B3 | Sales Navigator | sales navigator automation, export sales navigator leads, sales navigator to crm | new page or `/platform/live-data` |
| B4 | Safety | safe linkedin automation, linkedin automation without getting banned | FAQ or blog guide |

### C. Competitor alternatives

Check each as "[name] alternative", "[name] alternatives", "[name] vs" and "hubsell vs [name]".

| # | Competitor | Existing page | Target page |
|---|---|---|---|
| C1 | Apollo | `/vs/apollo` | same |
| C2 | ZoomInfo | `/vs/zoominfo` | same |
| C3 | Cognism | `/vs/cognism` | same |
| C4 | Lusha | `/vs/lusha` | same |
| C5 | Seamless.ai | `/vs/seamless` | same |
| C6 | Outreach | none | new `/vs/outreach` |
| C7 | Salesloft | none | new `/vs/salesloft` |
| C8 | lemlist | none | new `/vs/lemlist` |
| C9 | La Growth Machine | none | new `/vs/la-growth-machine` |
| C10 | Waalaxy | none | new `/vs/waalaxy` |
| C11 | Expandi | none | new `/vs/expandi` |
| C12 | HeyReach | none | new `/vs/heyreach` |
| C13 | Clay | none | new `/vs/clay` |

### D. hubsell's own sources

| # | Group | Main queries | Target page |
|---|---|---|---|
| D1 | Post engagement | linkedin post engagement leads, scrape linkedin post likes, people who liked a linkedin post | `/platform/live-data` or a new social prospecting page |
| D2 | Event attendees | linkedin event attendees list, export linkedin event attendees | same as D1 |
| D3 | Hiring signals | companies hiring sales reps, hiring signals, hiring intent leads | same as D1 |

### E. Signals and intent

| # | Group | Main queries | Target page |
|---|---|---|---|
| E1 | Buying signals | buying signals, sales signals, signal-based selling | `/platform/live-data`; glossary entry exists |
| E2 | Intent data | intent data tool, b2b intent data | same; glossary entry exists |
| E3 | Job changes | job change alerts, job change tracking | same |

### F. Contact data and verification

| # | Group | Main queries | Target page |
|---|---|---|---|
| F1 | Email finder | email finder, b2b email finder, find business email | `/platform/enrichment` |
| F2 | Phone finder | b2b phone number finder, mobile number finder, direct dial data | `/platform/enrichment` |
| F3 | Verification | email verification tool, catch-all email verification, verify catch-all emails | `/platform/deliverability` or `/platform/enrichment` |

### G. Sales intelligence (the separate data product)

| # | Group | Main queries | Target page |
|---|---|---|---|
| G1 | Sales intelligence | sales intelligence platform, sales intelligence tool, sales intelligence software | `/pricing` (Sales Intelligence section) or a new product page |

### H. CRM integration

| # | Group | Main queries | Target page |
|---|---|---|---|
| H1 | HubSpot | linkedin hubspot integration, sync linkedin to hubspot | `/platform/crm-sync`, `/integrations` |
| H2 | Pipedrive | linkedin pipedrive integration, sync linkedin to pipedrive | same |
| H3 | Salesforce | linkedin salesforce integration, sync linkedin to salesforce | same |

### I. Segments

| # | Group | Main queries | Target page |
|---|---|---|---|
| I1 | Agencies | outbound for agencies, lead generation agency software, software for lead gen agencies | `/solutions/team/agencies` |
| I2 | Founders | founder-led sales, founder led outbound | `/solutions/team/founders` |
| I3 | SDR | sdr tools, sdr software, sdr productivity | `/solutions/role/sdr` |

### J. German

Check against `/de/` pages and the whole site.

| # | Group | Main queries | Target page |
|---|---|---|---|
| J1 | Leadgenerierung | b2b leadgenerierung software, leadgenerierung tool, leads generieren b2b | `/de/use-cases/lead-generation` |
| J2 | Vertriebsautomatisierung | vertriebsautomatisierung, sales automation software, vertrieb automatisieren | `/de/` |
| J3 | LinkedIn Automatisierung | linkedin automatisierung, linkedin akquise tool, linkedin outreach tool | `/de/platform/multichannel-outreach` |
| J4 | DSGVO | dsgvo-konforme b2b-daten, dsgvo konforme leadgenerierung, b2b daten dsgvo | `/de/platform/live-data` |
| J5 | Kontaktdaten | b2b kontaktdaten, b2b adressen kaufen, firmenkontakte datenbank | `/de/platform/enrichment` |
| J6 | Neukundengewinnung | neukundengewinnung b2b, akquise tool, kaltakquise software | `/de/` |

## Out of scope

- **AI SDR, AI sales agent:** hubsell does not write messages with AI, so ranking for these would bring the wrong expectations. Only report them if they already bring real target-market impressions.
- **Glossary-only terms** (what is DMARC, what is a cadence): these pull students and job seekers. Report them only if one of the groups above lands on a glossary page.
- **Free email or B2C intent** (free email finder, find anyone's phone number): wrong audience.

## Output

1. The full table, one row per group, sorted by section.
2. The top 10 opportunities, each with: group, current position and page, the proposed action (push, redirect, build), and why.
3. A short list of groups with no data at all, so we know which pages have to be built before they can rank.
