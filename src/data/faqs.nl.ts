// Dutch for the FAQs that are NOT on the homepage (onHomepage: false in faqs.ts).
// The homepage FAQ Dutch lives in home.nl.ts (faqsNl); faqs-i18n.ts merges both
// into the full localized set for the /faqs page. Keyed by slug. Brand terms
// (zero-day-sourcing, engagement orchestration, messenger-paradox, ICP, ACV) are
// kept; answers keep their <p> markup. Formal register "u".
export const faqsNlExtra: Record<string, { question: string; answer: string }> = {
  'orchestrate-multiple-profiles': {
    question: 'Kan hubsell activiteit over meerdere leidinggevende profielen tegelijk orkestreren?',
    answer:
      '<p>Met hubsell stuurt u de outreach van uw CEO, uw VP Sales en uw experts vanuit één centrale, eenduidige plek. Zo coördineert u de benadering op gelijke voet over het volledige doelaccount.</p>',
  },
  'hubsell-email-infrastructure': {
    question: 'Verstuurt hubsell e-mails via externe servers of via onze eigen mailboxen?',
    answer:
      '<p>De infrastructuur van hubsell is niet zichtbaar in de verzonden e-mail. We gebruiken geen externe SMTP-servers en geen redirect-links voor tracking die als spam worden herkend. E-mails worden verzonden via een directe API-koppeling (Google/Microsoft), wat tot duidelijk hogere openingsratio’s leidt.</p>',
  },
  'personalize-outreach-at-scale': {
    question: 'Hoe personaliseren we cold outreach op schaal zonder als een AI-robot te klinken?',
    answer:
      '<p>Kopers herkennen AI-geschreven vleierij meteen, en dat kost u reacties. Een eenvoudig, direct bericht aan een zeer relevante lijst, bijvoorbeeld deelnemers aan een specifiek webinar of mensen die met een specifieke post interageren, verslaat machinaal gepersonaliseerde teksten aan een generieke persona keer op keer. hubsell bouwt de relevantie al in bij de data: live verzamelde contacten, afgestemd op uw ICP, zodat het bericht kort en eerlijk kan blijven.</p>',
  },
  'stop-sales-email-bounces': {
    question: 'Hoe voorkomen we dat onze sales-e-mails bouncen door slechte CRM-data?',
    answer:
      '<p>De gemiddelde zittingsduur van een B2B-beslisser is ongeveer 2,5 jaar, waardoor statische CRM’s en gekochte lijsten met 25 tot 30% per jaar vervallen. hubsell lost dit op met zero-day sourcing, onze live-datamethode: wij verzamelen en valideren contactgegevens op het exacte moment van uw aanvraag. Dat houdt de nauwkeurigheid hoog en beschermt uw verzendreputatie.</p>',
  },
  'hubsell-high-volume-sales': {
    question: 'Is hubsell geschikt voor transactionele sales met hoog volume en lage ACV?',
    answer:
      '<p>Ja. hubsell is inzetbaar voor outreach met hoog volume, maar we raden het aan voor sterk gerichte benadering.</p>',
  },
  'mass-email-brand-reputation': {
    question: 'Schaadt massale cold e-mailing actief onze merkreputatie en deliverability?',
    answer:
      '<p>De nieuwste regels van Google en Yahoo betekenen dat massaal ongericht mailen de verzendreputatie van uw domein snel verwoest. hubsell beschermt die met precieze targeting, native API-verzending via Google en Microsoft en het veilig verdelen van outreach over 5 tot 10 interne verzendprofielen. Minder volume per verzender, hogere deliverability, geen beschadigd domein.</p>',
  },
  'third-party-intent-data-accuracy': {
    question: 'Zijn B2B-intent-data van derden echt nauwkeurig?',
    answer:
      '<p>De meeste intent-data leunen op probabilistische algoritmes die op basis van anoniem webverkeer raden wie er koopt. Omdat 95% van de B2B-kopers op elk willekeurig moment niet in de markt is, jaagt uw salesteam op spoken wanneer een generiek algoritme op een niet-kopende markt wordt losgelaten.</p>',
  },
  'sdr-vs-executive-linkedin-outreach': {
    question: 'Moeten onze SDR’s of onze leidinggevenden de LinkedIn-outreach doen?',
    answer:
      '<p>Wie het bericht verstuurt, verandert het resultaat. Als een SDR een connectieverzoek stuurt, blijft de acceptatie doorgaans onder 20%, omdat kopers een pitch verwachten. Stuurt een oprichter, executive of vakexpert exact hetzelfde verzoek, dan springt de acceptatie naar boven 50%. hubsell is gebouwd om outreach uit te voeren vanaf de profielen die kopers echt accepteren.</p>',
  },
  'cold-email-reply-rates-dropping': {
    question: 'Waarom dalen onze antwoordratio’s op cold e-mails plotseling zo sterk?',
    answer:
      '<p>Klassieke „spray and pray”-outreach faalt om twee structurele redenen. Ten eerste betekenen strenge nieuwe spamdrempels (0,3% klachtenratio) van Google en Yahoo dat massale verzending uw domeinreputatie actief schaadt. Ten tweede herkennen kopers geautomatiseerde AI-personalisatie meteen. Het oogt persoonlijk maar voelt hol, en roept een innerlijke weerstand op.</p>',
  },
};
