// Homepage copy: French (France), "vous". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const homeFr: {
  steps: PipelineStep[]; features: Feature[]; roles: Role[]; testimonials: Testimonial[];
  insights: Insight[]; comparison: ComparisonData; faqs: Faq[]; s: HomeStrings;
} = {
  steps: [
    {
      n: "01",
      label: "Données en temps réel",
      title: "Trouvez les ",
      titleAccent: "bonnes personnes",
      tail: ", pas seulement les bons filtres",
      points: [
        "La plupart des plateformes vous laissent filtrer par poste et par secteur.",
        "hubsell source à partir de signaux comportementaux en temps réel : les personnes qui suivent la page d'une entreprise, réagissent à un post LinkedIn, changent de poste, participent à des événements ou recrutent pour des postes précis.",
        "Chaque contact qui entre dans votre Flow correspond à votre ICP et est validé au moment de l'usage.",
      ],
      cta: "Sourcez vos données",
      more: "Découvrir les données en temps réel",
      embed: "05-sp-widget",
      flip: false,
    },
    {
      n: "02",
      label: "Prospection multicanale",
      title: "Pilotez un seul ",
      titleAccent: "Flow multicanal coordonné",
      tail: "",
      points: [
        "Glissez-déposez des étapes e-mail, LinkedIn et téléphone dans un seul Flow.",
        "Visites de profil, demandes de connexion, messages directs, InMail et tâches d'appel, tous coordonnés avec le rythme de vos e-mails.",
        "Des conditions de branchement orientent automatiquement les contacts selon leurs actions : chaque chemin est géré sans intervention manuelle.",
      ],
      cta: "Réservez une démo",
      more: "Découvrir la prospection multicanale",
      embed: "06-multichannel-flow",
      recolor: "espresso",
      flip: true,
    },
    {
      n: "03",
      label: "Synchronisation CRM automatique",
      title: "Enregistrez chaque activité ",
      titleAccent: "dans votre CRM en temps réel",
      tail: "",
      points: [
        "Chaque point de contact (envoyé, ouvert, répondu, connecté) est enregistré automatiquement dans Salesforce, HubSpot ou Pipedrive.",
        "Aucune saisie manuelle. Aucune donnée qui se dégrade. Votre équipe travaille son pipeline, pas un tableur.",
      ],
      cta: "Voir en direct",
      more: "Découvrir la synchronisation CRM",
      embed: "07-crm-sync-tracker",
      recolor: "espresso",
      flip: false,
    },
  ],
  features: [
    {
      title: "Données de prospects sourcées en temps réel",
      body: "Remplacez les bases de données statiques par des contacts sourcés en temps réel et alignés sur votre ICP. Pas de données périmées, pas de budget de prospection gaspillé.",
    },
    {
      title: "E-mail, LinkedIn et téléphone dans un seul Flow",
      body: "Pilotez l'e-mail, LinkedIn et le téléphone comme un seul Flow coordonné, pas comme des outils séparés. Visites de profil, demandes de connexion, messages directs, InMail et tâches d'appel partent tous d'un seul Flow.",
    },
    {
      title: "Qualification et routage par IA",
      body: "Utilisez l'IA pour qualifier les contacts selon votre ICP et les orienter automatiquement vers le bon Flow, avant de dépenser le moindre crédit en prospection.",
      beta: true,
    },
    {
      title: "Couverture du comité d'achat",
      body: "Touchez chaque décideur d'un compte cible par e-mail et sur LinkedIn depuis une seule campagne. Sans changer d'outil.",
    },
    {
      title: "Prospection intelligente multi-expéditeurs",
      body: "Répartissez la prospection en toute sécurité entre les profils du CEO, du VP Sales et d'experts métier pour multiplier votre portée sans griller aucun expéditeur.",
    },
    {
      title: "Vérification des domaines catch-all",
      body: "Notre validation propriétaire vérifie les domaines catch-all et protège votre réputation d'expéditeur contre les rejets définitifs et les listes noires.",
    },
    {
      title: "Transformez vos contenus LinkedIn en pipeline",
      body: "Publiez un post LinkedIn et interagissez automatiquement avec toutes les personnes qui l'aiment, le commentent ou le republient. Ces signaux chauds deviennent du pipeline avant que vos concurrents ne s'en emparent.",
      beta: true,
    },
    {
      title: "Ciblage par intention et par signaux",
      body: "Repérez les 5 % d'acheteurs en phase d'achat grâce aux signaux d'intention en temps réel, et orientez-les automatiquement vers des Flows ciblés.",
      beta: true,
    },
  ],
  roles: [
    {
      title: "Ventes",
      line: "Sourcez, prospectez et concluez depuis un seul espace de travail. Sans jongler entre les onglets.",
    },
    {
      title: "Fondateurs",
      line: "Menez une prospection outbound portée par les fondateurs qui fonctionne, sans recruter d'équipe SDR.",
    },
    {
      title: "Sales operations",
      line: "Un seul système de référence, synchronisé automatiquement avec votre CRM.",
    },
    {
      title: "RevOps",
      line: "Des données propres et validées, en entrée comme en sortie. Aucun nettoyage manuel.",
    },
    {
      title: "Marketing",
      line: "Transformez la demande LinkedIn en pipeline qualifié et mesurable.",
    },
    {
      title: "GTM Engineers",
      line: "Combinez données en temps réel, Flows multicanaux et routage au même endroit.",
    },
  ],
  testimonials: [
    {
      quote: "L'automatisation de hubsell offre un rendement maximal pour un effort minimal en collecte de données et en prospection à froid. Leurs fonctionnalités de prospection sont excellentes.",
      name: "Richard Wood",
      title: "CEO",
      company: "Safran Software",
      slug: "safran",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp",
      results: [
        {
          metric: "30 %",
          label: "de baisse du coût d'acquisition client",
        },
        {
          metric: "1 000+",
          label: "comptes avec une notoriété accrue",
        },
        {
          metric: "25 h",
          label: "gagnées chaque semaine",
        },
      ],
    },
    {
      quote: "Grâce à hubsell, nous touchons plus de personnes en moins de temps, tout en communiquant de façon très personnalisée, comme nous le ferions manuellement.",
      name: "Laurent Schauvliege",
      title: "Business Manager",
      company: "Verhaert",
      slug: "verhaert",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif",
      results: [
        {
          metric: "x3",
          label: "d'opportunités générées",
        },
        {
          metric: "60 %",
          label: "de taux d'ouverture, voire plus",
        },
        {
          metric: "90 %+",
          label: "de personnalisation",
        },
      ],
    },
    {
      quote: "hubsell est bien plus qu'un simple fournisseur : l'équipe peut vraiment devenir votre partenaire et vous aider dans toute votre démarche.",
      name: "Peter Mallozzi",
      title: "Outbound Sales",
      company: "Staffbase",
      slug: "staffbase",
      image: "https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png",
      results: [
        {
          metric: "15,6 %",
          label: "de réponses sur différents marchés",
        },
        {
          metric: "3,5 %",
          label: "de taux d'engagement débouchant sur un appel",
        },
        {
          metric: "15",
          label: "marchés ciblés avec succès",
        },
      ],
    },
    {
      quote: "Je recommande hubsell comme partenaire si vous cherchez à obtenir de vrais résultats en vente et en marketing outbound avec une équipe réduite.",
      name: "Rachel Chan",
      title: "Digital Marketing Team Lead",
      company: "Elium",
      slug: "elium",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif",
      results: [
        {
          metric: "25 %",
          label: "de hausse de la génération de leads",
        },
        {
          metric: "53 %",
          label: "de taux d'ouverture, voire plus",
        },
        {
          metric: "20 h+",
          label: "gagnées chaque semaine",
        },
      ],
    },
    {
      quote: "Je n'ai découvert aucun outil qui approche hubsell en matière de segmentation, de détection des réponses et d'intégrations avec les réseaux sociaux et les CRM.",
      name: "Mark Grasmayer",
      title: "Product Evangelist",
      company: "Workspace 365",
      slug: "workspace365",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif",
      results: [
        {
          metric: "100+",
          label: "nouvelles opportunités commerciales générées",
        },
        {
          metric: "71 %",
          label: "de taux d'ouverture, voire plus",
        },
        {
          metric: "33 %",
          label: "de réduction des coûts d'acquisition client",
        },
      ],
    },
    {
      quote: "hubsell nous aide à générer des interactions avec des prospects de secteurs variés, ce qui est essentiel à nos efforts d'expansion.",
      name: "Eylül Eygi",
      title: "Head of Marketing",
      company: "Sensolus",
      slug: "sensolus",
      image: "https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png",
      results: [
        {
          metric: "30 %",
          label: "de réduction du CAC",
        },
        {
          metric: "22 %",
          label: "de taux de réponse",
        },
        {
          metric: "61 %",
          label: "de taux d'ouverture",
        },
      ],
    },
  ],
  insights: [
    {
      title: "La vente commence par un non : une leçon sur le traitement des objections",
      excerpt: "Pourquoi « la vente commence par un non », les vraies raisons pour lesquelles les prospects vous disent non, et trois stratégies pour transformer un refus en affaire conclue.",
      slug: "the-sale-starts-with-a-no-objection-handling",
      image: "https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png",
    },
    {
      title: "Sept méthodes pour augmenter la productivité de vos commerciaux",
      excerpt: "Les principaux facteurs qui rendent une équipe commerciale inefficace, et sept méthodes éprouvées pour produire plus sans épuiser l'équipe.",
      slug: "methods-increase-productivity-salespeople",
      image: "https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png",
    },
    {
      title: "Pourquoi la génération de leads doit être un processus qualitatif",
      excerpt: "Passer de la quantité à la qualité dans l'outbound automatisé : les dangers du spam, l'importance de données exactes et des e-mails qui inspirent confiance.",
      slug: "why-automated-lead-generation-needs-to-be-a-qualitative-process",
      image: "https://assets.hubsell.com/insights/69e9ef6291a191221bc032dc_Thumbnail-Why-lead-generation-needs-to-be-a-qualitative-process.png",
    },
  ],
  comparison: {
    heads: {
      hub: {
        label: "hubsell",
      },
      aio: {
        label: "Plateformes tout-en-un",
        href: "/vs/apollo",
      },
      data: {
        label: "Bases de données grands comptes",
        href: "/vs/zoominfo",
      },
      lookup: {
        label: "Outils de recherche de contacts",
        href: "/vs/lusha",
      },
    },
    rows: [
      {
        label: "Données en temps réel et validées",
        cells: {
          hub: ["yes", "Sourcées en temps réel, vérifiées au moment de l'usage"],
          aio: ["part", "Base préconstituée d'environ 275 millions de contacts"],
          data: ["part", "Grande base de données statique"],
          lookup: ["part", "Recherches de contacts ponctuelles"],
        },
      },
      {
        label: "E-mail, LinkedIn et téléphone, un seul Flow",
        cells: {
          hub: ["yes", "Un seul Flow, appels en tâches CRM"],
          aio: ["part", "E-mail automatisé, LinkedIn manuel"],
          data: ["no", "Prospection vendue séparément"],
          lookup: ["no", "Aucune fonction de prospection"],
        },
      },
      {
        label: "Synchronisation CRM automatique",
        cells: {
          hub: ["yes", "Salesforce, HubSpot et Pipedrive"],
          aio: ["part", "Native avec Salesforce et HubSpot"],
          data: ["part", "Native avec les principaux CRM"],
          lookup: ["part", "Basique, souvent via Zapier"],
        },
      },
      {
        label: "Vous payez ce qui est exact",
        cells: {
          hub: ["yes", "Par contact sourcé et validé"],
          aio: ["no", "Par licence, plus des crédits"],
          data: ["no", "Contrats annuels à cinq chiffres"],
          lookup: ["part", "Crédits dépensés même sur les mauvais résultats"],
        },
      },
      {
        label: "Une plateforme, pas un empilement d'outils",
        cells: {
          hub: ["yes", "Données, prospection et synchro réunies"],
          aio: ["part", "Deux des trois briques"],
          data: ["no", "Données uniquement"],
          lookup: ["no", "Une seule brique"],
        },
      },
    ],
  },
  faqs: [
    {
      question: "hubsell peut-il remplacer mon stack outbound actuel ?",
      slug: "hubsell-replace-outbound-stack",
      answer: "<p>Pour la plupart des équipes, oui. hubsell remplace votre outil de sales intelligence, votre plateforme de sales engagement et votre prospection LinkedIn manuelle, sur une seule plateforme. La plupart des équipes qui changent résilient 2 à 3 abonnements d'outils en moins de 30 jours. La seule chose que hubsell ne remplace pas, c'est votre CRM : il s'y synchronise.</p>",
      onHomepage: true,
    },
    {
      question: "Devons-nous créer les campagnes nous-mêmes, ou hubsell propose-t-il un accompagnement à la prise en main et à la stratégie ?",
      slug: "hubsell-onboarding-strategy",
      answer: "<p>Nous ne nous contentons pas de vous donner un identifiant en vous souhaitant bonne chance. Notre équipe prend en charge toute la mise en place des campagnes, le sourcing des données et la configuration des Flows, pour que vous lanciez votre première campagne outbound en moins de 7 jours, puis que vous continuiez à l'améliorer.</p>",
      onHomepage: true,
    },
    {
      question: "hubsell s'intègre-t-il directement à notre CRM actuel ?",
      slug: "hubsell-crm-integration",
      answer: "<p>Nous ne remplaçons pas votre système de référence : nous le renforçons. Toutes les activités, y compris les e-mails envoyés, les demandes de connexion LinkedIn, les visites de profil et les réponses, sont enregistrées automatiquement dans Salesforce, HubSpot ou Pipedrive, ce qui supprime les silos de données pour votre équipe commerciale.</p>",
      onHomepage: true,
    },
    {
      question: "Comment prospecter sur LinkedIn en toute sécurité sans être restreint ?",
      slug: "safely-outreach-linkedin",
      answer: "<p>Le problème, c'est la concentration de l'activité sur une courte période, qui déclenche les algorithmes de sécurité de LinkedIn. hubsell développe lentement et sûrement votre réseau de premier niveau 365 jours par an, dans les strictes limites de la plateforme. La limite de LinkedIn pour les messages directs est bien plus élevée.</p>",
      onHomepage: true,
    },
    {
      question: "Comment générer des leads quand nos comptes cibles ne cherchent pas activement notre logiciel ?",
      slug: "generate-leads-out-of-cycle",
      answer: "<p>La plupart des acheteurs sont liés par un contrat ou hors de leur cycle d'achat. Si vous leur présentez votre offre, ils vous ignorent. Adoptez plutôt une stratégie de connexion « toujours active » pour partager du contenu utile, des analyses du secteur et des invitations à des événements. En apportant dès maintenant de la valeur d'égal à égal, vous faites en sorte que votre équipe soit la première qu'ils appellent quand leur fenêtre d'achat s'ouvre vraiment.</p>",
      onHomepage: true,
    },
    {
      question: "Comment hubsell se compare-t-il à Outreach ou Salesloft ?",
      slug: "hubsell-vs-outreach-salesloft",
      answer: "<p>Outreach et Salesloft sont des outils de séquences d'e-mails : ils ne sourcent pas de données et ne gèrent pas LinkedIn nativement. Il vous faut encore un fournisseur de données séparé et un processus LinkedIn manuel. hubsell couvre les trois couches : des données de prospects en temps réel, des Flows e-mail et LinkedIn coordonnés, avec des tâches d'appel, et une synchronisation CRM automatique. Une plateforme, un abonnement. Découvrez <a href=\"/fr/comparisons/\">comment hubsell se compare</a> à Apollo, ZoomInfo, Cognism, Lusha et Seamless.</p>",
      onHomepage: true,
    },
    {
      question: "En quoi hubsell diffère-t-il des bases de données B2B statiques comme ZoomInfo ou Apollo ?",
      slug: "hubsell-catch-all-domains",
      answer: "<p>La plupart des outils de sales intelligence vous remettent un export statique et laissent la prospection à une autre plateforme. hubsell source les contacts en temps réel au moment de votre demande, puis vous permet de les contacter par e-mail, LinkedIn et téléphone et de tout synchroniser avec votre CRM, sans changer d'outil. Pas de base qui se dégrade, pas d'outils assemblés tant bien que mal. Comparez en détail : <a href=\"/fr/vs/zoominfo/\">alternative à ZoomInfo</a> et <a href=\"/fr/vs/apollo/\">alternative à Apollo</a>.</p>",
      onHomepage: true,
    },
    {
      question: "hubsell est-il conforme au RGPD ?",
      slug: "hubsell-gdpr-compliance",
      answer: "<p>Oui. hubsell est basé à Berlin, en Allemagne. Nous respectons strictement le RGPD et des normes élevées de protection des données, pour que toutes les activités de prospection soient conformes à la réglementation.</p>",
      onHomepage: true,
    },
    {
      question: "Quelle est la meilleure façon de constituer une audience B2B qui ne se dégrade pas avec le temps ?",
      slug: "build-b2b-audience-no-decay",
      answer: "<p>Les adresses e-mail appartiennent à l'employeur : les listes perdent donc environ 30 % par an, à mesure que les gens changent d'emploi. Les connexions LinkedIn sont liées à la personne et la suivent. Constituez votre audience sous forme de réseau LinkedIn de premier niveau : chaque changement de poste devient alors une porte d'entrée chaleureuse vers un nouveau compte, au lieu d'un contact perdu.</p>",
      onHomepage: true,
    },
    {
      question: "Quels taux de conversion (acceptation, réponses et engagement) pouvons-nous attendre avec hubsell ?",
      slug: "hubsell-conversion-rates",
      answer: "<p>En suivant correctement la méthode hubsell, vous pouvez compter sur 25 à 40 % de taux d'acceptation, 10 à 15 % de taux de réponse et 3 à 5 % de conversations engagées. Les conversions sont plus élevées quand les profils d'expéditeurs ne sont pas trop commerciaux.</p>",
      onHomepage: true,
    },
  ],
  s: {
    hero: {
      eyebrow: "Pour les fondateurs et directeurs commerciaux qui utilisent plus de 6 outils",
      titlePre: "Générez le même pipeline avec ",
      titleAccent: "50 fois moins",
      titlePost: " de prospects.",
      sub: "hubsell source des contacts en temps réel à partir de signaux d'achat, puis pilote l'e-mail, LinkedIn et le téléphone dans un seul Flow synchronisé avec votre CRM. Moins de personnes contactées, autant de rendez-vous obtenus.",
      ctaPrimary: "Réservez une démo",
      stats: [
        {
          value: "30 %",
          label: "de coût d'acquisition en moins",
          company: "Safran",
        },
        {
          value: "x3",
          label: "d'opportunités",
          company: "Verhaert",
        },
        {
          value: "25 %",
          label: "de leads en plus",
          company: "Elium",
        },
      ],
    },
    logos: {
      eyebrow: "Trois de ces équipes ont réduit leur coût d'acquisition client de 30 % ou plus",
      aria: "Logos d'entreprises qui utilisent hubsell : Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall et Monotype",
    },
    vvp: {
      eyebrow: "Volume ou précision",
      titlePre: "Les mêmes 42 opportunités. ",
      titleAccent: "L'une des approches vous coûte tout votre marché.",
      titlePost: "",
      lede: "Les deux trimestres se terminent avec le même pipeline. La différence : la part de votre marché que chacun consomme, et s'il reste encore quelqu'un à qui parler au deuxième trimestre.",
      volTag: "Gros volume",
      volTitle: "Envoyer à tout le TAM",
      volSub: "Liste achetée, domaines jetables, e-mail uniquement, chaque contact du marché, chaque trimestre.",
      volAria: "Une grille représentant 100 000 prospects. Chaque point devient rouge à mesure que tout le marché est contacté.",
      preTag: "Prospection ciblée",
      preTitle: "Envoyer à 2 % du TAM",
      preSub: "Sourcé en temps réel sur des signaux d'achat, vrai domaine, e-mail, LinkedIn et téléphone dans un seul Flow.",
      preAria: "La même grille de 100 000 prospects. Seuls quelques points deviennent verts : 2 000 prospects touchés.",
      dotCaption: "1 point = 100 prospects",
      contactsLabel: "prospects contactés",
      oppsLabel: "opportunités",
      volChain: "100 000 envoyés · 80 000 délivrés · 64 000 bonnes personnes · 25 600 ouvertures · 768 en phase d'achat · 77 positifs · 42 opportunités",
      preChain: "2 000 sourcés · 1 960 délivrés · 1 921 bonnes personnes · 1 537 touchés · 307 en phase d'achat · 77 positifs · 42 opportunités",
      volAfter: "0 % de votre marché restant. Au deuxième trimestre, vous écrivez de nouveau aux mêmes boîtes de réception.",
      preAfter: "98 % de votre marché encore intact. Vous pouvez recommencer le trimestre suivant.",
      kickerLabel: "Prospects nécessaires par opportunité",
      vs: "vs",
      kickerXPost: " fois moins",
      noteVolLabel: "Gros volume :",
      noteVolBody: "20 % de rejets, 20 % de mauvaises personnes, 40 % d'ouvertures, 3 % d'un marché est en cycle d'achat à un moment donné, 10 % d'entre eux font assez confiance à un expéditeur inconnu pour répondre, 55 % des réponses positives deviennent des opportunités.",
      notePreLabel: "Prospection ciblée :",
      notePreBody: "98 % de contacts valides au moment de l'usage, 80 % touchés par e-mail, LinkedIn et téléphone, 20 % en phase d'achat car la liste est sourcée sur des signaux d'achat, 25 % de réponses, et les mêmes 55 % transformés en opportunités.",
    },
    frag: {
      eyebrow: "Le problème du stack fragmenté",
      titlePre: "Six outils dans votre stack. Six factures. ",
      titleAccent: "Et aucun ne communique avec les autres.",
      titlePost: "",
      lede: "En moyenne, une équipe commerciale achète six outils pour faire un seul travail. Voici ce que chacun vous coûte, et ce que hubsell fait à la place.",
      colTool: "Ce que vous achetez",
      colHub: "Ce que fait hubsell",
      pairs: [
        {
          tool: "Bases de leads",
          cost: "Les données se dégradent de 30 % par an. Des trous dans la couverture de votre ICP.",
          cap: "Sourcing en temps réel",
          capDesc: "Construit selon votre ICP, le jour où vous en avez besoin.",
        },
        {
          tool: "Outils de recherche d'e-mails",
          cost: "Plusieurs fournisseurs à gérer. Assemblage manuel, aucun Flow.",
          cap: "Validé au moment de l'usage",
          capDesc: "Nettoyé par l'IA, vérifié par l'humain.",
        },
        {
          tool: "Outils d'intention d'achat",
          cost: "Aucune action native. Les signaux ne déclenchent jamais de prospection.",
          cap: "Combinaison de signaux",
          capDesc: "Des acheteurs en phase d'achat, repérés via les changements de poste et les événements.",
        },
        {
          tool: "Outils d'e-mails à froid",
          cost: "L'e-mail fonctionne en silo. LinkedIn est un outil à part.",
          cap: "E-mail et LinkedIn dans un seul Flow",
          capDesc: "Un seul Flow coordonné.",
        },
        {
          tool: "Prospection LinkedIn",
          cost: "Une solution isolée. Aucun lien avec les séquences d'e-mails.",
          cap: "Chaque décideur, une seule campagne",
          capDesc: "Tout le comité d'achat, pas une seule personne.",
        },
        {
          tool: "Administration du CRM",
          cost: "Les commerciaux saisissent à la main, ou pas du tout. Un CRM jamais à jour.",
          cap: "CRM synchronisé",
          capDesc: "Enregistré automatiquement dans Salesforce, HubSpot et Pipedrive.",
        },
      ],
      cta: "Unifiez votre stack dès aujourd'hui",
    },
    zds: {
      eyebrow: "Sourcing « jour zéro »",
      titlePre: "Des données B2B sourcées ",
      titleAccent: "au moment où vous en avez besoin",
      titlePost: ". Pas au moment où quelqu'un d'autre les a collectées.",
      sub: "hubsell ne vend pas une base de données périmée. Dès que vous définissez votre ICP, nous sourçons en temps réel sur LinkedIn, selon vos critères, avec une validation au moment de l'usage. hubsell est basé à Berlin et conforme au RGPD.",
      closer: "Vous payez un contact exact aujourd'hui, pas l'accès à 300 millions de contacts qui étaient justes il y a deux ans.",
      cta: "Découvrez notre méthode",
    },
    ratings: {
      titlePre: "Noté ",
      titleAccent: "4,6+",
      titlePost: " sur G2, Capterra et GetApp",
      cue: "Lire les avis →",
      aria: (platform2, score, out) => `Lire les avis sur hubsell sur ${platform2} (note de ${score}${out})`,
    },
    pipeline: {
      eyebrow: "Le pipeline en trois étapes",
      titlePre: "De ",
      titleAccent: "l'inscription au rendez-vous",
      titlePost: " en trois étapes.",
    },
    pricing: {
      eyebrow: "Tarifs",
      titlePre: "Des formules pour ",
      titleAccent: "les fondateurs et les équipes commerciales",
      titlePost: "",
    },
    usecases: {
      eyebrow: "Cas d'usage",
      titlePre: "",
      titleAccent: "Une seule plateforme",
      titlePost: " pour votre démarche GTM",
      sub: "Quelle que soit votre place dans l'équipe commerciale, hubsell remplace la multiplication des outils par une seule démarche coordonnée.",
    },
    featuresSec: {
      eyebrow: "La plateforme",
      titlePre: "Données en temps réel, e-mail et LinkedIn orchestrés ",
      titleAccent: "dans une seule solution",
      titlePost: "",
      beta: "Bêta",
      comingSoon: "Bientôt disponible",
    },
    testimonialsSec: {
      eyebrow: "Témoignages clients",
      titlePre: "Ce qui se passe quand ",
      titleAccent: "les équipes B2B",
      titlePost: " remplacent leur stack",
      readPre: "Lire le témoignage de ",
      readPost: " →",
    },
    loop: {
      eyebrow: "Publier et suivre · Bêta",
      titlePre: "Vos contenus LinkedIn génèrent déjà de la demande. Il est temps de ",
      titleAccent: "boucler la boucle",
      titlePost: ".",
      body: "La plupart des démarches outbound partent à froid. Mais tous ceux qui aiment, commentent ou republient vos contenus LinkedIn ont déjà levé la main. Vous pouvez dès aujourd'hui importer dans hubsell les personnes qui réagissent à vos posts et les inscrire dans un Flow. Ce qui arrive en bêta, c'est la boucle complète : publiez directement depuis hubsell, suivez chaque interaction en temps réel et inscrivez automatiquement chaque personne dans un Flow chaud, sans jamais exporter de liste ni changer d'onglet.",
      cta: "Réservez une démo",
      nowLabel: "Disponible aujourd'hui",
      betaLabel: "Bientôt en bêta",
      now: [
        "Importez tous ceux qui aiment, commentent ou republient",
        "Inscrivez dès aujourd'hui dans un Flow les personnes qui réagissent à vos posts",
      ],
      beta: [
        "Publiez directement depuis hubsell",
        "Suivez chaque interaction en temps réel",
        "Inscrivez automatiquement chaque personne dans un Flow chaud",
        "Sans exporter de liste, sans changer d'onglet",
      ],
    },
    insightsSec: {
      newsTitle: "Ce qui fonctionne en outbound en ce moment",
      newsSub: "Méthodes, délivrabilité et stratégie outbound, directement dans votre boîte de réception.",
      subscribeLabel: "S'abonner",
      emailPlaceholder: "Votre e-mail",
      eyebrow: "Insights",
      titlePre: "",
      titleAccent: "Méthodes",
      titlePost: " et analyses pour la vente outbound B2B",
      readMore: "Plus d'insights (en anglais) →",
      cardTag: "Vente B2B",
    },
    cmp: {
      eyebrow: "Pourquoi hubsell",
      titlePre: "La plupart des outils s'arrêtent aux données. ",
      titleAccent: "hubsell va plus loin.",
      titlePost: "",
      sub: "hubsell source des contacts en temps réel, pilote l'e-mail et LinkedIn dans un seul Flow et se synchronise automatiquement avec votre CRM. Les outils que vous achèteriez sinon n'en couvrent chacun qu'une partie. hubsell couvre l'ensemble.",
      moat: "Beaucoup d'outils font une ou deux de ces choses. Aucun ne fait les trois au même endroit.",
      linksLabel: "Vous comparez hubsell à un outil précis ?",
      srYes: "Oui : ",
      srPart: "Partiel : ",
      srNo: "Non : ",
    },
    faqSec: {
      eyebrow: "FAQ",
      titlePre: "",
      titleAccent: "Des réponses franches",
      titlePost: ", parce que l'outbound est déjà assez difficile.",
      seeAll: "Voir toutes les questions →",
    },
  },
};

// Quotes of the six testimonials that are not on the homepage, by slug.
export const quotesFr: Record<string, string> = {
  matterway: "Nous avons essayé plusieurs outils et services, mais seul hubsell offre à la fois les fonctionnalités et des données de qualité pour vraiment automatiser la génération de leads.",
  spryker: "L'automatisation de hubsell nous a permis de toucher et de convertir plus de partenaires et de clients que toute autre plateforme ou tout autre canal que j'aie jamais utilisé. Sans elle, notre entreprise n'aurait tout simplement pas pu se développer.",
  cibt: "Un excellent produit pour la vente B2B. J'ai toujours trouvé que les contenus que hubsell parvient à trouver sont exacts et adaptés à mes prospects. Il est facile à utiliser et accélère la phase de recherche de la prospection pour mon équipe.",
  "alon-even": "Une excellente prospection individuelle à grande échelle par e-mail, LinkedIn et téléphone. D'excellentes données qui ne vieillissent pas. Un concept vraiment intelligent.",
  meetyoo: "Je recommande hubsell à tous ceux qui utilisent l'outbound dans leur mix marketing B2B. Un excellent support client, utile et super rapide !",
  aspire: "Excellent produit, support fantastique. hubsell a nettement amélioré la génération de leads dans notre organisation. Un excellent produit, avec un support qui se distingue vraiment : l'équipe fait toujours plus que nécessaire pour résoudre les demandes rapidement.",
};
