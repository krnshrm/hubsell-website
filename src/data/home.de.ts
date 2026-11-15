// ─────────────────────────────────────────────────────────────────────────────
// GERMAN HOMEPAGE COPY. Formal "Sie", as in the app (since 2026-11-13; third
// person before that). Where the English says "you" or "your", the German says
// "Sie" or "Ihr"; statements about hubsell stay statements. Product terms follow
// docs/20261113-1401-APP-TERMS.md. This is the single file to
// review/adjust German wording. Shapes mirror home-content.ts; English lives
// there. Brand is always lowercase "hubsell". Common SaaS terms (CRM, Pipeline,
// LinkedIn, Outbound, GTM, ICP, Beta) are kept where they read naturally.
//
// NOTE FOR REVIEW, the six testimonial quotes below are translations of real,
// attributed customer quotes. Revert any individual `quote` to its English
// original (in home-content.ts) if you would rather not render a German
// paraphrase under a named person. Names, titles, companies and metrics are
// unchanged; only the quote sentence and the result labels are translated.
// ─────────────────────────────────────────────────────────────────────────────
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const pipelineStepsDe: PipelineStep[] = [
  {
    n: '01',
    label: 'Live-Daten',
    title: 'Die ', titleAccent: 'richtigen Menschen', tail: ' finden, nicht nur die richtigen Filter',
    points: [
      'Bei den meisten Plattformen filtern Sie nur nach Position und Branche.',
      'hubsell recherchiert aus aktuellen Verhaltenssignalen: Personen, die einer Unternehmensseite folgen, mit einem LinkedIn-Beitrag interagieren, den Job wechseln, Events besuchen oder gezielt Stellen ausschreiben.',
      'Jeder Kontakt in Ihrem Flow wird mit Ihrem ICP abgeglichen und im Moment der Nutzung validiert.',
    ],
    cta: 'Ihre Daten recherchieren', more: 'Mehr zu Live-Daten', embed: '05-sp-widget', flip: false,
  },
  {
    n: '02',
    label: 'Multichannel-Outreach',
    title: 'Ein ', titleAccent: 'koordinierter Multi-Channel', tail: '-Flow',
    points: [
      'E-Mail-, LinkedIn- und Telefon-Schritte kommen per Drag-and-drop in einen einzigen Flow.',
      'Profilbesuche, Vernetzungsanfragen, DMs, InMail, Anrufaufgaben: alles abgestimmt auf Ihre E-Mail-Kadenz.',
      'Verzweigungsbedingungen leiten Kontakte automatisch danach, was sie tun, sodass jeder Pfad ohne manuelles Eingreifen abgedeckt ist.',
    ],
    cta: 'Demo ansehen', more: 'Mehr zu Multichannel-Outreach', embed: '06-multichannel-flow', recolor: 'espresso', flip: true,
  },
  {
    n: '03',
    label: 'Automatische CRM-Synchronisierung',
    title: 'Jede Aktivität ', titleAccent: 'in Echtzeit in Ihrem CRM', tail: '',
    points: [
      'Jeder Touchpoint – gesendet, geöffnet, beantwortet, vernetzt – wird automatisch in Salesforce, HubSpot oder Pipedrive protokolliert.',
      'Keine manuelle Eingabe. Kein Datenverfall. Ihr Team arbeitet an der Pipeline, nicht an der Tabelle.',
    ],
    cta: 'Live ansehen', more: 'Mehr zu CRM-Sync', embed: '07-crm-sync-tracker', recolor: 'espresso', flip: false,
  },
];

export const featuresDe: Feature[] = [
  { title: 'Live recherchierte Interessentendaten', body: 'Ersetzen Sie statische Datenbanken durch live recherchierte Kontakte, die zu Ihrem ICP passen. Keine veralteten Daten, kein verschwendetes Outreach-Budget.' },
  { title: 'E-Mail, LinkedIn & Telefon in einem Flow', body: 'hubsell führt E-Mail, LinkedIn und Telefon als einen koordinierten Flow aus, nicht als getrennte Tools. Profilbesuche, Vernetzungsanfragen, DMs, InMail und Anrufaufgaben laufen aus einem einzigen Flow.' },
  { title: 'KI-Qualifizierung und -Routing', body: 'Qualifizieren Sie Kontakte mit KI anhand Ihres ICP und leiten Sie sie automatisch in den richtigen Flow, bevor Sie einen einzigen Credit für Outreach ausgeben.', beta: true },
  { title: 'Abdeckung des Buying Committee', body: 'hubsell erreicht jeden Stakeholder eines Zielkunden über E-Mail und LinkedIn aus einer einzigen Kampagne. Kein Tool-Wechsel.' },
  { title: 'Intelligentes Outreach über mehrere Absender', body: 'hubsell verteilt Outreach sicher über CEO-, VP-Sales- und Fachexperten-Profile und vervielfacht so die Reichweite, ohne einen einzelnen Absender zu verbrennen.' },
  { title: 'Verifizierung von Catch-all-Domains', body: 'Eine proprietäre Validierung verifiziert Catch-all-Domains und schützt Ihre Absenderreputation vor Hard Bounces und Blacklists.' },
  { title: 'LinkedIn-Content in Pipeline verwandeln', body: 'Veröffentlichen Sie einen LinkedIn-Beitrag und interagieren Sie automatisch mit allen, die ihn liken, kommentieren oder teilen. So wird aus diesen warmen Signalen Pipeline, bevor Ihr Wettbewerb reagiert.', beta: true },
  { title: 'Intent- und signalgesteuerte Ansprache', body: 'hubsell erkennt die 5 % kaufbereiten Interessenten anhand von Echtzeit-Intent-Signalen und leitet sie automatisch in gezielte Flows.', beta: true },
];

export const rolesDe: Role[] = [
  { title: 'Vertrieb', line: 'Recherchieren, ansprechen und abschließen aus einem Workspace. Kein Tab-Wechsel.' },
  { title: 'Gründer', line: 'Founder-led Outbound, das ankommt, ohne ein SDR-Team einzustellen.' },
  { title: 'Sales Operations', line: 'Ein System of Record, automatisch mit Ihrem CRM synchronisiert.' },
  { title: 'RevOps', line: 'Saubere, validierte Daten rein und raus. Keine manuelle Pflege.' },
  { title: 'Marketing', line: 'LinkedIn-Nachfrage wird zu qualifizierter, nachverfolgbarer Pipeline.' },
  { title: 'GTM Engineers', line: 'Live-Daten, Multi-Channel-Flows und Routing an einem Ort.' },
];

export const testimonialsDe: Testimonial[] = [
  {
    quote: 'Die Automatisierung von hubsell liefert maximalen Ertrag bei minimalem Aufwand für Datenrecherche und Cold Outreach. Die Outreach-Funktionalität ist hervorragend.',
    name: 'Richard Wood', title: 'CEO', company: 'Safran Software', slug: 'safran',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp',
    results: [
      { metric: '30%', label: 'geringere Kundenakquisekosten' },
      { metric: '1000+', label: 'Accounts mit gesteigerter Bekanntheit' },
      { metric: '25 Std.', label: 'pro Woche gespart' },
    ],
  },
  {
    quote: 'Dank hubsell erreichen wir mehr Menschen in weniger Zeit – und kommunizieren dabei so persönlich, wie wir es manuell tun würden.',
    name: 'Laurent Schauvliege', title: 'Business Manager', company: 'Verhaert', slug: 'verhaert',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif',
    results: [
      { metric: '3x', label: 'mehr generierte Opportunities' },
      { metric: '60%', label: 'höhere Öffnungsrate' },
      { metric: '90%+', label: 'Grad der Personalisierung' },
    ],
  },
  {
    quote: 'hubsell ist mehr als nur ein Anbieter – sie sind ein echter Partner und unterstützen Sie bei Ihrem gesamten Vorgehen.',
    name: 'Peter Mallozzi', title: 'Outbound Sales', company: 'Staffbase', slug: 'staffbase',
    image: 'https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png',
    results: [
      { metric: '15,6%', label: 'Antworten über verschiedene Märkte hinweg' },
      { metric: '3,5%', label: 'Engagement-Rate, die zu einem Gespräch führt' },
      { metric: '15', label: 'erfolgreich adressierte Märkte' },
    ],
  },
  {
    quote: 'Ich würde hubsell als Partner empfehlen, wenn Sie mit einem kleinen Team echte Ergebnisse aus Outbound-Vertrieb und -Marketing erzielen möchten.',
    name: 'Rachel Chan', title: 'Digital Marketing Team Lead', company: 'Elium', slug: 'elium',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif',
    results: [
      { metric: '25%', label: 'mehr Lead-Generierung' },
      { metric: '53%', label: 'höhere Öffnungsrate' },
      { metric: '20 Std.+', label: 'pro Woche gespart' },
    ],
  },
  {
    quote: 'Ich habe kein Tool gefunden, das hubsell bei Segmentierung, Antworterkennung sowie Integrationen in soziale Netzwerke und CRM nahekommt.',
    name: 'Mark Grasmayer', title: 'Product Evangelist', company: 'Workspace 365', slug: 'workspace365',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif',
    results: [
      { metric: '100+', label: 'neue Geschäftsmöglichkeiten generiert' },
      { metric: '71%', label: 'höhere Öffnungsrate' },
      { metric: '33%', label: 'geringere Kundenakquisekosten' },
    ],
  },
  {
    quote: 'hubsell hilft uns, Interaktionen mit Interessenten aus verschiedenen Branchen zu generieren – entscheidend für unsere Expansion.',
    name: 'Eylül Eygi', title: 'Head of Marketing', company: 'Sensolus', slug: 'sensolus',
    image: 'https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png',
    results: [
      { metric: '30%', label: 'geringere CAC' },
      { metric: '22%', label: 'Antwortrate' },
      { metric: '61%', label: 'Öffnungsrate' },
    ],
  },
];

export const insightsDe: Insight[] = [
  {
    title: 'Der Verkauf beginnt mit einem Nein – eine Lektion über Einwandbehandlung',
    excerpt: 'Warum „der Verkauf mit einem Nein beginnt“, die wahren Gründe, warum Interessenten Sie ablehnen, und drei Strategien, um Ablehnung in Abschlüsse zu verwandeln.',
    slug: 'the-sale-starts-with-a-no-objection-handling',
    image: 'https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png',
  },
  {
    title: 'Sieben Methoden, um die Produktivität Ihres Vertriebsteams zu steigern',
    excerpt: 'Die größten Faktoren, die ein Vertriebsteam ineffizient machen, plus sieben bewährte Wege, den Output zu skalieren, ohne das Team auszubrennen.',
    slug: 'methods-increase-productivity-salespeople',
    image: 'https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png',
  },
  {
    title: 'Warum Lead-Generierung ein qualitativer Prozess sein muss',
    excerpt: 'Von Quantität zu Qualität im automatisierten Outbound: die Gefahren von Spam, warum genaue Daten zählen, und E-Mail-Texte, die Vertrauen aufbauen.',
    slug: 'why-automated-lead-generation-needs-to-be-a-qualitative-process',
    image: 'https://assets.hubsell.com/insights/69e9ef6291a191221bc032dc_Thumbnail-Why-lead-generation-needs-to-be-a-qualitative-process.png',
  },
];

// Competitor copy stays factual, positioning, never a put-down. Marks (yes/part/
// no) and the /vs hrefs are structural and live in the component.
export const comparisonDe: ComparisonData = {
  heads: {
    hub:    { label: 'hubsell' },
    aio:    { label: 'All-in-One-Plattformen', href: '/vs/apollo' },
    data:   { label: 'Enterprise-Daten',       href: '/vs/zoominfo' },
    lookup: { label: 'Lookup-Tools',           href: '/vs/lusha' },
  },
  rows: [
    { label: 'Live, validierte Daten', cells: {
      hub:['yes','Live recherchiert, im Moment der Nutzung verifiziert'], aio:['part','Vorgefertigte Datenbank mit ~275 Mio.'],
      data:['part','Große statische Datenbank'], lookup:['part','Einzelne Kontaktabfragen'] } },
    { label: 'E-Mail, LinkedIn & Telefon, ein Flow', cells: {
      hub:['yes','Ein Flow, Anrufe als CRM-Aufgaben'], aio:['part','E-Mail automatisiert, LinkedIn manuell'],
      data:['no','Outreach separat verkauft'], lookup:['no','Keine Outreach-Ebene'] } },
    { label: 'Automatische CRM-Synchronisierung', cells: {
      hub:['yes','Salesforce, HubSpot & Pipedrive'], aio:['part','Salesforce & HubSpot nativ'],
      data:['part','Nativ für große CRMs'], lookup:['part','Einfach, oft über Zapier'] } },
    { label: 'Sie zahlen für das, was korrekt ist', cells: {
      hub:['yes','Pro recherchiertem & validiertem Kontakt'], aio:['no','Pro Platz, plus Credits'],
      data:['no','Fünfstellige Jahresverträge'], lookup:['part','Credits auch für Fehltreffer'] } },
    { label: 'Eine Plattform, kein Flickwerk', cells: {
      hub:['yes','Daten, Outreach & Sync zusammen'], aio:['part','Zwei der Bausteine'],
      data:['no','Nur Daten'], lookup:['no','Ein einzelner Baustein'] } },
  ],
};

export const faqsDe: Faq[] = [
  {
    question: 'Kann hubsell unseren bestehenden Outbound-Stack ersetzen?',
    slug: 'hubsell-replace-outbound-stack',
    answer: '<p>Für die meisten Teams: ja. hubsell ersetzt das Sales-Intelligence-Tool, die Sales-Engagement-Plattform und den manuellen LinkedIn-Outreach-Prozess in einer Plattform. Die meisten Teams, die wechseln, sparen innerhalb von 30 Tagen 2 bis 3 Tool-Abonnements ein. Nur Ihr CRM ersetzt hubsell nicht, sondern synchronisiert sich damit.</p>',
    onHomepage: true,
  },
  {
    question: 'Müssen wir die Kampagnen selbst aufbauen, oder bietet hubsell ein begleitetes Onboarding und Strategie?',
    slug: 'hubsell-onboarding-strategy',
    answer: '<p>Wir übergeben Ihnen nicht einfach einen Login und wünschen viel Glück. Das hubsell-Team übernimmt die komplette Kampagneneinrichtung, Datenrecherche und Flow-Konfiguration. Ihre erste Outbound-Kampagne startet so in unter 7 Tagen und wird von dort aus stetig besser.</p>',
    onHomepage: true,
  },
  {
    question: 'Lässt sich hubsell direkt in unser bestehendes CRM integrieren?',
    slug: 'hubsell-crm-integration',
    answer: '<p>hubsell ersetzt Ihr System of Record nicht, sondern stärkt es. Alle Aktivitäten – gesendete E-Mails, LinkedIn-Vernetzungsanfragen, Profilbesuche und Antworten – werden automatisch direkt in Salesforce, HubSpot oder Pipedrive protokolliert und beseitigen Datensilos in Ihrem Revenue-Team vollständig.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie betreibt man Outreach auf LinkedIn sicher, ohne eingeschränkt zu werden?',
    slug: 'safely-outreach-linkedin',
    answer: '<p>Das Problem ist die Konzentration von Aktivität in kurzer Zeit, die die Sicherheitsalgorithmen von LinkedIn auslöst. hubsell baut Ihr Netzwerk ersten Grades langsam und sicher das ganze Jahr über innerhalb strenger Plattformgrenzen auf. Das Limit von LinkedIn für DMs liegt deutlich höher.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie generieren wir Leads, wenn unsere Zielkunden nicht aktiv nach unserer Software suchen?',
    slug: 'generate-leads-out-of-cycle',
    answer: '<p>Die meisten Käufer sind in Verträgen gebunden oder außerhalb ihres Kaufzyklus. Wenn Sie ihnen etwas anbieten, werden Sie ignoriert. Besser funktioniert eine „Always-on“-Verbindungsstrategie, die wertvolle Inhalte, Brancheneinblicke und Event-Einladungen teilt. Wenn Sie jetzt auf Augenhöhe Mehrwert schaffen, werden Sie als Erstes angerufen, wenn das Kauffenster tatsächlich aufgeht.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie schneidet hubsell im Vergleich zu Outreach oder Salesloft ab?',
    slug: 'hubsell-vs-outreach-salesloft',
    answer: '<p>Outreach und Salesloft sind E-Mail-Sequenz-Tools – sie recherchieren keine Daten und beherrschen LinkedIn nicht nativ. Sie brauchen weiterhin einen separaten Datenanbieter und einen manuellen LinkedIn-Prozess. hubsell deckt alle drei Ebenen ab: aktuelle Interessentendaten, koordinierte E-Mail- und LinkedIn-Flows plus Anrufaufgaben und automatische CRM-Synchronisierung. Eine Plattform, ein Abonnement. Alle Vergleiche mit Apollo, ZoomInfo, Cognism, Lusha und Seamless stehen auf der <a href="/de/comparisons/">Vergleichsseite</a>.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie unterscheidet sich hubsell von statischen B2B-Datenbanken wie ZoomInfo oder Apollo?',
    slug: 'hubsell-catch-all-domains',
    answer: '<p>Die meisten Sales-Intelligence-Tools liefern einen statischen Export und überlassen den Outreach einer anderen Plattform. hubsell recherchiert Kontakte live im Moment der Anfrage, spricht sie per E-Mail, LinkedIn und Telefon an und synchronisiert alles mit dem CRM, ganz ohne Tool-Wechsel. Kein Datenbankverfall, kein zusammengeflickter Stack. Der Vergleich im Detail: <a href="/de/vs/zoominfo/">ZoomInfo-Alternative</a> und <a href="/de/vs/apollo/">Apollo-Alternative</a>.</p>',
    onHomepage: true,
  },
  {
    question: 'Ist hubsell DSGVO-konform?',
    slug: 'hubsell-gdpr-compliance',
    answer: '<p>Ja. hubsell hat seinen Sitz in Berlin, Deutschland. Wir halten strenge DSGVO-Konformität und Datenschutzstandards ein und stellen sicher, dass alle Engagement-Aktivitäten die regulatorischen Anforderungen erfüllen.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie baut man am wirkungsvollsten ein B2B-Publikum auf, das im Laufe der Zeit nicht verfällt?',
    slug: 'build-b2b-audience-no-decay',
    answer: '<p>E-Mail-Adressen gehören dem Arbeitgeber, Listen verfallen daher um rund 30% pro Jahr, wenn Menschen den Job wechseln. LinkedIn-Verbindungen gehören zur Person und wandern mit. Wenn Sie Ihr Publikum als LinkedIn-Netzwerk ersten Grades aufbauen, machen Sie aus jedem Jobwechsel einen warmen Einstieg in einen neuen Zielaccount statt eines toten Kontakts.</p>',
    onHomepage: true,
  },
  {
    question: 'Mit welchen Conversion-Raten (Annahme, Antworten und Engagement) sollten wir bei hubsell rechnen?',
    slug: 'hubsell-conversion-rates',
    answer: '<p>Wenn Sie das hubsell-Playbook korrekt befolgen, können Sie mit 25 bis 40 % Annahmerate, 10 bis 15 % Antwortrate und 3 bis 5 % gestarteten Gesprächen rechnen. Die Werte liegen am oberen Ende, wenn Ihre Absenderprofile nicht zu vertrieblich wirken.</p>',
    onHomepage: true,
  },
];

export const stringsDe: HomeStrings = {
  hero: {
    eyebrow: 'Für Gründer und Vertriebsleiter mit 6+ Tools',
    titlePre: 'Dieselbe Pipeline mit ', titleAccent: '50-mal weniger', titlePost: ' Kontakten.',
    sub: 'hubsell beschafft Kontakte live anhand von Kaufsignalen und führt E-Mail, LinkedIn und Telefon in einem Flow zusammen, der sich mit Ihrem CRM synchronisiert. Weniger Menschen angesprochen, gleich viele Termine gebucht.',
    ctaPrimary: 'Demo buchen',
    stats: [
      { value: '30 %', label: 'geringere Akquisekosten', company: 'Safran' },
      { value: '3x', label: 'mehr Opportunities', company: 'Verhaert' },
      { value: '25 %', label: 'mehr Leads', company: 'Elium' },
    ],
  },
  logos: {
    eyebrow: 'Drei dieser Teams haben ihre Kundenakquisekosten um 30 % oder mehr gesenkt',
    aria: 'Logos von Unternehmen, die hubsell nutzen: Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall und Monotype',
  },
  vvp: {
    eyebrow: 'Menge vs. Präzision',
    titlePre: 'Dieselben 42 Opportunities. ',
    titleAccent: 'Eine Vorgehensweise kostet Sie den gesamten Markt.',
    titlePost: '',
    lede: 'Beide Quartale enden mit derselben Pipeline. Der Unterschied liegt darin, wie viel von Ihrem Markt jede Vorgehensweise aufbraucht und ob im zweiten Quartal noch jemand für ein Gespräch übrig ist.',
    volTag: 'Hohe Menge',
    volTitle: 'An den gesamten TAM senden',
    volSub: 'Gekaufte Liste, Wegwerf-Domains, nur E-Mail, jeder Kontakt im Markt, jedes Quartal.',
    volAria: 'Ein Raster, das 100.000 Kontakte darstellt. Jeder Punkt wird rot, während der gesamte Markt kontaktiert wird.',
    preTag: 'Gezielte Ansprache',
    preTitle: 'An 2 % des TAM senden',
    preSub: 'Live beschafft anhand von Kaufsignalen, echte Domain, E-Mail, LinkedIn und Telefon in einem Flow.',
    preAria: 'Dasselbe Raster mit 100.000 Kontakten. Nur wenige Punkte werden grün und zeigen 2.000 erreichte Kontakte.',
    dotCaption: '1 Punkt = 100 Kontakte',
    contactsLabel: 'Kontakte angesprochen',
    oppsLabel: 'Opportunities',
    volChain: '100.000 gesendet \u00b7 80.000 zugestellt \u00b7 64.000 richtige Person \u00b7 25.600 Öffnungen \u00b7 768 im Markt \u00b7 77 positiv \u00b7 42 Opportunities',
    preChain: '2.000 beschafft \u00b7 1.960 zugestellt \u00b7 1.921 richtige Person \u00b7 1.537 erreicht \u00b7 307 im Markt \u00b7 77 positiv \u00b7 42 Opportunities',
    volAfter: '0 % Ihres Marktes übrig. Q2 trifft dieselben Postfächer erneut.',
    preAfter: '98 % Ihres Marktes noch unberührt. Der Prozess lässt sich im nächsten Quartal wiederholen.',
    kickerLabel: 'Benötigte Kontakte pro Opportunity',
    vs: 'vs.',
    kickerXPost: '-mal weniger',
    noteVolLabel: 'Hohe Menge:',
    noteVolBody: '20 % Bounce, 20 % falsche Person, 40 % Öffnungsrate, 3 % eines Marktes sind zu einem gegebenen Zeitpunkt im Kaufzyklus, 10 % davon vertrauen einem unbekannten Absender genug für eine Antwort, 55 % der positiven Antworten werden zu Opportunities.',
    notePreLabel: 'Gezielte Ansprache:',
    notePreBody: '98 % zum Zeitpunkt der Nutzung gültig, 80 % über E-Mail, LinkedIn und Telefon erreicht, 20 % im Markt, weil die Liste anhand von Kaufsignalen beschafft wird, 25 % Antwortrate, dieselben 55 % bis zur Opportunity.',
  },
  frag: {
    eyebrow: 'Das Problem des fragmentierten Stacks',
    titlePre: 'Sechs Tools in Ihrem Stack. Sechs Rechnungen. ', titleAccent: 'Keines spricht mit dem anderen.', titlePost: '',
    lede: 'Ein durchschnittliches Revenue-Team kauft sechs Tools für eine Aufgabe. Hier steht, was jedes davon Sie kostet und was hubsell stattdessen tut.',
    colTool: 'Was Sie kaufen',
    colHub: 'Was hubsell tut',
    pairs: [
      { tool: 'Lead-Datenbanken', cost: 'Daten veralten um 30 % pro Jahr. Lücken in Ihrem ICP.', cap: 'Live-Beschaffung', capDesc: 'Passend zu Ihrem ICP, an dem Tag, an dem Sie die Daten brauchen.' },
      { tool: 'E-Mail-Finder', cost: 'Mehrere Anbieter zu verwalten. Manuelles Stapeln, kein Flow.', cap: 'Zum Zeitpunkt der Nutzung geprüft', capDesc: 'KI-bereinigt, menschlich verifiziert.' },
      { tool: 'Buyer-Intent-Tools', cost: 'Keine Aktionsebene. Signale lösen nie Outreach aus.', cap: 'Signal-Layering', capDesc: 'Kaufbereite Kontakte aus Jobwechseln und Events.' },
      { tool: 'Cold-E-Mail-Tools', cost: 'E-Mail läuft für sich. LinkedIn ist ein eigenes Tool.', cap: 'E-Mail und LinkedIn in einem Flow', capDesc: 'Ein abgestimmter Flow.' },
      { tool: 'LinkedIn-Outreach', cost: 'Nur Punktlösung. Keine Verbindung zu E-Mail-Sequenzen.', cap: 'Alle Beteiligten, eine Kampagne', capDesc: 'Das gesamte Buying Center, nicht eine Person.' },
      { tool: 'CRM-Pflege', cost: 'Reps pflegen von Hand, oder gar nicht. CRM immer veraltet.', cap: 'Synchronisiertes CRM', capDesc: 'Automatisch in Salesforce, HubSpot und Pipedrive.' },
    ],
    cta: 'Vereinen Sie Ihren Stack noch heute',
  },
  zds: {
    eyebrow: 'Zero-Day-Sourcing',
    titlePre: 'B2B-Daten in dem Moment recherchiert, ', titleAccent: 'in dem Sie sie brauchen', titlePost: '. Nicht in dem Moment, in dem jemand anderes sie erfasst hat.',
    sub: 'hubsell verkauft nicht aus einer veralteten Datenbank. Sobald Sie Ihren ICP definieren, recherchieren wir live aus LinkedIn, passend zu Ihren Kriterien und im Moment der Nutzung validiert. hubsell hat seinen Sitz in Berlin und ist DSGVO-konform.',
    closer: 'Sie zahlen für einen Kontakt, der heute korrekt ist, nicht für den Zugang zu 300 Millionen Kontakten, die vor zwei Jahren richtig waren.',
    cta: 'So machen wir das',
  },
  ratings: {
    titlePre: 'Bewertet mit ', titleAccent: '4,6+', titlePost: ' bei G2, Capterra und GetApp',
    cue: 'Bewertungen lesen →',
    aria: (platform, score, out) => `hubsell-Bewertungen auf ${platform} lesen (bewertet mit ${score}${out})`,
  },
  pipeline: { eyebrow: 'Die dreistufige Pipeline-Bewegung', titlePre: 'Von der ', titleAccent: 'Anmeldung zum Termin', titlePost: ' in drei Schritten.' },
  pricing: { eyebrow: 'Preise', titlePre: 'Pläne für ', titleAccent: 'Gründer und Vertriebsteams', titlePost: '' },
  usecases: {
    eyebrow: 'Anwendungsfälle', titlePre: '', titleAccent: 'Eine Plattform', titlePost: ' für GTM',
    sub: 'Egal, welchen Platz Sie am Revenue-Tisch haben: hubsell ersetzt den Tool-Wildwuchs durch eine koordinierte Bewegung.',
  },
  featuresSec: {
    eyebrow: 'Die Plattform', titlePre: 'Live-Daten, E-Mail und LinkedIn orchestriert ', titleAccent: 'in einer Lösung', titlePost: '',
    beta: 'Beta', comingSoon: 'Demnächst',
  },
  testimonialsSec: {
    eyebrow: 'Erfolgsgeschichten', titlePre: 'Was passiert, wenn ', titleAccent: 'B2B-Teams', titlePost: ' den Stack ersetzen',
    readPre: 'Erfolgsgeschichte von ', readPost: ' lesen →',
  },
  loop: {
    eyebrow: 'Publizieren & verfolgen · Beta',
    titlePre: 'Ihr LinkedIn-Content erzeugt bereits Nachfrage. Jetzt ', titleAccent: 'schließen Sie den Kreis', titlePost: '.',
    body: 'Die meisten Outbound-Aktivitäten beginnen kalt. Aber wer Ihren LinkedIn-Content liked, kommentiert oder teilt, hat sich bereits gemeldet. Schon heute können Sie Post-Interagierende in hubsell importieren und in einen Flow aufnehmen. Was in der Beta kommt, ist der geschlossene Kreis: direkt aus hubsell publizieren, jede Interaktion in Echtzeit verfolgen und jede Person automatisch in einen warmen Flow aufnehmen, ganz ohne Listenexport oder Tab-Wechsel.',
    cta: 'Demo buchen',
    nowLabel: 'Heute verfügbar', betaLabel: 'In der Beta',
    now: ['Alle importieren, die liken, kommentieren oder teilen', 'Post-Interagierende noch heute in einen Flow aufnehmen'],
    beta: ['Direkt aus hubsell publizieren', 'Jede Interaktion in Echtzeit verfolgen', 'Jede Person automatisch in einen warmen Flow aufnehmen', 'Kein Listenexport, kein Tab-Wechsel'],
  },
  insightsSec: {
    newsTitle: 'Was im Outbound gerade funktioniert',
    newsSub: 'Playbooks, Zustellbarkeit und Outbound-Strategie, direkt in Ihr Postfach.',
    subscribeLabel: 'Abonnieren', emailPlaceholder: 'Geschäftliche E-Mail',
    eyebrow: 'Insights', titlePre: 'B2B-Outbound-', titleAccent: 'Playbooks', titlePost: ' und Insights',
    readMore: 'Mehr Insights lesen →', cardTag: 'B2B-Vertrieb',
  },
  cmp: {
    eyebrow: 'Warum hubsell',
    titlePre: 'Die meisten Tools hören bei den Daten auf. ', titleAccent: 'hubsell macht weiter.', titlePost: '',
    sub: 'hubsell recherchiert Kontakte live, führt E-Mail und LinkedIn in einem Flow aus und synchronisiert automatisch mit Ihrem CRM. Die Tools, die Sie sonst kaufen würden, decken jeweils nur einen Teil davon ab. hubsell deckt alles ab.',
    moat: 'Viele Tools beherrschen ein oder zwei davon. Keines beherrscht alle drei an einem Ort.',
    linksLabel: 'Vergleichen Sie hubsell mit einem bestimmten Tool?',
    srYes: 'Ja: ', srPart: 'Teilweise: ', srNo: 'Nein: ',
  },
  faqSec: {
    eyebrow: 'FAQ', titlePre: '', titleAccent: 'Ehrliche Antworten', titlePost: ', denn Outbound ist schon schwer genug.',
    seeAll: 'Alle Fragen ansehen →',
  },
};
