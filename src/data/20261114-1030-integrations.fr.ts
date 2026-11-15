// Integrations page: French (France), "vous". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsFr: IntegrationsPageData = {
  title: "Intégrations : HubSpot, Salesforce, Pipedrive, Google, Microsoft | hubsell",
  metaDescription: "Connectez hubsell à HubSpot, Salesforce ou Pipedrive et envoyez depuis vos boîtes mail Google Workspace ou Microsoft 365. Intégrations natives, prêtes en quelques minutes.",
  eyebrow: "Intégrations",
  h1Pre: "Intégrations pour ",
  h1Accent: "le CRM et l'e-mail",
  h1Post: "",
  sub: "hubsell se connecte à Salesforce, HubSpot et Pipedrive, et envoie depuis vos propres boîtes mail Google Workspace ou Microsoft 365. Des connexions natives, autorisées en quelques clics, sans middleware à maintenir.",
  hubLabels: {
    mail: "Envoie depuis votre boîte mail",
    crm: "Synchronise avec votre CRM",
  },
  heads: {
    list: {
      eyebrow: "Intégrations disponibles",
      pre: "Ce à quoi hubsell ",
      accent: "se connecte aujourd'hui",
      post: "",
    },
    crm: {
      eyebrow: "Intégration CRM",
      pre: "Comment fonctionne ",
      accent: "l'intégration CRM",
      post: "",
    },
    mail: {
      eyebrow: "Intégration e-mail",
      pre: "Comment fonctionne l'envoi ",
      accent: "depuis votre boîte mail",
      post: "",
    },
    steps: {
      eyebrow: "Configuration",
      pre: "Connecté en ",
      accent: "trois étapes",
      post: "",
    },
    security: {
      eyebrow: "Sécurité et RGPD",
      pre: "Vos données restent ",
      accent: "sous votre contrôle",
      post: "",
    },
    closing: {
      eyebrow: "Intégrations",
      pre: "Est-ce adapté à ",
      accent: "votre stack",
      post: " ?",
    },
    faq: {
      eyebrow: "FAQ intégrations",
      pre: "Questions sur ",
      accent: "les intégrations hubsell",
      post: "",
    },
  },
  statusLabel: "Disponible",
  groups: {
    CRM: "CRM",
    Email: "E-mail",
  },
  items: [
    {
      name: "Salesforce",
      category: "CRM",
      blurb: "Les contacts, entreprises et activités de hubsell arrivent sur les bons enregistrements Salesforce, en temps réel.",
    },
    {
      name: "HubSpot",
      category: "CRM",
      blurb: "Les contacts, entreprises et activités de hubsell arrivent sur les bons enregistrements HubSpot, sans saisie manuelle.",
    },
    {
      name: "Pipedrive",
      category: "CRM",
      blurb: "Les contacts et activités de hubsell tiennent votre pipeline Pipedrive à jour, sans passer par un CSV.",
    },
    {
      name: "Google Workspace",
      category: "Email",
      blurb: "Les e-mails partent de vos propres boîtes mail Google via l'API Gmail, sans serveur d'envoi externe.",
    },
    {
      name: "Microsoft 365",
      category: "Email",
      blurb: "Les e-mails partent de vos propres boîtes mail Outlook via l'API Microsoft, sans serveur d'envoi externe.",
    },
  ],
  crmPoints: [
    "Envoyez les contacts vers le CRM à la main, ou définissez des conditions qui les envoient automatiquement, par exemple uniquement les contacts qui répondent.",
    "Chaque contact et chaque entreprise est rapproché de l'enregistrement existant, qui est mis à jour : la synchronisation ne crée pas de doublons.",
    "Les activités e-mail, les activités LinkedIn et les tâches d'appel sont enregistrées sur la fiche au fil de l'eau, et vous choisissez quel champ hubsell alimente quel champ du CRM.",
    "Les contacts déjà présents dans votre CRM, comme vos clients ou vos opportunités en cours, peuvent être exclus avant le début de la prospection.",
  ],
  crmLink: {
    label: "En savoir plus sur la synchronisation CRM",
    href: "/platform/crm-sync",
  },
  mailPoints: [
    "Les e-mails sont envoyés depuis vos propres boîtes mail Google Workspace ou Microsoft 365, via leurs API. Aucun serveur SMTP externe ni aucune redirection de suivi sur le parcours.",
    "Votre boîte mail a une limite d'envoi quotidienne, et les e-mails partent dans les créneaux d'envoi que vous définissez, espacés plutôt qu'en rafales.",
    "Quand un contact répond ou qu'un e-mail est rejeté, le Flow s'arrête pour ce contact : personne ne reçoit de relance après avoir répondu.",
  ],
  mailLink: {
    label: "En savoir plus sur la délivrabilité des e-mails",
    href: "/platform/deliverability",
  },
  steps: [
    {
      title: "Ouvrez Intégrations",
      body: "Dans hubsell, ouvrez le menu du profil en bas à gauche et choisissez Intégrations.",
    },
    {
      title: "Choisissez et autorisez",
      body: "Sélectionnez votre CRM ou votre fournisseur de messagerie. hubsell vous renvoie vers son écran de connexion, où vous accordez les autorisations demandées.",
    },
    {
      title: "Décidez de ce qui se synchronise",
      body: "De retour dans hubsell, la connexion apparaît comme active. Rien n'est envoyé tout seul : vous choisissez ce qui part vers le CRM, et quand.",
    },
  ],
  stepsLink: {
    label: "Guide pas à pas : connecter votre CRM (en anglais)",
    href: "/knowledge/connect-your-crm/",
  },
  security: [
    "Vous connectez chaque outil via son propre écran de connexion et d'autorisation : hubsell n'obtient que l'accès que vous accordez, et vous pouvez le retirer dans l'outil à tout moment.",
    "hubsell est basé à Berlin et héberge les données à Francfort. Vous restez responsable du traitement et hubsell est votre sous-traitant, dans le cadre d'un accord de traitement des données.",
  ],
  noteTitle: "D'autres arrivent",
  noteBody: "Voici les outils que nous prenons en charge aujourd'hui. S'il vous en faut un autre, dites-le-nous lors d'un court appel et nous vous dirons où il en est.",
  trademark: "Salesforce, HubSpot et Pipedrive sont des marques de leurs propriétaires respectifs. Google Workspace est une marque de Google LLC, Microsoft 365 une marque de Microsoft Corporation. hubsell n'est ni affilié à ces entreprises ni approuvé par elles.",
  closingSub: "Dites-nous quels outils vous utilisez lors d'un court appel et nous vous montrerons comment hubsell s'intègre à votre stack.",
  faqs: [
    {
      question: "Avec quels CRM hubsell s'intègre-t-il ?",
      answer: "<p>Salesforce, HubSpot et Pipedrive. Les trois sont des intégrations natives : pas de Zapier ni d'autre middleware entre les deux.</p>",
    },
    {
      question: "Combien de temps faut-il pour connecter mon CRM ?",
      answer: "<p>Quelques minutes. Vous ouvrez Intégrations dans hubsell, choisissez votre CRM et accordez les autorisations demandées. Consultez le <a class=\"link\" href=\"/knowledge/connect-your-crm/\">guide pas à pas</a> (en anglais).</p>",
    },
    {
      question: "Connecter mon CRM y envoie-t-il automatiquement les contacts ?",
      answer: "<p>Non. Connecter le compte n'envoie rien tout seul. Vous envoyez les contacts à la main, ou vous définissez des conditions qui les envoient automatiquement.</p>",
    },
    {
      question: "L'intégration CRM est-elle bidirectionnelle ?",
      answer: "<p>Aujourd'hui, la synchronisation va de hubsell vers votre CRM, et hubsell consulte le CRM pour trouver les enregistrements existants et les contacts à exclure. Les modifications faites dans le CRM ne sont pas encore reportées dans hubsell. La synchronisation bidirectionnelle est prévue.</p>",
    },
    {
      question: "hubsell va-t-il créer des doublons dans mon CRM ?",
      answer: "<p>Non. Avant d'écrire, hubsell rapproche chaque contact et chaque entreprise de l'enregistrement existant et le met à jour.</p>",
    },
    {
      question: "Avec quels fournisseurs de messagerie hubsell fonctionne-t-il ?",
      answer: "<p>Google Workspace et Microsoft 365. hubsell envoie depuis vos propres boîtes mail via les API Gmail et Microsoft, pas depuis un serveur d'envoi externe.</p>",
    },
    {
      question: "Depuis quelle boîte mail hubsell envoie-t-il ?",
      answer: "<p>Depuis la boîte mail Google Workspace ou Microsoft 365 que vous connectez, dans la limite d'un plafond quotidien. hubsell est conçu pour une prospection bien ciblée, à volume faible ou moyen, pas pour l'envoi de masse. Voir <a class=\"link\" href=\"/fr/platform/deliverability/\">la délivrabilité</a>.</p>",
    },
    {
      question: "hubsell s'intègre-t-il à LinkedIn ?",
      answer: "<p>Les étapes LinkedIn (visites de profil, demandes de connexion, messages et InMail) s'exécutent dans les Flows hubsell, aux côtés des e-mails et des tâches d'appel. Voir <a class=\"link\" href=\"/fr/platform/multichannel-outreach/\">la prospection multicanale</a>.</p>",
    },
    {
      question: "Mes données sont-elles en sécurité quand je connecte un outil ?",
      answer: "<p>Vous connectez chaque outil via son propre écran de connexion et d'autorisation, et vous pouvez retirer l'accès à tout moment. hubsell héberge les données à Francfort et agit comme votre sous-traitant dans le cadre d'un accord de traitement des données.</p>",
    },
    {
      question: "Et si l'outil que j'utilise n'est pas dans la liste ?",
      answer: "<p>Dites-le-nous lors d'un court appel. Nous ajoutons des intégrations et vous dirons où en est votre outil.</p>",
    },
  ],
  crumbHome: "Accueil",
  crumbSelf: "Intégrations",
};
