import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static marketing site deployed to Cloudflare Pages.
// Forms are handled by a Pages Function (functions/api/subscribe.ts), so we do
// NOT need an SSR adapter yet. Add @astrojs/cloudflare only if a future page
// genuinely needs server-side rendering.

// Locale URLs that are not yet translated fall back to English via a redirect
// stub (noindex + canonical to the English URL), so keep them OUT of the sitemap
// until real translated pages exist. Revisit this to ADD translated locale pages
// (with hreflang) as they ship.
const LOCALE_STUB = /^https:\/\/www\.hubsell\.com\/(de|nl|fr|es|pt)(\/|$)/;

export default defineConfig({
  site: 'https://www.hubsell.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ filter: (page) => !LOCALE_STUB.test(page) }),
  ],
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'de', 'nl', 'fr', 'es', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect',
    },
    // Add a locale here when we START translating it; until then its URLs are not
    // generated (the switcher shows it as "Soon", so nothing links to it). German first.
    fallback: { de: 'en', nl: 'en' },
  },
});
