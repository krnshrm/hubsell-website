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
    h1Pre: 'Het werk van drie tools. ', h1Accent: '\u00c9\u00e9n platform', h1Post: '.',
    sub: 'hubsell vervangt uw dataleverancier, uw outreach-tool en uw sync-middleware door \u00e9\u00e9n systeem: live data, multichannel-outreach en automatische CRM-synchronisatie.',
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
      },
      {
        eyebrow: 'Multichannel-outreach',
        title: 'E-mail, LinkedIn en telefoon in \u00e9\u00e9n flow',
        body: '\u00c9\u00e9n geco\u00f6rdineerde sequentie over alle drie de kanalen, met vertakkingen die reageren op wat elk contact doet en verzending die veilig over de profielen van uw team wordt verdeeld.',
        href: '/platform/multichannel-outreach', linkLabel: 'Meer over multichannel-outreach',
      },
      {
        eyebrow: 'CRM-sync',
        title: 'Elk contactmoment automatisch vastgelegd',
        body: 'Verzonden, geopend, beantwoord, verbonden: alles landt in Salesforce, HubSpot of Pipedrive op het moment dat het gebeurt. Geen handmatige invoer, geen dataverval.',
        href: '/platform/crm-sync', linkLabel: 'Meer over CRM-sync',
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
    ratingsLine: 'Beoordeeld met 4,8+ op G2, Capterra en GetApp.',
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
      title: 'Live verzamelde B2B-data, gevalideerd op het moment van gebruik | hubsell',
      metaDescription: 'hubsell verzamelt B2B-contacten op het moment dat u erom vraagt, afgestemd op uw ICP en gevalideerd op het moment van gebruik. Zero-day sourcing in plaats van een vervallende database.',
      eyebrow: 'Live data',
      h1Pre: 'B2B-data van ', h1Accent: 'vandaag', h1Post: ', niet van twee jaar geleden',
      sub: 'hubsell verkoopt geen toegang tot een statische database. Definieer uw ICP en wij verzamelen contacten live uit LinkedIn, voegen koopsignalen toe en valideren elk record voordat het uw flow binnenkomt.',
      demoCta: 'Demo plannen',
      heroTimeline: true,
      row: {
        titlePre: 'Verzameld uit ', titleAccent: 'echte koopsignalen', titlePost: '',
        points: [
          'De meeste platformen laten u filteren op functietitel en branche. hubsell leest ook gedrag.',
          'Mensen die een bedrijfspagina volgen, met een LinkedIn-post interageren, van baan wisselen, events bezoeken of voor specifieke rollen werven.',
          'Signalen vertellen wie u deze week moet benaderen, niet alleen wie in een filter past.',
        ],
        embed: '05-sp-widget',
      },
      gridTitlePre: 'Data die ', gridTitleAccent: 'correct is op de dag van gebruik', gridTitlePost: '',
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
      title: 'Multichannel-outreach: e-mail, LinkedIn en telefoon in \u00e9\u00e9n flow | hubsell',
      metaDescription: 'Voer e-mail, LinkedIn en telefoon uit als \u00e9\u00e9n geco\u00f6rdineerde sequentie. Vertakkende flows, veilige verzendlimieten en outreach vanaf de profielen die kopers echt accepteren.',
      eyebrow: 'Multichannel-outreach',
      h1Pre: '\u00c9\u00e9n flow over ', h1Accent: 'e-mail, LinkedIn en telefoon', h1Post: '',
      sub: 'Stop met jongleren tussen een e-mailtool, een LinkedIn-tool en een takenlijst. hubsell draait alle drie de kanalen als \u00e9\u00e9n geco\u00f6rdineerde sequentie die reageert op wat elk contact doet.',
      demoCta: 'Demo plannen',
      row: {
        titlePre: '\u00c9\u00e9n sequentie, ', titleAccent: 'elk kanaal', titlePost: '',
        points: [
          'Sleep e-mail-, LinkedIn- en telefoon-stappen met drag-and-drop in \u00e9\u00e9n enkele flow.',
          'Profielbezoeken, connectieverzoeken, DMs, InMail en beltaken, alles afgestemd op uw e-mailcadans.',
          'Vertakkingsvoorwaarden leiden elk contact op basis van gedrag: geopend, beantwoord, geaccepteerd of stil gebleven.',
        ],
        embed: '06-multichannel-flow',
      },
      gridTitlePre: 'Gebouwd om ', gridTitleAccent: 'aan te komen en beantwoord te worden', gridTitlePost: '',
      blocks: [
        {
          title: 'Deliverability als uitgangspunt',
          body: 'E-mails worden via de Google- en Microsoft-API\u2019s rechtstreeks vanuit uw eigen mailboxen verzonden, zonder externe servers ertussen. Open rates blijven eerlijk en spamfilters blijven rustig.',
        },
        {
          title: 'Veilig verzenden, verdeeld',
          body: 'Outreach wordt verdeeld over 5 tot 10 interne verzendprofielen, binnen strikte platformlimieten. Minder volume per verzender, hogere deliverability, geen beschadigd domein.',
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
      eyebrow: 'CRM-sync',
      h1Pre: 'Uw CRM, altijd actueel. ', h1Accent: 'Vanzelf', h1Post: '.',
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
  ],
};
