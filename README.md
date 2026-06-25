# hubsell.com — Astro migration

Phase 1 foundation: an Astro static site for Cloudflare Pages, an idempotent
Webflow→R2 asset migrator, a Plunk-backed form endpoint, and the page skeleton.
Nothing visual changes — this reproduces the current site on new infrastructure.

> Status: **scaffold + foundation done and building.** The home-page markup and
> CSS get wired from the Webflow code export (see "What I need from you next").

## Stack

- **Astro** (`output: 'static'`) → deployed to **Cloudflare Pages**.
- **Forms** → a Pages Function (`functions/api/subscribe.ts`) that calls **Plunk**
  server-side. No SSR adapter needed; add `@astrojs/cloudflare` only if a future
  page truly needs server rendering.
- **Assets** → **Cloudflare R2** on `assets.hubsell.com`, migrated by
  `scripts/migrate-assets.mjs`.

## Layout

```
src/
  layouts/BaseLayout.astro     # <head>, meta/OG (carried from the live site), nav + footer
  components/Nav.astro         # real links; logo + markup wired from export
  components/Footer.astro      # real legal links + company details
  components/WaitlistForm.astro# posts to /api/subscribe; copy matches the site
  pages/index.astro            # home skeleton — sections in current order
  content/config.ts            # Phase 3 CMS schemas (stub)
  styles/                      # put webflow.css here, then import it in BaseLayout
functions/api/subscribe.ts     # Plunk form handler (Pages Function)
scripts/migrate-assets.mjs     # Webflow CDN -> R2 migrator + reference rewriter
public/_redirects, _headers, robots.txt
```

## 1. Develop locally

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # outputs to dist/
```

## 2. Migrate assets to R2

The website never holds R2 credentials — this script runs on your machine with
your R2 keys. Copy `.env.example` to `.env` and fill the `R2_*` values
(`R2_PUBLIC_BASE=https://assets.hubsell.com`), then:

```bash
# preview only (no writes, no creds required):
npm run assets:scan -- --from https://www.hubsell.com --from ./src --from ./public

# upload everything missing from the bucket:
npm run assets:sync -- --from https://www.hubsell.com --from ./src --from ./public

# repoint every reference in the repo to assets.hubsell.com:
npm run assets:rewrite -- --from ./src --from ./public
```

It discovers Webflow-CDN URLs across the pages and files you point it at
(including fonts/images inside Webflow's stylesheet), uploads each with the right
Content-Type and an immutable cache header, writes `asset-map.json`, and rewrites
local references. Re-runnable every phase — existing keys are skipped.

## 3. Configure Plunk

Set these as environment variables in the Cloudflare Pages project (Settings →
Environment variables), not in the repo:

- `PLUNK_SECRET_KEY` — your Plunk **secret** key (`sk_…`).
- `PLUNK_API_BASE` — optional; defaults to `https://api.useplunk.com`. If your
  dashboard shows `next-api.useplunk.com`, set that.

In Plunk, create the events the handler triggers (or rename them in
`functions/api/subscribe.ts`): `waitlist-signup` and `publish-track-waitlist`,
and attach whatever automation/confirmation email you want.

## 4. Deploy to Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages** → connect the repo.
3. Build settings: **build command** `npm run build`, **output directory** `dist`.
   Pages auto-detects the `functions/` directory.
4. Add the `PLUNK_*` env vars. Deploy → you get a `*.pages.dev` preview URL.
5. **Custom domains:** add both `www.hubsell.com` and `hubsell.com`.
6. **apex → www redirect:** Rules → **Redirect Rules** → create a rule:
   when `Hostname equals hubsell.com`, redirect (301) to
   `concat("https://www.hubsell.com", http.request.uri.path)`, preserve query.
   (`_redirects` can't match on hostname, so this is done as a rule.)

Validate on the `*.pages.dev` URL before pointing DNS. Only flip DNS once the
full site (Phases 1–3) reaches parity.

## What I need from you next

To wire the home page to true visual parity, export the Webflow site code
(Webflow → Site Settings → **Export Code**, or the Designer export button; needs a
paid Site plan). Drop the `index.html` + the CSS/JS bundles in, and I'll convert
each section into the components stubbed in `src/pages/index.astro`, import the
stylesheet in `BaseLayout.astro`, and run the asset migrator over it.

The interactive pieces that currently rely on Webflow's JS will be rebuilt as
small client scripts: the EUR/USD/GBP pricing toggle, the testimonials carousel,
the FAQ accordion, and the logo marquee. (The waitlist form is already done.)

## Roadmap

1. **Home page** ← you are here (foundation complete).
2. Static pages (book-a-call, legal/privacy/DPA/terms, …).
3. Collections (Customer Stories, Insights) → Astro Content Collections.
4. New pages, after cutover.
