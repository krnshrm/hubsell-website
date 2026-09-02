# Blocking email domains

The domain lists no longer live in this repo. They live in **[hs-block](https://github.com/krnshrm/hs-block)**, which is the single source of truth for both this website and the app.

## To block a domain

Do it in `hs-block`, not here:

```bash
git clone https://github.com/krnshrm/hs-block.git
cd hs-block
npm run block -- baddomain.com
# or, for a competitor:
npm run block:competitor -- newcompetitor.com
git add data generated && git commit -m "Block: baddomain.com" && git push
```

The app enforces the change within minutes, no deploy. This website enforces it from its next deploy onwards.

Full instructions, including removals, live in the `hs-block` README.

## How this repo uses it

| Where | Import | Role |
|---|---|---|
| `functions/api/subscribe.ts` | `hs-block` | Authoritative. Full free list, runs server-side on every submit. |
| `src/components/WaitlistForm.astro` | `hs-block/light` | Instant UX feedback only. |
| `src/components/BookCallForm.astro` | `hs-block/light` | Same. |
| `src/components/RequestForm.astro` | `hs-block/light` | Same. |
| `src/components/SolutionEmailCta.astro` | `hs-block/light` | Same. |

The split matters. `hs-block/light` carries the competitor and manual block lists plus 33 common free providers, a few hundred bytes. Importing plain `hs-block` into a component would ship 4,462 domains to every visitor's browser.

Client-side checks are advisory and can be bypassed with devtools. The server function re-checks every submission with the full list, which is why the gate holds regardless.

## The rules

An email is rejected if:

1. It fails the shape check `EMAIL_RE`
2. Its domain is a competitor, exact match or any sub-domain
3. Its domain is on the manual block list, exact match or any sub-domain
4. Its domain is disposable, exact match or any sub-domain
5. Its domain is a free provider, exact match only

Disposable domains come from an upstream list of around 8,700 throwaway providers, synced weekly in `hs-block`. Nobody needs to maintain them by hand.

Messages come from `EMAIL_DOMAIN_MESSAGES`, also in `hs-block`, so the website and the app say the same thing.

`UNGATED_FORMS` in `functions/api/subscribe.ts` exempts specific forms from the competitor and free-provider rules. Today that is the general contact form only. Disposable addresses are rejected on **every** form, ungated included.

The disposable list is server-side only, so the browser does not flag a throwaway address as you type. The person sees the error on submit.

## Picking up list changes in this repo

The pinned tag controls the copy bundled into this site:

```bash
npm install github:krnshrm/hs-block#v1.1.0
npm run build
git add package.json package-lock.json && git commit -m "hs-block v1.1.0" && git push
```

Bumping is optional maintenance. Blocks are already live in the app without it.
