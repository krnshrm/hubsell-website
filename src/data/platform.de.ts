// German copy for the /platform pages. Mirrors platform-content.ts exactly in
// structure; register is third person with no direct address (since 2026-10-12), brand stays lowercase "hubsell", technical
// terms (CRM, LinkedIn, ICP, InMail, DMs) stay English, German number formatting.
import type { PlatformData } from './platform-content';

export const platformDe: PlatformData = {
  overview: {
    title: "Sales-Engagement-Plattform mit Live-Daten und CRM-Sync | hubsell",
    metaDescription: "hubsell ist eine Sales-Engagement-Plattform mit eigenen Live-B2B-Daten. Kontakte recherchieren, E-Mail, LinkedIn und Anrufaufgaben in einem Flow ausführen und jeden Kontaktpunkt ins CRM synchronisieren.",
    eyebrow: "Sales-Engagement-Plattform",
    h1Pre: "Die Arbeit von sechs Tools. ",
    h1Accent: "Eine Plattform",
    h1Post: ".",
    sub: "hubsell ist eine Sales-Engagement-Plattform mit eigenen Daten. Sie recherchiert Kontakte live, führt E-Mail, LinkedIn und Anrufaufgaben in einem Flow aus und synchronisiert jeden Kontaktpunkt mit Salesforce, HubSpot oder Pipedrive.",
    compare: {"eyebrow": "All-in-one Sales Engagement", "titlePre": "Sechs Tools im Stack gegenüber ", "titleAccent": "einer Plattform", "titlePost": "", "colA": "Getrennte Tools", "colB": "hubsell", "rows": [["Kontaktdaten", "Eine Datenbank, einmal gekauft und monatelang genutzt", "Für jede Suche live recherchiert und mit dem ICP abgeglichen"], ["Anreicherung", "Ein zweites Tool, ein CSV hinein und eines heraus", "Verifizierte E-Mails und Telefonnummern am selben Ort"], ["E-Mail-Outreach", "Ein E-Mail-Tool, das nichts von LinkedIn weiß", "E-Mail- und LinkedIn-Schritte in einem Flow"], ["LinkedIn", "Von Hand oder in einem weiteren Automatisierungs-Tool", "Profilbesuche, Anfragen, Nachrichten und InMail als Flow-Schritte"], ["Anrufe", "Ein Dialer und nachträglich getippte Notizen", "Anrufaufgaben direkt im CRM"], ["CRM", "Aktivität von Hand protokolliert, wenn überhaupt", "Kontakte und Aktivität synchron in Salesforce, HubSpot oder Pipedrive"], ["Kosten", "Mehrere Abos und die Arbeit dazwischen", "Ein Login, eine Rechnung"]]},
    heads: {"stages": {"eyebrow": "Plattform-Überblick", "pre": "Jeder Schritt im Outbound, ", "accent": "an einem Ort", "post": ""}, "also": {"eyebrow": "Ebenfalls in der Plattform", "pre": "Gleich mit dabei, ", "accent": "ohne Zusatz-Tool", "post": ""}, "why": {"eyebrow": "Warum eine Plattform", "pre": "Jeder Teil macht ", "accent": "die anderen besser", "post": ""}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Teams, die auf ", "accent": "eine Plattform gewechselt sind", "post": ""}, "closing": {"eyebrow": "Sales-Engagement-Plattform", "pre": "Die ganze Plattform ", "accent": "in einem Gespräch", "post": "."}, "faq": {"eyebrow": "FAQ zur Sales-Engagement-Plattform", "pre": "Fragen zur ", "accent": "Plattform von hubsell", "post": ""}},
    stages: [{"eyebrow": "Live-B2B-Daten", "title": "Interessenten über Kaufsignale finden", "slice": "live-data", "href": "/platform/live-data", "linkLabel": "Mehr zu Live-Daten", "body": "Kontakte werden für die jeweilige Suche live aus LinkedIn und Unternehmenswebsites recherchiert, über Signale wie Post-Interaktionen, Jobwechsel, offene Stellen und Follower von Wettbewerbern. Jeder wird vor der Nutzung mit dem ICP abgeglichen."}, {"eyebrow": "Kontaktdaten-Anreicherung", "title": "Verifizierte E-Mails und Telefonnummern", "slice": "enrichment", "href": "/platform/enrichment", "linkLabel": "Mehr zur Anreicherung", "body": "95 % der geschäftlichen E-Mail-Adressen sind korrekt, Catch-all-Domains eingeschlossen, und jeder Datensatz wird vor dem Outreach geprüft. Telefonnummern sind optional und kommen von Partnern, die nach Qualität ausgewählt sind."}, {"eyebrow": "Multichannel-Outreach", "title": "E-Mail, LinkedIn und Anrufe in einem Flow", "slice": "multichannel", "href": "/platform/multichannel-outreach", "linkLabel": "Mehr zum Multichannel-Outreach", "body": "Profilbesuche, Vernetzungsanfragen, Nachrichten, InMail, E-Mails und Anrufaufgaben laufen als Schritte in einem Flow. Bedingungen leiten jeden Kontakt nach seinem Verhalten, sodass niemand eine E-Mail bekommt, der schon auf LinkedIn geantwortet hat."}, {"eyebrow": "CRM-Sync", "title": "Jeder Kontaktpunkt am richtigen Datensatz", "slice": "crm-sync", "href": "/platform/crm-sync", "linkLabel": "Mehr zum CRM-Sync", "body": "Kontakte und Aktivität gehen nach Salesforce, HubSpot oder Pipedrive, per Hand oder per Regel übertragen und mit bestehenden Datensätzen abgeglichen, damit nichts doppelt entsteht."}],
    also: [{"title": "E-Mail-Zustellbarkeit", "href": "/platform/deliverability", "linkLabel": "Mehr zur Zustellbarkeit", "body": "E-Mails gehen aus den eigenen Postfächern bei Google oder Microsoft über deren APIs raus. Kontakte werden vor dem ersten Versand verifiziert, und das Volumen bleibt gering bis mittel, gezielt auf passende Kontakte."}, {"title": "Personalisierung auf Basis von Signalen", "href": "/platform/personalisation", "linkLabel": "Mehr zur Personalisierung", "body": "Nachrichten können mit dem Signal beginnen, durch das ein Kontakt auf die Liste kam: der Post, mit dem er interagiert hat, die neue Stelle oder die Rolle, die sein Unternehmen gerade besetzt."}],
    why: [{"title": "Frische Daten, weniger Bounces", "body": "Kontakte, die am Tag der Nutzung recherchiert und verifiziert werden, bouncen seltener. Das schützt die Absenderreputation für jede folgende E-Mail."}, {"title": "Abgestimmte Kanäle, mehr Antworten", "body": "Wenn E-Mail und LinkedIn voneinander wissen, bekommt jeder Kontakt den nächsten Schritt, der zu seinem Verhalten passt, statt einer zweiten Nachricht auf einem Kanal, auf dem er schon geantwortet hat."}, {"title": "Sofort im CRM, ehrliche Berichte", "body": "Landet jeder Kontaktpunkt sofort im CRM, zeigen Pipeline-Berichte, was wirklich passiert ist, und das Team gewinnt die Zeit zurück, die es mit Abtippen verbracht hat."}],
    ratingsLine: "Bewertet mit 4,6+ auf G2, Capterra und GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Zur Workspace-365-Story",
    closingSub: "In einem kurzen Gespräch zeigt hubsell anhand des bestehenden Stacks, wie er als ein System aussieht.",
    faqs: [{"question": "Was ist eine Sales-Engagement-Plattform?", "answer": "<p>Eine Sales-Engagement-Plattform steuert die Ansprache im Vertrieb: E-Mails, LinkedIn-Schritte und Anrufe in einer festgelegten Reihenfolge, wobei jeder Kontaktpunkt erfasst wird. hubsell ergänzt die zwei Dinge, die den meisten fehlen: live recherchierte B2B-Kontaktdaten und den automatischen Sync der Ergebnisse ins CRM.</p>"}, {"question": "Worin unterscheidet sich hubsell von Outreach oder Salesloft?", "answer": "<p>Outreach und Salesloft sind E-Mail-Sequenz-Tools. Sie recherchieren keine Kontaktdaten und betreiben LinkedIn nicht nativ, daher braucht es daneben weiterhin einen Datenanbieter und einen manuellen LinkedIn-Prozess. hubsell deckt alle drei Ebenen ab: Live-Daten, E-Mail und LinkedIn in einem Flow mit Anrufaufgaben und CRM-Sync.</p>"}, {"question": "Welche Tools kann hubsell ersetzen?", "answer": "<p>Einen B2B-Datenanbieter, ein Anreicherungs-Tool, ein E-Mail-Outreach-Tool und ein LinkedIn-Automatisierungs-Tool. Anrufe laufen als Aufgaben im CRM, sodass für Outbound-Schritte kein eigener Dialer nötig ist, und Aktivität wird ohne zwischengeschaltetes Sync-Tool im CRM protokolliert.</p>"}, {"question": "Enthält hubsell B2B-Kontaktdaten?", "answer": "<p>Ja. hubsell recherchiert Kontakte für jede Suche live aus LinkedIn und Unternehmenswebsites und reichert die passenden mit einer verifizierten geschäftlichen E-Mail und auf Wunsch einer Telefonnummer an. Es gibt keine statische Datenbank, zu der Zugang gekauft wird. Mehr zu <a class=\"link\" href=\"/de/platform/live-data/\">Live-Daten</a>.</p>"}, {"question": "Welche Kanäle unterstützt hubsell?", "answer": "<p>E-Mail aus den eigenen Postfächern bei Google oder Microsoft, LinkedIn (Profilbesuche, Vernetzungsanfragen, Nachrichten und InMail) und Telefon als Anrufaufgaben im CRM. Alle laufen als Schritte in einem Flow.</p>"}, {"question": "Mit welchen CRMs arbeitet hubsell?", "answer": "<p>Salesforce, HubSpot und Pipedrive. Kontakte, Unternehmen und Aktivität werden in Echtzeit von hubsell ins CRM synchronisiert und mit bestehenden Datensätzen abgeglichen, damit nichts doppelt entsteht. Mehr zum <a class=\"link\" href=\"/de/platform/crm-sync/\">CRM-Sync</a>.</p>"}, {"question": "Ist hubsell DSGVO-konform?", "answer": "<p>Ja. hubsell sitzt in Berlin und hostet die Daten in Frankfurt. Daten werden für den festgelegten Zweck verarbeitet und nicht zum Weiterverkauf gespeichert. Der Kunde bleibt Verantwortlicher, hubsell ist Auftragsverarbeiter, mit einem Auftragsverarbeitungsvertrag.</p>"}, {"question": "Wie schnell geht der Start?", "answer": "<p>Das hubsell-Team übernimmt Kampagneneinrichtung, Datenrecherche und Flow-Konfiguration gemeinsam mit dem Kunden. Die erste Outbound-Kampagne startet so meist in unter 7 Tagen.</p>"}, {"question": "Was kostet hubsell?", "answer": "<p>Start kostet ab 120 € pro Nutzer und Monat, Grow ab 4.320 € pro Jahr. Scale wird in einem individuellen Angebot bepreist, für Teams ab 10 Nutzern. Mehr unter <a class=\"link\" href=\"/de/pricing/\">Preise</a>.</p>"}, {"question": "Für wen ist hubsell gedacht?", "answer": "<p>Für B2B-Unternehmen, die an andere Unternehmen verkaufen: Vertriebsteams und SDRs, Gründer, die selbst verkaufen, RevOps-Teams und Agenturen, die Outbound für Kunden betreiben. Die meisten Kunden sitzen in Europa.</p>"}],
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
      title: 'CRM-Sync: LinkedIn- und E-Mail-Aktivität in HubSpot, Salesforce und Pipedrive | hubsell',
      metaDescription: 'LinkedIn- und E-Mail-Aktivität nach HubSpot, Salesforce oder Pipedrive synchronisieren. Kontakte per Hand oder per Regel übertragen, bestehende Datensätze abgleichen, jeden Kontaktpunkt sofort protokollieren.',
      heroSlice: "crm-sync",
      compare: {"eyebrow": "CRM-Integration", "titlePre": "Von Hand oder ", "titleAccent": "automatisch im CRM", "titlePost": "", "colA": "Von Hand", "colB": "hubsell CRM-Sync", "rows": [["Kontakte ins CRM", "CSV-Export und -Import oder Datensätze abtippen", "Per Hand oder automatisch übertragen, nach festgelegten Bedingungen"], ["Dubletten", "Ein zweiter Datensatz bei jedem Listenimport", "Abgleich mit bestehenden Datensätzen statt neuer Einträge"], ["LinkedIn-Aktivität", "Bleibt in LinkedIn, unsichtbar für den Rest des Teams", "Besuche, Anfragen, Nachrichten und Antworten am Kontaktdatensatz"], ["E-Mail-Aktivität", "Protokolliert, wenn jemand daran denkt", "Versand, Öffnungen und Antworten sofort protokolliert"], ["Anrufe", "Ein Dialer plus eine nachträglich getippte Notiz", "Anrufaufgaben im CRM, Ergebnis am Datensatz"], ["Bestandskunden", "Erneut angeschrieben, weil niemand im CRM nachgesehen hat", "CRM-Kontakte vor dem Outreach ausgeschlossen"]]},
      heads: {"signals": {"eyebrow": "CRM-Integration", "pre": "Alle Kontaktpunkte ", "accent": "im CRM", "post": ""}, "explained": {"eyebrow": "LinkedIn mit dem CRM synchronisieren", "pre": "Diese Daten ", "accent": "landen im CRM", "post": ""}, "steps": {"eyebrow": "So funktioniert es", "pre": "Vom Flow-Schritt ", "accent": "ins CRM", "post": ""}, "extra": {"eyebrow": "Integration mit Salesforce, HubSpot und Pipedrive", "pre": "Das CRM bleibt das ", "accent": "führende System", "post": ""}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Ergebnisse mit ", "accent": "automatischem CRM-Sync", "post": ""}, "closing": {"eyebrow": "Automatischer CRM-Sync", "pre": "Das CRM, ", "accent": "immer aktuell", "post": "."}, "faq": {"eyebrow": "FAQ zu CRM-Sync", "pre": "Fragen zum ", "accent": "CRM-Sync", "post": ""}},
      signals: {"sub": "Alles Folgende kann nach Salesforce, HubSpot oder Pipedrive gehen. Was übertragen wird und wann, legt das Team fest.", "startLabel": "Im CRM", "items": [{"id": "company", "title": "Kontakte und Unternehmen", "body": "Personen und ihre Unternehmen werden im CRM angelegt oder mit dem bestehenden Datensatz abgeglichen und aktualisiert.", "start": "Ein Datensatz pro Person"}, {"id": "email", "title": "E-Mail-Aktivität", "body": "Jede E-Mail aus einem Flow sowie Öffnungen und Antworten werden sofort am Kontakt protokolliert.", "start": "Aktivität in der Kontakt-Timeline"}, {"id": "invite", "title": "LinkedIn-Anfragen und Vernetzungen", "body": "Vernetzungsanfragen und angenommene Anfragen erscheinen am Kontakt neben den E-Mails, sodass das ganze Team die LinkedIn-Seite des Outreach sieht.", "start": "Aktivität in der Kontakt-Timeline"}, {"id": "message", "title": "LinkedIn-Nachrichten und Antworten", "body": "Nachrichten und InMails von den Profilen des Teams und die Antworten darauf werden am Datensatz protokolliert.", "start": "Aktivität in der Kontakt-Timeline"}, {"id": "call", "title": "Anrufaufgaben und Ergebnisse", "body": "Telefonschritte erzeugen eine Anrufaufgabe im CRM. Angerufen wird aus dem CRM, und das Ergebnis wird dort festgehalten.", "start": "Eine Aufgabe im CRM"}, {"id": "branch", "title": "Regeln für die Übertragung", "body": "Festgelegt wird, welche Kontakte ins CRM gehen: per Hand oder über Bedingungen, etwa nur Kontakte, die antworten.", "start": "Nur Kontakte, die einen Datensatz wert sind"}, {"id": "map", "title": "Feld-Mapping", "body": "Festgelegt wird, welches hubsell-Feld welches CRM-Feld füllt, damit die Daten dort landen, wo die Berichte sie erwarten.", "start": "Eigene Felder, eigene Struktur"}, {"id": "ban", "title": "Ausschluss von CRM-Kontakten", "body": "Kontakte, die schon im CRM sind, etwa Kunden oder offene Deals, lassen sich vor dem Outreach ausschließen.", "start": "Kunden nicht versehentlich anschreiben"}]},
      extra: {"title": "Das CRM bleibt das führende System", "paras": ["hubsell schreibt in Salesforce, HubSpot und Pipedrive. Es ersetzt sie nicht, und das Team muss nicht an zwei Orten arbeiten.", "Vor dem Schreiben sucht hubsell den bestehenden Datensatz und aktualisiert ihn. Wird dieselbe Person zweimal übertragen, entsteht kein zweiter Kontakt.", "Kontakte, die schon im CRM sind, lassen sich vor dem Start eines Flows ausschließen, damit Kunden und offene Deals nicht versehentlich angeschrieben werden."], "links": [{"label": "Anleitung: CRM verbinden", "href": "/knowledge/connect-your-crm"}]},
      faqs: [{"question": "Lässt sich hubsell mit HubSpot, Salesforce und Pipedrive verbinden?", "answer": "<p>Ja. hubsell hat native Integrationen mit allen drei. Das CRM wird einmal unter Integrationen verbunden, und die angefragten Berechtigungen werden erteilt. Danach läuft der Sync in Echtzeit, ohne Zapier, Middleware oder CSV-Dateien. Mehr in der <a class=\"link\" href=\"/knowledge/connect-your-crm/\">Anleitung zum Verbinden des CRM</a>.</p>"}, {"question": "Wie lässt sich LinkedIn-Aktivität mit HubSpot synchronisieren?", "answer": "<p>HubSpot wird mit hubsell verbunden, und der LinkedIn-Outreach läuft in einem hubsell-Flow. Profilbesuche, Vernetzungsanfragen, angenommene Anfragen, Nachrichten und Antworten werden dann am HubSpot-Kontakt protokolliert, neben E-Mail-Aktivität und Anrufaufgaben. Salesforce und Pipedrive funktionieren genauso.</p>"}, {"question": "Was überträgt hubsell ins CRM?", "answer": "<p>Kontakte und ihre Unternehmen, E-Mail-Aktivität (gesendet, geöffnet, beantwortet), LinkedIn-Aktivität (Profilbesuche, Vernetzungsanfragen, angenommene Anfragen, Nachrichten, InMail und Antworten) sowie Anrufaufgaben mit ihren Ergebnissen.</p>"}, {"question": "Werden Kontakte automatisch ins CRM übertragen?", "answer": "<p>Nur wenn das gewünscht ist. Kontakte lassen sich per Hand übertragen oder über Bedingungen automatisch, etwa nur die Kontakte, die antworten. Das Verbinden des CRM überträgt von sich aus nichts.</p>"}, {"question": "Legt hubsell Dubletten im CRM an?", "answer": "<p>Nein. Vor dem Schreiben gleicht hubsell jeden Kontakt und jedes Unternehmen mit dem bestehenden Datensatz ab und aktualisiert ihn, statt einen zweiten anzulegen.</p>"}, {"question": "Lassen sich Kontakte ausschließen, die schon im CRM sind?", "answer": "<p>Ja. Kontakte, die schon im CRM sind, etwa Kunden oder Personen in offenen Deals, lassen sich vor dem Outreach ausschließen, damit niemand versehentlich angeschrieben wird.</p>"}, {"question": "Ist der CRM-Sync von hubsell ein Zwei-Wege-Sync?", "answer": "<p>Derzeit läuft der Sync von hubsell ins CRM. hubsell schreibt Kontakte, Unternehmen und Aktivität und prüft das CRM auf bestehende Datensätze und auszuschließende Kontakte. Änderungen im CRM werden noch nicht nach hubsell zurückgeschrieben. Ein Zwei-Wege-Sync ist geplant.</p>"}, {"question": "Lässt sich festlegen, welche CRM-Felder hubsell füllt?", "answer": "<p>Ja. hubsell-Felder werden den Feldern im CRM zugeordnet, damit die Daten dort landen, wo Berichte und Workflows sie erwarten.</p>"}, {"question": "Wie werden Anrufe im CRM protokolliert?", "answer": "<p>hubsell hat keinen eingebauten Dialer. Ein Telefonschritt im Flow erzeugt eine Anrufaufgabe in Salesforce, HubSpot oder Pipedrive. Angerufen wird aus dem CRM, und das Ergebnis landet am selben Datensatz wie die E-Mail- und LinkedIn-Aktivität.</p>"}, {"question": "Warum Outreach-Aktivität automatisch im CRM protokollieren?", "answer": "<p>Manuelles Protokollieren ist langsam und lückenhaft, sodass Pipeline-Berichte zeigen, was jemand eingetragen hat. Wird jeder Kontaktpunkt sofort protokolliert, ist der Datensatz vollständig, und das Team gewinnt Zeit zurück. Elium hat nach dem Wechsel zu hubsell rund 20 Stunden pro Woche gespart.</p>"}],
      eyebrow: 'CRM-Sync',
      h1Pre: 'Das CRM ', h1Accent: 'pflegt sich von selbst', h1Post: '',
      sub: 'hubsell versorgt HubSpot, Salesforce und Pipedrive, statt sie zu ersetzen. Das Team legt fest, welche Kontakte übertragen werden, per Hand oder per Regel, und jede E-Mail, jeder LinkedIn-Schritt und jede Anrufaufgabe landet sofort am richtigen Datensatz.',
      demoCta: 'Demo buchen',
      row: {
        titlePre: 'Protokolliert, ', titleAccent: 'sobald es passiert', titlePost: '',
        points: [
          'Versendete, geöffnete und beantwortete E-Mails, LinkedIn-Schritte und Anrufaufgaben landen am Kontaktdatensatz in Salesforce, HubSpot oder Pipedrive.',
          'Kontakte und Unternehmen werden mit bestehenden Datensätzen abgeglichen. Der Sync aktualisiert, was schon da ist, statt Dubletten anzulegen.',
          'Keine manuelle Eingabe und kein CSV dazwischen. Das Team arbeitet an der Pipeline, nicht an der Tabelle.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'So funktioniert es',
        stepTitle: 'Von der Aktivit\u00e4t zum synchronisierten Datensatz',
      },
      gridTitlePre: 'Ein System of Record, dem das Team ', gridTitleAccent: 'endlich vertrauen kann', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot und Pipedrive',
          body: 'Native Synchronisierung in die drei CRMs, in Echtzeit. Keine Middleware, keine CSV-Exporte, keine n\u00e4chtlichen Jobs.',
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
      "title": "Zustellbarkeit von Cold E-Mails: ins Postfach aus dem eigenen Konto | hubsell",
      "metaDescription": "Zustellbarkeit von Cold E-Mails mit hubsell: Versand aus dem eigenen Google- oder Microsoft-Postfach, SPF, DKIM und DMARC vom hubsell-Team eingerichtet, ein Tageslimit, Versandzeiten und Kontakte, die am Tag des Versands verifiziert werden.",
      "heroSlice": "deliverability",
      "compare": {"eyebrow": "Zustellbarkeit von Cold E-Mails", "titlePre": "Massenversand oder ", "titleAccent": "gezielter Versand", "titlePost": "", "colA": "Massenversand-Tools", "colB": "hubsell", "rows": [["Versandserver", "Externe SMTP-Server, geteilt mit anderen Absendern", "Das eigene Google- oder Microsoft-Postfach, über dessen API"], ["Authentifizierung", "Bleibt dem Kunden überlassen", "SPF, DKIM und DMARC mit dem hubsell-Team eingerichtet"], ["Kontaktdaten", "Vor Monaten gekaufte Listen, viele Adressen nicht mehr gültig", "Am Tag der Ansprache verifiziert, Catch-all-Domains eingeschlossen"], ["Volumen", "So viel der Tarif erlaubt, in Schüben", "Geringes bis mittleres Volumen mit Tageslimit, an passende Kontakte"], ["Zeitpunkt", "Versand, sobald die Kampagne startet", "Innerhalb der festgelegten Versandzeiten"], ["Antworten und Bounces", "Follow-ups laufen weiter, bis jemand sie stoppt", "Der Flow stoppt für den Kontakt bei Antwort oder Bounce"]]},
      "heads": {"signals": {"eyebrow": "Inbox-Platzierung", "pre": "Versand nach den ", "accent": "Regeln der Postfächer", "post": ""}, "explained": {"eyebrow": "Checkliste Zustellbarkeit", "pre": "Was E-Mails ", "accent": "aus dem Spam hält", "post": ""}, "steps": {"eyebrow": "So funktioniert es", "pre": "Vom verifizierten Kontakt ", "accent": "in den Posteingang", "post": ""}, "extra": {"eyebrow": "Datenqualität und Zustellbarkeit", "pre": "Gute Daten bedeuten ", "accent": "gute Zustellbarkeit", "post": ""}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "bessere Zustellbarkeit", "post": " bewirkt"}, "closing": {"eyebrow": "E-Mail-Zustellbarkeit", "pre": "Herausfinden, wo ", "accent": "die E-Mails landen", "post": ""}, "faq": {"eyebrow": "FAQ zur Zustellbarkeit", "pre": "Fragen zur ", "accent": "E-Mail-Zustellbarkeit", "post": ""}},
      "signals": {"sub": "All das übernimmt hubsell, damit der Weg in den Posteingang nicht am Vertriebsteam hängt.", "startLabel": "Schützt", "items": [{"id": "email", "title": "Das eigene Postfach", "body": "E-Mails gehen aus dem eigenen Google-Workspace- oder Microsoft-365-Konto über dessen API raus, nicht über einen geteilten Server, dem Filter ohnehin misstrauen.", "start": "Die Absenderreputation"}, {"id": "clean", "title": "SPF, DKIM und DMARC", "body": "Das hubsell-Team richtet die drei Einträge gemeinsam mit dem Kunden ein, damit Mail-Anbieter bestätigen können, dass die Nachrichten wirklich von der eigenen Domain kommen.", "start": "Die Domain"}, {"id": "profile", "title": "Verifizierte Kontakte", "body": "Jede Adresse wird am Tag der Nutzung geprüft, Catch-all-Domains eingeschlossen. So bouncen wenige E-Mails, und Anbieter sehen eine saubere Liste.", "start": "Die Bounce-Rate"}, {"id": "wait", "title": "Ein Tageslimit", "body": "Das Postfach sendet nur eine begrenzte Zahl E-Mails pro Tag, sodass das Volumen nie sprunghaft steigt und auffällt.", "start": "Jeden Absender"}, {"id": "event", "title": "Versandzeiten", "body": "E-Mails gehen innerhalb der festgelegten Zeiten raus, über den Tag verteilt, so wie ein Mensch Mails schreibt.", "start": "Das Timing"}, {"id": "branch", "title": "Stopp bei Antwort oder Bounce", "body": "Antwortet ein Kontakt oder bounct eine E-Mail, stoppt der Flow für diesen Kontakt. Niemand bekommt nach einer Antwort noch ein Follow-up.", "start": "Das Wohlwollen der Käufer"}, {"id": "ban", "title": "Keine Tracking-Umleitungen", "body": "Links werden nicht über eine Tracking-Domain umgeschrieben, damit die E-Mails wie gewöhnliche Mails aussehen.", "start": "Die Inbox-Platzierung"}, {"id": "search", "title": "Gezielt statt Masse", "body": "hubsell ist für geringes bis mittleres Volumen gebaut: weniger E-Mails an Personen, die zum ICP passen und einen Grund haben, von einem zu hören. Gezielter Outreach bekommt Antworten, und Antworten stärken die Absenderreputation.", "start": "Die Conversion"}]},
      "howSteps": {"items": [{"title": "Kontakt verifizieren", "body": "Die geschäftliche E-Mail wird am Tag der Ansprache erzeugt und validiert, Catch-all-Domains eingeschlossen."}, {"title": "Aus dem eigenen Postfach senden", "body": "Die E-Mail geht aus dem verbundenen Postfach raus, innerhalb des Tageslimits."}, {"title": "Versandzeiten einhalten", "body": "Die E-Mails werden innerhalb der festgelegten Versandzeiten verteilt, über die API von Google oder Microsoft."}, {"title": "Bei Antwort stoppen", "body": "Antworten und Bounces beenden den Flow für diesen Kontakt. Alle anderen gehen zum nächsten Schritt."}]},
      "extra": {"title": "Gute Daten bedeuten gute Zustellbarkeit", "paras": ["Die meisten Zustellbarkeitsprobleme beginnen vor der ersten E-Mail. Alte Listen sind voller Personen, die den Job gewechselt haben, und jeder Bounce signalisiert Mail-Anbietern, dass die E-Mail nicht erwünscht ist.", "hubsell recherchiert Kontakte dann, wenn sie gebraucht werden, und verifiziert jede E-Mail am selben Tag. So gehen Nachrichten an Personen, die die Rolle heute innehaben, und an Adressen, die existieren.", "Relevante, aktuelle Daten bringen auch Antworten, und Antworten sind für Mail-Anbieter das stärkste Zeichen, dass eine E-Mail in den Posteingang gehört."], "links": [{"label": "Mehr zu Live-Daten", "href": "/platform/live-data"}, {"label": "Mehr zur Anreicherung", "href": "/platform/enrichment"}]},
      "faqs": [{"question": "Was ist E-Mail-Zustellbarkeit?", "answer": "<p>E-Mail-Zustellbarkeit beschreibt, ob eine E-Mail im Posteingang landet statt im Spam-Ordner oder gar nicht. Sie hängt vom Versandweg, von der Reputation der Domain und von der Qualität der Adressen ab.</p>"}, {"question": "Warum landen Cold E-Mails im Spam?", "answer": "<p>Häufige Ursachen sind geteilte Versandserver, fehlende SPF-, DKIM- oder DMARC-Einträge, Adressen, die bouncen, plötzliche Volumenspitzen und Nachrichten, auf die niemand antwortet. hubsell geht jede dieser Ursachen an.</p>"}, {"question": "Wie schützt hubsell die Zustellbarkeit?", "answer": "<p>hubsell sendet aus dem eigenen Postfach über die API von Google oder Microsoft, richtet SPF, DKIM und DMARC gemeinsam mit dem Kunden ein, hält ein Tageslimit ein, sendet innerhalb der Versandzeiten, stoppt bei Antworten und Bounces und verifiziert jeden Kontakt am Tag der Nutzung.</p>"}, {"question": "Sendet hubsell aus dem eigenen Postfach?", "answer": "<p>Ja. E-Mails gehen aus den Postfächern bei Google Workspace oder Microsoft 365 über deren APIs raus. Es gibt keinen externen SMTP-Server und keine Tracking-Umleitung in der E-Mail.</p>"}, {"question": "Wer richtet SPF, DKIM und DMARC ein?", "answer": "<p>Das hubsell-Team richtet sie beim Onboarding gemeinsam mit dem Kunden ein, damit die Domain die Prüfungen der Mail-Anbieter besteht, bevor die erste Kampagne startet.</p>"}, {"question": "Gibt es ein tägliches Versandlimit?", "answer": "<p>Ja. Das Postfach hat ein Tageslimit. hubsell ist für geringes bis mittleres Volumen gebaut: Wenige E-Mails an gut ausgewählte Kontakte konvertieren besser als viele an eine breite Liste.</p>"}, {"question": "Lässt sich festlegen, wann E-Mails versendet werden?", "answer": "<p>Ja. Es werden Versandzeiten festgelegt, und die E-Mails gehen innerhalb dieser Zeiten raus, über den Tag verteilt statt alle auf einmal.</p>"}, {"question": "Was passiert, wenn ein Kontakt antwortet oder eine E-Mail bounct?", "answer": "<p>Der Flow stoppt für diesen Kontakt. Niemand bekommt nach einer Antwort noch ein Follow-up, und eine falsche Adresse wird nicht erneut angeschrieben.</p>"}, {"question": "Wie beeinflusst die Datenqualität die Zustellbarkeit?", "answer": "<p>Jeder Bounce schadet der Absenderreputation. hubsell verifiziert jede E-Mail am Tag der Nutzung, Catch-all-Domains eingeschlossen, und 95 % der geschäftlichen E-Mails sind korrekt. So bouncen deutlich weniger E-Mails. Mehr zur <a class=\"link\" href=\"/de/platform/enrichment/\">Anreicherung</a>.</p>"}, {"question": "Warum setzt hubsell auf geringes bis mittleres Volumen?", "answer": "<p>Weil gezielter Outreach konvertiert. Weniger E-Mails an Personen, die zum ICP passen und einen Grund haben, von einem zu hören, bekommen mehr Antworten, und Antworten zeigen den Mailanbietern, dass die E-Mail in den Posteingang gehört. Der Versand an eine breite Liste bewirkt das Gegenteil.</p>"}],
      "eyebrow": "E-Mail-Zustellbarkeit",
      "h1Pre": "Cold E-Mails ",
      "h1Accent": "im Posteingang",
      "h1Post": "",
      "sub": "Zustellbarkeit beginnt bei der Frage, wen man anschreibt. hubsell hält das Volumen gering bis mittel und zielgerichtet, sendet aus dem eigenen Postfach mit vom Team eingerichteter Authentifizierung, hält Tageslimit und Versandzeiten ein und verifiziert jeden Kontakt am Tag der Ansprache.",
      "demoCta": "Demo buchen",
      "row": {
        "titlePre": "Gesendet, wie ",
        "titleAccent": "Posteingänge es vertrauen",
        "titlePost": "",
        "points": [
          "E-Mails gehen aus dem eigenen Google-Workspace- oder Microsoft-365-Postfach über dessen API raus, ohne externen Server oder Tracking-Umleitung dazwischen.",
          "SPF, DKIM und DMARC richtet das hubsell-Team gemeinsam mit dem Kunden ein, damit Mail-Anbieter prüfen können, dass die E-Mails wirklich vom Absender stammen.",
          "Das Postfach hat ein Tageslimit und Versandzeiten, und der Flow stoppt für einen Kontakt, sobald er antwortet oder eine E-Mail bounct."
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
          "body": "Jede Adresse wird am Punkt der Nutzung geprüft, nicht aus einer vor Monaten erfassten Liste gezogen. Catch-all-Domains werden vor dem Senden markiert, sodass Credits für Kontakte ausgegeben werden, die Mail tatsächlich empfangen können."
        },
        {
          "title": "Aus den eigenen Postfächern gesendet",
          "body": "Outreach geht über die Google- und Microsoft-APIs direkt aus den eigenen Konten. Es gibt keinen Drittserver im Weg, dem Filter misstrauen könnten, sodass das Senden aussieht wie das, was es ist: echte Mail von einer echten Person."
        },
        {
          "title": "Authentifizierung richtig gemacht",
          "body": "SPF, DKIM und DMARC sind die Prüfungen, mit denen Anbieter entscheiden, ob Mail wirklich vom Absender stammt. hubsell leitet an, alle drei korrekt zu setzen, sodass die Domain besteht und den Nachrichten vertraut wird."
        },
        {
          "title": "Getaktet, nicht geblasen",
          "body": "Das Volumen bleibt gering bis mittel und innerhalb eines Tageslimits. Eine neue Domain baut ihre Reputation Schritt für Schritt auf, statt beim ersten Versand sprunghaft zu steigen."
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
      "path": "/platform/personalisation",
      "title": "Personalisierung auf Basis von Kaufsignalen für E-Mail und LinkedIn | hubsell",
      "metaDescription": "Personalisierter Outreach auf Basis von Kaufsignalen. hubsell lässt KI jede Nachricht aus dem Signal und der Unternehmenswebsite entwerfen, in Flows, die um jedes Signal herum gebaut sind.",
      "heroSlice": "personalization",
      "signalsAccordion": true,
      "compare": {"eyebrow": "Personalisierung von Cold E-Mails", "titlePre": "Serienbrief oder ", "titleAccent": "Nachrichten aus Signalen", "titlePost": "", "colA": "Serienbrief", "colB": "hubsell", "rows": [["Ausgangspunkt", "Eine Liste und eine Vorlage", "Das Signal, durch das der Kontakt auf die Liste kam"], ["Was personalisiert wird", "Vorname und Firmenname", "Die Nachricht, gebaut aus Signal und Unternehmen"], ["Recherche", "Von Hand oder gar nicht", "Die Unternehmenswebsite, für jeden Kontakt gelesen"], ["Schreiben", "Eine Vorlage für alle", "Ein KI-Entwurf für jeden Kontakt"], ["Flows", "Eine Kampagne für jeden Lead", "Ein Flow pro Signal, mit eigener Nachricht und eigenem Timing"], ["Daten darunter", "Alte Datensätze und falsche Positionen", "Am Tag der Ansprache verifiziert"]]},
      "heads": {"signals": {"eyebrow": "Personalisierung über Signale", "pre": "Ein Anlass zum Schreiben ", "accent": "für jeden Kontakt", "post": ""}, "explained": {"eyebrow": "Signale für Personalisierung", "pre": "Die Signale, mit denen ", "accent": "Nachrichten beginnen", "post": ""}, "steps": {"eyebrow": "So funktioniert es", "pre": "Vom Kaufsignal ", "accent": "zur persönlichen Nachricht", "post": ""}, "extra": {"eyebrow": "KI-Personalisierung", "pre": "KI, die aus Fakten schreibt, ", "accent": "nicht aus Vermutungen", "post": ""}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "persönlicher Outreach", "post": " verändert"}, "closing": {"eyebrow": "Personalisierter Outreach", "pre": "Sehen, was der Outreach ", "accent": "sagen könnte", "post": ""}, "faq": {"eyebrow": "FAQ zur Personalisierung", "pre": "Fragen zum ", "accent": "personalisierten Outreach", "post": ""}},
      "signals": {"sub": "Jedes Signal kann zu einem eigenen Flow werden, und jede Nachricht beginnt damit.", "startLabel": "Beginnt mit", "items": [{"id": "post", "title": "Post-Interaktionen", "body": "Personen, die einen LinkedIn-Post geliked, kommentiert oder geteilt haben, eigene oder von Wettbewerbern.", "start": "Dem Post und seinem Thema"}, {"id": "event", "title": "Event-Teilnehmer", "body": "Personen, die sich für ein LinkedIn-Event im eigenen Markt angemeldet haben.", "start": "Dem Event, das sie besuchen"}, {"id": "jobs", "title": "Jobwechsel", "body": "Personen, die gerade eine neue Rolle angetreten haben, wenn Prioritäten und Budgets gesetzt werden.", "start": "Der neuen Rolle"}, {"id": "hiring", "title": "Einstellungssignale", "body": "Unternehmen, die Rollen besetzen, die das eigene Produkt unterstützt.", "start": "Den Rollen, die besetzt werden"}, {"id": "followers", "title": "Follower von Wettbewerbern", "body": "Personen, die der Unternehmensseite eines Wettbewerbers folgen.", "start": "Dem Problem, das der Wettbewerber löst"}, {"id": "company", "title": "Unternehmenswebsite", "body": "Was das Unternehmen über sich sagt: was es verkauft, an wen und worauf es sich konzentriert.", "start": "Einem Satz über das Geschäft"}]},
      "howSteps": {"items": [{"title": "Signal wählen", "body": "Ein Flow startet mit einem Signal, etwa einem Post, einem Event, einer Suche nach einstellenden Unternehmen oder den Followern eines Wettbewerbers."}, {"title": "Qualifizieren und anreichern", "body": "Jede Person wird mit dem ICP abgeglichen und bekommt eine verifizierte E-Mail, bevor etwas geschrieben wird."}, {"title": "Unternehmen lesen", "body": "hubsell liest die Unternehmenswebsite, um zu erfassen, was das Geschäft macht und an wen es verkauft."}, {"title": "Mit KI entwerfen", "body": "KI schreibt für jeden Kontakt eine Nachricht aus dem Signal und den Angaben zum Unternehmen."}, {"title": "Flow ausführen", "body": "Die Nachricht geht als Schritt im Flow raus, und die nächsten Schritte richten sich nach dem Verhalten des Kontakts."}]},
      "extra": {"title": "KI, die aus Fakten schreibt, nicht aus Vermutungen", "paras": ["Generische KI-Texte sind leicht zu erkennen. Sie loben das Unternehmen, raten seine Herausforderungen und lesen sich, als wären sie für jeden geschrieben. Käufer erkennen das und ignorieren es.", "hubsell gibt der KI Fakten: das Signal, die aktuelle Rolle der Person und das, was die Unternehmenswebsite sagt. Der Entwurf bezieht sich auf Dinge, die stimmen, und liest sich wie eine Nachricht von jemandem, der hingesehen hat.", "Weil jeder Kontakt am selben Tag verifiziert wird, sind die Angaben in der Nachricht aktuell. Niemand bekommt Glückwünsche zu einer Stelle, die er vor einem Jahr verlassen hat."], "links": [{"label": "Mehr zu Live-Daten", "href": "/platform/live-data"}, {"label": "Mehr zum Multichannel-Outreach", "href": "/platform/multichannel-outreach"}]},
      "faqs": [{"question": "Was ist Personalisierung auf Basis von Signalen?", "answer": "<p>Personalisierung auf Basis von Signalen beginnt jede Nachricht mit dem Anlass der Ansprache: etwas, das die Person oder ihr Unternehmen kürzlich getan hat, etwa mit einem Post interagiert, den Job gewechselt oder Stellen ausgeschrieben. Sie ersetzt den Serienbrief mit Vornamen durch einen echten Grund zum Gespräch.</p>"}, {"question": "Wie personalisiert hubsell Cold E-Mails?", "answer": "<p>hubsell beginnt beim Signal, durch das ein Kontakt auf die Liste kam, liest die Unternehmenswebsite und lässt KI aus diesen Fakten für jeden Kontakt eine Nachricht entwerfen. Jedes Signal kann in einem eigenen Flow laufen, sodass Nachricht und Timing zum Anlass passen.</p>"}, {"question": "Welche Signale nutzt hubsell für die Personalisierung?", "answer": "<p>Interaktionen mit LinkedIn-Posts, Event-Teilnehmer, Jobwechsel, Unternehmen mit offenen Stellen und Follower von Wettbewerbern, dazu die Angaben der Unternehmenswebsite. Mehr zu <a class=\"link\" href=\"/de/platform/live-data/\">Live-Daten</a>.</p>"}, {"question": "Nutzt hubsell KI zum Schreiben von Nachrichten?", "answer": "<p>Ja. KI entwirft für jeden Kontakt eine Nachricht aus dem Signal und der Unternehmenswebsite. Sie arbeitet mit Fakten über die Person und das Unternehmen, nicht mit Vermutungen.</p>"}, {"question": "Was sind Flows pro Signal?", "answer": "<p>Statt einer Kampagne für alle Leads bekommt jedes Signal einen eigenen Flow. Wer mit einem Post interagiert hat, bekommt eine andere Nachricht, ein anderes Timing und andere Kanäle als jemand, dessen Unternehmen gerade einstellt.</p>"}, {"question": "Worin unterscheidet sich das von einem Serienbrief?", "answer": "<p>Ein Serienbrief setzt Vornamen und Firmennamen in eine Vorlage ein. Personalisierung über Signale verändert, was die Nachricht sagt, je nachdem, warum die Person angeschrieben wird.</p>"}, {"question": "Warum funktioniert generische KI-Personalisierung nicht?", "answer": "<p>Käufer erkennen KI-Texte, die aus dem Nichts geschrieben sind: schmeichelnd, vage und auf den Absender bezogen. Texte, die sich auf ein echtes Signal und das tatsächliche Geschäft beziehen, lesen sich wie von jemandem, der hingesehen hat.</p>"}, {"question": "Hilft Personalisierung bei der Zustellbarkeit?", "answer": "<p>Ja. Relevante E-Mails bekommen mehr Antworten, und Antworten zeigen Mail-Anbietern, dass die E-Mail erwünscht ist. Mehr zur <a class=\"link\" href=\"/de/platform/deliverability/\">Zustellbarkeit</a>.</p>"}, {"question": "Lässt sich Outreach im großen Maßstab personalisieren?", "answer": "<p>Ja. Signal, Unternehmensangaben und Entwurf kommen für jeden Kontakt zusammen. Derselbe Flow funktioniert für zehn Kontakte oder Tausende, ohne jede Nachricht neu zu schreiben.</p>"}, {"question": "Ist Outreach auf Basis von Signalen DSGVO-konform?", "answer": "<p>hubsell verarbeitet Daten für einen Zweck, der vor der Recherche festgelegt wird, und speichert sie nicht zum Weiterverkauf. Der Kunde bleibt Verantwortlicher, hubsell ist Auftragsverarbeiter, mit einem Auftragsverarbeitungsvertrag. Mehr zu <a class=\"link\" href=\"/de/platform/live-data/\">DSGVO-konformen B2B-Daten</a>.</p>"}],
      "eyebrow": "Personalisierung auf Basis von Signalen",
      "h1Pre": "Jede Nachricht ",
      "h1Accent": "mit Anlass",
      "h1Post": "",
      "sub": "Personalisierung beginnt mit einem Signal. hubsell ergänzt den Kontext aus der Rolle der Person und der Unternehmenswebsite, lässt KI daraus die Nachricht entwerfen, und die Ansprache hat einen Anlass, der für die Person zählt. Das bringt Antworten.",
      "demoCta": "Demo buchen",
      "row": {
            "titlePre": "Geschrieben f\u00fcr die ",
            "titleAccent": "Person und den Moment",
            "titlePost": "",
            "points": [
                  "Jede Nachricht beginnt mit einem echten Anlass: dem Post, mit dem jemand interagiert hat, der neuen Stelle, dem Event, für das sich jemand angemeldet hat, oder der Rolle, die das Unternehmen gerade besetzt.",
                  "KI entwirft jede Nachricht aus diesem Signal und aus dem, was die Unternehmenswebsite über das Geschäft sagt.",
                  "Jedes Signal bekommt einen eigenen Flow, sodass Nachricht, Timing und Kanäle zum Anlass der Ansprache passen."
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
      "compare": {"eyebrow": "B2B-Datenanreicherung", "titlePre": "Anreicherung aus einer Datenbank gegenüber ", "titleAccent": "Live-Anreicherung", "titlePost": "", "colA": "Anreicherung aus einer Datenbank", "colB": "hubsell Live-Anreicherung", "rows": [["Herkunft der Daten", "Die Datenbank eines Anbieters, einmal gefüllt und weiterverkauft", "Von hubsell am Tag der Anreicherung recherchiert und gesteuert, nur Telefonnummern von Partnern"], ["Genauigkeit der E-Mails", "Unbekannt, bis die Bounces kommen", "95 %, Catch-all-Domains eingeschlossen"], ["Namen, Titel, Unternehmen", "So aktuell wie die letzte Aktualisierung des Datensatzes", "99 % genau, abgeglichen mit dem aktuellen Profil"], ["Catch-all-Domains", "Oft als unbekannt markiert und ausgelassen", "Validiert wie jede andere Adresse"], ["Bezahlt wird", "Ein Datensatz, ob vollständig oder nicht", "Jeder erfolgreiche Schritt, in Credits"]]},
      "heads": {"signals": {"eyebrow": "E-Mail-Finder und Telefonnummern-Finder", "pre": "Ein Datensatz, ", "accent": "gesteuert von hubsell", "post": ""}, "explained": {"eyebrow": "Datenanreicherung", "pre": "Kontaktdaten-Anreicherung, ", "accent": "Feld für Feld", "post": ""}, "steps": {"eyebrow": "So funktioniert die Anreicherung", "pre": "So wird eine Liste ", "accent": "Schritt für Schritt angereichert", "post": ""}, "extra": {"eyebrow": "E-Mail-Verifizierung", "pre": "", "accent": "Catch-all-Verifizierung", "post": " inklusive"}, "proof": {"eyebrow": "Kundenergebnisse", "pre": "Was ", "accent": "vollständige Kontaktdaten", "post": " verändern"}, "closing": {"eyebrow": "B2B-Kontaktdaten", "pre": "Listen mit ", "accent": "verifizierten Kontaktdaten", "post": " anreichern"}, "faq": {"eyebrow": "FAQ zur Datenanreicherung", "pre": "Fragen zur ", "accent": "Anreicherung von Kontaktdaten", "post": ""}},
      "signals": {"sub": "Jedes Feld wird am Tag der Anreicherung von hubsell recherchiert oder erzeugt und geprüft, bevor es in den Outreach oder das CRM gelangt.", "startLabel": "Genauigkeit", "items": [{"id": "email", "title": "Geschäftliche E-Mail-Adressen", "body": "hubsell generiert und validiert die geschäftliche E-Mail-Adresse jedes Kontakts mit eigenen Methoden, am Punkt der Nutzung. Auch Adressen auf Catch-all-Domains werden validiert und müssen nicht ausgelassen werden.", "start": "95 %, Catch-all-Domains eingeschlossen"}, {"id": "phone", "title": "Durchwahlen und Mobilnummern", "body": "Durchwahlen und Mobilnummern stammen von Partnern, die nach Genauigkeit und Qualität ausgewählt sind, nicht nach Preis. Die Telefonanreicherung ist optional und wird nur für die Kontakte genutzt, die angerufen werden sollen.", "start": "Aus Partnerdatenbanken, nach Qualität ausgewählt"}, {"id": "profile", "title": "LinkedIn-Profil-URLs", "body": "Bei einer importierten Liste ordnet hubsell jedem Kontakt anhand von vollständigem Namen, Unternehmen und Titel das LinkedIn-Profil zu. Erst mit dem Profil kann ein Kontakt die LinkedIn-Schritte eines Flows durchlaufen.", "start": "99 %"}, {"id": "clean", "title": "Namen, Titel und Unternehmen, bereinigt", "body": "Importierte Listen enthalten alte Titel, Tippfehler und uneinheitliche Firmennamen. hubsell bereinigt und normalisiert jeden Datensatz mit KI und korrigiert, was sich seit dem Erstellen der Liste geändert hat.", "start": "99 %"}]},
      "howSteps": {"note": "Jeder Schritt wird in Credits berechnet, und nur, wenn er gelingt: Ein fehlgeschlagener Schritt kostet nichts, bereits abgeschlossene Schritte werden berechnet.", "items": [{"title": "Daten recherchieren", "body": "Die Daten jedes Kontakts werden live von LinkedIn und Unternehmenswebsites erhoben."}, {"title": "Mit KI bereinigen und normalisieren", "body": "Namen, Titel und Unternehmen werden bereinigt und in ein einheitliches Format gebracht."}, {"title": "Fehlende Daten ergänzen", "body": "Lücken im Datensatz werden gefüllt, etwa ein fehlender Titel oder eine Unternehmensangabe."}, {"title": "E-Mail generieren und validieren", "body": "Geschäftliche E-Mails werden mit eigenen Methoden von hubsell generiert und validiert, Catch-all inklusive."}, {"title": "Telefonnummer beschaffen", "body": "Optional: eine Durchwahl oder Mobilnummer von einem Qualitätspartner."}, {"title": "Qualitätsprüfung", "body": "Jeder Datensatz wird geprüft, bevor er zur Nutzung übergeben wird."}]},
      "extra": {"title": "Catch-all-Verifizierung", "paras": ["Eine Catch-all-Domain nimmt Mail für jede Adresse an. Eine normale Prüfung kann deshalb ein echtes Postfach nicht von einer falschen Adresse unterscheiden. Listen markieren diese Kontakte meist als unbekannt, sodass sie entweder ausgelassen werden oder Bounces drohen.", "hubsell verifiziert Adressen auf Catch-all-Domains bei jeder Anreicherung, im Moment der Nutzung. So sind 95 % der gelieferten E-Mails genau, Catch-all-Domains eingeschlossen, und die Bounce-Rate bleibt niedrig."], "links": [{"label": "So schützt hubsell die Zustellbarkeit", "href": "/platform/deliverability"}]},
      "faqs": [{"question": "Was ist Kontaktdaten-Anreicherung?", "answer": "<p>Kontaktdaten-Anreicherung ergänzt die fehlenden Angaben eines Kontaktdatensatzes: eine geschäftliche E-Mail, eine Telefonnummer, ein LinkedIn-Profil sowie aktuellen Titel und aktuelles Unternehmen. hubsell reichert jeden Kontakt live am Tag der Anfrage an und verifiziert das Ergebnis, bevor es in den Outreach oder das CRM gelangt.</p>"}, {"question": "Was braucht hubsell, um eine Liste anzureichern?", "answer": "<p>Vollständigen Namen, Unternehmen und Titel je Kontakt. Daraus recherchiert hubsell die Daten der Person live, bereinigt und normalisiert sie mit KI, füllt Lücken, generiert und validiert die geschäftliche E-Mail und ergänzt auf Wunsch eine Telefonnummer. Jeder Datensatz wird vor der Nutzung qualitätsgeprüft.</p>"}, {"question": "Wie genau ist die Anreicherung von hubsell?", "answer": "<p>95 % der geschäftlichen E-Mail-Adressen sind genau, Catch-all-Domains eingeschlossen. Namen, Titel, Unternehmen und LinkedIn-Profile sind zu 99 % genau. Telefonnummern stammen aus Partnerdatenbanken, daher nennt hubsell dafür keine einheitliche Genauigkeit. Die Partner sind aber nach Genauigkeit und Qualität ausgewählt, nicht nach Preis.</p>"}, {"question": "Kann hubsell E-Mail-Adressen auf Catch-all-Domains verifizieren?", "answer": "<p>Ja. Eine Catch-all-Domain nimmt Mail für jede Adresse an, daher kann eine normale Prüfung ein echtes Postfach nicht von einer falschen Adresse unterscheiden. hubsell verifiziert auch Adressen auf Catch-all-Domains, und sie sind Teil der 95 % Genauigkeit.</p>"}, {"question": "Findet hubsell Mobilnummern und Durchwahlen?", "answer": "<p>Ja, beides. Telefonnummern stammen von Partnern, die nach Genauigkeit und Qualität statt nach Preis ausgewählt sind. Die Telefonanreicherung ist optional und wird nur für die Kontakte genutzt, die angerufen werden sollen.</p>"}, {"question": "Wie berechnet hubsell die Anreicherung?", "answer": "<p>Die Anreicherung wird in Credits für jeden erfolgreichen Schritt berechnet. Das Recherchieren eines Kontakts kostet 1 Credit, eine validierte geschäftliche E-Mail 5 (Catch-all-Domains eingeschlossen) und eine Telefonnummer 5. Schlägt ein Schritt fehl, kostet dieser Schritt nichts; bereits abgeschlossene Schritte werden berechnet. Mehr unter <a class=\"link\" href=\"/de/pricing/\">Preise</a>.</p>"}, {"question": "Woher stammen die Daten für die Anreicherung?", "answer": "<p>hubsell recherchiert und steuert die Daten selbst, live von LinkedIn und Unternehmenswebsites, und generiert und validiert geschäftliche E-Mail-Adressen mit eigenen Methoden. Kontakte laufen nicht durch die Datenbanken anderer Anbieter. Nur Telefonnummern stammen von Partnern, ausgewählt nach Genauigkeit und Qualität.</p>"}, {"question": "Worin unterscheidet sich Live-Anreicherung von der Anreicherung aus einer B2B-Datenbank?", "answer": "<p>Eine Datenbank reichert die Liste aus Datensätzen an, die sie früher gesammelt hat. Die Angaben können also Monate oder Jahre alt sein. hubsell prüft jeden Kontakt am Tag der Anreicherung, sodass Titel, Unternehmen und E-Mail bei der Nutzung aktuell sind.</p>"}, {"question": "Können angereicherte Kontakte direkt in den Outreach und ins CRM?", "answer": "<p>Ja. Angereicherte Kontakte gehen direkt in die LinkedIn-, E-Mail- und Anruf-Flows in hubsell und werden mit Salesforce, HubSpot oder Pipedrive synchronisiert, ohne Export oder Bereinigung. Mehr dazu unter <a class=\"link\" href=\"/de/platform/multichannel-outreach/\">Multichannel-Outreach</a> und <a class=\"link\" href=\"/de/platform/crm-sync/\">CRM-Sync</a>.</p>"}, {"question": "Sind angereicherte Daten DSGVO-konform?", "answer": "<p>Ja. hubsell reichert Daten ad hoc für jeden Kunden an und hält sie nicht zum Weiterverkauf vor. Der Kunde bleibt Verantwortlicher, hubsell ist Auftragsverarbeiter, auf Grundlage eines Auftragsverarbeitungsvertrags. Mehr zu <a class=\"link\" href=\"/de/platform/live-data/#pf-extra\">DSGVO-konformen B2B-Daten</a>.</p>"}],
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
