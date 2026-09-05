# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

`hubsell-website` is the marketing site for hubsell.com, rebuilt from Webflow onto
Astro (static output) and deployed to Cloudflare Pages. It also serves `/de/` and
`/nl/` locale versions and a set of content collections (blog, glossary, knowledge
center, customer stories, comparisons, use-cases).

## What hubsell sells, and to whom

hubsell is a B2B outbound platform: live-sourced prospect data, coordinated email
and LinkedIn outreach, and automatic CRM sync to Salesforce, HubSpot, or Pipedrive.
It replaces the stack a revenue team would otherwise assemble from a data provider,
a sequencing tool, and a manual LinkedIn process.

Positioned against Apollo, ZoomInfo, Cognism, Lusha, Seamless, Outreach, and
Salesloft. The wedge is live sourcing at point of use rather than a static database,
plus email and LinkedIn in one flow.

Buyer: VPs of Sales, sales leaders, founders, and RevOps at B2B companies.
Users: SDRs and sales teams. Agencies are a distinct segment.

Berlin based, GDPR is a real selling point, and customers are concentrated in Europe.
Pricing is in EUR: Start from €120/seat/month, Grow from €4,320/year, Scale from
€12,000/year, plus a separate Sales Intelligence data product. This is a considered
purchase, not an impulse signup.

## What counts as a conversion

Today: **a demo request** via `/book-a-call`. Every CTA on the site routes there
through `SIGNUP_URL` in `src/data/site.ts`.

Changing shortly: a **free trial** CTA is launching. When it does, `SIGNUP_URL`
changes and trial start becomes the primary conversion. Demo request stays as a
secondary conversion for larger accounts.

This transition breaks period-over-period comparison. When comparing any window that
straddles the switch date, say so explicitly rather than reporting the change as a
real movement. [TODO: record the exact switch date here once it ships.]

In GA4, `src/scripts/track.ts` pushes `cta_click`, `form_start`, `form_error`, and
`form_submit_success` into dataLayer. `form_submit_success` on the relevant form is
the completion event. `form_error` is worth watching on its own: a spike there means
the corporate-email gate or Turnstile is rejecting real people.

**Confirmed 2026-09-05:** GTM container is `GTM-T6ZR38R` (account "hubsell"
`2965906746`, container `8854037`). The live container (version 45) had no Custom
Event trigger and no GA4 event tag for any of `cta_click`, `form_start`,
`form_error`, or `form_submit_success` — the dataLayer pushes from `track.ts` were
not forwarded to GA4 at all. The fix (4 Custom Event triggers + 4 GA4 event tags)
is built in the default workspace but **not yet published** — until someone
publishes it, GA4 still receives none of these four events; do not read GA4
reports on them as real data yet. `track.ts` also no longer hardcodes
`/book-a-call`: `cta_click` now matches against `SIGNUP_URL`/`DEMO_URL` from
`src/data/site.ts` and reports which one (`cta_destination`), so it keeps working
unchanged the day `SIGNUP_URL` switches to the real trial URL. See
`docs/20260905-1015-GTM-ANALYSIS.md` for the full tag/trigger inventory and what's
still open before publish.

## What a good visitor looks like

The pattern that matters, in order:

1. Arrives from a B2B-relevant query or an in-depth guide
2. Does not bounce, reads more than one page
3. Reaches `/pricing`, ideally lingers there
4. Converts with a **company email address**, not a free provider

A session that touches pricing and then converts on a corporate domain is worth far
more than ten sessions that read a blog post and leave. Optimise analysis for that
path, not for total sessions.

Strong secondary signals: comparison pages (`/vs/*`), the solutions pages by team
and role, customer stories, and the platform pages. These sit close to the decision.

## Traffic we do not care about

Do not recommend chasing any of the following, and exclude them when judging whether
a page is performing:

- **Students and job seekers.** The glossary (66 terms) and parts of the blog pull
  people researching for coursework or interviews. High sessions, zero pipeline.
- **Free email providers.** Gmail, Outlook.com, Yahoo and similar are filtered at the
  form anyway. Traffic that would only ever convert on a free address is not a win.
- **B2C industries.** The product only works for companies selling to other
  businesses.
- **Markets we do not sell into.** Customers are concentrated in Europe, the site is
  localised for de and nl, and pricing is EUR-denominated at European B2B SaaS levels.
  [TODO: list the specific countries or regions that count as target markets, and the
  ones to exclude from analysis. Naming actual markets is more useful than a broad
  category, and it makes GA4 country filters unambiguous.]

When a page has high impressions or sessions but the audience is one of the above,
the correct recommendation is usually to leave it alone or deprioritise it, not to
grow it. Say so plainly rather than proposing optimisations.

## What has already worked

**In-depth guides perform best.** Long, substantive content on outbound, deliverability,
and prospecting. That is the format to extend.

Short, thin, or generic posts are not worth producing. Neither is more glossary
volume, which already draws the wrong audience.

[TODO: add anything tried that clearly did not work, and anything deliberately
decided against, so it does not get suggested again.]

## How to analyse this site

- Always pull real GSC and GA4 data before making a recommendation. Do not estimate.
- Default to the last 28 days and 20 rows unless told otherwise. Wider pulls waste
  context and rarely change the conclusion.
- Judge a page by whether it moves someone toward a corporate-email conversion, not
  by sessions or impressions alone.
- After pulling data, read the actual page source in `src/pages` or `src/data` before
  proposing a change. A recommendation that does not reference the real content is
  not useful.
- Propose changes as a diff on a branch. `main` deploys to production on push.
- Say when the data does not support a conclusion. "This is noise" is a better answer
  than a confident story about a 3 percent movement.
- GSC lags roughly two days. Do not read the last two days as a drop.

## Stack and locked decisions

- **Astro 7**, `output: 'static'`, `build.format: 'directory'`, `trailingSlash: 'ignore'`.
  Canonical URLs and the sitemap use trailing slashes.
- **Node 22** required (Astro 6+ needs an even major). Cloudflare Pages builds with
  `npm ci`, build command `npm run build`, output dir `dist`, `NODE_VERSION=22`.
- **Hosting:** Cloudflare Pages. A push to `main` is a live production deploy.
- **Forms:** one Cloudflare Pages Function, `functions/api/subscribe.ts`, which calls
  Plunk. No SSR adapter. Do not add `@astrojs/cloudflare` unless a page genuinely
  needs server rendering.
- **Assets:** Cloudflare R2 at `assets.hubsell.com` (EU bucket `hubsell-assets`).
  Claude never holds R2 credentials; the repo owner runs uploads locally.
- **Content collections** live in `src/content.config.ts` (not `src/content/config.ts`).
  `glob()` loaders; entries have `entry.id`, there is no `entry.slug`; render bodies
  with `render(entry)` from `astro:content`. `getCollection()` order is not
  guaranteed, so sort explicitly with a code-point compare (not `localeCompare`).
- Migrated blog and customer-story bodies are stored as **raw HTML inside `.md`
  files** and rendered with `set:html`, not through Markdown. Use-cases and glossary
  bodies are real Markdown rendered the normal way.
- CRM names allowed in copy: Salesforce, HubSpot, Pipedrive only.
- `SIGNUP_URL` in `src/data/site.ts` points at `/book-a-call` until the real signup
  page ships; every "Book a demo" CTA reads that one constant.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # runs "prebuild" (scripts/check-email-rules.mjs) then astro build -> dist/
npm run preview
npm run check:email   # email-domain rule self-test, standalone
```

`prebuild` fails the build if the installed `hs-block` version is behind what
`package.json` asks for (a git dependency; plain `npm install` will not re-resolve
it). See `docs/BLOCKING-DOMAINS.md`.

## Repo layout

```
src/
  pages/                 route files = URLs. Thin shells: meta + data lookup + body component.
    de/  nl/             locale copies of the routes that are translated
    *.md                 legal pages and the AI info page (rendered via LegalLayout)
    **/[slug].astro      collection detail routes (insights, glossary, knowledge, vs, use-cases, customerstories)
  layouts/               BaseLayout (head, SEO, nav, footer, theme), PageLayout, KnowledgeLayout, LegalLayout
  components/            section and body components (Hero, Faq, PlatformDetail, SolutionDetail, ...)
    knowledge/           knowledge-center chrome
  content/               markdown collections (see below)
  content.config.ts      zod schemas for every collection; build fails on bad frontmatter
  data/                  copy and structured content as .ts (site.ts, navigation.ts, seo.ts,
                         faqs*, home*, platform*, solutions*, testimonials*, pricing*, *-i18n.ts)
  i18n/                  ui.ts (chrome dictionary + translatedRoutes), utils.ts, pages.ts
  scripts/               client scripts: form-guard.ts, motion.ts, track.ts
  styles/global.css      design tokens and the .sec / .wrap / .button system
  embeds/                raw Webflow widget exports, kept only as reference (not built)
functions/api/subscribe.ts   the only server-side code
public/                  _redirects, _headers, robots.txt, llms.txt
scripts/*.mjs            one-off Node utilities run by hand; nothing on the site imports them
docs/                    working documentation (see index at the end)
```

### Where pages live

- Every file in `src/pages/` is one URL. English routes have no prefix; `src/pages/de/*`
  and `src/pages/nl/*` are thin copies that render the same components with a locale.
- Untranslated `/de/` and `/nl/` paths are generated as small redirect stubs
  (noindex, canonical to English), so nothing 404s. A real file at the same path
  replaces the stub.
- Route files stay thin: pull copy from `src/data/`, pull collection entries via
  `getCollection()`, hand off to a body component.
- Redirects are path-level in `public/_redirects`. The apex to www redirect is a
  Cloudflare Redirect Rule in the dashboard, not in this repo.

### Where content lives

Collections under `src/content/`, each with a zod schema in `src/content.config.ts`.
The folder name must exactly match the camelCase collection key in the config.

| Collection | Folder(s) | Body format | Source |
|---|---|---|---|
| Insights (blog), 87+ posts | `insights/` | raw HTML | migrated from Webflow, English only |
| Knowledge center | `knowledge/` | raw HTML | drafted in Confluence (space HKB), then repo is source of truth |
| Customer stories | `customerstories/`, `…De/`, `…Nl/` | raw HTML | migrated from Webflow |
| Comparisons (`/vs/*`) | `comparisons/`, `…De/`, `…Nl/` | named HTML sections | migrated from Webflow |
| Use-cases | `usecases/`, `…De/`, `…Nl/` | Markdown | authored in-repo |
| Glossary, 66 terms | `glossary/`, `…De/`, `…Nl/` | Markdown (4 fixed H2 sections) | authored in-repo |

Locale collections use the same schema and the same slugs as their English
counterparts, in a parallel folder.

## Internationalisation

- Astro built-in i18n. `locales: ['en','de','nl','fr','es','pt']`, `defaultLocale: 'en'`,
  `prefixDefaultLocale: false`, `fallbackType: 'redirect'`, `fallback: { de: 'en', nl: 'en' }`.
- Live locales: **en** (base), **de**, **nl**. `fr`/`es`/`pt` are declared but have no
  translated routes yet, so none of their URLs are generated.
- The blog and the legal pages stay English in every locale (served via fallback).
- `src/i18n/ui.ts` holds `translatedRoutes` (drives hreflang, the sitemap filter in
  `astro.config.mjs`, and the language switcher) and the chrome dictionaries.
- Internal links go through `localizedHref(locale, '/path')`.
- `embed-i18n.ts` keys off the exact English string; when you edit an English string
  that passes through `et()`, move the de and nl keys in the same change.
- de: formal "Sie", lowercase "hubsell", German number and date formatting.
  nl: formal "u"/"uw", decimal comma, specific terms kept in English (see
  `docs/HANDOFF.md` and `docs/SITEMAP.md` for the full term lists).

## Forms and the server function

- Components (`WaitlistForm`, `BookCallForm`, `RequestForm`, `SolutionEmailCta`) POST
  JSON to `/api/subscribe`, the one Cloudflare Pages Function in `functions/`. It
  re-validates every field server-side and forwards a clean event to Plunk.
- The forms carry anti-bot and email-domain protection. Do not describe the
  mechanism here (this repo is public); see `docs/BOT-PROTECTION.md` for how it
  works and `docs/BLOCKING-DOMAINS.md` for the email-domain rules.
- Production env vars (set in the Cloudflare Pages dashboard, never in the repo):
  `PLUNK_PUBLIC_KEY` (pk_, `/v1/track`), `PLUNK_SECRET_KEY` (sk_, `/v1/send` team
  alerts), `PLUNK_API_BASE=https://next-api.useplunk.com` (the classic host returns
  401), `NOTIFY_EMAIL`, `TURNSTILE_SECRET_KEY`. The public Turnstile site key is in
  `src/data/site.ts`.

## Assets (R2)

- Live under `assets.hubsell.com`, EU bucket `hubsell-assets`. Prefixes: `insights/`,
  `avatars/`, `customers/`, `logo/`, `logos/`, `brand/`.
- Claude never holds R2 credentials. To add assets, prepare a manifest JSON
  (`{ sourceUrl, key, contentType, prefix }` entries) in the repo root and hand it
  to the repo owner, who runs `node scripts/migrate-from-manifest.mjs --manifest <file>`
  locally (idempotent). `scripts/migrate-assets.mjs` is the older Webflow-CDN
  crawler and reference rewriter.

## Design system

Full system in `src/styles/global.css`; reference doc `docs/hubsell-style-guide.html`
(predates the palette change in commit `6546bdb`, so trust the code for section fills).

- Section classes: `.sec--paper`, `.sec--sand` (now white), `.sec--navy`, `.sec--esp`.
  Theme-aware via role tokens `--sec-bg/-tx/-bd/-card`.
- Action color: `--brand:#E0533A` (terracotta), the single CTA color. One primary
  "Book a demo" button; secondary buttons were removed site-wide.
- Fonts: Lexend (headings), Instrument Sans (body), Newsreader (serif) on blog and
  legal only.
- Layout wrapper: `.wrap` (max-width 1100px default).
- Dark mode via `[data-theme="dark"]` token flips; reduced motion respected everywhere.
- Scoped `<style>` does not reach `set:html` / `<Content />` markup; wrap those
  selectors in `:global()`.

## Deploy safety

- A push to `main` deploys production. Do in-progress work on a branch.
- Merge procedure: on the branch, `git status` clean, `npm run build` green at the
  expected page count, eyeball the branch preview. Then `git checkout main`,
  `git pull`, `git merge <branch>`, `npm run build` again, `git push origin main`.
- Rollback: Cloudflare Pages "Rollback to this deployment", or
  `git revert -m 1 <merge-sha> && git push`.
- Run `git status` before committing; `git add .` sweeps up unrelated working-tree
  changes.

## House style for anything Claude writes

- No em dashes. No AI-sounding words (seamless, elevate, leverage, robust,
  streamline, unlock, end-to-end, and similar). Plain, clear language. Spell out
  ranges ("3 to 6"). Em dashes are fine inside code comments.
- Translations follow the same no-buzzword rule in the target language; do not carry
  an English buzzword across as a loanword.
- Migrated content (blog bodies, legal text, testimonials): the English stays
  verbatim, punctuation included.
- Preserve the `LEARNING NOTES` and `LEARNING:` comments in any file you edit. If an
  edit makes a neighbouring LEARNING comment wrong, correct that comment minimally.
  New files do not need them.
- Explain concepts before commands. One action per step. No assumed knowledge of
  git, npm, or the terminal.
- Every new file Claude creates in this repo, including a `docs/` reference meant to
  be updated in place, is named `YYYYMMDD-HHMM-NAME`. Existing plain-named docs
  (`HANDOFF.md`, `SITEMAP.md`, `BOT-PROTECTION.md`, and similar) keep their names;
  do not rename them to add a timestamp.

## Working with the GA4 MCP tools

Google Analytics 4 is reachable through the `mcp__analytics-mcp__*` tools.

**Claude Code specific:** in this harness the tools are deferred; load a schema with
`ToolSearch("select:<tool_name>")` before the first call. A session running the same
MCP server elsewhere (e.g. Claude Desktop) may not defer tools and can skip this.

**Property:** `properties/338895211` ("hubsell-website - GA4"), account
`accounts/64483174`, time zone Europe/Berlin, currency USD, GA4 Standard, created
2022-10-25. Pass the id as either `338895211` or `properties/338895211`.
(`get_account_summaries` also lists a Chrome Web Store developer property,
`properties/528248620`, which is not editable and not relevant here.)

Tools:

| Tool | Use |
|---|---|
| `get_account_summaries` | list accounts and properties |
| `get_property_details` | property metadata |
| `run_report` | the main reporting call: dimensions x metrics over date ranges |
| `run_realtime_report` | last 30 minutes |
| `run_funnel_report` | funnel steps |
| `run_conversions_report` | conversions, ad cost, and ROAS with an attribution model; use instead of `run_report` for these |
| `get_custom_dimensions_and_metrics` | list the property's custom defs before using them |
| `list_property_annotations`, `list_google_ads_links` | context |

`run_report` notes:

- Field names are **snake_case** (protobuf), not the camelCase in Google's REST docs.
  Option keys like `start_date` and `metric_name` are snake_case; dimension and
  metric name *values* are the GA4 API names (`landingPagePlusQueryString`,
  `engagementRate`).
- `date_ranges` is a list, e.g. `[{"start_date": "28daysAgo", "end_date": "yesterday"}]`.
  Relative forms `NdaysAgo`, `yesterday`, `today` work.
- Sort with `order_bys`, e.g. `[{"metric": {"metric_name": "sessions"}, "desc": true}]`.
- Common dimensions: `landingPagePlusQueryString`, `pagePath`, `sessionDefaultChannelGroup`,
  `country`, `deviceCategory`, `date`. Common metrics: `sessions`, `totalUsers`,
  `screenPageViews`, `engagementRate`, `averageSessionDuration`, `conversions`.
- `(not set)` rows in a landing-page report are sessions with no captured landing
  page (direct, consent-blocked, API pings); expect a low engagement rate on that row.

Example (top landing pages by sessions, last 28 days):

```
run_report(
  property_id = 338895211,
  date_ranges = [{"start_date": "28daysAgo", "end_date": "yesterday"}],
  dimensions  = ["landingPagePlusQueryString"],
  metrics     = ["sessions", "engagementRate"],
  order_bys   = [{"metric": {"metric_name": "sessions"}, "desc": true}],
  limit       = 20,
)
```

## Working with the GSC MCP tools

Google Search Console is reachable through the `mcp__gscServer__*` tools.
`get_capabilities` prints the tool list and auth status; `reauthenticate` fixes auth
errors.

**Claude Code specific:** in this harness these tools are also deferred; load
schemas with `ToolSearch` first. Skip this on a session running the same MCP server
without Claude Code's tool deferral.

**Properties** (both `siteOwner`):

- `sc-domain:hubsell.com` — domain property, covers every subdomain and protocol
  (`www`, apex, `app.`, `staging.`). Use this and filter by page to look at a
  specific subdomain.
- `https://www.hubsell.com/` — URL-prefix property, the marketing site only.

Pass the string exactly as above as `site_url`.

Tools:

| Tool | Use |
|---|---|
| `list_properties` | confirm the exact `site_url` strings |
| `get_site_details` | verification / ownership |
| `get_search_analytics` | top queries or pages: clicks, impressions, CTR, position (`dimensions` = query, page, device, country, date, or comma-separated) |
| `get_performance_overview` | summary for a period |
| `compare_search_periods` | period over period |
| `get_search_by_page_query` | queries driving traffic to one page |
| `get_advanced_search_analytics` | filtered by country / device / query / page, paginated beyond 500 rows |
| `inspect_url_enhanced`, `batch_url_inspection` (<=10), `check_indexing_issues` | crawl / index status |
| `get_sitemaps`, `list_sitemaps_enhanced`, `manage_sitemaps` | sitemaps (submitted sitemap is `https://www.hubsell.com/sitemap-index.xml`) |

Notes:

- GSC data lags roughly two days; `days` counts back from the most recent complete day.
- `get_search_analytics` fills the row count to `row_limit` with zero-click rows once
  the clicked queries run out, and those trailing rows come back alphabetically, not
  ranked. Use `get_advanced_search_analytics` if you need the zero-click tail ranked
  by impressions.
- Ongoing SEO context and known issues (a 2026-07 Googlebot 403 incident, the
  redirect and 404 reports, app/staging canonicals) are in
  `docs/20260724-1520-SEARCH-CONSOLE.md`. Read it before acting on any indexing
  question.

## Docs index

| File | Contents |
|---|---|
| `docs/HANDOFF.md` | status, backlog, standing rules, locked decisions. The most complete single reference. |
| `docs/SITEMAP.md` | per-page site map, migration history, full i18n term lists |
| `docs/20260724-1100-LEARNING-ASTRO.md` | Astro primer, intended reading order |
| `docs/20260724-1425-CODEBASE-FLOWCHART.md` | Mermaid maps of the build and render flow |
| `docs/20260724-1520-SEARCH-CONSOLE.md` | GSC state, the 403 incident, indexing reports |
| `docs/BOT-PROTECTION.md` | honeypot, fill time, Turnstile, Cloudflare bot settings |
| `docs/BLOCKING-DOMAINS.md` | how to block an email domain, the build guard |
| `docs/KNOWLEDGE-CENTER.md` | knowledge-center build and Confluence/Scribe content pipeline |
| `docs/hubsell-style-guide.html` | visual style reference (partly superseded by code) |
