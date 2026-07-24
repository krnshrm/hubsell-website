# Codebase flow chart

_Created 2026-07-24. A visual map of how the pieces of this repo fit together, from a request to a built page. Companion to `docs/20260724-1100-LEARNING-ASTRO.md` (reading order) and `docs/HANDOFF.md`. Renders on GitHub and in any Mermaid-capable markdown viewer._

## 1. The build: from source to live site

How `npm run build` turns the repo into the static site Cloudflare serves.

```mermaid
flowchart TD
    CFG["astro.config.mjs<br/>site config, i18n, sitemap"] --> BUILD
    PAGES["src/pages/<br/>98 page files = URLs"] --> BUILD
    CONTENT["src/content/<br/>markdown collections<br/>(blog, glossary, knowledge,<br/>stories, use cases, comparisons)"] --> SCHEMA
    SCHEMA["src/content.config.ts<br/>zod schemas validate<br/>every .md frontmatter"] --> BUILD
    PUBLIC["public/<br/>_redirects, _headers,<br/>robots.txt"] --> DIST
    BUILD["npm run build<br/>(runs all frontmatter code once)"] --> DIST["dist/<br/>429 static HTML pages<br/>+ bundled CSS and JS"]
    DIST --> CF["Cloudflare Pages<br/>push to main = live deploy"]
    FN["functions/api/subscribe.ts<br/>Pages Function (server code)"] --> CF
```

## 2. How one page gets rendered

The layered anatomy shared by every page in the repo.

```mermaid
flowchart TD
    URL["URL, e.g. /solutions/role/sdr"] --> ROUTE["Route file in src/pages/<br/>thin shell: meta + data lookup"]
    ROUTE --> LAYOUT["src/layouts/BaseLayout.astro<br/>head, SEO, nav, footer, theme"]
    ROUTE --> BODY["Body component<br/>src/components/*.astro"]
    BODY --> SECTIONS["Section components<br/>(Hero, Faq, visuals ...)"]
    LAYOUT --> CHROME["Nav.astro / TopBar.astro / Footer.astro"]

    DATA["src/data/<br/>content + copy in .ts files"] --> ROUTE
    DATA --> BODY
    I18N["src/i18n/<br/>ui.ts dictionary, utils.ts helpers"] --> CHROME
    I18N --> BODY
    COLL["Content collections<br/>via getCollection()"] --> ROUTE
    CSS["src/styles/global.css<br/>design tokens, .sec / .wrap / .button"] --> LAYOUT
    CSS --> SECTIONS
```

## 3. Languages: one codebase, three locales

```mermaid
flowchart LR
    EN["src/pages/*<br/>English routes (no prefix)"] --> COMP["Shared components<br/>read Astro.currentLocale"]
    DE["src/pages/de/*<br/>thin copies -> /de/..."] --> COMP
    NL["src/pages/nl/*<br/>thin copies -> /nl/..."] --> COMP
    COMP --> ACC["src/data/*-i18n.ts accessors<br/>getHome(locale) etc."]
    ACC --> ENC["*-content.ts / *.ts<br/>English source"]
    ACC --> DEC["*.de.ts<br/>German"]
    ACC --> NLC["*.nl.ts<br/>Dutch"]
    UI["src/i18n/ui.ts<br/>chrome strings +<br/>translatedRoutes"] --> COMP
```

## 4. Forms: the only server round trip

```mermaid
flowchart LR
    FORMC["Form components<br/>WaitlistForm / BookCallForm /<br/>RequestForm"] --> GUARD["src/scripts/form-guard.ts<br/>honeypot, fill time, Turnstile"]
    FORMC --> CHECK["src/data/free-email-domains.ts<br/>instant client check"]
    FORMC -- "fetch POST /api/subscribe" --> FN["functions/api/subscribe.ts<br/>validates + re-checks everything<br/>server-side"]
    FN --> PLUNK["Plunk<br/>events, alerts, opt-in emails"]
```

## 5. Browser-side behavior on a built page

```mermaid
flowchart TD
    HTML["Static HTML from dist/"] --> INLINE["Inline pre-paint script<br/>(BaseLayout): theme +<br/>reduced-motion gate"]
    HTML --> BUNDLE["Bundled module scripts<br/>(deferred)"]
    BUNDLE --> MOTION["src/scripts/motion.ts<br/>smooth scroll, GSAP wiring"]
    BUNDLE --> WIDGETS["Component scripts<br/>accordions, nav menus,<br/>glossary search, form submit,<br/>animated visuals"]
    WIDGETS -- "re-init on astro:page-load" --> WIDGETS
```

## Not part of the site build

- `scripts/*.mjs`: one-off Node utilities run by hand (`npm run <name>`); nothing on the site imports them.
- `src/embeds/*.html`: raw Webflow widget exports kept as reference; the live visuals are the rebuilt components.
- `docs/`: working documentation for founder and chats.
