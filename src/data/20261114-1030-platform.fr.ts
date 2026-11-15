// Platform pages: French (France), "vous". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PlatformData } from './platform-content';

export const platformFr: PlatformData = {
  overview: {
    title: "Plateforme de sales engagement avec données et CRM | hubsell",
    metaDescription: "Plateforme de sales engagement avec ses propres données B2B en temps réel : sourcez, contactez par e-mail, LinkedIn et téléphone, synchronisez votre CRM.",
    eyebrow: "Plateforme de sales engagement",
    h1Pre: "Le travail de six outils. ",
    h1Accent: "Une seule plateforme",
    h1Post: ".",
    sub: "hubsell est une plateforme de sales engagement avec ses propres données. Elle source les contacts en temps réel, gère les e-mails, LinkedIn et les tâches d'appel dans un seul Flow, et synchronise chaque interaction avec Salesforce, HubSpot ou Pipedrive.",
    compare: {
      eyebrow: "Sales engagement tout-en-un",
      titlePre: "Un stack outbound de six outils face à ",
      titleAccent: "une seule plateforme",
      titlePost: "",
      colA: "Outils séparés",
      colB: "hubsell",
      rows: [
        [
          "Données de contact",
          "Une base achetée une fois et utilisée pendant des mois",
          "Sourcées en temps réel pour chaque recherche, vérifiées par rapport à votre ICP",
        ],
        [
          "Enrichissement",
          "Un deuxième outil, un CSV en entrée et un CSV en sortie",
          "E-mails et numéros vérifiés ajoutés au même endroit",
        ],
        [
          "Prospection par e-mail",
          "Un outil d'e-mail qui ignore tout de LinkedIn",
          "Étapes e-mail et LinkedIn dans un seul Flow",
        ],
        [
          "LinkedIn",
          "Fait à la main, ou dans un autre outil d'automatisation",
          "Visites de profil, invitations, messages et InMail comme étapes du Flow",
        ],
        ["Appels", "Un logiciel d'appel et des notes saisies après coup", "Tâches d'appel créées dans votre CRM"],
        [
          "CRM",
          "Activité saisie à la main, quand elle l'est",
          "Contacts et activité synchronisés avec Salesforce, HubSpot ou Pipedrive",
        ],
        ["Coût", "Plusieurs abonnements et le travail entre eux", "Un identifiant, une facture"],
      ],
    },
    heads: {
      stages: {
        eyebrow: "Vue d'ensemble de la plateforme",
        pre: "Chaque étape de l'outbound, ",
        accent: "au même endroit",
        post: "",
      },
      also: {
        eyebrow: "Également dans la plateforme",
        pre: "Intégré d'origine, ",
        accent: "pas ajouté après coup",
        post: "",
      },
      why: {
        eyebrow: "Pourquoi une seule plateforme",
        pre: "Chaque brique ",
        accent: "renforce les autres",
        post: "",
      },
      proof: {
        eyebrow: "Résultats clients",
        pre: "Des équipes ",
        accent: "passées à une seule plateforme",
        post: "",
      },
      closing: {
        eyebrow: "Plateforme de sales engagement",
        pre: "Découvrez toute la plateforme ",
        accent: "en un seul appel",
        post: ".",
      },
      faq: {
        eyebrow: "FAQ sur la plateforme de sales engagement",
        pre: "Questions sur ",
        accent: "la plateforme hubsell",
        post: "",
      },
    },
    stages: [
      {
        eyebrow: "Données B2B en temps réel",
        title: "Trouvez des prospects grâce aux signaux d'achat",
        slice: "live-data",
        href: "/platform/live-data",
        linkLabel: "Découvrir les données en temps réel",
        body: "Les contacts sont sourcés en temps réel sur LinkedIn et les sites web des entreprises, pour votre recherche, à partir de signaux comme l'engagement sur un post, les changements de poste, les recrutements et les abonnés de vos concurrents. Chacun est vérifié par rapport à votre ICP avant que vous ne l'utilisiez.",
      },
      {
        eyebrow: "Enrichissement des données de contact",
        title: "E-mails et numéros de téléphone vérifiés",
        slice: "enrichment",
        href: "/platform/enrichment",
        linkLabel: "Découvrir l'enrichissement",
        body: "95 % des e-mails professionnels sont exacts, domaines catch-all compris, et chaque fiche passe un contrôle qualité avant d'arriver dans votre prospection. Les numéros de téléphone sont en option et viennent de partenaires choisis pour leur qualité.",
      },
      {
        eyebrow: "Prospection multicanale",
        title: "E-mail, LinkedIn et appels dans un seul Flow",
        slice: "multichannel",
        href: "/platform/multichannel-outreach",
        linkLabel: "Découvrir la prospection multicanale",
        body: "Visites de profil, demandes de connexion, messages, InMail, e-mails et tâches d'appel s'enchaînent comme étapes d'un seul Flow. Des conditions orientent chaque contact selon ce qu'il fait : personne ne reçoit un e-mail après avoir déjà répondu sur LinkedIn.",
      },
      {
        eyebrow: "Synchronisation CRM",
        title: "Chaque interaction sur la bonne fiche",
        slice: "crm-sync",
        href: "/platform/crm-sync",
        linkLabel: "Découvrir la synchronisation CRM",
        body: "Les contacts et l'activité partent vers Salesforce, HubSpot ou Pipedrive, envoyés à la main ou par règle, et rapprochés des fiches existantes pour éviter tout doublon.",
      },
    ],
    also: [
      {
        title: "Délivrabilité des e-mails",
        href: "/platform/deliverability",
        linkLabel: "Découvrir la délivrabilité",
        body: "Les e-mails partent de vos propres boîtes mail Google ou Microsoft, via leurs API. Les contacts sont vérifiés avant le premier envoi, et le volume reste faible à moyen, adressé aux personnes qui correspondent à votre cible.",
      },
      {
        title: "Personnalisation par signaux",
        href: "/platform/personalisation",
        linkLabel: "Découvrir la personnalisation",
        body: "Vos messages peuvent s'ouvrir sur le signal qui a placé le contact dans votre liste : le post avec lequel il a interagi, le poste qu'il vient de prendre ou le rôle pour lequel son entreprise recrute.",
      },
    ],
    why: [
      {
        title: "Des données fraîches, moins de rejets",
        body: "Des contacts sourcés et vérifiés le jour où vous les utilisez génèrent moins de rejets, ce qui protège votre réputation d'expéditeur pour tous les e-mails qui suivent.",
      },
      {
        title: "Des canaux coordonnés, plus de réponses",
        body: "Quand l'e-mail et LinkedIn se connaissent, chaque contact reçoit l'étape suivante adaptée à ce qu'il a fait, et non un deuxième message sur un canal où il a déjà répondu.",
      },
      {
        title: "Un suivi automatique, des rapports fiables",
        body: "Quand chaque interaction arrive dans le CRM au moment où elle a lieu, les rapports de pipeline montrent ce qui s'est vraiment passé, et vos commerciaux récupèrent le temps qu'ils passaient à tout saisir.",
      },
    ],
    ratingsLine: "Noté 4,6+ sur G2, Capterra et GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Lire le témoignage de Workspace 365",
    closingSub: "Présentez-nous votre stack actuel lors d'un court appel et nous vous montrerons à quoi il ressemble réuni en un seul système.",
    faqs: [
      {
        question: "Qu'est-ce qu'une plateforme de sales engagement ?",
        answer: "<p>Une plateforme de sales engagement gère la partie prospection de la vente : e-mails, étapes LinkedIn et appels, dans l'ordre que vous définissez, avec le suivi de chaque interaction. hubsell y ajoute les deux éléments que la plupart laissent de côté : des données de contact B2B en temps réel à prospecter, et la synchronisation automatique des résultats avec votre CRM.</p>",
      },
      {
        question: "En quoi hubsell est-il différent d'Outreach ou de Salesloft ?",
        answer: "<p>Outreach et Salesloft sont des outils de séquences d'e-mails. Ils ne sourcent pas de données de contact et ne gèrent pas LinkedIn nativement : il vous faut donc encore un fournisseur de données et un processus LinkedIn manuel à côté. hubsell couvre les trois : données en temps réel, e-mail et LinkedIn dans un seul Flow avec des tâches d'appel, et synchronisation CRM.</p>",
      },
      {
        question: "Quels outils hubsell peut-il remplacer ?",
        answer: "<p>Un fournisseur de données B2B, un outil d'enrichissement, un outil de prospection par e-mail et un outil d'automatisation LinkedIn. Les appels passent par des tâches dans votre CRM, vous n'avez donc pas besoin d'un logiciel d'appel séparé pour les étapes outbound, et l'activité est enregistrée dans le CRM sans outil de synchronisation intermédiaire.</p>",
      },
      {
        question: "hubsell inclut-il des données de contact B2B ?",
        answer: "<p>Oui. hubsell source les contacts en temps réel pour chaque recherche, sur LinkedIn et les sites web des entreprises, et enrichit ceux qui correspondent à votre ICP avec un e-mail professionnel vérifié et, si vous le souhaitez, un numéro de téléphone. Il n'y a pas de base statique dont il faudrait acheter l'accès. Voir <a class=\"link\" href=\"/fr/platform/live-data/\">les données en temps réel</a>.</p>",
      },
      {
        question: "Quels canaux hubsell prend-il en charge ?",
        answer: "<p>L'e-mail depuis vos propres boîtes mail Google ou Microsoft, LinkedIn (visites de profil, demandes de connexion, messages et InMail) et le téléphone, sous forme de tâches d'appel dans votre CRM. Tous fonctionnent comme étapes d'un seul Flow.</p>",
      },
      {
        question: "Avec quels CRM hubsell fonctionne-t-il ?",
        answer: "<p>Salesforce, HubSpot et Pipedrive. Les contacts, les entreprises et l'activité sont synchronisés de hubsell vers le CRM en temps réel, rapprochés des fiches existantes pour éviter tout doublon. Voir <a class=\"link\" href=\"/fr/platform/crm-sync/\">la synchronisation CRM</a>.</p>",
      },
      {
        question: "hubsell est-il conforme au RGPD ?",
        answer: "<p>Oui. hubsell est basé à Berlin et héberge les données à Francfort. Il traite les données pour la finalité que vous définissez et ne les conserve pas pour les revendre. Vous restez responsable du traitement et hubsell est votre sous-traitant, dans le cadre d'un accord de traitement des données.</p>",
      },
      {
        question: "Combien de temps faut-il pour démarrer ?",
        answer: "<p>L'équipe hubsell prend en charge avec vous la mise en place des campagnes, le sourcing des données et la configuration des Flows : la plupart des équipes lancent leur première campagne outbound en moins de 7 jours.</p>",
      },
      {
        question: "Combien coûte hubsell ?",
        answer: "<p>Start coûte à partir de 120 € par licence et par mois, et Grow à partir de 4 320 € par an. Scale fait l'objet d'une offre sur mesure pour les équipes à partir de 10 licences. Voir <a class=\"link\" href=\"/fr/pricing/\">les tarifs</a>.</p>",
      },
      {
        question: "À qui s'adresse hubsell ?",
        answer: "<p>Aux entreprises B2B qui vendent à d'autres entreprises : équipes commerciales et SDR, fondateurs qui vendent eux-mêmes, équipes RevOps et agences qui mènent l'outbound pour leurs clients. La plupart de nos clients sont en Europe.</p>",
      },
    ],
  },
  details: [
    {
      path: "/platform/live-data",
      title: "Fournisseur de données B2B en temps réel, conformes RGPD | hubsell",
      metaDescription: "Fournisseur de données B2B : contacts sourcés en temps réel selon votre ICP, vérifiés au moment de l'usage. Conformes au RGPD, hébergés à Francfort.",
      heroSlice: "live-data",
      compare: {
        eyebrow: "Fournisseur de données B2B",
        titlePre: "Base de contacts B2B face aux ",
        titleAccent: "données B2B sourcées en temps réel",
        titlePost: "",
        colA: "Base achetée",
        colB: "Données en temps réel hubsell",
        rows: [
          ["Collecte", "Des mois ou des années avant que vous ne l'utilisiez", "Le jour où vous la demandez"],
          [
            "Vieillissement",
            "25 à 30 % devient obsolète chaque année",
            "Sourcées à neuf pour chaque demande : rien ne reste stocké à vieillir",
          ],
          [
            "Exactitude",
            "Inconnue jusqu'au retour des rejets",
            "95 %, domaines catch-all compris, vérifiées au moment de l'usage",
          ],
          [
            "Pertinence",
            "Filtrées par poste et par secteur",
            "Alignées sur votre ICP et sur les signaux d'achat que vous choisissez",
          ],
          [
            "Ce que vous payez",
            "L'accès à toute la base, utilisée ou non",
            "Les résultats de traitement, étape par étape, pour les contacts que vous gardez",
          ],
          [
            "Qui contrôle les données",
            "Le fournisseur les conserve et les revend",
            "Vous êtes responsable du traitement, hubsell est sous-traitant",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Signaux d'achat",
          pre: "Six façons de trouver ",
          accent: "des prospects B2B grâce aux signaux d'achat",
          post: "",
        },
        steps: {
          eyebrow: "Sourcing « jour zéro »",
          pre: "Comment fonctionne ",
          accent: "le sourcing de données B2B en temps réel",
          post: "",
        },
        extra: {
          eyebrow: "RGPD",
          pre: "Des données B2B ",
          accent: "conformes au RGPD",
          post: "",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que changent ",
          accent: "des données B2B exactes",
          post: "",
        },
        closing: {
          eyebrow: "Outil de prospection B2B",
          pre: "Prospectez en B2B avec ",
          accent: "des données sourcées aujourd'hui",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur les données B2B",
          pre: "Questions sur ",
          accent: "les données B2B en temps réel",
          post: "",
        },
        explained: {
          eyebrow: "Prospection LinkedIn",
          pre: "La prospection LinkedIn, ",
          accent: "signal par signal",
          post: "",
        },
      },
      signals: {
        sub: "Chaque signal part d'un lien, d'une recherche ou de votre ICP. hubsell collecte les personnes, les vérifie par rapport à votre ICP et enrichit celles qui correspondent, prêtes pour la prospection.",
        startLabel: "Point de départ",
        items: [
          {
            id: "post",
            title: "Engagement sur un post LinkedIn",
            body: "Les personnes qui réagissent à un post LinkedIn, le commentent ou le republient ont déjà montré de l'intérêt pour le sujet. hubsell les collecte à partir du post, vérifie chacune par rapport à votre ICP et enrichit celles qui correspondent. Utilisez vos propres posts, ceux d'un concurrent ou ceux d'une voix reconnue de votre secteur.",
            start: "Le lien de n'importe quel post LinkedIn",
          },
          {
            id: "event",
            title: "Participants à un événement LinkedIn",
            body: "Toute personne inscrite à un événement LinkedIn s'est engagée sur un sujet. hubsell collecte la liste des participants, la qualifie par rapport à votre ICP et enrichit les contacts qui correspondent, pour que vous puissiez les joindre avant, pendant ou après l'événement.",
            start: "Le lien d'un événement LinkedIn",
          },
          {
            id: "followers",
            title: "Abonnés de votre entreprise et de vos concurrents",
            body: "Les personnes qui suivent votre page entreprise vous connaissent déjà. Celles qui suivent la page d'un concurrent s'intéressent à ce que vous vendez. hubsell collecte les deux groupes et ne garde que les personnes qui correspondent à votre ICP.",
            start: "Votre page entreprise ou celle d'un concurrent",
          },
          {
            id: "jobs",
            title: "Changements de poste",
            body: "Une personne qui vient de prendre un poste construit ses outils et son équipe : les premiers mois sont le meilleur moment pour la contacter. hubsell trouve les personnes qui ont récemment changé de poste dans vos comptes et rôles cibles.",
            start: "Votre ICP : rôles et entreprises cibles",
          },
          {
            id: "hiring",
            title: "Entreprises qui recrutent pour des postes précis",
            body: "Une entreprise qui recrute des SDR ou des account executives investit dans la vente en ce moment. hubsell part d'une recherche LinkedIn filtrée sur les entreprises qui recrutent pour ces postes et y trouve les décideurs.",
            start: "Une recherche LinkedIn avec le filtre de recrutement",
          },
          {
            id: "search",
            title: "Recherches LinkedIn et Sales Navigator",
            body: "Si vous savez déjà qui vous ciblez, collez une recherche de personnes LinkedIn ou une recherche de leads Sales Navigator. hubsell l'exécute, qualifie les résultats par IA et enrichit ceux qui correspondent, sans export de liste à la main.",
            start: "Le lien d'une recherche LinkedIn ou Sales Navigator",
          },
        ],
      },
      faqs: [
        {
          question: "Que sont les données B2B sourcées en temps réel, et en quoi diffèrent-elles d'une base de contacts B2B ?",
          answer: "<p>Les données sourcées en temps réel sont collectées au moment où vous les demandez, pour votre recherche, au lieu de provenir d'une base constituée des mois ou des années plus tôt. hubsell construit un ensemble de contacts neuf pour chaque demande, aligné sur votre ICP et vérifié au moment de l'usage. Une base de contacts vend l'accès à des fiches qui vieillissent depuis le jour de leur collecte.</p>",
        },
        {
          question: "À quelle vitesse les données de contact B2B deviennent-elles obsolètes ?",
          answer: "<p>Les décideurs B2B changent de poste environ tous les 2,5 ans : une base statique perd donc 25 à 30 % de son exactitude chaque année. Les e-mails sont rejetés, les intitulés de poste changent et les personnes partent dans une autre entreprise. Des données sourcées le jour où vous les utilisez évitent cette dégradation.</p>",
        },
        {
          question: "D'où viennent les données B2B de hubsell ?",
          answer: "<p>hubsell source les données en temps réel sur LinkedIn et les sites web des entreprises, et crée lui-même des données, par exemple en générant et en validant des adresses e-mail professionnelles. Les numéros de téléphone viennent de partenaires choisis pour leur exactitude et leur qualité, pas pour leur prix.</p>",
        },
        {
          question: "Les données B2B de hubsell sont-elles conformes au RGPD ?",
          answer: "<p>Oui. hubsell source et traite les données au cas par cas pour chaque client et ne les conserve pas pour les revendre. Le client est responsable du traitement et hubsell est sous-traitant, dans le cadre d'un accord de traitement des données. hubsell est basé à Berlin, fonctionne sur des serveurs à Francfort et supprime les données du compte dans les 30 jours suivant la fin du contrat.</p>",
        },
        {
          question: "Quelle est la base légale de la prospection B2B au titre du RGPD ?",
          answer: "<p>Pour la prospection de contacts professionnels, la base légale est généralement l'intérêt légitime. Avec hubsell, le client reste responsable du traitement et définit la finalité avant qu'un seul contact ne soit sourcé, et hubsell traite les données pour cette seule finalité. Les règles de l'e-mail à froid varient selon les pays : lisez notre <a class=\"link\" href=\"/insights/b2b-data-compliance/\">guide sur la conformité des données B2B</a> (en anglais).</p>",
        },
        {
          question: "À partir de quels signaux d'achat hubsell peut-il sourcer des contacts ?",
          answer: "<p>hubsell peut sourcer les personnes qui ont interagi avec un post LinkedIn, participé à un événement LinkedIn, qui suivent votre page entreprise ou celle d'un concurrent, qui ont récemment changé de poste ou qui travaillent dans des entreprises qui recrutent pour des postes précis. Vous pouvez aussi partir d'une recherche LinkedIn ou Sales Navigator, ou importer votre propre liste.</p>",
        },
        {
          question: "Comment hubsell trouve-t-il les personnes qui ont interagi avec un post LinkedIn ou participé à un événement ?",
          answer: "<p>Collez le lien du post ou de l'événement dans hubsell. Il collecte les personnes qui ont réagi, commenté ou se sont inscrites, les qualifie par rapport à votre ICP et enrichit celles qui correspondent avec des données de contact vérifiées. Elles peuvent ensuite entrer directement dans un Flow d'étapes LinkedIn, d'e-mails et de tâches d'appel.</p>",
        },
        {
          question: "Quelle est l'exactitude des données de contact de hubsell ?",
          answer: "<p>Les données de hubsell sont exactes à 95 %, domaines catch-all compris, et couvrent 80 à 90 % d'un marché cible. Chaque fiche est vérifiée au moment de l'usage, et non au moment de sa première collecte. hubsell réalise volontiers un test comparatif avec votre fournisseur actuel.</p>",
        },
        {
          question: "Comment hubsell facture-t-il les données, et dois-je payer pour des contacts inutilisables ?",
          answer: "<p>Vous payez des résultats de traitement, étape par étape : le sourcing, puis l'enrichissement, les adresses e-mail validées et les numéros de téléphone. Comme chaque étape est facturée séparément, vous pouvez d'abord examiner les contacts sourcés et exclure ceux qui ne sont pas pertinents : vous ne payez l'enrichissement que pour les contacts que vous gardez. <a class=\"link\" href=\"/fr/pricing/\">Découvrez les tarifs</a>.</p>",
        },
        {
          question: "Comment hubsell se compare-t-il à ZoomInfo, Apollo ou Cognism pour les données B2B ?",
          answer: "<p>ZoomInfo, Apollo et Cognism vendent l'accès à une base de données. hubsell source les données à neuf pour chaque demande : elles sont à jour, qualifiées par rapport à votre ICP et pertinentes pour les signaux que vous choisissez. hubsell gère aussi la prospection et la synchronise avec votre CRM, là où ces outils s'arrêtent le plus souvent aux données. Comparez : <a class=\"link\" href=\"/fr/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/fr/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/fr/vs/cognism/\">Cognism</a>.</p>",
        },
      ],
      extra: {
        title: "Des données B2B conformes au RGPD",
        paras: [
          "hubsell source et traite les données au cas par cas, pour une finalité que vous définissez avant qu'un seul contact ne soit sourcé, et ne les conserve pas pour les revendre. Vous restez responsable du traitement et hubsell est votre sous-traitant. Un fournisseur de bases de données fonctionne à l'inverse : il collecte des données pour les revendre.",
          "Au titre du RGPD, la prospection de contacts professionnels repose sur l'intérêt légitime. hubsell est basé à Berlin, en Allemagne, et la plateforme fonctionne sur des serveurs Amazon Web Services à Francfort.",
          "Chaque client peut signer l'accord de traitement des données de hubsell. Il précise comment les données personnelles sont traitées, quels sous-traitants ultérieurs peuvent y accéder et comment sont traitées les demandes des personnes figurant dans vos données. À la fin du contrat, les données de votre compte sont supprimées dans les 30 jours.",
        ],
        links: [
          {
            label: "Lire l'accord de traitement des données (en anglais)",
            href: "/data-processing-agreement",
          },
          {
            label: "Guide : conformité des données B2B et prospection à froid (en anglais)",
            href: "/insights/b2b-data-compliance",
          },
          {
            label: "Alternative à Cognism : la comparaison",
            href: "/vs/cognism",
          },
          {
            label: "Alternative à ZoomInfo : la comparaison",
            href: "/vs/zoominfo",
          },
        ],
      },
      eyebrow: "Données B2B en temps réel",
      h1Pre: "Des données B2B sourcées ",
      h1Accent: "aujourd'hui",
      h1Post: ", pas il y a deux ans",
      sub: "hubsell est un fournisseur de données B2B qui ne vend pas l'accès à une base statique. Définissez votre ICP : nous sourçons les contacts en temps réel sur LinkedIn, y ajoutons des signaux d'achat et vérifions chaque fiche avant qu'elle n'entre dans votre Flow.",
      demoCta: "Réservez une démo",
      heroTimeline: true,
      row: {
        titlePre: "Sourcées à partir de ",
        titleAccent: "signaux d'achat en temps réel",
        titlePost: "",
        points: [
          "La plupart des plateformes vous laissent filtrer par poste et par secteur. hubsell lit aussi les comportements.",
          "Les personnes qui suivent votre page entreprise ou celle d'un concurrent, qui interagissent avec un post LinkedIn, changent de poste, participent à des événements ou recrutent pour des postes précis.",
          "Les signaux vous disent qui mérite d'être contacté cette semaine, pas seulement qui correspond à un filtre.",
        ],
        embed: "05-sp-widget",
        stepEyebrow: "Comment ça marche",
        stepTitle: "Du signal en temps réel au contact vérifié",
      },
      gridTitlePre: "Des données de contact B2B ",
      gridTitleAccent: "exactes le jour où vous les utilisez",
      gridTitlePost: "",
      blocks: [
        {
          title: "Sourcing « jour zéro »",
          body: "Une base sur mesure construite au moment de votre demande, pas une liste partagée constituée il y a des années. À jour ce jour-là, avec une couverture de 80 à 90 % de votre marché cible.",
        },
        {
          title: "Aligné sur votre ICP",
          body: "Définissez une fois votre profil de client idéal. Chaque contact qui entre dans votre Flow est comparé à ce profil avant que vous ne dépensiez le moindre crédit en prospection.",
        },
        {
          title: "Vérifié au moment de l'usage",
          body: "Chaque fiche est contrôlée au moment où elle est sourcée, domaines catch-all compris. Les rejets restent bas et votre réputation d'expéditeur reste intacte.",
        },
        {
          title: "Conçu contre l'obsolescence",
          body: "Le décideur B2B moyen change de poste tous les 2,5 ans : les listes statiques perdent donc 25 à 30 % de leur valeur par an. Le sourcing en temps réel rend cette dégradation sans effet : les données sont exactes le jour où vous les utilisez.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que changent des données exactes",
      quoteSlug: "alon-even",
      storySlug: "sensolus",
      storyLabel: "Lire le témoignage de Sensolus",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur les données en temps réel",
      faqSlugs: ["stop-sales-email-bounces", "build-b2b-audience-no-decay"],
      closing: {
        titlePre: "Découvrez votre marché, sourcé ",
        titleAccent: "aujourd'hui",
        titlePost: ".",
        sub: "Présentez-nous votre ICP lors d'un court appel et nous vous montrerons ce que le sourcing « jour zéro » donne pour lui.",
      },
      closingCta: "Réservez une démo",
    },
    {
      path: "/platform/multichannel-outreach",
      title: "Prospection multicanale : e-mail, LinkedIn et téléphone | hubsell",
      metaDescription: "LinkedIn, e-mails et tâches d'appel dans un seul Flow. Automatisation LinkedIn sûre sur plusieurs profils, e-mails depuis vos boîtes mail, appels dans le CRM.",
      heroSlice: "multichannel",
      compare: {
        eyebrow: "Prospection LinkedIn et e-mail",
        titlePre: "Trois outils séparés face à ",
        titleAccent: "un seul Flow multicanal",
        titlePost: "",
        colA: "Outils séparés",
        colB: "Prospection multicanale hubsell",
        rows: [
          [
            "Canaux",
            "Un outil d'e-mail, un outil LinkedIn et une liste de tâches, chacun de son côté",
            "E-mail, LinkedIn et tâches d'appel dans un seul Flow",
          ],
          [
            "Réaction au contact",
            "Quelqu'un doit arrêter les autres outils à la main",
            "Des branches orientent chaque contact selon ce qu'il fait : accepté, ouvert, répondu ou silencieux",
          ],
          [
            "Qui envoie sur LinkedIn",
            "Des profils de SDR, moins de 20 % d'invitations acceptées",
            "Des profils de fondateurs et d'experts, plus de 50 % acceptées",
          ],
          [
            "Volume LinkedIn",
            "Un seul profil porte toute l'activité",
            "Réparti sur 5 à 10 profils d'expéditeurs, dans des limites strictes",
          ],
          [
            "Envoi des e-mails",
            "Via des serveurs d'envoi externes et des liens de suivi",
            "Depuis vos propres boîtes mail, via les API de Google et Microsoft",
          ],
          [
            "Appels",
            "Un logiciel d'appel séparé et une saisie manuelle",
            "Tâches d'appel dans Salesforce, HubSpot ou Pipedrive, suivies avec le Flow",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Plateforme de prospection multicanale",
          pre: "Une plateforme de prospection multicanale, ",
          accent: "pas trois outils",
          post: "",
        },
        explained: {
          eyebrow: "Automatisation LinkedIn",
          pre: "La prospection LinkedIn et e-mail, ",
          accent: "étape par étape",
          post: "",
        },
        steps: {
          eyebrow: "Comment ça marche",
          pre: "Comment se déroule ",
          accent: "un Flow multicanal",
          post: "",
        },
        extra: {
          eyebrow: "Sécurité LinkedIn",
          pre: "",
          accent: "Une automatisation LinkedIn sûre",
          post: ", dans les limites",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que change ",
          accent: "une prospection coordonnée",
          post: "",
        },
        closing: {
          eyebrow: "Prospection LinkedIn et e-mail",
          pre: "Gérez LinkedIn, e-mails et appels dans ",
          accent: "un seul Flow",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur la prospection multicanale",
          pre: "Questions sur ",
          accent: "la prospection multicanale",
          post: "",
        },
      },
      signals: {
        sub: "Chaque étape est un bloc de l'éditeur de Flows. Placez-les dans l'ordre qui convient à vos acheteurs et laissez les conditions décider qui va où.",
        startLabel: "À utiliser pour",
        items: [
          {
            id: "visit",
            title: "Visites de profil",
            body: "Une visite de profil montre au prospect qui s'apprête à le contacter, avant de lui demander quoi que ce soit.",
            start: "Préparer le terrain avant l'invitation",
          },
          {
            id: "invite",
            title: "Demandes de connexion",
            body: "Les invitations partent des profils que les acheteurs acceptent. Les demandes de fondateurs et d'experts sont acceptées dans plus de 50 % des cas, contre moins de 20 % pour les profils de SDR.",
            start: "Construire un réseau de premier niveau avec vos acheteurs",
          },
          {
            id: "message",
            title: "Messages LinkedIn",
            body: "Une fois l'invitation acceptée, un message direct suit après le délai que vous avez défini. La suite dépend de la réponse du contact.",
            start: "La première vraie conversation",
          },
          {
            id: "inmail",
            title: "InMail",
            body: "L'InMail atteint des personnes hors de votre réseau sans demande de connexion préalable.",
            start: "Les contacts trop importants pour attendre",
          },
          {
            id: "email",
            title: "Étapes e-mail",
            body: "Les e-mails partent de vos propres boîtes mail Google ou Microsoft via leurs API, sans serveur externe ni redirection de suivi sur le trajet.",
            start: "Tous les contacts avec un e-mail vérifié, y compris ceux qui n'ont pas accepté",
          },
          {
            id: "call",
            title: "Tâches d'appel",
            body: "Les étapes téléphone créent des tâches d'appel dans Salesforce, HubSpot ou Pipedrive. Les commerciaux appellent depuis le CRM et le résultat est enregistré avec le reste du Flow.",
            start: "Les contacts qui méritent une conversation",
          },
          {
            id: "branch",
            title: "Conditions et branches",
            body: "Chaque contact est orienté selon ce qu'il fait : accepté, ouvert, répondu ou resté silencieux. Celui qui accepte reçoit un message, celui qui n'accepte pas reçoit un e-mail à la place.",
            start: "Garder chaque contact sur le bon chemin",
          },
          {
            id: "wait",
            title: "Délais",
            body: "Les étapes de délai espacent les interactions, par exemple un jour après une invitation acceptée, ou une semaine avant de retirer une invitation restée sans réponse.",
            start: "Un rythme qui semble personnel, pas automatisé",
          },
        ],
      },
      extra: {
        title: "Une automatisation LinkedIn sûre",
        paras: [
          "LinkedIn restreint les comptes quand beaucoup d'activité est concentrée sur une courte période. hubsell fait l'inverse : il développe votre réseau de premier niveau lentement et régulièrement, 365 jours par an, dans des limites strictes.",
          "L'activité est répartie sur 5 à 10 profils d'expéditeurs de votre équipe : aucun profil ne porte seul le volume. Un volume plus faible par expéditeur garde chaque profil en bonne santé et protège aussi votre domaine d'e-mail.",
          "Les invitations non acceptées sont retirées après le délai que vous définissez : les demandes en attente ne s'accumulent pas sur un profil.",
        ],
        links: [
          {
            label: "Comment hubsell protège la délivrabilité des e-mails",
            href: "/platform/deliverability",
          },
        ],
      },
      faqs: [
        {
          question: "Qu'est-ce qu'une plateforme de prospection multicanale ?",
          answer: "<p>Une plateforme de prospection multicanale gère LinkedIn, l'e-mail et le téléphone dans un seul Flow au lieu de trois outils séparés. hubsell décide de l'étape suivante pour chaque contact selon ce qu'il a fait sur n'importe quel canal : une invitation acceptée, un e-mail ouvert ou une réponse le font avancer sans que personne ne change d'outil.</p>",
        },
        {
          question: "Puis-je gérer la prospection LinkedIn et e-mail dans un seul Flow ?",
          answer: "<p>Oui. Dans hubsell, les étapes LinkedIn (visites de profil, demandes de connexion, messages, InMail), les étapes e-mail et les tâches d'appel se trouvent dans un seul Flow. Des conditions orientent chaque contact : celui qui accepte l'invitation reçoit un message LinkedIn, celui qui ne l'accepte pas reçoit un e-mail à la place.</p>",
        },
        {
          question: "L'automatisation LinkedIn est-elle sûre ? Comment hubsell évite-t-il les restrictions ?",
          answer: "<p>LinkedIn restreint les comptes quand beaucoup d'activité est concentrée sur une courte période. hubsell développe votre réseau de premier niveau lentement et régulièrement, 365 jours par an, dans des limites strictes, et répartit l'activité sur 5 à 10 profils d'expéditeurs : aucun profil ne porte seul le volume.</p>",
        },
        {
          question: "Quelles actions LinkedIn hubsell peut-il automatiser ?",
          answer: "<p>Les visites de profil, les demandes de connexion, les messages directs et l'InMail, ainsi que le retrait des invitations non acceptées. Chaque action est une étape du même Flow que vos e-mails et vos tâches d'appel.</p>",
        },
        {
          question: "hubsell envoie-t-il les e-mails depuis ma propre boîte mail ?",
          answer: "<p>Oui. Les e-mails partent de vos propres boîtes mail Google ou Microsoft via leurs API. Il n'y a ni serveur SMTP externe ni redirection de suivi dans l'e-mail : vos messages ressemblent à ce qu'ils sont, de vrais e-mails envoyés par une vraie personne. En savoir plus sur <a class=\"link\" href=\"/fr/platform/deliverability/\">la délivrabilité</a>.</p>",
        },
        {
          question: "Qui doit mener la prospection LinkedIn : les SDR ou les dirigeants ?",
          answer: "<p>L'expéditeur change le résultat. Les demandes de connexion des SDR sont généralement acceptées dans moins de 20 % des cas, car les acheteurs s'attendent à un argumentaire commercial. La même demande venant d'un fondateur, d'un dirigeant ou d'un expert métier est acceptée dans plus de 50 % des cas. hubsell mène la prospection depuis les profils que les acheteurs acceptent.</p>",
        },
        {
          question: "hubsell peut-il prospecter depuis plusieurs profils LinkedIn à la fois ?",
          answer: "<p>Oui. hubsell gère la prospection de votre CEO, de vos responsables commerciaux et de vos experts métier depuis un seul endroit : plusieurs personnes peuvent approcher le même compte de façon coordonnée, et le volume est réparti entre leurs profils.</p>",
        },
        {
          question: "Quels résultats attendre de la prospection LinkedIn et e-mail avec hubsell ?",
          answer: "<p>En suivant la méthode hubsell, les équipes obtiennent généralement 25 à 40 % de demandes de connexion acceptées, 10 à 15 % de réponses et 3 à 5 % de conversations engagées. Les résultats sont dans le haut de la fourchette quand les profils d'expéditeurs ne paraissent pas commerciaux.</p>",
        },
        {
          question: "hubsell peut-il passer des appels ?",
          answer: "<p>hubsell n'a pas de logiciel d'appel intégré. Les étapes téléphone créent des tâches d'appel dans Salesforce, HubSpot ou Pipedrive : les commerciaux appellent depuis le CRM qu'ils utilisent déjà et le résultat est enregistré avec le reste du Flow. Voir <a class=\"link\" href=\"/fr/platform/crm-sync/\">la synchronisation CRM</a>.</p>",
        },
        {
          question: "Comment hubsell se compare-t-il à Outreach ou Salesloft ?",
          answer: "<p>Outreach et Salesloft sont des outils de séquences d'e-mails : ils ne sourcent pas de données et ne gèrent pas LinkedIn nativement, il vous faut donc encore un fournisseur de données et un processus LinkedIn manuel. hubsell couvre les trois couches : des données de prospects en temps réel, LinkedIn et l'e-mail dans un seul Flow avec des tâches d'appel, et une synchronisation CRM automatique.</p>",
        },
      ],
      eyebrow: "Prospection multicanale",
      h1Pre: "Une prospection multicanale par ",
      h1Accent: "e-mail, LinkedIn et téléphone",
      h1Post: "",
      sub: "Arrêtez de jongler entre un outil d'e-mail, un outil LinkedIn et une liste de tâches. hubsell gère les trois canaux dans un seul Flow coordonné, qui réagit à ce que fait chaque contact.",
      demoCta: "Réservez une démo",
      row: {
        titlePre: "Une plateforme de prospection multicanale, ",
        titleAccent: "pas trois outils",
        titlePost: "",
        points: [
          "Glissez-déposez des étapes e-mail, LinkedIn et téléphone dans un seul Flow.",
          "Visites de profil, demandes de connexion, messages directs, InMail et tâches d'appel, tous coordonnés avec le rythme de vos e-mails.",
          "Des conditions de branchement orientent chaque contact selon ce qu'il fait : ouvert, répondu, accepté ou resté silencieux.",
        ],
        embed: "06-multichannel-flow",
        stepEyebrow: "Comment ça marche",
        stepTitle: "Un seul Flow pour tous les canaux",
      },
      gridTitlePre: "Conçu pour ",
      gridTitleAccent: "être délivré et obtenir des réponses",
      gridTitlePost: "",
      blocks: [
        {
          title: "La délivrabilité dès la conception",
          body: "Les e-mails partent via les API de Google et Microsoft directement depuis vos propres boîtes mail, sans serveur externe sur le trajet. Les taux d'ouverture restent fiables et les filtres antispam restent calmes.",
        },
        {
          title: "Des envois sûrs et répartis",
          body: "La prospection est répartie sur 5 à 10 profils d'expéditeurs internes, dans des limites strictes. Moins de volume par expéditeur, plus de délivrabilité, aucun domaine grillé. L'automatisation LinkedIn respecte des limites quotidiennes sûres sur chaque profil.",
        },
        {
          title: "Envoyé depuis les bons profils",
          body: "Les demandes de connexion des SDR restent sous 20 % d'acceptation, car les acheteurs s'attendent à un argumentaire. La même demande venant d'un fondateur ou d'un expert dépasse 50 %. hubsell mène la prospection depuis les profils que les acheteurs acceptent.",
        },
        {
          title: "Les appels là où travaillent les commerciaux",
          body: "Les étapes téléphone arrivent sous forme de tâches d'appel dans Salesforce, HubSpot ou Pipedrive : les commerciaux appellent depuis le CRM qu'ils utilisent déjà et le résultat est enregistré avec le reste du Flow.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que change une prospection coordonnée",
      quoteSlug: "meetyoo",
      storySlug: "verhaert",
      storyLabel: "Lire le témoignage de Verhaert",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur la prospection",
      faqSlugs: [
        "mass-email-brand-reputation",
        "sdr-vs-executive-linkedin-outreach",
        "hubsell-email-infrastructure",
      ],
      closing: {
        titlePre: "Gérez les trois canaux dans ",
        titleAccent: "un seul Flow",
        titlePost: ".",
        sub: "Présentez-nous l'une de vos campagnes actuelles lors d'un court appel et nous la transposerons dans un seul Flow hubsell.",
      },
      closingCta: "Réservez une démo",
    },
    {
      path: "/platform/crm-sync",
      title: "Synchronisation CRM : LinkedIn et e-mail dans votre CRM | hubsell",
      metaDescription: "Synchronisez LinkedIn et l'e-mail avec HubSpot, Salesforce ou Pipedrive. Contacts envoyés à la main ou par règle, sans doublon, chaque interaction suivie.",
      heroSlice: "crm-sync",
      compare: {
        eyebrow: "Intégration CRM",
        titlePre: "Saisie manuelle dans le CRM face à ",
        titleAccent: "la synchronisation CRM automatique",
        titlePost: "",
        colA: "Saisie à la main",
        colB: "Synchronisation CRM hubsell",
        rows: [
          [
            "Faire entrer les contacts",
            "Exports et imports CSV, ou fiches saisies à la main",
            "Envoyés à la main ou automatiquement, selon les conditions que vous définissez",
          ],
          [
            "Doublons",
            "Une nouvelle fiche à chaque import de liste",
            "Rapprochés des fiches existantes au lieu d'en créer de nouvelles",
          ],
          [
            "Activité LinkedIn",
            "Reste dans LinkedIn, invisible pour le reste de l'équipe",
            "Visites, invitations, messages et réponses sur la fiche du contact",
          ],
          [
            "Activité e-mail",
            "Saisie quand un commercial y pense",
            "Envois, ouvertures et réponses enregistrés au moment où ils ont lieu",
          ],
          [
            "Appels",
            "Un logiciel d'appel et une note saisie après coup",
            "Tâches d'appel dans le CRM, résultat sur la fiche",
          ],
          [
            "Clients existants",
            "Recontactés parce que personne n'a vérifié le CRM",
            "Contacts du CRM exclus avant le début de la prospection",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Intégration CRM",
          pre: "Chaque interaction ",
          accent: "enregistrée dans votre CRM",
          post: "",
        },
        explained: {
          eyebrow: "Synchroniser LinkedIn avec votre CRM",
          pre: "Ce que hubsell synchronise ",
          accent: "avec votre CRM",
          post: "",
        },
        steps: {
          eyebrow: "Comment ça marche",
          pre: "De l'étape du Flow ",
          accent: "à la fiche CRM",
          post: "",
        },
        extra: {
          eyebrow: "Intégration Salesforce, HubSpot et Pipedrive",
          pre: "Votre CRM reste ",
          accent: "le système de référence",
          post: "",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que change ",
          accent: "le suivi CRM automatique",
          post: "",
        },
        closing: {
          eyebrow: "Synchronisation CRM automatique",
          pre: "Votre CRM, ",
          accent: "toujours à jour",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur la synchronisation CRM",
          pre: "Questions sur ",
          accent: "la synchronisation CRM",
          post: "",
        },
      },
      signals: {
        sub: "Tous les éléments ci-dessous peuvent partir vers Salesforce, HubSpot ou Pipedrive. Vous choisissez ce qui est envoyé et quand.",
        startLabel: "Dans le CRM",
        items: [
          {
            id: "company",
            title: "Contacts et entreprises",
            body: "Les personnes et leurs entreprises sont créées dans le CRM, ou rapprochées de la fiche qui existe déjà et mises à jour.",
            start: "Une fiche par personne",
          },
          {
            id: "email",
            title: "Activité e-mail",
            body: "Chaque e-mail envoyé par un Flow, ainsi que les ouvertures et les réponses, est enregistré sur le contact au moment où il a lieu.",
            start: "Activité dans l'historique du contact",
          },
          {
            id: "invite",
            title: "Invitations et connexions LinkedIn",
            body: "Les demandes de connexion et les invitations acceptées apparaissent sur le contact à côté de l'e-mail : toute l'équipe voit le volet LinkedIn de la prospection.",
            start: "Activité dans l'historique du contact",
          },
          {
            id: "message",
            title: "Messages et réponses LinkedIn",
            body: "Les messages et les InMail envoyés depuis les profils de votre équipe, et les réponses reçues, sont enregistrés sur la fiche.",
            start: "Activité dans l'historique du contact",
          },
          {
            id: "call",
            title: "Tâches d'appel et résultats",
            body: "Les étapes téléphone créent une tâche d'appel dans le CRM. Le commercial appelle depuis le CRM et y enregistre le résultat.",
            start: "Une tâche dans le CRM",
          },
          {
            id: "branch",
            title: "Règles d'envoi",
            body: "Décidez quels contacts sont transférés : envoi à la main, ou conditions, par exemple uniquement les contacts qui répondent.",
            start: "Seulement les contacts qui méritent une fiche",
          },
          {
            id: "map",
            title: "Correspondance des champs",
            body: "Choisissez quel champ hubsell remplit quel champ du CRM, pour que les données arrivent là où vos rapports les attendent.",
            start: "Vos champs, votre structure",
          },
          {
            id: "ban",
            title: "Exclusion des contacts du CRM",
            body: "Les contacts déjà présents dans votre CRM, comme vos clients ou vos affaires en cours, peuvent être exclus avant le début de la prospection.",
            start: "Ne pas contacter vos clients par erreur",
          },
        ],
      },
      extra: {
        title: "Votre CRM reste le système de référence",
        paras: [
          "hubsell écrit dans Salesforce, HubSpot et Pipedrive. Il ne les remplace pas, et votre équipe n'a pas à travailler à deux endroits.",
          "Avant d'écrire, hubsell cherche la fiche existante et la met à jour : envoyer deux fois la même personne ne crée pas de deuxième contact.",
          "Les contacts déjà présents dans votre CRM peuvent être exclus avant le lancement d'un Flow : vos clients et vos affaires en cours ne sont pas contactés par erreur.",
        ],
        links: [
          {
            label: "Comment connecter votre CRM (en anglais)",
            href: "/knowledge/connect-your-crm",
          },
        ],
      },
      faqs: [
        {
          question: "hubsell s'intègre-t-il à HubSpot, Salesforce et Pipedrive ?",
          answer: "<p>Oui. hubsell dispose d'intégrations natives avec les trois. Vous connectez votre CRM une fois dans Intégrations et accordez les autorisations demandées. Ensuite, la synchronisation fonctionne en temps réel, sans Zapier, middleware ni fichiers CSV. Voir <a class=\"link\" href=\"/knowledge/connect-your-crm/\">comment connecter votre CRM</a> (en anglais).</p>",
        },
        {
          question: "Comment synchroniser l'activité LinkedIn avec HubSpot ?",
          answer: "<p>Connectez HubSpot à hubsell et menez votre prospection LinkedIn dans un Flow hubsell. Les visites de profil, demandes de connexion, invitations acceptées, messages et réponses sont alors enregistrés sur le contact HubSpot, à côté de l'activité e-mail et des tâches d'appel. Salesforce et Pipedrive fonctionnent de la même façon.</p>",
        },
        {
          question: "Que synchronise hubsell avec mon CRM ?",
          answer: "<p>Les contacts et leurs entreprises, l'activité e-mail (envoyé, ouvert, répondu), l'activité LinkedIn (visites de profil, demandes de connexion, invitations acceptées, messages, InMail et réponses) et les tâches d'appel avec leurs résultats.</p>",
        },
        {
          question: "Les contacts sont-ils envoyés automatiquement dans mon CRM ?",
          answer: "<p>Seulement si vous le souhaitez. Vous pouvez envoyer les contacts à la main, ou définir des conditions qui les envoient automatiquement, par exemple uniquement les contacts qui répondent. Connecter votre CRM n'envoie rien de lui-même.</p>",
        },
        {
          question: "hubsell va-t-il créer des doublons dans mon CRM ?",
          answer: "<p>Non. Avant d'écrire, hubsell rapproche chaque contact et chaque entreprise de la fiche qui existe déjà et la met à jour, au lieu d'en créer une deuxième.</p>",
        },
        {
          question: "Puis-je exclure les contacts déjà présents dans mon CRM ?",
          answer: "<p>Oui. Les contacts déjà présents dans votre CRM, comme vos clients ou les personnes liées à des affaires en cours, peuvent être exclus avant le début de la prospection : personne n'est contacté par erreur.</p>",
        },
        {
          question: "La synchronisation CRM de hubsell est-elle bidirectionnelle ?",
          answer: "<p>Aujourd'hui, la synchronisation va de hubsell vers votre CRM. hubsell écrit les contacts, les entreprises et l'activité, et consulte le CRM pour trouver les fiches existantes et les contacts à exclure. Les modifications faites dans le CRM ne sont pas encore réécrites dans hubsell. Une synchronisation bidirectionnelle est prévue.</p>",
        },
        {
          question: "Puis-je choisir les champs du CRM que hubsell remplit ?",
          answer: "<p>Oui. Vous faites correspondre les champs hubsell aux champs de votre CRM, pour que les données arrivent là où vos rapports et vos workflows les attendent.</p>",
        },
        {
          question: "Comment les appels sont-ils enregistrés dans le CRM ?",
          answer: "<p>hubsell n'a pas de logiciel d'appel intégré. Une étape téléphone dans un Flow crée une tâche d'appel dans Salesforce, HubSpot ou Pipedrive. Le commercial appelle depuis le CRM et enregistre le résultat sur la même fiche que l'activité e-mail et LinkedIn.</p>",
        },
        {
          question: "Pourquoi enregistrer automatiquement l'activité de prospection dans le CRM ?",
          answer: "<p>La saisie manuelle est lente et incomplète : les rapports de pipeline montrent ce que les commerciaux ont pensé à saisir. Quand chaque interaction est enregistrée au moment où elle a lieu, la fiche est complète et les commerciaux récupèrent ce temps. Elium a gagné environ 20 heures par semaine après être passé à hubsell.</p>",
        },
      ],
      eyebrow: "Synchronisation CRM",
      h1Pre: "LinkedIn et e-mail, ",
      h1Accent: "synchronisés avec votre CRM",
      h1Post: "",
      sub: "hubsell alimente HubSpot, Salesforce et Pipedrive, il ne les remplace pas. Vous décidez quels contacts sont transférés, à la main ou par règle, et chaque e-mail, étape LinkedIn et tâche d'appel arrive sur la bonne fiche au moment où il a lieu.",
      demoCta: "Réservez une démo",
      row: {
        titlePre: "Enregistré ",
        titleAccent: "au moment où ça se passe",
        titlePost: "",
        points: [
          "Envois, ouvertures et réponses d'e-mails, étapes LinkedIn et tâches d'appel arrivent sur la fiche du contact dans Salesforce, HubSpot ou Pipedrive.",
          "Les contacts et les entreprises sont rapprochés des fiches existantes : la synchronisation met à jour ce qui existe déjà au lieu de créer des doublons.",
          "Aucune saisie manuelle et aucun CSV entre les deux. Votre équipe travaille son pipeline, pas un tableur.",
        ],
        embed: "07-crm-sync-tracker",
        stepEyebrow: "Comment ça marche",
        stepTitle: "De l'activité à la fiche synchronisée",
      },
      gridTitlePre: "Un système de référence auquel vous pouvez ",
      gridTitleAccent: "enfin vous fier",
      gridTitlePost: "",
      blocks: [
        {
          title: "Salesforce, HubSpot et Pipedrive",
          body: "Une synchronisation native avec les trois CRM, en temps réel. Pas de middleware, pas d'exports CSV, pas de traitements nocturnes.",
        },
        {
          title: "Des rapports fidèles à la réalité",
          body: "Quand chaque activité est enregistrée au moment où elle a lieu, vos rapports de pipeline reflètent la réalité, et non ce que les commerciaux ont pensé à saisir.",
        },
        {
          title: "Des heures gagnées chaque semaine",
          body: "La saisie manuelle dans le CRM grignote discrètement le temps de vente. Le suivi automatique le rend : Elium a gagné environ 20 heures par semaine après être passé à hubsell.",
        },
        {
          title: "Les appels comme tâches CRM",
          body: "Les étapes téléphone créent des tâches que vos commerciaux traitent dans le CRM. hubsell n'a pas de logiciel d'appel intégré et n'en a pas besoin : l'appel a lieu là où se trouve la fiche.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que change le suivi automatique",
      quoteSlug: "spryker",
      storySlug: "elium",
      storyLabel: "Lire le témoignage d'Elium",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur la synchronisation CRM",
      faqSlugs: ["hubsell-crm-integration", "hubsell-replace-outbound-stack"],
      closing: {
        titlePre: "Alimentez votre CRM ",
        titleAccent: "automatiquement",
        titlePost: ".",
        sub: "Montrez-nous votre configuration CRM lors d'un court appel et nous vous montrerons précisément ce que hubsell enregistre, et où.",
      },
      closingCta: "Réservez une démo",
    },
    {
      path: "/platform/deliverability",
      title: "Délivrabilité de l'e-mail à froid : la boîte de réception | hubsell",
      metaDescription: "Envoi depuis votre boîte mail Google ou Microsoft, SPF, DKIM et DMARC configurés avec vous, plafond quotidien, plages d'envoi, contacts vérifiés le jour même.",
      heroSlice: "deliverability",
      compare: {
        eyebrow: "Délivrabilité de l'e-mail à froid",
        titlePre: "Envoi en masse face à ",
        titleAccent: "l'envoi pensé pour la boîte de réception",
        titlePost: "",
        colA: "Outils d'envoi en masse",
        colB: "hubsell",
        rows: [
          [
            "Serveur d'envoi",
            "Des serveurs SMTP externes partagés avec d'autres expéditeurs",
            "Votre propre boîte mail Google ou Microsoft, via son API",
          ],
          [
            "Authentification",
            "À vous de vous débrouiller",
            "SPF, DKIM et DMARC configurés avec l'équipe hubsell",
          ],
          [
            "Données de contact",
            "Des listes achetées il y a des mois, beaucoup d'adresses plus valides",
            "Vérifiées le jour où vous prenez contact, domaines catch-all compris",
          ],
          [
            "Volume",
            "Autant que la formule le permet, par vagues",
            "Volume faible à moyen sous un plafond quotidien, adressé aux personnes qui correspondent",
          ],
          ["Calendrier", "Envoyés dès le lancement de la campagne", "Dans les plages d'envoi que vous définissez"],
          [
            "Réponses et rejets",
            "Les relances continuent jusqu'à ce que quelqu'un les arrête",
            "Le Flow s'arrête pour ce contact en cas de réponse ou de rejet",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Placement en boîte de réception",
          pre: "Envoyé comme ",
          accent: "les boîtes de réception l'attendent",
          post: "",
        },
        explained: {
          eyebrow: "Check-list de délivrabilité",
          pre: "Ce qui garde vos e-mails ",
          accent: "hors des spams",
          post: "",
        },
        steps: {
          eyebrow: "Comment ça marche",
          pre: "Du contact vérifié ",
          accent: "à la boîte de réception",
          post: "",
        },
        extra: {
          eyebrow: "Qualité des données et délivrabilité",
          pre: "De bonnes données, c'est ",
          accent: "une bonne délivrabilité",
          post: "",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que change ",
          accent: "une meilleure délivrabilité",
          post: "",
        },
        closing: {
          eyebrow: "Délivrabilité des e-mails",
          pre: "Découvrez où ",
          accent: "arrivent vos e-mails",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur la délivrabilité",
          pre: "Questions sur ",
          accent: "la délivrabilité des e-mails",
          post: "",
        },
      },
      signals: {
        sub: "Chacun de ces points est géré dans hubsell : atteindre la boîte de réception ne dépend pas de vos commerciaux.",
        startLabel: "Protège",
        items: [
          {
            id: "email",
            title: "Votre propre boîte mail",
            body: "Les e-mails partent de votre compte Google Workspace ou Microsoft 365 via son API, et non d'un serveur partagé dont les filtres se méfient déjà.",
            start: "Votre réputation d'expéditeur",
          },
          {
            id: "clean",
            title: "SPF, DKIM et DMARC",
            body: "L'équipe hubsell configure ces trois enregistrements avec vous, pour que les fournisseurs de messagerie puissent confirmer que vos messages viennent bien de votre domaine.",
            start: "Votre domaine",
          },
          {
            id: "profile",
            title: "Des contacts vérifiés",
            body: "Chaque adresse est vérifiée le jour de son utilisation, domaines catch-all compris : peu d'e-mails sont rejetés et les fournisseurs voient une liste propre.",
            start: "Votre taux de rejet",
          },
          {
            id: "wait",
            title: "Un plafond quotidien",
            body: "Votre boîte mail envoie un nombre limité d'e-mails par jour : le volume ne grimpe jamais d'un coup et n'attire pas l'attention.",
            start: "Chaque expéditeur",
          },
          {
            id: "event",
            title: "Des plages d'envoi",
            body: "Les e-mails partent dans les heures que vous définissez, espacés sur la journée, comme lorsqu'une personne écrit.",
            start: "Votre calendrier",
          },
          {
            id: "branch",
            title: "Arrêt en cas de réponse ou de rejet",
            body: "Quand un contact répond ou qu'un e-mail est rejeté, le Flow s'arrête pour ce contact : personne ne reçoit de relance après avoir répondu.",
            start: "La bienveillance de l'acheteur",
          },
          {
            id: "ban",
            title: "Pas de redirection de suivi",
            body: "Les liens ne sont pas réécrits via un domaine de suivi : vos e-mails ressemblent à des e-mails ordinaires.",
            start: "Votre placement en boîte de réception",
          },
          {
            id: "search",
            title: "Ciblé, pas en masse",
            body: "hubsell est conçu pour un volume faible à moyen : moins d'e-mails, envoyés à des personnes qui correspondent à votre ICP et ont une raison d'avoir de vos nouvelles. Une prospection ciblée obtient des réponses, et les réponses construisent votre réputation d'expéditeur.",
            start: "Votre conversion",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Vérifier le contact",
            body: "L'e-mail professionnel est généré et validé le jour où vous prenez contact, domaines catch-all compris.",
          },
          {
            title: "Envoyer depuis votre boîte mail",
            body: "L'e-mail part de votre boîte mail connectée, dans la limite de son plafond quotidien.",
          },
          {
            title: "Respecter la plage d'envoi",
            body: "Les e-mails sont espacés dans la plage d'envoi que vous définissez, via l'API de Google ou de Microsoft.",
          },
          {
            title: "S'arrêter à la réponse",
            body: "Les réponses et les rejets mettent fin au Flow pour ce contact. Tous les autres passent à l'étape suivante.",
          },
        ],
      },
      extra: {
        title: "De bonnes données, c'est une bonne délivrabilité",
        paras: [
          "La plupart des problèmes de délivrabilité commencent avant l'envoi du premier e-mail. Les vieilles listes sont pleines de personnes qui ont changé de poste, et chaque rejet signale aux fournisseurs de messagerie que vos e-mails ne sont pas désirés.",
          "hubsell source les contacts quand vous en avez besoin et vérifie chaque e-mail le jour même : vous écrivez à des personnes qui occupent le poste aujourd'hui, à des adresses qui existent.",
          "Des données pertinentes et récentes obtiennent aussi des réponses, et les réponses sont le signal le plus fort pour un fournisseur de messagerie que vos e-mails ont leur place dans la boîte de réception.",
        ],
        links: [
          {
            label: "En savoir plus sur les données en temps réel",
            href: "/platform/live-data",
          },
          {
            label: "En savoir plus sur l'enrichissement",
            href: "/platform/enrichment",
          },
        ],
      },
      faqs: [
        {
          question: "Qu'est-ce que la délivrabilité des e-mails ?",
          answer: "<p>La délivrabilité indique si votre e-mail atteint la boîte de réception du destinataire, plutôt que le dossier spam ou nulle part. Elle dépend de votre façon d'envoyer, de la réputation de votre domaine et de la qualité des adresses auxquelles vous écrivez.</p>",
        },
        {
          question: "Pourquoi les e-mails à froid finissent-ils en spam ?",
          answer: "<p>Les causes habituelles sont les serveurs d'envoi partagés, l'absence d'enregistrements SPF, DKIM ou DMARC, les adresses qui rejettent, les pics soudains de volume et les messages auxquels personne ne répond. hubsell traite chacune de ces causes.</p>",
        },
        {
          question: "Comment hubsell protège-t-il ma délivrabilité ?",
          answer: "<p>Il envoie depuis votre propre boîte mail via l'API de Google ou de Microsoft, configure SPF, DKIM et DMARC avec vous, respecte un plafond quotidien, envoie dans vos plages horaires, s'arrête en cas de réponse ou de rejet, et vérifie chaque contact le jour de son utilisation.</p>",
        },
        {
          question: "hubsell envoie-t-il depuis ma propre boîte mail ?",
          answer: "<p>Oui. Les e-mails partent de vos boîtes mail Google Workspace ou Microsoft 365 via leurs API. Il n'y a ni serveur SMTP externe ni redirection de suivi dans l'e-mail.</p>",
        },
        {
          question: "Qui configure SPF, DKIM et DMARC ?",
          answer: "<p>L'équipe hubsell les configure avec vous pendant l'onboarding, pour que votre domaine passe les contrôles des fournisseurs de messagerie avant l'envoi de votre première campagne.</p>",
        },
        {
          question: "Y a-t-il une limite d'envoi quotidienne ?",
          answer: "<p>Oui. Votre boîte mail a un plafond quotidien. hubsell est conçu pour un volume faible à moyen : un petit nombre d'e-mails adressés à des contacts bien ciblés convertit mieux qu'un grand nombre envoyé à une liste large.</p>",
        },
        {
          question: "Puis-je choisir quand les e-mails sont envoyés ?",
          answer: "<p>Oui. Vous définissez des plages d'envoi, et les e-mails partent dans ces plages, espacés sur la journée plutôt que tous en même temps.</p>",
        },
        {
          question: "Que se passe-t-il quand un contact répond ou qu'un e-mail est rejeté ?",
          answer: "<p>Le Flow s'arrête pour ce contact. Personne ne reçoit de relance après avoir répondu, et une mauvaise adresse n'est pas réessayée.</p>",
        },
        {
          question: "Comment la qualité des données influe-t-elle sur la délivrabilité ?",
          answer: "<p>Chaque rejet nuit à votre réputation d'expéditeur. hubsell vérifie chaque e-mail le jour de son utilisation, domaines catch-all compris, et 95 % des e-mails professionnels sont exacts : bien moins d'e-mails sont rejetés. Voir <a class=\"link\" href=\"/fr/platform/enrichment/\">l'enrichissement</a>.</p>",
        },
        {
          question: "Pourquoi hubsell mise-t-il sur un volume faible à moyen ?",
          answer: "<p>Parce que la prospection ciblée convertit. Moins d'e-mails adressés à des personnes qui correspondent à votre ICP et ont une raison d'avoir de vos nouvelles obtiennent plus de réponses, et les réponses indiquent aux fournisseurs de messagerie que vos e-mails ont leur place dans la boîte de réception. Envoyer à une liste large produit l'effet inverse.</p>",
        },
      ],
      eyebrow: "Délivrabilité des e-mails",
      h1Pre: "Des e-mails à froid qui arrivent ",
      h1Accent: "dans la boîte de réception",
      h1Post: "",
      sub: "La délivrabilité commence par le choix des destinataires. hubsell garde un volume faible à moyen et ciblé, envoie depuis votre propre boîte mail avec une authentification configurée par notre équipe, respecte un plafond quotidien et une plage d'envoi, et vérifie chaque contact le jour où vous le contactez.",
      demoCta: "Réservez une démo",
      row: {
        titlePre: "Envoyé comme ",
        titleAccent: "les boîtes de réception l'attendent",
        titlePost: "",
        points: [
          "Les e-mails partent de votre propre boîte mail Google Workspace ou Microsoft 365 via son API, sans serveur externe ni redirection de suivi sur le trajet.",
          "SPF, DKIM et DMARC sont configurés avec vous par l'équipe hubsell, pour que les fournisseurs de messagerie puissent vérifier que vos e-mails viennent bien de vous.",
          "Votre boîte mail a un plafond quotidien et une plage d'envoi, et le Flow s'arrête pour un contact dès qu'il répond ou qu'un e-mail est rejeté.",
        ],
        embed: "08-deliverability",
        stepEyebrow: "Comment ça marche",
        stepTitle: "Du contact vérifié à la boîte de réception",
      },
      gridTitlePre: "Conçu pour ",
      gridTitleAccent: "être délivré",
      gridTitlePost: "",
      blocks: [
        {
          title: "Vérifié à la source",
          body: "Chaque adresse est vérifiée au moment de l'usage, et non tirée d'une liste constituée il y a des mois. Les domaines catch-all sont signalés avant l'envoi : vous dépensez vos crédits pour des contacts qui peuvent vraiment recevoir des e-mails.",
        },
        {
          title: "Envoyé depuis vos boîtes mail",
          body: "La prospection passe par les API de Google et Microsoft, directement depuis vos propres comptes. Aucun serveur tiers sur le trajet dont les filtres pourraient se méfier : vos envois ressemblent à ce qu'ils sont, de vrais e-mails envoyés par une vraie personne.",
        },
        {
          title: "Une authentification bien faite",
          body: "SPF, DKIM et DMARC sont les contrôles qu'effectuent les fournisseurs pour savoir si un e-mail vient vraiment de vous. hubsell vous guide pour configurer correctement les trois : votre domaine passe les contrôles et vos messages inspirent confiance.",
        },
        {
          title: "Un rythme maîtrisé, pas une rafale",
          body: "Le volume reste faible à moyen, sous un plafond quotidien. Un nouveau domaine construit sa réputation pas à pas au lieu de s'emballer dès le premier envoi.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que change l'arrivée en boîte de réception",
      quoteSlug: "staffbase",
      storySlug: "staffbase",
      storyLabel: "Lire le témoignage de Staffbase",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur la délivrabilité",
      faqSlugs: ["stop-sales-email-bounces", "hubsell-email-infrastructure", "hubsell-catch-all-domains"],
      closing: {
        titlePre: "Découvrez votre ",
        titleAccent: "placement en boîte de réception",
        titlePost: ", pas seulement votre taux d'ouverture.",
        sub: "Présentez-nous votre configuration d'envoi actuelle lors d'un court appel et nous vous montrerons où arrivent réellement vos e-mails, et pourquoi.",
      },
      closingCta: "Réservez une démo",
    },
    {
      path: "/platform/personalisation",
      title: "Personnalisation par signaux, e-mail et LinkedIn | hubsell",
      metaDescription: "Prospection personnalisée par signaux d'achat : l'IA de hubsell rédige chaque message à partir du signal et du site de l'entreprise, un Flow par signal.",
      heroSlice: "personalization",
      signalsAccordion: true,
      compare: {
        eyebrow: "Personnalisation de l'e-mail à froid",
        titlePre: "Publipostage ou ",
        titleAccent: "messages fondés sur des signaux",
        titlePost: "",
        colA: "Publipostage",
        colB: "hubsell",
        rows: [
          ["Point de départ", "Une liste et un modèle", "Le signal qui a placé le contact dans votre liste"],
          [
            "Ce qui est personnalisé",
            "Le prénom et le nom de l'entreprise",
            "Le message, construit sur le signal et l'entreprise",
          ],
          ["Recherche", "Faite à la main, ou pas du tout", "Le site web de l'entreprise, lu pour chaque contact"],
          ["Rédaction", "Un seul modèle pour tout le monde", "Un brouillon rédigé par IA pour chaque contact"],
          [
            "Flows",
            "Une seule campagne pour tous les leads",
            "Un Flow par signal, avec son propre message et son propre rythme",
          ],
          ["Données de base", "Des fiches anciennes et des intitulés erronés", "Vérifiées le jour où vous prenez contact"],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Personnalisation par signaux",
          pre: "Une raison d'écrire ",
          accent: "à chaque contact",
          post: "",
        },
        explained: {
          eyebrow: "Signaux de personnalisation",
          pre: "Les signaux dont ",
          accent: "partent vos messages",
          post: "",
        },
        steps: {
          eyebrow: "Comment ça marche",
          pre: "Du signal d'achat ",
          accent: "au message personnel",
          post: "",
        },
        extra: {
          eyebrow: "Personnalisation par IA",
          pre: "Une IA qui écrit ",
          accent: "à partir de faits, pas de suppositions",
          post: "",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que change ",
          accent: "une prospection personnelle",
          post: "",
        },
        closing: {
          eyebrow: "Prospection personnalisée",
          pre: "Découvrez ce que votre prospection ",
          accent: "pourrait dire",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur la personnalisation",
          pre: "Questions sur ",
          accent: "la prospection personnalisée",
          post: "",
        },
      },
      signals: {
        sub: "Chaque signal peut devenir son propre Flow, et chaque message s'ouvre sur lui.",
        startLabel: "S'ouvre sur",
        items: [
          {
            id: "post",
            title: "Engagement sur un post",
            body: "Les personnes qui ont aimé, commenté ou republié un post LinkedIn, le vôtre ou celui d'un concurrent.",
            start: "Le post et son sujet",
          },
          {
            id: "event",
            title: "Participants à un événement",
            body: "Les personnes inscrites à un événement LinkedIn de votre marché.",
            start: "L'événement auquel elles participent",
          },
          {
            id: "jobs",
            title: "Changements de poste",
            body: "Les personnes qui viennent de prendre un nouveau poste, au moment où les priorités et les budgets se décident.",
            start: "Leur nouveau poste",
          },
          {
            id: "hiring",
            title: "Signaux de recrutement",
            body: "Les entreprises qui recrutent pour des postes que votre produit soutient.",
            start: "Les postes pour lesquels elles recrutent",
          },
          {
            id: "followers",
            title: "Abonnés d'un concurrent",
            body: "Les personnes qui suivent la page entreprise d'un concurrent.",
            start: "Le problème que résout le concurrent",
          },
          {
            id: "company",
            title: "Site web de l'entreprise",
            body: "Ce que l'entreprise dit d'elle-même : ce qu'elle vend, à qui et sur quoi elle se concentre.",
            start: "Une phrase sur son activité",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Choisir le signal",
            body: "Lancez un Flow à partir d'un signal, comme un post, un événement, une recherche de recrutement ou les abonnés d'un concurrent.",
          },
          {
            title: "Qualifier et enrichir",
            body: "Chaque personne est vérifiée par rapport à votre ICP et reçoit un e-mail vérifié avant que quoi que ce soit ne soit rédigé.",
          },
          {
            title: "Lire l'entreprise",
            body: "hubsell lit le site web de l'entreprise pour comprendre ce qu'elle fait et à qui elle vend.",
          },
          {
            title: "Rédiger avec l'IA",
            body: "L'IA rédige un message pour chaque contact à partir du signal et des informations sur l'entreprise.",
          },
          {
            title: "Lancer le Flow",
            body: "Le message part comme une étape du Flow, et les étapes suivantes dépendent de ce que fait le contact.",
          },
        ],
      },
      extra: {
        title: "Une IA qui écrit à partir de faits, pas de suppositions",
        paras: [
          "Un texte d'IA générique se repère facilement. Il fait l'éloge de l'entreprise, devine ses difficultés et pourrait s'adresser à n'importe qui. Les acheteurs le reconnaissent et l'ignorent.",
          "hubsell donne des faits à l'IA : le signal, le poste actuel de la personne et ce que dit le site web de l'entreprise. Le brouillon s'appuie sur des éléments vrais et se lit comme le mot de quelqu'un qui s'est renseigné.",
          "Comme chaque contact est vérifié le jour même, les détails du message sont à jour. Personne n'est félicité pour un poste quitté il y a un an.",
        ],
        links: [
          {
            label: "En savoir plus sur les données en temps réel",
            href: "/platform/live-data",
          },
          {
            label: "En savoir plus sur la prospection multicanale",
            href: "/platform/multichannel-outreach",
          },
        ],
      },
      faqs: [
        {
          question: "Qu'est-ce que la personnalisation par signaux ?",
          answer: "<p>La personnalisation par signaux ouvre chaque message sur la raison pour laquelle vous écrivez : quelque chose que la personne ou son entreprise a fait récemment, comme interagir avec un post, changer de poste ou recruter. Elle remplace le publipostage au prénom par une vraie raison d'échanger.</p>",
        },
        {
          question: "Comment hubsell personnalise-t-il les e-mails à froid ?",
          answer: "<p>hubsell part du signal qui a placé le contact dans votre liste, lit le site web de l'entreprise et fait rédiger par l'IA un message pour chaque contact à partir de ces faits. Chaque signal peut avoir son propre Flow : le message et le rythme correspondent à la raison de la prise de contact.</p>",
        },
        {
          question: "Quels signaux hubsell peut-il utiliser pour personnaliser ?",
          answer: "<p>L'engagement sur un post LinkedIn, les participants à un événement, les changements de poste, les entreprises qui recrutent et les abonnés d'un concurrent, ainsi que ce que dit le site web de l'entreprise. Voir <a class=\"link\" href=\"/fr/platform/live-data/\">les données en temps réel</a> pour savoir comment ces contacts sont sourcés.</p>",
        },
        {
          question: "hubsell utilise-t-il l'IA pour rédiger les messages ?",
          answer: "<p>Oui. L'IA rédige un message pour chaque contact à partir du signal et du site web de l'entreprise. Elle travaille à partir de faits sur la personne et l'entreprise, pas de suppositions.</p>",
        },
        {
          question: "Que sont les Flows centrés sur un signal ?",
          answer: "<p>Au lieu d'une seule campagne pour tous les leads, chaque signal a son propre Flow. Les personnes qui ont interagi avec un post reçoivent un message, un rythme et des canaux différents de ceux des personnes dont l'entreprise recrute.</p>",
        },
        {
          question: "En quoi est-ce différent du publipostage ?",
          answer: "<p>Le publipostage insère un prénom et un nom d'entreprise dans un modèle unique. La personnalisation par signaux change le contenu du message, selon la raison pour laquelle vous écrivez à cette personne.</p>",
        },
        {
          question: "Pourquoi la personnalisation générique par IA ne fonctionne-t-elle pas ?",
          answer: "<p>Les acheteurs reconnaissent un texte d'IA écrit à partir de rien : flatteur, vague et centré sur l'expéditeur. Un texte qui s'appuie sur un vrai signal et sur l'activité réelle de l'entreprise se lit comme écrit par quelqu'un qui s'est renseigné.</p>",
        },
        {
          question: "La personnalisation aide-t-elle la délivrabilité des e-mails ?",
          answer: "<p>Oui. Les e-mails pertinents obtiennent plus de réponses, et les réponses indiquent aux fournisseurs de messagerie que vos e-mails sont désirés. Voir <a class=\"link\" href=\"/fr/platform/deliverability/\">la délivrabilité des e-mails</a>.</p>",
        },
        {
          question: "Puis-je personnaliser ma prospection à grande échelle ?",
          answer: "<p>Oui. Le signal, les informations sur l'entreprise et le brouillon sont réunis pour chaque contact : le même Flow fonctionne pour dix contacts comme pour des milliers, sans rédiger chaque message de zéro.</p>",
        },
        {
          question: "La prospection fondée sur les signaux est-elle conforme au RGPD ?",
          answer: "<p>hubsell traite les données pour une finalité que vous définissez avant le sourcing et ne les conserve pas pour les revendre. Vous restez responsable du traitement et hubsell est votre sous-traitant, dans le cadre d'un accord de traitement des données. Voir <a class=\"link\" href=\"/fr/platform/live-data/\">des données B2B conformes au RGPD</a>.</p>",
        },
      ],
      eyebrow: "Personnalisation par signaux",
      h1Pre: "Personnalisé grâce aux ",
      h1Accent: "signaux d'achat",
      h1Post: "",
      sub: "La personnalisation commence par un signal. hubsell ajoute le contexte du poste de la personne et du site web de son entreprise, fait rédiger le message par l'IA à partir des deux, et vous prenez contact avec une raison qui compte pour le lecteur. C'est ce qui obtient des réponses.",
      demoCta: "Réservez une démo",
      row: {
        titlePre: "Écrit pour ",
        titleAccent: "la personne et le moment",
        titlePost: "",
        points: [
          "Chaque message part d'une vraie raison d'écrire : le post avec lequel la personne a interagi, le poste qu'elle a pris, l'événement auquel elle s'est inscrite ou le rôle pour lequel son entreprise recrute.",
          "L'IA rédige chaque message à partir de ce signal et de ce que dit le site web de l'entreprise sur son activité.",
          "Chaque signal a son propre Flow : le message, le rythme et les canaux correspondent à la raison de votre prise de contact.",
        ],
        embed: "09-personalization",
        stepEyebrow: "Comment ça marche",
        stepTitle: "Du signal en temps réel au message qui tombe juste",
      },
      gridTitlePre: "Une pertinence qui ",
      gridTitleAccent: "suit votre croissance",
      gridTitlePost: "",
      blocks: [
        {
          title: "Au-delà du prénom",
          body: "Une vraie personnalisation utilise ce qui est vrai sur le compte : le poste, l'entreprise, le moment. hubsell s'appuie sur des données vérifiées et des signaux en temps réel, pour que le message évoque quelque chose qui compte vraiment pour le lecteur.",
        },
        {
          title: "Ancré dans des signaux en temps réel",
          body: "Un changement de poste, une levée de fonds, une vague de recrutement ou un engagement sur un sujet donnent à la prospection une véritable accroche. hubsell lit ces signaux et les exploite : le message arrive avec une raison d'être.",
        },
        {
          title: "Constant, même en volume",
          body: "Personnaliser à la main ne passe pas à l'échelle, et les champs de publipostage sonnent creux. hubsell garde chaque message pertinent, que vous en envoyiez dix ou dix mille : portée et pertinence ne s'opposent plus.",
        },
        {
          title: "Des données exactes à la base",
          body: "La personnalisation ne vaut que les données qui la portent. Comme chaque contact est vérifié à la source, les détails que vous citez sont justes : une phrase personnalisée ne tourne jamais à l'erreur d'entreprise.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que change une vraie pertinence",
      quoteSlug: "elium",
      storySlug: "elium",
      storyLabel: "Lire le témoignage d'Elium",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur la personnalisation",
      faqSlugs: ["personalize-outreach-at-scale", "hubsell-conversion-rates"],
      closing: {
        titlePre: "Découvrez une prospection ",
        titleAccent: "qui sonne personnelle",
        titlePost: ", à grande échelle.",
        sub: "Présentez-nous votre audience lors d'un court appel et nous vous montrerons à quoi ressemble pour elle une prospection personnalisée à grande échelle.",
      },
      closingCta: "Réservez une démo",
    },
    {
      path: "/platform/enrichment",
      title: "Enrichissement de contacts : e-mails et numéros vérifiés | hubsell",
      metaDescription: "Enrichissement en temps réel : e-mails professionnels exacts à 95 %, catch-all compris, numéros de partenaires de qualité. Seules les étapes réussies sont payées.",
      heroSlice: "enrichment",
      compare: {
        eyebrow: "Enrichissement de données B2B",
        titlePre: "Enrichissement par base de données face à ",
        titleAccent: "l'enrichissement en temps réel",
        titlePost: "",
        colA: "Enrichissement par base de données",
        colB: "Enrichissement en temps réel hubsell",
        rows: [
          [
            "Origine des données",
            "La base d'un fournisseur, remplie une fois et revendue",
            "Sourcées et orchestrées par hubsell le jour de l'enrichissement ; seuls les numéros de téléphone viennent de partenaires",
          ],
          [
            "Exactitude des e-mails",
            "Inconnue jusqu'au retour des rejets",
            "95 %, domaines catch-all compris",
          ],
          [
            "Noms, postes, entreprises",
            "À jour à la date de la dernière mise à jour de la fiche",
            "Exacts à 99 %, alignés sur le profil actuel",
          ],
          [
            "Domaines catch-all",
            "Souvent marqués inconnus et écartés",
            "Validés comme toutes les autres adresses",
          ],
          [
            "Ce que vous payez",
            "Une fiche, complète ou non",
            "Chaque étape réussie, en crédits",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Recherche d'e-mails et de numéros",
          pre: "Une fiche, ",
          accent: "orchestrée par hubsell",
          post: "",
        },
        explained: {
          eyebrow: "Enrichissement de données",
          pre: "L'enrichissement des données de contact, ",
          accent: "champ par champ",
          post: "",
        },
        steps: {
          eyebrow: "Comment fonctionne l'enrichissement",
          pre: "Comment une liste est ",
          accent: "enrichie, étape par étape",
          post: "",
        },
        extra: {
          eyebrow: "Vérification des e-mails",
          pre: "",
          accent: "La vérification des e-mails catch-all",
          post: ", intégrée",
        },
        proof: {
          eyebrow: "Résultats clients",
          pre: "Ce que changent ",
          accent: "des données de contact complètes",
          post: "",
        },
        closing: {
          eyebrow: "Recherche d'e-mails B2B",
          pre: "Enrichissez votre liste avec ",
          accent: "des données de contact vérifiées",
          post: ".",
        },
        faq: {
          eyebrow: "FAQ sur l'enrichissement",
          pre: "Questions sur ",
          accent: "l'enrichissement des données de contact",
          post: "",
        },
      },
      signals: {
        sub: "Chaque champ est sourcé ou généré par hubsell le jour de l'enrichissement, et vérifié avant d'arriver dans votre prospection ou votre CRM.",
        startLabel: "Exactitude",
        items: [
          {
            id: "email",
            title: "Adresses e-mail professionnelles",
            body: "hubsell génère et valide l'adresse e-mail professionnelle de chaque contact avec ses propres méthodes, au moment de l'usage. Les adresses sur des domaines catch-all sont validées elles aussi : inutile de les écarter.",
            start: "95 %, domaines catch-all compris",
          },
          {
            id: "phone",
            title: "Lignes directes et numéros mobiles",
            body: "Les lignes directes et les numéros mobiles viennent de partenaires choisis pour leur exactitude et leur qualité, pas pour leur prix. L'enrichissement téléphonique est optionnel : vous ne l'ajoutez que pour les contacts que vous prévoyez d'appeler.",
            start: "Des bases partenaires choisies pour leur qualité",
          },
          {
            id: "profile",
            title: "URL de profils LinkedIn",
            body: "Pour une liste importée, hubsell associe chaque contact à son profil LinkedIn à partir de son nom complet, du nom de son entreprise et de son poste. C'est le profil qui permet à un contact d'entrer dans les étapes LinkedIn d'un Flow.",
            start: "99 %",
          },
          {
            id: "clean",
            title: "Noms, postes et entreprises, nettoyés",
            body: "Les listes importées contiennent d'anciens intitulés, des fautes de frappe et des noms d'entreprise incohérents. hubsell nettoie et normalise chaque fiche avec l'IA et corrige ce qui a changé depuis la création de la liste.",
            start: "99 %",
          },
        ],
      },
      howSteps: {
        note: "Chaque étape est facturée en crédits, et seulement si elle réussit : une étape qui échoue ne coûte rien, tandis que les étapes déjà réalisées sont facturées.",
        items: [
          {
            title: "Sourcer les données",
            body: "Les données de chaque contact sont collectées en temps réel sur LinkedIn et les sites web des entreprises.",
          },
          {
            title: "Nettoyer et normaliser avec l'IA",
            body: "Les noms, postes et entreprises sont nettoyés et mis dans un format unique et cohérent.",
          },
          {
            title: "Compléter les données manquantes",
            body: "Les trous de la fiche sont comblés, comme un poste ou une information d'entreprise manquants.",
          },
          {
            title: "Générer et valider l'e-mail",
            body: "Les e-mails professionnels sont générés et validés avec les méthodes propres à hubsell, catch-all compris.",
          },
          {
            title: "Sourcer le numéro de téléphone",
            body: "En option : une ligne directe ou un numéro mobile fourni par un partenaire de qualité.",
          },
          {
            title: "Contrôle qualité",
            body: "Chaque fiche est contrôlée avant d'être transmise pour utilisation.",
          },
        ],
      },
      extra: {
        title: "La vérification des e-mails catch-all",
        paras: [
          "Un domaine catch-all accepte les e-mails pour n'importe quelle adresse : une vérification standard ne peut donc pas distinguer une vraie boîte mail d'une mauvaise. Les listes marquent généralement ces contacts comme inconnus, ce qui vous laisse le choix entre les écarter ou risquer des rejets.",
          "hubsell vérifie les adresses sur les domaines catch-all dans chaque enrichissement, au moment où vous utilisez les données. C'est ainsi que 95 % des e-mails qu'il fournit sont exacts, domaines catch-all compris, et que votre taux de rejet reste bas.",
        ],
        links: [
          {
            label: "Comment hubsell protège la délivrabilité",
            href: "/platform/deliverability",
          },
          {
            label: "Alternative à Lusha : la comparaison",
            href: "/vs/lusha",
          },
          {
            label: "Alternative à Seamless : la comparaison",
            href: "/vs/seamless",
          },
          {
            label: "Alternative à Apollo : la comparaison",
            href: "/vs/apollo",
          },
        ],
      },
      faqs: [
        {
          question: "Qu'est-ce que l'enrichissement des données de contact ?",
          answer: "<p>L'enrichissement des données de contact ajoute les informations manquantes à une fiche : un e-mail professionnel, un numéro de téléphone, un profil LinkedIn, ainsi qu'un poste et une entreprise à jour. hubsell enrichit chaque contact en temps réel, le jour de votre demande, et vérifie le résultat avant qu'il n'arrive dans votre prospection ou votre CRM.</p>",
        },
        {
          question: "De quoi ai-je besoin pour enrichir une liste avec hubsell ?",
          answer: "<p>Du nom complet, du nom de l'entreprise et du poste de chaque contact. À partir de là, hubsell source les données de la personne en temps réel, les nettoie et les normalise avec l'IA, comble les trous, génère et valide l'e-mail professionnel et, si vous le souhaitez, ajoute un numéro de téléphone. Chaque fiche passe un contrôle qualité avant que vous ne l'utilisiez.</p>",
        },
        {
          question: "Quelle est l'exactitude de l'enrichissement hubsell ?",
          answer: "<p>95 % des adresses e-mail professionnelles sont exactes, domaines catch-all compris. Les noms, postes, entreprises et profils LinkedIn sont exacts à 99 %. Les numéros de téléphone viennent de bases partenaires : hubsell ne donne donc pas de chiffre d'exactitude unique pour eux, mais ces partenaires sont choisis pour leur exactitude et leur qualité, pas pour leur prix.</p>",
        },
        {
          question: "hubsell peut-il vérifier les adresses e-mail sur des domaines catch-all ?",
          answer: "<p>Oui. Un domaine catch-all accepte les e-mails pour n'importe quelle adresse : une vérification standard ne peut donc pas distinguer une vraie boîte mail d'une mauvaise. hubsell vérifie aussi les adresses sur les domaines catch-all, et elles sont comprises dans le taux d'exactitude de 95 %.</p>",
        },
        {
          question: "hubsell trouve-t-il des numéros mobiles et des lignes directes ?",
          answer: "<p>Oui, les deux. Les numéros de téléphone viennent de partenaires choisis pour leur exactitude et leur qualité plutôt que pour leur prix. L'enrichissement téléphonique est optionnel : vous ne l'ajoutez que pour les contacts que vous prévoyez d'appeler.</p>",
        },
        {
          question: "Comment hubsell facture-t-il l'enrichissement ?",
          answer: "<p>L'enrichissement est facturé en crédits pour chaque étape réussie. Sourcer un contact coûte 1 crédit, un e-mail professionnel validé 5 (domaines catch-all compris) et un numéro de téléphone 5. Si une étape échoue, elle ne coûte rien ; les étapes déjà réalisées sont facturées. <a class=\"link\" href=\"/fr/pricing/\">Découvrez les tarifs</a>.</p>",
        },
        {
          question: "D'où viennent les données d'enrichissement de hubsell ?",
          answer: "<p>hubsell source et orchestre lui-même les données, en temps réel sur LinkedIn et les sites web des entreprises, et génère et valide les adresses e-mail professionnelles avec ses propres méthodes. Il ne fait pas passer vos contacts par les bases d'autres fournisseurs. Seuls les numéros de téléphone viennent de partenaires, choisis pour leur exactitude et leur qualité.</p>",
        },
        {
          question: "En quoi l'enrichissement en temps réel diffère-t-il de l'enrichissement à partir d'une base B2B ?",
          answer: "<p>Une base de données enrichit votre liste à partir de fiches collectées plus tôt : les informations peuvent dater de plusieurs mois ou années. hubsell recherche chaque contact le jour de l'enrichissement : le poste, l'entreprise et l'e-mail sont à jour quand vous les utilisez.</p>",
        },
        {
          question: "Les contacts enrichis peuvent-ils aller directement dans la prospection et dans mon CRM ?",
          answer: "<p>Oui. Les contacts enrichis entrent directement dans vos Flows LinkedIn, e-mail et appels dans hubsell et se synchronisent avec Salesforce, HubSpot ou Pipedrive, sans export ni nettoyage. Voir <a class=\"link\" href=\"/fr/platform/multichannel-outreach/\">la prospection multicanale</a> et <a class=\"link\" href=\"/fr/platform/crm-sync/\">la synchronisation CRM</a>.</p>",
        },
        {
          question: "Les données enrichies sont-elles conformes au RGPD ?",
          answer: "<p>Oui. hubsell enrichit les données au cas par cas pour chaque client et ne les conserve pas pour les revendre. Vous restez responsable du traitement et hubsell est sous-traitant, dans le cadre d'un accord de traitement des données. En savoir plus sur <a class=\"link\" href=\"/fr/platform/live-data/#pf-extra\">des données B2B conformes au RGPD</a>.</p>",
        },
      ],
      eyebrow: "Enrichissement des données de contact",
      h1Pre: "L'enrichissement des données de contact, ",
      h1Accent: "vérifié aujourd'hui",
      h1Post: "",
      sub: "Une fiche contact à moitié remplie bloque la prospection. À partir d'un nom complet, d'une entreprise et d'un poste, hubsell source les données de la personne en temps réel, les nettoie avec l'IA, comble les trous, puis ajoute un e-mail professionnel validé et, si vous le souhaitez, un numéro de téléphone.",
      demoCta: "Réservez une démo",
      row: {
        titlePre: "Une fiche, ",
        titleAccent: "orchestrée par hubsell",
        titlePost: "",
        points: [
          "hubsell source et orchestre lui-même chaque champ : profil, poste et entreprise depuis LinkedIn et les sites web des entreprises, et e-mails professionnels générés et validés avec ses propres méthodes.",
          "Seuls les numéros de téléphone viennent de partenaires, choisis pour leur exactitude et leur qualité plutôt que pour leur prix.",
          "Chaque fiche passe un contrôle qualité avant d'être transmise : elle est exacte le jour où vous l'utilisez.",
        ],
        embed: "10-enrichment",
        stepEyebrow: "Comment ça marche",
        stepTitle: "D'une ligne incomplète à une fiche complète et vérifiée",
      },
      gridTitlePre: "Des fiches ",
      gridTitleAccent: "complètes et à jour",
      gridTitlePost: "",
      blocks: [
        {
          title: "Plusieurs sources, une seule fiche",
          body: "hubsell interroge plusieurs sources en temps réel l'une après l'autre : quand l'une est insuffisante, une autre comble le manque. Le résultat est un contact complet, et non une ligne où manquent les champs importants.",
        },
        {
          title: "Vérifié au moment de l'usage",
          body: "Un enrichissement sans vérification remplit les champs de suppositions périmées. hubsell contrôle la fiche finale au moment où vous l'utilisez, domaines catch-all compris : une fiche complète est aussi une fiche exacte.",
        },
        {
          title: "Pas de base qui se dégrade",
          body: "Une liste enrichie statique commence à se dégrader le jour de sa création. hubsell enrichit en temps réel, le jour de votre demande : vous ne payez pas pour compléter des fiches collectées il y a des années et dépassées depuis.",
        },
        {
          title: "Prêt pour la prospection",
          body: "Une fiche complète et vérifiée entre directement dans vos Flows et votre CRM. Pas d'export, pas de nettoyage, pas de deuxième outil : les données que vous enrichissez sont celles que vous utilisez pour écrire.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Ce que changent des données complètes",
      quoteSlug: "verhaert",
      storySlug: "verhaert",
      storyLabel: "Lire le témoignage de Verhaert",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur l'enrichissement",
      faqSlugs: ["build-b2b-audience-no-decay", "third-party-intent-data-accuracy"],
      closing: {
        titlePre: "Découvrez votre liste ",
        titleAccent: "complétée et vérifiée",
        titlePost: ".",
        sub: "Envoyez-nous un échantillon de vos données lors d'un court appel et nous vous montrerons ce que donne l'enrichissement en temps réel.",
      },
      closingCta: "Réservez une démo",
    },
  ],
};
