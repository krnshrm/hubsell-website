// Locale switch for the /platform pages, mirroring the home-i18n pattern.
// English copy in platform-content.ts, German in platform.de.ts, Dutch in
// platform.nl.ts. Also exposes a locale-aware testimonial lookup by slug.
import { platform, type PlatformData, type PlatformDetailData, type PlatformOverviewData } from './platform-content';
import { platformDe } from './platform.de';
import { platformNl } from './platform.nl';
import { TESTIMONIALS, type Testimonial } from './testimonials';
import { TESTIMONIALS_DE } from './testimonials.de';
import { TESTIMONIALS_NL } from './testimonials.nl';
import type { Locale } from '../i18n/ui';

export function getPlatform(L: Locale): PlatformData {
  if (L === 'de') return platformDe;
  if (L === 'nl') return platformNl;
  return platform;
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
  const pool = L === 'de' ? TESTIMONIALS_DE : L === 'nl' ? TESTIMONIALS_NL : TESTIMONIALS;
  return pool.find((t) => t.slug === slug);
}
