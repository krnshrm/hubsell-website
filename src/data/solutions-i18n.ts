// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// Locale ACCESSOR file: merges the English source with the translated
// siblings and exports get*(locale) functions for components. The pattern is
// explained in src/data/home-i18n.ts.
// ==========================================================================
// Locale switch for the /solutions pages, mirroring platform-i18n. English copy in
// solutions-content.ts, German in solutions.de.ts, Dutch in solutions.nl.ts. Also
// re-exports the locale-aware testimonial lookup used by the detail pages.
import { solutions, type SolutionsData, type SolutionDetailData, type SolutionHubData } from './solutions-content';
import { solutionsDe } from './solutions.de';
import { solutionsNl } from './solutions.nl';
import { getPlatformQuote } from './platform-i18n';
import type { Locale } from '../i18n/ui';

export function getSolutions(L: Locale): SolutionsData {
  if (L === 'de') return solutionsDe;
  if (L === 'nl') return solutionsNl;
  return solutions;
}

export function getSolutionsHub(L: Locale): SolutionHubData {
  return getSolutions(L).hub;
}

export function getSolutionDetail(L: Locale, path: string): SolutionDetailData {
  const d = getSolutions(L).details.find((x) => x.path === path);
  if (!d) throw new Error(`No solution detail data for ${path}`);
  return d;
}

// Testimonial lookup is shared with the platform pages.
export { getPlatformQuote as getSolutionQuote };
