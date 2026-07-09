import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { translatedRoutes } from './src/i18n/ui';

// Static marketing site deployed to Cloudflare Pages.
// Forms are handled by a Pages Function (functions/api/subscribe.ts), so we do
// NOT need an SSR adapter yet. Add @astrojs/cloudflare only if a future page
// genuinely needs server-side rendering.

// Sitemap policy: English URLs are always included. A locale URL is included
// only when it is a REAL translated page, i.e. its path is listed in
// translatedRoutes (src/i18n/ui.ts). Untranslated locale URLs are Astro
// fallback stubs (noindex + redirect to English) and stay out of the sitemap.
// fr/es/pt have no translatedRoutes yet, so all their URLs stay out.
const LOCALE_URL = /^https:\/\/www\.hubsell\.com\/(de|nl|fr|es|pt)(\/.*)?$/;
function inSitemap(page) {
  const m = page.match(LOCALE_URL);
  if (!m) return true; // English URL
  const routes = translatedRoutes[m[1]];
  if (!routes) return false; // locale not live yet
  let path = m[2] || '/';
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return routes.includes(path); // real translation only
}

export default defineConfig({
  site: 'https://www.hubsell.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ filter: inSitemap }),
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
