# Site analysis playbook

The standard, repeatable analyses for hubsell.com. Every run follows the recipes
below and ends in tasks: specific changes to specific files, ranked by how close
they sit to a corporate-email conversion. Run it through the `/site-analysis`
skill (`.claude/skills/site-analysis/SKILL.md`), which reads this file.

This file is the single source of truth for the recipes. Edit it in place when a
recipe changes; do not copy recipes into the skill.

Read CLAUDE.md first. Its sections "What counts as a conversion", "What a good
visitor looks like", "Traffic we do not care about" and "Three data traps" are
assumed here and not repeated.

---

## 1. How a run works

| Cadence | Command | Runs |
|---|---|---|
| Weekly | `/site-analysis weekly` | Health check (H), form friction (2.5), lead count from Plunk (3.1, counts only) |
| Every two weeks | `/site-analysis biweekly` | H, all of Part 2 |
| Monthly | `/site-analysis monthly` | H, Part 1, Part 2, Part 3 |
| One analysis | `/site-analysis 1.3` | H, then the named analysis |

Steps for every run:

1. Run the health check (section 3). If it fails, stop and report the failure.
   Do not analyse data the health check says is broken.
2. Read the task ledger (`docs/analyses/*-TASK-LEDGER.md`, the newest one). Note
   the open tasks, so the run does not propose them again.
3. Run the analyses for the cadence.
4. After pulling data, read the real source file for every page a task touches
   (`src/pages`, `src/data`, `src/content`). A task that does not cite the file
   and the current text is not finished.
5. Write the report (template in section 8) to
   `docs/analyses/YYYYMMDD-HHMM-<CADENCE>-REPORT.md`.
6. Update the task ledger in place: add new tasks, close done ones, record the
   follow-up result of tasks closed 28 or more days ago.
7. Do not change site code during an analysis run. Tasks are proposals; the
   owner picks which to do.

---

## 2. Shared rules

### Windows

- Default window: the last 28 complete days. GA4 `28daysAgo` to `yesterday`.
  GSC lags about two days, so end GSC windows 3 days ago and never read the last
  two days as a drop.
- Comparison window: the 28 days before that.
- Weekly runs use the last 7 complete days and compare with the 7 before.
- Default 20 rows per pull. Go wider only when a recipe says so.

### Known breaks in the data

State any break that falls inside a window at the top of the report. Do not
report a change across a break as a real movement.

| Date | Break |
|---|---|
| 2026-09-30 | GTM starts loading on the site. Before this, GA4 has no `cta_click` or `form_*` events from www. Event data counts only from the production deploy that put the snippet live, and only for visitors who allow analytics. |
| 2026-09-30 | USD/GBP pricing toggle removed; pricing EUR only. |
| not yet set | Free trial launches and `SIGNUP_URL` switches. Trial start becomes the primary conversion. Record the date here and in CLAUDE.md when it ships. |
| 2026-10-10 | GA4 custom dimensions `form_id`, `field`, `cta_location`, `cta_destination`, `cta_text` registered (task T-001). Breakdowns by form, field or CTA exist only from this date; registration does not apply backwards. |

### Normalisation and filters

- **GSC pages:** always normalise with the `norm()` function in CLAUDE.md, then
  aggregate clicks and impressions and take an impression-weighted position.
- **GSC property:** `https://www.hubsell.com/` for marketing questions.
  `sc-domain:hubsell.com` only for history or subdomain problems.
- **GA4:** always filter `hostName` exactly `www.hubsell.com`.
- **GA4 conversions:** count `eventCount` with `eventName` =
  `form_submit_success`. Do not use the `conversions` / `keyEvents` metric
  unless the key-event setup has been checked in the same run.

### Target markets

In: the 27 EU member states, plus the United Kingdom, Switzerland, Norway, the
United States and Canada. Everything else is out of market: report it as one
total, and exclude it when judging a page.

GA4, dimension `countryId` (ISO alpha-2):

```
AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE
GB CH NO US CA
```

GSC, dimension `country` (ISO alpha-3, lower case):

```
aut bel bgr hrv cyp cze dnk est fin fra deu grc hun irl ita lva ltu lux mlt nld
pol prt rou svk svn esp swe gbr che nor usa can
```

### Audience exclusions

- `/glossary/*` (all locales): report its totals once, never generate growth
  tasks for it. The correct task for a glossary page is usually none.
- Queries classified as student or informational (section 4, analysis 1.1): never
  generate tasks to grow them.
- Out-of-market countries: see above.

### When a number is noise

Volume is low (about 130 GSC clicks in 28 days on 2026-09-04). Apply these floors
before calling anything a finding:

| Data | Minimum before drawing a conclusion |
|---|---|
| GSC query or page CTR | 100 impressions in the window |
| GSC position change | 50 impressions in both windows, and a move of at least 3 positions |
| GSC clicks change | at least 10 clicks and 30 percent, both |
| GA4 rate (engagement, pricing reach, conversion) | 30 sessions behind the rate |
| GA4 event comparisons | 20 events in each window; below that, report counts only |

Below the floor, write "not enough data" and move on. "This is noise" is a valid
result.

### Intent classes for GSC queries

Used by 1.1 and by every Part 1 analysis that decides whether a query is worth a
task. Match rules in order; the first match wins.

| Class | Rule | Worth a task? |
|---|---|---|
| Branded | contains `hubsell` | Only if position is not 1 or the page is wrong |
| Competitor | contains apollo, zoominfo, cognism, lusha, seamless, outreach, salesloft, `alternative`, ` vs `, `versus`, `competitor` | Yes, highest value |
| Student or informational | contains `meaning`, `definition`, `define`, `examples`, `pdf`, `quotes`, `movie`, `film`, `book`, `interview`, `salary`, `job`, `course`, `essay`, `quiz`, `template` | No |
| Commercial | contains `software`, `tool`, `platform`, `pricing`, `price`, `cost`, `provider`, `vendor`, `best`, `top`, `automation`, `api`, `crm` | Yes |
| Problem | outbound, prospecting, cold email, deliverability, lead generation, lead gen, sales intelligence, b2b data, contact data, linkedin outreach, sequence, sdr, bdr, pipeline, enrichment, gdpr | Yes |
| Unclassified | anything else | Judge by hand and say which class you chose and why |

Add a term to this table when a run classifies one by hand more than once.

---

## 3. Health check (H)

Runs first, every time. Produces no tasks unless something is broken, and then
the only task is the fix.

| # | Check | How | Fails when |
|---|---|---|---|
| H.1 | Events reach GA4 from www | `run_report`, last 7 days, dimension `eventName`, metric `eventCount`, filter `hostName` = `www.hubsell.com` | `page_view` missing, or `cta_click` is 0 across 7 days |
| H.2 | App traffic share | Same report without the host filter, dimension `hostName` | Shown for context; never fails. Any number reported later must be the filtered one. |
| H.3 | Custom dimensions | `get_custom_dimensions_and_metrics` | `form_id`, `field`, `cta_location`, `cta_destination` not registered. Until fixed, skip the per-form and per-field breakdowns and say so. |
| H.4 | form_error spike | `run_report`, last 7 days vs the 7 before, `eventName` in (`form_start`, `form_error`, `form_submit_success`) | `form_error` more than doubles with at least 10 events, or errors exceed successes |
| H.5 | Sitemap | `get_sitemaps` on `https://www.hubsell.com/` | Errors, or last download older than 14 days |
| H.6 | Key pages indexed | `batch_url_inspection` on `/`, `/pricing/`, `/book-a-call/`, and the two `/vs/*` pages with the most impressions | Any page not indexed, or a Google-chosen canonical that differs from ours |
| H.7 | GSC is live | `get_performance_overview`, last 7 days | Zero impressions on any full day older than 3 days |

Before acting on any indexing failure, read `docs/20260724-1520-SEARCH-CONSOLE.md`.

---

## 4. Part 1: Search visibility

Question: are the right people finding us, and what do we change to get more of
them? Runs monthly. Every analysis uses the 28-day window, the www URL-prefix
property, the target-market filter where the tool allows it, and the rules in
section 2.

### 1.1 Intent mix

- **Pull:** `get_advanced_search_analytics`, dimension `query`, sorted by
  impressions, up to 500 rows.
- **Do:** classify every query (section 2). Sum clicks and impressions per class.
  Compare the share of commercial + problem + competitor impressions with the
  previous run.
- **Output:** a table of class, impressions, clicks, CTR, share. No tasks by itself;
  it frames the rest of Part 1.

### 1.2 CTR gaps

- **Pull:** `get_advanced_search_analytics`, dimensions `query,page`, 28 days.
- **Do:** normalise pages. Keep competitor, commercial and problem queries with at
  least 100 impressions and position 1 to 10. Work out the site's own median CTR
  per position band (1 to 3, 4 to 6, 7 to 10) from non-branded queries. Flag
  rows whose CTR is below half the median for their band.
- **Then:** read the page's title and meta description in the source.
- **Task:** a new title and description, as before and after text, with the
  file. Titles under 60 characters, descriptions under 155, the query's words
  near the front.

### 1.3 Striking distance

- **Pull:** as 1.2.
- **Do:** keep competitor, commercial and problem queries with position 5 to 20 and
  at least 100 impressions. Rank by impressions.
- **Then:** for the top 5, read the page and check: does it answer the query in
  its own section, is the query's wording in an H2, how deep is the coverage
  compared with what the query asks for, and do other pages link to it.
- **Task:** the specific content to add or change and where, plus internal links
  to add from named pages.

### 1.4 Decay

- **Pull:** `compare_search_periods`, dimension `page`, 28 days against the
  previous 28.
- **Do:** normalise. Keep pages that pass the clicks-change floor and lost clicks
  or position. Leave out glossary pages.
- **Then:** `get_search_by_page_query` for each decaying page to see which queries
  fell.
- **Task:** a refresh of the specific sections tied to the lost queries. For an
  in-depth guide, refresh. For a thin post, consider merging (see 1.5).

### 1.5 Cannibalisation

- **Pull:** `get_advanced_search_analytics`, dimensions `query,page`, 28 days.
- **Do:** normalise. Find competitor, commercial or problem queries with at least
  50 impressions where two or more different pages each get at least 20 percent
  of the impressions.
- **Then:** read both pages.
- **Task:** pick the page that should own the query. Either merge the other into
  it (with a 301 in `public/_redirects`), or narrow the weaker page's focus and
  link it to the owner.

### 1.6 Content gaps

- **Pull:** as 1.2, plus the zero-click tail ranked by impressions.
- **Do:** competitor, commercial or problem queries with impressions but position
  above 20, or where the ranking page is not about the query (for example a
  glossary entry ranking for a buying query).
- **Task:** a new in-depth guide, with the working title, the queries it targets,
  an outline of H2s and the pages that should link to it. Never a glossary term
  and never a short post (see CLAUDE.md "What has already worked").

### 1.7 Indexing and technical

- **Pull:** `check_indexing_issues` and `list_sitemaps_enhanced` on
  `https://www.hubsell.com/`. `batch_url_inspection` on the 10 decision-path pages
  with the most impressions (pricing, `/vs/*`, solutions, platform, customer
  stories).
- **Do:** list pages not indexed, canonical mismatches, redirect chains, 404s
  that still get impressions.
- **Task:** the fix, with the file (`public/_redirects`, the page's frontmatter,
  `astro.config.mjs`).

### 1.8 Locales

- **Pull:** `get_advanced_search_analytics`, dimensions `page,country`, filter
  page contains `/de/` and then `/nl/`.
- **Do:** check that `/de/` pages get their impressions mostly from `deu`, `aut`,
  `che`, and `/nl/` from `nld`, `bel`. If English pages outrank the localised
  version in those countries for the same query, check hreflang in the built HTML
  and `translatedRoutes` in `src/i18n/ui.ts`.
- **Task:** hreflang fixes, or a translation of an English page that gets
  meaningful impressions in de or nl markets.

### Part 1 task list

End Part 1 with its tasks in the ledger format (section 7), most valuable first.

---

## 5. Part 2: Conversion

Question: of the people who arrive, why are more of them not submitting? Runs
every two weeks. GA4 only, `hostName` = `www.hubsell.com`, target markets only.
Every report states how many days of event data the window holds after the
2026-09-30 break.

### 2.1 Funnel

- **Pull:** `run_funnel_report`, 28 days, steps:
  1. `session_start`
  2. `page_view` where `pagePath` is `/pricing`, `/de/pricing` or `/nl/pricing` (with or without trailing slash)
  3. `form_start`
  4. `form_submit_success`

  Closed funnel. Break down by `sessionDefaultChannelGroup` if the step 1 count is
  above 300.
- **Also:** share of sessions with more than one page view (`run_report`,
  `screenPageViewsPerSession` and `sessions` by `landingPage`).
- **Do:** find the step with the biggest drop in absolute sessions.
- **Task:** aimed at that step. A drop from landing to pricing points at internal
  linking and CTAs on entry pages. A drop from pricing to `form_start` points at
  pricing copy and the CTA on `/pricing`. A drop from `form_start` to success
  points at 2.5.

### 2.2 Landing page quality

- **Pull:** `run_report`, dimension `landingPage`, metrics `sessions`,
  `engagementRate`, `screenPageViewsPerSession`, 28 days. Then the same with
  dimension `pagePath` added and filtered to `/pricing`, which gives sessions per
  landing page that reached pricing. Then `eventCount` for `form_submit_success`
  by `landingPage`.
- **Do:** one table per landing page: sessions, engagement, pages per session,
  pricing reach rate, submissions. Glossary rows shown as one total.
- **Task:** for pages with real traffic and low pricing reach, the specific link
  or CTA to add and where in the page source.

### 2.3 Decision pages

- **Pull:** `run_report`, dimension `pagePath`, metrics `screenPageViews`,
  `userEngagementDuration`, `engagementRate`, filtered to paths containing `/pricing`, `/vs/`,
  `/solutions/`, `/platform/`, `/customerstories/`, `/book-a-call`, 28 days.
  Plus `cta_click` count by `pagePath` for the same pages.
- **Do:** average engagement time per view, and CTA clicks per 100 views.
  `/pricing` gets its own line every run.
- **Task:** for a decision page with views above the floor and CTA clicks per
  100 views below the median of this group, the copy or layout change, with the
  file.

### 2.4 CTA performance

- **Needs:** `cta_location` registered (H.3). If not, skip with a note.
- **Pull:** `run_report`, `eventName` = `cta_click`, dimensions
  `customEvent:cta_location`, `pagePath`, 28 days.
- **Do:** clicks by location (nav, hero, content, pricing, footer) and by page.
- **Task:** move or rewrite CTAs that sit on pages with traffic but never get
  clicked. Do not propose a second CTA colour or secondary buttons; one primary
  CTA is a locked decision.

### 2.5 Form friction

- **Needs:** `form_id` and `field` registered (H.3) for the breakdowns. Without
  them, report totals only.
- **Pull:** `run_report`, `eventName` in (`form_start`, `form_error`,
  `form_submit_success`), dimensions `eventName`, `customEvent:form_id`,
  `customEvent:field`. Weekly: 7 days. Biweekly and monthly: 28 days.
- **Also, if available:** Cloudflare observability for the Pages Function
  `functions/api/subscribe.ts`, which logs `form_accept` and `form_reject` with
  `reason` and email `domain` and does not depend on cookie consent. Group by
  `reason`. If the tools cannot reach Pages Function logs, say so once in the
  ledger and stop trying.
- **Do:** start to success rate per form, and errors by field. For server rejects,
  list the rejected domains and judge each: real company (a false positive) or
  free/disposable/junk (correct).
- **Task:** a false positive gets a task to fix the domain rule (see
  `docs/BLOCKING-DOMAINS.md`). Do not describe the bot protection in a report; the
  repo is public. Report "rejected by the gate" and the reason code only.

### Part 2 task list

End Part 2 with its tasks in the ledger format (section 7).

---

## 6. Part 3: Lead quality

Question: which submissions are real buyers, and is that number moving? Runs
monthly, plus a count in the weekly run.

The form already rejects free email providers, so every Plunk contact is a
corporate address. Lead quality here means company fit, not email type.

**Needs:** the Plunk MCP server, read-only (`PLUNK_READ_ONLY=true`), added
locally by the repo owner. If the Plunk tools are not available, skip Part 3 and
say so. Never call a Plunk write tool.

### 3.1 Submissions

- **Pull:** Plunk list contacts. Keep contacts created inside the window.
- **Do:** count by `source` (the form name) and by week. Weekly runs stop here.
- Compare with GA4 `form_submit_success` for the same window. A gap is expected
  (consent), but Plunk higher than GA4 by more than 3 to 1 means tracking is
  losing events; record it.

### 3.2 Company fit

- **Do:** for each contact, from the email domain and `company` field, classify:

  | Class | Meaning |
  |---|---|
  | Fit | B2B company in a target market, plausible buyer |
  | Agency | Sells outbound or lead gen to clients. A distinct segment, not a reject |
  | Out of market | B2B but outside the target markets |
  | Not a buyer | B2C, student, job seeker, vendor pitching us, competitor |
  | Test or junk | Internal, test, obvious spam that passed the gate |

  Classify from what the contact record shows and the domain itself. If the class
  is unclear, mark it unclear; do not guess.
- **Report:** counts per class. Do not copy names, email addresses or messages
  into the report; this repo is public. Domains of companies classed Fit may be
  listed only as counts per country.
- **Join to traffic:** contacts carry no landing page or source, so match only by
  date against GA4 `form_submit_success` by `landingPage`. Say the match is
  approximate. Task T-002 tracks the fix.

### Part 3 task list

Tasks here are usually about where to send more Fit traffic (back to Part 1 and
2) or about stopping Not-a-buyer submissions without blocking Fit ones.

---

## 7. Tasks and the ledger

### Task format

Every task, in every part, uses these fields:

| Field | Content |
|---|---|
| ID | `T-NNN`, next free number in the ledger |
| Part | 1, 2 or 3, plus the analysis number (`1.3`) |
| Priority | P1, P2 or P3, rules below |
| What | The change, one sentence |
| Where | Exact file path(s) |
| Why | The metric and the evidence, with numbers and window |
| Expected effect | Which number should move, and in which direction |
| Effort | S (under an hour), M (half a day), L (more) |
| Status | open, done, dropped, waiting |

### Priority rules

- **P1:** blocks measurement, or blocks conversions on the decision path
  (pricing, `/vs/*`, `/book-a-call`, forms).
- **P2:** improves a decision page, or a competitor, commercial or problem query
  above the noise floor.
- **P3:** everything else that is still worth doing.

Inside a priority, lower effort first.

### Combined top 10

Every report ends with one top 10 across all parts. Take the P1 tasks first,
then P2, then P3. At least 3 of the 10 must come from Part 2 when Part 2 produced
3 or more tasks, so search tasks do not crowd out conversion tasks only because
there are more of them.

### The ledger

`docs/analyses/*-TASK-LEDGER.md` is updated in place, never copied. Each run:

- adds new tasks, after checking an open task does not already cover it
- marks tasks the owner has finished as done, with the date (check git log for
  the change)
- for tasks done 28 or more days ago, pulls the metric named in "Expected
  effect" and records the result, including "no change" and "not enough data"
- drops tasks the data no longer supports, with the reason

---

## 8. Report template

```markdown
# Site analysis: <cadence>, <YYYY-MM-DD>

Window: <start> to <end> (GA4), <start> to <end> (GSC).
Compared with: <start> to <end>.
Data breaks inside the window: <list, or none>.
Days of GA4 event data in the window: <n>.

## Health check
<pass or fail per H.1 to H.7, one line each>

## Part 1: Search visibility
<one short section per analysis run: table of findings, then the reading>
### Part 1 tasks
<tasks in ledger format>

## Part 2: Conversion
<as above>
### Part 2 tasks

## Part 3: Lead quality
<as above, or "skipped: Plunk tools not available">
### Part 3 tasks

## Top 10
<ranked table: ID, priority, part, what, where, effort>

## Ledger changes
<new, closed, followed up, dropped>

## Not enough data
<what was skipped for volume, so nobody reads silence as "fine">
```

Reports follow the house style in CLAUDE.md: no em dashes, plain words, ranges
spelled out.
