import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static marketing site deployed to Cloudflare Pages.
// Forms are handled by a Pages Function (functions/api/subscribe.ts), so we do
// NOT need an SSR adapter yet. Add @astrojs/cloudflare only if a future page
// genuinely needs server-side rendering.
export default defineConfig({
  site: 'https://www.hubsell.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
