// ============================= LEARNING NOTES =============================
// This is the CONFIG FILE for the whole Astro project. Astro reads it once,
// when you run `npm run dev` or `npm run build`. It is plain JavaScript
// (.mjs means "JavaScript module", so we can use `import` and `export`).
//
// Big picture of how Astro works:
//   1. You write pages in `src/pages/`. Each file there becomes one URL.
//   2. You run `npm run build`. Astro runs all the code in the `---` fences
//      of every page ONCE, on your machine, and writes plain .html files
//      into `dist/`. No server is needed afterwards; Cloudflare just serves
//      those files. That is what `output: 'static'` below means.
//   3. `npm run dev` does the same thing live, with auto reload, at
//      http://localhost:4321 while you edit.
//
// `import` at the top pulls code from other files or from installed packages
// (the ones listed in package.json and downloaded into node_modules by
// `npm install`). A name in quotes with no ./ prefix ('astro/config') is a
// package; a path starting with ./ is a file in this repo.
// ==========================================================================
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
// LEARNING: this line defines a "regular expression" (regex), a pattern for
// matching text. Here it matches any URL that starts with our domain followed
// by /de/, /nl/, /fr/, /es/ or /pt/. The ^ means "start of string", the
// (de|nl|...) is "one of these", and \/ is an escaped forward slash.
const LOCALE_URL = /^https:\/\/www\.hubsell\.com\/(de|nl|fr|es|pt)(\/.*)?$/;
// LEARNING: a plain JavaScript function. It receives one page URL as a string
// and returns true or false. The sitemap integration below calls it once per
// built page to decide whether that page belongs in sitemap.xml.
function inSitemap(page) {
  const m = page.match(LOCALE_URL);
  if (!m) return true; // English URL
  const routes = translatedRoutes[m[1]];
  if (!routes) return false; // locale not live yet
  let path = m[2] || '/';
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return routes.includes(path); // real translation only
}

// LEARNING: `export default` makes this object the thing Astro receives when
// it loads the file. `defineConfig()` does nothing at runtime; it only gives
// your editor autocomplete for the option names inside.
export default defineConfig({
  site: 'https://www.hubsell.com',
  // LEARNING: `site` is the production origin. Astro uses it whenever it needs
  // a FULL url (sitemap entries, canonical tags, `new URL(path, Astro.site)`).
  output: 'static',
  trailingSlash: 'ignore',
  // LEARNING: with 'ignore', /pricing and /pricing/ both work. `build.format:
  // 'directory'` below writes each page as folder/index.html (so /pricing is
  // really /pricing/index.html on disk), which is what static hosts expect.
  integrations: [
    sitemap({ filter: inSitemap }),
  ],
  build: { format: 'directory' },
  // LEARNING: Astro's built-in internationalization. `locales` lists language
  // codes, `defaultLocale: 'en'` plus `prefixDefaultLocale: false` means English
  // lives at / while German lives at /de/... . The `fallback` map tells Astro:
  // if a /de/ page has no file of its own, generate a stub that redirects to the
  // English page (`fallbackType: 'redirect'`). Pages we DO translate get real
  // files under src/pages/de/ and src/pages/nl/, which override the fallback.
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
