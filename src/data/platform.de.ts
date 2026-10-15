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
        body: 'Ein koordinierter Flow \u00fcber alle drei Kan\u00e4le, mit Verzweigungen, die auf das Verhalten jedes Kontakts reagieren, und Versand, der sicher \u00fcber die Profile des Teams verteilt wird.',
        href: '/platform/multichannel-outreach', linkLabel: 'Mehr zu Multichannel-Outreach',
        steps: ['One flow, not three tools', 'Email, LinkedIn, and phone', 'Reacts to what they do'],
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
      heroSlice: "live-data",
      compare: {"eyebrow": "B2B-Datenanbieter", "titlePre": "B2B-Kontaktdatenbank gegenüber ", "titleAccent": "live recherchierten B2B-Daten", "titlePost": "", "colA": "Gekaufte Datenbank", "colB": "hubsell Live-Daten", "rows": [["Erfasst", "Monate oder Jahre vor der Nutzung", "Am Tag der Anfrage"], ["Alterung", "25 bis 30 % veralten jedes Jahr", "Für jede Anfrage neu recherchiert, nichts liegt herum und altert"], ["Genauigkeit", "Unbekannt, bis die Bounces kommen", "95 %, Catch-all-Domains eingeschlossen, am Punkt der Nutzung verifiziert"], ["Relevanz", "Gefiltert nach Titel und Branche", "Passend zum ICP und zu den gewählten Kaufsignalen"], ["Bezahlt wird", "Zugang zur ganzen Datenbank, genutzt oder nicht", "Verarbeitungsergebnisse, Schritt für Schritt, für die behaltenen Kontakte"], ["Wer die Daten kontrolliert", "Der Anbieter behält sie und verkauft sie weiter", "Der Kunde ist Verantwortlicher, hubsell Auftragsverarbeiter"]]},
      heads: {"signals": {"eyebrow": "Kaufsignale", "pre": "Sechs Wege zu ", "accent": "B2B-Kontakten aus Kaufsignalen", "post": ""}, "steps": {"eyebrow": "Zero-Day-Sourcing", "pre": "So funktioniert die ", "accent": "Live-Recherche von B2B-Daten", "post": ""}, "extra": {"eyebrow": "DSGVO", "pre": "", "accent": "DSGVO-konforme", "post": " B2B-Daten"}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "genaue B2B-Daten", "post": " verändern"}, "closing": {"eyebrow": "Akquise-Tool", "pre": "B2B-Akquise mit ", "accent": "Daten von heute", "post": " starten"}, "faq": {"eyebrow": "FAQ zu B2B-Daten", "pre": "Fragen zu ", "accent": "live recherchierten B2B-Daten", "post": ""}, "explained": {"eyebrow": "LinkedIn-Akquise", "pre": "LinkedIn-Akquise, ", "accent": "Signal für Signal", "post": ""}},
      signals: {"sub": "Jedes Signal startet mit einem Link, einer Suche oder dem ICP. hubsell sammelt die Personen, gleicht sie mit dem ICP ab und reichert die passenden an, bereit für den Outreach.", "startLabel": "Startpunkt", "items": [{"id": "post", "title": "Interaktionen mit LinkedIn-Beiträgen", "body": "Wer auf einen LinkedIn-Beitrag reagiert, ihn kommentiert oder teilt, hat bereits Interesse am Thema gezeigt. hubsell sammelt diese Personen aus dem Beitrag, gleicht jede mit dem ICP ab und reichert die passenden an. Das funktioniert mit eigenen Beiträgen, denen eines Wettbewerbers oder einer bekannten Stimme der Branche.", "start": "Ein Link zu einem beliebigen LinkedIn-Beitrag"}, {"id": "event", "title": "Teilnehmende an LinkedIn-Events", "body": "Wer sich für ein LinkedIn-Event anmeldet, hat sich für ein Thema entschieden. hubsell sammelt die Teilnehmerliste, qualifiziert sie gegen den ICP und reichert die passenden Kontakte an, für die Ansprache vor, während oder nach dem Event.", "start": "Ein Link zu einem LinkedIn-Event"}, {"id": "followers", "title": "Follower des Unternehmens und von Wettbewerbern", "body": "Wer der eigenen Unternehmensseite folgt, kennt das Unternehmen bereits. Wer der Seite eines Wettbewerbers folgt, interessiert sich für das, was verkauft wird. hubsell sammelt beide Gruppen und behält nur die Personen, die zum ICP passen.", "start": "Die eigene Unternehmensseite oder die eines Wettbewerbers"}, {"id": "jobs", "title": "Jobwechsel", "body": "Wer neu in einer Rolle ist, baut Stack und Team gerade auf. Die ersten Monate sind deshalb der beste Zeitpunkt für die Ansprache. hubsell findet Personen, die in den Zielaccounts und Zielrollen kürzlich den Job gewechselt haben.", "start": "Der ICP: Rollen und Zielunternehmen"}, {"id": "hiring", "title": "Unternehmen, die bestimmte Rollen besetzen", "body": "Ein Unternehmen, das SDRs oder Account Executives einstellt, investiert gerade in den Vertrieb. hubsell nimmt eine LinkedIn-Suche mit dem Filter für einstellende Unternehmen und findet dort die Entscheider.", "start": "Eine LinkedIn-Suche mit dem Einstellungsfilter"}, {"id": "search", "title": "LinkedIn- und Sales-Navigator-Suchen", "body": "Wer die Zielgruppe schon kennt, fügt eine LinkedIn-Personensuche oder eine Lead-Suche aus dem Sales Navigator ein. hubsell führt sie aus, qualifiziert die Ergebnisse mit KI und reichert die passenden an, ohne manuellen Listenexport.", "start": "Ein Link zu einer LinkedIn- oder Sales-Navigator-Suche"}]},
      faqs: [{"question": "Was sind live recherchierte B2B-Daten, und worin unterscheiden sie sich von einer B2B-Kontaktdatenbank?", "answer": "<p>Live recherchierte Daten werden im Moment der Anfrage für die jeweilige Suche erhoben, statt aus einer Datenbank zu stammen, die vor Monaten oder Jahren erfasst wurde. hubsell erstellt für jede Anfrage einen neuen Satz an Kontakten, passend zum ICP und am Punkt der Nutzung verifiziert. Eine Kontaktdatenbank verkauft Zugang zu Datensätzen, die seit dem Tag ihrer Erfassung altern.</p>"}, {"question": "Wie schnell veralten B2B-Kontaktdaten?", "answer": "<p>Entscheider im B2B wechseln etwa alle 2,5 Jahre den Job. Eine statische Datenbank verliert dadurch jedes Jahr 25 bis 30 % ihrer Genauigkeit: E-Mails bouncen, Titel ändern sich, Personen wechseln das Unternehmen. Daten, die am Tag der Nutzung recherchiert werden, umgehen diesen Verfall.</p>"}, {"question": "Woher stammen die B2B-Daten von hubsell?", "answer": "<p>hubsell recherchiert Daten live aus LinkedIn und von Unternehmenswebsites und erzeugt Daten selbst, etwa durch das Generieren und Validieren geschäftlicher E-Mail-Adressen. Telefonnummern stammen von Partnern, die nach Genauigkeit und Qualität ausgewählt sind, nicht nach Preis.</p>"}, {"question": "Sind die B2B-Daten von hubsell DSGVO-konform?", "answer": "<p>Ja. hubsell recherchiert und verarbeitet Daten ad hoc für jeden Kunden und hält sie nicht zum Weiterverkauf vor. Der Kunde ist Verantwortlicher, hubsell Auftragsverarbeiter, auf Grundlage eines Auftragsverarbeitungsvertrags. hubsell hat seinen Sitz in Berlin, betreibt die Plattform auf Servern in Frankfurt und löscht Kontodaten innerhalb von 30 Tagen nach Vertragsende.</p>"}, {"question": "Welche Rechtsgrundlage gilt für B2B-Outreach nach der DSGVO?", "answer": "<p>Für die Ansprache von Geschäftskontakten ist das in der Regel das berechtigte Interesse. Bei hubsell bleibt der Kunde Verantwortlicher und legt den Zweck fest, bevor der erste Kontakt recherchiert wird. hubsell verarbeitet die Daten nur für diesen Zweck. Die Regeln für Kaltakquise per E-Mail unterscheiden sich je nach Land, mehr dazu im <a class=\"link\" href=\"/insights/b2b-data-compliance/\">Leitfaden zu B2B-Datenschutz (Englisch)</a>.</p>"}, {"question": "Aus welchen Kaufsignalen kann hubsell Kontakte recherchieren?", "answer": "<p>hubsell recherchiert Personen, die mit einem LinkedIn-Beitrag interagiert haben, an einem LinkedIn-Event teilnehmen, der eigenen Unternehmensseite oder der eines Wettbewerbers folgen, kürzlich den Job gewechselt haben oder bei Firmen arbeiten, die bestimmte Rollen besetzen. Startpunkt kann auch eine LinkedIn- oder Sales-Navigator-Suche oder eine eigene Liste sein.</p>"}, {"question": "Wie findet hubsell die Personen, die mit einem LinkedIn-Beitrag interagiert oder ein Event besucht haben?", "answer": "<p>Der Link zum Beitrag oder Event wird in hubsell eingefügt. hubsell sammelt die Personen, die reagiert, kommentiert oder sich angemeldet haben, gleicht sie mit dem ICP ab und reichert die passenden mit verifizierten Kontaktdaten an. Danach können sie direkt in einen Flow aus LinkedIn, E-Mail und Anrufaufgaben.</p>"}, {"question": "Wie genau sind die Kontaktdaten von hubsell?", "answer": "<p>Die Daten von hubsell sind zu 95 % genau, Catch-all-Domains eingeschlossen, und decken 80 bis 90 % eines Zielmarkts ab. Jeder Datensatz wird am Punkt der Nutzung verifiziert, nicht bei der ersten Erfassung. hubsell führt gern einen Vergleichstest mit dem aktuellen Anbieter durch.</p>"}, {"question": "Wie berechnet hubsell Daten, und wird für unbrauchbare Kontakte gezahlt?", "answer": "<p>Bezahlt werden Verarbeitungsergebnisse, Schritt für Schritt: Recherche, dann Anreicherung, validierte E-Mail-Adressen und Telefonnummern. Weil jeder Schritt einzeln berechnet wird, lassen sich die recherchierten Kontakte zuerst prüfen und unpassende ausschließen. Angereichert und bezahlt werden nur die Kontakte, die behalten werden. Mehr dazu unter <a class=\"link\" href=\"/de/pricing/\">Preise</a>.</p>"}, {"question": "Wie schneidet hubsell bei B2B-Daten gegenüber ZoomInfo, Apollo oder Cognism ab?", "answer": "<p>ZoomInfo, Apollo und Cognism verkaufen Zugang zu einer Datenbank. hubsell recherchiert Daten für jede Anfrage neu, sodass sie aktuell, gegen den ICP qualifiziert und relevant für die gewählten Signale sind. Dazu steuert hubsell den Outreach und synchronisiert ihn mit dem CRM, während diese Tools meist bei den Daten aufhören. Vergleiche: <a class=\"link\" href=\"/de/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/de/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/de/vs/cognism/\">Cognism</a>.</p>"}],
      extra: {"title": "DSGVO-konforme B2B-Daten", "paras": ["hubsell recherchiert und verarbeitet Daten ad hoc, für einen Zweck, der feststeht, bevor der erste Kontakt recherchiert wird, und hält sie nicht zum Weiterverkauf vor. Der Kunde bleibt Verantwortlicher, hubsell ist Auftragsverarbeiter. Ein Datenbankanbieter arbeitet umgekehrt: Er sammelt Daten, um sie weiterzuverkaufen.", "Die Ansprache von Geschäftskontakten stützt sich nach der DSGVO auf das berechtigte Interesse. hubsell hat seinen Sitz in Berlin, die Plattform läuft auf Servern von Amazon Web Services in Frankfurt.", "Jeder Kunde kann den Auftragsverarbeitungsvertrag von hubsell abschließen. Er regelt, wie personenbezogene Daten verarbeitet werden, welche Unterauftragsverarbeiter damit arbeiten dürfen und wie Anfragen betroffener Personen beantwortet werden. Endet der Vertrag, werden die Daten im Konto innerhalb von 30 Tagen gelöscht."], "links": [{"label": "Auftragsverarbeitungsvertrag lesen (Englisch)", "href": "/data-processing-agreement"}, {"label": "Leitfaden: B2B-Datenschutz und Kaltakquise (Englisch)", "href": "/insights/b2b-data-compliance"}]},
      eyebrow: 'Live-B2B-Daten',
      h1Pre: 'B2B-Daten von ', h1Accent: 'heute', h1Post: ', nicht von vor zwei Jahren',
      sub: 'hubsell ist ein B2B-Datenanbieter und verkauft keinen Zugang zu einer statischen Datenbank. hubsell recherchiert Kontakte passend zum ICP live aus LinkedIn, ergänzt Kaufsignale und verifiziert jeden Datensatz, bevor er in den Flow gelangt.',
      demoCta: 'Demo buchen',
      heroTimeline: true,
      row: {
        titlePre: 'Recherchiert aus ', titleAccent: 'echten Kaufsignalen', titlePost: '',
        points: [
          'Bei den meisten Plattformen l\u00e4sst sich nach Titel und Branche filtern. hubsell liest auch das Verhalten.',
          'Personen, die der eigenen Unternehmensseite oder der eines Wettbewerbers folgen, mit einem LinkedIn-Post interagieren, den Job wechseln, Events besuchen oder f\u00fcr bestimmte Rollen einstellen.',
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
      metaDescription: 'LinkedIn, E-Mail und Anrufaufgaben in einem Flow. Sichere LinkedIn-Automatisierung über mehrere Absenderprofile, E-Mails aus eigenen Postfächern, Anrufe im CRM.',
      heroSlice: "multichannel",
      compare: {"eyebrow": "LinkedIn- und E-Mail-Outreach", "titlePre": "Drei getrennte Tools gegenüber ", "titleAccent": "einem Multichannel-Flow", "titlePost": "", "colA": "Getrennte Tools", "colB": "hubsell Multichannel-Outreach", "rows": [["Kanäle", "Ein E-Mail-Tool, ein LinkedIn-Tool und eine Aufgabenliste, jedes für sich", "E-Mail, LinkedIn und Anrufaufgaben in einem Flow"], ["Reaktion auf den Kontakt", "Jemand muss die anderen Tools von Hand stoppen", "Verzweigungen leiten jeden Kontakt nach seinem Verhalten: angenommen, geöffnet, geantwortet oder still"], ["Wer auf LinkedIn sendet", "SDR-Profile, unter 20 % der Anfragen angenommen", "Profile von Gründern und Fachleuten, über 50 % angenommen"], ["LinkedIn-Volumen", "Ein Profil trägt die ganze Aktivität", "Verteilt auf 5 bis 10 Absenderprofile innerhalb strikter Limits"], ["E-Mail-Versand", "Über externe Versandserver und Tracking-Links", "Aus den eigenen Postfächern über die APIs von Google und Microsoft"], ["Anrufe", "Ein separater Dialer und manuelles Protokollieren", "Anrufaufgaben in Salesforce, HubSpot oder Pipedrive, protokolliert mit dem Flow"]]},
      heads: {"signals": {"eyebrow": "Multichannel-Outreach-Plattform", "pre": "Eine Multichannel-Outreach-Plattform, ", "accent": "nicht drei Tools", "post": ""}, "explained": {"eyebrow": "LinkedIn-Automatisierung", "pre": "LinkedIn- und E-Mail-Outreach, ", "accent": "Schritt für Schritt", "post": ""}, "steps": {"eyebrow": "So funktioniert es", "pre": "So läuft ein ", "accent": "Multichannel-Flow", "post": ""}, "extra": {"eyebrow": "LinkedIn-Sicherheit", "pre": "", "accent": "Sichere LinkedIn-Automatisierung", "post": " innerhalb der Limits"}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "koordinierter Outreach", "post": " verändert"}, "closing": {"eyebrow": "LinkedIn- und E-Mail-Outreach", "pre": "LinkedIn, E-Mail und Anrufe als ", "accent": "ein Flow", "post": ""}, "faq": {"eyebrow": "FAQ zu Multichannel-Outreach", "pre": "Fragen zum ", "accent": "Multichannel-Outreach", "post": ""}},
      signals: {"sub": "Jeder Schritt ist ein Baustein im Flow-Builder. Die Reihenfolge richtet sich nach den Käufern, und die Bedingungen entscheiden, wer wohin geht.", "startLabel": "Einsatz", "items": [{"id": "visit", "title": "Profilbesuche", "body": "Ein Profilbesuch zeigt dem Kontakt, wer sich gleich meldet, bevor um etwas gebeten wird.", "start": "Einen Kontakt vor der Anfrage aufwärmen"}, {"id": "invite", "title": "Vernetzungsanfragen", "body": "Anfragen gehen von den Profilen raus, die Käufer annehmen. Anfragen von Gründern und Fachleuten werden zu über 50 % angenommen, bei SDR-Profilen bleibt es unter 20 %.", "start": "Ein Netzwerk ersten Grades mit den Käufern aufbauen"}, {"id": "message", "title": "LinkedIn-Nachrichten", "body": "Nach einer angenommenen Anfrage folgt nach der festgelegten Wartezeit eine Direktnachricht. Was danach passiert, hängt davon ab, ob der Kontakt antwortet.", "start": "Das erste echte Gespräch"}, {"id": "inmail", "title": "InMail", "body": "InMail erreicht Personen außerhalb des Netzwerks ohne vorherige Vernetzungsanfrage.", "start": "Kontakte, die zu wichtig zum Warten sind"}, {"id": "email", "title": "E-Mail-Schritte", "body": "E-Mails gehen aus den eigenen Postfächern bei Google oder Microsoft über deren APIs raus, ohne externen Server oder Tracking-Umleitung dazwischen.", "start": "Alle mit verifizierter E-Mail, auch wer nicht angenommen hat"}, {"id": "call", "title": "Anrufaufgaben", "body": "Telefonschritte erzeugen Anrufaufgaben in Salesforce, HubSpot oder Pipedrive. Das Team wählt aus dem CRM, und das Ergebnis wird mit dem Flow protokolliert.", "start": "Die Kontakte, die ein Gespräch wert sind"}, {"id": "branch", "title": "Bedingungen und Verzweigungen", "body": "Jeder Kontakt wird nach seinem Verhalten geleitet: angenommen, geöffnet, geantwortet oder still. Wer annimmt, bekommt eine Nachricht, wer nicht annimmt, stattdessen eine E-Mail.", "start": "Jeden Kontakt auf dem richtigen Weg halten"}, {"id": "wait", "title": "Wartezeiten", "body": "Wartezeiten verteilen die Kontaktpunkte, etwa einen Tag nach einer angenommenen Anfrage oder eine Woche, bevor eine unbeantwortete Anfrage zurückgezogen wird.", "start": "Ein Tempo, das persönlich wirkt, nicht automatisiert"}]},
      extra: {"title": "Sichere LinkedIn-Automatisierung", "paras": ["LinkedIn schränkt Konten ein, wenn viel Aktivität in kurzer Zeit gebündelt wird. hubsell macht es umgekehrt: Das Netzwerk ersten Grades wächst langsam und stetig, 365 Tage im Jahr, innerhalb strikter Plattformlimits.", "Die Aktivität verteilt sich auf 5 bis 10 Absenderprofile aus dem Team, sodass kein einzelnes Profil das Volumen trägt. Weniger Volumen pro Absender hält jedes Profil gesund und schützt auch die E-Mail-Domain.", "Nicht angenommene Anfragen werden nach der festgelegten Wartezeit zurückgezogen, damit sich offene Anfragen auf einem Profil nicht stapeln."], "links": [{"label": "So schützt hubsell die E-Mail-Zustellbarkeit", "href": "/platform/deliverability"}]},
      faqs: [{"question": "Was ist eine Multichannel-Outreach-Plattform?", "answer": "<p>Eine Multichannel-Outreach-Plattform betreibt LinkedIn, E-Mail und Telefon als einen Flow statt als drei getrennte Tools. hubsell bestimmt den nächsten Schritt für jeden Kontakt aus seinem Verhalten auf allen Kanälen. Eine angenommene Anfrage, eine geöffnete E-Mail oder eine Antwort bringt ihn weiter, ohne dass jemand das Tool wechselt.</p>"}, {"question": "Lassen sich LinkedIn- und E-Mail-Outreach in einem Flow kombinieren?", "answer": "<p>Ja. In hubsell stehen LinkedIn-Schritte (Profilbesuche, Vernetzungsanfragen, Nachrichten, InMail), E-Mail-Schritte und Anrufaufgaben in einem Flow. Bedingungen leiten jeden Kontakt: Wer die Anfrage annimmt, bekommt eine LinkedIn-Nachricht, wer nicht annimmt, stattdessen eine E-Mail.</p>"}, {"question": "Ist LinkedIn-Automatisierung sicher? Wie vermeidet hubsell Einschränkungen?", "answer": "<p>LinkedIn schränkt Konten ein, wenn viel Aktivität in kurzer Zeit gebündelt wird. hubsell baut das Netzwerk ersten Grades langsam und stetig auf, 365 Tage im Jahr, innerhalb strikter Plattformlimits, und verteilt die Aktivität auf 5 bis 10 Absenderprofile, sodass kein einzelnes Profil das Volumen trägt.</p>"}, {"question": "Welche LinkedIn-Aktionen kann hubsell automatisieren?", "answer": "<p>Profilbesuche, Vernetzungsanfragen, Direktnachrichten und InMail sowie das Zurückziehen nicht angenommener Anfragen. Jede Aktion ist ein Schritt im selben Flow wie E-Mails und Anrufaufgaben.</p>"}, {"question": "Versendet hubsell E-Mails aus dem eigenen Postfach?", "answer": "<p>Ja. E-Mails gehen aus den eigenen Postfächern bei Google oder Microsoft über deren APIs raus. Es gibt keinen externen SMTP-Server und keine Tracking-Umleitung in der E-Mail, sodass die Nachrichten aussehen, was sie sind: echte Mails von einem echten Menschen. Mehr zur <a class=\"link\" href=\"/de/platform/deliverability/\">Zustellbarkeit</a>.</p>"}, {"question": "Wer sollte auf LinkedIn ansprechen: SDRs oder Führungskräfte?", "answer": "<p>Der Absender verändert das Ergebnis. Vernetzungsanfragen von SDRs werden meist zu weniger als 20 % angenommen, weil Käufer einen Pitch erwarten. Dieselbe Anfrage von Gründern, Führungskräften oder Fachleuten wird zu mehr als 50 % angenommen. hubsell betreibt Outreach von den Profilen, die Käufer annehmen.</p>"}, {"question": "Kann hubsell Outreach von mehreren LinkedIn-Profilen gleichzeitig betreiben?", "answer": "<p>Ja. hubsell steuert den Outreach von CEO, Vertriebsleitung und Fachleuten an einem Ort, sodass mehrere Personen denselben Account koordiniert ansprechen und das Volumen auf ihre Profile verteilt wird.</p>"}, {"question": "Welche Ergebnisse sind mit LinkedIn- und E-Mail-Outreach über hubsell zu erwarten?", "answer": "<p>Mit dem hubsell-Playbook sehen Teams typischerweise 25 bis 40 % angenommene Vernetzungsanfragen, 10 bis 15 % Antworten und 3 bis 5 % begonnene Gespräche. Die Ergebnisse liegen am oberen Ende, wenn die Absenderprofile nicht nach Vertrieb klingen.</p>"}, {"question": "Kann hubsell Anrufe tätigen?", "answer": "<p>hubsell hat keinen eingebauten Dialer. Telefonschritte erzeugen Anrufaufgaben in Salesforce, HubSpot oder Pipedrive, sodass das Team aus dem gewohnten CRM anruft und das Ergebnis mit dem Flow protokolliert wird. Mehr unter <a class=\"link\" href=\"/de/platform/crm-sync/\">CRM-Sync</a>.</p>"}, {"question": "Wie schneidet hubsell gegenüber Outreach oder Salesloft ab?", "answer": "<p>Outreach und Salesloft sind E-Mail-Sequenz-Tools: Sie recherchieren keine Daten und betreiben LinkedIn nicht nativ, daher braucht es weiterhin einen Datenanbieter und einen manuellen LinkedIn-Prozess. hubsell deckt alle drei Ebenen ab: live recherchierte Kontaktdaten, LinkedIn und E-Mail in einem Flow mit Anrufaufgaben und automatischen CRM-Sync.</p>"}],
      eyebrow: 'Multichannel-Outreach',
      h1Pre: 'Multichannel-Outreach über ', h1Accent: 'E-Mail, LinkedIn und Telefon', h1Post: '',
      sub: 'Schluss mit dem Jonglieren zwischen E-Mail-Tool, LinkedIn-Tool und Aufgabenliste. hubsell f\u00fchrt alle drei Kan\u00e4le als einen koordinierten Flow aus, der auf das Verhalten jedes Kontakts reagiert.',
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
          body: 'Telefon-Schritte landen als Anrufaufgaben in Salesforce, HubSpot oder Pipedrive. Die Vertriebsmitarbeiter telefonieren aus dem CRM, das sie bereits nutzen, und das Ergebnis wird mit dem Rest des Flows protokolliert.',
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
        sub: 'In einem kurzen Gespr\u00e4ch \u00fcbersetzt hubsell eine aktuelle Kampagne in einen einzigen hubsell-Flow.',
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
      "title": "B2B-Kontaktdaten anreichern: verifizierte E-Mails und Telefonnummern | hubsell",
      "metaDescription": "hubsell reichert Kontakte live an: E-Mails zu 95 % genau, Catch-all inklusive, Telefonnummern von Qualitätspartnern. Bezahlt wird nur jeder erfolgreiche Schritt.",
      "heroSlice": "enrichment",
      "compare": {"eyebrow": "B2B-Datenanreicherung", "titlePre": "Anreicherung aus einer Datenbank gegenüber ", "titleAccent": "Live-Anreicherung", "titlePost": "", "colA": "Anreicherung aus einer Datenbank", "colB": "hubsell Live-Anreicherung", "rows": [["Herkunft der Daten", "Die Datenbank eines Anbieters, einmal gefüllt und weiterverkauft", "Von hubsell am Tag der Anreicherung recherchiert und gesteuert, nur Telefonnummern von Partnern"], ["Genauigkeit der E-Mails", "Unbekannt, bis die Bounces kommen", "95 %, Catch-all-Domains eingeschlossen"], ["Namen, Titel, Unternehmen", "So aktuell wie die letzte Aktualisierung des Datensatzes", "99 % genau, abgeglichen mit dem aktuellen Profil"], ["Catch-all-Domains", "Oft als unbekannt markiert und ausgelassen", "Validiert wie jede andere Adresse"], ["Bezahlt wird", "Ein Datensatz, ob vollständig oder nicht", "Jeder erfolgreiche Schritt, anteilig berechnet"]]},
      "heads": {"signals": {"eyebrow": "E-Mail-Finder und Telefonnummern-Finder", "pre": "Ein Datensatz, ", "accent": "gesteuert von hubsell", "post": ""}, "explained": {"eyebrow": "Datenanreicherung", "pre": "Kontaktdaten-Anreicherung, ", "accent": "Feld für Feld", "post": ""}, "steps": {"eyebrow": "So funktioniert die Anreicherung", "pre": "So wird eine Liste ", "accent": "Schritt für Schritt angereichert", "post": ""}, "extra": {"eyebrow": "E-Mail-Verifizierung", "pre": "", "accent": "Catch-all-Verifizierung", "post": " inklusive"}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "vollständige Kontaktdaten", "post": " verändern"}, "closing": {"eyebrow": "B2B-Kontaktdaten", "pre": "Listen mit ", "accent": "verifizierten Kontaktdaten", "post": " anreichern"}, "faq": {"eyebrow": "FAQ zur Datenanreicherung", "pre": "Fragen zur ", "accent": "Anreicherung von Kontaktdaten", "post": ""}},
      "signals": {"sub": "Jedes Feld wird am Tag der Anreicherung von hubsell recherchiert oder erzeugt und geprüft, bevor es in den Outreach oder das CRM gelangt.", "startLabel": "Genauigkeit", "items": [{"id": "email", "title": "Geschäftliche E-Mail-Adressen", "body": "hubsell generiert und validiert die geschäftliche E-Mail-Adresse jedes Kontakts mit eigenen Methoden, am Punkt der Nutzung. Auch Adressen auf Catch-all-Domains werden validiert und müssen nicht ausgelassen werden.", "start": "95 %, Catch-all-Domains eingeschlossen"}, {"id": "phone", "title": "Durchwahlen und Mobilnummern", "body": "Durchwahlen und Mobilnummern stammen von Partnern, die nach Genauigkeit und Qualität ausgewählt sind, nicht nach Preis. Die Telefonanreicherung ist optional und wird nur für die Kontakte genutzt, die angerufen werden sollen.", "start": "Aus Partnerdatenbanken, nach Qualität ausgewählt"}, {"id": "profile", "title": "LinkedIn-Profil-URLs", "body": "Bei einer importierten Liste ordnet hubsell jedem Kontakt anhand von vollständigem Namen, Unternehmen und Titel das LinkedIn-Profil zu. Erst mit dem Profil kann ein Kontakt die LinkedIn-Schritte eines Flows durchlaufen.", "start": "99 %"}, {"id": "clean", "title": "Namen, Titel und Unternehmen, bereinigt", "body": "Importierte Listen enthalten alte Titel, Tippfehler und uneinheitliche Firmennamen. hubsell bereinigt und normalisiert jeden Datensatz mit KI und korrigiert, was sich seit dem Erstellen der Liste geändert hat.", "start": "99 %"}]},
      "howSteps": {"note": "Jeder Schritt wird nur berechnet, wenn er gelingt, und zwar anteilig statt als Pauschale pro Kontakt. Eine Anreicherung, die nicht abgeschlossen wird, kostet nichts.", "items": [{"title": "Daten recherchieren", "body": "Die Daten jedes Kontakts werden live von LinkedIn und Unternehmenswebsites erhoben."}, {"title": "Mit KI bereinigen und normalisieren", "body": "Namen, Titel und Unternehmen werden bereinigt und in ein einheitliches Format gebracht."}, {"title": "Fehlende Daten ergänzen", "body": "Lücken im Datensatz werden gefüllt, etwa ein fehlender Titel oder eine Unternehmensangabe."}, {"title": "E-Mail generieren und validieren", "body": "Geschäftliche E-Mails werden mit eigenen Methoden von hubsell generiert und validiert, Catch-all inklusive."}, {"title": "Telefonnummer beschaffen", "body": "Optional: eine Durchwahl oder Mobilnummer von einem Qualitätspartner."}, {"title": "Qualitätsprüfung", "body": "Jeder Datensatz wird geprüft, bevor er zur Nutzung übergeben wird."}]},
      "extra": {"title": "Catch-all-Verifizierung", "paras": ["Eine Catch-all-Domain nimmt Mail für jede Adresse an. Eine normale Prüfung kann deshalb ein echtes Postfach nicht von einer falschen Adresse unterscheiden. Listen markieren diese Kontakte meist als unbekannt, sodass sie entweder ausgelassen werden oder Bounces drohen.", "hubsell verifiziert Adressen auf Catch-all-Domains bei jeder Anreicherung, im Moment der Nutzung. So sind 95 % der gelieferten E-Mails genau, Catch-all-Domains eingeschlossen, und die Bounce-Rate bleibt niedrig."], "links": [{"label": "So schützt hubsell die Zustellbarkeit", "href": "/platform/deliverability"}]},
      "faqs": [{"question": "Was ist Kontaktdaten-Anreicherung?", "answer": "<p>Kontaktdaten-Anreicherung ergänzt die fehlenden Angaben eines Kontaktdatensatzes: eine geschäftliche E-Mail, eine Telefonnummer, ein LinkedIn-Profil sowie aktuellen Titel und aktuelles Unternehmen. hubsell reichert jeden Kontakt live am Tag der Anfrage an und verifiziert das Ergebnis, bevor es in den Outreach oder das CRM gelangt.</p>"}, {"question": "Was braucht hubsell, um eine Liste anzureichern?", "answer": "<p>Vollständigen Namen, Unternehmen und Titel je Kontakt. Daraus recherchiert hubsell die Daten der Person live, bereinigt und normalisiert sie mit KI, füllt Lücken, generiert und validiert die geschäftliche E-Mail und ergänzt auf Wunsch eine Telefonnummer. Jeder Datensatz wird vor der Nutzung qualitätsgeprüft.</p>"}, {"question": "Wie genau ist die Anreicherung von hubsell?", "answer": "<p>95 % der geschäftlichen E-Mail-Adressen sind genau, Catch-all-Domains eingeschlossen. Namen, Titel, Unternehmen und LinkedIn-Profile sind zu 99 % genau. Telefonnummern stammen aus Partnerdatenbanken, daher nennt hubsell dafür keine einheitliche Genauigkeit. Die Partner sind aber nach Genauigkeit und Qualität ausgewählt, nicht nach Preis.</p>"}, {"question": "Kann hubsell E-Mail-Adressen auf Catch-all-Domains verifizieren?", "answer": "<p>Ja. Eine Catch-all-Domain nimmt Mail für jede Adresse an, daher kann eine normale Prüfung ein echtes Postfach nicht von einer falschen Adresse unterscheiden. hubsell verifiziert auch Adressen auf Catch-all-Domains, und sie sind Teil der 95 % Genauigkeit.</p>"}, {"question": "Findet hubsell Mobilnummern und Durchwahlen?", "answer": "<p>Ja, beides. Telefonnummern stammen von Partnern, die nach Genauigkeit und Qualität statt nach Preis ausgewählt sind. Die Telefonanreicherung ist optional und wird nur für die Kontakte genutzt, die angerufen werden sollen.</p>"}, {"question": "Wie berechnet hubsell die Anreicherung?", "answer": "<p>Berechnet wird jeder erfolgreiche Schritt: Daten recherchieren, bereinigen, fehlende Daten ergänzen, E-Mail generieren und Telefonnummer ergänzen. Die Kosten sind anteilig, bezahlt wird also jedes Ergebnis statt eines Pauschalpreises pro Kontakt. Eine Anreicherung, die nicht abgeschlossen wird, kostet nichts. Mehr unter <a class=\"link\" href=\"/de/pricing/\">Preise</a>.</p>"}, {"question": "Woher stammen die Daten für die Anreicherung?", "answer": "<p>hubsell recherchiert und steuert die Daten selbst, live von LinkedIn und Unternehmenswebsites, und generiert und validiert geschäftliche E-Mail-Adressen mit eigenen Methoden. Kontakte laufen nicht durch die Datenbanken anderer Anbieter. Nur Telefonnummern stammen von Partnern, ausgewählt nach Genauigkeit und Qualität.</p>"}, {"question": "Worin unterscheidet sich Live-Anreicherung von der Anreicherung aus einer B2B-Datenbank?", "answer": "<p>Eine Datenbank reichert die Liste aus Datensätzen an, die sie früher gesammelt hat. Die Angaben können also Monate oder Jahre alt sein. hubsell prüft jeden Kontakt am Tag der Anreicherung, sodass Titel, Unternehmen und E-Mail bei der Nutzung aktuell sind.</p>"}, {"question": "Können angereicherte Kontakte direkt in den Outreach und ins CRM?", "answer": "<p>Ja. Angereicherte Kontakte gehen direkt in die LinkedIn-, E-Mail- und Anruf-Flows in hubsell und werden mit Salesforce, HubSpot oder Pipedrive synchronisiert, ohne Export oder Bereinigung. Mehr dazu unter <a class=\"link\" href=\"/de/platform/multichannel-outreach/\">Multichannel-Outreach</a> und <a class=\"link\" href=\"/de/platform/crm-sync/\">CRM-Sync</a>.</p>"}, {"question": "Sind angereicherte Daten DSGVO-konform?", "answer": "<p>Ja. hubsell reichert Daten ad hoc für jeden Kunden an und hält sie nicht zum Weiterverkauf vor. Der Kunde bleibt Verantwortlicher, hubsell ist Auftragsverarbeiter, auf Grundlage eines Auftragsverarbeitungsvertrags. Mehr zu <a class=\"link\" href=\"/de/platform/live-data/#pf-extra\">DSGVO-konformen B2B-Daten</a>.</p>"}],
      "eyebrow": "Kontaktdaten-Anreicherung",
      "h1Pre": "Kontaktdaten-Anreicherung, ",
      "h1Accent": "heute verifiziert",
      "h1Post": "",
      "sub": "Ein halb gefüllter Kontaktdatensatz bremst den Outreach. Aus vollständigem Namen, Unternehmen und Titel recherchiert hubsell die Daten der Person live, bereinigt sie mit KI, füllt Lücken und ergänzt eine validierte geschäftliche E-Mail und auf Wunsch eine Telefonnummer.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Ein Datensatz, ",
            "titleAccent": "gesteuert von hubsell",
            "titlePost": "",
            "points": [
                  "hubsell recherchiert und steuert jedes Feld selbst: Profil, Titel und Unternehmen von LinkedIn und Unternehmenswebsites, geschäftliche E-Mails mit eigenen Methoden generiert und validiert.",
                  "Nur Telefonnummern stammen von Partnern, ausgewählt nach Genauigkeit und Qualität statt nach Preis.",
                  "Jeder Datensatz wird vor der Übergabe qualitätsgeprüft und ist am Tag der Nutzung korrekt."
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
                  "body": "Ein vollst\u00e4ndiger, verifizierter Datensatz flie\u00dft direkt in die Flows und das CRM. Es gibt keinen Export, keinen Bereinigungsdurchlauf, kein zweites Tool, sodass die angereicherten Daten genau die Daten sind, an die gesendet wird."
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
