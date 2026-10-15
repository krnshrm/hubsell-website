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
  noteTitle: string; noteBody: string; trademark: string;
  closingPre: string; closingAccent: string; closingPost: string; closingSub: string; closingCta: string;
  crumbHome: string; crumbSelf: string;
}

const EN: IntegrationsPageData = {
  "title": "Integrations: connect hubsell to your CRM and channels | hubsell",
  "metaDescription": "hubsell connects to Salesforce, HubSpot, and Pipedrive with native sync, and runs LinkedIn alongside email in one flow. More integrations are on the way.",
  "eyebrow": "Integrations",
  "h1Pre": "CRM integrations for ",
  "h1Accent": "Salesforce, HubSpot, and Pipedrive",
  "h1Post": "",
  "sub": "hubsell works with your CRM and your channels, so data and activity stay in one place. Real-time CRM sync keeps your records current, and LinkedIn runs alongside email in a single flow.",
  "demoCta": "Book a demo",
  "listEyebrow": "Available now",
  "listTitle": "What hubsell connects to today",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Native sync with Salesforce. Every send, open, reply, and connection lands on the right record automatically, in real time.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Native sync with HubSpot. Activity and outcomes land on the right contacts and companies without manual entry.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Native sync with Pipedrive. Your pipeline stays current as outreach happens, with no CSV in between.",
      "status": "Live"
    },
    {
      "name": "Google Workspace",
      "category": "Outreach",
      "blurb": "Emails go out from your own Google mailboxes through the Gmail API. No outside sending server, so every message is real mail from a real person.",
      "status": "Live"
    },
    {
      "name": "Microsoft 365",
      "category": "Outreach",
      "blurb": "Emails go out from your own Outlook mailboxes through the Microsoft API, with no outside sending server in the path.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "Profile visits, connection requests, messages and InMail run as steps in the same flow as your emails, spread across your team’s profiles.",
      "status": "Live"
    },
    {
      "name": "Sales Navigator",
      "category": "Outreach",
      "blurb": "Start from a Sales Navigator search: hubsell collects the people in it, checks them against your ICP and enriches the ones that fit.",
      "status": "Live"
    }
  ],
  "noteTitle": "More on the way",
  "noteBody": "This is the set we support today. We are adding more integrations, so if there is a tool you need, tell us on a short call and we will let you know where it stands.",
  "trademark": "LinkedIn and Sales Navigator are trademarks of LinkedIn Corporation. Google Workspace is a trademark of Google LLC, Microsoft 365 a trademark of Microsoft Corporation. hubsell is not affiliated with or endorsed by these companies.",
  "closingPre": "Do not see ",
  "closingAccent": "your tool",
  "closingPost": "?",
  "closingSub": "Tell us what you run on a short call and we will show you how hubsell fits your stack.",
  "closingCta": "Book a demo",
  "crumbHome": "Home",
  "crumbSelf": "Integrations"
};

const DE: IntegrationsPageData = {
  "title": "Integrationen: hubsell mit dem CRM und den Kan\u00e4len verbinden | hubsell",
  "metaDescription": "hubsell verbindet sich mit Salesforce, HubSpot und Pipedrive per nativem Sync und f\u00fchrt LinkedIn neben E-Mail in einem Flow. Weitere Integrationen folgen.",
  "eyebrow": "Integrationen",
  "h1Pre": "CRM-Integrationen für ",
  "h1Accent": "Salesforce, HubSpot und Pipedrive",
  "h1Post": "",
  "sub": "hubsell arbeitet mit dem CRM und den Kan\u00e4len, sodass Daten und Aktivit\u00e4t an einem Ort bleiben. CRM-Sync in Echtzeit h\u00e4lt die Datens\u00e4tze aktuell, und LinkedIn l\u00e4uft neben E-Mail in einem einzigen Flow.",
  "demoCta": "Demo buchen",
  "listEyebrow": "Jetzt verf\u00fcgbar",
  "listTitle": "Womit sich hubsell heute verbindet",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Nativer Sync mit Salesforce. Jedes Senden, Öffnen, Antworten und jede Verbindung landet automatisch am richtigen Datensatz, in Echtzeit.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Nativer Sync mit HubSpot. Aktivität und Ergebnisse fließen ohne manuelle Eingabe zu den richtigen Kontakten und Unternehmen.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Nativer Sync mit Pipedrive. Die Pipeline bleibt aktuell, während Outreach passiert, ohne CSV dazwischen.",
      "status": "Live"
    },
    {
      "name": "Google Workspace",
      "category": "Outreach",
      "blurb": "E-Mails gehen aus den eigenen Google-Postfächern über die Gmail-API raus. Kein externer Versandserver, jede Nachricht ist echte Mail von einem echten Menschen.",
      "status": "Live"
    },
    {
      "name": "Microsoft 365",
      "category": "Outreach",
      "blurb": "E-Mails gehen aus den eigenen Outlook-Postfächern über die Microsoft-API raus, ohne externen Versandserver dazwischen.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "Profilbesuche, Vernetzungsanfragen, Nachrichten und InMail laufen als Schritte im selben Flow wie die E-Mails, verteilt auf die Profile des Teams.",
      "status": "Live"
    },
    {
      "name": "Sales Navigator",
      "category": "Outreach",
      "blurb": "Start mit einer Sales-Navigator-Suche: hubsell sammelt die Personen darin, gleicht sie mit dem ICP ab und reichert die passenden an.",
      "status": "Live"
    }
  ],
  "noteTitle": "Weitere folgen",
  "noteBody": "Das ist der Satz, den wir heute unterst\u00fctzen. Wir f\u00fcgen weitere Integrationen hinzu. Wer ein bestimmtes Tool braucht, erf\u00e4hrt in einem kurzen Gespr\u00e4ch, wie der Stand ist.",
  "trademark": "LinkedIn und Sales Navigator sind Marken der LinkedIn Corporation. Google Workspace ist eine Marke der Google LLC, Microsoft 365 eine Marke der Microsoft Corporation. hubsell ist mit diesen Unternehmen nicht verbunden und wird nicht von ihnen empfohlen.",
  "closingPre": "Das eigene Tool ",
  "closingAccent": "nicht dabei",
  "closingPost": "?",
  "closingSub": "In einem kurzen Gespr\u00e4ch kl\u00e4ren wir, welche Tools im Einsatz sind, und zeigen, wie hubsell in den Stack passt.",
  "closingCta": "Demo buchen",
  "crumbHome": "Startseite",
  "crumbSelf": "Integrationen"
};

const NL: IntegrationsPageData = {
  "title": "Integraties: hubsell verbinden met uw CRM en kanalen | hubsell",
  "metaDescription": "hubsell verbindt met Salesforce, HubSpot en Pipedrive met native sync, en draait LinkedIn naast e-mail in \u00e9\u00e9n flow. Meer integraties volgen.",
  "eyebrow": "Integraties",
  "h1Pre": "CRM-integraties voor ",
  "h1Accent": "Salesforce, HubSpot en Pipedrive",
  "h1Post": "",
  "sub": "hubsell werkt met uw CRM en uw kanalen, zodat data en activiteit op \u00e9\u00e9n plek blijven. Realtime CRM-sync houdt uw records actueel, en LinkedIn draait naast e-mail in \u00e9\u00e9n flow.",
  "demoCta": "Demo plannen",
  "listEyebrow": "Nu beschikbaar",
  "listTitle": "Waarmee hubsell vandaag verbindt",
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Native sync met Salesforce. Elke verzending, opening, reactie en connectie landt automatisch op de juiste record, in realtime.",
      "status": "Live"
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Native sync met HubSpot. Activiteit en uitkomsten stromen zonder handmatige invoer naar de juiste contacten en bedrijven.",
      "status": "Live"
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Native sync met Pipedrive. Uw pipeline blijft actueel terwijl outreach gebeurt, zonder CSV ertussen.",
      "status": "Live"
    },
    {
      "name": "Google Workspace",
      "category": "Outreach",
      "blurb": "E-mails gaan uit vanuit uw eigen Google-mailboxen via de Gmail-API. Geen externe verzendserver, dus elk bericht is echte mail van een echt persoon.",
      "status": "Live"
    },
    {
      "name": "Microsoft 365",
      "category": "Outreach",
      "blurb": "E-mails gaan uit vanuit uw eigen Outlook-mailboxen via de Microsoft-API, zonder externe verzendserver ertussen.",
      "status": "Live"
    },
    {
      "name": "LinkedIn",
      "category": "Outreach",
      "blurb": "Profielbezoeken, connectieverzoeken, berichten en InMail lopen als stappen in dezelfde flow als uw e-mails, verdeeld over de profielen van uw team.",
      "status": "Live"
    },
    {
      "name": "Sales Navigator",
      "category": "Outreach",
      "blurb": "Start vanuit een Sales Navigator-zoekopdracht: hubsell verzamelt de mensen erin, toetst ze aan uw ICP en verrijkt wie past.",
      "status": "Live"
    }
  ],
  "noteTitle": "Meer volgt",
  "noteBody": "Dit is de set die we vandaag ondersteunen. We voegen meer integraties toe. Als er een tool is dat u nodig hebt, laat het ons weten in een kort gesprek en we vertellen u hoe het ervoor staat.",
  "trademark": "LinkedIn en Sales Navigator zijn handelsmerken van LinkedIn Corporation. Google Workspace is een handelsmerk van Google LLC, Microsoft 365 een handelsmerk van Microsoft Corporation. hubsell is niet gelieerd aan en wordt niet onderschreven door deze bedrijven.",
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
