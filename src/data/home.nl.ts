// ─────────────────────────────────────────────────────────────────────────────
// DUTCH HOMEPAGE COPY (formal "u" throughout). This is the single file to
// review/adjust Dutch wording. Shapes mirror home-content.ts; English lives
// there. Brand is always lowercase "hubsell". Common SaaS terms (CRM, Pipeline,
// LinkedIn, Outbound, GTM, ICP, Beta) are kept where they read naturally.
//
// NOTE FOR REVIEW — the six testimonial quotes below are translations of real,
// attributed customer quotes. Revert any individual `quote` to its English
// original (in home-content.ts) if you would rather not render a Dutch
// paraphrase under a named person. Names, titles, companies and metrics are
// unchanged; only the quote sentence and the result labels are translated.
// ─────────────────────────────────────────────────────────────────────────────
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const pipelineStepsNl: PipelineStep[] = [
  {
    n: '01',
    label: 'Live data',
    title: 'Vind de ', titleAccent: 'juiste mensen', tail: ', niet alleen de juiste filters',
    points: [
      'De meeste platforms laten u filteren op functie en branche.',
      'hubsell verzamelt op basis van actuele gedragssignalen: mensen die een bedrijfspagina volgen, met een LinkedIn-bericht interacteren, van baan wisselen, events bezoeken of gericht vacatures plaatsen.',
      'Elk contact dat in uw flow terechtkomt, wordt afgestemd op uw ICP en gevalideerd op het moment van gebruik.',
    ],
    cta: 'Data verzamelen', embed: '05-sp-widget', flip: false,
  },
  {
    n: '02',
    label: 'Multichannel-outreach',
    title: 'Voer een ', titleAccent: 'gecoördineerde multichannel', tail: '-flow uit',
    points: [
      'Sleep e-mail-, LinkedIn- en telefoon-stappen met drag-and-drop in één enkele flow.',
      'Profielbezoeken, connectieverzoeken, DMs, InMail, beltaken, alles afgestemd op uw e-mailcadans.',
      'Vertakkingsvoorwaarden sturen contacten automatisch op basis van wat ze doen, zodat elk pad zonder handmatig ingrijpen gedekt is.',
    ],
    cta: 'Demo bekijken', embed: '06-multichannel-flow', recolor: 'espresso', flip: true,
  },
  {
    n: '03',
    label: 'Automatische CRM-synchronisatie',
    title: 'Leg alle activiteit ', titleAccent: 'in realtime vast in uw CRM', tail: '',
    points: [
      'Elk touchpoint, verzonden, geopend, beantwoord, verbonden, wordt automatisch vastgelegd in Salesforce, HubSpot of Pipedrive.',
      'Geen handmatige invoer. Geen dataverval. Uw team werkt aan de pipeline, niet aan de spreadsheet.',
    ],
    cta: 'Live bekijken', embed: '07-crm-sync-tracker', recolor: 'espresso', flip: false,
  },
];

export const featuresNl: Feature[] = [
  { title: 'Live verzamelde prospectdata', body: 'Vervang statische databases door live verzamelde contacten die bij uw ICP passen. Geen verouderde data, geen verspild outreach-budget.' },
  { title: 'E-mail, LinkedIn & telefoon in één flow', body: 'Voer e-mail, LinkedIn en telefoon uit als één gecoördineerde sequentie, niet als losse tools. Profielbezoeken, connectieverzoeken, DMs, InMail en beltaken lopen vanuit één flow.' },
  { title: 'AI-kwalificatie en -routing', body: 'Kwalificeer contacten met AI op basis van uw ICP en stuur ze automatisch naar de juiste flow, voordat u ook maar één credit aan outreach uitgeeft.', beta: true },
  { title: 'Dekking van het buying committee', body: 'Bereik elke stakeholder binnen een doelaccount via e-mail en LinkedIn vanuit één campagne. Geen tool-wissel.' },
  { title: 'Slimme outreach via meerdere afzenders', body: 'Verdeel outreach veilig over CEO-, VP Sales- en expertprofielen om het bereik te vermenigvuldigen, zonder één afzender te verbranden.' },
  { title: 'Verificatie van catch-all-domeinen', body: 'Een eigen validatie verifieert catch-all-domeinen en beschermt uw afzenderreputatie tegen hard bounces en blacklists.' },
  { title: 'LinkedIn-content omzetten in pipeline', body: 'Publiceer een LinkedIn-bericht en interacteer automatisch met iedereen die het liket, erop reageert of het deelt, en zet die warme signalen om in pipeline voordat uw concurrenten dat doen.', beta: true },
  { title: 'Intent- en signaalgestuurde benadering', body: 'Identificeer de 5% koopklare prospects op basis van realtime intent-signalen en stuur ze automatisch naar gerichte sequenties.', beta: true },
];

export const rolesNl: Role[] = [
  { title: 'Sales', line: 'Verzamel, benader en sluit vanuit één workspace. Geen tab-wissel.' },
  { title: 'Oprichters', line: 'Draai founder-led outbound die aankomt, zonder een SDR-team aan te nemen.' },
  { title: 'Sales Operations', line: 'Eén system of record, automatisch gesynchroniseerd met uw CRM.' },
  { title: 'RevOps', line: 'Schone, gevalideerde data erin en eruit. Geen handmatig onderhoud.' },
  { title: 'Marketing', line: 'Zet LinkedIn-vraag om in gekwalificeerde, traceerbare pipeline.' },
  { title: 'GTM Engineers', line: 'Verbind live data, multichannel-flows en routing op één plek.' },
];

export const testimonialsNl: Testimonial[] = [
  {
    quote: 'De automatisering van hubsell levert maximaal rendement bij minimale inspanning voor dataverzameling en cold outreach. De outreach-functionaliteit is uitstekend.',
    name: 'Richard Wood', title: 'CEO', company: 'Safran Software', slug: 'safran',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp',
    results: [
      { metric: '30%', label: 'lagere klantacquisitiekosten' },
      { metric: '1000+', label: 'accounts met meer naamsbekendheid' },
      { metric: '25 uur', label: 'per week bespaard' },
    ],
  },
  {
    quote: 'Dankzij hubsell bereiken we meer mensen in minder tijd, en communiceren we daarbij net zo persoonlijk als we handmatig zouden doen.',
    name: 'Laurent Schauvliege', title: 'Business Manager', company: 'Verhaert', slug: 'verhaert',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif',
    results: [
      { metric: '3x', label: 'meer gegenereerde opportunities' },
      { metric: '60%', label: 'hogere openingsratio' },
      { metric: '90%+', label: 'mate van personalisatie' },
    ],
  },
  {
    quote: 'hubsell is meer dan alleen een leverancier, ze zijn een echte partner en ondersteunen u bij uw hele aanpak.',
    name: 'Peter Mallozzi', title: 'Outbound Sales', company: 'Staffbase', slug: 'staffbase',
    image: 'https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png',
    results: [
      { metric: '15,6%', label: 'antwoorden over verschillende markten heen' },
      { metric: '3,5%', label: 'engagementratio die tot een gesprek leidt' },
      { metric: '15', label: 'succesvol benaderde markten' },
    ],
  },
  {
    quote: 'Ik zou hubsell als partner aanraden als u met een klein team echte resultaten wilt halen uit outbound-sales en -marketing.',
    name: 'Rachel Chan', title: 'Digital Marketing Team Lead', company: 'Elium', slug: 'elium',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif',
    results: [
      { metric: '25%', label: 'meer leadgeneratie' },
      { metric: '53%', label: 'hogere openingsratio' },
      { metric: '20 uur+', label: 'per week bespaard' },
    ],
  },
  {
    quote: 'Ik heb geen tool gevonden die hubsell benadert op het gebied van segmentatie, antwoorddetectie en integraties met sociale netwerken en CRM.',
    name: 'Mark Grasmayer', title: 'Product Evangelist', company: 'Workspace 365', slug: 'workspace365',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif',
    results: [
      { metric: '100+', label: 'nieuwe zakelijke kansen gegenereerd' },
      { metric: '71%', label: 'hogere openingsratio' },
      { metric: '33%', label: 'lagere klantacquisitiekosten' },
    ],
  },
  {
    quote: 'hubsell helpt ons interacties te genereren met prospects uit verschillende branches, cruciaal voor onze expansie.',
    name: 'Eylül Eygi', title: 'Head of Marketing', company: 'Sensolus', slug: 'sensolus',
    image: 'https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png',
    results: [
      { metric: '30%', label: 'lagere CAC' },
      { metric: '22%', label: 'antwoordratio' },
      { metric: '61%', label: 'openingsratio' },
    ],
  },
];

export const insightsNl: Insight[] = [
  {
    title: 'Verkoop begint met een nee, een les over het weerleggen van bezwaren',
    excerpt: 'Waarom „verkoop met een nee begint”, de echte redenen waarom prospects afwijzen, en drie strategieën om afwijzing om te zetten in deals.',
    slug: 'the-sale-starts-with-a-no-objection-handling',
    image: 'https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png',
  },
  {
    title: 'Zeven methoden om de productiviteit van uw verkopers te verhogen',
    excerpt: 'De grootste factoren die een verkoopteam inefficiënt maken, plus zeven bewezen manieren om de output te schalen zonder het team op te branden.',
    slug: 'methods-increase-productivity-salespeople',
    image: 'https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png',
  },
  {
    title: 'Waarom leadgeneratie een kwalitatief proces moet zijn',
    excerpt: 'Van kwantiteit naar kwaliteit in geautomatiseerde outbound: de gevaren van spam, waarom accurate data telt, en e-mailteksten die vertrouwen opbouwen.',
    slug: 'why-automated-lead-generation-needs-to-be-a-qualitative-process',
    image: 'https://assets.hubsell.com/insights/69e9ef6291a191221bc032dc_Thumbnail-Why-lead-generation-needs-to-be-a-qualitative-process.png',
  },
];

// Competitor copy stays factual — positioning, never a put-down. Marks (yes/part/
// no) and the /vs hrefs are structural and live in the component.
export const comparisonNl: ComparisonData = {
  heads: {
    hub:    { label: 'hubsell' },
    aio:    { label: 'All-in-one-platforms', href: '/vs/apollo' },
    data:   { label: 'Enterprise-data',      href: '/vs/zoominfo' },
    lookup: { label: 'Lookup-tools',         href: '/vs/lusha' },
  },
  rows: [
    { label: 'Live, gevalideerde data', cells: {
      hub:['yes','Live verzameld, geverifieerd op moment van gebruik'], aio:['part','Kant-en-klare database met ~275 mln.'],
      data:['part','Grote statische database'], lookup:['part','Losse contactopvragingen'] } },
    { label: 'E-mail, LinkedIn & telefoon, één flow', cells: {
      hub:['yes','Eén sequentie, beltaken in het CRM'], aio:['part','E-mail geautomatiseerd, LinkedIn handmatig'],
      data:['no','Outreach apart verkocht'], lookup:['no','Geen outreach-laag'] } },
    { label: 'Automatische CRM-synchronisatie', cells: {
      hub:['yes','Salesforce, HubSpot & Pipedrive'], aio:['part','Salesforce & HubSpot native'],
      data:['part','Native voor grote CRMs'], lookup:['part','Eenvoudig, vaak via Zapier'] } },
    { label: 'U betaalt voor wat klopt', cells: {
      hub:['yes','Per verzameld & gevalideerd contact'], aio:['no','Per gebruiker, plus credits'],
      data:['no','Vijfcijferige jaarcontracten'], lookup:['part','Credits ook voor missers'] } },
    { label: 'Eén platform, geen lappendeken', cells: {
      hub:['yes','Data, outreach & sync samen'], aio:['part','Twee van de bouwstenen'],
      data:['no','Alleen data'], lookup:['no','Eén losse bouwsteen'] } },
  ],
};

export const faqsNl: Faq[] = [
  {
    question: 'Kan hubsell onze bestaande outbound-stack vervangen?',
    slug: 'hubsell-replace-outbound-stack',
    answer: '<p>Voor de meeste teams: ja. hubsell vervangt uw sales-intelligence-tool, uw sales-engagement-platform en uw handmatige LinkedIn-outreachproces in één platform. De meeste teams die overstappen, besparen binnen 30 dagen 2 tot 3 tool-abonnementen. Het enige wat hubsell niet vervangt, is uw CRM, daar synchroniseert het mee.</p>',
    onHomepage: true,
  },
  {
    question: 'Moeten we de campagnes zelf opbouwen, of biedt hubsell begeleide onboarding en strategie?',
    slug: 'hubsell-onboarding-strategy',
    answer: '<p>We geven u niet zomaar een login en wensen u succes. Ons team neemt de volledige campagne-inrichting, dataverzameling en sequentieconfiguratie op zich, zodat u uw eerste outbound-campagne in minder dan 7 dagen kunt starten, en die van daaruit gestaag kunt verbeteren.</p>',
    onHomepage: true,
  },
  {
    question: 'Integreert hubsell direct met ons bestaande CRM?',
    slug: 'hubsell-crm-integration',
    answer: '<p>We vervangen uw system of record niet, we versterken het. Alle activiteit, verzonden e-mails, LinkedIn-connectieverzoeken, profielbezoeken en antwoorden, wordt automatisch en direct vastgelegd in Salesforce, HubSpot of Pipedrive en maakt een einde aan elke datasilo voor uw revenue-team.</p>',
    onHomepage: true,
  },
  {
    question: 'Hoe doet u veilig outreach op LinkedIn zonder beperkt te worden?',
    slug: 'safely-outreach-linkedin',
    answer: '<p>Het probleem is de concentratie van activiteit in korte tijd, die de beveiligingsalgoritmes van LinkedIn triggert. hubsell bouwt uw eerstegraadsnetwerk langzaam en veilig het hele jaar door op, binnen strikte platformgrenzen. De limiet van LinkedIn voor DMs ligt een stuk hoger.</p>',
    onHomepage: true,
  },
  {
    question: 'Hoe genereren we leads als onze doelaccounts niet actief naar onze software zoeken?',
    slug: 'generate-leads-out-of-cycle',
    answer: '<p>De meeste kopers zitten vast in contracten of buiten hun koopcyclus. Als u ze iets aanbiedt, negeren ze u. Gebruik in plaats daarvan een „always-on”-connectiestrategie om waardevolle content, branche-inzichten en event-uitnodigingen te delen. Door nu op gelijke voet waarde te bieden, bent u de eerste die gebeld wordt zodra het koopmoment echt aanbreekt.</p>',
    onHomepage: true,
  },
  {
    question: 'Hoe verhoudt hubsell zich tot Outreach of Salesloft?',
    slug: 'hubsell-vs-outreach-salesloft',
    answer: '<p>Outreach en Salesloft zijn e-mailsequentie-tools, ze verzamelen geen data en beheersen LinkedIn niet native. U hebt nog steeds een aparte dataleverancier en een handmatig LinkedIn-proces nodig. hubsell dekt alle drie de lagen: actuele prospectdata, gecoördineerde e-mail- en LinkedIn-sequenties plus beltaken en automatische CRM-synchronisatie. Eén platform, één abonnement.</p>',
    onHomepage: true,
  },
  {
    question: 'Waarin verschilt hubsell van statische B2B-databases zoals ZoomInfo of Apollo?',
    slug: 'hubsell-catch-all-domains',
    answer: '<p>De meeste sales-intelligence-tools geven u een statische export en laten de outreach aan een ander platform over. hubsell verzamelt contacten live op het moment van uw aanvraag, en laat u ze vervolgens via e-mail, LinkedIn en telefoon benaderen en alles met uw CRM synchroniseren, zonder tool-wissel. Geen databaseverval, geen aan elkaar geknoopte stack.</p>',
    onHomepage: true,
  },
  {
    question: 'Is hubsell AVG-conform?',
    slug: 'hubsell-gdpr-compliance',
    answer: '<p>Ja. hubsell is gevestigd in Berlijn, Duitsland. We houden ons aan strikte AVG-conformiteit en privacynormen en zorgen dat alle engagement-activiteiten aan de wettelijke eisen voldoen.</p>',
    onHomepage: true,
  },
  {
    question: 'Wat is de krachtigste manier om een B2B-publiek op te bouwen dat na verloop van tijd niet vervalt?',
    slug: 'build-b2b-audience-no-decay',
    answer: '<p>E-mailadressen zijn eigendom van de werkgever, wat betekent dat lijsten jaarlijks met ongeveer 30% vervallen wanneer mensen van baan wisselen. LinkedIn-profielen zijn gekoppeld aan de persoonlijke identiteit. Door „Network Equity” op LinkedIn op te bouwen, verhuizen uw contacten mee met de koper en krijgt u automatisch toegang tot een nieuw doelaccount wanneer die van bedrijf wisselt.</p>',
    onHomepage: true,
  },
  {
    question: 'Op welke conversiecijfers (acceptatie, antwoorden en engagement) moeten we bij hubsell rekenen?',
    slug: 'hubsell-conversion-rates',
    answer: '<p>Als u het hubsell-playbook correct volgt, kunt u rekenen op 25 tot 40% acceptatie, 10 tot 15% antwoorden en 3 tot 5% gestarte gesprekken. De cijfers liggen aan de bovenkant wanneer de afzenderprofielen niet te verkoopgericht overkomen.</p>',
    onHomepage: true,
  },
];

export const stringsNl: HomeStrings = {
  hero: {
    eyebrow: 'Voor VP’s Sales die genoeg hebben van betalen voor 6+ tools',
    titlePre: 'Vervang uw ', titleAccent: 'outbound', titlePost: '-stack door één platform.',
    sub: 'Uw team hoort tijd te besteden aan verkopen, niet aan het wisselen van tabs. hubsell brengt uw data, uw outreach en uw CRM-synchronisatie samen op één plek, zodat dat lukt.',
    ctaPrimary: 'Demo plannen', ctaSecondary: 'In actie zien',
    ratingsPre: 'Beoordeeld met ', ratingsScore: '4,8/5,0', ratingsPost: ' op Capterra, GetApp en SoftwareAdvice.',
  },
  logos: {
    eyebrow: 'Vertrouwd door B2B-revenue-teams in heel Europa',
    aria: 'Logo’s van bedrijven die hubsell gebruiken, waaronder Safran, Staffbase, Verhaert, Personio, Telenor en vele andere',
  },
  frag: {
    eyebrow: 'Het probleem van de gefragmenteerde stack',
    titlePre: 'Zes tools in uw stack. Zes facturen. ', titleAccent: 'Geen ervan praat met elkaar.', titlePost: '',
    badTag: 'Losgekoppeld',
    badLine: 'Een gemiddeld revenue-team draait zes tools voor één taak. Elk in een silo, geen ervan praat met elkaar. Beweeg over een tool om te zien waar het u kwetsbaar maakt.',
    join: 'hubsell verenigt alle zes',
    goodTag: 'Verbonden',
    goodLine: 'Eén platform. Eén login. Eén flow. Eén factuur. Diezelfde zes taken aan elkaar gekoppeld, zodat een signaal outreach wordt en outreach in uw CRM belandt. Beweeg over een functie om te zien wat die doet.',
    cta: 'Verenig uw stack vandaag nog',
  },
  zds: {
    eyebrow: 'Zero-day-sourcing',
    titlePre: 'Data verzameld op het moment ', titleAccent: 'dat u ze nodig hebt', titlePost: '. Niet op het moment dat iemand anders ze vastlegde.',
    sub: 'hubsell verkoopt niet uit een verouderde database. Zodra u uw ICP definieert, verzamelen we live uit LinkedIn, afgestemd op uw criteria en gevalideerd op het moment van gebruik.',
    closer: 'U betaalt voor een contact dat vandaag klopt, niet voor toegang tot 300 miljoen contacten die twee jaar geleden juist waren.',
    cta: 'Zo doen we dat',
  },
  ratings: {
    titlePre: 'Beoordeeld met ', titleAccent: '4,8+', titlePost: ' op G2, Capterra en GetApp',
    cue: 'Beoordelingen lezen →',
    aria: (platform, score, out) => `hubsell-beoordelingen op ${platform} lezen (beoordeeld met ${score}${out})`,
  },
  pipeline: { eyebrow: 'De driestaps pipelinebeweging', titlePre: 'Van ', titleAccent: 'aanmelding tot afspraak', titlePost: ' in drie stappen.' },
  pricing: { eyebrow: 'Prijzen', titlePre: 'Plannen voor ', titleAccent: 'Solopreneurs & GTM-teams', titlePost: '' },
  usecases: {
    eyebrow: 'Toepassingen', titlePre: '', titleAccent: 'Eén platform', titlePost: ' voor GTM',
    sub: 'Welke plek u ook aan de revenue-tafel hebt, hubsell vervangt de wildgroei aan tools door één gecoördineerde beweging.',
  },
  featuresSec: {
    eyebrow: 'Het platform', titlePre: 'Live data, e-mail en LinkedIn georkestreerd ', titleAccent: 'in één oplossing', titlePost: '',
    beta: 'Beta', comingSoon: 'Binnenkort',
  },
  testimonialsSec: {
    eyebrow: 'Klantverhalen', titlePre: 'Wat ', titleAccent: 'B2B-teams', titlePost: ' over hubsell zeggen',
    readPre: 'Lees het verhaal van ', readPost: ' →',
  },
  loop: {
    eyebrow: 'Publiceren & volgen · Beta',
    titlePre: 'Uw LinkedIn-content genereert al vraag. Sluit nu ', titleAccent: 'de cirkel', titlePost: '.',
    body: 'De meeste outbound begint koud. Maar iedereen die uw LinkedIn-content liket, erop reageert of deelt, heeft zich al gemeld. U kunt post-engagers vandaag al in hubsell importeren en in een sequentie opnemen. Wat in de beta komt, is de gesloten cirkel: rechtstreeks vanuit hubsell publiceren, elke interactie in realtime volgen en elke persoon automatisch in een warme sequentie opnemen, zonder ooit een lijst te exporteren of tabs te wisselen.',
    cta: 'Demo plannen',
    nowLabel: 'Vandaag beschikbaar', betaLabel: 'Komt in de beta',
    now: ['Importeer iedereen die liket, reageert of deelt', 'Neem post-engagers vandaag al op in een sequentie'],
    beta: ['Publiceer rechtstreeks vanuit hubsell', 'Volg elke interactie in realtime', 'Neem elke persoon automatisch op in een warme sequentie', 'Geen lijsten exporteren, geen tabs wisselen'],
  },
  insightsSec: {
    newsTitle: 'Blijf voorop in B2B-sales en -marketing',
    newsSub: 'Playbooks, deliverability en outbound-strategie, rechtstreeks in uw inbox.',
    subscribeLabel: 'Abonneren', emailPlaceholder: 'Uw e-mail',
    eyebrow: 'Insights', title: 'B2B-outbound-playbooks en insights',
    readMore: 'Meer insights lezen →', cardTag: 'B2B-sales',
  },
  cmp: {
    eyebrow: 'Waarom hubsell',
    title: 'De meeste tools stoppen bij de data. hubsell gaat verder.',
    sub: 'hubsell verzamelt contacten live, draait e-mail en LinkedIn in één flow en synchroniseert automatisch met uw CRM. De tools die u anders zou kopen, dekken elk maar één deel daarvan. hubsell dekt alles.',
    moat: 'Genoeg tools doen één of twee hiervan. Geen enkele doet alle drie op één plek.',
    linksLabel: 'Vergelijkt u hubsell met een specifieke tool?',
    srYes: 'Ja: ', srPart: 'Gedeeltelijk: ', srNo: 'Nee: ',
  },
  faqSec: {
    eyebrow: 'FAQ', titlePre: '', titleAccent: 'Eerlijke antwoorden', titlePost: ', want outbound is al moeilijk genoeg.',
    seeAll: 'Alle vragen bekijken →',
  },
};
