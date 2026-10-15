// Every URL the site prints ends in "/" and uses https://www.hubsell.com, which is
// how the pages are indexed. Runs in dev and while prerendering, so links look
// the same on localhost as in production. Rules:
// - internal links (href="/...") get a trailing slash unless they point at a
//   file (has an extension) or at /api/;
// - any http(s)://hubsell.com or www.hubsell.com URL, in links, meta tags or
//   JSON-LD, becomes https://www.hubsell.com/.../ (other subdomains such as
//   assets. and app. are left alone).
// The build step in astro.config.mjs still maps links that hit a _redirects
// rule straight to their target.
import { defineMiddleware } from 'astro:middleware';

const FILE = /\.[a-z0-9]{1,5}$/i;

export function withSlash(path: string): string {
  const cut = path.search(/[?#]/);
  const base = (cut === -1 ? path : path.slice(0, cut)) || '/';
  const rest = cut === -1 ? '' : path.slice(cut);
  if (base.endsWith('/') || FILE.test(base) || base.startsWith('/api/')) return base + rest;
  return `${base}/${rest}`;
}

const ABS = /https?:\/\/(?:www\.)?hubsell\.com(\/[^\s"'<>)\\]*)?/g;
const REL = /href="(\/(?!\/)[^"]*)"/g;

export function normaliseLinks(html: string): string {
  return html
    .replace(ABS, (_m, p: string | undefined) => {
      let path = p || '/';
      const trail = path.match(/[.,;:!?]+$/)?.[0] ?? '';
      if (trail) path = path.slice(0, -trail.length) || '/';
      return `https://www.hubsell.com${withSlash(path)}${trail}`;
    })
    .replace(REL, (_m, p: string) => `href="${withSlash(p)}"`);
}

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') ?? '').includes('text/html')) return res;
  const html = await res.text();
  return new Response(normaliseLinks(html), { status: res.status, statusText: res.statusText, headers: res.headers });
});
