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
{
      "path": "/platform/deliverability",
      "title": "Deliverability: im Posteingang landen, nicht im Spam-Ordner | hubsell",
      "metaDescription": "hubsell sendet aus Ihren eigenen Postf\u00e4chern \u00fcber die Google- und Microsoft-APIs, verifiziert jeden Kontakt an der Quelle und taktet das Volumen, sodass Ihr Outreach den Posteingang erreicht.",
      "eyebrow": "Deliverability",
      "h1Pre": "Den ",
      "h1Accent": "Posteingang",
      "h1Post": " erreichen, nicht den Spam-Ordner",
      "sub": "Gutes Targeting bringt nichts, wenn die Nachricht nie ankommt. hubsell sch\u00fctzt den ganzen Weg zum Posteingang: verifizierte Kontakte, authentifiziertes Senden aus Ihren eigenen Postf\u00e4chern und ein Volumen, das getaktet ist, damit Ihre Reputation intakt bleibt.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Gesendet, wie ",
            "titleAccent": "Posteing\u00e4nge es vertrauen",
            "titlePost": "",
            "points": [
                  "E-Mails senden \u00fcber die Google- und Microsoft-APIs, direkt aus Ihren eigenen Postf\u00e4chern, ohne externen Relay im Weg.",
                  "Jeder Kontakt wird im Moment der Recherche verifiziert, catch-all-Domains markiert, sodass Bounces niedrig bleiben.",
                  "Das Volumen verteilt sich innerhalb sicherer Limits auf Ihre Absenderprofile, sodass eine neue Domain nie in einen Filter geblasen wird."
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
                  "body": "Jede Adresse wird am Punkt der Nutzung gepr\u00fcft, nicht aus einer vor Monaten erfassten Liste gezogen. Catch-all-Domains werden vor dem Senden markiert, sodass Sie Credits f\u00fcr Kontakte ausgeben, die Mail tats\u00e4chlich empfangen k\u00f6nnen."
            },
            {
                  "title": "Aus Ihren Postf\u00e4chern gesendet",
                  "body": "Outreach geht \u00fcber die Google- und Microsoft-APIs direkt aus Ihren eigenen Konten. Es gibt keinen Drittserver im Weg, dem Filter misstrauen k\u00f6nnten, sodass Ihr Senden aussieht wie das, was es ist: echte Mail von einer echten Person."
            },
            {
                  "title": "Authentifizierung richtig gemacht",
                  "body": "SPF, DKIM und DMARC sind die Pr\u00fcfungen, mit denen Anbieter entscheiden, ob Mail wirklich von Ihnen stammt. hubsell leitet Sie an, alle drei korrekt zu setzen, sodass Ihre Domain besteht und Ihre Nachrichten vertraut werden."
            },
            {
                  "title": "Getaktet, nicht geblasen",
                  "body": "Das Volumen verteilt sich auf Absenderprofile und wird innerhalb sicherer Limits hochgefahren. Eine neue Domain w\u00e4rmt sich auf, statt zu spiken, sodass Sie Reputation aufbauen, statt sie beim ersten Senden zu verbrennen."
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
            "titlePre": "Sehen Sie Ihre ",
            "titleAccent": "Inbox-Platzierung",
            "titlePost": ", nicht nur Ihre \u00d6ffnungsrate.",
            "sub": "Bringen Sie Ihr aktuelles Sende-Setup in ein kurzes Gespr\u00e4ch, und wir zeigen Ihnen, wo Ihre Mail tats\u00e4chlich landet und warum."
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
      "sub": "Generische Mail wird ignoriert. hubsell baut jede Nachricht aus Live-Signalen und verifizierten Daten \u00fcber die Person und den Account, sodass Outreach sich liest, als w\u00e4re er f\u00fcr sie geschrieben, selbst wenn Sie ihn an Tausende senden.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Geschrieben f\u00fcr die ",
            "titleAccent": "Person und den Moment",
            "titlePost": "",
            "points": [
                  "F\u00fcgen Sie echte Details \u00fcber die Person, das Unternehmen und das, was sie gerade tun, ein, nicht nur einen Vornamen.",
                  "Live-Signale wie ein Jobwechsel, ein Hiring-Schub oder Event-Aktivit\u00e4t geben jeder Nachricht einen Grund zu existieren.",
                  "Derselbe Flow personalisiert einen Kontakt oder zehntausend, sodass Relevanz Sie keine Reichweite kostet."
            ],
            "embed": "09-personalization",
            "stepEyebrow": "So funktioniert es",
            "stepTitle": "Vom Live-Signal zur passenden Nachricht"
      },
      "gridTitlePre": "Relevanz, die ",
      "gridTitleAccent": "mit Ihnen skaliert",
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
                  "body": "Von Hand zu personalisieren skaliert nicht, und Serienbrieffelder wirken hohl. hubsell h\u00e4lt jede Nachricht relevant, ob Sie zehn oder zehntausend senden, sodass Reichweite und Relevanz nicht mehr gegeneinander ziehen."
            },
            {
                  "title": "Korrekte Daten darunter",
                  "body": "Personalisierung ist nur so gut wie die Daten dahinter. Weil jeder Kontakt an der Quelle verifiziert ist, stimmen die Details, auf die Sie verweisen, sodass eine personalisierte Zeile nie als Falsches-Unternehmen-Fehler landet."
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
            "titlePre": "Sehen Sie Outreach, der sich ",
            "titleAccent": "pers\u00f6nlich liest",
            "titlePost": ", im gro\u00dfen Ma\u00dfstab.",
            "sub": "Zeigen Sie uns Ihre Zielgruppe in einem kurzen Gespr\u00e4ch, und wir entwerfen, wie personalisierter Outreach im gro\u00dfen Ma\u00dfstab daf\u00fcr aussieht."
      },
      "closingCta": "Demo buchen"
},
{
      "path": "/platform/enrichment",
      "title": "Data Enrichment: vollst\u00e4ndige, verifizierte Kontaktdatens\u00e4tze | hubsell",
      "metaDescription": "hubsell reichert jeden Kontakt aus mehreren Live-Quellen an und verifiziert das Ergebnis am Punkt der Nutzung, sodass Sie vollst\u00e4ndige, aktuelle Datens\u00e4tze erhalten statt halbleerer Zeilen.",
      "eyebrow": "Enrichment",
      "h1Pre": "Vollst\u00e4ndige Datens\u00e4tze, ",
      "h1Accent": "heute verifiziert",
      "h1Post": "",
      "sub": "Ein halb gef\u00fcllter Kontaktdatensatz bremst Outreach. hubsell reichert jeden Kontakt aus mehreren Live-Quellen an und verifiziert das Ergebnis in dem Moment, in dem Sie es nutzen, sodass Sie aus vollst\u00e4ndigen, aktuellen Daten arbeiten statt aus L\u00fccken.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Gef\u00fcllt aus ",
            "titleAccent": "mehreren Live-Quellen",
            "titlePost": "",
            "points": [
                  "Jeder Datensatz wird gebaut, indem der Reihe nach mehrere Quellen genutzt werden, sodass eine L\u00fccke in der einen von einer anderen gef\u00fcllt wird.",
                  "Gesch\u00e4ftliche E-Mail, Telefon, Rolle und Unternehmensdetails kommen zu einem vollst\u00e4ndigen Kontakt zusammen, nicht zu einem Streu halber Zeilen.",
                  "Der fertige Datensatz wird am Punkt der Nutzung verifiziert, sodass das, wohin Sie senden, am Tag der Nutzung korrekt ist."
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
                  "body": "Enrichment ohne Verifizierung f\u00fcllt Felder nur mit veralteten Vermutungen. hubsell pr\u00fcft den fertigen Datensatz in dem Moment, in dem Sie ihn nutzen, catch-all-Domains inklusive, sodass ein vollst\u00e4ndiger Datensatz auch ein korrekter ist."
            },
            {
                  "title": "Keine verfallende Datenbank",
                  "body": "Eine statische angereicherte Liste beginnt am Tag ihrer Erstellung zu verrotten. hubsell reichert live an, an dem Tag, an dem Sie fragen, sodass Sie nicht daf\u00fcr zahlen, Datens\u00e4tze aufzuf\u00fcllen, die vor Jahren erfasst wurden und seither abgedriftet sind."
            },
            {
                  "title": "Bereit f\u00fcr Outreach",
                  "body": "Ein vollst\u00e4ndiger, verifizierter Datensatz flie\u00dft direkt in Ihre Sequenzen und Ihr CRM. Es gibt keinen Export, keinen Bereinigungsdurchlauf, kein zweites Tool, sodass die Daten, die Sie anreichern, die Daten sind, an die Sie senden."
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
            "titlePre": "Sehen Sie Ihre Liste ",
            "titleAccent": "gef\u00fcllt und verifiziert",
            "titlePost": ".",
            "sub": "Senden Sie uns in einem kurzen Gespr\u00e4ch eine Stichprobe Ihrer Daten, und wir zeigen Ihnen, was Live-Enrichment daf\u00fcr zur\u00fcckgibt."
      },
      "closingCta": "Demo buchen"
}
  ],
};
