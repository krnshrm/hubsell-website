# Knowledge center (`/knowledge`) - build and content pipeline

## Status at last session (2026-09-01)

- 14 articles live across three categories. The "First login to first campaign"
  series is now 8 steps (was 5). Build: 440 pages.
- Content pulled from Confluence on 2026-09-01: eight new articles, all marked
  "Ready to publish" in HKB.
- Confluence pages now carry an "Embed url" field with a ready-made Scribe
  iframe (as=video). We deliberately do NOT use it: the site keeps its own
  click-to-load embed built from the viewer URL, so nothing third party loads
  until the reader asks.
- The CRM article's "pushing contacts is manual" fact was removed from the
  Confluence page on 2026-08-25 but is KEPT on the site by decision, because it
  is still true and useful. Do not "sync" it away.

## Earlier status (2026-08-19)

- LAYOUT REBUILD shipped: the knowledge center now uses a docs-style three-column
  layout modelled on support.claude.com. Colours, fonts and tokens are unchanged;
  this was structure only. See "Layout" below.

## Earlier status (2026-07-23)

- The 5-step onboarding series is COMPLETE and live: set-up, mailbox+LinkedIn,
  sourcing, CRM, create-a-flow. Plus the `data-enrichment` stub. Build: 429 pages.
- All five series pages in Confluence (HKB) are marked "Ready to publish" and were
  cleaned to raw-input-only. The repo is now the source of truth for all six live
  articles.
- Housekeeping still open on the Confluence side (founder/team, Claude cannot set
  labels): add the `published` label plus the live URL to each shipped page, and
  sync the Content inventory page. The inventory is STALE: it still shows the
  original 14-article plan with everything at Planned, while reality is the
  restructured series above.
- Pull hygiene, learned the hard way: pages get trimmed during publish-cleanup,
  and my pulls can race those edits. When pulling from Confluence, always diff
  the facts (timings, limits, troubleshooting items) against the live articles,
  not just the steps. Ask the team to leave a one-line version message when they
  remove a fact.

The product help and onboarding section. English only, same fallback pattern as
insights and glossary (de/nl are noindex redirect stubs, kept out of the sitemap).
Live on `main`.

## What is live

- `/knowledge` hub, grouped by category, with a client-side search box.
- Six articles:
  - Getting started series "First login to first campaign" (complete, 5 of 5 live):
    1. `set-up-your-personal-and-company-account`
    2. `connect-your-mailbox-and-linkedin`
    3. `sourcing-data-into-hubsell`
    4. `connect-your-crm`
    5. `create-a-flow`
  - Data: `data-enrichment` (a short conceptual stub, see open items).

All four series articles were refreshed from Confluence on 2026-07-22 (fresh
Scribe screenshots, fuller step lists, corrected timings).
- Nav: a live "Knowledge center" link in the Learn group under Resources
  (`src/data/navigation.ts`).

## Layout

Docs-style chrome, separate from the marketing site:

- `src/layouts/KnowledgeLayout.astro` - the shell. Grid is
  `[sidebar] [content] [contents rail]`; the third column only renders when a
  page sets `hasAside`, so the hub and category pages are two-column and
  articles are three. Also owns the mobile drawer script.
- `src/layouts/BaseLayout.astro` gained a `chrome` prop (`'site'` default,
  `'docs'` for knowledge). `'docs'` skips TopBar, Nav and Footer; `<head>`, SEO,
  hreflang and the theme script are identical either way. Every other page is
  untouched because the default is `'site'`.
- `src/components/knowledge/KnowledgeHeader.astro` - logo, section label, back
  link, "Log in" CTA, theme toggle, mobile burger. The toggle reuses the existing
  `js-theme-toggle` class, so no extra JavaScript. The CTA is log in rather than
  book a demo because knowledge center readers are existing customers; wording
  matches the `cta.login` key the TopBar uses, and it points at `LOGIN_URL`.
- `src/components/knowledge/KnowledgeSidebar.astro` - every category and article,
  active item highlighted. Fetches its own articles.
- `src/components/knowledge/KnowledgeFooter.astro` - one slim line.
- `src/data/knowledge.ts` - the single list of categories (slug, name,
  description) plus the popular-articles list. `name` MUST match an article's
  frontmatter `category` exactly. Renaming a category is a one-line edit here.

Behaviour worth knowing:

- The "On this page" rail is GENERATED from the article's `<h2>` tags at build
  time, and ids are injected for headings that lack them. Do NOT hand-write a
  contents list into an article body; the old `kb-toc` blocks were removed when
  this landed. Below 1280px the rail is replaced by an inline version.
- Related articles are computed from category and series, capped at four.
- Category pages live at `/knowledge/category/<slug>` and are only built for
  categories that actually have articles. They sit under `/category/` because
  `/knowledge/[slug]` already claims that level for articles.
- Hub search filters in memory and swaps the category grid for a result list.

## Files

- Collection definition: `src/content.config.ts` (the `knowledge` collection, glob loader).
- Content: `src/content/knowledge/<slug>.md`. Frontmatter plus the article body as
  raw HTML, rendered with `set:html` (same approach as insights).
- Hub page: `src/pages/knowledge/index.astro`.
- Article template: `src/pages/knowledge/[slug].astro`.

### Two gotchas that have each cost us a broken push

Content lives in `src/content/knowledge/`, NOT `content/knowledge/` at the repo
root. A commit on 2026-07-22 wrote four articles to the root path; Astro never
read them, the build passed, and the live site silently kept serving the old
articles. If an update seems to have no effect, check the path first.

Article bodies are raw HTML using the `kb-*` classes below, rendered with
`set:html`. Plain markdown in the body does NOT render; it shows as literal `##`
and `1.` text.

### Gotcha that cost us a broken push

The content config lives at `src/content.config.ts` (repo root of `src`), NOT
`src/content/config.ts`. An older layout used the second path. If a collection is
defined in the wrong file, the build only warns ("collection does not exist or is
empty") and still exits 0, so it can pass CI and ship an empty section. Always
confirm the article HTML actually built before pushing:
`ls dist/knowledge/*/index.html`.

The templates use the Content Layer API: entries are keyed by `entry.id` (not
`.slug`), and the body renders from `entry.body` with `set:html`.

## Schema (frontmatter fields)

- `title`, `description`, `category` (required)
- `order` (sort within a category on the hub)
- `series`, `seriesStep`, `seriesTotal` (onboarding chain + progress strip)
- `estMinutes`, `stepCount` (meta row)
- `appliesTo`, `prerequisites` (the facts block above the body, from the
  Confluence article template)
- `walkthroughUrl` (Scribe viewer URL, click-to-load embed)
- `updated` (date, shown as "Last updated", also emitted as `dateModified`)
- `faqs` (array of `{ q, a }`, rendered as a visible accordion and matching
  FAQPage JSON-LD, so the markup matches the page)
- `next` (`{ label, href }`, the next-in-series card)
- `draft` (default false)

The article template also emits TechArticle and BreadcrumbList JSON-LD.

## Body building blocks (classes styled in `[slug].astro`)

- Steps: `<ol class="kb-steps">` with `<li>`; inline UI names use `<span class="kb-kbd">`.
- Screenshots: `<figure class="kb-figure" data-ph="fallback caption">` with an
  `<img onerror>` that swaps to a labelled placeholder if the image fails.
- Notes: `kb-callout` (info), `kb-callout--tip`, `kb-callout--warn`.
- Success block: `kb-result`.
- On-this-page jump list: `kb-toc` (see the sourcing article).

## Content pipeline (Confluence + Scribe)

Confluence space HKB: https://hubsell-awsm.atlassian.net/wiki/spaces/HKB

1. The team records the app flow in Scribe (one Scribe per article), exports it to
   Markdown onto the article's Confluence page, and pastes the share link.
2. They add facts, limits, common mistakes, and a do-not-publish list.
3. They set the row on the "Content inventory" page to Input ready.
4. Claude writes the customer-facing copy, into the repo as `.md`.
5. Founder reviews and publishes. At publish the repo is the source of truth.

Canonical rule: before publish the Confluence page is source of truth; after
publish the repo is. The Home page in HKB carries the full team instructions.

## Images

Screenshots currently hotlink Scribe's export host
(`colony-recorder.s3.amazonaws.com`). Deliberate for now: it lets a Scribe
re-export flow through without a second update in R2. The `onerror` fallback frame
covers the case where a URL expires. Revisit and move to R2 under `knowledge/` if
reliability becomes a problem.

## Interactive walkthrough

Articles with `walkthroughUrl` and `Embed: yes` render a click-to-load card. The
Scribe iframe is only injected after the reader clicks, so nothing third party runs
on the page until then.

## How to add an article

1. Create `src/content/knowledge/<slug>.md` with the frontmatter above and an HTML
   body using the building blocks.
2. Set `updated`, `faqs`, series fields, and `walkthroughUrl`.
3. `npm run build`, then confirm `dist/knowledge/<slug>/index.html` exists.
4. Commit and push. The hub and sitemap pick it up automatically.

## Open items

- `connect-your-crm` is tagged Integrations in Confluence but is filed in the
  onboarding folder and ships as step 4 of the series, so it carries the
  Getting started category. Revisit when more Integrations articles land.
- 2026-07-23: Confluence pages were cleaned to raw-input-only and set to "Ready
  to publish". Two facts were removed and the site was trimmed to match: the
  Sales Navigator next-day email-enrichment line and the CSV flow-assignment
  workaround (sourcing article), and both troubleshooting items on the connect
  article (the Paused fix lives in sourcing only now).
- Confluence lists no troubleshooting for `set-up-your-personal-and-company-account`
  (point 3 of the raw input checklist is still open), so that article has no
  troubleshooting block.
- `data-enrichment` is conceptual only. It needs the team's hubsell-specific
  enrichment options and any credit cost. There is a TODO comment in the file;
  keep it conceptual until those facts are confirmed.
- The set-up article "why it matters" line is generic. Sharpen it once the exact
  fields that appear in outreach (sender name, signature, and so on) are confirmed.
- Flows has one article (clone a flow). Integrations, Deliverability and
  Account and billing are still empty, so no card or sidebar group renders for
  them yet; they appear automatically once an article carries that category.
- Article screenshots have no width/height attributes, so they shift layout as
  they load. Pre-existing, not introduced by the layout rebuild. Worth fixing
  when the images move to R2, since dimensions will be known then.
- Optional, not built: a "Copy for LLM" button on articles (support.claude.com
  has one). Cheap to add and a good fit with the llms.txt work.
