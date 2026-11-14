// Integrations page: Spanish (Spain), "tú". Created as a copy of the English text; every string
// here is to be translated. Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsEs: IntegrationsPageData = {
  title: "Integrations: HubSpot, Salesforce, Pipedrive, Google and Microsoft | hubsell",
  metaDescription: "Connect hubsell to HubSpot, Salesforce or Pipedrive and send from your own Google Workspace or Microsoft 365 mailboxes. Native integrations, set up in minutes, no middleware.",
  eyebrow: "Integrations",
  h1Pre: "Integrations for ",
  h1Accent: "CRM and email",
  h1Post: "",
  sub: "hubsell connects to Salesforce, HubSpot and Pipedrive, and sends from your own Google Workspace or Microsoft 365 mailboxes. Native connections, authorised in a few clicks, with no middleware to maintain.",
  hubLabels: {
    mail: "Sends from your mailbox",
    crm: "Syncs to your CRM",
  },
  heads: {
    list: {
      eyebrow: "Available integrations",
      pre: "What hubsell ",
      accent: "connects to today",
      post: "",
    },
    crm: {
      eyebrow: "CRM integration",
      pre: "How the ",
      accent: "CRM integration works",
      post: "",
    },
    mail: {
      eyebrow: "Email integration",
      pre: "How sending from ",
      accent: "your own mailbox works",
      post: "",
    },
    steps: {
      eyebrow: "Set-up",
      pre: "Connected in ",
      accent: "three steps",
      post: "",
    },
    security: {
      eyebrow: "Security and GDPR",
      pre: "Your data stays ",
      accent: "under your control",
      post: "",
    },
    closing: {
      eyebrow: "Integrations",
      pre: "Not sure it fits ",
      accent: "your stack",
      post: "?",
    },
    faq: {
      eyebrow: "Integrations FAQ",
      pre: "Questions about ",
      accent: "hubsell integrations",
      post: "",
    },
  },
  statusLabel: "Live",
  groups: {
    CRM: "CRM",
    Email: "Email",
  },
  items: [
    {
      name: "Salesforce",
      category: "CRM",
      blurb: "Contacts, companies and activity from hubsell land on the right Salesforce records, in real time.",
    },
    {
      name: "HubSpot",
      category: "CRM",
      blurb: "Contacts, companies and activity from hubsell land on the right HubSpot records, without manual entry.",
    },
    {
      name: "Pipedrive",
      category: "CRM",
      blurb: "Contacts and activity from hubsell keep your Pipedrive pipeline current, with no CSV in between.",
    },
    {
      name: "Google Workspace",
      category: "Email",
      blurb: "Emails go out from your own Google mailboxes through the Gmail API, with no outside sending server.",
    },
    {
      name: "Microsoft 365",
      category: "Email",
      blurb: "Emails go out from your own Outlook mailboxes through the Microsoft API, with no outside sending server.",
    },
  ],
  crmPoints: [
    "Push contacts to the CRM by hand, or set conditions that push them automatically, for example only the contacts who reply.",
    "Each contact and company is matched to the record that already exists and updated, so the sync does not create duplicates.",
    "Email activity, LinkedIn activity and call tasks are logged on the record as they happen, and you choose which hubsell field fills which CRM field.",
    "Contacts already in your CRM, such as customers or open deals, can be left out before outreach starts.",
  ],
  crmLink: {
    label: "More on CRM sync",
    href: "/platform/crm-sync",
  },
  mailPoints: [
    "Emails are sent from your own Google Workspace or Microsoft 365 mailboxes through their APIs. There is no outside SMTP server and no tracking redirect in the path.",
    "Your mailbox has a daily sending cap, and emails go out within the sending windows you set, spaced out rather than in bursts.",
    "When a contact replies or an email bounces, the flow stops for that contact, so nobody gets a follow-up after answering.",
  ],
  mailLink: {
    label: "More on email deliverability",
    href: "/platform/deliverability",
  },
  steps: [
    {
      title: "Open Integrations",
      body: "In hubsell, open the profile menu in the bottom left and choose Integrations.",
    },
    {
      title: "Choose and authorise",
      body: "Pick your CRM or mailbox provider. hubsell sends you to its login screen, where you grant the permissions it asks for.",
    },
    {
      title: "Decide what syncs",
      body: "Back in hubsell the connection shows as live. Nothing is pushed on its own: you choose what goes to the CRM and when.",
    },
  ],
  stepsLink: {
    label: "Step-by-step guide: connect your CRM",
    href: "/knowledge/connect-your-crm/",
  },
  security: [
    "You connect each tool through its own login and permission screen, so hubsell only gets the access you grant, and you can remove it in the tool at any time.",
    "hubsell is based in Berlin and hosts data in Frankfurt. You stay the data controller and hubsell is your processor, under a data processing agreement.",
  ],
  noteTitle: "More on the way",
  noteBody: "This is the set we support today. If there is a tool you need, tell us on a short call and we will let you know where it stands.",
  trademark: "Salesforce, HubSpot and Pipedrive are trademarks of their owners. Google Workspace is a trademark of Google LLC, Microsoft 365 a trademark of Microsoft Corporation. hubsell is not affiliated with or endorsed by these companies.",
  closingSub: "Tell us what you run on a short call and we will show you how hubsell fits your stack.",
  faqs: [
    {
      question: "Which CRMs does hubsell integrate with?",
      answer: "<p>Salesforce, HubSpot and Pipedrive. All three are native integrations, so there is no Zapier or other middleware in between.</p>",
    },
    {
      question: "How long does it take to connect my CRM?",
      answer: "<p>A few minutes. You open Integrations in hubsell, choose your CRM and grant the permissions it asks for. See the <a class=\"link\" href=\"/knowledge/connect-your-crm/\">step-by-step guide</a>.</p>",
    },
    {
      question: "Does connecting my CRM send contacts across automatically?",
      answer: "<p>No. Connecting the account does not push anything on its own. You push contacts by hand, or set conditions that push them automatically.</p>",
    },
    {
      question: "Is the CRM integration two-way?",
      answer: "<p>Today the sync runs from hubsell into your CRM, and hubsell checks the CRM for existing records and for contacts to leave out. Changes made in the CRM are not written back into hubsell yet. Two-way sync is planned.</p>",
    },
    {
      question: "Will hubsell create duplicates in my CRM?",
      answer: "<p>No. Before it writes, hubsell matches each contact and company to the record that already exists and updates it.</p>",
    },
    {
      question: "Which email providers does hubsell work with?",
      answer: "<p>Google Workspace and Microsoft 365. hubsell sends from your own mailboxes through the Gmail and Microsoft APIs, not from an outside sending server.</p>",
    },
    {
      question: "Which mailbox does hubsell send from?",
      answer: "<p>From the Google Workspace or Microsoft 365 mailbox you connect, within a daily cap. hubsell is built for low to mid volume and well-targeted outreach, not bulk sending. See <a class=\"link\" href=\"/platform/deliverability/\">deliverability</a>.</p>",
    },
    {
      question: "Does hubsell integrate with LinkedIn?",
      answer: "<p>LinkedIn steps (profile visits, connection requests, messages and InMail) run inside hubsell flows, next to email and call tasks. See <a class=\"link\" href=\"/platform/multichannel-outreach/\">multichannel outreach</a>.</p>",
    },
    {
      question: "Is my data safe when I connect a tool?",
      answer: "<p>You connect each tool through its own login and permission screen and can remove the access at any time. hubsell hosts data in Frankfurt and works as your processor under a data processing agreement.</p>",
    },
    {
      question: "What if the tool I use is not listed?",
      answer: "<p>Tell us on a short call. We are adding integrations and will let you know where your tool stands.</p>",
    },
  ],
  crumbHome: "Home",
  crumbSelf: "Integrations",
};
