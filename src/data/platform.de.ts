// German copy for the /platform pages. Mirrors platform-content.ts exactly in
// structure; register is third person with no direct address (since 2026-10-12), brand stays lowercase "hubsell", technical
// terms (CRM, LinkedIn, ICP, InMail, DMs) stay English, German number formatting.
import type { PlatformData } from './platform-content';

export const platformDe: PlatformData = {
  overview: {
    title: 'Die hubsell-Plattform: Live-Daten, Multichannel-Outreach und CRM-Sync',
    metaDescription: 'Eine Plattform, die B2B-Kontakte live recherchiert, E-Mail-, LinkedIn- und Telefon-Outreach in einem Ablauf betreibt und alles automatisch im CRM protokolliert.',
    eyebrow: 'Die Plattform',
    h1Pre: 'Die Arbeit von sechs Tools. ', h1Accent: 'Eine Plattform', h1Post: '.',
    sub: 'hubsell ersetzt die einzelnen Tools f\u00fcr Daten, Enrichment, Sequencer, Deliverability, Dialer und CRM-Sync durch ein System: Live-Daten, Multichannel-Outreach und automatische CRM-Synchronisierung.',
    demoCta: 'Demo buchen',
    problemEyebrow: 'Das Problem',
    problemTitlePre: 'Die meisten Outbound-Stacks sind drei Abos, ', problemTitleAccent: 'notd\u00fcrftig verklebt', problemTitlePost: '.',
    problemBody: [
      'Daten aus dem ersten Tool veralten bereits, w\u00e4hrend das zweite Tool sie verschickt, und das dritte Tool erf\u00e4hrt nie von der Antwort. Jede \u00dcbergabe zwischen Tools ist eine CSV-Datei, eine Verz\u00f6gerung und eine Stelle, an der Daten verrotten.',
      'Das Team zahlt drei Rechnungen, um L\u00fccken zwischen den Tools zu schaffen. hubsell schlie\u00dft diese L\u00fccken, indem es die drei Aufgaben an einem Ort erledigt, auf einem Datenbestand, in Echtzeit.',
    ],
    capsEyebrow: 'Die drei F\u00e4higkeiten',
    capsTitle: 'Was die Plattform leistet',
    caps: [
      {
        eyebrow: 'Live-Daten',
        title: 'Recherchiert am Tag der Anfrage',
        body: 'hubsell verkauft keinen Zugang zu einer statischen Datenbank. Sobald das ICP definiert ist, recherchiert hubsell Kontakte live aus LinkedIn, passend zu den Kriterien und verifiziert am Punkt der Nutzung.',
        href: '/platform/live-data', linkLabel: 'Mehr zu Live-Daten',
        steps: ['Six live sources', 'Pooled into your ICP', 'Verified at the point of use'],
      },
      {
        eyebrow: 'Multichannel-Outreach',
        title: 'E-Mail, LinkedIn und Telefon in einem Flow',
        body: 'Eine koordinierte Sequenz \u00fcber alle drei Kan\u00e4le, mit Verzweigungen, die auf das Verhalten jedes Kontakts reagieren, und Versand, der sicher \u00fcber die Profile des Teams verteilt wird.',
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
    resultsTitle: 'Was eine Plattform bringt',
    results: [
      {
        title: 'Effizienz',
        body: 'Ein Login, eine Rechnung, keine CSV-Exporte zwischen Tools. Das Team f\u00fchrt den gesamten Outbound-Prozess an einem Ort aus, statt drei Produkte von Hand zusammenzuhalten.',
      },
      {
        title: 'Ergebnisse',
        body: 'Frische Daten verbessern die Zustellbarkeit. Koordinierte Kan\u00e4le erh\u00f6hen die Antwortquoten. Automatische Protokollierung h\u00e4lt das Pipeline-Reporting ehrlich. Jeder Teil macht die anderen besser.',
      },
    ],
    proofEyebrow: 'Beleg',
    proofTitle: 'Teams, die gewechselt haben',
    ratingsLine: 'Bewertet mit 4,6+ auf G2, Capterra und GetApp.',
    quoteSlug: 'cibt',
    faqEyebrow: 'FAQ',
    faqTitle: 'H\u00e4ufige Fragen',
    faqSlugs: ['hubsell-replace-outbound-stack', 'hubsell-crm-integration', 'stop-sales-email-bounces'],
    closing: {
      titlePre: 'Die ganze Plattform ', titleAccent: 'in einem Gespr\u00e4ch', titlePost: '.',
      sub: 'In einem kurzen Gespr\u00e4ch geht hubsell den aktuellen Stack durch und zeigt, wie er als ein System aussieht.',
    },
    closingCta: 'Demo buchen',
  },

  details: [
    {
      path: '/platform/live-data',
      title: 'B2B-Datenanbieter mit DSGVO-konformen Live-Daten | hubsell',
      metaDescription: 'hubsell ist ein B2B-Datenanbieter, der Kontakte live recherchiert, passend zum ICP und am Punkt der Nutzung verifiziert. DSGVO-konforme B2B-Daten, gehostet in Frankfurt.',
      extra: {"title": "DSGVO-konforme B2B-Daten", "paras": ["hubsell hat seinen Sitz in Berlin und arbeitet nach der DSGVO. Die Plattform läuft auf Servern von Amazon Web Services in Frankfurt.", "Jeder Kunde kann den Auftragsverarbeitungsvertrag von hubsell abschließen. Er regelt, wie personenbezogene Daten verarbeitet werden, welche Unterauftragsverarbeiter damit arbeiten dürfen und wie Anfragen betroffener Personen beantwortet werden. Endet der Vertrag, werden die Daten im Konto innerhalb von 30 Tagen gelöscht.", "Kontakte werden für die jeweilige Anfrage recherchiert und nicht aus einer geteilten Liste weiterverkauft. Jeder Datensatz stammt aus einer selbst definierten Suche."], "links": [{"label": "Auftragsverarbeitungsvertrag lesen (Englisch)", "href": "/data-processing-agreement"}, {"label": "Leitfaden: B2B-Datenschutz und Kaltakquise (Englisch)", "href": "/insights/b2b-data-compliance"}, {"label": "Cognism-Alternative: der Vergleich", "href": "/vs/cognism"}, {"label": "ZoomInfo-Alternative: der Vergleich", "href": "/vs/zoominfo"}]},
      eyebrow: 'Live-Daten',
      h1Pre: 'B2B-Daten von ', h1Accent: 'heute', h1Post: ', nicht von vor zwei Jahren',
      sub: 'hubsell ist ein B2B-Datenanbieter und verkauft keinen Zugang zu einer statischen Datenbank. hubsell recherchiert Kontakte passend zum ICP live aus LinkedIn, ergänzt Kaufsignale und verifiziert jeden Datensatz, bevor er in den Flow gelangt.',
      demoCta: 'Demo buchen',
      heroTimeline: true,
      row: {
        titlePre: 'Recherchiert aus ', titleAccent: 'echten Kaufsignalen', titlePost: '',
        points: [
          'Bei den meisten Plattformen l\u00e4sst sich nach Titel und Branche filtern. hubsell liest auch das Verhalten.',
          'Personen, die einer Unternehmensseite folgen, mit einem LinkedIn-Post interagieren, den Job wechseln, Events besuchen oder f\u00fcr bestimmte Rollen einstellen.',
          'Signale zeigen, wen das Team diese Woche kontaktieren sollte, nicht nur, wer zu einem Filter passt.',
        ],
        embed: '05-sp-widget',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Vom Live-Signal zum verifizierten Kontakt',
      },
      gridTitlePre: 'B2B-Kontaktdaten, die ', gridTitleAccent: 'am Tag der Nutzung korrekt sind', gridTitlePost: '',
      blocks: [
        {
          title: 'Zero-Day-Sourcing',
          body: 'Eine ma\u00dfgeschneiderte Datenbank, erstellt im Moment der Anfrage, keine geteilte Liste von vor Jahren. Frisch von diesem Tag, mit 80 bis 90% Abdeckung des Zielmarkts.',
        },
        {
          title: 'Passend zum ICP',
          body: 'Das ideale Kundenprofil wird einmal definiert. Jeder Kontakt, der in den Flow gelangt, wird daran gepr\u00fcft, bevor ein einziger Credit f\u00fcr Outreach ausgegeben wird.',
        },
        {
          title: 'Verifiziert am Punkt der Nutzung',
          body: 'Jeder Datensatz wird im Moment der Recherche gepr\u00fcft, Catch-all-Domains inklusive. Bounces bleiben niedrig und die Absenderreputation bleibt intakt.',
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
        titlePre: 'Den eigenen Markt sehen, recherchiert ', titleAccent: 'heute', titlePost: '.',
        sub: 'In einem kurzen Gespr\u00e4ch zeigt hubsell anhand des ICP, was Zero-Day-Sourcing daf\u00fcr liefert.',
      },
      closingCta: 'Demo buchen',
    },

    {
      path: '/platform/multichannel-outreach',
      title: 'Multichannel-Outreach-Plattform: E-Mail, LinkedIn und Telefon | hubsell',
      metaDescription: 'hubsell f\u00fchrt E-Mail, LinkedIn und Telefon als eine koordinierte Sequenz aus. Verzweigte Flows, sichere Versandlimits und Outreach von den Profilen, die K\u00e4ufer wirklich akzeptieren.',
      eyebrow: 'Multichannel-Outreach',
      h1Pre: 'Multichannel-Outreach über ', h1Accent: 'E-Mail, LinkedIn und Telefon', h1Post: '',
      sub: 'Schluss mit dem Jonglieren zwischen E-Mail-Tool, LinkedIn-Tool und Aufgabenliste. hubsell f\u00fchrt alle drei Kan\u00e4le als eine koordinierte Sequenz aus, die auf das Verhalten jedes Kontakts reagiert.',
      demoCta: 'Demo buchen',
      row: {
        titlePre: 'Eine Multichannel-Outreach-Plattform, ', titleAccent: 'nicht drei Tools', titlePost: '',
        points: [
          'E-Mail-, LinkedIn- und Telefon-Schritte lassen sich per Drag-and-drop in einen einzigen Flow ziehen.',
          'Profilbesuche, Kontaktanfragen, DMs, InMail und Anrufaufgaben, alles abgestimmt auf die E-Mail-Kadenz.',
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
          body: 'E-Mails werden \u00fcber die Google- und Microsoft-APIs direkt aus den eigenen Postf\u00e4chern versendet, ohne externe Server dazwischen. \u00d6ffnungsraten bleiben ehrlich und Spamfilter bleiben ruhig.',
        },
        {
          title: 'Sicherer Versand, verteilt',
          body: 'Outreach wird auf 5 bis 10 interne Absenderprofile verteilt, innerhalb strikter Plattformlimits. Weniger Volumen pro Absender, h\u00f6here Zustellbarkeit, keine besch\u00e4digte Domain. Die LinkedIn-Automatisierung läuft mit sicheren Tageslimits für jedes Profil.',
        },
        {
          title: 'Versendet von den richtigen Profilen',
          body: 'Kontaktanfragen von SDRs liegen unter 20% Annahmequote, weil K\u00e4ufer einen Pitch erwarten. Dieselbe Anfrage von einem Gr\u00fcnder oder Fachexperten liegt \u00fcber 50%. hubsell betreibt Outreach von den Profilen, die K\u00e4ufer akzeptieren.',
        },
        {
          title: 'Anrufe dort, wo das Team arbeitet',
          body: 'Telefon-Schritte landen als Anrufaufgaben in Salesforce, HubSpot oder Pipedrive. Die Vertriebsmitarbeiter telefonieren aus dem CRM, das sie bereits nutzen, und das Ergebnis wird mit dem Rest der Sequenz protokolliert.',
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
        sub: 'In einem kurzen Gespr\u00e4ch \u00fcbersetzt hubsell eine aktuelle Kampagne in eine einzige hubsell-Sequenz.',
      },
      closingCta: 'Demo buchen',
    },

    {
      path: '/platform/crm-sync',
      title: 'Automatischer CRM-Sync f\u00fcr Salesforce, HubSpot und Pipedrive | hubsell',
      metaDescription: 'Jedes Senden, \u00d6ffnen, Antworten und Vernetzen wird automatisch in Salesforce, HubSpot oder Pipedrive protokolliert. Keine manuelle Eingabe, kein Datenverfall, keine verlorene Aktivit\u00e4t.',
      extra: {"title": "Integration mit Salesforce, HubSpot und Pipedrive", "paras": ["hubsell synchronisiert nativ und in beide Richtungen mit Salesforce, HubSpot und Pipedrive.", "LinkedIn-Aktivität wird in jedem dieser CRMs genauso protokolliert wie E-Mail. Vernetzungsanfragen, Profilaufrufe und Antworten erscheinen am Kontaktdatensatz, sobald sie passieren, neben E-Mail-Ereignissen und Anrufaufgaben."], "links": [{"label": "Alle Integrationen ansehen", "href": "/integrations"}]},
      eyebrow: 'CRM-Sync',
      h1Pre: 'Automatischer CRM-Sync. ', h1Accent: 'Das CRM, immer aktuell', h1Post: '.',
      sub: 'hubsell ersetzt das bestehende System of Record nicht, es versorgt es. Jeder Touchpoint \u00fcber E-Mail, LinkedIn und Telefon landet im CRM, sobald er passiert.',
      demoCta: 'Demo buchen',
      row: {
        titlePre: 'Protokolliert, ', titleAccent: 'sobald es passiert', titlePost: '',
        points: [
          'Jeder Touchpoint, gesendet, ge\u00f6ffnet, beantwortet, vernetzt, wird automatisch in Salesforce, HubSpot oder Pipedrive protokolliert.',
          'Kontaktanfragen, Profilbesuche und Anrufergebnisse landen mit derselben Pr\u00e4zision wie E-Mail-Ereignisse.',
          'Keine manuelle Eingabe. Kein Datenverfall. Das Team arbeitet an der Pipeline, nicht an der Tabelle.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Von der Aktivit\u00e4t zum synchronisierten Datensatz',
      },
      gridTitlePre: 'Ein System of Record, dem das Team ', gridTitleAccent: 'endlich vertrauen kann', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot und Pipedrive',
          body: 'Native Zwei-Wege-Synchronisierung mit den drei CRMs, in Echtzeit. Keine Middleware, keine CSV-Exporte, keine n\u00e4chtlichen Jobs.',
        },
        {
          title: 'Reporting bleibt ehrlich',
          body: 'Wenn jede Aktivit\u00e4t im Moment des Geschehens protokolliert wird, zeigt das Pipeline-Reporting die Realit\u00e4t, nicht das, was Vertriebsmitarbeiter noch eintippen wollten.',
        },
        {
          title: 'Jede Woche Stunden zur\u00fcck',
          body: 'Manuelle CRM-Eingabe frisst leise Verkaufszeit. Automatische Protokollierung gibt sie zur\u00fcck: Elium sparte nach dem Wechsel zu hubsell rund 20 Stunden pro Woche.',
        },
        {
          title: 'Anrufe als CRM-Aufgaben',
          body: 'Telefon-Schritte erzeugen Aufgaben, die Vertriebsmitarbeiter im CRM erledigen. hubsell hat keinen eigenen Dialer und braucht auch keinen: Der Anruf passiert dort, wo der Datensatz liegt.',
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
        titlePre: 'Das CRM ', titleAccent: 'automatisch', titlePost: ' versorgen.',
        sub: 'In einem kurzen Gespr\u00e4ch geht hubsell anhand des bestehenden CRM-Setups durch, was wo protokolliert wird.',
      },
      closingCta: 'Demo buchen',
    },
{
      "path": "/platform/deliverability",
      "title": "E-Mail-Zustellbarkeit: Posteingang statt Spam-Ordner | hubsell",
      "metaDescription": "E-Mail-Zustellbarkeit mit hubsell: Versand aus den eigenen Postfächern über die Google- und Microsoft-APIs, verifizierte Kontakte und getaktetes Volumen für den Posteingang.",
      "eyebrow": "Deliverability",
      "h1Pre": "E-Mail-Zustellbarkeit: den ",
      "h1Accent": "Posteingang",
      "h1Post": " erreichen, nicht den Spam-Ordner",
      "sub": "Gutes Targeting bringt nichts, wenn die Nachricht nie ankommt. hubsell sch\u00fctzt den ganzen Weg zum Posteingang: verifizierte Kontakte, authentifiziertes Senden aus den eigenen Postf\u00e4chern und ein Volumen, das getaktet ist, damit die Reputation intakt bleibt.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Gesendet, wie ",
            "titleAccent": "Posteing\u00e4nge es vertrauen",
            "titlePost": "",
            "points": [
                  "E-Mails senden \u00fcber die Google- und Microsoft-APIs, direkt aus den eigenen Postf\u00e4chern, ohne externen Relay im Weg.",
                  "Jeder Kontakt wird im Moment der Recherche verifiziert, catch-all-Domains markiert, sodass Bounces niedrig bleiben.",
                  "Das Volumen verteilt sich innerhalb sicherer Limits auf die Absenderprofile, sodass eine neue Domain nie in einen Filter geblasen wird."
            ],
            "embed": "08-deliverability",
            "stepEyebrow": "So funktioniert es",
            "stepTitle": "Vom verifizierten Kontakt in den Posteingang"
      },
      "gridTitlePre": "Gebaut, um ",
      "gridTitleAccent": "zugestellt zu werden",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "An der Quelle verifiziert",
                  "body": "Jede Adresse wird am Punkt der Nutzung gepr\u00fcft, nicht aus einer vor Monaten erfassten Liste gezogen. Catch-all-Domains werden vor dem Senden markiert, sodass Credits f\u00fcr Kontakte ausgegeben werden, die Mail tats\u00e4chlich empfangen k\u00f6nnen."
            },
            {
                  "title": "Aus den eigenen Postf\u00e4chern gesendet",
                  "body": "Outreach geht \u00fcber die Google- und Microsoft-APIs direkt aus den eigenen Konten. Es gibt keinen Drittserver im Weg, dem Filter misstrauen k\u00f6nnten, sodass das Senden aussieht wie das, was es ist: echte Mail von einer echten Person."
            },
            {
                  "title": "Authentifizierung richtig gemacht",
                  "body": "SPF, DKIM und DMARC sind die Pr\u00fcfungen, mit denen Anbieter entscheiden, ob Mail wirklich vom Absender stammt. hubsell leitet an, alle drei korrekt zu setzen, sodass die Domain besteht und den Nachrichten vertraut wird."
            },
            {
                  "title": "Getaktet, nicht geblasen",
                  "body": "Das Volumen verteilt sich auf Absenderprofile und wird innerhalb sicherer Limits hochgefahren. Eine neue Domain w\u00e4rmt sich auf, statt zu spiken, sodass Reputation entsteht, statt beim ersten Senden zu verbrennen."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Was der Posteingang ver\u00e4ndert",
      "quoteSlug": "staffbase",
      "storySlug": "staffbase",
      "storyLabel": "Zur Staffbase-Story",
      "faqEyebrow": "FAQ",
      "faqTitle": "H\u00e4ufige Fragen zur Deliverability",
      "faqSlugs": [
            "stop-sales-email-bounces",
            "hubsell-email-infrastructure",
            "hubsell-catch-all-domains"
      ],
      "closing": {
            "titlePre": "Die ",
            "titleAccent": "Inbox-Platzierung",
            "titlePost": " sehen, nicht nur die \u00d6ffnungsrate.",
            "sub": "In einem kurzen Gespr\u00e4ch zeigt hubsell anhand des aktuellen Sende-Setups, wo die Mail tats\u00e4chlich landet und warum."
      },
      "closingCta": "Demo buchen"
},
{
      "path": "/platform/personalization",
      "title": "Personalisierung im gro\u00dfen Ma\u00dfstab: relevanter Outreach f\u00fcr jeden Kontakt | hubsell",
      "metaDescription": "hubsell personalisiert Outreach aus Live-Signalen und verifizierten Daten, sodass jede Nachricht f\u00fcr die Person und den Moment relevant ist, an Tausende gesendet, ohne die menschliche Note zu verlieren.",
      "eyebrow": "Personalisierung",
      "h1Pre": "Relevant f\u00fcr ",
      "h1Accent": "jeden Kontakt",
      "h1Post": ", bei jedem Volumen",
      "sub": "Generische Mail wird ignoriert. hubsell baut jede Nachricht aus Live-Signalen und verifizierten Daten \u00fcber die Person und den Account, sodass Outreach sich liest, als w\u00e4re er f\u00fcr sie geschrieben, selbst wenn er an Tausende geht.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Geschrieben f\u00fcr die ",
            "titleAccent": "Person und den Moment",
            "titlePost": "",
            "points": [
                  "Nachrichten enthalten echte Details \u00fcber die Person, das Unternehmen und das, was sie gerade tun, nicht nur einen Vornamen.",
                  "Live-Signale wie ein Jobwechsel, ein Hiring-Schub oder Event-Aktivit\u00e4t geben jeder Nachricht einen Grund zu existieren.",
                  "Derselbe Flow personalisiert einen Kontakt oder zehntausend, sodass Relevanz keine Reichweite kostet."
            ],
            "embed": "09-personalization",
            "stepEyebrow": "So funktioniert es",
            "stepTitle": "Vom Live-Signal zur passenden Nachricht"
      },
      "gridTitlePre": "Relevanz, die ",
      "gridTitleAccent": "mit dem Volumen skaliert",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Mehr als der Vorname",
                  "body": "Echte Personalisierung nutzt, was \u00fcber den Account wahr ist: die Rolle, das Unternehmen, den Moment. hubsell zieht aus verifizierten Daten und Live-Signalen, sodass eine Nachricht auf etwas verweist, das dem Leser tats\u00e4chlich wichtig ist."
            },
            {
                  "title": "Auf Live-Signalen gegr\u00fcndet",
                  "body": "Ein Jobwechsel, eine Finanzierungsrunde, ein Hiring-Schub oder Engagement zu einem Thema geben Outreach einen echten Anker. hubsell liest diese Signale und setzt sie ein, sodass die Nachricht mit einem Grund ankommt."
            },
            {
                  "title": "Konsistent bei Volumen",
                  "body": "Von Hand zu personalisieren skaliert nicht, und Serienbrieffelder wirken hohl. hubsell h\u00e4lt jede Nachricht relevant, ob zehn oder zehntausend gesendet werden, sodass Reichweite und Relevanz nicht mehr gegeneinander ziehen."
            },
            {
                  "title": "Korrekte Daten darunter",
                  "body": "Personalisierung ist nur so gut wie die Daten dahinter. Weil jeder Kontakt an der Quelle verifiziert ist, stimmen die Details, auf die eine Nachricht verweist, sodass eine personalisierte Zeile nie als Falsches-Unternehmen-Fehler landet."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Was echte Relevanz ver\u00e4ndert",
      "quoteSlug": "elium",
      "storySlug": "elium",
      "storyLabel": "Zur Elium-Story",
      "faqEyebrow": "FAQ",
      "faqTitle": "H\u00e4ufige Fragen zur Personalisierung",
      "faqSlugs": [
            "personalize-outreach-at-scale",
            "hubsell-conversion-rates"
      ],
      "closing": {
            "titlePre": "Outreach, der sich ",
            "titleAccent": "pers\u00f6nlich liest",
            "titlePost": ", im gro\u00dfen Ma\u00dfstab.",
            "sub": "In einem kurzen Gespr\u00e4ch entwirft hubsell anhand der Zielgruppe, wie personalisierter Outreach im gro\u00dfen Ma\u00dfstab daf\u00fcr aussieht."
      },
      "closingCta": "Demo buchen"
},
{
      "path": "/platform/enrichment",
      "title": "B2B-Kontaktdaten anreichern: vollständig und verifiziert | hubsell",
      "metaDescription": "hubsell reichert jeden Kontakt aus mehreren Live-Quellen an und verifiziert das Ergebnis am Punkt der Nutzung, sodass vollst\u00e4ndige, aktuelle Datens\u00e4tze entstehen statt halbleerer Zeilen.",
      "extra": {"title": "Verifizierte E-Mail-Adressen und Durchwahlen", "paras": ["Die Anreicherung füllt die beiden Felder, auf die Outreach am meisten angewiesen ist. Geschäftliche E-Mail-Adressen werden am Punkt der Nutzung verifiziert, Catch-all-Domains eingeschlossen, damit nur an Adressen gesendet wird, die Mail empfangen können.", "Telefonnummern, darunter Durchwahlen und Mobilnummern, sofern eine Quelle sie liefert, landen im selben Datensatz. So hat jede Anrufaufgabe eine Nummer."], "links": [{"label": "Lusha-Alternative: der Vergleich", "href": "/vs/lusha"}, {"label": "Seamless-Alternative: der Vergleich", "href": "/vs/seamless"}, {"label": "Apollo-Alternative: der Vergleich", "href": "/vs/apollo"}]},
      "eyebrow": "Enrichment",
      "h1Pre": "Kontaktdaten-Anreicherung, ",
      "h1Accent": "heute verifiziert",
      "h1Post": "",
      "sub": "Ein halb gef\u00fcllter Kontaktdatensatz bremst Outreach. hubsell reichert jeden Kontakt aus mehreren Live-Quellen an und verifiziert das Ergebnis im Moment der Nutzung, sodass das Team aus vollst\u00e4ndigen, aktuellen Daten arbeitet statt aus L\u00fccken.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Gef\u00fcllt aus ",
            "titleAccent": "mehreren Live-Quellen",
            "titlePost": "",
            "points": [
                  "Jeder Datensatz wird gebaut, indem der Reihe nach mehrere Quellen genutzt werden, sodass eine L\u00fccke in der einen von einer anderen gef\u00fcllt wird.",
                  "Gesch\u00e4ftliche E-Mail, Telefon, Rolle und Unternehmensdetails kommen zu einem vollst\u00e4ndigen Kontakt zusammen, nicht zu einem Streu halber Zeilen.",
                  "Der fertige Datensatz wird am Punkt der Nutzung verifiziert, sodass jede Zieladresse am Tag der Nutzung korrekt ist."
            ],
            "embed": "10-enrichment",
            "stepEyebrow": "So funktioniert es",
            "stepTitle": "Von der Teilzeile zum vollst\u00e4ndigen, verifizierten Datensatz"
      },
      "gridTitlePre": "Datens\u00e4tze, die ",
      "gridTitleAccent": "vollst\u00e4ndig und aktuell sind",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Mehrere Quellen, ein Datensatz",
                  "body": "hubsell nutzt der Reihe nach mehrere Live-Quellen, sodass eine andere die L\u00fccke f\u00fcllt, wo eine zu kurz kommt. Das Ergebnis ist ein vollst\u00e4ndiger Kontakt statt einer Zeile mit fehlenden wichtigen Feldern."
            },
            {
                  "title": "Am Punkt der Nutzung verifiziert",
                  "body": "Enrichment ohne Verifizierung f\u00fcllt Felder nur mit veralteten Vermutungen. hubsell pr\u00fcft den fertigen Datensatz im Moment der Nutzung, catch-all-Domains inklusive, sodass ein vollst\u00e4ndiger Datensatz auch ein korrekter ist."
            },
            {
                  "title": "Keine verfallende Datenbank",
                  "body": "Eine statische angereicherte Liste beginnt am Tag ihrer Erstellung zu verrotten. hubsell reichert live an, am Tag der Anfrage, sodass niemand daf\u00fcr zahlt, Datens\u00e4tze aufzuf\u00fcllen, die vor Jahren erfasst wurden und seither abgedriftet sind."
            },
            {
                  "title": "Bereit f\u00fcr Outreach",
                  "body": "Ein vollst\u00e4ndiger, verifizierter Datensatz flie\u00dft direkt in die Sequenzen und das CRM. Es gibt keinen Export, keinen Bereinigungsdurchlauf, kein zweites Tool, sodass die angereicherten Daten genau die Daten sind, an die gesendet wird."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Was vollst\u00e4ndige Daten ver\u00e4ndern",
      "quoteSlug": "verhaert",
      "storySlug": "verhaert",
      "storyLabel": "Zur Verhaert-Story",
      "faqEyebrow": "FAQ",
      "faqTitle": "H\u00e4ufige Fragen zum Enrichment",
      "faqSlugs": [
            "build-b2b-audience-no-decay",
            "third-party-intent-data-accuracy"
      ],
      "closing": {
            "titlePre": "Die eigene Liste ",
            "titleAccent": "gef\u00fcllt und verifiziert",
            "titlePost": " sehen.",
            "sub": "In einem kurzen Gespr\u00e4ch zeigt hubsell anhand einer Datenstichprobe, was Live-Enrichment daf\u00fcr zur\u00fcckgibt."
      },
      "closingCta": "Demo buchen"
}
  ],
};
