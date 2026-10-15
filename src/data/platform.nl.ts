// Dutch copy for the /platform pages. Mirrors platform-content.ts exactly in
// structure; register is formal (u/uw), brand stays lowercase "hubsell", technical
// terms (CRM, LinkedIn, ICP, InMail, DMs, credits) stay English, Dutch number
// formatting (decimal comma, ranges with "tot", % attached).
import type { PlatformData } from './platform-content';

export const platformNl: PlatformData = {
  overview: {
    title: 'Het hubsell-platform: live data, multichannel-outreach en CRM-sync',
    metaDescription: 'E\u00e9n platform dat B2B-contacten live verzamelt, e-mail-, LinkedIn- en telefoon-outreach in \u00e9\u00e9n flow draait en alles automatisch in uw CRM vastlegt.',
    eyebrow: 'Het platform',
    h1Pre: 'Het werk van zes tools. ', h1Accent: '\u00c9\u00e9n platform', h1Post: '.',
    sub: 'hubsell vervangt uw tools voor data, enrichment, sequencer, deliverability, dialer en CRM-sync door \u00e9\u00e9n systeem: live data, multichannel-outreach en automatische CRM-synchronisatie.',
    demoCta: 'Demo plannen',
    problemEyebrow: 'Het probleem',
    problemTitlePre: 'De meeste outbound-stacks zijn drie abonnementen, ', problemTitleAccent: 'aan elkaar geplakt', problemTitlePost: '.',
    problemBody: [
      'Data uit de eerste tool veroudert al terwijl de tweede tool ze verstuurt, en de derde tool hoort nooit van het antwoord. Elke overdracht tussen tools is een CSV-bestand, een vertraging en een plek waar gegevens wegrotten.',
      'U betaalt drie facturen om gaten tussen de tools te cre\u00ebren. hubsell sluit die gaten door de drie taken op \u00e9\u00e9n plek uit te voeren, op \u00e9\u00e9n dataset, in realtime.',
    ],
    capsEyebrow: 'De drie pijlers',
    capsTitle: 'Wat het platform doet',
    caps: [
      {
        eyebrow: 'Live data',
        title: 'Verzameld op de dag dat u erom vraagt',
        body: 'hubsell verkoopt geen toegang tot een statische database. Definieer uw ICP en wij verzamelen contacten live uit LinkedIn, afgestemd op uw criteria en gevalideerd op het moment van gebruik.',
        href: '/platform/live-data', linkLabel: 'Meer over live data',
        steps: ['Six live sources', 'Pooled into your ICP', 'Verified at the point of use'],
      },
      {
        eyebrow: 'Multichannel-outreach',
        title: 'E-mail, LinkedIn en telefoon in \u00e9\u00e9n flow',
        body: '\u00c9\u00e9n geco\u00f6rdineerde sequentie over alle drie de kanalen, met vertakkingen die reageren op wat elk contact doet en verzending die veilig over de profielen van uw team wordt verdeeld.',
        href: '/platform/multichannel-outreach', linkLabel: 'Meer over multichannel-outreach',
        steps: ['One sequence, not three tools', 'Email, LinkedIn, and phone', 'Reacts to what they do'],
      },
      {
        eyebrow: 'CRM-sync',
        title: 'Elk contactmoment automatisch vastgelegd',
        body: 'Verzonden, geopend, beantwoord, verbonden: alles landt in Salesforce, HubSpot of Pipedrive op het moment dat het gebeurt. Geen handmatige invoer, geen dataverval.',
        href: '/platform/crm-sync', linkLabel: 'Meer over CRM-sync',
        steps: ['Every activity captured', 'Mapped to the right fields', 'Two-way, in real time'],
      },
    ],
    resultsEyebrow: 'Waarom dit werkt',
    resultsTitle: 'Wat \u00e9\u00e9n platform u oplevert',
    results: [
      {
        title: 'Effici\u00ebntie',
        body: '\u00c9\u00e9n login, \u00e9\u00e9n factuur, geen CSV-exports tussen tools. Uw team draait de hele outbound-motie op \u00e9\u00e9n plek in plaats van drie producten met de hand aan elkaar te knopen.',
      },
      {
        title: 'Resultaten',
        body: 'Verse data verbetert de deliverability. Geco\u00f6rdineerde kanalen verhogen de antwoordpercentages. Automatische vastlegging houdt uw pipelinerapportage eerlijk. Elk onderdeel maakt de andere beter.',
      },
    ],
    proofEyebrow: 'Bewijs',
    proofTitle: 'Teams die zijn overgestapt',
    ratingsLine: 'Beoordeeld met 4,6+ op G2, Capterra en GetApp.',
    quoteSlug: 'cibt',
    faqEyebrow: 'FAQ',
    faqTitle: 'Veelgestelde vragen',
    faqSlugs: ['hubsell-replace-outbound-stack', 'hubsell-crm-integration', 'stop-sales-email-bounces'],
    closing: {
      titlePre: 'Zie het hele platform ', titleAccent: 'in \u00e9\u00e9n gesprek', titlePost: '.',
      sub: 'Neem uw huidige stack mee naar een kort gesprek en wij laten zien hoe die er als \u00e9\u00e9n systeem uitziet.',
    },
    closingCta: 'Demo plannen',
  },

  details: [
    {
      path: '/platform/live-data',
      title: 'B2B-dataleverancier met live, AVG-conforme data | hubsell',
      metaDescription: 'hubsell is een B2B-dataleverancier die contacten live verzamelt, afgestemd op uw ICP en gevalideerd op het moment van gebruik. AVG-conforme B2B-data, gehost in Frankfurt.',
      heroSlice: "live-data",
      compare: {"eyebrow": "B2B-dataleverancier", "titlePre": "B2B-contactdatabase tegenover ", "titleAccent": "live verzamelde B2B-data", "titlePost": "", "colA": "Gekochte database", "colB": "hubsell live data", "rows": [["Verzameld", "Maanden of jaren voordat u ze gebruikt", "Op de dag dat u erom vraagt"], ["Veroudering", "25 tot 30% raakt elk jaar verouderd", "Voor elke aanvraag vers verzameld, dus niets blijft liggen en veroudert"], ["Nauwkeurigheid", "Onbekend tot de bounces terugkomen", "95%, catch-all-domeinen inbegrepen, gevalideerd op het moment van gebruik"], ["Relevantie", "Gefilterd op functie en branche", "Afgestemd op uw ICP en de koopsignalen die u kiest"], ["Waar u voor betaalt", "Toegang tot de hele database, gebruikt of niet", "Verwerkingsresultaten, stap voor stap, voor de contacten die u houdt"], ["Wie de data beheert", "De leverancier bewaart ze en verkoopt ze door", "U bent verwerkingsverantwoordelijke, hubsell is verwerker"]]},
      heads: {"signals": {"eyebrow": "Koopsignalen", "pre": "Zes manieren om ", "accent": "B2B-prospects te vinden via koopsignalen", "post": ""}, "steps": {"eyebrow": "Zero-day sourcing", "pre": "Zo werkt het ", "accent": "live verzamelen van B2B-data", "post": ""}, "extra": {"eyebrow": "AVG", "pre": "", "accent": "AVG-conforme", "post": " B2B-data"}, "proof": {"eyebrow": "Klantresultaten", "pre": "Wat ", "accent": "nauwkeurige B2B-data", "post": " verandert"}, "closing": {"eyebrow": "B2B-prospectingtool", "pre": "Start B2B-prospecting met ", "accent": "data van vandaag", "post": ""}, "faq": {"eyebrow": "FAQ over B2B-data", "pre": "Vragen over ", "accent": "live B2B-data", "post": ""}, "explained": {"eyebrow": "LinkedIn-prospecting", "pre": "LinkedIn-prospecting, ", "accent": "signaal voor signaal", "post": ""}},
      signals: {"sub": "Elk signaal start vanuit een link, een zoekopdracht of uw ICP. hubsell verzamelt de mensen, toetst ze aan uw ICP en verrijkt wie past, klaar voor outreach.", "startLabel": "Startpunt", "items": [{"id": "post", "title": "Engagement op LinkedIn-posts", "body": "Wie reageert op een LinkedIn-post, er een opmerking bij plaatst of hem deelt, heeft al interesse in het onderwerp getoond. hubsell verzamelt deze mensen uit de post, toetst iedereen aan uw ICP en verrijkt wie past. Dat werkt met uw eigen posts, die van een concurrent of die van een bekende stem in uw branche.", "start": "Een link naar een LinkedIn-post"}, {"id": "event", "title": "Deelnemers aan LinkedIn-events", "body": "Wie zich aanmeldt voor een LinkedIn-event, heeft voor een onderwerp gekozen. hubsell verzamelt de deelnemerslijst, kwalificeert die op basis van uw ICP en verrijkt wie past, zodat u hen voor, tijdens of na het event kunt benaderen.", "start": "Een link naar een LinkedIn-event"}, {"id": "followers", "title": "Volgers van uw bedrijf en van concurrenten", "body": "Wie uw bedrijfspagina volgt, kent u al. Wie de pagina van een concurrent volgt, is geïnteresseerd in wat u verkoopt. hubsell verzamelt beide groepen en houdt alleen wie bij uw ICP past.", "start": "Uw bedrijfspagina of die van een concurrent"}, {"id": "jobs", "title": "Baanwisselingen", "body": "Wie net in een nieuwe rol begint, bouwt aan stack en team. De eerste maanden zijn daarom het beste moment om contact op te nemen. hubsell vindt mensen die onlangs van baan zijn gewisseld binnen uw doelaccounts en doelfuncties.", "start": "Uw ICP: functies en doelbedrijven"}, {"id": "hiring", "title": "Bedrijven die voor specifieke functies werven", "body": "Een bedrijf dat SDR’s of account executives werft, investeert nu in sales. hubsell neemt een LinkedIn-zoekopdracht met het filter voor wervende bedrijven en vindt daar de beslissers.", "start": "Een LinkedIn-zoekopdracht met het wervingsfilter"}, {"id": "search", "title": "Zoekopdrachten in LinkedIn en Sales Navigator", "body": "Weet u al wie u wilt bereiken, plak dan een LinkedIn-zoekopdracht naar personen of een lead-zoekopdracht uit Sales Navigator. hubsell voert die uit, kwalificeert de resultaten met AI en verrijkt wie past, zonder handmatige export.", "start": "Een link naar een LinkedIn- of Sales Navigator-zoekopdracht"}]},
      faqs: [{"question": "Wat is live verzamelde B2B-data, en wat is het verschil met een B2B-contactdatabase?", "answer": "<p>Live verzamelde data wordt verzameld op het moment dat u erom vraagt, voor uw zoekopdracht, in plaats van uit een database te komen die maanden of jaren eerder is vastgelegd. hubsell bouwt voor elke aanvraag een nieuwe set contacten, afgestemd op uw ICP en gevalideerd op het moment van gebruik. Een contactdatabase verkoopt toegang tot records die verouderen sinds de dag dat ze zijn verzameld.</p>"}, {"question": "Hoe snel raakt B2B-contactdata verouderd?", "answer": "<p>B2B-beslissers wisselen ongeveer elke 2,5 jaar van baan. Een statische database verliest daardoor elk jaar 25 tot 30% van haar nauwkeurigheid: e-mails bouncen, functies veranderen en mensen stappen over naar een ander bedrijf. Data die op de dag van gebruik wordt verzameld, heeft geen last van dat verval.</p>"}, {"question": "Waar komt de B2B-data van hubsell vandaan?", "answer": "<p>hubsell verzamelt data live van LinkedIn en bedrijfswebsites en maakt zelf data aan, bijvoorbeeld door zakelijke e-mailadressen te genereren en te valideren. Telefoonnummers komen van partners die gekozen zijn op nauwkeurigheid en kwaliteit, niet op prijs.</p>"}, {"question": "Is de B2B-data van hubsell AVG-conform?", "answer": "<p>Ja. hubsell verzamelt en verwerkt data ad hoc voor elke klant en bewaart ze niet om door te verkopen. De klant is de verwerkingsverantwoordelijke en hubsell de verwerker, op basis van een verwerkersovereenkomst. hubsell is gevestigd in Berlijn, draait op servers in Frankfurt en verwijdert accountdata binnen 30 dagen na het einde van een contract.</p>"}, {"question": "Wat is de rechtsgrond voor B2B-outreach onder de AVG?", "answer": "<p>Voor outreach naar zakelijke contacten is dat meestal het gerechtvaardigd belang. Bij hubsell blijft de klant de verwerkingsverantwoordelijke en legt die het doel vast voordat er één contact wordt verzameld. hubsell verwerkt de data alleen voor dat doel. De regels voor cold e-mail verschillen per land, lees daarover onze <a class=\"link\" href=\"/insights/b2b-data-compliance/\">gids over B2B-datacompliance (Engels)</a>.</p>"}, {"question": "Op basis van welke koopsignalen kan hubsell contacten verzamelen?", "answer": "<p>hubsell kan mensen verzamelen die reageerden op een LinkedIn-post, een LinkedIn-event bijwonen, uw bedrijfspagina of die van een concurrent volgen, onlangs van baan zijn gewisseld of werken bij bedrijven die voor bepaalde functies werven. U kunt ook starten vanuit een LinkedIn- of Sales Navigator-zoekopdracht, of uw eigen lijst importeren.</p>"}, {"question": "Hoe vindt hubsell de mensen die reageerden op een LinkedIn-post of een event bijwoonden?", "answer": "<p>U plakt de link naar de post of het event in hubsell. hubsell verzamelt de mensen die reageerden, een opmerking plaatsten of zich aanmeldden, toetst ze aan uw ICP en verrijkt wie past met geverifieerde contactgegevens. Daarna kunnen ze direct een sequentie in met LinkedIn, e-mail en beltaken.</p>"}, {"question": "Hoe nauwkeurig is de contactdata van hubsell?", "answer": "<p>De data van hubsell is voor 95% nauwkeurig, catch-all-domeinen inbegrepen, en dekt 80 tot 90% van een doelmarkt. Elk record wordt gevalideerd op het moment van gebruik, niet bij de eerste vastlegging. hubsell voert graag een vergelijkingstest uit met uw huidige leverancier.</p>"}, {"question": "Hoe rekent hubsell voor data, en betaal ik voor contacten die ik niet kan gebruiken?", "answer": "<p>U betaalt voor verwerkingsresultaten, stap voor stap: verzamelen, dan verrijken, gevalideerde e-mailadressen en telefoonnummers. Omdat elke stap apart wordt gerekend, kunt u de verzamelde contacten eerst bekijken en uitsluiten wie niet relevant is. U betaalt alleen voor het verrijken van de contacten die u houdt. Zie <a class=\"link\" href=\"/nl/pricing/\">prijzen</a>.</p>"}, {"question": "Hoe verhoudt hubsell zich tot ZoomInfo, Apollo of Cognism voor B2B-data?", "answer": "<p>ZoomInfo, Apollo en Cognism verkopen toegang tot een database. hubsell verzamelt data vers voor elke aanvraag, dus ze is actueel, getoetst aan uw ICP en relevant voor de signalen die u kiest. hubsell voert daarnaast de outreach uit en synchroniseert die met uw CRM, terwijl die tools meestal bij de data stoppen. Vergelijkingen: <a class=\"link\" href=\"/nl/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/nl/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/nl/vs/cognism/\">Cognism</a>.</p>"}],
      extra: {"title": "AVG-conforme B2B-data", "paras": ["hubsell verzamelt en verwerkt data ad hoc, voor een doel dat u vastlegt voordat er één contact wordt verzameld, en bewaart ze niet om door te verkopen. U blijft de verwerkingsverantwoordelijke en hubsell is uw verwerker. Een databaseleverancier werkt andersom: die verzamelt data om ze opnieuw te verkopen.", "Outreach naar zakelijke contacten berust onder de AVG op gerechtvaardigd belang. hubsell is gevestigd in Berlijn, Duitsland, en het platform draait op servers van Amazon Web Services in Frankfurt.", "Elke klant kan de verwerkersovereenkomst van hubsell afsluiten. Daarin staat hoe persoonsgegevens worden verwerkt, welke subverwerkers ermee mogen werken en hoe verzoeken van betrokkenen worden beantwoord. Als het contract afloopt, worden de gegevens in uw account binnen 30 dagen verwijderd."], "links": [{"label": "Lees de verwerkersovereenkomst (Engels)", "href": "/data-processing-agreement"}, {"label": "Gids: B2B-datacompliance en cold outreach (Engels)", "href": "/insights/b2b-data-compliance"}]},
      eyebrow: 'Live B2B-data',
      h1Pre: 'B2B-data van ', h1Accent: 'vandaag', h1Post: ', niet van twee jaar geleden',
      sub: 'hubsell is een B2B-dataleverancier en verkoopt geen toegang tot een statische database. Definieer uw ICP en wij verzamelen contacten live uit LinkedIn, voegen koopsignalen toe en valideren elk record voordat het uw flow binnenkomt.',
      demoCta: 'Demo plannen',
      heroTimeline: true,
      row: {
        titlePre: 'Verzameld uit ', titleAccent: 'echte koopsignalen', titlePost: '',
        points: [
          'De meeste platformen laten u filteren op functietitel en branche. hubsell leest ook gedrag.',
          'Mensen die uw bedrijfspagina of die van een concurrent volgen, met een LinkedIn-post interageren, van baan wisselen, events bezoeken of voor specifieke rollen werven.',
          'Signalen vertellen wie u deze week moet benaderen, niet alleen wie in een filter past.',
        ],
        embed: '05-sp-widget',
        stepEyebrow: 'Hoe het werkt',
        stepTitle: 'Van live signaal naar gevalideerd contact',
      },
      gridTitlePre: 'B2B-contactgegevens die ', gridTitleAccent: 'correct is op de dag van gebruik', gridTitlePost: '',
      blocks: [
        {
          title: 'Zero-day sourcing',
          body: 'Een op maat gebouwde database, samengesteld op het moment van uw aanvraag, geen gedeelde lijst van jaren geleden. Vers van die dag, met 80 tot 90% dekking van uw doelmarkt.',
        },
        {
          title: 'Afgestemd op uw ICP',
          body: 'Definieer uw ideale klantprofiel \u00e9\u00e9n keer. Elk contact dat uw flow binnenkomt wordt eraan getoetst voordat u ook maar \u00e9\u00e9n credit aan outreach uitgeeft.',
        },
        {
          title: 'Gevalideerd op het moment van gebruik',
          body: 'Elk record wordt gecontroleerd op het moment van verzamelen, inclusief catch-all-domeinen. Bounces blijven laag en uw verzendreputatie blijft intact.',
        },
        {
          title: 'Gebouwd tegen dataverval',
          body: 'De gemiddelde B2B-beslisser wisselt elke 2,5 jaar van baan, dus statische lijsten vervallen met 25 tot 30% per jaar. Live verzamelen maakt dat verval irrelevant: de data is correct op de dag dat u ze gebruikt.',
        },
      ],
      proofEyebrow: 'Bewijs',
      proofTitle: 'Wat accurate data verandert',
      quoteSlug: 'alon-even',
      storySlug: 'sensolus',
      storyLabel: 'Lees het Sensolus-verhaal',
      faqEyebrow: 'FAQ',
      faqTitle: 'Veelgestelde vragen over live data',
      faqSlugs: ['stop-sales-email-bounces', 'build-b2b-audience-no-decay'],
      closing: {
        titlePre: 'Zie uw markt, verzameld ', titleAccent: 'vandaag', titlePost: '.',
        sub: 'Vertel ons uw ICP in een kort gesprek en wij laten zien wat zero-day sourcing ervoor oplevert.',
      },
      closingCta: 'Demo plannen',
    },

    {
      path: '/platform/multichannel-outreach',
      title: 'Multichannel-outreachplatform: e-mail, LinkedIn en telefoon | hubsell',
      metaDescription: 'Voer e-mail, LinkedIn en telefoon uit als \u00e9\u00e9n geco\u00f6rdineerde sequentie. Vertakkende flows, veilige verzendlimieten en outreach vanaf de profielen die kopers echt accepteren.',
      eyebrow: 'Multichannel-outreach',
      h1Pre: 'Multichannel-outreach via ', h1Accent: 'e-mail, LinkedIn en telefoon', h1Post: '',
      sub: 'Stop met jongleren tussen een e-mailtool, een LinkedIn-tool en een takenlijst. hubsell draait alle drie de kanalen als \u00e9\u00e9n geco\u00f6rdineerde sequentie die reageert op wat elk contact doet.',
      demoCta: 'Demo plannen',
      row: {
        titlePre: 'Een multichannel-outreachplatform, ', titleAccent: 'geen drie tools', titlePost: '',
        points: [
          'Sleep e-mail-, LinkedIn- en telefoon-stappen met drag-and-drop in \u00e9\u00e9n enkele flow.',
          'Profielbezoeken, connectieverzoeken, DMs, InMail en beltaken, alles afgestemd op uw e-mailcadans.',
          'Vertakkingsvoorwaarden leiden elk contact op basis van gedrag: geopend, beantwoord, geaccepteerd of stil gebleven.',
        ],
        embed: '06-multichannel-flow',
        stepEyebrow: 'Hoe het werkt',
        stepTitle: 'E\u00e9n flow over elk kanaal',
      },
      gridTitlePre: 'Gebouwd om ', gridTitleAccent: 'aan te komen en beantwoord te worden', gridTitlePost: '',
      blocks: [
        {
          title: 'Deliverability als uitgangspunt',
          body: 'E-mails worden via de Google- en Microsoft-API\u2019s rechtstreeks vanuit uw eigen mailboxen verzonden, zonder externe servers ertussen. Open rates blijven eerlijk en spamfilters blijven rustig.',
        },
        {
          title: 'Veilig verzenden, verdeeld',
          body: 'Outreach wordt verdeeld over 5 tot 10 interne verzendprofielen, binnen strikte platformlimieten. Minder volume per verzender, hogere deliverability, geen beschadigd domein. LinkedIn-automatisering draait met veilige daglimieten voor elk profiel.',
        },
        {
          title: 'Verzonden vanaf de juiste profielen',
          body: 'Connectieverzoeken van SDR\u2019s blijven onder 20% acceptatie, omdat kopers een pitch verwachten. Hetzelfde verzoek van een oprichter of vakexpert komt boven 50% uit. hubsell draait outreach vanaf de profielen die kopers accepteren.',
        },
        {
          title: 'Bellen waar uw team werkt',
          body: 'Telefoon-stappen landen als beltaken in Salesforce, HubSpot of Pipedrive. Uw verkopers bellen vanuit het CRM dat ze al gebruiken en het resultaat wordt met de rest van de sequentie vastgelegd.',
        },
      ],
      proofEyebrow: 'Bewijs',
      proofTitle: 'Wat geco\u00f6rdineerde outreach verandert',
      quoteSlug: 'meetyoo',
      storySlug: 'verhaert',
      storyLabel: 'Lees het Verhaert-verhaal',
      faqEyebrow: 'FAQ',
      faqTitle: 'Veelgestelde vragen over outreach',
      faqSlugs: ['mass-email-brand-reputation', 'sdr-vs-executive-linkedin-outreach', 'hubsell-email-infrastructure'],
      closing: {
        titlePre: 'Alle drie de kanalen als ', titleAccent: '\u00e9\u00e9n flow', titlePost: '.',
        sub: 'Neem een van uw huidige campagnes mee naar een kort gesprek en wij vertalen die naar \u00e9\u00e9n hubsell-sequentie.',
      },
      closingCta: 'Demo plannen',
    },

    {
      path: '/platform/crm-sync',
      title: 'Automatische CRM-sync voor Salesforce, HubSpot en Pipedrive | hubsell',
      metaDescription: 'Elke verzending, opening, reactie en connectie wordt automatisch vastgelegd in Salesforce, HubSpot of Pipedrive. Geen handmatige invoer, geen dataverval, geen verloren activiteit.',
      extra: {"title": "Integratie met Salesforce, HubSpot en Pipedrive", "paras": ["hubsell synchroniseert native en in beide richtingen met Salesforce, HubSpot en Pipedrive.", "LinkedIn-activiteit wordt in elk van deze CRM’s net zo vastgelegd als e-mail. Connectieverzoeken, profielbezoeken en reacties verschijnen op het contactrecord zodra ze gebeuren, naast e-mailgebeurtenissen en beltaken."], "links": [{"label": "Bekijk alle integraties", "href": "/integrations"}]},
      eyebrow: 'CRM-sync',
      h1Pre: 'Automatische CRM-sync. ', h1Accent: 'Uw CRM, altijd actueel', h1Post: '.',
      sub: 'hubsell vervangt uw system of record niet, maar voedt het. Elk contactmoment via e-mail, LinkedIn en telefoon landt in uw CRM op het moment dat het gebeurt.',
      demoCta: 'Demo plannen',
      row: {
        titlePre: 'Vastgelegd ', titleAccent: 'op het moment dat het gebeurt', titlePost: '',
        points: [
          'Elk contactmoment, verzonden, geopend, beantwoord, verbonden, wordt automatisch vastgelegd in Salesforce, HubSpot of Pipedrive.',
          'Connectieverzoeken, profielbezoeken en belresultaten landen met dezelfde precisie als e-mailgebeurtenissen.',
          'Geen handmatige invoer. Geen dataverval. Uw team werkt aan de pipeline, niet aan de spreadsheet.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'Hoe het werkt',
        stepTitle: 'Van activiteit naar gesynchroniseerd record',
      },
      gridTitlePre: 'Een system of record dat u ', gridTitleAccent: 'eindelijk kunt vertrouwen', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot en Pipedrive',
          body: 'Native tweerichtingssynchronisatie met de drie CRM\u2019s, in realtime. Geen middleware, geen CSV-exports, geen nachtelijke jobs.',
        },
        {
          title: 'Rapportage blijft eerlijk',
          body: 'Als elke activiteit wordt vastgelegd op het moment dat ze gebeurt, toont uw pipelinerapportage de werkelijkheid in plaats van wat verkopers nog wilden intypen.',
        },
        {
          title: 'Elke week uren terug',
          body: 'Handmatige CRM-invoer vreet ongemerkt verkooptijd. Automatische vastlegging geeft die terug: Elium bespaarde na de overstap naar hubsell zo\u2019n 20 uur per week.',
        },
        {
          title: 'Beltaken in uw CRM',
          body: 'Telefoon-stappen maken taken aan die uw verkopers in het CRM afronden. hubsell heeft geen eigen dialer en heeft die ook niet nodig: het gesprek vindt plaats waar het record leeft.',
        },
      ],
      proofEyebrow: 'Bewijs',
      proofTitle: 'Wat automatische vastlegging verandert',
      quoteSlug: 'spryker',
      storySlug: 'elium',
      storyLabel: 'Lees het Elium-verhaal',
      faqEyebrow: 'FAQ',
      faqTitle: 'Veelgestelde vragen over CRM-sync',
      faqSlugs: ['hubsell-crm-integration', 'hubsell-replace-outbound-stack'],
      closing: {
        titlePre: 'Voed uw CRM ', titleAccent: 'automatisch', titlePost: '.',
        sub: 'Laat ons uw CRM-inrichting zien in een kort gesprek en we lopen samen door wat hubsell waar vastlegt.',
      },
      closingCta: 'Demo plannen',
    },
{
      "path": "/platform/deliverability",
      "title": "E-maildeliverability: in de inbox landen, niet in de spammap | hubsell",
      "metaDescription": "E-maildeliverability met hubsell: verstuur vanuit uw eigen mailboxen via de Google- en Microsoft-API’s, valideer elk contact bij de bron en doseer het volume.",
      "eyebrow": "Deliverability",
      "h1Pre": "E-maildeliverability: bereik de ",
      "h1Accent": "inbox",
      "h1Post": ", niet de spammap",
      "sub": "Goede targeting betekent niets als het bericht nooit aankomt. hubsell beschermt het hele pad naar de inbox: gevalideerde contacten, geauthenticeerd versturen vanuit uw eigen mailboxen en een volume dat is gedoseerd om uw reputatie intact te houden.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Verstuurd zoals ",
            "titleAccent": "inboxen vertrouwen",
            "titlePost": "",
            "points": [
                  "E-mails versturen via de Google- en Microsoft-APIs, rechtstreeks vanuit uw eigen mailboxen, zonder externe relay in het pad.",
                  "Elk contact wordt gevalideerd op het moment van verzamelen, catch-all-domeinen gemarkeerd, zodat bounces laag blijven.",
                  "Het volume wordt binnen veilige limieten over uw verzendprofielen gespreid, zodat een nieuw domein nooit een filter in wordt geblazen."
            ],
            "embed": "08-deliverability",
            "stepEyebrow": "Hoe het werkt",
            "stepTitle": "Van gevalideerd contact naar de inbox"
      },
      "gridTitlePre": "Gebouwd om ",
      "gridTitleAccent": "bezorgd te worden",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Gevalideerd bij de bron",
                  "body": "Elk adres wordt gecontroleerd op het moment van gebruik, niet getrokken uit een lijst die maanden geleden is vastgelegd. Catch-all-domeinen worden voor het versturen gemarkeerd, zodat u credits besteedt aan contacten die daadwerkelijk mail kunnen ontvangen."
            },
            {
                  "title": "Verstuurd vanuit uw mailboxen",
                  "body": "Outreach gaat via de Google- en Microsoft-APIs rechtstreeks vanuit uw eigen accounts. Er is geen server van derden in het pad die filters kunnen wantrouwen, zodat uw verzending eruitziet als wat het is: echte mail van een echt persoon."
            },
            {
                  "title": "Authenticatie goed gedaan",
                  "body": "SPF, DKIM en DMARC zijn de controles die providers draaien om te beslissen of mail echt van u komt. hubsell begeleidt u om alle drie correct in te stellen, zodat uw domein slaagt en uw berichten worden vertrouwd."
            },
            {
                  "title": "Gedoseerd, niet geblazen",
                  "body": "Het volume wordt over verzendprofielen gespreid en binnen veilige limieten opgevoerd. Een nieuw domein warmt op in plaats van te pieken, zodat u reputatie opbouwt in plaats van die bij de eerste verzending te verbranden."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Wat de inbox verandert",
      "quoteSlug": "staffbase",
      "storySlug": "staffbase",
      "storyLabel": "Lees het Staffbase-verhaal",
      "faqEyebrow": "FAQ",
      "faqTitle": "Veelgestelde vragen over deliverability",
      "faqSlugs": [
            "stop-sales-email-bounces",
            "hubsell-email-infrastructure",
            "hubsell-catch-all-domains"
      ],
      "closing": {
            "titlePre": "Bekijk uw ",
            "titleAccent": "inboxplaatsing",
            "titlePost": ", niet alleen uw openingsratio.",
            "sub": "Breng uw huidige verzendopzet mee in een kort gesprek en we laten zien waar uw mail daadwerkelijk landt en waarom."
      },
      "closingCta": "Demo plannen"
},
{
      "path": "/platform/personalization",
      "title": "Personalisatie op schaal: relevante outreach voor elk contact | hubsell",
      "metaDescription": "hubsell personaliseert outreach vanuit live signalen en gevalideerde data, zodat elk bericht relevant is voor de persoon en het moment, verstuurd naar duizenden zonder de menselijke toets te verliezen.",
      "eyebrow": "Personalisatie",
      "h1Pre": "Relevant voor ",
      "h1Accent": "elk contact",
      "h1Post": ", bij elk volume",
      "sub": "Generieke mail wordt genegeerd. hubsell bouwt elk bericht uit live signalen en gevalideerde data over de persoon en het account, zodat outreach leest alsof het voor hen is geschreven, ook wanneer u het naar duizenden verstuurt.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Geschreven voor de ",
            "titleAccent": "persoon en het moment",
            "titlePost": "",
            "points": [
                  "Voeg echte details toe over de persoon, het bedrijf en wat ze nu doen, niet alleen een voornaam.",
                  "Live signalen zoals een functiewissel, een aanwervingsronde of activiteit rond een evenement geven elk bericht een reden om te bestaan.",
                  "Dezelfde flow personaliseert \u00e9\u00e9n contact of tienduizend, zodat relevantie u geen bereik kost."
            ],
            "embed": "09-personalization",
            "stepEyebrow": "Hoe het werkt",
            "stepTitle": "Van live signaal naar een bericht dat past"
      },
      "gridTitlePre": "Relevantie die ",
      "gridTitleAccent": "met u meeschaalt",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Voorbij de voornaam",
                  "body": "Echte personalisatie gebruikt wat waar is over het account: de rol, het bedrijf, het moment. hubsell put uit gevalideerde data en live signalen, zodat een bericht verwijst naar iets dat er voor de lezer daadwerkelijk toe doet."
            },
            {
                  "title": "Gegrond in live signalen",
                  "body": "Een functiewissel, een financieringsronde, een aanwervingsronde of betrokkenheid bij een onderwerp geeft outreach een echte haak. hubsell leest deze signalen en zet ze in, zodat het bericht met een reden aankomt."
            },
            {
                  "title": "Consistent op volume",
                  "body": "Met de hand personaliseren schaalt niet, en samenvoegvelden voelen hol. hubsell houdt elk bericht relevant of u nu tien of tienduizend verstuurt, zodat bereik en relevantie niet meer tegen elkaar trekken."
            },
            {
                  "title": "Correcte data eronder",
                  "body": "Personalisatie is maar zo goed als de data erachter. Omdat elk contact bij de bron is gevalideerd, kloppen de details waarnaar u verwijst, zodat een gepersonaliseerde regel nooit landt als een verkeerd-bedrijf-fout."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Wat echte relevantie verandert",
      "quoteSlug": "elium",
      "storySlug": "elium",
      "storyLabel": "Lees het Elium-verhaal",
      "faqEyebrow": "FAQ",
      "faqTitle": "Veelgestelde vragen over personalisatie",
      "faqSlugs": [
            "personalize-outreach-at-scale",
            "hubsell-conversion-rates"
      ],
      "closing": {
            "titlePre": "Bekijk outreach die ",
            "titleAccent": "persoonlijk leest",
            "titlePost": ", op schaal.",
            "sub": "Laat ons uw doelgroep zien in een kort gesprek en we schetsen hoe outreach die op schaal gepersonaliseerd is er voor die doelgroep uitziet."
      },
      "closingCta": "Demo plannen"
},
{
      "path": "/platform/enrichment",
      "title": "Verrijking van contactgegevens: volledig en gevalideerd | hubsell",
      "metaDescription": "hubsell verrijkt elk contact uit meerdere live bronnen en valideert het resultaat op het moment van gebruik, zodat u volledige, actuele records krijgt in plaats van halflege rijen.",
      "extra": {"title": "Geverifieerde zakelijke e-mailadressen en directe nummers", "paras": ["Verrijking vult de twee velden waar outreach het meest van afhangt. Zakelijke e-mailadressen worden gevalideerd op het moment van gebruik, catch-all-domeinen inbegrepen, zodat u alleen verstuurt naar adressen die mail kunnen ontvangen.", "Telefoonnummers, waaronder directe nummers en mobiele nummers als een bron ze heeft, komen in hetzelfde record. Zo heeft elke beltaak een nummer."]},
      "eyebrow": "Enrichment",
      "h1Pre": "Verrijking van contactgegevens, ",
      "h1Accent": "vandaag gevalideerd",
      "h1Post": "",
      "sub": "Een halfgevulde contactrecord remt outreach. hubsell verrijkt elk contact uit meerdere live bronnen en valideert het resultaat op het moment dat u het gebruikt, zodat u werkt vanuit volledige, actuele data in plaats van gaten.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Gevuld uit ",
            "titleAccent": "meerdere live bronnen",
            "titlePost": "",
            "points": [
                  "Elke record wordt gebouwd door om beurten meerdere bronnen te gebruiken, zodat een gat in de ene door een andere wordt gevuld.",
                  "Zakelijk e-mailadres, telefoon, rol en bedrijfsdetails komen samen tot \u00e9\u00e9n volledig contact, niet een verstrooiing van halve rijen.",
                  "De voltooide record wordt op het moment van gebruik gevalideerd, zodat waarnaar u verstuurt op de dag van gebruik correct is."
            ],
            "embed": "10-enrichment",
            "stepEyebrow": "Hoe het werkt",
            "stepTitle": "Van gedeeltelijke rij naar volledige, gevalideerde record"
      },
      "gridTitlePre": "Records die ",
      "gridTitleAccent": "volledig en actueel zijn",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Meerdere bronnen, \u00e9\u00e9n record",
                  "body": "hubsell put om beurten uit meerdere live bronnen, zodat een andere het gat vult waar de ene tekortschiet. Het resultaat is een volledig contact in plaats van een rij met de belangrijke velden ontbrekend."
            },
            {
                  "title": "Gevalideerd op het moment van gebruik",
                  "body": "Enrichment zonder validatie vult velden alleen met verouderde gissingen. hubsell controleert de voltooide record op het moment dat u die gebruikt, catch-all-domeinen inbegrepen, zodat een volledige record ook een correcte is."
            },
            {
                  "title": "Geen verouderende database",
                  "body": "Een statische verrijkte lijst begint te verouderen op de dag dat die is gebouwd. hubsell verrijkt live, op de dag dat u het vraagt, zodat u niet betaalt om records bij te vullen die jaren geleden zijn vastgelegd en sindsdien zijn afgedreven."
            },
            {
                  "title": "Klaar voor outreach",
                  "body": "Een volledige, gevalideerde record stroomt rechtstreeks in uw sequenties en uw CRM. Er is geen export, geen opschoonronde, geen tweede tool, zodat de data die u verrijkt de data is waarnaar u verstuurt."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "Wat volledige data verandert",
      "quoteSlug": "verhaert",
      "storySlug": "verhaert",
      "storyLabel": "Lees het Verhaert-verhaal",
      "faqEyebrow": "FAQ",
      "faqTitle": "Veelgestelde vragen over enrichment",
      "faqSlugs": [
            "build-b2b-audience-no-decay",
            "third-party-intent-data-accuracy"
      ],
      "closing": {
            "titlePre": "Bekijk uw lijst ",
            "titleAccent": "gevuld en gevalideerd",
            "titlePost": ".",
            "sub": "Stuur ons in een kort gesprek een steekproef van uw data en we laten zien wat live enrichment ervoor teruggeeft."
      },
      "closingCta": "Demo plannen"
}
  ],
};
