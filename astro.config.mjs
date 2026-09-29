import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { translatedRoutes } from './src/i18n/ui';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, relative, sep } from 'node:path';

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

// Canonicals and the sitemap use trailing slashes, but most internal links are
// written without one (data files, components, migrated Webflow HTML), so every
// click and every Googlebot fetch went through a 308 and GSC filled up with
// "Page with redirect" rows. Rather than edit hundreds of sources, including
// migrated bodies that must stay verbatim, rewrite the built HTML: add the slash
// only when the link points at a page that exists in dist, and send links that
// match an exact rule in _redirects straight to its target. Anything else
// (wildcard redirects, files, API routes) is left alone.
const HREF = /href="((?:https:\/\/www\.hubsell\.com)?)(\/[^"#?]*?)([?#][^"]*)?"/g;
function trailingSlashLinks() {
  return {
    name: 'trailing-slash-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true }))
          .filter((f) => f.endsWith('.html'))
          .map((f) => join(root, f));
        const pages = new Set(
          files
            .filter((f) => f.endsWith(`${sep}index.html`))
            .map((f) => '/' + relative(root, f).split(sep).slice(0, -1).join('/'))
            .map((p) => (p === '/' ? p : p.replace(/\/$/, ''))),
        );
        const bare = (p) => (p.length > 1 ? p.replace(/\/$/, '') : p);
        const redirects = new Map();
        for (const line of (await readFile(join(root, '_redirects'), 'utf8')).split('\n')) {
          const [from, to] = line.trim().split(/\s+/);
          if (!from?.startsWith('/') || !to?.startsWith('/') || /[*:]/.test(from)) continue;
          if (pages.has(bare(to))) redirects.set(bare(from), bare(to));
        }
        let changed = 0;
        for (const file of files) {
          const html = await readFile(file, 'utf8');
          const out = html.replace(HREF, (m, origin, path, rest = '') => {
            const target = redirects.get(bare(path)) ?? bare(path);
            if (target === '/' || !pages.has(target)) return m;
            const fixed = `${target}/`;
            if (fixed === path) return m;
            changed++;
            return `href="${origin}${fixed}${rest}"`;
          });
          if (out !== html) await writeFile(file, out);
        }
        logger.info(`rewrote ${changed} internal links to their canonical URL`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.hubsell.com',
  // `site` is the production origin, used wherever a full URL is needed:
  // sitemap entries, canonical tags, new URL(path, Astro.site).
  output: 'static',
  trailingSlash: 'ignore',
  // With 'ignore', /pricing and /pricing/ both work. build.format:'directory'
  // below writes each page as folder/index.html, which is what static hosts
  // expect.
  integrations: [
    sitemap({ filter: inSitemap }),
    trailingSlashLinks(),
  ],
  build: { format: 'directory' },
  // locales lists the language codes. defaultLocale 'en' with
  // prefixDefaultLocale false puts English at / and German at /de/. The
  // fallback map tells Astro to generate a redirect stub when a /de/ page has
  // no file of its own; real files under src/pages/de/ and nl/ override it.
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
