// Locale switch for the /solutions pages, mirroring platform-i18n. English copy in
// solutions-content.ts, German in solutions.de.ts, Dutch in solutions.nl.ts. Also
// re-exports the locale-aware testimonial lookup used by the detail pages.
import { solutions, type SolutionsData, type SolutionDetailData, type SolutionHubData } from './solutions-content';
import { solutionsDe } from './solutions.de';
import { solutionsNl } from './solutions.nl';
import { getPlatformQuote } from './platform-i18n';
import { solutionsFr } from './20261114-1030-solutions.fr';
import { solutionsEs } from './20261114-1030-solutions.es';
import { solutionsPt } from './20261114-1030-solutions.pt';
import type { Locale } from '../i18n/ui';

const more: Record<string, SolutionsData> = { fr: solutionsFr, es: solutionsEs, pt: solutionsPt };

export function getSolutions(L: Locale): SolutionsData {
  if (L === 'de') return solutionsDe;
  if (L === 'nl') return solutionsNl;
  return more[L] ?? solutions;
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
