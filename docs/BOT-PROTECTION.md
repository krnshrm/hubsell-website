# Bot protection

How the site keeps bots out of the forms and off the pages, and the Cloudflare dashboard settings that go with the code. Companion to `docs/BLOCKING-DOMAINS.md` (which handles unwanted email domains from humans).

## The stance, in one paragraph

Humans and the crawlers that help hubsell get found are welcome: search engines (Googlebot, Bingbot) and AI crawlers from major companies (Search, Agent, and Training behaviors alike), because the AEO strategy (llms.txt, the AI information page, the glossary) exists so that AI systems know and cite hubsell. Everything else automated gets challenged or blocked: form spam bots, scrapers, and SEO-tool crawlers that mostly feed competitor research.

## Layer 1 and 2: honeypot and fill time (live in code, no setup)

Every form that posts to `/api/subscribe` (book-a-call, the SDR modal, contact, newsletter) carries two invisible checks, enforced server-side in `functions/api/subscribe.ts`:

1. A hidden "website" field injected by `src/scripts/form-guard.ts`. Humans never see it; bots that fill it get a fake success response and nothing reaches Plunk.
2. A timestamp from when the form was armed. Submissions completed in under 2.5 seconds get the same silent treatment.

Nothing to configure. These catch the dumb majority.

## Layer 3: Cloudflare Turnstile (needs one-time setup)

Invisible verification on every form, validated per submission on the server. Until the two keys below exist, the code runs fail-open and the forms behave exactly as before, so there is no wrong order of operations.

Setup, about 5 minutes:

1. Go to https://dash.cloudflare.com, select the account (not a specific domain), and open **Turnstile** in the left sidebar.
2. **Add widget**. Name: `hubsell forms`. Hostnames: `hubsell.com`, `www.hubsell.com`, `hubsell-website.pages.dev` (so preview deploys work), and `localhost` (so `npm run dev` works). Widget mode: **Managed**. Pre-clearance: off. Create.
3. Copy the two keys it shows: the **Site Key** (public) and the **Secret Key**.
4. In **Workers & Pages, hubsell-website, Settings, Environment variables**: add `TURNSTILE_SECRET_KEY` with the secret, for **Production and Preview**. Save.
5. Paste the Site Key into `src/data/site.ts`:

```ts
export const TURNSTILE_SITE_KEY = 'paste-the-site-key-here';
```

6. Ship it:

```bash
npm run build
git add . && git commit -m "Enable Turnstile on all forms" && git push
```

What users see: nothing, in almost all cases. Managed mode runs invisibly and only shows a small checkbox to suspicious traffic. Tokens are single-use and refresh automatically.

Order matters only in one direction: set the env variable (step 4) before or together with the site-key deploy (step 6). If the site key ships first without the secret, the widget renders but the server does not verify (fail-open). If the secret is set, the server requires a valid token (fail-closed); anyone on a page loaded before that deploy gets "Verification missing. Please refresh the page and try again." once.

If Turnstile itself is unreachable from the server, submissions pass without verification on purpose: a lost lead costs more than a bot.

## Site-wide: Bot Fight Mode (dashboard, one toggle)

1. In the dashboard select the **hubsell.com** domain, go to **Security**, then the bots section (called **Bots** or **Security, Settings, Bot traffic** depending on dashboard version).
2. Turn **Bot Fight Mode** ON.

This challenges traffic Cloudflare identifies as automated while leaving verified bots alone (search engines and verified AI crawlers keep working). It is the free plan's blanket lever against unverified scrapers. Note it cannot be fine-tuned with exceptions; if it ever interferes with a legitimate integration, turn it off and tell the next chat.

## Site-wide: block SEO-tool crawlers (dashboard, one WAF rule)

1. Domain **hubsell.com**, **Security, WAF, Custom rules**, **Create rule**.
2. Name: `Block SEO tool crawlers`.
3. Choose **Edit expression** and paste:

```
(http.user_agent contains "AhrefsBot") or (http.user_agent contains "SemrushBot") or (http.user_agent contains "MJ12bot") or (http.user_agent contains "DotBot") or (http.user_agent contains "BLEXBot") or (http.user_agent contains "DataForSeoBot") or (http.user_agent contains "serpstatbot") or (http.user_agent contains "SEOkicks") or (http.user_agent contains "MegaIndex") or (http.user_agent contains "PetalBot") or (http.user_agent contains "Bytespider")
```

4. Action: **Block**. Deploy.

Caveat recorded at decision time: this also blinds Ahrefs/Semrush rank tracking FOR hubsell if those tools are ever adopted. If that happens, remove the relevant user agent from the rule.

## Site-wide: AI crawlers stay allowed (dashboard, verify only)

Do NOT enable any "Block AI bots" toggle, and in **AI Crawl Control** (under Security) leave Search, Agent, and Training on **Allow**. Two reasons:

1. The AEO strategy wants AI systems reading and citing hubsell.
2. From September 15, 2026, Cloudflare evaluates multi-purpose crawlers under every behavior they have: a site that blocks Training also blocks Googlebot, Applebot, and BingBot, even with Search allowed. Blocking Training here would be an SEO incident, not a security setting.

While in that screen, check the September 15 default-change banner and opt out of any default that would turn blocking on for this zone.

## Testing after setup

1. Submit the contact form normally: it should work with no visible challenge.
2. In the browser console on `/book-a-call`, run `document.querySelector('[name="website"]').value = 'x'` then submit: the form reports success but no Plunk contact appears (honeypot working).
3. **Security, Events** in the dashboard shows what Bot Fight Mode and the WAF rule are catching.
4. Turnstile has its own analytics under the Turnstile section of the dashboard (solve rate should be near 100%; a falling solve rate means real humans are being challenged).
