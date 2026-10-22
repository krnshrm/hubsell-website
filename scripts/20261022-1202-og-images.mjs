// Social preview images for blog posts (1200x630 PNG), so no post needs a
// designed cover. Runs before every build (package.json "prebuild") and by hand
// with `npm run og`, which is how they appear in `npm run dev`.
//
// Output goes to public/og/insights/<slug>.png, which is git-ignored build
// output. A post is only redrawn when its title or first topic changes; the
// version hash below must match the one in src/pages/insights/[slug].astro,
// which adds it to the og:image URL as ?v= so social sites refetch.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const POSTS = join(ROOT, 'src/content/insights');
const OUT = join(ROOT, 'public/og/insights');
const MANIFEST = join(OUT, '.manifest.json');
const TOPICS = JSON.parse(readFileSync(join(ROOT, 'src/data/20261022-1202-blog-topics.json'), 'utf8'));
// Bump to redraw every image after a layout change below.
const LAYOUT = '2';

const font = (pkg, file) => readFileSync(join(ROOT, 'node_modules/@fontsource', pkg, 'files', file));
const FONTS = [
  { name: 'Lexend', weight: 500, data: font('lexend', 'lexend-latin-500-normal.woff') },
  { name: 'Lexend', weight: 500, data: font('lexend', 'lexend-latin-ext-500-normal.woff') },
  { name: 'Lexend', weight: 400, data: font('lexend', 'lexend-latin-400-normal.woff') },
  { name: 'Newsreader', weight: 500, data: font('newsreader', 'newsreader-latin-500-normal.woff') },
  { name: 'Newsreader', weight: 500, data: font('newsreader', 'newsreader-latin-ext-500-normal.woff') },
];

// The wordmark comes from R2. If the fetch fails the card falls back to the
// name in type, so a network blip never fails a build.
async function wordmark(variant) {
  try {
    const res = await fetch(`https://assets.hubsell.com/logo/hubsell-wordmark-${variant}.svg`);
    if (!res.ok) throw new Error(String(res.status));
    return `data:image/svg+xml;base64,${Buffer.from(await res.text()).toString('base64')}`;
  } catch {
    return null;
  }
}

function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  const fm = m ? m[1] : '';
  const line = (key) => fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1]?.trim();
  const str = (v) => (v && v.startsWith('"') ? JSON.parse(v) : v ?? '');
  const topicsRaw = line('topics');
  return {
    title: str(line('title')),
    topics: topicsRaw && topicsRaw.startsWith('[') ? JSON.parse(topicsRaw) : [],
    draft: line('draft') === 'true',
  };
}

const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
const h = (type, style, children) => ({ type, props: { style, children } });

function card({ title, topic, logo }) {
  const ink = topic.ink;
  const size = title.length > 80 ? 52 : title.length > 55 ? 60 : 70;
  const ring = (d, right, bottom) =>
    h('div', { position: 'absolute', width: d, height: d, right, bottom, borderRadius: d, border: `3px solid ${rgba(ink, 0.16)}` });
  return h('div', {
    // Satori adds padding outside width/height, so the box is the canvas minus padding.
    width: 1200 - 128, height: 630 - 128, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: 64, background: topic.bg, color: ink, fontFamily: 'Lexend', position: 'relative',
  }, [
    ring(760, -260, -420),
    ring(460, -90, -190),
    h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, [
      logo
        ? { type: 'img', props: { src: logo, height: 44, width: 185 } }
        : h('div', { fontSize: 40, fontWeight: 500 }, 'hubsell'),
      h('div', { fontSize: 22, letterSpacing: 3, opacity: 0.75 }, 'INSIGHTS'),
    ]),
    h('div', { display: 'flex', flexDirection: 'column', maxWidth: 1000 }, [
      h('div', { fontFamily: 'Newsreader', fontSize: 40, opacity: 0.9, marginBottom: 18 }, topic.label),
      h('div', { fontSize: size, fontWeight: 500, lineHeight: 1.1, letterSpacing: -1 }, title),
    ]),
    h('div', { fontSize: 24, opacity: 0.75 }, 'hubsell.com/insights'),
  ]);
}

mkdirSync(OUT, { recursive: true });
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {};
const logos = { dark: await wordmark('dark'), light: await wordmark('light') };

let drawn = 0;
let kept = 0;
for (const file of readdirSync(POSTS).filter((f) => f.endsWith('.md')).sort()) {
  const slug = file.slice(0, -3);
  const { title, topics, draft } = frontmatter(readFileSync(join(POSTS, file), 'utf8'));
  if (draft || !title) continue;
  const first = topics[0];
  const version = createHash('sha1').update(`${title}|${first ?? ''}`).digest('hex').slice(0, 10);
  const target = join(OUT, `${slug}.png`);
  const key = `${version}:${LAYOUT}:${logos.dark ? 'logo' : 'text'}`;
  if (manifest[slug] === key && existsSync(target)) { kept++; continue; }

  const topic = TOPICS.topics[first] ?? TOPICS.fallback;
  const svg = await satori(card({ title, topic, logo: logos[topic.logo] }), { width: 1200, height: 630, fonts: FONTS });
  writeFileSync(target, new Resvg(svg).render().asPng());
  manifest[slug] = key;
  drawn++;
}
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`og images: ${drawn} drawn, ${kept} unchanged${logos.dark ? '' : ' (wordmark fetch failed, used type)'}`);
