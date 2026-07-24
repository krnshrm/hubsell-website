# Learning Astro from this repo (the LEARNING comments)

_Created 2026-07-24. This documents the teaching-comments pass on branch `learning-comments`. Companion to `docs/HANDOFF.md`. Purpose: the founder wants to learn to build Astro sites without AI, using this live project as the textbook._

## What was done

Every source file in the project now carries teaching comments, marked with a `LEARNING NOTES` header block and inline `LEARNING:` notes. Nothing else changed:

- No content, copy, design, markup, styling, or behavior was touched. Comments were only ever inserted between existing lines, never edited into them.
- The built output is byte-identical. Verified by checksumming all 678 files in `dist/` before and after: zero differences. Astro strips `//` frontmatter comments, `{/* */}` template comments, and CSS comments at build.
- Coverage: all 169 `.astro` files (pages, layouts, components), all 30 `src/data/*.ts` files, `src/i18n/`, `src/scripts/`, `src/content.config.ts`, `astro.config.mjs`, `src/styles/global.css`, `functions/api/subscribe.ts`, the `scripts/*.mjs` utilities, and the markdown pages (via YAML frontmatter comments, which are also stripped).
- The comments assume no prior coding knowledge: they explain HTML, CSS, JavaScript and TypeScript basics as well as everything Astro-specific.

## How the comments are organized

Explaining every concept in every file would bury you in repetition, so the comments use an exemplar system:

- A handful of files carry deep, line-level explanations. These are the exemplars.
- Every other file carries a shorter header that says what the file does, which pattern it follows, and which exemplar explains that pattern in depth.

So when a header says "the pattern is explained in src/components/Hero.astro", that is your cue to read Hero once, carefully; afterwards the sibling files will read easily.

## Suggested reading order

Work through the exemplars in this order. Each builds on the previous one.

1. `astro.config.mjs`. How Astro works overall: static builds, dev server, i18n routing.
2. `src/layouts/BaseLayout.astro`. The .astro file format itself (frontmatter vs template), layouts, slots, named slots, build-time vs browser scripts, the theme system. The single most important file to understand.
3. `src/pages/index.astro` and `src/pages/contact.astro`. File-based routing and the thin-shell page pattern.
4. `src/components/JsonLd.astro`, then `src/components/Avatar.astro`. The smallest components: props, scoped styles, CSS variables from props.
5. `src/components/Hero.astro`, then `src/components/Faq.astro`. The section-component pattern, template loops with .map(), conditional rendering, and a full browser-side script (the accordion).
6. `src/content.config.ts`, then `src/pages/insights/[slug].astro`. Content collections, zod schemas, and dynamic routes with getStaticPaths(). This is the heart of "many pages from one file".
7. `src/i18n/ui.ts` and `src/i18n/utils.ts`, then `src/pages/de/index.astro`. How one codebase serves three languages.
8. `src/components/WaitlistForm.astro`, then `functions/api/subscribe.ts`. Forms on a static site: browser fetch, server-side validation, why secrets live on the server.
9. `src/components/GlossaryIndex.astro`. Client-side search over static HTML.
10. `src/components/HeroPipelineFlow.astro` and `src/components/SolutionStepsSdr.astro`. The animated-visual recipe (GSAP, reduced-motion gating).
11. `src/styles/global.css`. The design-token system that everything above leans on.
12. `src/data/navigation.ts` and `src/data/home-i18n.ts`. The data layer: content separated from presentation.

## How to practice

- Run the site locally while reading: `npm install`, then `npm run dev`, open http://localhost:4321. Edit a file, watch the browser update.
- To test-build the whole site: `npm run build` (expects 429 pages).
- A good first exercise: copy an existing simple page (like `src/pages/contact.astro`) to a new filename on a branch, change its component and copy, and see it appear at the new URL. Delete it after.
- A good second exercise: add a term to the glossary collection (one .md file with the frontmatter the schema in `src/content.config.ts` requires) and watch `/glossary` pick it up.
- To build a NEW site from scratch with these skills: `npm create astro@latest` scaffolds a fresh project; you will recognize every file it creates.

## Comment conventions (for any future edits)

- `//` comments in frontmatter and .ts files, `{/* */}` in .astro templates, `/* */` in CSS, `#` in YAML frontmatter of .md pages. All are stripped at build; a plain `<!-- -->` HTML comment in a template would ship to visitors, so avoid it for teaching notes.
- No teaching comments in the BODY of .md content or page files; anything below the closing `---` ships as written.
- The LEARNING blocks are content-neutral documentation. Future work sessions must preserve them: never strip or rewrite them when editing a file, and when adding a new file it is welcome (not required) to follow the same convention.

## Verifying nothing shipped changed (repeatable)

```
npm run build
find dist -type f -exec md5sum {} \; | sort -k2 > /tmp/after.txt
```

Compare against a baseline made the same way on `main`. The learning-comments branch produces identical checksums.
