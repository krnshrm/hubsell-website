// ─────────────────────────────────────────────────────────────────────────────
// GERMAN HOMEPAGE COPY (formal "Sie" throughout). This is the single file to
// review/adjust German wording. Shapes mirror home-content.ts; English lives
// there. Brand is always lowercase "hubsell". Common SaaS terms (CRM, Pipeline,
// LinkedIn, Outbound, GTM, ICP, Beta) are kept where they read naturally.
//
// NOTE FOR REVIEW — the six testimonial quotes below are translations of real,
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
    label: 'Schritt 1 · Live recherchierte Daten',
    title: 'Finden Sie die ', titleAccent: 'richtigen Menschen', tail: ', nicht nur die richtigen Filter',
    points: [
      'Die meisten Plattformen lassen Sie nach Position und Branche filtern.',
      'hubsell recherchiert aus aktuellen Verhaltenssignalen: Personen, die einer Unternehmensseite folgen, mit einem LinkedIn-Beitrag interagieren, den Job wechseln, Events besuchen oder gezielt Stellen ausschreiben.',
      'Jeder Kontakt, der in Ihren Flow gelangt, wird mit Ihrem ICP abgeglichen und im Moment der Nutzung validiert.',
    ],
    cta: 'Daten recherchieren', embed: '05-sp-widget', flip: false,
  },
  {
    n: '02',
    label: 'Schritt 2 · Koordinierte Flows',
    title: 'Führen Sie einen ', titleAccent: 'koordinierten Multi-Channel', tail: '-Flow aus',
    points: [
      'Ziehen Sie E-Mail-, LinkedIn- und Telefon-Schritte per Drag-and-drop in einen einzigen Flow.',
      'Profilbesuche, Kontaktanfragen, DMs, InMail, Anrufaufgaben – alles abgestimmt auf Ihre E-Mail-Kadenz.',
      'Verzweigungsbedingungen leiten Kontakte automatisch danach, was sie tun, sodass jeder Pfad ohne manuelles Eingreifen abgedeckt ist.',
    ],
    cta: 'Demo ansehen', embed: '06-multichannel-flow', recolor: 'espresso', flip: true,
  },
  {
    n: '03',
    label: 'Schritt 3 · Automatische CRM-Synchronisierung',
    title: 'Protokollieren Sie alle Aktivitäten ', titleAccent: 'in Echtzeit in Ihrem CRM', tail: '',
    points: [
      'Jeder Touchpoint – gesendet, geöffnet, beantwortet, vernetzt – wird automatisch in Salesforce, HubSpot, Pipedrive, Freshworks oder ActiveCampaign protokolliert.',
      'Keine manuelle Eingabe. Kein Datenverfall. Ihr Team bearbeitet die Pipeline, nicht die Tabelle.',
    ],
    cta: 'Live ansehen', embed: '07-crm-sync-tracker', recolor: 'espresso', flip: false,
  },
];

export const featuresDe: Feature[] = [
  { title: 'Live recherchierte Interessentendaten', body: 'Ersetzen Sie statische Datenbanken durch live recherchierte Kontakte, die zu Ihrem ICP passen. Keine veralteten Daten, kein verschwendetes Outreach-Budget.' },
  { title: 'E-Mail, LinkedIn & Telefon in einem Flow', body: 'Führen Sie E-Mail, LinkedIn und Telefon als eine koordinierte Sequenz aus, nicht als getrennte Tools. Profilbesuche, Kontaktanfragen, DMs, InMail und Anrufaufgaben laufen aus einem einzigen Flow.' },
  { title: 'KI-Qualifizierung und -Routing', body: 'Qualifizieren Sie Kontakte mit KI anhand Ihres ICP und leiten Sie sie automatisch in den richtigen Flow – bevor Sie ein einziges Credit für Outreach ausgeben.', beta: true },
  { title: 'Abdeckung des Buying Committee', body: 'Erreichen Sie jeden Stakeholder in einem Zielkunden über E-Mail und LinkedIn aus einer einzigen Kampagne. Kein Tool-Wechsel.' },
  { title: 'Intelligentes Outreach über mehrere Absender', body: 'Verteilen Sie Outreach sicher über CEO-, VP-Sales- und Fachexperten-Profile, um die Reichweite zu vervielfachen, ohne einen einzelnen Absender zu verbrennen.' },
  { title: 'Verifizierung von Catch-all-Domains', body: 'Eine proprietäre Validierung verifiziert Catch-all-Domains und schützt Ihre Absenderreputation vor Hard Bounces und Blacklists.' },
  { title: 'LinkedIn-Content in Pipeline verwandeln', body: 'Veröffentlichen Sie einen LinkedIn-Beitrag und interagieren Sie automatisch mit allen, die ihn liken, kommentieren oder teilen – und verwandeln Sie diese warmen Signale in Pipeline, bevor Ihre Wettbewerber es tun.', beta: true },
  { title: 'Intent- und signalgesteuerte Ansprache', body: 'Identifizieren Sie die 5 % kaufbereiten Interessenten anhand von Echtzeit-Intent-Signalen und leiten Sie sie automatisch in gezielte Sequenzen.', beta: true },
];

export const rolesDe: Role[] = [
  { title: 'Vertrieb', line: 'Recherchieren, sequenzieren und abschließen aus einem Workspace. Kein Tab-Wechsel.' },
  { title: 'Gründer', line: 'Betreiben Sie Founder-led Outbound, das ankommt – ohne ein SDR-Team einzustellen.' },
  { title: 'Sales Operations', line: 'Ein System of Record, automatisch mit Ihrem CRM synchronisiert.' },
  { title: 'RevOps', line: 'Saubere, validierte Daten rein und raus. Keine manuelle Pflege.' },
  { title: 'Marketing', line: 'Verwandeln Sie LinkedIn-Nachfrage in qualifizierte, nachverfolgbare Pipeline.' },
  { title: 'GTM Engineers', line: 'Verbinden Sie Live-Daten, Multi-Channel-Flows und Routing an einem Ort.' },
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
    excerpt: 'Warum „der Verkauf mit einem Nein beginnt“, die wahren Gründe, warum Interessenten ablehnen, und drei Strategien, um Ablehnung in Abschlüsse zu verwandeln.',
    slug: 'the-sale-starts-with-a-no-objection-handling',
    image: 'https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png',
  },
  {
    title: 'Sieben Methoden, um die Produktivität Ihrer Vertriebsmitarbeiter zu steigern',
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

// Competitor copy stays factual — positioning, never a put-down. Marks (yes/part/
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
      hub:['yes','Eine Sequenz, Anrufe als CRM-Aufgaben'], aio:['part','E-Mail automatisiert, LinkedIn manuell'],
      data:['no','Outreach separat verkauft'], lookup:['no','Keine Outreach-Ebene'] } },
    { label: 'Automatische CRM-Synchronisierung', cells: {
      hub:['yes','Salesforce, HubSpot & Pipedrive'], aio:['part','Salesforce & HubSpot nativ'],
      data:['part','Nativ für große CRMs'], lookup:['part','Einfach, oft über Zapier'] } },
    { label: 'Sie zahlen für das, was korrekt ist', cells: {
      hub:['yes','Pro recherchiertem & validiertem Kontakt'], aio:['no','Pro Seat, plus Credits'],
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
    answer: '<p>Für die meisten Teams: ja. hubsell ersetzt Ihr Sales-Intelligence-Tool, Ihre Sales-Engagement-Plattform und Ihren manuellen LinkedIn-Outreach-Prozess in einer Plattform. Die meisten Teams, die wechseln, sparen innerhalb von 30 Tagen 2–3 Tool-Abonnements ein. Das Einzige, was hubsell nicht ersetzt, ist Ihr CRM – damit synchronisiert es sich.</p>',
    onHomepage: true,
  },
  {
    question: 'Müssen wir die Kampagnen selbst aufbauen, oder bietet hubsell ein begleitetes Onboarding und Strategie?',
    slug: 'hubsell-onboarding-strategy',
    answer: '<p>Wir übergeben Ihnen nicht einfach einen Login und wünschen viel Glück. Unser Team übernimmt die komplette Kampagneneinrichtung, Datenrecherche und Sequenzkonfiguration, sodass Sie Ihre erste Outbound-Kampagne in unter 7 Tagen starten können – und sie von dort aus stetig verbessern.</p>',
    onHomepage: true,
  },
  {
    question: 'Lässt sich hubsell direkt in unser bestehendes CRM integrieren?',
    slug: 'hubsell-crm-integration',
    answer: '<p>Wir ersetzen Ihr System of Record nicht, wir stärken es. Alle Aktivitäten – gesendete E-Mails, LinkedIn-Kontaktanfragen, Profilaufrufe und Antworten – werden automatisch direkt in Salesforce, HubSpot oder Pipedrive protokolliert und beseitigen Datensilos für Ihr Revenue-Team vollständig.</p>',
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
    answer: '<p>Die meisten Käufer sind in Verträgen gebunden oder außerhalb ihres Kaufzyklus. Wenn Sie ihnen etwas anbieten, ignorieren sie Sie. Nutzen Sie stattdessen eine „Always-on“-Verbindungsstrategie, um wertvolle Inhalte, Brancheneinblicke und Event-Einladungen zu teilen. Indem Sie jetzt auf Augenhöhe Mehrwert schaffen, sind Sie die Ersten, die angerufen werden, wenn das Kauffenster tatsächlich aufgeht.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie schneidet hubsell im Vergleich zu Outreach oder Salesloft ab?',
    slug: 'hubsell-vs-outreach-salesloft',
    answer: '<p>Outreach und Salesloft sind E-Mail-Sequenz-Tools – sie recherchieren keine Daten und beherrschen LinkedIn nicht nativ. Sie brauchen weiterhin einen separaten Datenanbieter und einen manuellen LinkedIn-Prozess. hubsell deckt alle drei Ebenen ab: aktuelle Interessentendaten, koordinierte E-Mail- und LinkedIn-Sequenzen plus Anrufaufgaben und automatische CRM-Synchronisierung. Eine Plattform, ein Abonnement.</p>',
    onHomepage: true,
  },
  {
    question: 'Wie unterscheidet sich hubsell von statischen B2B-Datenbanken wie ZoomInfo oder Apollo?',
    slug: 'hubsell-catch-all-domains',
    answer: '<p>Die meisten Sales-Intelligence-Tools übergeben Ihnen einen statischen Export und überlassen den Outreach einer anderen Plattform. hubsell recherchiert Kontakte live im Moment Ihrer Anfrage – und lässt Sie dann per E-Mail, LinkedIn und Telefon ansprechen und alles mit Ihrem CRM synchronisieren, ganz ohne Tool-Wechsel. Kein Datenbankverfall, kein zusammengeflickter Stack.</p>',
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
    answer: '<p>E-Mail-Adressen gehören dem Arbeitgeber, das heißt, Listen verfallen jährlich um rund 30 %, wenn Menschen den Job wechseln. LinkedIn-Profile sind an die persönliche Identität gebunden. Indem Sie „Network Equity“ auf LinkedIn aufbauen, wandern Ihre Kontakte mit dem Käufer mit und verschaffen Ihnen automatisch Zugang zu einem neuen Zielkunden, wenn dieser das Unternehmen wechselt.</p>',
    onHomepage: true,
  },
  {
    question: 'Mit welchen Conversion-Raten (Annahme, Antworten und Engagement) sollten wir bei hubsell rechnen?',
    slug: 'hubsell-conversion-rates',
    answer: '<p>Wenn Sie das hubsell-Playbook korrekt befolgen, können Sie mit 25–40 % Annahmerate, 10–15 % Antwortrate und 3–5 % gestarteten Gesprächen rechnen. Die Werte liegen am oberen Ende, wenn die Absenderprofile nicht zu vertrieblich wirken.</p>',
    onHomepage: true,
  },
];

export const stringsDe: HomeStrings = {
  hero: {
    eyebrow: 'Für VPs of Sales, die genug davon haben, für 6+ Tools zu zahlen',
    titlePre: 'Ersetzen Sie Ihren ', titleAccent: 'Outbound', titlePost: '-Stack durch eine Plattform.',
    sub: 'Ihr Team sollte Zeit mit Verkaufen verbringen, nicht mit dem Wechseln von Tabs. hubsell bringt Ihre Daten, Ihren Outreach und Ihre CRM-Synchronisierung an einen Ort, damit genau das gelingt.',
    ctaPrimary: 'Demo buchen', ctaSecondary: 'In Aktion sehen',
    ratingsPre: 'Bewertet mit ', ratingsScore: '4,8/5,0', ratingsPost: ' bei Capterra, GetApp und SoftwareAdvice.',
  },
  logos: {
    eyebrow: 'Vertraut von B2B-Revenue-Teams in ganz Europa',
    aria: 'Logos von Unternehmen, die hubsell nutzen, darunter Safran, Staffbase, Verhaert, Personio, Telenor und viele mehr',
  },
  frag: {
    eyebrow: 'Das Problem des fragmentierten Stacks',
    titlePre: 'Sechs Tools in Ihrem Stack. Sechs Rechnungen. ', titleAccent: 'Keines spricht mit dem anderen.', titlePost: '',
    badTag: 'Getrennt',
    badLine: 'Ein durchschnittliches Revenue-Team betreibt sechs Tools für eine Aufgabe. Jedes isoliert, keines spricht mit dem anderen. Fahren Sie über ein Tool, um zu sehen, wo es Sie angreifbar macht.',
    join: 'hubsell vereint alle sechs',
    goodTag: 'Verbunden',
    goodLine: 'Eine Plattform. Ein Login. Ein Flow. Eine Rechnung. Dieselben sechs Aufgaben miteinander verbunden, sodass aus einem Signal Outreach wird und Outreach in Ihrem CRM landet. Fahren Sie über eine Funktion, um zu sehen, was sie tut.',
    cta: 'Vereinen Sie Ihren Stack noch heute',
  },
  zds: {
    eyebrow: 'Zero-Day-Sourcing',
    titlePre: 'Daten in dem Moment recherchiert, ', titleAccent: 'in dem Sie sie brauchen', titlePost: '. Nicht in dem Moment, in dem jemand anderes sie erfasst hat.',
    sub: 'hubsell verkauft nicht aus einer veralteten Datenbank. Sobald Sie Ihren ICP definieren, recherchieren wir live aus LinkedIn – passend zu Ihren Kriterien und im Moment der Nutzung validiert.',
    closer: 'Sie zahlen für einen Kontakt, der heute korrekt ist, nicht für den Zugang zu 300 Millionen Kontakten, die vor zwei Jahren richtig waren.',
    cta: 'So machen wir das',
  },
  ratings: {
    titlePre: 'Bewertet mit ', titleAccent: '4,8+', titlePost: ' bei G2, Capterra und GetApp',
    cue: 'Bewertungen lesen →',
    aria: (platform, score, out) => `hubsell-Bewertungen auf ${platform} lesen (bewertet mit ${score}${out})`,
  },
  pipeline: { eyebrow: 'Die dreistufige Pipeline-Bewegung', titlePre: 'Von der ', titleAccent: 'Anmeldung zum Termin', titlePost: ' in drei Schritten.' },
  pricing: { eyebrow: 'Preise', titlePre: 'Pläne für ', titleAccent: 'Solopreneure & GTM-Teams', titlePost: '' },
  usecases: {
    eyebrow: 'Anwendungsfälle', titlePre: '', titleAccent: 'Eine Plattform', titlePost: ' für GTM',
    sub: 'Welchen Platz Sie auch am Revenue-Tisch einnehmen: hubsell ersetzt den Tool-Wildwuchs durch eine koordinierte Bewegung.',
  },
  featuresSec: {
    eyebrow: 'Die Plattform', titlePre: 'Live-Daten, E-Mail und LinkedIn orchestriert ', titleAccent: 'in einer Lösung', titlePost: '',
    beta: 'Beta', comingSoon: 'Demnächst',
  },
  testimonialsSec: {
    eyebrow: 'Erfolgsgeschichten', titlePre: 'Kundenreferenzen', titleAccent: '', titlePost: '',
    readPre: 'Erfolgsgeschichte von ', readPost: ' lesen →',
  },
  loop: {
    eyebrow: 'Publizieren & verfolgen · Beta',
    titlePre: 'Ihr LinkedIn-Content erzeugt bereits Nachfrage. Jetzt ', titleAccent: 'schließen Sie den Kreis', titlePost: '.',
    body: 'Die meisten Outbound-Aktivitäten beginnen kalt. Aber jeder, der Ihren LinkedIn-Content liked, kommentiert oder teilt, hat sich bereits gemeldet. Sie können Post-Interagierende schon heute in hubsell importieren und in eine Sequenz aufnehmen. Was in der Beta kommt, ist der geschlossene Kreis: direkt aus hubsell publizieren, jede Interaktion in Echtzeit verfolgen und jede Person automatisch in eine warme Sequenz aufnehmen – ganz ohne Liste zu exportieren oder Tabs zu wechseln.',
    cta: 'Demo buchen',
    nowLabel: 'Heute verfügbar', betaLabel: 'In der Beta',
    now: ['Importieren Sie alle, die liken, kommentieren oder teilen', 'Nehmen Sie Post-Interagierende noch heute in eine Sequenz auf'],
    beta: ['Direkt aus hubsell publizieren', 'Jede Interaktion in Echtzeit verfolgen', 'Jede Person automatisch in eine warme Sequenz aufnehmen', 'Kein Listenexport, kein Tab-Wechsel'],
  },
  insightsSec: {
    newsTitle: 'Bleiben Sie vorn im B2B-Vertrieb und -Marketing',
    newsSub: 'Playbooks, Zustellbarkeit und Outbound-Strategie – direkt in Ihr Postfach.',
    subscribeLabel: 'Abonnieren', emailPlaceholder: 'Ihre E-Mail',
    eyebrow: 'Insights', title: 'B2B-Outbound-Playbooks und Insights',
    readMore: 'Mehr Insights lesen →', cardTag: 'B2B-Vertrieb',
  },
  cmp: {
    eyebrow: 'Warum hubsell',
    title: 'Die meisten Tools hören bei den Daten auf. hubsell macht weiter.',
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
