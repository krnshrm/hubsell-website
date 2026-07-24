// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// ==========================================================================
// Copy for the standalone /pricing page (EN base, plus DE and NL). The pricing
// widget itself stays in PricingTable.astro (single source of truth for prices);
// this file holds the page chrome, the comparison-table labels, and the FAQ.
// Feature-row labels are pulled from the widget's own translations via et(), so
// the comparison table is localized without repeating any feature wording here.
import type { Locale } from '../i18n/ui';

export interface PricingFaq { q: string; a: string }
export interface PricingPageData {
  title: string; metaDescription: string;
  eyebrow: string; h1Pre: string; h1Accent: string; h1Post: string; sub: string; demoCta: string;
  compareEyebrow: string; compareTitle: string;
  platformName: string; platformSub: string; dataName: string; dataSub: string;
  colStart: string; colGrow: string; colScale: string; colPayg: string; colSub: string;
  cat: Record<string, string>;
  groups: Record<string, string>;
  creditsNote: string;
  soonLabel: string;
  planRow: string; seatsRow: string; billingRow: string; priceNote: string;
  monthly: string; annual: string; perCredit: string; perYear: string;
  seatsStart: string; seatsGrow: string; seatsScale: string;
  yes: string; no: string;
  faqEyebrow: string; faqTitle: string; faq: PricingFaq[];
  closingPre: string; closingAccent: string; closingPost: string; closingSub: string; closingCta: string;
  crumbHome: string; crumbSelf: string;
}

const EN: PricingPageData = {
  "title": "Pricing | hubsell",
  "metaDescription": "hubsell pricing: the Start, Grow, and Scale platform plans, plus the Sales Intelligence data add-on. Compare every feature, in EUR, USD, or GBP.",
  "eyebrow": "Pricing",
  "h1Pre": "Simple pricing for ",
  "h1Accent": "your whole GTM motion",
  "h1Post": "",
  "sub": "One platform plan for outreach and CRM sync, and a data add-on for live-sourced contacts. Pick the plan that fits, in EUR, USD, or GBP.",
  "demoCta": "Book a demo",
  "compareEyebrow": "Compare",
  "compareTitle": "Every feature, plan by plan",
  "platformName": "Platform",
  "platformSub": "GTM orchestration",
  "dataName": "Data add-on",
  "dataSub": "Sales Intelligence",
  "colStart": "Start",
  "colGrow": "Grow",
  "colScale": "Scale",
  "colPayg": "Pay as you go",
  "colSub": "Subscription",
  "cat": {
    "plan": "Plan",
    "nodes": "Workflow nodes",
    "outreach": "Outreach",
    "crm": "CRM sync",
    "support": "Support and onboarding",
    "sourcing": "Data sourcing",
    "enrichment": "Enrichment and targeting"
  },
  "planRow": "Starting price",
  "seatsRow": "Seats",
  "billingRow": "Billing",
  "priceNote": "Prices shown in EUR. Use the toggle above for USD and GBP.",
  "monthly": "Monthly",
  "annual": "Annual",
  "perCredit": "/credit",
  "perYear": "/year",
  "seatsStart": "1 seat",
  "seatsGrow": "From 3 seats",
  "seatsScale": "From 10 seats",
  "yes": "Included",
  "no": "Not included",
  "faqEyebrow": "FAQ",
  "faqTitle": "Pricing questions",
  "faq": [
    {
      "q": "How much does hubsell cost?",
      "a": "The Platform starts at 120 per seat per month on Start. Grow is 4,320 per year for 3 seats, and Scale is 12,000 per year for 10 seats. You can view every price in EUR, USD, or GBP. The Sales Intelligence data add-on is priced separately."
    },
    {
      "q": "What is the difference between Start, Grow, and Scale?",
      "a": "Start is one seat, billed monthly, with the essentials. Grow starts at 3 seats and adds CRM task sync and full onboarding. Scale starts at 10 seats and adds custom nodes and custom CRM sync."
    },
    {
      "q": "Can I pay monthly or annually?",
      "a": "Start is billed monthly per seat. Grow and Scale are billed annually; Grow starts at 3 seats and Scale at 10."
    },
    {
      "q": "Which currencies can I pay in?",
      "a": "EUR, USD, and GBP. Use the toggle at the top of the pricing table to switch."
    },
    {
      "q": "What is the Data add-on and how do credits work?",
      "a": "It is our Sales Intelligence product. Pay as you go is 1.25 per credit, or take a subscription at 5,000 per year that includes 5,000 credits and enriches 10,000 to 50,000 contacts. Pay as you go costs about 25% more per credit than the subscription."
    },
    {
      "q": "How do I get started?",
      "a": "Book a demo and we will set you up on your own pipeline and help you pick the plan that fits."
    }
  ],
  "closingPre": "Not sure which plan ",
  "closingAccent": "fits",
  "closingPost": "?",
  "closingSub": "Book a short demo and we will map hubsell to your pipeline and your team size.",
  "closingCta": "Book a demo",
  "groups": {
    "workflow": "Workflow nodes",
    "crmsync": "CRM sync",
    "datasrc": "Data sourcing and enrichment",
    "support": "Support and onboarding",
    "comingsoon": "Coming soon"
  },
  "creditsNote": "Data sourcing and enrichment run on Sales Intelligence credits: \u20ac1.25 per credit pay as you go, or \u20ac5,000 per year for 5,000 credits.",
  "soonLabel": "Coming soon",
  "crumbHome": "Home",
  "crumbSelf": "Pricing"
};

const DE: PricingPageData = {
  "title": "Preise | hubsell",
  "metaDescription": "hubsell Preise: die Platform-Pl\u00e4ne Start, Grow und Scale sowie das Sales-Intelligence-Datenpaket. Vergleichen Sie jedes Feature, in EUR, USD oder GBP.",
  "eyebrow": "Preise",
  "h1Pre": "Klare Preise f\u00fcr ",
  "h1Accent": "Ihre gesamte GTM-Motion",
  "h1Post": "",
  "sub": "Ein Platform-Plan f\u00fcr Outreach und CRM-Sync, dazu ein Datenpaket f\u00fcr live gesourcte Kontakte. W\u00e4hlen Sie den passenden Plan, in EUR, USD oder GBP.",
  "demoCta": "Demo buchen",
  "compareEyebrow": "Vergleich",
  "compareTitle": "Jedes Feature, Plan f\u00fcr Plan",
  "platformName": "Platform",
  "platformSub": "GTM-Orchestrierung",
  "dataName": "Datenpaket",
  "dataSub": "Sales Intelligence",
  "colStart": "Start",
  "colGrow": "Grow",
  "colScale": "Scale",
  "colPayg": "Pay as you go",
  "colSub": "Subscription",
  "cat": {
    "plan": "Tarif",
    "nodes": "Workflow-Nodes",
    "outreach": "Outreach",
    "crm": "CRM-Sync",
    "support": "Support und Onboarding",
    "sourcing": "Data Sourcing",
    "enrichment": "Enrichment und Targeting"
  },
  "planRow": "Startpreis",
  "seatsRow": "Seats",
  "billingRow": "Abrechnung",
  "priceNote": "Preise in EUR. Nutzen Sie den Umschalter oben f\u00fcr USD und GBP.",
  "monthly": "Monatlich",
  "annual": "J\u00e4hrlich",
  "perCredit": "/Credit",
  "perYear": "/Jahr",
  "seatsStart": "1 Seat",
  "seatsGrow": "Ab 3 Seats",
  "seatsScale": "Ab 10 Seats",
  "yes": "Enthalten",
  "no": "Nicht enthalten",
  "faqEyebrow": "FAQ",
  "faqTitle": "Fragen zu den Preisen",
  "faq": [
    {
      "q": "Was kostet hubsell?",
      "a": "Die Platform startet bei 120 pro Seat und Monat mit Start. Grow kostet 4.320 pro Jahr f\u00fcr 3 Seats, und Scale 12.000 pro Jahr f\u00fcr 10 Seats. Alle Preise lassen sich in EUR, USD oder GBP anzeigen. Das Sales-Intelligence-Datenpaket wird separat berechnet."
    },
    {
      "q": "Was ist der Unterschied zwischen Start, Grow und Scale?",
      "a": "Start ist ein Seat, monatlich abgerechnet, mit den Grundfunktionen. Grow beginnt bei 3 Seats und erg\u00e4nzt CRM-Task-Sync und ein vollst\u00e4ndiges Onboarding. Scale beginnt bei 10 Seats und erg\u00e4nzt Custom Nodes und Custom CRM-Sync."
    },
    {
      "q": "Kann ich monatlich oder j\u00e4hrlich zahlen?",
      "a": "Start wird monatlich pro Seat abgerechnet. Grow und Scale werden j\u00e4hrlich abgerechnet und beginnen bei 3 Seats."
    },
    {
      "q": "In welchen W\u00e4hrungen kann ich zahlen?",
      "a": "EUR, USD und GBP. Nutzen Sie den Umschalter oben in der Preistabelle."
    },
    {
      "q": "Was ist das Datenpaket und wie funktionieren Credits?",
      "a": "Es ist unser Sales-Intelligence-Produkt. Pay as you go kostet 1,25 pro Credit, oder Sie nehmen eine Subscription f\u00fcr 5.000 pro Jahr mit 5.000 Credits, die 10.000 bis 50.000 Kontakte anreichern. Pay as you go kostet pro Credit rund 25% mehr als die Subscription."
    },
    {
      "q": "Wie fange ich an?",
      "a": "Buchen Sie eine Demo, und wir richten hubsell auf Ihrer eigenen Pipeline ein und helfen Ihnen, den passenden Plan zu w\u00e4hlen."
    }
  ],
  "closingPre": "Nicht sicher, welcher Plan ",
  "closingAccent": "passt",
  "closingPost": "?",
  "closingSub": "Buchen Sie eine kurze Demo, und wir bilden hubsell auf Ihre Pipeline und Ihre Teamgr\u00f6\u00dfe ab.",
  "closingCta": "Demo buchen",
  "groups": {
    "workflow": "Workflow-Nodes",
    "crmsync": "CRM-Sync",
    "datasrc": "Data Sourcing und Enrichment",
    "support": "Support und Onboarding",
    "comingsoon": "In K\u00fcrze"
  },
  "creditsNote": "Data Sourcing und Enrichment laufen \u00fcber Sales-Intelligence-Credits: \u20ac1,25 pro Credit im Pay as you go oder \u20ac5.000 pro Jahr f\u00fcr 5.000 Credits.",
  "soonLabel": "Bald verf\u00fcgbar",
  "crumbHome": "Startseite",
  "crumbSelf": "Preise"
};

const NL: PricingPageData = {
  "title": "Prijzen | hubsell",
  "metaDescription": "hubsell prijzen: de Platform-abonnementen Start, Grow en Scale, plus het Sales Intelligence-datapakket. Vergelijk elk onderdeel, in EUR, USD of GBP.",
  "eyebrow": "Prijzen",
  "h1Pre": "Heldere prijzen voor ",
  "h1Accent": "uw hele GTM-motion",
  "h1Post": "",
  "sub": "E\u00e9n Platform-abonnement voor outreach en CRM-sync, plus een datapakket voor live gesourcete contacten. Kies het abonnement dat past, in EUR, USD of GBP.",
  "demoCta": "Demo plannen",
  "compareEyebrow": "Vergelijken",
  "compareTitle": "Elk onderdeel, abonnement voor abonnement",
  "platformName": "Platform",
  "platformSub": "GTM-orchestratie",
  "dataName": "Datapakket",
  "dataSub": "Sales Intelligence",
  "colStart": "Start",
  "colGrow": "Grow",
  "colScale": "Scale",
  "colPayg": "Pay as you go",
  "colSub": "Subscription",
  "cat": {
    "plan": "Abonnement",
    "nodes": "Workflow-nodes",
    "outreach": "Outreach",
    "crm": "CRM-sync",
    "support": "Support en onboarding",
    "sourcing": "Data sourcing",
    "enrichment": "Enrichment en targeting"
  },
  "planRow": "Startprijs",
  "seatsRow": "Gebruikers",
  "billingRow": "Facturering",
  "priceNote": "Prijzen in EUR. Gebruik de schakelaar hierboven voor USD en GBP.",
  "monthly": "Maandelijks",
  "annual": "Jaarlijks",
  "perCredit": "/credit",
  "perYear": "/jaar",
  "seatsStart": "1 gebruiker",
  "seatsGrow": "Vanaf 3 gebruikers",
  "seatsScale": "Vanaf 10 gebruikers",
  "yes": "Inbegrepen",
  "no": "Niet inbegrepen",
  "faqEyebrow": "FAQ",
  "faqTitle": "Vragen over prijzen",
  "faq": [
    {
      "q": "Wat kost hubsell?",
      "a": "Het Platform begint bij 120 per gebruiker per maand met Start. Grow kost 4.320 per jaar voor 3 gebruikers, en Scale 12.000 per jaar voor 10 gebruikers. U kunt elke prijs in EUR, USD of GBP bekijken. Het Sales Intelligence-datapakket wordt apart gefactureerd."
    },
    {
      "q": "Wat is het verschil tussen Start, Grow en Scale?",
      "a": "Start is \u00e9\u00e9n gebruiker, maandelijks gefactureerd, met de basis. Grow begint bij 3 gebruikers en voegt CRM-tasksync en volledige onboarding toe. Scale begint bij 10 gebruikers en voegt custom nodes en custom CRM-sync toe."
    },
    {
      "q": "Kan ik maandelijks of jaarlijks betalen?",
      "a": "Start wordt maandelijks per gebruiker gefactureerd. Grow en Scale worden jaarlijks gefactureerd en beginnen bij 3 gebruikers."
    },
    {
      "q": "In welke valuta kan ik betalen?",
      "a": "EUR, USD en GBP. Gebruik de schakelaar boven in de prijstabel."
    },
    {
      "q": "Wat is het datapakket en hoe werken credits?",
      "a": "Het is ons Sales Intelligence-product. Pay as you go kost 1,25 per credit, of u neemt een subscription voor 5.000 per jaar met 5.000 credits, die 10.000 tot 50.000 contacten verrijken. Pay as you go kost per credit ongeveer 25% meer dan de subscription."
    },
    {
      "q": "Hoe ga ik van start?",
      "a": "Plan een demo en we zetten hubsell op uw eigen pipeline en helpen u het passende abonnement te kiezen."
    }
  ],
  "closingPre": "Niet zeker welk abonnement ",
  "closingAccent": "past",
  "closingPost": "?",
  "closingSub": "Plan een korte demo en we leggen hubsell over uw pipeline en teamgrootte.",
  "closingCta": "Demo plannen",
  "groups": {
    "workflow": "Workflow-nodes",
    "crmsync": "CRM-sync",
    "datasrc": "Data sourcing en enrichment",
    "support": "Support en onboarding",
    "comingsoon": "Binnenkort"
  },
  "creditsNote": "Data sourcing en enrichment draaien op Sales Intelligence-credits: \u20ac1,25 per credit met pay as you go, of \u20ac5.000 per jaar voor 5.000 credits.",
  "soonLabel": "Binnenkort",
  "crumbHome": "Home",
  "crumbSelf": "Prijzen"
};

export function getPricingPage(L: Locale): PricingPageData {
  if (L === 'de') return DE;
  if (L === 'nl') return NL;
  return EN;
}
