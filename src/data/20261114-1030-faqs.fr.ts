// FAQs that are not on the homepage, by slug: French (France), "vous". Same shape as the English
// source, which stays the reference. Product terms: docs/20261113-1401-APP-TERMS.md.
export const faqsFrExtra: Record<string, { question: string; answer: string }> = {
  "orchestrate-multiple-profiles": {
    question: "hubsell peut-il orchestrer la prospection depuis plusieurs profils de dirigeants en même temps ?",
    answer: "<p>hubsell vous permet de gérer la prospection de votre CEO, de votre directeur commercial et de vos experts métier depuis un seul centre de pilotage, pour un échange coordonné, d'égal à égal, avec l'ensemble du compte cible.</p>",
  },
  "hubsell-email-infrastructure": {
    question: "hubsell envoie-t-il les e-mails depuis des serveurs externes ou depuis nos propres boîtes mail ?",
    answer: "<p>L'infrastructure de hubsell est « totalement absente » de l'e-mail envoyé. Nous n'utilisons ni serveurs SMTP externes ni liens de redirection de suivi qui déclenchent les filtres anti-spam. Les e-mails partent via une intégration API directe (Google/Microsoft), ce qui donne des taux d'ouverture nettement plus élevés.</p>",
  },
  "personalize-outreach-at-scale": {
    question: "Comment personnaliser la prospection à froid à grande échelle sans ressembler à un robot IA ?",
    answer: "<p>Les acheteurs repèrent tout de suite les compliments écrits par une IA, et cela vous coûte des réponses. Un message simple et direct envoyé à une liste très pertinente, par exemple les participants d'un webinaire précis ou les personnes qui réagissent à une publication précise, l'emporte toujours sur un texte personnalisé par une machine et envoyé à un persona générique. hubsell crée la pertinence dès l'étape des données : des contacts sourcés en temps réel et correspondant à votre ICP, pour que le message reste court et honnête.</p>",
  },
  "stop-sales-email-bounces": {
    question: "Comment éviter que nos e-mails commerciaux soient rejetés à cause de mauvaises données CRM ?",
    answer: "<p>Un décideur B2B reste en moyenne environ 2,5 ans à son poste : les CRM statiques et les listes achetées perdent donc 25 à 30 % de leur exactitude chaque année. hubsell règle ce problème avec le sourcing « jour zéro », notre méthode de données en temps réel : nous sourçons et vérifions les données de contact au moment précis de votre demande, ce qui garde une exactitude élevée et protège votre réputation d'expéditeur.</p>",
  },
  "hubsell-high-volume-sales": {
    question: "hubsell convient-il aux ventes transactionnelles à fort volume et à faible ACV ?",
    answer: "<p>Oui. hubsell peut servir à une prospection à fort volume, mais nous recommandons de l'utiliser pour une prospection très ciblée.</p>",
  },
  "mass-email-brand-reputation": {
    question: "L'envoi massif d'e-mails à froid nuit-il à notre image de marque et à notre délivrabilité ?",
    answer: "<p>Avec les dernières règles de Google et Yahoo, les envois massifs « à l'aveugle » ruinent vite la réputation d'expéditeur de votre domaine. hubsell la protège grâce à un ciblage précis, à l'envoi natif par API via Google et Microsoft, et en répartissant la prospection en toute sécurité sur 5 à 10 profils d'expéditeurs internes. Moins de volume par expéditeur, une meilleure délivrabilité, aucun domaine grillé.</p>",
  },
  "third-party-intent-data-accuracy": {
    question: "Les données d'intention B2B de fournisseurs tiers sont-elles vraiment fiables ?",
    answer: "<p>La plupart des données d'intention reposent sur des algorithmes probabilistes (deviner qui achète à partir de trafic web anonyme). Comme 95 % des acheteurs B2B ne sont pas en phase d'achat à un instant donné, appliquer un algorithme générique à un marché qui n'achète pas revient à envoyer votre équipe commerciale à la poursuite de fantômes.</p>",
  },
  "sdr-vs-executive-linkedin-outreach": {
    question: "La prospection LinkedIn doit-elle venir de nos SDR ou de nos dirigeants ?",
    answer: "<p>Celui qui envoie le message change le résultat. Quand un SDR envoie une demande de connexion, le taux d'acceptation reste en général sous 20 %, car l'acheteur s'attend à un pitch. Quand un fondateur, un dirigeant ou un expert métier envoie exactement la même demande, le taux d'acceptation dépasse 50 %. hubsell est conçu pour prospecter depuis les profils que les acheteurs acceptent vraiment.</p>",
  },
  "cold-email-reply-rates-dropping": {
    question: "Pourquoi les taux de réponse de nos e-mails à froid chutent-ils autant tout à coup ?",
    answer: "<p>La prospection traditionnelle « à l'aveugle » échoue pour deux raisons structurelles. D'abord, les nouveaux seuils anti-spam stricts de Google et Yahoo (0,3 % de plaintes) font que les envois massifs d'e-mails nuisent activement à la réputation de votre domaine. Ensuite, les acheteurs reconnaissent tout de suite la personnalisation automatisée par IA. Elle a l'air personnelle mais sonne creux, et l'acheteur se ferme.</p>",
  },
  "sdr-first-meetings-week-one": {
    question: "Un nouveau SDR peut-il vraiment décrocher des rendez-vous dès la première semaine ?",
    answer: "<p>Oui, si trois conditions sont réunies : l'offre correspond au marché visé, le ciblage est juste (les bons postes dans les bonnes organisations) et l'exécution ne cale pas (ciblage validé et textes approuvés dans les premiers jours). hubsell supprime les freins habituels de la montée en compétence, à savoir la constitution des listes, la configuration des outils et le nettoyage des données, pour que la première semaine serve à prospecter et non à l'administratif.</p>",
  },
  "hubsell-setup-before-first-sdr": {
    question: "Nous recrutons notre premier SDR. Quand faut-il mettre en place hubsell ?",
    answer: "<p>Avant son premier jour, pour que la première semaine serve à vendre et non à configurer des outils. Le ciblage et le premier Flow peuvent être prêts à son arrivée, et comme les contacts sont sourcés en temps réel, rien ne se périme pendant le recrutement.</p>",
  },
};
