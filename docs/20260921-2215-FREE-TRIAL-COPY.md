# Free trial: copy and conversion changes to make at launch

Parked 2026-09-21. Everything here waits until the free trial actually ships. Nothing in this file should be applied before then.

Context: the homepage copy critique of 2026-09-21 flagged several conversion problems that are only fixable once there is a trial to point at. Rather than half-fix them now with a demo-only funnel, they are collected here.

---

## 1. The hero CTA

Today the hero has one call to action, "Book a demo", pointing at `SIGNUP_URL` in `src/data/site.ts`, which currently resolves to `/book-a-call`.

At launch:

- **Primary CTA:** "Start your free trial"
- **Subline under the CTA:** "Generate your first opportunity free"
- **Demo becomes secondary**, not removed. Larger accounts still want a conversation, and `CLAUDE.md` already says demo request stays as a secondary conversion.

The old `ctaSecondary` string ("See it in action") was deleted from `home-i18n.ts`, `home.de.ts` and `home.nl.ts` on 2026-09-21 because `Hero.astro` never rendered it. A new secondary CTA needs adding back to the interface and all three locale files, and `Hero.astro` needs a second anchor.

German and Dutch need real translations, not carried-over English. "Free trial" is commonly left in English in Dutch B2B, so that one is worth checking with a native speaker rather than translating by default.

## 2. Risk reversal, currently absent everywhere

The page asks for a meeting and offers nothing back. At launch, whichever of these are true should appear directly under the CTA:

- No credit card required
- Trial length, stated as a number of days
- Cancel anytime
- What "free" covers, since the subline promises a first opportunity

This is the cheapest conversion win on the list and it is impossible to make honestly until the trial terms exist.

## 3. `SIGNUP_URL` switch

`src/data/site.ts` holds `SIGNUP_URL = '/book-a-call'`. Every CTA site-wide reads that one constant, so the switch is one line.

Two things to do at the same time:

- `DEMO_URL` should stay pointing at `/book-a-call` so the secondary CTA still works.
- `src/scripts/track.ts` already matches `cta_click` against both `SIGNUP_URL` and `DEMO_URL` and reports which one fired as `cta_destination`, so tracking keeps working without changes. This was deliberate; do not "simplify" it.

## 4. Analytics: the comparison break

`CLAUDE.md` already records this and it needs honouring:

- Trial start becomes the primary conversion, replacing demo request.
- Any period-over-period comparison that straddles the switch date is not measuring a real movement.
- **Record the exact switch date in `CLAUDE.md`** where the TODO already sits.

`form_submit_success` stays the completion event. Watch `form_error` in the days after launch: a spike means the corporate-email gate or Turnstile is rejecting real trial signups.

## 5. The email gate question

The corporate-email gate currently rejects free providers, competitors and disposable domains on every gated form. For a free trial this is worth a deliberate decision rather than inheriting the default:

- A founder at a small company may legitimately be on a free provider.
- Disposable domains should stay blocked regardless, since trial abuse is the exact thing that list is for.
- `dedupeKey()` in the app's email module normalises `+tag` and Gmail dots. If the trial is one-per-person, enforce uniqueness on that key or one person opens fifty trials from one inbox.

See `docs/BLOCKING-DOMAINS.md`.

## 6. Pricing page headline

Currently "Plans for Solopreneurs & GTM Teams". With a trial in front of it, this headline has a different job: it stops being the entry point and starts being the upgrade path. Revisit it then, alongside the audience change to mid-market founders and heads of sales.

---

## Checklist for the day it ships

1. `SIGNUP_URL` switched, `DEMO_URL` left alone
2. Hero primary CTA and subline, all three locales
3. Secondary demo CTA added back to the interface, all three locales, and rendered in `Hero.astro`
4. Risk reversal line under the CTA, only claims that are actually true
5. Switch date recorded in `CLAUDE.md`
6. Email gate decision made and documented
7. `form_error` watched for the first week
