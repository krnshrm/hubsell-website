# Search Console: indexing status and the 403 incident

_Created 2026-07-24. The state of Google Search Console for www.hubsell.com, what was fixed in the repo, what must be fixed in the Cloudflare dashboard, and what needs no fix. For any future chat touching SEO, redirects, or Cloudflare security. Companion to `docs/BOT-PROTECTION.md` and `docs/SITEMAP.md`._

## The one real problem: 403s blocking Googlebot (OPEN, dashboard fix)

- GSC "Blocked due to access forbidden (403)" went from 0 to 411 overnight on **2026-07-11** and has stayed flat. The list includes the homepage: Googlebot is blocked site-wide.
- Nothing in the repo can cause a 403 and nothing shipped around that date; the cause is a Cloudflare dashboard change made on 2026-07-11. The documented WAF rule in `docs/BOT-PROTECTION.md` is safe (specific SEO-tool user agents only).
- Diagnosis path: **Security → Events**, filter from 2026-07-11, find a blocked Googlebot request, read the Service/Rule that blocked it. Prime suspects, in order: an AI-crawler block toggle (AI Crawl Control must be Allow for Search, Agent, AND Training, see BOT-PROTECTION.md for why Training matters), Super Bot Fight Mode blocking verified bots, or a broad custom WAF rule added around that date.
- Verification is GSC only: URL Inspection → Test live URL on `https://www.hubsell.com/`. A curl faking the Googlebot user agent proves nothing: Cloudflare verifies real Googlebot by IP, so the fake gets blocked even in a healthy config.
- After the fix: click **Validate Fix** on the 403 report. Recovery takes days to a couple of weeks.
- When resolved, record the actual culprit setting in `docs/BOT-PROTECTION.md` so it is never re-enabled.

## Fixed in the repo (2026-07-24): the 404 report

Six old Webflow-era URLs now 301 in `public/_redirects` (see the "GSC cleanup" block there): `/home`, `/customers`, `/engagement-orchestration`, `/integrations-tutorials/hubspot`, `/insights/author/*` (wildcard, all author archives), and one truncated blacklist-post link. Takes effect on the next production deploy.

Deliberately left as 404, do not "fix" these: `/cdn-cgi/l/email-protection` (Cloudflare-reserved path), `assets.hubsell.com` (dead subdomain, outside this project), `/free-tools-for-b2b-sales` (no equivalent page yet; when the Free tools page from the SITEMAP roadmap ships, give it this URL or redirect then).

## Needs no fix: "Page with redirect" (71 URLs)

All entries are redirects doing their job: non-slash to slash (the site's canonical form; canonicals and the sitemap consistently use trailing slashes, verified in dist), non-www to www, http to https, the app subdomain's login redirect, and one renamed blog slug already covered in `_redirects`. The count jumped at the 2026-06-30 DNS cutover because Webflow served the non-slash forms directly. It will shrink as Google recrawls. Do not add redirects or rules for these.

## Outside this repo: the app and staging (OPEN)

"Duplicate without user-selected canonical" lists `app.hubsell.com/auth/login` and `staging.hubsell.com/auth/login`. Actions for the app codebase / infra, not this repo:
1. App login page should send noindex (meta robots or `X-Robots-Tag: noindex`).
2. Staging should be invisible to crawlers entirely: Cloudflare Access in front of it, or `X-Robots-Tag: noindex` on every response.

## Watch, do not act yet

"Discovered/Crawled - currently not indexed" (77 + 57) are partly a symptom of the 403 period (Google could not read the pages, so it could not judge them). Re-assess about two weeks after the 403 validation completes; only what remains then is a content-quality question.

## Raw data

GSC exports live in the founder's Google Drive (403, redirect, 404, and duplicates sheets, exported 2026-07-24 with daily counts from 2026-05-01).
