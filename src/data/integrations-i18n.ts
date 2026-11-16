// Copy for the /integrations page: CRM, email and AI-assistant (MCP) integrations.
// English base plus German and Dutch; getIntegrationsPage(L) picks per locale.
// The AI assistants are apps that accept any remote MCP server. hubsell has tested
// Claude and Claude Code only, so the copy says they connect through the standard
// and never claims a partnership or a test.
import type { Locale } from '../i18n/ui';
import { integrationsFr } from './20261114-1030-integrations.fr';
import { integrationsEs } from './20261114-1030-integrations.es';
import { integrationsPt } from './20261114-1030-integrations.pt';

export interface IntegrationHead { eyebrow: string; pre: string; accent: string; post: string }
export type IntegrationCategory = 'CRM' | 'Email' | 'AI';
export interface IntegrationItem { name: string; category: IntegrationCategory; blurb: string }
export interface IntegrationsPageData {
  title: string; metaDescription: string;
  eyebrow: string; h1Pre: string; h1Accent: string; h1Post: string; sub: string;
  hubLabels: { mail: string; crm: string; ai: string };
  heads: { list: IntegrationHead; crm: IntegrationHead; mail: IntegrationHead; ai: IntegrationHead; steps: IntegrationHead; security: IntegrationHead; closing: IntegrationHead; faq: IntegrationHead };
  statusLabel: string; aiStatusLabel: string;
  groups: Record<IntegrationCategory, string>;
  items: IntegrationItem[];
  crmPoints: string[]; crmLink: { label: string; href: string };
  mailPoints: string[]; mailLink: { label: string; href: string };
  aiPoints: string[]; aiLink: { label: string; href: string };
  steps: { title: string; body: string }[]; stepsLink: { label: string; href: string };
  security: string[];
  noteTitle: string; noteBody: string; trademark: string;
  closingSub: string;
  faqs: { question: string; answer: string }[];
  crumbHome: string; crumbSelf: string;
}

const EN: IntegrationsPageData = {
  "title": "Integrations: CRM, email and AI assistants like ChatGPT | hubsell",
  "metaDescription": "Connect hubsell to HubSpot, Salesforce or Pipedrive, send from Google Workspace or Microsoft 365, and work with it from ChatGPT, Claude, Gemini or any AI assistant that supports MCP.",
  "eyebrow": "Integrations",
  "h1Pre": "Integrations for ",
  "h1Accent": "CRM, email and AI assistants",
  "h1Post": "",
  "sub": "hubsell connects to Salesforce, HubSpot and Pipedrive, sends from your own Google Workspace or Microsoft 365 mailboxes, and works with any AI assistant that supports MCP, such as ChatGPT, Claude or Gemini. Authorised in a few clicks, with no middleware to maintain.",
  "hubLabels": {
    "mail": "Sends from your mailbox",
    "crm": "Syncs to your CRM",
    "ai": "Ask from your AI assistant"
  },
  "heads": {
    "list": {
      "eyebrow": "Available integrations",
      "pre": "What hubsell ",
      "accent": "connects to today",
      "post": ""
    },
    "crm": {
      "eyebrow": "CRM integration",
      "pre": "How the ",
      "accent": "CRM integration works",
      "post": ""
    },
    "mail": {
      "eyebrow": "Email integration",
      "pre": "How sending from ",
      "accent": "your own mailbox works",
      "post": ""
    },
    "ai": {
      "eyebrow": "AI assistants (MCP)",
      "pre": "Work with hubsell from ",
      "accent": "the AI assistant you already use",
      "post": ""
    },
    "steps": {
      "eyebrow": "Set-up",
      "pre": "Connected in ",
      "accent": "three steps",
      "post": ""
    },
    "security": {
      "eyebrow": "Security and GDPR",
      "pre": "Your data stays ",
      "accent": "under your control",
      "post": ""
    },
    "closing": {
      "eyebrow": "Integrations",
      "pre": "Not sure it fits ",
      "accent": "your stack",
      "post": "?"
    },
    "faq": {
      "eyebrow": "Integrations FAQ",
      "pre": "Questions about ",
      "accent": "hubsell integrations",
      "post": ""
    }
  },
  "statusLabel": "Live",
  "aiStatusLabel": "Via MCP",
  "groups": {
    "CRM": "CRM",
    "Email": "Email",
    "AI": "AI assistants"
  },
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Contacts, companies and activity from hubsell land on the right Salesforce records, in real time."
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Contacts, companies and activity from hubsell land on the right HubSpot records, without manual entry."
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Contacts and activity from hubsell keep your Pipedrive pipeline current, with no CSV in between."
    },
    {
      "name": "Google Workspace",
      "category": "Email",
      "blurb": "Emails go out from your own Google mailboxes through the Gmail API, with no outside sending server."
    },
    {
      "name": "Microsoft 365",
      "category": "Email",
      "blurb": "Emails go out from your own Outlook mailboxes through the Microsoft API, with no outside sending server."
    },
    {
      "name": "ChatGPT",
      "category": "AI",
      "blurb": "Ask ChatGPT about your contacts, flows and statistics, or have it tag, enrich and start flows, with the permissions you allow."
    },
    {
      "name": "Claude",
      "category": "AI",
      "blurb": "Add hubsell as a custom connector in Claude and ask about contacts, flows and results, or tag and enrich contacts, with the permissions you allow."
    },
    {
      "name": "Gemini",
      "category": "AI",
      "blurb": "Add hubsell as a custom app in Gemini to look up contacts and flow results, tag or enrich contacts and start flows."
    },
    {
      "name": "Mistral Vibe",
      "category": "AI",
      "blurb": "Mistral's assistant, formerly Le Chat: add hubsell as a custom MCP connector to search contacts, read flow statistics, tag, enrich and start flows."
    },
    {
      "name": "Perplexity",
      "category": "AI",
      "blurb": "Add hubsell as a custom remote connector in Perplexity and ask about your contacts, flows and statistics, with the permissions you allow."
    },
    {
      "name": "Microsoft Copilot Studio",
      "category": "AI",
      "blurb": "Give your Copilot Studio agents access to hubsell, so they can look up contacts and flow results, tag, enrich and start flows, with the permissions each person allows."
    },
    {
      "name": "Cursor",
      "category": "AI",
      "blurb": "Add hubsell to Cursor as an MCP server to look up contacts and flow results, tag, enrich and start flows from the editor."
    },
    {
      "name": "Claude Code",
      "category": "AI",
      "blurb": "Add hubsell with one terminal command and work with your contacts, flows and statistics from Claude Code, with the permissions you allow."
    },
    {
      "name": "Codex",
      "category": "AI",
      "blurb": "Add hubsell with one Codex command to look up contacts and flow results, tag, enrich and start flows, with the permissions you allow."
    },
    {
      "name": "Visual Studio Code",
      "category": "AI",
      "blurb": "Add hubsell as an MCP server for GitHub Copilot in Visual Studio Code to look up contacts and flow results, tag, enrich and start flows."
    },
    {
      "name": "Windsurf",
      "category": "AI",
      "blurb": "Add hubsell as an MCP server in Windsurf to look up contacts and flow results, tag, enrich and start flows, with the permissions you allow."
    }
  ],
  "crmPoints": [
    "Push contacts to the CRM by hand, or set conditions that push them automatically, for example only the contacts who reply.",
    "Each contact and company is matched to the record that already exists and updated, so the sync does not create duplicates.",
    "Email activity, LinkedIn activity and call tasks are logged on the record as they happen, and you choose which hubsell field fills which CRM field.",
    "Contacts already in your CRM, such as customers or open deals, can be left out before outreach starts."
  ],
  "crmLink": {
    "label": "More on CRM sync",
    "href": "/platform/crm-sync"
  },
  "mailPoints": [
    "Emails are sent from your own Google Workspace or Microsoft 365 mailboxes through their APIs. There is no outside SMTP server and no tracking redirect in the path.",
    "Your mailbox has a daily sending cap, and emails go out within the sending windows you set, spaced out rather than in bursts.",
    "When a contact replies or an email bounces, the flow stops for that contact, so nobody gets a follow-up after answering."
  ],
  "mailLink": {
    "label": "More on email deliverability",
    "href": "/platform/deliverability"
  },
  "aiPoints": [
    "hubsell has an MCP server. MCP (Model Context Protocol) is the open standard AI apps use to work with other software, so any assistant that can add an MCP server by its address can connect, whichever company makes it.",
    "You sign in with your hubsell account and choose what the assistant may do: Read, Write, Spend credits or Send emails. It acts as you, so your role in hubsell still applies.",
    "Ask about your contacts, flows and statistics in plain language, or have it tag and enrich contacts and start flows. hubsell tells the assistant to ask you before it spends credits or sends anything.",
    "You use your own AI subscription. hubsell does not see your chats and charges no credits for the AI. Some apps offer custom MCP servers only on certain plans or in certain countries."
  ],
  "aiLink": {
    "label": "Guide: use hubsell with your AI assistant",
    "href": "/knowledge/use-hubsell-with-your-ai-assistant/"
  },
  "steps": [
    {
      "title": "Open Integrations",
      "body": "In hubsell, open the profile menu in the bottom left and choose Integrations."
    },
    {
      "title": "Choose and authorise",
      "body": "Pick your CRM or mailbox provider. hubsell sends you to its login screen, where you grant the permissions it asks for."
    },
    {
      "title": "Decide what syncs",
      "body": "Back in hubsell the connection shows as live. Nothing is pushed on its own: you choose what goes to the CRM and when."
    }
  ],
  "stepsLink": {
    "label": "Step-by-step guide: connect your CRM",
    "href": "/knowledge/connect-your-crm/"
  },
  "security": [
    "You connect each tool through its own login and permission screen, so hubsell only gets the access you grant, and you can remove it in the tool at any time.",
    "hubsell is based in Berlin and hosts data in Frankfurt. You stay the data controller and hubsell is your processor, under a data processing agreement."
  ],
  "noteTitle": "More on the way",
  "noteBody": "This is the set we support today. If there is a tool you need, tell us on a short call and we will let you know where it stands.",
  "trademark": "Salesforce, HubSpot, Pipedrive, ChatGPT, Codex, Claude, Claude Code, Mistral Vibe, Perplexity, Cursor and Windsurf are trademarks of their owners. Google Workspace and Gemini are trademarks of Google LLC, Microsoft 365, Microsoft Copilot Studio and Visual Studio Code trademarks of Microsoft Corporation. hubsell is not affiliated with or endorsed by these companies.",
  "closingSub": "Tell us what you run on a short call and we will show you how hubsell fits your stack.",
  "faqs": [
    {
      "question": "Which CRMs does hubsell integrate with?",
      "answer": "<p>Salesforce, HubSpot and Pipedrive. All three are native integrations, so there is no Zapier or other middleware in between.</p>"
    },
    {
      "question": "How long does it take to connect my CRM?",
      "answer": "<p>A few minutes. You open Integrations in hubsell, choose your CRM and grant the permissions it asks for. See the <a class=\"link\" href=\"/knowledge/connect-your-crm/\">step-by-step guide</a>.</p>"
    },
    {
      "question": "Does connecting my CRM send contacts across automatically?",
      "answer": "<p>No. Connecting the account does not push anything on its own. You push contacts by hand, or set conditions that push them automatically.</p>"
    },
    {
      "question": "Is the CRM integration two-way?",
      "answer": "<p>Today the sync runs from hubsell into your CRM, and hubsell checks the CRM for existing records and for contacts to leave out. Changes made in the CRM are not written back into hubsell yet. Two-way sync is planned.</p>"
    },
    {
      "question": "Will hubsell create duplicates in my CRM?",
      "answer": "<p>No. Before it writes, hubsell matches each contact and company to the record that already exists and updates it.</p>"
    },
    {
      "question": "Which email providers does hubsell work with?",
      "answer": "<p>Google Workspace and Microsoft 365. hubsell sends from your own mailboxes through the Gmail and Microsoft APIs, not from an outside sending server.</p>"
    },
    {
      "question": "Which mailbox does hubsell send from?",
      "answer": "<p>From the Google Workspace or Microsoft 365 mailbox you connect, within a daily cap. hubsell is built for low to mid volume and well-targeted outreach, not bulk sending. See <a class=\"link\" href=\"/platform/deliverability/\">deliverability</a>.</p>"
    },
    {
      "question": "Does hubsell integrate with LinkedIn?",
      "answer": "<p>LinkedIn steps (profile visits, connection requests, messages and InMail) run inside hubsell flows, next to email and call tasks. See <a class=\"link\" href=\"/platform/multichannel-outreach/\">multichannel outreach</a>.</p>"
    },
    {
      "question": "Which AI assistants work with hubsell?",
      "answer": "<p>Any app that can add an MCP server by its address and sign in to it. That includes ChatGPT, Claude and Claude Code, Gemini, Mistral Vibe (formerly Le Chat), Perplexity, Microsoft Copilot Studio, Cursor, Visual Studio Code with GitHub Copilot, Codex and Windsurf. Some apps offer this only on certain plans or in certain countries. The steps for each app are in the <a class=\"link\" href=\"/knowledge/use-hubsell-with-your-ai-assistant/\">guide</a>.</p>"
    },
    {
      "question": "Does hubsell see my chats with the assistant?",
      "answer": "<p>No. Your assistant only sends hubsell the requests it needs answered, such as a contact search, and gets the results back. The conversation stays between you and the app you use.</p>"
    },
    {
      "question": "Does using an AI assistant cost hubsell credits?",
      "answer": "<p>No. You use your own AI subscription, and hubsell charges no credits for the AI. Only enrichment uses credits, exactly as in the app, and only if you allow Spend credits.</p>"
    },
    {
      "question": "Is my data safe when I connect a tool?",
      "answer": "<p>You connect each tool through its own login and permission screen and can remove the access at any time. hubsell hosts data in Frankfurt and works as your processor under a data processing agreement.</p>"
    },
    {
      "question": "What if the tool I use is not listed?",
      "answer": "<p>Tell us on a short call. We are adding integrations and will let you know where your tool stands.</p>"
    }
  ],
  "crumbHome": "Home",
  "crumbSelf": "Integrations"
};

const DE: IntegrationsPageData = {
  "title": "Integrationen: CRM, E-Mail und KI-Assistenten wie ChatGPT | hubsell",
  "metaDescription": "Verbinden Sie hubsell mit HubSpot, Salesforce oder Pipedrive, senden Sie aus Google Workspace oder Microsoft 365 und arbeiten Sie mit hubsell aus ChatGPT, Claude, Gemini oder jedem KI-Assistenten, der MCP unterstützt.",
  "eyebrow": "Integrationen",
  "h1Pre": "Integrationen für ",
  "h1Accent": "CRM, E-Mail und KI-Assistenten",
  "h1Post": "",
  "sub": "hubsell verbindet sich mit Salesforce, HubSpot und Pipedrive, sendet aus Ihren eigenen Postfächern bei Google Workspace oder Microsoft 365 und arbeitet mit jedem KI-Assistenten, der MCP unterstützt, etwa ChatGPT, Claude oder Gemini. Mit wenigen Klicks freigegeben, ohne Middleware, die gepflegt werden muss.",
  "hubLabels": {
    "mail": "Sendet aus Ihrem Postfach",
    "crm": "Synchronisiert in Ihr CRM",
    "ai": "Fragen über Ihren KI-Assistenten"
  },
  "heads": {
    "list": {
      "eyebrow": "Verfügbare Integrationen",
      "pre": "Womit sich hubsell ",
      "accent": "heute verbindet",
      "post": ""
    },
    "crm": {
      "eyebrow": "CRM-Integration",
      "pre": "So funktioniert ",
      "accent": "der CRM-Sync",
      "post": ""
    },
    "mail": {
      "eyebrow": "E-Mail-Integration",
      "pre": "So funktioniert der Versand ",
      "accent": "aus Ihrem eigenen Postfach",
      "post": ""
    },
    "ai": {
      "eyebrow": "KI-Assistenten (MCP)",
      "pre": "Mit hubsell arbeiten, aus ",
      "accent": "dem KI-Assistenten, den Sie schon nutzen",
      "post": ""
    },
    "steps": {
      "eyebrow": "Einrichtung",
      "pre": "Verbunden in ",
      "accent": "drei Schritten",
      "post": ""
    },
    "security": {
      "eyebrow": "Sicherheit und DSGVO",
      "pre": "Ihre Daten bleiben ",
      "accent": "unter Ihrer Kontrolle",
      "post": ""
    },
    "closing": {
      "eyebrow": "Integrationen",
      "pre": "Unsicher, ob es zu ",
      "accent": "Ihrem Stack passt",
      "post": "?"
    },
    "faq": {
      "eyebrow": "FAQ zu Integrationen",
      "pre": "Fragen zu ",
      "accent": "den Integrationen von hubsell",
      "post": ""
    }
  },
  "statusLabel": "Live",
  "aiStatusLabel": "Über MCP",
  "groups": {
    "CRM": "CRM",
    "Email": "E-Mail",
    "AI": "KI-Assistenten"
  },
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Kontakte, Unternehmen und Aktivität aus hubsell landen in Echtzeit an den richtigen Salesforce-Datensätzen."
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Kontakte, Unternehmen und Aktivität aus hubsell landen ohne manuelle Eingabe an den richtigen HubSpot-Datensätzen."
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Kontakte und Aktivität aus hubsell halten Ihre Pipeline in Pipedrive aktuell, ohne CSV dazwischen."
    },
    {
      "name": "Google Workspace",
      "category": "Email",
      "blurb": "E-Mails gehen aus Ihren eigenen Google-Postfächern über die Gmail-API raus, ohne externen Versandserver."
    },
    {
      "name": "Microsoft 365",
      "category": "Email",
      "blurb": "E-Mails gehen aus Ihren eigenen Outlook-Postfächern über die Microsoft-API raus, ohne externen Versandserver."
    },
    {
      "name": "ChatGPT",
      "category": "AI",
      "blurb": "Fragen Sie ChatGPT nach Kontakten, Flows und Statistiken oder lassen Sie Kontakte taggen, anreichern und Flows starten, mit den Berechtigungen, die Sie freigeben."
    },
    {
      "name": "Claude",
      "category": "AI",
      "blurb": "Fügen Sie hubsell in Claude als eigenen Connector hinzu und fragen Sie nach Kontakten, Flows und Ergebnissen, mit den Berechtigungen, die Sie freigeben."
    },
    {
      "name": "Gemini",
      "category": "AI",
      "blurb": "Fügen Sie hubsell in Gemini als eigene App hinzu, um Kontakte und Flow-Ergebnisse abzufragen, Kontakte zu taggen oder anzureichern und Flows zu starten."
    },
    {
      "name": "Mistral Vibe",
      "category": "AI",
      "blurb": "Der Assistent von Mistral, früher Le Chat: Fügen Sie hubsell als eigenen MCP-Connector hinzu, um Kontakte zu suchen, Flow-Statistiken zu lesen, zu taggen, anzureichern und Flows zu starten."
    },
    {
      "name": "Perplexity",
      "category": "AI",
      "blurb": "Fügen Sie hubsell in Perplexity als eigenen Remote-Connector hinzu und fragen Sie nach Kontakten, Flows und Statistiken, mit den Berechtigungen, die Sie freigeben."
    },
    {
      "name": "Microsoft Copilot Studio",
      "category": "AI",
      "blurb": "Geben Sie Ihren Agenten in Copilot Studio Zugriff auf hubsell, damit sie Kontakte und Flow-Ergebnisse abfragen, taggen, anreichern und Flows starten, mit den Berechtigungen, die jede Person freigibt."
    },
    {
      "name": "Cursor",
      "category": "AI",
      "blurb": "Fügen Sie hubsell in Cursor als MCP-Server hinzu, um aus dem Editor Kontakte und Flow-Ergebnisse abzufragen, zu taggen, anzureichern und Flows zu starten."
    },
    {
      "name": "Claude Code",
      "category": "AI",
      "blurb": "Fügen Sie hubsell mit einem Terminal-Befehl hinzu und arbeiten Sie in Claude Code mit Kontakten, Flows und Statistiken, mit den Berechtigungen, die Sie freigeben."
    },
    {
      "name": "Codex",
      "category": "AI",
      "blurb": "Fügen Sie hubsell mit einem Codex-Befehl hinzu, um Kontakte und Flow-Ergebnisse abzufragen, zu taggen, anzureichern und Flows zu starten, mit den Berechtigungen, die Sie freigeben."
    },
    {
      "name": "Visual Studio Code",
      "category": "AI",
      "blurb": "Fügen Sie hubsell für GitHub Copilot in Visual Studio Code als MCP-Server hinzu, um Kontakte und Flow-Ergebnisse abzufragen, zu taggen, anzureichern und Flows zu starten."
    },
    {
      "name": "Windsurf",
      "category": "AI",
      "blurb": "Fügen Sie hubsell in Windsurf als MCP-Server hinzu, um Kontakte und Flow-Ergebnisse abzufragen, zu taggen, anzureichern und Flows zu starten, mit den Berechtigungen, die Sie freigeben."
    }
  ],
  "crmPoints": [
    "Kontakte werden per Hand ins CRM übertragen oder über Bedingungen automatisch, etwa nur die Kontakte, die antworten.",
    "Jeder Kontakt und jedes Unternehmen wird mit dem bestehenden Datensatz abgeglichen und aktualisiert, sodass keine Dubletten entstehen.",
    "E-Mail-Aktivität, LinkedIn-Aktivität und Anrufaufgaben werden sofort am Datensatz protokolliert, und Sie legen fest, welches hubsell-Feld welches CRM-Feld füllt.",
    "Kontakte, die schon in Ihrem CRM sind, etwa Kunden oder offene Deals, lassen sich vor dem Outreach ausschließen."
  ],
  "crmLink": {
    "label": "Mehr zum CRM-Sync",
    "href": "/platform/crm-sync"
  },
  "mailPoints": [
    "E-Mails werden aus Ihren eigenen Postfächern bei Google Workspace oder Microsoft 365 über deren APIs versendet. Es gibt keinen externen SMTP-Server und keine Tracking-Umleitung dazwischen.",
    "Ihr Postfach hat ein tägliches Versandlimit, und E-Mails gehen innerhalb der Versandzeiten raus, die Sie festlegen, verteilt statt gebündelt.",
    "Antwortet ein Kontakt oder bounct eine E-Mail, stoppt der Flow für diesen Kontakt, sodass niemand nach einer Antwort noch ein Follow-up bekommt."
  ],
  "mailLink": {
    "label": "Mehr zur E-Mail-Zustellbarkeit",
    "href": "/platform/deliverability"
  },
  "aiPoints": [
    "hubsell hat einen MCP-Server. MCP (Model Context Protocol) ist der offene Standard, über den KI-Apps mit anderer Software arbeiten. Jeder Assistent, in dem Sie einen MCP-Server über seine Adresse hinzufügen können, lässt sich verbinden, egal von welchem Anbieter.",
    "Sie melden sich mit Ihrem hubsell-Konto an und legen fest, was der Assistent darf: Lesen, Schreiben, Credits verbrauchen oder E-Mails senden. Er handelt in Ihrem Namen, Ihre Rolle in hubsell gilt also weiter.",
    "Fragen Sie in normaler Sprache nach Kontakten, Flows und Statistiken, oder lassen Sie Kontakte taggen und anreichern und Flows starten. hubsell weist den Assistenten an, Sie zu fragen, bevor er Credits verbraucht oder etwas versendet.",
    "Sie nutzen Ihr eigenes KI-Abo. hubsell sieht Ihre Chats nicht und berechnet keine Credits für die KI. Manche Apps bieten eigene MCP-Server nur in bestimmten Tarifen oder Ländern an."
  ],
  "aiLink": {
    "label": "Anleitung: hubsell mit Ihrem KI-Assistenten nutzen",
    "href": "/knowledge/use-hubsell-with-your-ai-assistant/"
  },
  "steps": [
    {
      "title": "Integrationen öffnen",
      "body": "Öffnen Sie in hubsell das Profilmenü unten links und wählen Sie Integrationen."
    },
    {
      "title": "Auswählen und freigeben",
      "body": "Wählen Sie Ihr CRM oder Ihren Postfach-Anbieter. hubsell leitet Sie zur Anmeldeseite des Tools weiter, wo Sie die angefragten Berechtigungen erteilen."
    },
    {
      "title": "Festlegen, was synchronisiert wird",
      "body": "Zurück in hubsell erscheint die Verbindung als aktiv. Von sich aus wird nichts übertragen: Was wann ins CRM geht, legen Sie fest."
    }
  ],
  "stepsLink": {
    "label": "Anleitung: Ihr CRM verbinden",
    "href": "/knowledge/connect-your-crm/"
  },
  "security": [
    "Sie verbinden jedes Tool über dessen eigene Anmelde- und Berechtigungsseite. hubsell erhält nur den Zugriff, den Sie freigeben, und Sie können ihn im Tool jederzeit entziehen.",
    "hubsell sitzt in Berlin und hostet die Daten in Frankfurt. Sie bleiben Verantwortlicher, hubsell ist Ihr Auftragsverarbeiter, mit einem Auftragsverarbeitungsvertrag."
  ],
  "noteTitle": "Weitere folgen",
  "noteBody": "Das ist der Stand heute. Wenn Sie ein Tool brauchen, sagen Sie es uns in einem kurzen Gespräch, und wir sagen Ihnen, wo es steht.",
  "trademark": "Salesforce, HubSpot, Pipedrive, ChatGPT, Codex, Claude, Claude Code, Mistral Vibe, Perplexity, Cursor und Windsurf sind Marken ihrer jeweiligen Inhaber. Google Workspace und Gemini sind Marken der Google LLC, Microsoft 365, Microsoft Copilot Studio und Visual Studio Code Marken der Microsoft Corporation. hubsell ist mit diesen Unternehmen nicht verbunden und wird nicht von ihnen empfohlen.",
  "closingSub": "Sagen Sie uns in einem kurzen Gespräch, womit Sie arbeiten, und wir zeigen Ihnen, wie hubsell in Ihren Stack passt.",
  "faqs": [
    {
      "question": "Mit welchen CRMs ist hubsell integriert?",
      "answer": "<p>Salesforce, HubSpot und Pipedrive. Alle drei sind native Integrationen, ohne Zapier oder andere Middleware dazwischen.</p>"
    },
    {
      "question": "Wie lange dauert es, das CRM zu verbinden?",
      "answer": "<p>Wenige Minuten. Sie öffnen in hubsell Integrationen, wählen Ihr CRM und erteilen die angefragten Berechtigungen. Mehr in der <a class=\"link\" href=\"/knowledge/connect-your-crm/\">Anleitung</a>.</p>"
    },
    {
      "question": "Werden Kontakte beim Verbinden automatisch übertragen?",
      "answer": "<p>Nein. Das Verbinden überträgt von sich aus nichts. Sie übertragen Kontakte per Hand oder legen Bedingungen fest, die sie automatisch übertragen.</p>"
    },
    {
      "question": "Ist die CRM-Integration ein Zwei-Wege-Sync?",
      "answer": "<p>Derzeit läuft der Sync von hubsell in Ihr CRM, und hubsell prüft das CRM auf bestehende Datensätze und auszuschließende Kontakte. Änderungen im CRM werden noch nicht nach hubsell zurückgeschrieben. Ein Zwei-Wege-Sync ist geplant.</p>"
    },
    {
      "question": "Legt hubsell Dubletten im CRM an?",
      "answer": "<p>Nein. Vor dem Schreiben gleicht hubsell jeden Kontakt und jedes Unternehmen mit dem bestehenden Datensatz ab und aktualisiert ihn.</p>"
    },
    {
      "question": "Mit welchen E-Mail-Anbietern arbeitet hubsell?",
      "answer": "<p>Google Workspace und Microsoft 365. hubsell sendet aus Ihren eigenen Postfächern über die APIs von Gmail und Microsoft, nicht über einen externen Versandserver.</p>"
    },
    {
      "question": "Aus welchem Postfach sendet hubsell?",
      "answer": "<p>Aus dem Postfach bei Google Workspace oder Microsoft 365, das Sie verbinden, innerhalb eines Tageslimits. hubsell ist für geringes bis mittleres Volumen und gezielten Outreach gebaut, nicht für Massenversand. Mehr zur <a class=\"link\" href=\"/de/platform/deliverability/\">Zustellbarkeit</a>.</p>"
    },
    {
      "question": "Ist hubsell mit LinkedIn integriert?",
      "answer": "<p>LinkedIn-Schritte (Profilbesuche, Vernetzungsanfragen, Nachrichten und InMail) laufen in hubsell-Flows, neben E-Mails und Anrufaufgaben. Mehr zum <a class=\"link\" href=\"/de/platform/multichannel-outreach/\">Multichannel-Outreach</a>.</p>"
    },
    {
      "question": "Welche KI-Assistenten funktionieren mit hubsell?",
      "answer": "<p>Jede App, in der Sie einen MCP-Server über seine Adresse hinzufügen und sich dort anmelden können. Dazu gehören ChatGPT, Claude und Claude Code, Gemini, Mistral Vibe (früher Le Chat), Perplexity, Microsoft Copilot Studio, Cursor, Visual Studio Code mit GitHub Copilot, Codex und Windsurf. Manche Apps bieten das nur in bestimmten Tarifen oder Ländern an. Die Schritte für jede App stehen in der <a class=\"link\" href=\"/knowledge/use-hubsell-with-your-ai-assistant/\">Anleitung</a>.</p>"
    },
    {
      "question": "Sieht hubsell meine Chats mit dem Assistenten?",
      "answer": "<p>Nein. Ihr Assistent schickt hubsell nur die Anfragen, die er beantwortet braucht, etwa eine Kontaktsuche, und bekommt die Ergebnisse zurück. Das Gespräch bleibt zwischen Ihnen und der App, die Sie nutzen.</p>"
    },
    {
      "question": "Kostet die Arbeit über einen KI-Assistenten hubsell-Credits?",
      "answer": "<p>Nein. Sie nutzen Ihr eigenes KI-Abo, und hubsell berechnet keine Credits für die KI. Credits kostet nur die Anreicherung, genau wie in der App, und nur, wenn Sie „Credits verbrauchen“ freigeben.</p>"
    },
    {
      "question": "Sind die Daten beim Verbinden eines Tools sicher?",
      "answer": "<p>Sie verbinden jedes Tool über dessen eigene Anmelde- und Berechtigungsseite und können den Zugriff jederzeit entziehen. hubsell hostet die Daten in Frankfurt und arbeitet als Ihr Auftragsverarbeiter mit einem Auftragsverarbeitungsvertrag.</p>"
    },
    {
      "question": "Was, wenn das eigene Tool fehlt?",
      "answer": "<p>Sagen Sie es uns in einem kurzen Gespräch. Wir ergänzen laufend Integrationen und sagen Ihnen, wo Ihr Tool steht.</p>"
    }
  ],
  "crumbHome": "Start",
  "crumbSelf": "Integrationen"
};

const NL: IntegrationsPageData = {
  "title": "Integraties: CRM, e-mail en AI-assistenten zoals ChatGPT | hubsell",
  "metaDescription": "Koppel hubsell aan HubSpot, Salesforce of Pipedrive, verstuur vanuit Google Workspace of Microsoft 365 en werk met hubsell vanuit ChatGPT, Claude, Gemini of elke AI-assistent die MCP ondersteunt.",
  "eyebrow": "Integraties",
  "h1Pre": "Integraties voor ",
  "h1Accent": "CRM, e-mail en AI-assistenten",
  "h1Post": "",
  "sub": "hubsell koppelt met Salesforce, HubSpot en Pipedrive, verstuurt vanuit je eigen Google Workspace- of Microsoft 365-mailboxen en werkt met elke AI-assistent die MCP ondersteunt, zoals ChatGPT, Claude of Gemini. Met een paar klikken toegestaan, zonder middleware om te onderhouden.",
  "hubLabels": {
    "mail": "Verstuurt vanuit je mailbox",
    "crm": "Synchroniseert met je CRM",
    "ai": "Vraag het je AI-assistent"
  },
  "heads": {
    "list": {
      "eyebrow": "Beschikbare integraties",
      "pre": "Waarmee hubsell ",
      "accent": "vandaag koppelt",
      "post": ""
    },
    "crm": {
      "eyebrow": "CRM-integratie",
      "pre": "De CRM-sync ",
      "accent": "stap voor stap",
      "post": ""
    },
    "mail": {
      "eyebrow": "E-mailintegratie",
      "pre": "Zo werkt versturen ",
      "accent": "vanuit je eigen mailbox",
      "post": ""
    },
    "ai": {
      "eyebrow": "AI-assistenten (MCP)",
      "pre": "Werk met hubsell vanuit ",
      "accent": "de AI-assistent die je al gebruikt",
      "post": ""
    },
    "steps": {
      "eyebrow": "Instellen",
      "pre": "Gekoppeld in ",
      "accent": "drie stappen",
      "post": ""
    },
    "security": {
      "eyebrow": "Beveiliging en AVG",
      "pre": "Je data blijft ",
      "accent": "onder je controle",
      "post": ""
    },
    "closing": {
      "eyebrow": "Integraties",
      "pre": "Twijfel je of het past ",
      "accent": "in je stack",
      "post": "?"
    },
    "faq": {
      "eyebrow": "FAQ over integraties",
      "pre": "Vragen over ",
      "accent": "de integraties van hubsell",
      "post": ""
    }
  },
  "statusLabel": "Live",
  "aiStatusLabel": "Via MCP",
  "groups": {
    "CRM": "CRM",
    "Email": "E-mail",
    "AI": "AI-assistenten"
  },
  "items": [
    {
      "name": "Salesforce",
      "category": "CRM",
      "blurb": "Contacten, bedrijven en activiteit uit hubsell komen in realtime op de juiste Salesforce-records."
    },
    {
      "name": "HubSpot",
      "category": "CRM",
      "blurb": "Contacten, bedrijven en activiteit uit hubsell komen zonder handmatige invoer op de juiste HubSpot-records."
    },
    {
      "name": "Pipedrive",
      "category": "CRM",
      "blurb": "Contacten en activiteit uit hubsell houden je Pipedrive-pipeline actueel, zonder CSV ertussen."
    },
    {
      "name": "Google Workspace",
      "category": "Email",
      "blurb": "E-mails gaan uit vanuit je eigen Google-mailboxen via de Gmail-API, zonder externe verzendserver."
    },
    {
      "name": "Microsoft 365",
      "category": "Email",
      "blurb": "E-mails gaan uit vanuit je eigen Outlook-mailboxen via de Microsoft-API, zonder externe verzendserver."
    },
    {
      "name": "ChatGPT",
      "category": "AI",
      "blurb": "Vraag ChatGPT naar je contacten, flows en statistieken, of laat contacten taggen, verrijken en flows starten, met de rechten die je toestaat."
    },
    {
      "name": "Claude",
      "category": "AI",
      "blurb": "Voeg hubsell in Claude toe als eigen connector en vraag naar contacten, flows en resultaten, met de rechten die je toestaat."
    },
    {
      "name": "Gemini",
      "category": "AI",
      "blurb": "Voeg hubsell in Gemini toe als eigen app om contacten en flowresultaten op te vragen, contacten te taggen of te verrijken en flows te starten."
    },
    {
      "name": "Mistral Vibe",
      "category": "AI",
      "blurb": "De assistent van Mistral, voorheen Le Chat: voeg hubsell toe als eigen MCP-connector om contacten te zoeken, flowstatistieken te lezen, te taggen, te verrijken en flows te starten."
    },
    {
      "name": "Perplexity",
      "category": "AI",
      "blurb": "Voeg hubsell in Perplexity toe als eigen remote connector en vraag naar je contacten, flows en statistieken, met de rechten die je toestaat."
    },
    {
      "name": "Microsoft Copilot Studio",
      "category": "AI",
      "blurb": "Geef je agents in Copilot Studio toegang tot hubsell, zodat ze contacten en flowresultaten opvragen, taggen, verrijken en flows starten, met de rechten die ieder toestaat."
    },
    {
      "name": "Cursor",
      "category": "AI",
      "blurb": "Voeg hubsell in Cursor toe als MCP-server om vanuit de editor contacten en flowresultaten op te vragen, te taggen, te verrijken en flows te starten."
    },
    {
      "name": "Claude Code",
      "category": "AI",
      "blurb": "Voeg hubsell toe met één terminalopdracht en werk in Claude Code met je contacten, flows en statistieken, met de rechten die je toestaat."
    },
    {
      "name": "Codex",
      "category": "AI",
      "blurb": "Voeg hubsell toe met één Codex-opdracht om contacten en flowresultaten op te vragen, te taggen, te verrijken en flows te starten, met de rechten die je toestaat."
    },
    {
      "name": "Visual Studio Code",
      "category": "AI",
      "blurb": "Voeg hubsell in Visual Studio Code toe als MCP-server voor GitHub Copilot om contacten en flowresultaten op te vragen, te taggen, te verrijken en flows te starten."
    },
    {
      "name": "Windsurf",
      "category": "AI",
      "blurb": "Voeg hubsell in Windsurf toe als MCP-server om contacten en flowresultaten op te vragen, te taggen, te verrijken en flows te starten, met de rechten die je toestaat."
    }
  ],
  "crmPoints": [
    "Zet contacten handmatig over naar het CRM, of stel voorwaarden in die ze automatisch overzetten, bijvoorbeeld alleen de contacten die reageren.",
    "Elk contact en bedrijf wordt gekoppeld aan het bestaande record en bijgewerkt, zodat de sync geen dubbele records aanmaakt.",
    "E-mailactiviteit, LinkedIn-activiteit en beltaken worden direct op het record vastgelegd, en je kiest welk hubsell-veld welk CRM-veld vult.",
    "Contacten die al in je CRM staan, zoals klanten of open deals, kun je uitsluiten voordat de outreach begint."
  ],
  "crmLink": {
    "label": "Meer over CRM-sync",
    "href": "/platform/crm-sync"
  },
  "mailPoints": [
    "E-mails worden verstuurd vanuit je eigen Google Workspace- of Microsoft 365-mailboxen via hun API’s. Er is geen externe SMTP-server en geen trackingredirect ertussen.",
    "Je mailbox heeft een dagelijkse verzendlimiet, en e-mails gaan uit binnen de verzendtijden die je instelt, gespreid in plaats van in pieken.",
    "Als een contact reageert of een e-mail bouncet, stopt de flow voor dat contact, zodat niemand na een antwoord nog een follow-up krijgt."
  ],
  "mailLink": {
    "label": "Meer over e-maildeliverability",
    "href": "/platform/deliverability"
  },
  "aiPoints": [
    "hubsell heeft een MCP-server. MCP (Model Context Protocol) is de open standaard waarmee AI-apps met andere software werken. Elke assistent waarin je een MCP-server via een adres kunt toevoegen, kan koppelen, van welk bedrijf hij ook is.",
    "Je logt in met je hubsell-account en kiest wat de assistent mag: Lezen, Schrijven, Credits gebruiken of E-mails versturen. Hij handelt namens jou, dus je rol in hubsell blijft gelden.",
    "Stel in gewone taal vragen over je contacten, flows en statistieken, of laat contacten taggen en verrijken en flows starten. hubsell vraagt de assistent om het eerst aan jou te vragen voordat hij credits gebruikt of iets verstuurt.",
    "Je gebruikt je eigen AI-abonnement. hubsell ziet je chats niet en rekent geen credits voor de AI. Sommige apps bieden eigen MCP-servers alleen in bepaalde abonnementen of landen aan."
  ],
  "aiLink": {
    "label": "Handleiding: hubsell gebruiken met je AI-assistent",
    "href": "/knowledge/use-hubsell-with-your-ai-assistant/"
  },
  "steps": [
    {
      "title": "Open Integraties",
      "body": "Open in hubsell het profielmenu linksonder en kies Integraties."
    },
    {
      "title": "Kiezen en toestaan",
      "body": "Kies je CRM of mailboxprovider. hubsell stuurt je naar het inlogscherm van die tool, waar je de gevraagde rechten geeft."
    },
    {
      "title": "Bepalen wat synchroniseert",
      "body": "Terug in hubsell staat de koppeling op actief. Er gaat niets vanzelf over: je bepaalt wat naar het CRM gaat en wanneer."
    }
  ],
  "stepsLink": {
    "label": "Handleiding: je CRM koppelen",
    "href": "/knowledge/connect-your-crm/"
  },
  "security": [
    "Je koppelt elke tool via het eigen inlog- en rechtenscherm, zodat hubsell alleen de toegang krijgt die je geeft. Je kunt die op elk moment in de tool intrekken.",
    "hubsell is gevestigd in Berlijn en host de data in Frankfurt. Je blijft verwerkingsverantwoordelijke en hubsell is je verwerker, onder een verwerkersovereenkomst."
  ],
  "noteTitle": "Er komen er meer",
  "noteBody": "Dit is wat we vandaag ondersteunen. Mis je een tool, vertel het ons in een kort gesprek en wij laten weten hoe het ervoor staat.",
  "trademark": "Salesforce, HubSpot, Pipedrive, ChatGPT, Codex, Claude, Claude Code, Mistral Vibe, Perplexity, Cursor en Windsurf zijn handelsmerken van hun eigenaren. Google Workspace en Gemini zijn handelsmerken van Google LLC, Microsoft 365, Microsoft Copilot Studio en Visual Studio Code handelsmerken van Microsoft Corporation. hubsell is niet gelieerd aan en wordt niet onderschreven door deze bedrijven.",
  "closingSub": "Vertel ons in een kort gesprek wat je gebruikt en wij laten zien hoe hubsell in je stack past.",
  "faqs": [
    {
      "question": "Met welke CRM’s integreert hubsell?",
      "answer": "<p>Salesforce, HubSpot en Pipedrive. Alle drie zijn native integraties, zonder Zapier of andere middleware ertussen.</p>"
    },
    {
      "question": "Hoe lang duurt het om mijn CRM te koppelen?",
      "answer": "<p>Een paar minuten. Je opent Integraties in hubsell, kiest je CRM en geeft de gevraagde rechten. Zie de <a class=\"link\" href=\"/knowledge/connect-your-crm/\">handleiding</a>.</p>"
    },
    {
      "question": "Worden contacten bij het koppelen automatisch overgezet?",
      "answer": "<p>Nee. Koppelen zet uit zichzelf niets over. Je zet contacten handmatig over, of stelt voorwaarden in die ze automatisch overzetten.</p>"
    },
    {
      "question": "Werkt de CRM-integratie in twee richtingen?",
      "answer": "<p>Op dit moment loopt de sync van hubsell naar je CRM, en hubsell controleert het CRM op bestaande records en op contacten om uit te sluiten. Wijzigingen in het CRM worden nog niet teruggeschreven naar hubsell. Tweerichtings-sync staat gepland.</p>"
    },
    {
      "question": "Maakt hubsell dubbele records aan in mijn CRM?",
      "answer": "<p>Nee. Voordat hubsell schrijft, koppelt het elk contact en bedrijf aan het bestaande record en werkt het dat bij.</p>"
    },
    {
      "question": "Met welke e-mailproviders werkt hubsell?",
      "answer": "<p>Google Workspace en Microsoft 365. hubsell verstuurt vanuit je eigen mailboxen via de API’s van Gmail en Microsoft, niet via een externe verzendserver.</p>"
    },
    {
      "question": "Vanuit welke mailbox verstuurt hubsell?",
      "answer": "<p>Vanuit de Google Workspace- of Microsoft 365-mailbox die je koppelt, binnen een daglimiet. hubsell is gebouwd voor laag tot gemiddeld volume en gerichte outreach, niet voor bulkverzending. Zie <a class=\"link\" href=\"/nl/platform/deliverability/\">deliverability</a>.</p>"
    },
    {
      "question": "Integreert hubsell met LinkedIn?",
      "answer": "<p>LinkedIn-stappen (profielbezoeken, connectieverzoeken, berichten en InMail) lopen in hubsell-flows, naast e-mail en beltaken. Zie <a class=\"link\" href=\"/nl/platform/multichannel-outreach/\">multichannel-outreach</a>.</p>"
    },
    {
      "question": "Welke AI-assistenten werken met hubsell?",
      "answer": "<p>Elke app waarin je een MCP-server via een adres kunt toevoegen en daarop kunt inloggen. Daaronder vallen ChatGPT, Claude en Claude Code, Gemini, Mistral Vibe (voorheen Le Chat), Perplexity, Microsoft Copilot Studio, Cursor, Visual Studio Code met GitHub Copilot, Codex en Windsurf. Sommige apps bieden dit alleen in bepaalde abonnementen of landen aan. De stappen per app staan in de <a class=\"link\" href=\"/knowledge/use-hubsell-with-your-ai-assistant/\">handleiding</a>.</p>"
    },
    {
      "question": "Ziet hubsell mijn chats met de assistent?",
      "answer": "<p>Nee. Je assistent stuurt hubsell alleen de verzoeken die hij beantwoord wil hebben, zoals een zoekopdracht naar contacten, en krijgt de resultaten terug. Het gesprek blijft tussen jou en de app die je gebruikt.</p>"
    },
    {
      "question": "Kost werken via een AI-assistent hubsell-credits?",
      "answer": "<p>Nee. Je gebruikt je eigen AI-abonnement, en hubsell rekent geen credits voor de AI. Alleen verrijking kost credits, net als in de app, en alleen als je Credits gebruiken toestaat.</p>"
    },
    {
      "question": "Is mijn data veilig als ik een tool koppel?",
      "answer": "<p>Je koppelt elke tool via het eigen inlog- en rechtenscherm en kunt de toegang op elk moment intrekken. hubsell host de data in Frankfurt en werkt als je verwerker onder een verwerkersovereenkomst.</p>"
    },
    {
      "question": "Wat als mijn tool er niet bij staat?",
      "answer": "<p>Vertel het ons in een kort gesprek. We voegen integraties toe en laten je weten hoe het met je tool staat.</p>"
    }
  ],
  "crumbHome": "Home",
  "crumbSelf": "Integraties"
};

export function getIntegrationsPage(L: Locale): IntegrationsPageData {
  if (L === 'de') return DE;
  if (L === 'nl') return NL;
  if (L === 'fr') return integrationsFr;
  if (L === 'es') return integrationsEs;
  if (L === 'pt') return integrationsPt;
  return EN;
}
