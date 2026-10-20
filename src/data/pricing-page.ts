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
  scalePrice: string;
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
  "metaDescription": "hubsell pricing: the Start, Grow, and Scale platform plans, plus the Sales Intelligence data add-on. Compare every feature, with prices in EUR.",
  "eyebrow": "Pricing",
  "h1Pre": "Simple pricing for ",
  "h1Accent": "your whole GTM motion",
  "h1Post": "",
  "sub": "One platform plan for outreach and CRM sync, and a data add-on for live-sourced contacts. Pick the plan that fits your team.",
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
  "scalePrice": "Custom",
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
  "priceNote": "Prices shown in EUR.",
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
      "a": "The Platform starts at 120 per seat per month on Start. Grow is 4,320 per year for 3 seats. Scale starts at 10 seats and is priced in your offer. All prices are in EUR. The Sales Intelligence data add-on is priced separately."
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
      "a": "Prices are in EUR. For larger annual contracts we can quote in another currency; ask during your demo."
    },
    {
      "q": "What is the Data add-on and how do credits work?",
      "a": "It is our Sales Intelligence product. Pay as you go is 0.125 per credit, or take a subscription at 5,000 per year that includes 50,000 credits. Each action uses a set number of credits when it succeeds, for example 1 to source a contact and 5 for a validated work email. Pay as you go costs about 25% more per credit than the subscription."
    },
    {
      "q": "How many credits does each action use?",
      "a": "Sourcing a contact uses 1 credit and finding a missing LinkedIn URL uses 2. Generating and validating a work email uses 5, catch-all domains included, and a phone number (mobile or direct dial) also uses 5. Verifying an email you import uses 0.5 and shows which addresses are valid, and hubsell can then update and correct the invalid ones. A step that fails costs nothing; steps already completed are charged."
    },
    {
      "q": "Why did the number of credits change?",
      "a": "In October 2026 hubsell moved credits to a finer scale: what used to cost 1 credit now costs 10, and what cost 0.1 now costs 1. Prices did not change. The subscription now includes 50,000 credits instead of 5,000, and pay as you go is €0.125 per credit instead of €1.25."
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
  "creditsNote": "Data sourcing and enrichment run on Sales Intelligence credits: \u20ac0.125 per credit pay as you go, or \u20ac5,000 per year for 50,000 credits.",
  "soonLabel": "Coming soon",
  "crumbHome": "Home",
  "crumbSelf": "Pricing"
};

const DE: PricingPageData = {
  "title": "Preise | hubsell",
  "metaDescription": "hubsell Preise: die Platform-Pl\u00e4ne Start, Grow und Scale sowie das Sales-Intelligence-Datenpaket. Jedes Feature im Vergleich, mit Preisen in EUR.",
  "eyebrow": "Preise",
  "h1Pre": "Klare Preise f\u00fcr ",
  "h1Accent": "die gesamte GTM-Motion",
  "h1Post": "",
  "sub": "Ein Platform-Plan f\u00fcr Outreach und CRM-Sync, dazu ein Datenpaket f\u00fcr live gesourcte Kontakte. F\u00fcr jedes Team gibt es den passenden Plan.",
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
  "scalePrice": "Individuell",
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
  "priceNote": "Preise in EUR.",
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
      "a": "Die Platform startet bei 120 pro Seat und Monat mit Start. Grow kostet 4.320 pro Jahr f\u00fcr 3 Seats. Scale beginnt bei 10 Seats, den Preis gibt es mit dem Angebot. Alle Preise sind in EUR. Das Sales-Intelligence-Datenpaket wird separat berechnet."
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
      "a": "Die Preise sind in EUR. F\u00fcr gr\u00f6\u00dfere Jahresvertr\u00e4ge k\u00f6nnen wir auch in einer anderen W\u00e4hrung anbieten; das l\u00e4sst sich in der Demo ansprechen."
    },
    {
      "q": "Was ist das Datenpaket und wie funktionieren Credits?",
      "a": "Es ist unser Sales-Intelligence-Produkt. Pay as you go kostet 0,125 pro Credit, oder es gibt eine Subscription für 5.000 pro Jahr mit 50.000 Credits. Jede Aktion verbraucht bei Erfolg eine feste Zahl Credits, etwa 1 für einen recherchierten Kontakt und 5 für eine validierte geschäftliche E-Mail. Pay as you go kostet pro Credit rund 25% mehr als die Subscription."
    },
    {
      "q": "Wie viele Credits verbraucht jede Aktion?",
      "a": "Das Recherchieren eines Kontakts verbraucht 1 Credit, das Finden einer fehlenden LinkedIn-URL 2. Das Generieren und Validieren einer geschäftlichen E-Mail verbraucht 5, Catch-all-Domains eingeschlossen, eine Telefonnummer (Mobil oder Durchwahl) ebenfalls 5. Die Prüfung importierter E-Mails verbraucht 0,5 und zeigt, welche Adressen gültig sind; ungültige Adressen kann hubsell anschließend aktualisieren und korrigieren. Ein fehlgeschlagener Schritt kostet nichts, bereits abgeschlossene Schritte werden berechnet."
    },
    {
      "q": "Warum hat sich die Zahl der Credits geändert?",
      "a": "Im Oktober 2026 hat hubsell die Credit-Skala verfeinert: Was früher 1 Credit kostete, kostet jetzt 10, und was 0,1 kostete, kostet jetzt 1. Die Preise bleiben gleich. Die Subscription enthält jetzt 50.000 statt 5.000 Credits, und Pay as you go kostet €0,125 statt €1,25 pro Credit."
    },
    {
      "q": "Wie fange ich an?",
      "a": "In einer Demo richten wir hubsell auf der eigenen Pipeline ein und helfen bei der Wahl des passenden Plans."
    }
  ],
  "closingPre": "Nicht sicher, welcher Plan ",
  "closingAccent": "passt",
  "closingPost": "?",
  "closingSub": "In einer kurzen Demo bilden wir hubsell auf die eigene Pipeline und die Teamgr\u00f6\u00dfe ab.",
  "closingCta": "Demo buchen",
  "groups": {
    "workflow": "Workflow-Nodes",
    "crmsync": "CRM-Sync",
    "datasrc": "Data Sourcing und Enrichment",
    "support": "Support und Onboarding",
    "comingsoon": "In K\u00fcrze"
  },
  "creditsNote": "Data Sourcing und Enrichment laufen \u00fcber Sales-Intelligence-Credits: \u20ac0,125 pro Credit im Pay as you go oder \u20ac5.000 pro Jahr f\u00fcr 50.000 Credits.",
  "soonLabel": "Bald verf\u00fcgbar",
  "crumbHome": "Startseite",
  "crumbSelf": "Preise"
};

const NL: PricingPageData = {
  "title": "Prijzen | hubsell",
  "metaDescription": "hubsell prijzen: de Platform-abonnementen Start, Grow en Scale, plus het Sales Intelligence-datapakket. Vergelijk elk onderdeel, met prijzen in EUR.",
  "eyebrow": "Prijzen",
  "h1Pre": "Heldere prijzen voor ",
  "h1Accent": "uw hele GTM-motion",
  "h1Post": "",
  "sub": "E\u00e9n Platform-abonnement voor outreach en CRM-sync, plus een datapakket voor live gesourcete contacten. Kies het abonnement dat bij uw team past.",
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
  "scalePrice": "Op maat",
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
  "priceNote": "Prijzen in EUR.",
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
      "a": "Het Platform begint bij 120 per gebruiker per maand met Start. Grow kost 4.320 per jaar voor 3 gebruikers. Scale begint bij 10 gebruikers en de prijs staat in uw offerte. Alle prijzen zijn in EUR. Het Sales Intelligence-datapakket wordt apart gefactureerd."
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
      "a": "De prijzen zijn in EUR. Voor grotere jaarcontracten kunnen we een offerte in een andere valuta maken; vraag ernaar tijdens uw demo."
    },
    {
      "q": "Wat is het datapakket en hoe werken credits?",
      "a": "Het is ons Sales Intelligence-product. Pay as you go kost 0,125 per credit, of u neemt een subscription voor 5.000 per jaar met 50.000 credits. Elke actie verbruikt bij succes een vast aantal credits, bijvoorbeeld 1 voor een verzameld contact en 5 voor een gevalideerd zakelijk e-mailadres. Pay as you go kost per credit ongeveer 25% meer dan de subscription."
    },
    {
      "q": "Hoeveel credits verbruikt elke actie?",
      "a": "Een contact verzamelen verbruikt 1 credit, een ontbrekende LinkedIn-URL vinden 2. Een zakelijk e-mailadres genereren en valideren verbruikt 5, catch-all-domeinen inbegrepen, en een telefoonnummer (mobiel of direct) ook 5. Geïmporteerde e-mailadressen controleren verbruikt 0,5 en laat zien welke adressen geldig zijn; ongeldige adressen kan hubsell daarna bijwerken en corrigeren. Een mislukte stap kost niets, stappen die al zijn afgerond worden gerekend."
    },
    {
      "q": "Waarom is het aantal credits veranderd?",
      "a": "In oktober 2026 heeft hubsell de creditschaal verfijnd: wat vroeger 1 credit kostte, kost nu 10, en wat 0,1 kostte, kost nu 1. De prijzen blijven gelijk. De subscription bevat nu 50.000 in plaats van 5.000 credits, en pay as you go kost €0,125 in plaats van €1,25 per credit."
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
  "creditsNote": "Data sourcing en enrichment draaien op Sales Intelligence-credits: \u20ac0,125 per credit met pay as you go, of \u20ac5.000 per jaar voor 50.000 credits.",
  "soonLabel": "Binnenkort",
  "crumbHome": "Home",
  "crumbSelf": "Prijzen"
};

export function getPricingPage(L: Locale): PricingPageData {
  if (L === 'de') return DE;
  if (L === 'nl') return NL;
  return EN;
}
