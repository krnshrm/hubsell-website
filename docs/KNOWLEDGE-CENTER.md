# Knowledge center (`/knowledge`) - build and content pipeline

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
- Remaining planned categories (Campaigns, Integrations, Deliverability, Account and
  billing) are not started.
