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
      '<p>De „uncanny valley” in sales ontstaat wanneer teams AI gebruiken om empathie na te bootsen. Zet in plaats van complexe AI-prompts voor generieke lijsten in op „observable intent”, oftewel waarneembare signalen. Een simpel, vast bericht aan een zeer relevante lijst, bijvoorbeeld de deelnemers van een bepaald webinar, verslaat altijd nagebootste AI-empathie aan een generieke persona.</p>',
  },
  'stop-sales-email-bounces': {
    question: 'Hoe voorkomen we dat onze sales-e-mails bouncen door slechte CRM-data?',
    answer:
      '<p>Een B2B-beslisser blijft gemiddeld zo’n 2,5 jaar op dezelfde plek. Statische CRMs en gekochte lijsten verliezen daardoor jaarlijks 25 tot 30% van hun geldigheid. hubsell lost dit op met zero-day-sourcing. We verzamelen en verifiëren contactdata in realtime, precies op het moment van uw aanvraag. Dat zorgt voor maximale nauwkeurigheid en beschermt uw afzenderreputatie.</p>',
  },
  'hubsell-high-volume-sales': {
    question: 'Is hubsell geschikt voor transactionele sales met hoog volume en lage ACV?',
    answer:
      '<p>Ja. hubsell is inzetbaar voor outreach met hoog volume, maar we raden het aan voor sterk gerichte benadering.</p>',
  },
  'mass-email-brand-reputation': {
    question: 'Schaadt massale cold e-mailing actief onze merkreputatie en deliverability?',
    answer:
      '<p>Door de nieuwste regels van Google en Yahoo ruïneren „spray and pray”-tactieken met hoog volume snel de afzenderreputatie van uw domein. Engagement orchestration lost dit op met uiterst nauwkeurige targeting, native API-verzending en multi-threading, oftewel het veilig verdelen van outreach over 5 tot 10 interne profielen. Zo blijft de deliverability hoog en de schade aan het domein nul.</p>',
  },
  'third-party-intent-data-accuracy': {
    question: 'Zijn B2B-intent-data van derden echt nauwkeurig?',
    answer:
      '<p>De meeste intent-data leunen op probabilistische algoritmes die op basis van anoniem webverkeer raden wie er koopt. Omdat 95% van de B2B-kopers op elk willekeurig moment niet in de markt is, jaagt uw salesteam op spoken wanneer een generiek algoritme op een niet-kopende markt wordt losgelaten.</p>',
  },
  'sdr-vs-executive-linkedin-outreach': {
    question: 'Moeten onze SDR’s of onze leidinggevenden de LinkedIn-outreach doen?',
    answer:
      '<p>Dit heet de messenger-paradox. Wanneer een SDR een connectieverzoek stuurt, liggen de acceptatieratio’s meestal onder 20%, omdat kopers een pitch verwachten. Stuurt een oprichter, een leidinggevende of een expert exact hetzelfde verzoek, dan stijgen de acceptatieratio’s naar meer dan 50%.</p>',
  },
  'cold-email-reply-rates-dropping': {
    question: 'Waarom dalen onze antwoordratio’s op cold e-mails plotseling zo sterk?',
    answer:
      '<p>Klassieke „spray and pray”-outreach faalt om twee structurele redenen. Ten eerste betekenen strenge nieuwe spamdrempels (0,3% klachtenratio) van Google en Yahoo dat massale verzending uw domeinreputatie actief schaadt. Ten tweede herkennen kopers geautomatiseerde AI-personalisatie meteen. Het oogt persoonlijk maar voelt hol, en roept een innerlijke weerstand op.</p>',
  },
};
