// Central SEO / structured-data values. Keep brand facts here so JSON-LD, Open
// Graph images, and titles stay consistent everywhere. Plain language only — no
// marketing filler — because this text feeds search engines and AI answers.

export const SITE_URL = 'https://www.hubsell.com';

// Default social / Open Graph image (1200x630). Lives on R2; upload the PNG to
// this exact key before launch. Per-page images (e.g. blog cover) override it.
export const OG_IMAGE = 'https://assets.hubsell.com/brand/og-default.png';

const LOGO = 'https://assets.hubsell.com/logo/hubsell-favicon.svg';

// The company. Rendered site-wide so the brand is an unambiguous entity.
// `sameAs` lists the official/claimed profiles: LinkedIn, Crunchbase, and the
// live review listings (GetApp, G2, Capterra, OMR).
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  sameAs: [
    'https://www.linkedin.com/company/hubsell',
    'https://www.crunchbase.com/organization/hubsell',
    'https://www.getapp.com/sales-software/a/hubsell/',
    'https://www.g2.com/products/hubsell/reviews',
    'https://www.capterra.com/p/172232/hubsell/reviews/',
    'https://omr.com/en/reviews/product/hubsell',
  ],
  name: 'hubsell',
  legalName: 'hubsell UG',
  url: SITE_URL,
  logo: LOGO,
  description:
    'hubsell is a B2B sales platform that sources verified contact data live, runs coordinated email, LinkedIn, and phone outreach, and syncs every activity to your CRM.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrichstraße 155',
    postalCode: '10117',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'hubsell',
  url: SITE_URL,
};

// The product. Describes hubsell as software so it can surface for category and
// "alternative to X" queries in both search and AI answers.
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'hubsell',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'B2B sales intelligence and engagement platform',
  operatingSystem: 'Web',
  url: SITE_URL,
  description:
    'hubsell replaces your sales intelligence, sales engagement, and LinkedIn outreach tools with one platform: live-sourced verified contact data, coordinated email and LinkedIn sequences, and automatic CRM sync.',
  publisher: { '@type': 'Organization', name: 'hubsell', url: SITE_URL },
};

// Breadcrumb trail builder. Pass ordered [{ name, url }] items (absolute or
// root-relative URLs); the last item is the current page.
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
