// Dutch copy for the /platform pages. Mirrors platform-content.ts exactly in
// structure; register is formal (u/uw), brand stays lowercase "hubsell", technical
// terms (CRM, LinkedIn, ICP, InMail, DMs, credits) stay English, Dutch number
// formatting (decimal comma, ranges with "tot", % attached).
import type { PlatformData } from './platform-content';

export const platformNl: PlatformData = {
  overview: {
    title: "Sales-engagementplatform met live data en CRM-sync | hubsell",
    metaDescription: "hubsell is een sales-engagementplatform met eigen live B2B-data. Verzamel contacten, draai e-mail, LinkedIn en beltaken in één flow en synchroniseer elk contactmoment met uw CRM.",
    eyebrow: "Sales-engagementplatform",
    h1Pre: "Het werk van zes tools. ",
    h1Accent: "Eén platform",
    h1Post: ".",
    sub: "hubsell is een sales-engagementplatform met eigen data. Het verzamelt contacten live, draait e-mail, LinkedIn en beltaken in één flow en synchroniseert elk contactmoment met Salesforce, HubSpot of Pipedrive.",
    compare: {"eyebrow": "All-in-one sales engagement", "titlePre": "Een stack van zes tools tegenover ", "titleAccent": "één platform", "titlePost": "", "colA": "Losse tools", "colB": "hubsell", "rows": [["Contactdata", "Een database die u één keer koopt en maandenlang gebruikt", "Live verzameld voor elke zoekopdracht en getoetst aan uw ICP"], ["Verrijking", "Een tweede tool, een CSV erin en een CSV eruit", "Geverifieerde e-mailadressen en telefoonnummers op dezelfde plek"], ["E-mailoutreach", "Een e-mailtool die niets van LinkedIn weet", "E-mail- en LinkedIn-stappen in één flow"], ["LinkedIn", "Met de hand, of in nog een automatiseringstool", "Profielbezoeken, verzoeken, berichten en InMail als flowstappen"], ["Bellen", "Een dialer en notities die achteraf worden getypt", "Beltaken aangemaakt in uw CRM"], ["CRM", "Activiteit met de hand vastgelegd, als het al gebeurt", "Contacten en activiteit gesynchroniseerd met Salesforce, HubSpot of Pipedrive"], ["Kosten", "Meerdere abonnementen en het werk ertussen", "Eén login, één factuur"]]},
    heads: {"stages": {"eyebrow": "Platformoverzicht", "pre": "Elke stap van outbound, ", "accent": "op één plek", "post": ""}, "also": {"eyebrow": "Ook in het platform", "pre": "Ingebouwd, ", "accent": "niet erbij geplakt", "post": ""}, "why": {"eyebrow": "Waarom één platform", "pre": "Elk onderdeel maakt ", "accent": "de andere beter", "post": ""}, "proof": {"eyebrow": "Klantresultaten", "pre": "Teams die overstapten ", "accent": "naar één platform", "post": ""}, "closing": {"eyebrow": "Sales-engagementplatform", "pre": "Zie het hele platform ", "accent": "in één gesprek", "post": "."}, "faq": {"eyebrow": "FAQ over het sales-engagementplatform", "pre": "Vragen over ", "accent": "het platform van hubsell", "post": ""}},
    stages: [{"eyebrow": "Live B2B-data", "title": "Prospects vinden via koopsignalen", "slice": "live-data", "href": "/platform/live-data", "linkLabel": "Meer over live data", "body": "Contacten worden live verzameld van LinkedIn en bedrijfswebsites, voor uw zoekopdracht, op basis van signalen als postinteractie, nieuwe functies, vacatures en volgers van concurrenten. Elk contact wordt getoetst aan uw ICP voordat u het gebruikt."}, {"eyebrow": "Verrijking van contactgegevens", "title": "Geverifieerde e-mailadressen en telefoonnummers", "slice": "enrichment", "href": "/platform/enrichment", "linkLabel": "Meer over verrijking", "body": "95% van de zakelijke e-mailadressen klopt, catch-all-domeinen inbegrepen, en elk record krijgt een kwaliteitscontrole voordat het de outreach in gaat. Telefoonnummers zijn optioneel en komen van partners die op kwaliteit zijn gekozen."}, {"eyebrow": "Multichannel-outreach", "title": "E-mail, LinkedIn en bellen in één flow", "slice": "multichannel", "href": "/platform/multichannel-outreach", "linkLabel": "Meer over multichannel-outreach", "body": "Profielbezoeken, connectieverzoeken, berichten, InMail, e-mails en beltaken lopen als stappen in één flow. Voorwaarden leiden elk contact op basis van gedrag, zodat niemand een e-mail krijgt die al op LinkedIn heeft gereageerd."}, {"eyebrow": "CRM-sync", "title": "Elk contactmoment op het juiste record", "slice": "crm-sync", "href": "/platform/crm-sync", "linkLabel": "Meer over CRM-sync", "body": "Contacten en activiteit gaan naar Salesforce, HubSpot of Pipedrive, handmatig of via regels overgezet en gekoppeld aan bestaande records, zodat er niets dubbel ontstaat."}],
    also: [{"title": "E-maildeliverability", "href": "/platform/deliverability", "linkLabel": "Meer over deliverability", "body": "E-mails gaan uit vanuit uw eigen Google- of Microsoft-mailboxen via hun API’s. Contacten worden geverifieerd voor de eerste verzending, en het volume wordt over uw verzenders verdeeld."}, {"title": "Personalisatie op basis van signalen", "href": "/platform/personalization", "linkLabel": "Meer over personalisatie", "body": "Berichten kunnen openen met het signaal waardoor een contact op uw lijst kwam: de post waarop het reageerde, de nieuwe functie of de rol waarvoor het bedrijf werft."}],
    why: [{"title": "Verse data, minder bounces", "body": "Contacten die op de dag van gebruik worden verzameld en geverifieerd, bouncen minder. Dat beschermt uw afzenderreputatie voor elke e-mail die volgt."}, {"title": "Afgestemde kanalen, meer reacties", "body": "Als e-mail en LinkedIn van elkaar weten, krijgt elk contact de volgende stap die past bij wat het deed, en geen tweede bericht op een kanaal waarop het al reageerde."}, {"title": "Automatisch vastgelegd, eerlijke rapporten", "body": "Als elk contactmoment direct in het CRM komt, tonen pipelinerapporten wat er echt gebeurde, en krijgt uw team de tijd terug die het aan overtypen kwijt was."}],
    ratingsLine: "Beoordeeld met 4,6+ op G2, Capterra en GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Lees het Workspace 365-verhaal",
    closingSub: "Neem uw huidige stack mee naar een kort gesprek en wij laten zien hoe die eruitziet als één systeem.",
    faqs: [{"question": "Wat is een sales-engagementplatform?", "answer": "<p>Een sales-engagementplatform stuurt de outreach in sales: e-mails, LinkedIn-stappen en telefoontjes in een volgorde die u bepaalt, waarbij elk contactmoment wordt bijgehouden. hubsell voegt de twee dingen toe die de meeste missen: live B2B-contactdata om te benaderen, en automatische synchronisatie van de resultaten met uw CRM.</p>"}, {"question": "Wat is het verschil tussen hubsell en Outreach of Salesloft?", "answer": "<p>Outreach en Salesloft zijn tools voor e-mailsequenties. Ze verzamelen geen contactdata en draaien LinkedIn niet native, dus u hebt ernaast nog steeds een dataleverancier en een handmatig LinkedIn-proces nodig. hubsell dekt alle drie: live data, e-mail en LinkedIn in één flow met beltaken, en CRM-sync.</p>"}, {"question": "Welke tools kan hubsell vervangen?", "answer": "<p>Een B2B-dataleverancier, een verrijkingstool, een e-mailoutreachtool en een LinkedIn-automatiseringstool. Bellen loopt via taken in uw CRM, dus voor outboundstappen is geen aparte dialer nodig, en activiteit wordt zonder tussenliggende synctool in het CRM vastgelegd.</p>"}, {"question": "Bevat hubsell B2B-contactdata?", "answer": "<p>Ja. hubsell verzamelt contacten live voor elke zoekopdracht, van LinkedIn en bedrijfswebsites, en verrijkt de contacten die bij uw ICP passen met een geverifieerd zakelijk e-mailadres en, als u dat wilt, een telefoonnummer. Er is geen statische database waartoe u toegang koopt. Zie <a class=\"link\" href=\"/nl/platform/live-data/\">live data</a>.</p>"}, {"question": "Welke kanalen ondersteunt hubsell?", "answer": "<p>E-mail vanuit uw eigen Google- of Microsoft-mailboxen, LinkedIn (profielbezoeken, connectieverzoeken, berichten en InMail) en telefoon, als beltaken in uw CRM. Ze lopen allemaal als stappen in één flow.</p>"}, {"question": "Met welke CRM’s werkt hubsell?", "answer": "<p>Salesforce, HubSpot en Pipedrive. Contacten, bedrijven en activiteit worden in realtime van hubsell naar het CRM gesynchroniseerd en gekoppeld aan bestaande records, zodat er niets dubbel ontstaat. Zie <a class=\"link\" href=\"/nl/platform/crm-sync/\">CRM-sync</a>.</p>"}, {"question": "Is hubsell AVG-conform?", "answer": "<p>Ja. hubsell is gevestigd in Berlijn en host de data in Frankfurt. Data wordt verwerkt voor het doel dat u bepaalt en niet bewaard om door te verkopen. U blijft verwerkingsverantwoordelijke en hubsell is verwerker, onder een verwerkersovereenkomst.</p>"}, {"question": "Hoe snel kan ik starten?", "answer": "<p>Het hubsell-team regelt samen met u de campagne-inrichting, dataverzameling en flowconfiguratie, zodat de meeste teams hun eerste outbound-campagne binnen 7 dagen draaien.</p>"}, {"question": "Wat kost hubsell?", "answer": "<p>Start kost vanaf € 120 per gebruiker per maand en Grow vanaf € 4.320 per jaar. Scale krijgt een prijs in een offerte op maat, voor teams vanaf 10 gebruikers. Zie <a class=\"link\" href=\"/nl/pricing/\">prijzen</a>.</p>"}, {"question": "Voor wie is hubsell?", "answer": "<p>Voor B2B-bedrijven die aan andere bedrijven verkopen: salesteams en SDR’s, oprichters die zelf verkopen, RevOps-teams en bureaus die outbound voor klanten draaien. De meeste klanten zitten in Europa.</p>"}],
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
      faqs: [{"question": "Wat is live verzamelde B2B-data, en wat is het verschil met een B2B-contactdatabase?", "answer": "<p>Live verzamelde data wordt verzameld op het moment dat u erom vraagt, voor uw zoekopdracht, in plaats van uit een database te komen die maanden of jaren eerder is vastgelegd. hubsell bouwt voor elke aanvraag een nieuwe set contacten, afgestemd op uw ICP en gevalideerd op het moment van gebruik. Een contactdatabase verkoopt toegang tot records die verouderen sinds de dag dat ze zijn verzameld.</p>"}, {"question": "Hoe snel raakt B2B-contactdata verouderd?", "answer": "<p>B2B-beslissers wisselen ongeveer elke 2,5 jaar van baan. Een statische database verliest daardoor elk jaar 25 tot 30% van haar nauwkeurigheid: e-mails bouncen, functies veranderen en mensen stappen over naar een ander bedrijf. Data die op de dag van gebruik wordt verzameld, heeft geen last van dat verval.</p>"}, {"question": "Waar komt de B2B-data van hubsell vandaan?", "answer": "<p>hubsell verzamelt data live van LinkedIn en bedrijfswebsites en maakt zelf data aan, bijvoorbeeld door zakelijke e-mailadressen te genereren en te valideren. Telefoonnummers komen van partners die gekozen zijn op nauwkeurigheid en kwaliteit, niet op prijs.</p>"}, {"question": "Is de B2B-data van hubsell AVG-conform?", "answer": "<p>Ja. hubsell verzamelt en verwerkt data ad hoc voor elke klant en bewaart ze niet om door te verkopen. De klant is de verwerkingsverantwoordelijke en hubsell de verwerker, op basis van een verwerkersovereenkomst. hubsell is gevestigd in Berlijn, draait op servers in Frankfurt en verwijdert accountdata binnen 30 dagen na het einde van een contract.</p>"}, {"question": "Wat is de rechtsgrond voor B2B-outreach onder de AVG?", "answer": "<p>Voor outreach naar zakelijke contacten is dat meestal het gerechtvaardigd belang. Bij hubsell blijft de klant de verwerkingsverantwoordelijke en legt die het doel vast voordat er één contact wordt verzameld. hubsell verwerkt de data alleen voor dat doel. De regels voor cold e-mail verschillen per land, lees daarover onze <a class=\"link\" href=\"/insights/b2b-data-compliance/\">gids over B2B-datacompliance (Engels)</a>.</p>"}, {"question": "Op basis van welke koopsignalen kan hubsell contacten verzamelen?", "answer": "<p>hubsell kan mensen verzamelen die reageerden op een LinkedIn-post, een LinkedIn-event bijwonen, uw bedrijfspagina of die van een concurrent volgen, onlangs van baan zijn gewisseld of werken bij bedrijven die voor bepaalde functies werven. U kunt ook starten vanuit een LinkedIn- of Sales Navigator-zoekopdracht, of uw eigen lijst importeren.</p>"}, {"question": "Hoe vindt hubsell de mensen die reageerden op een LinkedIn-post of een event bijwoonden?", "answer": "<p>U plakt de link naar de post of het event in hubsell. hubsell verzamelt de mensen die reageerden, een opmerking plaatsten of zich aanmeldden, toetst ze aan uw ICP en verrijkt wie past met geverifieerde contactgegevens. Daarna kunnen ze direct een flow in met LinkedIn, e-mail en beltaken.</p>"}, {"question": "Hoe nauwkeurig is de contactdata van hubsell?", "answer": "<p>De data van hubsell is voor 95% nauwkeurig, catch-all-domeinen inbegrepen, en dekt 80 tot 90% van een doelmarkt. Elk record wordt gevalideerd op het moment van gebruik, niet bij de eerste vastlegging. hubsell voert graag een vergelijkingstest uit met uw huidige leverancier.</p>"}, {"question": "Hoe rekent hubsell voor data, en betaal ik voor contacten die ik niet kan gebruiken?", "answer": "<p>U betaalt voor verwerkingsresultaten, stap voor stap: verzamelen, dan verrijken, gevalideerde e-mailadressen en telefoonnummers. Omdat elke stap apart wordt gerekend, kunt u de verzamelde contacten eerst bekijken en uitsluiten wie niet relevant is. U betaalt alleen voor het verrijken van de contacten die u houdt. Zie <a class=\"link\" href=\"/nl/pricing/\">prijzen</a>.</p>"}, {"question": "Hoe verhoudt hubsell zich tot ZoomInfo, Apollo of Cognism voor B2B-data?", "answer": "<p>ZoomInfo, Apollo en Cognism verkopen toegang tot een database. hubsell verzamelt data vers voor elke aanvraag, dus ze is actueel, getoetst aan uw ICP en relevant voor de signalen die u kiest. hubsell voert daarnaast de outreach uit en synchroniseert die met uw CRM, terwijl die tools meestal bij de data stoppen. Vergelijkingen: <a class=\"link\" href=\"/nl/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/nl/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/nl/vs/cognism/\">Cognism</a>.</p>"}],
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
      metaDescription: 'LinkedIn, e-mail en beltaken in één flow. Veilige LinkedIn-automatisering over meerdere verzendprofielen, e-mail vanuit uw eigen mailboxen, gesprekken in uw CRM.',
      heroSlice: "multichannel",
      compare: {"eyebrow": "LinkedIn- en e-mailoutreach", "titlePre": "Drie losse tools tegenover ", "titleAccent": "één multichannel-flow", "titlePost": "", "colA": "Losse tools", "colB": "hubsell multichannel-outreach", "rows": [["Kanalen", "Een e-mailtool, een LinkedIn-tool en een takenlijst, elk apart", "E-mail, LinkedIn en beltaken in één flow"], ["Reageren op het contact", "Iemand moet de andere tools met de hand stoppen", "Vertakkingen leiden elk contact op basis van gedrag: geaccepteerd, geopend, gereageerd of stil"], ["Wie verstuurt op LinkedIn", "SDR-profielen, minder dan 20% geaccepteerd", "Profielen van oprichters en experts, meer dan 50% geaccepteerd"], ["LinkedIn-volume", "Eén profiel draagt alle activiteit", "Verdeeld over 5 tot 10 verzendprofielen binnen strikte limieten"], ["E-mail versturen", "Via externe verzendservers en trackinglinks", "Vanuit uw eigen mailboxen via de API’s van Google en Microsoft"], ["Bellen", "Een aparte dialer en handmatig vastleggen", "Beltaken in Salesforce, HubSpot of Pipedrive, vastgelegd bij de flow"]]},
      heads: {"signals": {"eyebrow": "Multichannel-outreachplatform", "pre": "Een multichannel-outreachplatform, ", "accent": "geen drie tools", "post": ""}, "explained": {"eyebrow": "LinkedIn-automatisering", "pre": "LinkedIn- en e-mailoutreach, ", "accent": "stap voor stap", "post": ""}, "steps": {"eyebrow": "Hoe het werkt", "pre": "Zo verloopt een ", "accent": "multichannel-flow", "post": ""}, "extra": {"eyebrow": "LinkedIn-veiligheid", "pre": "", "accent": "Veilige LinkedIn-automatisering", "post": " binnen de limieten"}, "proof": {"eyebrow": "Klantresultaten", "pre": "Wat ", "accent": "gecoördineerde outreach", "post": " verandert"}, "closing": {"eyebrow": "LinkedIn- en e-mailoutreach", "pre": "LinkedIn, e-mail en bellen als ", "accent": "één flow", "post": ""}, "faq": {"eyebrow": "FAQ over multichannel-outreach", "pre": "Vragen over ", "accent": "multichannel-outreach", "post": ""}},
      signals: {"sub": "Elke stap is een blok in de flowbuilder. Zet ze in de volgorde die bij uw kopers past, en laat de voorwaarden bepalen wie waarheen gaat.", "startLabel": "Gebruik het voor", "items": [{"id": "visit", "title": "Profielbezoeken", "body": "Een profielbezoek laat de prospect zien wie zo contact opneemt, voordat er iets wordt gevraagd.", "start": "Een contact opwarmen voor het verzoek"}, {"id": "invite", "title": "Connectieverzoeken", "body": "Verzoeken gaan uit vanaf de profielen die kopers accepteren. Verzoeken van oprichters en experts worden in meer dan 50% van de gevallen geaccepteerd, bij SDR-profielen blijft dat onder de 20%.", "start": "Een eerstegraadsnetwerk met uw kopers opbouwen"}, {"id": "message", "title": "LinkedIn-berichten", "body": "Na een geaccepteerd verzoek volgt na de ingestelde wachttijd een direct bericht. Wat daarna gebeurt, hangt af van of het contact reageert.", "start": "Het eerste echte gesprek"}, {"id": "inmail", "title": "InMail", "body": "InMail bereikt mensen buiten uw netwerk zonder eerst een connectieverzoek.", "start": "Contacten die te belangrijk zijn om te wachten"}, {"id": "email", "title": "E-mailstappen", "body": "E-mails gaan uit vanuit uw eigen Google- of Microsoft-mailboxen via hun API’s, zonder externe server of trackingredirect ertussen.", "start": "Iedereen met een geverifieerd e-mailadres, ook wie niet accepteerde"}, {"id": "call", "title": "Beltaken", "body": "Belstappen maken beltaken aan in Salesforce, HubSpot of Pipedrive. Uw team belt vanuit het CRM en de uitkomst wordt bij de flow vastgelegd.", "start": "De contacten die een gesprek waard zijn"}, {"id": "branch", "title": "Voorwaarden en vertakkingen", "body": "Elk contact wordt geleid op basis van gedrag: geaccepteerd, geopend, gereageerd of stil. Wie accepteert krijgt een bericht, wie niet accepteert krijgt in plaats daarvan een e-mail.", "start": "Elk contact op het juiste pad houden"}, {"id": "wait", "title": "Wachttijden", "body": "Wachtstappen spreiden de contactmomenten, bijvoorbeeld een dag na een geaccepteerd verzoek of een week voordat een onbeantwoord verzoek wordt ingetrokken.", "start": "Een tempo dat persoonlijk voelt, niet geautomatiseerd"}]},
      extra: {"title": "Veilige LinkedIn-automatisering", "paras": ["LinkedIn beperkt accounts wanneer veel activiteit in korte tijd wordt samengeperst. hubsell doet het omgekeerde: het bouwt uw eerstegraadsnetwerk langzaam en gestaag op, 365 dagen per jaar, binnen strikte platformlimieten.", "De activiteit wordt verdeeld over 5 tot 10 verzendprofielen uit uw team, zodat geen enkel profiel het volume draagt. Minder volume per verzender houdt elk profiel gezond en beschermt ook uw e-maildomein.", "Verzoeken die niet worden geaccepteerd, worden na de ingestelde wachttijd ingetrokken, zodat openstaande verzoeken zich niet opstapelen op een profiel."], "links": [{"label": "Zo beschermt hubsell uw e-maildeliverability", "href": "/platform/deliverability"}]},
      faqs: [{"question": "Wat is een multichannel-outreachplatform?", "answer": "<p>Een multichannel-outreachplatform draait LinkedIn, e-mail en telefoon als één flow in plaats van drie losse tools. hubsell bepaalt de volgende stap voor elk contact op basis van wat het op elk kanaal deed, dus een geaccepteerd verzoek, een geopende e-mail of een reactie brengt het verder zonder dat iemand van tool wisselt.</p>"}, {"question": "Kan ik LinkedIn- en e-mailoutreach in één flow draaien?", "answer": "<p>Ja. In hubsell staan LinkedIn-stappen (profielbezoeken, connectieverzoeken, berichten, InMail), e-mailstappen en beltaken in één flow. Voorwaarden leiden elk contact: wie het verzoek accepteert krijgt een LinkedIn-bericht, wie niet accepteert krijgt in plaats daarvan een e-mail.</p>"}, {"question": "Is LinkedIn-automatisering veilig? Hoe voorkomt hubsell beperkingen?", "answer": "<p>LinkedIn beperkt accounts wanneer veel activiteit in korte tijd wordt samengeperst. hubsell bouwt uw eerstegraadsnetwerk langzaam en gestaag op, 365 dagen per jaar, binnen strikte platformlimieten, en verdeelt de activiteit over 5 tot 10 verzendprofielen zodat geen enkel profiel het volume draagt.</p>"}, {"question": "Welke LinkedIn-acties kan hubsell automatiseren?", "answer": "<p>Profielbezoeken, connectieverzoeken, directe berichten en InMail, plus het intrekken van verzoeken die niet zijn geaccepteerd. Elke actie is een stap in dezelfde flow als uw e-mails en beltaken.</p>"}, {"question": "Verstuurt hubsell e-mails vanuit mijn eigen mailbox?", "answer": "<p>Ja. E-mails gaan uit vanuit uw eigen Google- of Microsoft-mailboxen via hun API’s. Er is geen externe SMTP-server en geen trackingredirect in de e-mail, zodat uw berichten eruitzien als wat ze zijn: echte mail van een echt persoon. Meer over <a class=\"link\" href=\"/nl/platform/deliverability/\">deliverability</a>.</p>"}, {"question": "Wie moet LinkedIn-outreach versturen: SDR’s of executives?", "answer": "<p>De afzender bepaalt het resultaat. Connectieverzoeken van SDR’s worden meestal in minder dan 20% van de gevallen geaccepteerd, omdat kopers een pitch verwachten. Hetzelfde verzoek van een oprichter, executive of expert wordt in meer dan 50% geaccepteerd. hubsell draait outreach vanaf de profielen die kopers accepteren.</p>"}, {"question": "Kan hubsell outreach vanaf meerdere LinkedIn-profielen tegelijk draaien?", "answer": "<p>Ja. hubsell stuurt de outreach van uw CEO, salesleiders en experts vanaf één plek, zodat meerdere mensen hetzelfde account gecoördineerd benaderen en het volume over hun profielen wordt verdeeld.</p>"}, {"question": "Welke resultaten mag ik verwachten van LinkedIn- en e-mailoutreach met hubsell?", "answer": "<p>Met het hubsell-playbook zien teams doorgaans 25 tot 40% geaccepteerde connectieverzoeken, 10 tot 15% reacties en 3 tot 5% gestarte gesprekken. De resultaten zitten aan de bovenkant wanneer de verzendprofielen niet salesy overkomen.</p>"}, {"question": "Kan hubsell bellen?", "answer": "<p>hubsell heeft geen ingebouwde dialer. Belstappen maken beltaken aan in Salesforce, HubSpot of Pipedrive, zodat uw team belt vanuit het CRM dat het al gebruikt en de uitkomst bij de flow wordt vastgelegd. Zie <a class=\"link\" href=\"/nl/platform/crm-sync/\">CRM-sync</a>.</p>"}, {"question": "Hoe verhoudt hubsell zich tot Outreach of Salesloft?", "answer": "<p>Outreach en Salesloft zijn tools voor e-mailsequenties: ze verzamelen geen data en draaien LinkedIn niet native, dus u hebt nog steeds een dataleverancier en een handmatig LinkedIn-proces nodig. hubsell dekt alle drie de lagen: live verzamelde prospectdata, LinkedIn en e-mail in één flow met beltaken, en automatische CRM-sync.</p>"}],
      eyebrow: 'Multichannel-outreach',
      h1Pre: 'Multichannel-outreach via ', h1Accent: 'e-mail, LinkedIn en telefoon', h1Post: '',
      sub: 'Stop met jongleren tussen een e-mailtool, een LinkedIn-tool en een takenlijst. hubsell draait alle drie de kanalen als \u00e9\u00e9n geco\u00f6rdineerde flow die reageert op wat elk contact doet.',
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
          body: 'Telefoon-stappen landen als beltaken in Salesforce, HubSpot of Pipedrive. Uw verkopers bellen vanuit het CRM dat ze al gebruiken en het resultaat wordt met de rest van de flow vastgelegd.',
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
        sub: 'Neem een van uw huidige campagnes mee naar een kort gesprek en wij vertalen die naar \u00e9\u00e9n hubsell-flow.',
      },
      closingCta: 'Demo plannen',
    },

    {
      path: '/platform/crm-sync',
      title: 'CRM-sync: LinkedIn- en e-mailactiviteit in HubSpot, Salesforce en Pipedrive | hubsell',
      metaDescription: 'Synchroniseer LinkedIn- en e-mailactiviteit met HubSpot, Salesforce of Pipedrive. Zet contacten handmatig of via regels over, koppel bestaande records en leg elk contactmoment direct vast.',
      heroSlice: "crm-sync",
      compare: {"eyebrow": "CRM-integratie", "titlePre": "Handmatig of ", "titleAccent": "automatisch in het CRM", "titlePost": "", "colA": "Met de hand", "colB": "hubsell CRM-sync", "rows": [["Contacten in het CRM", "CSV-exports en -imports, of records overtypen", "Handmatig of automatisch overgezet, volgens de voorwaarden die u instelt"], ["Dubbele records", "Een tweede record bij elke geïmporteerde lijst", "Gekoppeld aan bestaande records in plaats van nieuwe aan te maken"], ["LinkedIn-activiteit", "Blijft in LinkedIn, onzichtbaar voor de rest van het team", "Bezoeken, verzoeken, berichten en reacties op het contactrecord"], ["E-mailactiviteit", "Vastgelegd als iemand eraan denkt", "Verzonden, geopend en beantwoord, direct vastgelegd"], ["Bellen", "Een dialer plus een notitie die achteraf wordt getypt", "Beltaken in het CRM, uitkomst op het record"], ["Bestaande klanten", "Opnieuw benaderd omdat niemand in het CRM keek", "CRM-contacten uitgesloten voordat de outreach begint"]]},
      heads: {"signals": {"eyebrow": "CRM-integratie", "pre": "Elk contactmoment ", "accent": "in uw CRM", "post": ""}, "explained": {"eyebrow": "LinkedIn synchroniseren met uw CRM", "pre": "Deze data ", "accent": "komt in uw CRM", "post": ""}, "steps": {"eyebrow": "Hoe het werkt", "pre": "Van flowstap ", "accent": "naar CRM-record", "post": ""}, "extra": {"eyebrow": "Integratie met Salesforce, HubSpot en Pipedrive", "pre": "Uw CRM blijft het ", "accent": "leidende systeem", "post": ""}, "proof": {"eyebrow": "Klantresultaten", "pre": "Resultaten met ", "accent": "automatische CRM-sync", "post": ""}, "closing": {"eyebrow": "Automatische CRM-sync", "pre": "Uw CRM, ", "accent": "altijd actueel", "post": "."}, "faq": {"eyebrow": "FAQ over CRM-sync", "pre": "Vragen over ", "accent": "CRM-sync", "post": ""}},
      signals: {"sub": "Alles hieronder kan naar Salesforce, HubSpot of Pipedrive. U bepaalt wat wordt overgezet en wanneer.", "startLabel": "In het CRM", "items": [{"id": "company", "title": "Contacten en bedrijven", "body": "Personen en hun bedrijven worden in het CRM aangemaakt, of gekoppeld aan het bestaande record en bijgewerkt.", "start": "Eén record per persoon"}, {"id": "email", "title": "E-mailactiviteit", "body": "Elke e-mail die een flow verstuurt, plus openingen en reacties, wordt direct op het contact vastgelegd.", "start": "Activiteit op de tijdlijn van het contact"}, {"id": "invite", "title": "LinkedIn-verzoeken en connecties", "body": "Connectieverzoeken en geaccepteerde verzoeken verschijnen op het contact naast de e-mails, zodat het hele team de LinkedIn-kant van de outreach ziet.", "start": "Activiteit op de tijdlijn van het contact"}, {"id": "message", "title": "LinkedIn-berichten en reacties", "body": "Berichten en InMails vanaf de profielen van uw team, en de reacties daarop, worden op het record vastgelegd.", "start": "Activiteit op de tijdlijn van het contact"}, {"id": "call", "title": "Beltaken en uitkomsten", "body": "Belstappen maken een beltaak aan in het CRM. Uw team belt vanuit het CRM en legt de uitkomst daar vast.", "start": "Een taak in het CRM"}, {"id": "branch", "title": "Regels voor overzetten", "body": "U bepaalt welke contacten naar het CRM gaan: handmatig, of via voorwaarden, bijvoorbeeld alleen contacten die reageren.", "start": "Alleen contacten die een record waard zijn"}, {"id": "map", "title": "Veldkoppeling", "body": "U kiest welk hubsell-veld welk CRM-veld vult, zodat de data terechtkomt waar uw rapporten haar verwachten.", "start": "Uw velden, uw structuur"}, {"id": "ban", "title": "CRM-contacten uitsluiten", "body": "Contacten die al in uw CRM staan, zoals klanten of open deals, kunt u uitsluiten voordat de outreach begint.", "start": "Klanten niet per ongeluk benaderen"}]},
      extra: {"title": "Uw CRM blijft het leidende systeem", "paras": ["hubsell schrijft naar Salesforce, HubSpot en Pipedrive. Het vervangt ze niet, en uw team hoeft niet op twee plekken te werken.", "Voordat hubsell schrijft, zoekt het het bestaande record op en werkt het dat bij. Dezelfde persoon twee keer overzetten levert dus geen tweede contact op.", "Contacten die al in uw CRM staan, kunt u uitsluiten voordat een flow start, zodat klanten en open deals niet per ongeluk worden benaderd."], "links": [{"label": "Handleiding: uw CRM koppelen", "href": "/knowledge/connect-your-crm"}]},
      faqs: [{"question": "Integreert hubsell met HubSpot, Salesforce en Pipedrive?", "answer": "<p>Ja. hubsell heeft native integraties met alle drie. U koppelt uw CRM één keer onder Integraties en geeft de gevraagde rechten. Daarna loopt de sync in realtime, zonder Zapier, middleware of CSV-bestanden. Zie <a class=\"link\" href=\"/knowledge/connect-your-crm/\">uw CRM koppelen</a>.</p>"}, {"question": "Hoe synchroniseer ik LinkedIn-activiteit met HubSpot?", "answer": "<p>Koppel HubSpot aan hubsell en draai uw LinkedIn-outreach in een hubsell-flow. Profielbezoeken, connectieverzoeken, geaccepteerde verzoeken, berichten en reacties worden dan op het HubSpot-contact vastgelegd, naast e-mailactiviteit en beltaken. Salesforce en Pipedrive werken op dezelfde manier.</p>"}, {"question": "Wat zet hubsell over naar mijn CRM?", "answer": "<p>Contacten en hun bedrijven, e-mailactiviteit (verzonden, geopend, beantwoord), LinkedIn-activiteit (profielbezoeken, connectieverzoeken, geaccepteerde verzoeken, berichten, InMail en reacties) en beltaken met hun uitkomst.</p>"}, {"question": "Worden contacten automatisch naar mijn CRM overgezet?", "answer": "<p>Alleen als u dat wilt. U kunt contacten handmatig overzetten, of voorwaarden instellen die ze automatisch overzetten, bijvoorbeeld alleen de contacten die reageren. Uw CRM koppelen zet uit zichzelf niets over.</p>"}, {"question": "Maakt hubsell dubbele records aan in mijn CRM?", "answer": "<p>Nee. Voordat hubsell schrijft, koppelt het elk contact en bedrijf aan het bestaande record en werkt het dat bij, in plaats van een tweede aan te maken.</p>"}, {"question": "Kan ik contacten uitsluiten die al in mijn CRM staan?", "answer": "<p>Ja. Contacten die al in uw CRM staan, zoals klanten of mensen in open deals, kunt u uitsluiten voordat de outreach begint, zodat niemand per ongeluk wordt benaderd.</p>"}, {"question": "Werkt de CRM-sync van hubsell in twee richtingen?", "answer": "<p>Op dit moment loopt de sync van hubsell naar uw CRM. hubsell schrijft contacten, bedrijven en activiteit, en controleert het CRM op bestaande records en op contacten om uit te sluiten. Wijzigingen in het CRM worden nog niet teruggeschreven naar hubsell. Tweerichtings-sync staat gepland.</p>"}, {"question": "Kan ik kiezen welke CRM-velden hubsell vult?", "answer": "<p>Ja. U koppelt hubsell-velden aan de velden in uw CRM, zodat de data terechtkomt waar uw rapporten en workflows haar verwachten.</p>"}, {"question": "Hoe worden telefoongesprekken in het CRM vastgelegd?", "answer": "<p>hubsell heeft geen ingebouwde dialer. Een belstap in een flow maakt een beltaak aan in Salesforce, HubSpot of Pipedrive. Uw team belt vanuit het CRM en legt de uitkomst vast op hetzelfde record als de e-mail- en LinkedIn-activiteit.</p>"}, {"question": "Waarom outreach-activiteit automatisch in het CRM vastleggen?", "answer": "<p>Handmatig vastleggen is traag en onvolledig, waardoor pipelinerapporten tonen wat iemand heeft ingetypt. Als elk contactmoment direct wordt vastgelegd, is het record compleet en krijgt uw team tijd terug. Elium bespaarde zo’n 20 uur per week na de overstap naar hubsell.</p>"}],
      eyebrow: 'CRM-sync',
      h1Pre: 'Uw CRM ', h1Accent: 'werkt zichzelf bij', h1Post: '',
      sub: 'hubsell voedt HubSpot, Salesforce en Pipedrive, in plaats van ze te vervangen. U bepaalt welke contacten worden overgezet, handmatig of via regels, en elke e-mail, LinkedIn-stap en beltaak komt direct op het juiste record terecht.',
      demoCta: 'Demo plannen',
      row: {
        titlePre: 'Vastgelegd ', titleAccent: 'op het moment dat het gebeurt', titlePost: '',
        points: [
          'Verzonden, geopende en beantwoorde e-mails, LinkedIn-stappen en beltaken komen op het contactrecord in Salesforce, HubSpot of Pipedrive.',
          'Contacten en bedrijven worden gekoppeld aan bestaande records. De sync werkt bij wat er al is, in plaats van dubbele records aan te maken.',
          'Geen handmatige invoer en geen CSV ertussen. Uw team werkt aan de pipeline, niet aan de spreadsheet.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'Hoe het werkt',
        stepTitle: 'Van activiteit naar gesynchroniseerd record',
      },
      gridTitlePre: 'Een system of record dat u ', gridTitleAccent: 'eindelijk kunt vertrouwen', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot en Pipedrive',
          body: 'Native synchronisatie naar de drie CRM\u2019s, in realtime. Geen middleware, geen CSV-exports, geen nachtelijke jobs.',
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
      "title": "Deliverability van cold e-mail: in de inbox vanuit uw eigen mailbox | hubsell",
      "metaDescription": "Deliverability met hubsell: verstuur vanuit uw eigen Google- of Microsoft-mailboxen, met SPF, DKIM en DMARC voor u ingesteld, een daglimiet per mailbox, verzendtijden en contacten die geverifieerd zijn op de dag dat u mailt.",
      "heroSlice": "deliverability",
      "compare": {"eyebrow": "Deliverability van cold e-mail", "titlePre": "Bulkverzending tegenover ", "titleAccent": "verzenden voor de inbox", "titlePost": "", "colA": "Bulkmailtools", "colB": "hubsell", "rows": [["Verzendserver", "Externe SMTP-servers, gedeeld met andere afzenders", "Uw eigen Google- of Microsoft-mailboxen, via hun API’s"], ["Authenticatie", "Aan u overgelaten", "SPF, DKIM en DMARC ingesteld met het hubsell-team"], ["Contactdata", "Maanden geleden gekochte lijsten, veel adressen niet meer geldig", "Geverifieerd op de dag dat u mailt, catch-all-domeinen inbegrepen"], ["Volume", "Zoveel als het abonnement toestaat, in pieken", "Een daglimiet per mailbox, verdeeld over uw afzenders"], ["Timing", "Verstuurd zodra de campagne start", "Binnen de verzendtijden die u instelt"], ["Reacties en bounces", "Follow-ups gaan door tot iemand ze stopt", "De flow stopt voor dat contact bij een reactie of bounce"]]},
      "heads": {"signals": {"eyebrow": "Inboxplaatsing", "pre": "Verstuurd volgens ", "accent": "de regels van inboxen", "post": ""}, "explained": {"eyebrow": "Checklist deliverability", "pre": "Wat uw e-mail ", "accent": "uit de spam houdt", "post": ""}, "steps": {"eyebrow": "Hoe het werkt", "pre": "Van geverifieerd contact ", "accent": "naar de inbox", "post": ""}, "extra": {"eyebrow": "Datakwaliteit en deliverability", "pre": "Goede data is ", "accent": "goede deliverability", "post": ""}, "proof": {"eyebrow": "Klantresultaten", "pre": "Wat ", "accent": "betere deliverability", "post": " verandert"}, "closing": {"eyebrow": "E-maildeliverability", "pre": "Ontdek waar ", "accent": "uw e-mail belandt", "post": "."}, "faq": {"eyebrow": "FAQ over deliverability", "pre": "Vragen over ", "accent": "e-maildeliverability", "post": ""}},
      "signals": {"sub": "hubsell regelt dit allemaal, zodat de weg naar de inbox niet bij uw salesteam ligt.", "startLabel": "Beschermt", "items": [{"id": "email", "title": "Uw eigen mailboxen", "body": "E-mails gaan uit vanuit uw Google Workspace- of Microsoft 365-accounts via hun API’s, niet vanaf een gedeelde server die filters al wantrouwen.", "start": "Uw afzenderreputatie"}, {"id": "clean", "title": "SPF, DKIM en DMARC", "body": "Het hubsell-team stelt de drie records samen met u in, zodat mailproviders kunnen bevestigen dat uw berichten echt van uw domein komen.", "start": "Uw domein"}, {"id": "profile", "title": "Geverifieerde contacten", "body": "Elk adres wordt gecontroleerd op de dag van gebruik, catch-all-domeinen inbegrepen, zodat weinig e-mails bouncen en providers een schone lijst zien.", "start": "Uw bouncepercentage"}, {"id": "wait", "title": "Een daglimiet per mailbox", "body": "Elke mailbox verstuurt een beperkt aantal e-mails per dag, zodat geen enkele afzender plotseling piekt en opvalt.", "start": "Elke afzender"}, {"id": "event", "title": "Verzendtijden", "body": "E-mails gaan uit binnen de uren die u instelt, gespreid over de dag, zoals een mens mail verstuurt.", "start": "Uw timing"}, {"id": "branch", "title": "Stoppen bij reactie of bounce", "body": "Als een contact reageert of een e-mail bouncet, stopt de flow voor dat contact, zodat niemand na een antwoord nog een follow-up krijgt.", "start": "De goodwill van de koper"}, {"id": "ban", "title": "Geen trackingredirects", "body": "Links worden niet herschreven via een trackingdomein, zodat uw e-mails eruitzien als gewone mail.", "start": "Uw inboxplaatsing"}, {"id": "company", "title": "Verdeeld over afzenders", "body": "Outreach kan vanuit meerdere mailboxen van uw team lopen, zodat het volume wordt gedeeld in plaats van op één adres te liggen.", "start": "Uw volume"}]},
      "howSteps": {"items": [{"title": "Verifieer het contact", "body": "Het zakelijke e-mailadres wordt gegenereerd en gevalideerd op de dag dat u mailt, catch-all-domeinen inbegrepen."}, {"title": "Verstuur vanuit uw mailbox", "body": "De e-mail gaat uit vanuit een van uw gekoppelde mailboxen, binnen de daglimiet."}, {"title": "Blijf binnen de verzendtijden", "body": "E-mails worden gespreid binnen de verzendtijden die u instelt, via de API van Google of Microsoft."}, {"title": "Stop bij een reactie", "body": "Reacties en bounces beëindigen de flow voor dat contact. Alle anderen gaan door naar de volgende stap."}]},
      "extra": {"title": "Goede data is goede deliverability", "paras": ["De meeste deliverabilityproblemen beginnen al voor de eerste e-mail. Oude lijsten staan vol mensen die van baan zijn gewisseld, en elke bounce vertelt mailproviders dat uw e-mail niet gewenst is.", "hubsell verzamelt contacten wanneer u ze nodig hebt en verifieert elk e-mailadres op dezelfde dag, zodat u mailt naar mensen die de rol vandaag hebben, op adressen die bestaan.", "Relevante, recente data levert ook reacties op, en reacties zijn voor een mailprovider het sterkste teken dat uw e-mail in de inbox thuishoort."], "links": [{"label": "Meer over live data", "href": "/platform/live-data"}, {"label": "Meer over verrijking", "href": "/platform/enrichment"}]},
      "faqs": [{"question": "Wat is e-maildeliverability?", "answer": "<p>E-maildeliverability is of uw e-mail in de inbox van de ontvanger belandt, in plaats van in de spammap of nergens. Het hangt af van hoe u verstuurt, de reputatie van uw domein en de kwaliteit van de adressen die u mailt.</p>"}, {"question": "Waarom belanden cold e-mails in de spam?", "answer": "<p>Veelvoorkomende oorzaken zijn gedeelde verzendservers, ontbrekende SPF-, DKIM- of DMARC-records, adressen die bouncen, plotselinge pieken in volume en berichten waarop niemand reageert. hubsell pakt elk van deze oorzaken aan.</p>"}, {"question": "Hoe beschermt hubsell mijn deliverability?", "answer": "<p>hubsell verstuurt vanuit uw eigen mailboxen via de API’s van Google en Microsoft, stelt SPF, DKIM en DMARC samen met u in, begrenst elke mailbox per dag, verstuurt binnen uw verzendtijden, stopt bij reacties en bounces, en verifieert elk contact op de dag van gebruik.</p>"}, {"question": "Verstuurt hubsell vanuit mijn eigen mailbox?", "answer": "<p>Ja. E-mails gaan uit vanuit uw Google Workspace- of Microsoft 365-mailboxen via hun API’s. Er is geen externe SMTP-server en geen trackingredirect in de e-mail.</p>"}, {"question": "Wie stelt SPF, DKIM en DMARC in?", "answer": "<p>Het hubsell-team stelt ze tijdens de onboarding samen met u in, zodat uw domein de controles van mailproviders doorstaat voordat uw eerste campagne uitgaat.</p>"}, {"question": "Is er een dagelijkse verzendlimiet?", "answer": "<p>Ja. Elke mailbox heeft een daglimiet. Hebt u meer volume nodig, dan wordt de outreach over meer mailboxen van uw team verdeeld in plaats van één mailbox zwaarder te belasten.</p>"}, {"question": "Kan ik kiezen wanneer e-mails worden verstuurd?", "answer": "<p>Ja. U stelt verzendtijden in, en e-mails gaan daarbinnen uit, gespreid over de dag in plaats van allemaal tegelijk.</p>"}, {"question": "Wat gebeurt er als een contact reageert of een e-mail bouncet?", "answer": "<p>De flow stopt voor dat contact. Niemand krijgt na een antwoord nog een follow-up, en een verkeerd adres wordt niet opnieuw geprobeerd.</p>"}, {"question": "Hoe beïnvloedt datakwaliteit de deliverability?", "answer": "<p>Elke bounce schaadt uw afzenderreputatie. hubsell verifieert elk e-mailadres op de dag van gebruik, catch-all-domeinen inbegrepen, en 95% van de zakelijke e-mailadressen klopt, zodat veel minder e-mails bouncen. Zie <a class=\"link\" href=\"/nl/platform/enrichment/\">verrijking</a>.</p>"}, {"question": "Kan ik vanuit meerdere mailboxen versturen?", "answer": "<p>Ja. Koppel meerdere mailboxen van uw team en de outreach wordt erover verdeeld, elk binnen de eigen daglimiet. Zie <a class=\"link\" href=\"/nl/integrations/\">integraties</a>.</p>"}],
      "eyebrow": "E-maildeliverability",
      "h1Pre": "Cold e-mail die ",
      "h1Accent": "in de inbox landt",
      "h1Post": "",
      "sub": "Deliverability begint bij wie u mailt. hubsell verstuurt vanuit uw eigen mailboxen, met authenticatie ingesteld door ons team, een daglimiet en verzendtijden per mailbox, en contacten die geverifieerd zijn op de dag dat u ze benadert.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Verstuurd volgens ",
            "titleAccent": "de regels van inboxen",
            "titlePost": "",
            "points": [
                  "E-mails gaan uit vanuit uw eigen Google Workspace- of Microsoft 365-mailboxen via hun API’s, zonder externe server of trackingredirect ertussen.",
                  "SPF, DKIM en DMARC stelt het hubsell-team samen met u in, zodat mailproviders kunnen controleren dat uw e-mail echt van u komt.",
                  "Elke mailbox heeft een daglimiet en verzendtijden, en de flow stopt voor een contact zodra het reageert of een e-mail bouncet."
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
      "title": "Personalisatie op basis van koopsignalen voor e-mail en LinkedIn | hubsell",
      "metaDescription": "Gepersonaliseerde outreach op basis van koopsignalen. hubsell laat AI elk bericht opstellen vanuit het signaal en de bedrijfswebsite, in flows die rond elk signaal zijn gebouwd.",
      "heroSlice": "personalization",
      "compare": {"eyebrow": "Personalisatie van cold e-mail", "titlePre": "Mail merge tegenover ", "titleAccent": "personalisatie op basis van signalen", "titlePost": "", "colA": "Mail merge", "colB": "hubsell", "rows": [["Startpunt", "Een lijst en een sjabloon", "Het signaal waardoor het contact op uw lijst kwam"], ["Wat wordt gepersonaliseerd", "Voornaam en bedrijfsnaam", "Het bericht, gebouwd op het signaal en het bedrijf"], ["Onderzoek", "Met de hand, of overgeslagen", "De bedrijfswebsite, gelezen voor elk contact"], ["Schrijven", "Eén sjabloon voor iedereen", "Een AI-concept voor elk contact"], ["Flows", "Eén campagne voor elke lead", "Een flow per signaal, met een eigen bericht en timing"], ["Data eronder", "Oude records en verkeerde functies", "Geverifieerd op de dag dat u benadert"]]},
      "heads": {"signals": {"eyebrow": "Personalisatie op basis van signalen", "pre": "Een reden om te schrijven ", "accent": "naar elk contact", "post": ""}, "explained": {"eyebrow": "Signalen voor personalisatie", "pre": "De signalen waarmee ", "accent": "uw berichten beginnen", "post": ""}, "steps": {"eyebrow": "Hoe het werkt", "pre": "Van koopsignaal ", "accent": "naar een persoonlijk bericht", "post": ""}, "extra": {"eyebrow": "AI-personalisatie", "pre": "AI die schrijft vanuit feiten, ", "accent": "niet vanuit gissingen", "post": ""}, "proof": {"eyebrow": "Klantresultaten", "pre": "Wat ", "accent": "persoonlijke outreach", "post": " verandert"}, "closing": {"eyebrow": "Gepersonaliseerde outreach", "pre": "Zie wat uw outreach ", "accent": "zou kunnen zeggen", "post": "."}, "faq": {"eyebrow": "FAQ over personalisatie", "pre": "Veelgestelde vragen ", "accent": "over personalisatie", "post": ""}},
      "signals": {"sub": "Elk signaal kan een eigen flow worden, en elk bericht opent ermee.", "startLabel": "Opent met", "items": [{"id": "post", "title": "Postinteractie", "body": "Mensen die een LinkedIn-post leuk vonden, erop reageerden of hem deelden, van u of van een concurrent.", "start": "De post en het onderwerp"}, {"id": "event", "title": "Eventdeelnemers", "body": "Mensen die zich aanmeldden voor een LinkedIn-event in uw markt.", "start": "Het event waar ze heen gaan"}, {"id": "jobs", "title": "Nieuwe functies", "body": "Mensen die net in een nieuwe rol zijn begonnen, wanneer prioriteiten en budgetten worden bepaald.", "start": "Hun nieuwe rol"}, {"id": "hiring", "title": "Vacaturesignalen", "body": "Bedrijven die werven voor rollen die uw product ondersteunt.", "start": "De rollen waarvoor ze werven"}, {"id": "followers", "title": "Volgers van concurrenten", "body": "Mensen die de bedrijfspagina van een concurrent volgen.", "start": "Het probleem dat de concurrent oplost"}, {"id": "company", "title": "Bedrijfswebsite", "body": "Wat het bedrijf over zichzelf zegt: wat het verkoopt, aan wie en waarop het zich richt.", "start": "Een zin over hun bedrijf"}]},
      "howSteps": {"items": [{"title": "Kies het signaal", "body": "Start een flow vanuit een signaal, zoals een post, een event, een zoekopdracht naar wervende bedrijven of de volgers van een concurrent."}, {"title": "Kwalificeer en verrijk", "body": "Elke persoon wordt getoetst aan uw ICP en krijgt een geverifieerd e-mailadres voordat er iets wordt geschreven."}, {"title": "Lees het bedrijf", "body": "hubsell leest de bedrijfswebsite om te zien wat het bedrijf doet en aan wie het verkoopt."}, {"title": "Stel op met AI", "body": "AI schrijft voor elk contact een bericht vanuit het signaal en de bedrijfsgegevens."}, {"title": "Draai de flow", "body": "Het bericht gaat uit als stap in de flow, en de volgende stappen volgen uit wat het contact doet."}]},
      "extra": {"title": "AI die schrijft vanuit feiten, niet vanuit gissingen", "paras": ["Generieke AI-teksten zijn makkelijk te herkennen. Ze prijzen het bedrijf, gissen naar de uitdagingen en lezen alsof ze voor iedereen zijn geschreven. Kopers herkennen dat en negeren het.", "hubsell geeft de AI feiten om mee te werken: het signaal, de huidige rol van de persoon en wat de bedrijfswebsite zegt. Het concept verwijst naar dingen die kloppen en leest als een bericht van iemand die heeft gekeken.", "Omdat elk contact op dezelfde dag wordt geverifieerd, zijn de gegevens in het bericht actueel. Niemand wordt gefeliciteerd met een baan die hij een jaar geleden verliet."], "links": [{"label": "Meer over live data", "href": "/platform/live-data"}, {"label": "Meer over multichannel-outreach", "href": "/platform/multichannel-outreach"}]},
      "faqs": [{"question": "Wat is personalisatie op basis van signalen?", "answer": "<p>Personalisatie op basis van signalen opent elk bericht met de reden waarom u schrijft: iets wat de persoon of het bedrijf onlangs deed, zoals reageren op een post, van baan wisselen of vacatures openen. Het vervangt de mail merge met voornaam door een echte reden om te praten.</p>"}, {"question": "Hoe personaliseert hubsell cold e-mails?", "answer": "<p>hubsell begint bij het signaal waardoor een contact op uw lijst kwam, leest de bedrijfswebsite en laat AI vanuit die feiten voor elk contact een bericht opstellen. Elk signaal kan in een eigen flow lopen, zodat bericht en timing bij de reden passen.</p>"}, {"question": "Welke signalen gebruikt hubsell voor personalisatie?", "answer": "<p>Interactie met LinkedIn-posts, eventdeelnemers, nieuwe functies, bedrijven met vacatures en volgers van concurrenten, plus wat de bedrijfswebsite zegt. Zie <a class=\"link\" href=\"/nl/platform/live-data/\">live data</a>.</p>"}, {"question": "Gebruikt hubsell AI om berichten te schrijven?", "answer": "<p>Ja. AI stelt voor elk contact een bericht op vanuit het signaal en de bedrijfswebsite. Het werkt met feiten over de persoon en het bedrijf, niet met gissingen.</p>"}, {"question": "Wat zijn flows per signaal?", "answer": "<p>In plaats van één campagne voor elke lead krijgt elk signaal een eigen flow. Wie op een post reageerde, krijgt een ander bericht, een andere timing en andere kanalen dan iemand van wie het bedrijf aan het werven is.</p>"}, {"question": "Wat is het verschil met mail merge?", "answer": "<p>Mail merge zet een voornaam en een bedrijfsnaam in één sjabloon. Personalisatie op basis van signalen verandert wat het bericht zegt, afhankelijk van waarom u die persoon schrijft.</p>"}, {"question": "Waarom werkt generieke AI-personalisatie niet?", "answer": "<p>Kopers herkennen AI-teksten die uit het niets zijn geschreven: vleiend, vaag en over de afzender. Teksten die verwijzen naar een echt signaal en het werkelijke bedrijf, lezen als geschreven door iemand die heeft gekeken.</p>"}, {"question": "Helpt personalisatie bij deliverability?", "answer": "<p>Ja. Relevante e-mails krijgen meer reacties, en reacties laten mailproviders zien dat uw e-mail gewenst is. Zie <a class=\"link\" href=\"/nl/platform/deliverability/\">e-maildeliverability</a>.</p>"}, {"question": "Kan ik outreach op schaal personaliseren?", "answer": "<p>Ja. Het signaal, de bedrijfsgegevens en het concept komen voor elk contact samen, zodat dezelfde flow werkt voor tien contacten of duizenden, zonder elk bericht opnieuw te schrijven.</p>"}, {"question": "Is outreach op basis van signalen AVG-conform?", "answer": "<p>hubsell verwerkt data voor een doel dat u vóór het verzamelen vastlegt en bewaart die niet om door te verkopen. U blijft verwerkingsverantwoordelijke en hubsell is uw verwerker, onder een verwerkersovereenkomst. Zie <a class=\"link\" href=\"/nl/platform/live-data/\">AVG-conforme B2B-data</a>.</p>"}],
      "eyebrow": "Personalisatie op basis van signalen",
      "h1Pre": "Elk bericht ",
      "h1Accent": "met een reden",
      "h1Post": "",
      "sub": "Een voornaam is geen personalisatie. hubsell begint bij het signaal waardoor een contact op uw lijst kwam, voegt toe wat de bedrijfswebsite zegt, en laat AI voor elke persoon een bericht opstellen, in flows die rond dat signaal zijn gebouwd.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Geschreven voor de ",
            "titleAccent": "persoon en het moment",
            "titlePost": "",
            "points": [
                  "Elk bericht begint met een echte reden om te schrijven: de post waarop iemand reageerde, de nieuwe functie, het event waarvoor iemand zich aanmeldde of de rol waarvoor het bedrijf werft.",
                  "AI stelt elk bericht op vanuit dat signaal en vanuit wat de bedrijfswebsite over het bedrijf zegt.",
                  "Elk signaal krijgt een eigen flow, zodat het bericht, de timing en de kanalen passen bij de reden van uw benadering."
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
      "title": "Contactgegevens verrijken: geverifieerde e-mails en telefoonnummers | hubsell",
      "metaDescription": "hubsell verrijkt contacten live: e-mails voor 95% nauwkeurig, catch-all inbegrepen, telefoonnummers van kwaliteitspartners. U betaalt alleen voor elke geslaagde stap.",
      "heroSlice": "enrichment",
      "compare": {"eyebrow": "B2B-dataverrijking", "titlePre": "Verrijking uit een database tegenover ", "titleAccent": "live verrijking", "titlePost": "", "colA": "Verrijking uit een database", "colB": "hubsell live verrijking", "rows": [["Herkomst van de data", "De database van een leverancier, eenmaal gevuld en doorverkocht", "Verzameld en georkestreerd door hubsell op de dag van verrijken, alleen telefoonnummers van partners"], ["Nauwkeurigheid e-mail", "Onbekend tot de bounces terugkomen", "95%, catch-all-domeinen inbegrepen"], ["Namen, functies, bedrijven", "Zo actueel als de laatste update van het record", "99% nauwkeurig, afgestemd op het huidige profiel"], ["Catch-all-domeinen", "Vaak gemarkeerd als onbekend en weggelaten", "Gevalideerd zoals elk ander adres"], ["Waar u voor betaalt", "Een record, volledig of niet", "Elke geslaagde stap, per fractie berekend"]]},
      "heads": {"signals": {"eyebrow": "E-mailfinder en telefoonnummerfinder", "pre": "Eén record, ", "accent": "georkestreerd door hubsell", "post": ""}, "explained": {"eyebrow": "Dataverrijking", "pre": "Verrijking van contactgegevens, ", "accent": "veld voor veld", "post": ""}, "steps": {"eyebrow": "Zo werkt verrijking", "pre": "Zo wordt een lijst ", "accent": "stap voor stap verrijkt", "post": ""}, "extra": {"eyebrow": "E-mailvalidatie", "pre": "", "accent": "Validatie van catch-all-adressen", "post": " inbegrepen"}, "proof": {"eyebrow": "Klantresultaten", "pre": "Wat ", "accent": "volledige contactgegevens", "post": " veranderen"}, "closing": {"eyebrow": "B2B-e-mailfinder", "pre": "Verrijk uw lijst met ", "accent": "geverifieerde contactgegevens", "post": "."}, "faq": {"eyebrow": "FAQ over dataverrijking", "pre": "Vragen over ", "accent": "het verrijken van contactgegevens", "post": ""}},
      "signals": {"sub": "Elk veld wordt door hubsell verzameld of aangemaakt op de dag dat u verrijkt, en gecontroleerd voordat het uw outreach of CRM bereikt.", "startLabel": "Nauwkeurigheid", "items": [{"id": "email", "title": "Zakelijke e-mailadressen", "body": "hubsell genereert en valideert het zakelijke e-mailadres van elk contact met eigen methoden, op het moment van gebruik. Ook adressen op catch-all-domeinen worden gevalideerd, zodat u ze niet hoeft weg te laten.", "start": "95%, catch-all-domeinen inbegrepen"}, {"id": "phone", "title": "Directe nummers en mobiele nummers", "body": "Directe en mobiele nummers komen van partners die gekozen zijn op nauwkeurigheid en kwaliteit, niet op prijs. Telefoonverrijking is optioneel, dus u voegt het alleen toe voor de contacten die u wilt bellen.", "start": "Uit partnerdatabases, gekozen op kwaliteit"}, {"id": "profile", "title": "LinkedIn-profiel-URL’s", "body": "Bij een geïmporteerde lijst koppelt hubsell elk contact aan het LinkedIn-profiel op basis van volledige naam, bedrijf en functie. Met dat profiel kan een contact de LinkedIn-stappen van een flow doorlopen.", "start": "99%"}, {"id": "clean", "title": "Namen, functies en bedrijven, opgeschoond", "body": "Geïmporteerde lijsten bevatten oude functies, typfouten en inconsistente bedrijfsnamen. hubsell schoont elk record op en normaliseert het met AI, en corrigeert wat er veranderd is sinds de lijst werd gemaakt.", "start": "99%"}]},
      "howSteps": {"note": "Elke stap wordt alleen gerekend als hij slaagt, per fractie in plaats van een vaste prijs per contact. Verrijking die niet afrondt, kost niets.", "items": [{"title": "Verzamel de data", "body": "De gegevens van elk contact worden live verzameld van LinkedIn en bedrijfswebsites."}, {"title": "Opschonen en normaliseren met AI", "body": "Namen, functies en bedrijven worden opgeschoond en in één consistent formaat gezet."}, {"title": "Ontbrekende data toevoegen", "body": "Gaten in het record worden gevuld, zoals een ontbrekende functie of bedrijfsgegeven."}, {"title": "E-mailadres genereren en valideren", "body": "Zakelijke e-mailadressen worden gegenereerd en gevalideerd met eigen methoden van hubsell, catch-all inbegrepen."}, {"title": "Telefoonnummer verzamelen", "body": "Optioneel: een direct of mobiel nummer van een kwaliteitspartner."}, {"title": "Kwaliteitscontrole", "body": "Elk record wordt gecontroleerd voordat het voor gebruik wordt overgedragen."}]},
      "extra": {"title": "Validatie van catch-all-adressen", "paras": ["Een catch-all-domein accepteert mail voor elk adres, dus een gewone controle kan een echte mailbox niet onderscheiden van een fout adres. Lijsten markeren deze contacten meestal als onbekend, zodat u ze weglaat of bounces riskeert.", "hubsell valideert adressen op catch-all-domeinen bij elke verrijking, op het moment van gebruik. Zo is 95% van de geleverde e-mails nauwkeurig, catch-all-domeinen inbegrepen, en blijft uw bouncepercentage laag."], "links": [{"label": "Zo beschermt hubsell uw deliverability", "href": "/platform/deliverability"}]},
      "faqs": [{"question": "Wat is verrijking van contactgegevens?", "answer": "<p>Verrijking van contactgegevens vult de ontbrekende gegevens van een contactrecord aan: een zakelijk e-mailadres, een telefoonnummer, een LinkedIn-profiel en een actuele functie en bedrijf. hubsell verrijkt elk contact live, op de dag dat u erom vraagt, en valideert het resultaat voordat het uw outreach of CRM bereikt.</p>"}, {"question": "Wat heb ik nodig om een lijst te verrijken met hubsell?", "answer": "<p>Een volledige naam, bedrijfsnaam en functie per contact. Daarmee verzamelt hubsell de gegevens van de persoon live, schoont ze op en normaliseert ze met AI, vult de gaten, genereert en valideert het zakelijke e-mailadres en voegt desgewenst een telefoonnummer toe. Elk record krijgt een kwaliteitscontrole voordat u het gebruikt.</p>"}, {"question": "Hoe nauwkeurig is de verrijking van hubsell?", "answer": "<p>95% van de zakelijke e-mailadressen is nauwkeurig, catch-all-domeinen inbegrepen. Namen, functies, bedrijven en LinkedIn-profielen zijn voor 99% nauwkeurig. Telefoonnummers komen uit partnerdatabases, daarom noemt hubsell daarvoor geen vast percentage, maar die partners zijn gekozen op nauwkeurigheid en kwaliteit, niet op prijs.</p>"}, {"question": "Kan hubsell e-mailadressen op catch-all-domeinen valideren?", "answer": "<p>Ja. Een catch-all-domein accepteert mail voor elk adres, dus een gewone controle kan een echte mailbox niet onderscheiden van een fout adres. hubsell valideert ook adressen op catch-all-domeinen, en die vallen binnen de 95% nauwkeurigheid.</p>"}, {"question": "Vindt hubsell mobiele nummers en directe nummers?", "answer": "<p>Ja, allebei. Telefoonnummers komen van partners die gekozen zijn op nauwkeurigheid en kwaliteit in plaats van prijs. Telefoonverrijking is optioneel, dus u voegt het alleen toe voor de contacten die u wilt bellen.</p>"}, {"question": "Hoe rekent hubsell voor verrijking?", "answer": "<p>Verrijking wordt per geslaagde stap gerekend: de data verzamelen, opschonen, ontbrekende data toevoegen, het e-mailadres genereren en het telefoonnummer toevoegen. De kosten zijn per fractie, dus u betaalt voor elk resultaat in plaats van een vaste prijs per contact, en verrijking die niet afrondt kost niets. Zie <a class=\"link\" href=\"/nl/pricing/\">prijzen</a>.</p>"}, {"question": "Waar komt de verrijkingsdata van hubsell vandaan?", "answer": "<p>hubsell verzamelt en orkestreert de data zelf, live van LinkedIn en bedrijfswebsites, en genereert en valideert zakelijke e-mailadressen met eigen methoden. Uw contacten gaan niet door de databases van andere leveranciers. Alleen telefoonnummers komen van partners, gekozen op nauwkeurigheid en kwaliteit.</p>"}, {"question": "Wat is het verschil tussen live verrijking en verrijking uit een B2B-database?", "answer": "<p>Een database verrijkt uw lijst met records die ze eerder heeft verzameld, dus de gegevens kunnen maanden of jaren oud zijn. hubsell zoekt elk contact op de dag van verrijken op, zodat functie, bedrijf en e-mailadres actueel zijn wanneer u ze gebruikt.</p>"}, {"question": "Kunnen verrijkte contacten direct de outreach en mijn CRM in?", "answer": "<p>Ja. Verrijkte contacten gaan direct uw LinkedIn-, e-mail- en belflows in hubsell in en synchroniseren met Salesforce, HubSpot of Pipedrive, zonder export of opschoonstap. Zie <a class=\"link\" href=\"/nl/platform/multichannel-outreach/\">multichannel-outreach</a> en <a class=\"link\" href=\"/nl/platform/crm-sync/\">CRM-sync</a>.</p>"}, {"question": "Is verrijkte data AVG-conform?", "answer": "<p>Ja. hubsell verrijkt data ad hoc voor elke klant en bewaart ze niet om door te verkopen. U blijft de verwerkingsverantwoordelijke en hubsell is de verwerker, op basis van een verwerkersovereenkomst. Meer over <a class=\"link\" href=\"/nl/platform/live-data/#pf-extra\">AVG-conforme B2B-data</a>.</p>"}],
      "eyebrow": "Verrijking van contactgegevens",
      "h1Pre": "Verrijking van contactgegevens, ",
      "h1Accent": "vandaag gevalideerd",
      "h1Post": "",
      "sub": "Een halfgevuld contactrecord remt outreach. Op basis van volledige naam, bedrijf en functie verzamelt hubsell de gegevens van de persoon live, schoont ze op met AI, vult de gaten en voegt een gevalideerd zakelijk e-mailadres en desgewenst een telefoonnummer toe.",
      "demoCta": "Demo plannen",
      "row": {
            "titlePre": "Eén record, ",
            "titleAccent": "georkestreerd door hubsell",
            "titlePost": "",
            "points": [
                  "hubsell verzamelt en orkestreert elk veld zelf: profiel, functie en bedrijf van LinkedIn en bedrijfswebsites, en zakelijke e-mailadressen gegenereerd en gevalideerd met eigen methoden.",
                  "Alleen telefoonnummers komen van partners, gekozen op nauwkeurigheid en kwaliteit in plaats van prijs.",
                  "Elk record krijgt een kwaliteitscontrole voordat het wordt overgedragen, dus het klopt op de dag dat u het gebruikt."
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
                  "body": "Een volledige, gevalideerde record gaat rechtstreeks naar uw flows en uw CRM. Er is geen export, geen opschoonronde, geen tweede tool, zodat de data die u verrijkt de data is waarnaar u verstuurt."
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
