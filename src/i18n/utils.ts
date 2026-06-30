// i18n helpers used by the chrome. Deliberately self-contained: URL building is
// manual (prefix `/<locale>` for non-default locales), so behaviour is identical
// in dev, build, and on Cloudflare, and does not depend on trailing-slash config.
// The Astro i18n config (astro.config.mjs) still drives routing + the English
// fallback for untranslated locale URLs; this file only builds links and strings.
import { defaultLocale, locales, ui, translatedRoutes, type Locale } from './ui';

const LOCALE_SET: readonly string[] = locales;

export function asLocale(value: string | undefined | null): Locale {
  return value && LOCALE_SET.includes(value) ? (value as Locale) : defaultLocale;
}

function normalize(p: string): string {
  if (!p) return '/';
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

// Build a locale-aware internal URL. External links, mail/tel, and pure anchors
// pass through untouched. Default-locale (English) paths are returned unchanged
// so English output stays identical to before i18n.
export function localizeUrl(locale: string | undefined, path: string): string {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  if (path.startsWith('#')) return path;
  const loc = asLocale(locale);
  const [p, hash] = path.split('#');
  if (loc === defaultLocale) return path;
  let clean = p || '/';
  if (!clean.startsWith('/')) clean = '/' + clean;
  const url = clean === '/' ? `/${loc}/` : `/${loc}${clean}`;
  return hash ? `${url}#${hash}` : url;
}

// Translate a chrome key, falling back to English, then to the key itself.
export function useTranslations(locale: string | undefined) {
  const loc = asLocale(locale);
  const dict = ui[loc] || {};
  const base = ui[defaultLocale] || {};
  return (key: string): string => dict[key] ?? base[key] ?? key;
}

// Strip the locale prefix from a pathname to get the English-root base path,
// used to look a page up across locales.
export function basePath(pathname: string, locale: string | undefined): string {
  const loc = asLocale(locale);
  if (loc === defaultLocale) return normalize(pathname);
  const prefix = `/${loc}`;
  let p = pathname;
  if (p === prefix) p = '/';
  else if (p.startsWith(prefix + '/')) p = p.slice(prefix.length);
  return normalize(p);
}

// Does a real translated page exist for this locale at this base path?
export function hasTranslation(locale: Locale, base: string): boolean {
  if (locale === defaultLocale) return true; // English always exists
  const list = (translatedRoutes[locale] || []).map(normalize);
  return list.includes(normalize(base));
}

// Locale-aware href for an internal link. Returns the localized URL only when a
// real translated page exists for this locale, so links never point into a
// fallback redirect; otherwise the original English path is returned. External
// links, mail/tel, and pure anchors pass through. On English, returns the path
// unchanged. As pages are translated and added to translatedRoutes, their links
// localize automatically with no further edits.
export function localizedHref(locale: string | undefined, path: string): string {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  if (path.startsWith('#')) return path;
  const loc = asLocale(locale);
  if (loc === defaultLocale) return path;
  const base = (path.split('#')[0] || '/').split('?')[0] || '/';
  return hasTranslation(loc, base) ? localizeUrl(loc, path) : path;
}
