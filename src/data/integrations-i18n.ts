// Copy for the /integrations directory (stub set: the integrations we can
// confirm today). English base plus German and Dutch. getIntegrationsPage(L)
// picks per locale, mirroring the platform-i18n pattern. Expand the `items`
// array as more integrations ship.
import type { Locale } from '../i18n/ui';

export interface IntegrationItem { name: string; category: string; blurb: string; status: string }
export interface IntegrationsPageData {
  title: string; metaDescription: string;
  eyebrow: string; h1Pre: string; h1Accent: string; h1Post: string; sub: string; demoCta: string;
  listEyebrow: string; listTitle: string; items: IntegrationItem[];
  noteTitle: string; noteBody: string;
  closingPre: string; closingAccent: string; closingPost: string; closingSub: string; closingCta: string;
  crumbHome: string; crumbSelf: string;
}

const EN: IntegrationsPageData = {
  "title": "Integrations: connect hubsell to your CRM and channels | hubsell",
  "metaDescription": "hubsell connects to Salesforce, HubSpot, and Pipedrive with two-way sync, and runs LinkedIn alongside email in one sequence. More integrations are on the way.",
  "eyebrow": "Integrations",
  "h1Pre": "Connect hubsell to ",
  "h1Accent": "the tools you already use",
  "h1Post": "",
  "sub": "hubsell works with your CRM and your channels, so data and activity stay in one place. Two-way CRM sync keeps your records current, and LinkedIn runs alongside email in a single sequence.",
  "demoCta": "Book a demo",
  "listEyebrow": "Available now",
  "listTitle": "What hubsell connects to today",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Two-way sync with Salesforce. Every send, open, reply, and connection lands on the right record automatically, in real time.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Two-way sync with HubSpot. Activity and outcomes flow to the right contacts and deals without manual entry.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Two-way sync with Pipedrive. Your pipeline stays current as outreach happens, with no CSV in between.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "Run LinkedIn steps inside one sequence. Profile visits, connection requests, and messages, coordinated with your email cadence.",
      "status": "Live"
    }
  ],
  "noteTitle": "More on the way",
  "noteBody": "This is the set we support today. We are adding more integrations, so if there is a tool you need, tell us on a short call and we will let you know where it stands.",
  "closingPre": "Do not see ",
  "closingAccent": "your tool",
  "closingPost": "?",
  "closingSub": "Tell us what you run on a short call and we will show you how hubsell fits your stack.",
  "closingCta": "Book a demo",
  "crumbHome": "Home",
  "crumbSelf": "Integrations"
};

const DE: IntegrationsPageData = {
  "title": "Integrationen: hubsell mit Ihrem CRM und Ihren Kan\u00e4len verbinden | hubsell",
  "metaDescription": "hubsell verbindet sich mit Salesforce, HubSpot und Pipedrive per Zwei-Wege-Sync und f\u00fchrt LinkedIn neben E-Mail in einer Sequenz. Weitere Integrationen folgen.",
  "eyebrow": "Integrationen",
  "h1Pre": "Verbinden Sie hubsell mit ",
  "h1Accent": "den Tools, die Sie schon nutzen",
  "h1Post": "",
  "sub": "hubsell arbeitet mit Ihrem CRM und Ihren Kan\u00e4len, sodass Daten und Aktivit\u00e4t an einem Ort bleiben. Zwei-Wege-CRM-Sync h\u00e4lt Ihre Datens\u00e4tze aktuell, und LinkedIn l\u00e4uft neben E-Mail in einer einzigen Sequenz.",
  "demoCta": "Demo buchen",
  "listEyebrow": "Jetzt verf\u00fcgbar",
  "listTitle": "Womit sich hubsell heute verbindet",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Zwei-Wege-Sync mit Salesforce. Jedes Senden, \u00d6ffnen, Antworten und jede Verbindung landet automatisch am richtigen Datensatz, in Echtzeit.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Zwei-Wege-Sync mit HubSpot. Aktivit\u00e4t und Ergebnisse flie\u00dfen ohne manuelle Eingabe zu den richtigen Kontakten und Deals.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Zwei-Wege-Sync mit Pipedrive. Ihre Pipeline bleibt aktuell, w\u00e4hrend Outreach passiert, ohne CSV dazwischen.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "F\u00fchren Sie LinkedIn-Schritte in einer Sequenz aus. Profilbesuche, Kontaktanfragen und Nachrichten, abgestimmt auf Ihre E-Mail-Kadenz.",
      "status": "Live"
    }
  ],
  "noteTitle": "Weitere folgen",
  "noteBody": "Das ist der Satz, den wir heute unterst\u00fctzen. Wir f\u00fcgen weitere Integrationen hinzu. Wenn Sie ein bestimmtes Tool brauchen, sagen Sie es uns in einem kurzen Gespr\u00e4ch, und wir sagen Ihnen, wie der Stand ist.",
  "closingPre": "Ihr Tool ",
  "closingAccent": "nicht dabei",
  "closingPost": "?",
  "closingSub": "Sagen Sie uns in einem kurzen Gespr\u00e4ch, was Sie nutzen, und wir zeigen Ihnen, wie hubsell in Ihren Stack passt.",
  "closingCta": "Demo buchen",
  "crumbHome": "Startseite",
  "crumbSelf": "Integrationen"
};

const NL: IntegrationsPageData = {
  "title": "Integraties: hubsell verbinden met uw CRM en kanalen | hubsell",
  "metaDescription": "hubsell verbindt met Salesforce, HubSpot en Pipedrive met tweerichtings-sync, en draait LinkedIn naast e-mail in \u00e9\u00e9n sequentie. Meer integraties volgen.",
  "eyebrow": "Integraties",
  "h1Pre": "Verbind hubsell met ",
  "h1Accent": "de tools die u al gebruikt",
  "h1Post": "",
  "sub": "hubsell werkt met uw CRM en uw kanalen, zodat data en activiteit op \u00e9\u00e9n plek blijven. Tweerichtings-CRM-sync houdt uw records actueel, en LinkedIn draait naast e-mail in \u00e9\u00e9n sequentie.",
  "demoCta": "Demo plannen",
  "listEyebrow": "Nu beschikbaar",
  "listTitle": "Waarmee hubsell vandaag verbindt",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Tweerichtings-sync met Salesforce. Elke verzending, opening, reactie en connectie landt automatisch op de juiste record, in realtime.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Tweerichtings-sync met HubSpot. Activiteit en uitkomsten stromen zonder handmatige invoer naar de juiste contacten en deals.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Tweerichtings-sync met Pipedrive. Uw pipeline blijft actueel terwijl outreach gebeurt, zonder CSV ertussen.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "Draai LinkedIn-stappen binnen \u00e9\u00e9n sequentie. Profielbezoeken, connectieverzoeken en berichten, afgestemd op uw e-mailcadans.",
      "status": "Live"
    }
  ],
  "noteTitle": "Meer volgt",
  "noteBody": "Dit is de set die we vandaag ondersteunen. We voegen meer integraties toe. Als er een tool is dat u nodig hebt, laat het ons weten in een kort gesprek en we vertellen u hoe het ervoor staat.",
  "closingPre": "Ziet u ",
  "closingAccent": "uw tool",
  "closingPost": " niet?",
  "closingSub": "Vertel ons in een kort gesprek wat u gebruikt en we laten zien hoe hubsell in uw stack past.",
  "closingCta": "Demo plannen",
  "crumbHome": "Home",
  "crumbSelf": "Integraties"
};

export function getIntegrationsPage(L: Locale): IntegrationsPageData {
  if (L === 'de') return DE;
  if (L === 'nl') return NL;
  return EN;
}
