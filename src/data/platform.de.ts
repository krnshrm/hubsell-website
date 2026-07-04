// German copy for the /platform pages. Mirrors platform-content.ts exactly in
// structure; register is formal (Sie), brand stays lowercase "hubsell", technical
// terms (CRM, LinkedIn, ICP, InMail, DMs) stay English, German number formatting.
import type { PlatformData } from './platform-content';

export const platformDe: PlatformData = {
  overview: {
    title: 'Die hubsell-Plattform: Live-Daten, Multichannel-Outreach und CRM-Sync',
    metaDescription: 'Eine Plattform, die B2B-Kontakte live recherchiert, E-Mail-, LinkedIn- und Telefon-Outreach in einem Ablauf betreibt und alles automatisch in Ihr CRM protokolliert.',
    eyebrow: 'Die Plattform',
    h1Pre: 'Die Arbeit von sechs Tools. ', h1Accent: 'Eine Plattform', h1Post: '.',
    sub: 'hubsell ersetzt Ihre Tools f\u00fcr Daten, Enrichment, Sequencer, Deliverability, Dialer und CRM-Sync durch ein System: Live-Daten, Multichannel-Outreach und automatische CRM-Synchronisierung.',
    demoCta: 'Demo buchen',
    problemEyebrow: 'Das Problem',
    problemTitlePre: 'Die meisten Outbound-Stacks sind drei Abos, ', problemTitleAccent: 'notd\u00fcrftig verklebt', problemTitlePost: '.',
    problemBody: [
      'Daten aus dem ersten Tool veralten bereits, w\u00e4hrend das zweite Tool sie verschickt, und das dritte Tool erf\u00e4hrt nie von der Antwort. Jede \u00dcbergabe zwischen Tools ist eine CSV-Datei, eine Verz\u00f6gerung und eine Stelle, an der Daten verrotten.',
      'Sie zahlen drei Rechnungen, um L\u00fccken zwischen den Tools zu schaffen. hubsell schlie\u00dft diese L\u00fccken, indem es die drei Aufgaben an einem Ort erledigt, auf einem Datenbestand, in Echtzeit.',
    ],
    capsEyebrow: 'Die drei F\u00e4higkeiten',
    capsTitle: 'Was die Plattform leistet',
    caps: [
      {
        eyebrow: 'Live-Daten',
        title: 'Recherchiert an dem Tag, an dem Sie fragen',
        body: 'hubsell verkauft keinen Zugang zu einer statischen Datenbank. Definieren Sie Ihr ICP und wir recherchieren Kontakte live aus LinkedIn, passend zu Ihren Kriterien und verifiziert am Punkt der Nutzung.',
        href: '/platform/live-data', linkLabel: 'Mehr zu Live-Daten',
        steps: ['Six live sources', 'Pooled into your ICP', 'Verified at the point of use'],
      },
      {
        eyebrow: 'Multichannel-Outreach',
        title: 'E-Mail, LinkedIn und Telefon in einem Flow',
        body: 'Eine koordinierte Sequenz \u00fcber alle drei Kan\u00e4le, mit Verzweigungen, die auf das Verhalten jedes Kontakts reagieren, und Versand, der sicher \u00fcber die Profile Ihres Teams verteilt wird.',
        href: '/platform/multichannel-outreach', linkLabel: 'Mehr zu Multichannel-Outreach',
        steps: ['One sequence, not three tools', 'Email, LinkedIn, and phone', 'Reacts to what they do'],
      },
      {
        eyebrow: 'CRM-Sync',
        title: 'Jeder Touchpoint automatisch protokolliert',
        body: 'Gesendet, ge\u00f6ffnet, beantwortet, vernetzt: alles landet in Salesforce, HubSpot oder Pipedrive, sobald es passiert. Keine manuelle Eingabe, kein Datenverfall.',
        href: '/platform/crm-sync', linkLabel: 'Mehr zu CRM-Sync',
        steps: ['Every activity captured', 'Mapped to the right fields', 'Two-way, in real time'],
      },
    ],
    resultsEyebrow: 'Warum das funktioniert',
    resultsTitle: 'Was Ihnen eine Plattform bringt',
    results: [
      {
        title: 'Effizienz',
        body: 'Ein Login, eine Rechnung, keine CSV-Exporte zwischen Tools. Ihr Team f\u00fchrt den gesamten Outbound-Prozess an einem Ort aus, statt drei Produkte von Hand zusammenzuhalten.',
      },
      {
        title: 'Ergebnisse',
        body: 'Frische Daten verbessern die Zustellbarkeit. Koordinierte Kan\u00e4le erh\u00f6hen die Antwortquoten. Automatische Protokollierung h\u00e4lt Ihr Pipeline-Reporting ehrlich. Jeder Teil macht die anderen besser.',
      },
    ],
    proofEyebrow: 'Beleg',
    proofTitle: 'Teams, die gewechselt haben',
    ratingsLine: 'Bewertet mit 4,8+ auf G2, Capterra und GetApp.',
    quoteSlug: 'cibt',
    faqEyebrow: 'FAQ',
    faqTitle: 'H\u00e4ufige Fragen',
    faqSlugs: ['hubsell-replace-outbound-stack', 'hubsell-crm-integration', 'stop-sales-email-bounces'],
    closing: {
      titlePre: 'Die ganze Plattform ', titleAccent: 'in einem Gespr\u00e4ch', titlePost: '.',
      sub: 'Bringen Sie Ihren aktuellen Stack in ein kurzes Gespr\u00e4ch mit und wir zeigen Ihnen, wie er als ein System aussieht.',
    },
    closingCta: 'Demo buchen',
  },

  details: [
    {
      path: '/platform/live-data',
      title: 'Live recherchierte B2B-Daten, verifiziert am Punkt der Nutzung | hubsell',
      metaDescription: 'hubsell recherchiert B2B-Kontakte in dem Moment, in dem Sie fragen, passend zu Ihrem ICP und verifiziert am Punkt der Nutzung. Zero-Day-Sourcing statt einer verfallenden Datenbank.',
      eyebrow: 'Live-Daten',
      h1Pre: 'B2B-Daten von ', h1Accent: 'heute', h1Post: ', nicht von vor zwei Jahren',
      sub: 'hubsell verkauft keinen Zugang zu einer statischen Datenbank. Definieren Sie Ihr ICP und wir recherchieren Kontakte live aus LinkedIn, erg\u00e4nzen Kaufsignale und verifizieren jeden Datensatz, bevor er in Ihren Flow gelangt.',
      demoCta: 'Demo buchen',
      heroTimeline: true,
      row: {
        titlePre: 'Recherchiert aus ', titleAccent: 'echten Kaufsignalen', titlePost: '',
        points: [
          'Die meisten Plattformen lassen Sie nach Titel und Branche filtern. hubsell liest auch das Verhalten.',
          'Personen, die einer Unternehmensseite folgen, mit einem LinkedIn-Post interagieren, den Job wechseln, Events besuchen oder f\u00fcr bestimmte Rollen einstellen.',
          'Signale zeigen, wen Sie diese Woche kontaktieren sollten, nicht nur, wer zu einem Filter passt.',
        ],
        embed: '05-sp-widget',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Vom Live-Signal zum verifizierten Kontakt',
      },
      gridTitlePre: 'Daten, die ', gridTitleAccent: 'am Tag der Nutzung korrekt sind', gridTitlePost: '',
      blocks: [
        {
          title: 'Zero-Day-Sourcing',
          body: 'Eine ma\u00dfgeschneiderte Datenbank, erstellt im Moment Ihrer Anfrage, keine geteilte Liste von vor Jahren. Frisch von diesem Tag, mit 80 bis 90% Abdeckung Ihres Zielmarkts.',
        },
        {
          title: 'Passend zu Ihrem ICP',
          body: 'Definieren Sie Ihr ideales Kundenprofil einmal. Jeder Kontakt, der in Ihren Flow gelangt, wird daran gepr\u00fcft, bevor Sie einen einzigen Credit f\u00fcr Outreach ausgeben.',
        },
        {
          title: 'Verifiziert am Punkt der Nutzung',
          body: 'Jeder Datensatz wird im Moment der Recherche gepr\u00fcft, Catch-all-Domains inklusive. Bounces bleiben niedrig und Ihre Absenderreputation bleibt intakt.',
        },
        {
          title: 'Gebaut gegen Datenverfall',
          body: 'B2B-Entscheider wechseln im Schnitt alle 2,5 Jahre den Job, statische Listen verfallen daher um 25 bis 30% pro Jahr. Live-Recherche macht den Verfall irrelevant: Die Daten sind am Tag der Nutzung korrekt.',
        },
      ],
      proofEyebrow: 'Beleg',
      proofTitle: 'Was korrekte Daten ver\u00e4ndern',
      quoteSlug: 'alon-even',
      storySlug: 'sensolus',
      storyLabel: 'Zur Sensolus-Story',
      faqEyebrow: 'FAQ',
      faqTitle: 'H\u00e4ufige Fragen zu Live-Daten',
      faqSlugs: ['stop-sales-email-bounces', 'build-b2b-audience-no-decay'],
      closing: {
        titlePre: 'Sehen Sie Ihren Markt, recherchiert ', titleAccent: 'heute', titlePost: '.',
        sub: 'Nennen Sie uns Ihr ICP in einem kurzen Gespr\u00e4ch und wir zeigen Ihnen, was Zero-Day-Sourcing daf\u00fcr liefert.',
      },
      closingCta: 'Demo buchen',
    },

    {
      path: '/platform/multichannel-outreach',
      title: 'Multichannel-Outreach: E-Mail, LinkedIn und Telefon in einem Flow | hubsell',
      metaDescription: 'F\u00fchren Sie E-Mail, LinkedIn und Telefon als eine koordinierte Sequenz aus. Verzweigte Flows, sichere Versandlimits und Outreach von den Profilen, die K\u00e4ufer wirklich akzeptieren.',
      eyebrow: 'Multichannel-Outreach',
      h1Pre: 'Ein Flow \u00fcber ', h1Accent: 'E-Mail, LinkedIn und Telefon', h1Post: '',
      sub: 'Schluss mit dem Jonglieren zwischen E-Mail-Tool, LinkedIn-Tool und Aufgabenliste. hubsell f\u00fchrt alle drei Kan\u00e4le als eine koordinierte Sequenz aus, die auf das Verhalten jedes Kontakts reagiert.',
      demoCta: 'Demo buchen',
      row: {
        titlePre: 'Eine Sequenz, ', titleAccent: 'jeder Kanal', titlePost: '',
        points: [
          'Ziehen Sie E-Mail-, LinkedIn- und Telefon-Schritte per Drag-and-drop in einen einzigen Flow.',
          'Profilbesuche, Kontaktanfragen, DMs, InMail und Anrufaufgaben, alles abgestimmt auf Ihre E-Mail-Kadenz.',
          'Verzweigungsbedingungen leiten jeden Kontakt nach seinem Verhalten weiter: ge\u00f6ffnet, geantwortet, angenommen oder still geblieben.',
        ],
        embed: '06-multichannel-flow',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Ein Flow \u00fcber jeden Kanal',
      },
      gridTitlePre: 'Gebaut, um ', gridTitleAccent: 'anzukommen und beantwortet zu werden', gridTitlePost: '',
      blocks: [
        {
          title: 'Zustellbarkeit von Grund auf',
          body: 'E-Mails werden \u00fcber die Google- und Microsoft-APIs direkt aus Ihren eigenen Postf\u00e4chern versendet, ohne externe Server dazwischen. \u00d6ffnungsraten bleiben ehrlich und Spamfilter bleiben ruhig.',
        },
        {
          title: 'Sicherer Versand, verteilt',
          body: 'Outreach wird auf 5 bis 10 interne Absenderprofile verteilt, innerhalb strikter Plattformlimits. Weniger Volumen pro Absender, h\u00f6here Zustellbarkeit, keine besch\u00e4digte Domain.',
        },
        {
          title: 'Versendet von den richtigen Profilen',
          body: 'Kontaktanfragen von SDRs liegen unter 20% Annahmequote, weil K\u00e4ufer einen Pitch erwarten. Dieselbe Anfrage von einem Gr\u00fcnder oder Fachexperten liegt \u00fcber 50%. hubsell betreibt Outreach von den Profilen, die K\u00e4ufer akzeptieren.',
        },
        {
          title: 'Anrufe dort, wo Ihr Team arbeitet',
          body: 'Telefon-Schritte landen als Anrufaufgaben in Salesforce, HubSpot oder Pipedrive. Ihre Vertriebsmitarbeiter telefonieren aus dem CRM, das sie bereits nutzen, und das Ergebnis wird mit dem Rest der Sequenz protokolliert.',
        },
      ],
      proofEyebrow: 'Beleg',
      proofTitle: 'Was koordinierter Outreach ver\u00e4ndert',
      quoteSlug: 'meetyoo',
      storySlug: 'verhaert',
      storyLabel: 'Zur Verhaert-Story',
      faqEyebrow: 'FAQ',
      faqTitle: 'H\u00e4ufige Fragen zu Outreach',
      faqSlugs: ['mass-email-brand-reputation', 'sdr-vs-executive-linkedin-outreach', 'hubsell-email-infrastructure'],
      closing: {
        titlePre: 'Alle drei Kan\u00e4le als ', titleAccent: 'ein Flow', titlePost: '.',
        sub: 'Bringen Sie eine Ihrer aktuellen Kampagnen in ein kurzes Gespr\u00e4ch mit und wir \u00fcbersetzen sie in eine einzige hubsell-Sequenz.',
      },
      closingCta: 'Demo buchen',
    },

    {
      path: '/platform/crm-sync',
      title: 'Automatischer CRM-Sync f\u00fcr Salesforce, HubSpot und Pipedrive | hubsell',
      metaDescription: 'Jedes Senden, \u00d6ffnen, Antworten und Vernetzen wird automatisch in Salesforce, HubSpot oder Pipedrive protokolliert. Keine manuelle Eingabe, kein Datenverfall, keine verlorene Aktivit\u00e4t.',
      eyebrow: 'CRM-Sync',
      h1Pre: 'Ihr CRM, immer aktuell. ', h1Accent: 'Von selbst', h1Post: '.',
      sub: 'hubsell ersetzt Ihr System of Record nicht, es versorgt es. Jeder Touchpoint \u00fcber E-Mail, LinkedIn und Telefon landet in Ihrem CRM, sobald er passiert.',
      demoCta: 'Demo buchen',
      row: {
        titlePre: 'Protokolliert, ', titleAccent: 'sobald es passiert', titlePost: '',
        points: [
          'Jeder Touchpoint, gesendet, ge\u00f6ffnet, beantwortet, vernetzt, wird automatisch in Salesforce, HubSpot oder Pipedrive protokolliert.',
          'Kontaktanfragen, Profilbesuche und Anrufergebnisse landen mit derselben Pr\u00e4zision wie E-Mail-Ereignisse.',
          'Keine manuelle Eingabe. Kein Datenverfall. Ihr Team arbeitet an der Pipeline, nicht an der Tabelle.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Von der Aktivit\u00e4t zum synchronisierten Datensatz',
      },
      gridTitlePre: 'Ein System of Record, dem Sie ', gridTitleAccent: 'endlich vertrauen k\u00f6nnen', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot und Pipedrive',
          body: 'Native Zwei-Wege-Synchronisierung mit den drei CRMs, in Echtzeit. Keine Middleware, keine CSV-Exporte, keine n\u00e4chtlichen Jobs.',
        },
        {
          title: 'Reporting bleibt ehrlich',
          body: 'Wenn jede Aktivit\u00e4t im Moment des Geschehens protokolliert wird, zeigt Ihr Pipeline-Reporting die Realit\u00e4t, nicht das, was Vertriebsmitarbeiter noch eintippen wollten.',
        },
        {
          title: 'Jede Woche Stunden zur\u00fcck',
          body: 'Manuelle CRM-Eingabe frisst leise Verkaufszeit. Automatische Protokollierung gibt sie zur\u00fcck: Elium sparte nach dem Wechsel zu hubsell rund 20 Stunden pro Woche.',
        },
        {
          title: 'Anrufe als CRM-Aufgaben',
          body: 'Telefon-Schritte erzeugen Aufgaben, die Ihre Vertriebsmitarbeiter im CRM erledigen. hubsell hat keinen eigenen Dialer und braucht auch keinen: Der Anruf passiert dort, wo der Datensatz liegt.',
        },
      ],
      proofEyebrow: 'Beleg',
      proofTitle: 'Was automatische Protokollierung ver\u00e4ndert',
      quoteSlug: 'spryker',
      storySlug: 'elium',
      storyLabel: 'Zur Elium-Story',
      faqEyebrow: 'FAQ',
      faqTitle: 'H\u00e4ufige Fragen zu CRM-Sync',
      faqSlugs: ['hubsell-crm-integration', 'hubsell-replace-outbound-stack'],
      closing: {
        titlePre: 'Versorgen Sie Ihr CRM ', titleAccent: 'automatisch', titlePost: '.',
        sub: 'Zeigen Sie uns Ihr CRM-Setup in einem kurzen Gespr\u00e4ch und wir gehen gemeinsam durch, was hubsell wo protokolliert.',
      },
      closingCta: 'Demo buchen',
    },
  ],
};
