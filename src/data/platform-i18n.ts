// Locale switch for the /platform pages, mirroring the home-i18n pattern.
// English copy in platform-content.ts, German in platform.de.ts, Dutch in
// platform.nl.ts. Also exposes a locale-aware testimonial lookup by slug.
import { platform, type PlatformData, type PlatformDetailData, type PlatformOverviewData } from './platform-content';
import { platformDe } from './platform.de';
import { platformNl } from './platform.nl';
import { TESTIMONIALS, type Testimonial } from './testimonials';
import { TESTIMONIALS_DE } from './testimonials.de';
import { TESTIMONIALS_NL } from './testimonials.nl';
import { platformFr } from './20261114-1030-platform.fr';
import { platformEs } from './20261114-1030-platform.es';
import { platformPt } from './20261114-1030-platform.pt';
import { homeFr, quotesFr } from './20261114-1030-home.fr';
import { homeEs, quotesEs } from './20261114-1030-home.es';
import { homePt, quotesPt } from './20261114-1030-home.pt';
import type { Locale } from '../i18n/ui';

const morePlatform: Record<string, PlatformData> = { fr: platformFr, es: platformEs, pt: platformPt };
// Same idea as testimonials.de.ts: the shared pool with the quote swapped by slug.
const pool = (home: { slug: string; quote: string }[], standalone: Record<string, string>): Testimonial[] => {
  const q: Record<string, string> = { ...standalone };
  for (const t of home) q[t.slug] = t.quote;
  return TESTIMONIALS.map((t) => (q[t.slug] ? { ...t, quote: q[t.slug] } : t));
};
const morePools: Record<string, Testimonial[]> = {
  fr: pool(homeFr.testimonials, quotesFr), es: pool(homeEs.testimonials, quotesEs), pt: pool(homePt.testimonials, quotesPt),
};

export function getPlatform(L: Locale): PlatformData {
  if (L === 'de') return platformDe;
  if (L === 'nl') return platformNl;
  return morePlatform[L] ?? platform;
}

export function getPlatformOverview(L: Locale): PlatformOverviewData {
  return getPlatform(L).overview;
}

export function getPlatformDetail(L: Locale, path: string): PlatformDetailData {
  const d = getPlatform(L).details.find((x) => x.path === path);
  if (!d) throw new Error(`No platform detail data for ${path}`);
  return d;
}

export function getPlatformQuote(L: Locale, slug: string): Testimonial | undefined {
  const list = L === 'de' ? TESTIMONIALS_DE : L === 'nl' ? TESTIMONIALS_NL : morePools[L] ?? TESTIMONIALS;
  return list.find((t) => t.slug === slug);
}
