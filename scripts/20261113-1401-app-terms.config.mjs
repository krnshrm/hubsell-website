// What the term list and the term check work from. Edited by hand.
//
// The website uses the same words as the app (owner decision 2026-11-12). The
// words themselves are never typed here: `keys` point at hubsell-client's
// message files (src/i18n/messages/<locale>/<file>.json, written file.path.to.key)
// and scripts/20261113-1401-app-terms.mjs reads all six languages from there into
// docs/20261113-1401-app-terms.json. This file only says WHICH terms matter and what the
// check does with them.

export const locales = ['en', 'de', 'nl', 'fr', 'es', 'pt'];

// Languages where a finding fails the build. de and nl join once their live
// copy is rewritten to the app's form of address; until then they only report.
export const enforce = ['fr', 'es', 'pt'];

// pair: true  -> the English page and its translation are compared for this term
//               (`npm run check:terms -- --pairs`).
// match       -> word stems that count as "the app's word" in a language, for
//               words whose forms share no usable stem (nl taak / taken).
// enMatch     -> the English words that trigger the comparison, when the app's
//               own label is too broad or too narrow for running text.
export const terms = [
  // Navigation
  { id: 'dashboard', group: 'Navigation', keys: ['nav.dashboard'] },
  { id: 'source-enrich', group: 'Navigation', keys: ['nav.sourceEnrich'] },
  { id: 'orchestrate-engage', group: 'Navigation', keys: ['nav.orchestrateEngage'] },
  { id: 'settings', group: 'Navigation', keys: ['breadcrumb.settings'] },
  { id: 'onboarding', group: 'Navigation', keys: ['breadcrumb.onboarding'] },
  { id: 'statistics', group: 'Navigation', keys: ['breadcrumb.statistics'] },
  { id: 'add-data', group: 'Navigation', keys: ['breadcrumb.add-data'] },
  { id: 'import-csv', group: 'Navigation', keys: ['breadcrumb.CSV-import'] },

  // Main nouns
  { id: 'contact', group: 'Main nouns', keys: ['contacts.columnLabels.fullName', 'nav.contacts'], pair: true },
  { id: 'company', group: 'Main nouns', keys: ['contacts.columnLabels.companyLegalName', 'breadcrumb.companies'] },
  { id: 'list', group: 'Main nouns', keys: ['data.searches.filterConfig.list', 'nav.lists'], pair: true, match: { nl: ['lijst'] } },
  { id: 'search', group: 'Main nouns', keys: ['nav.searches'] },
  { id: 'flow', group: 'Main nouns', keys: ['contacts.columnLabels.flowName', 'nav.flows'], pair: true },
  { id: 'task', group: 'Main nouns', keys: ['flowEditor.library.customTask.label', 'nav.tasks'], pair: true, match: { nl: ['taak', 'taken'] } },
  { id: 'template', group: 'Main nouns', keys: ['settings.company.roles.groups.templates'], pair: true, enMatch: ['template', 'templates'], match: { de: ['vorlage'], nl: ['sjablo'], fr: ['modèle'], es: ['plantilla'], pt: ['modelo'] } },
  { id: 'tag', group: 'Main nouns', keys: ['contacts.columnLabels.tags'] },
  { id: 'export', group: 'Main nouns', keys: ['breadcrumb.exports'] },
  { id: 'integration', group: 'Main nouns', keys: ['breadcrumb.integrations'], pair: true, enMatch: ['integration', 'integrations'], match: { de: ['integration'], nl: ['integratie'], fr: ['intégration'], es: ['integraci'], pt: ['integraç'] } },
  { id: 'enrichment', group: 'Main nouns', keys: ['contacts.filterConfig.groups.enrichment'], pair: true, match: { de: ['anreicher', 'angereichert'], nl: ['verrijk'], fr: ['enrichi'], es: ['enriquec'], pt: ['enriquec'] } },
  { id: 'enrich-contacts', group: 'Main nouns', keys: ['settings.company.roles.actions.contacts.enrich.label'] },
  { id: 'suppression', group: 'Main nouns', keys: ['breadcrumb.suppression'] },
  { id: 'mailbox', group: 'Main nouns', keys: ['breadcrumb.mailbox'], pair: true, enMatch: ['mailbox', 'mailboxes'], match: { de: ['postf'], fr: ['boîte mail', 'boîtes mail'], es: ['buzón', 'buzones'], pt: ['caixa de e-mail', 'caixas de e-mail'] } },
  { id: 'signature', group: 'Main nouns', keys: ['breadcrumb.signature'] },
  { id: 'snippet', group: 'Main nouns', keys: ['breadcrumb.snippet'] },
  { id: 'email', group: 'Main nouns', keys: ['common.email'] },
  { id: 'phone', group: 'Main nouns', keys: ['contacts.profile.phone'] },

  // Flow steps
  { id: 'step', group: 'Flow steps', keys: ['common.library.step'] },
  { id: 'connection-request', group: 'Flow steps', keys: ['flowEditor.library.linkedinConnect.label'], pair: true, enMatch: ['connection request', 'connection requests'], match: { de: ['vernetzungsanfrage'], nl: ['connectieverzoek'], fr: ['demande de connexion', 'demandes de connexion'], es: ['solicitud de conexión', 'solicitudes de conexión'], pt: ['solicitação de conexão', 'solicitações de conexão'] } },
  { id: 'direct-message', group: 'Flow steps', keys: ['flowEditor.library.linkedinDm.label'] },
  { id: 'profile-visit', group: 'Flow steps', keys: ['flowEditor.library.linkedinProfileVisit.label'], pair: true, enMatch: ['profile visit', 'profile visits'], match: { de: ['profilbesuch'], nl: ['profielbezoek'], fr: ['visite de profil', 'visites de profil'], es: ['visita al perfil', 'visitas al perfil'], pt: ['visita ao perfil', 'visitas ao perfil'] } },
  { id: 'inmail', group: 'Flow steps', keys: ['flowEditor.library.linkedinInmail.label'] },
  { id: 'follow-up-email', group: 'Flow steps', keys: ['flowEditor.library.followUpEmail.label'] },
  { id: 'schedule', group: 'Flow steps', keys: ['flowEditor.nodeLabels.schedule'] },
  { id: 'drip-rate', group: 'Flow steps', keys: ['flows.listing.columns.dripRate'] },
  { id: 'trigger', group: 'Flow steps', keys: ['onboarding.plans.features.triggers'] },
  { id: 'webhook', group: 'Flow steps', keys: ['flowEditor.library.webhook.label'] },

  // Statuses (the word changes with the grammar of the sentence around it, so
  // these are in the list for reference and never compared)
  { id: 'bounced', group: 'Statuses', keys: ['common.statuses.contact.bounced'] },
  { id: 'replied', group: 'Statuses', keys: ['common.statuses.contact.replied'] },
  { id: 'opened', group: 'Statuses', keys: ['common.statuses.contact.opened'] },
  { id: 'clicked', group: 'Statuses', keys: ['common.statuses.recipient.clicked'] },
  { id: 'unsubscribed', group: 'Statuses', keys: ['common.statuses.recipient.unsubscribed'] },
  { id: 'not-interested', group: 'Statuses', keys: ['common.statuses.recipient.notInterested'] },
  { id: 'engaged', group: 'Statuses', keys: ['flows.listing.columns.engaged'] },

  // Contact fields
  { id: 'seniority', group: 'Contact fields', keys: ['contacts.columnLabels.seniority'] },
  { id: 'department', group: 'Contact fields', keys: ['contacts.columnLabels.department'] },
  { id: 'industry', group: 'Contact fields', keys: ['contacts.columnLabels.companyIndustry'] },

  // Account, plans and team
  { id: 'credits', group: 'Account and plans', keys: ['breadcrumb.credits'], pair: true, enMatch: ['credits'], match: { de: ['credit'], nl: ['credit'], fr: ['crédit'], es: ['crédito'], pt: ['crédito'] } },
  { id: 'seats', group: 'Account and plans', keys: ['onboarding.plans.review.seats'], pair: true, enMatch: ['seat', 'seats'], match: { de: ['platz', 'plätze'], nl: ['licentie'], fr: ['licence'], es: ['licencia'], pt: ['licença'] } },
  { id: 'plans', group: 'Account and plans', keys: ['breadcrumb.plans'] },
  { id: 'plan-usage', group: 'Account and plans', keys: ['breadcrumb.plan-and-usage'] },
  { id: 'trial-ended', group: 'Account and plans', keys: ['nav.trial.ended'] },
  { id: 'team', group: 'Account and plans', keys: ['settings.company.roles.levels.team'] },
  { id: 'team-management', group: 'Account and plans', keys: ['breadcrumb.team-management'] },
  { id: 'user', group: 'Account and plans', keys: ['flows.listing.columns.user'] },
  { id: 'role', group: 'Account and plans', keys: ['settings.company.team.columns.role'] },
  { id: 'roles-permissions', group: 'Account and plans', keys: ['breadcrumb.roles'] },
  { id: 'owner', group: 'Account and plans', keys: ['common.owner'] },
  { id: 'sign-up', group: 'Account and plans', keys: ['auth.signup.title'] },
  { id: 'log-out', group: 'Account and plans', keys: ['userMenu.logOut'] },
];

// Words the website must not use for an app term. `words` are matched as whole
// words, any capitalisation. Add one whenever a wrong word turns up in review.
export const avoid = [
  { term: 'flow', locale: 'de', words: ['Sequenz', 'Sequenzen', 'Ablauf', 'Abläufe'], why: 'the app says "Flow"' },
  { term: 'flow', locale: 'nl', words: ['sequentie', 'sequenties'], why: 'the app says "flow"' },
  { term: 'flow', locale: 'fr', words: ['séquence', 'séquences'], why: 'the app says "Flow"' },
  { term: 'flow', locale: 'es', words: ['secuencia', 'secuencias', 'flujo', 'flujos'], why: 'the app says "Flow"' },
  { term: 'flow', locale: 'pt', words: ['sequência', 'sequências', 'fluxo', 'fluxos'], why: 'the app says "Flow"' },
  { term: 'connection-request', locale: 'de', words: ['Kontaktanfrage', 'Kontaktanfragen'], why: 'the app says "Vernetzungsanfrage"' },
  { term: 'email', locale: 'de', words: ['Email', 'Emails', 'eMail'], why: 'the app writes "E-Mail"' },
  { term: 'email', locale: 'nl', words: ['email', 'emails'], why: 'the app writes "e-mail"' },
  { term: 'email', locale: 'fr', words: ['email', 'emails', 'courriel', 'courriels'], why: 'the app writes "e-mail"' },
  { term: 'email', locale: 'pt', words: ['email', 'emails'], why: 'the app writes "e-mail"' },
  { term: 'email', locale: 'es', words: ['e-mail', 'e-mails'], why: 'the app writes "email"' },
];

// Form of address and language variant, per language (website CLAUDE.md,
// "Internationalisation"). German third person cannot be told apart from
// ordinary prose by a pattern, so for de only the informal forms are caught.
export const style = [
  { locale: 'de', rule: 'address', why: 'German addresses the reader as "Sie"', pattern: /(?<![\p{L}-])(du|dich|dir|dein|deine|deinen|deinem|deiner|deines|euch|euer|eure|euren|eurem|eurer)(?![\p{L}-])/giu },
  { locale: 'nl', rule: 'address', why: 'Dutch addresses the reader as "je" / "jouw"', pattern: /(?<![\p{L}-])(u|uw|uzelf)(?![\p{L}-])/giu },
  { locale: 'fr', rule: 'address', why: 'French addresses the reader as "vous"', pattern: /(?<![\p{L}-])(tu|toi|tes)(?![\p{L}-])/giu },
  { locale: 'es', rule: 'address', why: 'Spanish addresses the reader as "tú"', pattern: /(?<![\p{L}-])(usted|ustedes|vosotros|vosotras|vuestro|vuestra|vuestros|vuestras)(?![\p{L}-])/giu },
  { locale: 'pt', rule: 'address', why: 'Portuguese addresses the reader as "você"', pattern: /(?<![\p{L}-])(tu|teu|tua|teus|tuas|contigo|vós|vosso|vossa|vossos|vossas)(?![\p{L}-])/giu },
  { locale: 'pt', rule: 'variant', why: 'Portuguese is Brazilian (contato, usuário, equipe, tela, arquivo, registro)', pattern: /(?<![\p{L}-])(contacto|contactos|utilizador|utilizadores|equipa|equipas|ecrã|ecrãs|ficheiro|ficheiros|registo|registos|telemóvel|telemóveis|gerir|sítio web)(?![\p{L}-])/giu },
];

// Findings that are right as they are. `text` is a piece of the flagged
// sentence; `page` the start of the page path; `word` the flagged word. An entry
// needs at least `locale` and one of the three, plus `why`.
export const allow = [
  { locale: 'de', page: '/de/glossary/', word: 'Sequenz', why: 'the glossary explains the general term "email sequence"' },
  { locale: 'de', page: '/de/glossary/', word: 'Sequenzen', why: 'the glossary explains the general term "email sequence"' },
  { locale: 'nl', page: '/nl/glossary/', word: 'sequentie', why: 'the glossary explains the general term "email sequence"' },
  { locale: 'nl', page: '/nl/glossary/', word: 'sequenties', why: 'the glossary explains the general term "email sequence"' },
  { locale: 'de', page: '/de/vs/cognism/', word: 'Sequenzen', why: 'describes what the competitor lacks (tool category)' },
  { locale: 'nl', page: '/nl/vs/cognism/', word: 'sequenties', why: 'describes what the competitor lacks (tool category)' },
  { locale: 'de', text: 'in einem bestimmten Ablauf nutzen', why: 'customer quote (Verhaert), stays as said' },
  { locale: 'nl', text: 'ondersteunen u bij uw hele aanpak', why: 'customer quote (Staffbase), stays as said' },
  { locale: 'nl', text: 'Ze kunnen echt met u samenwerken', why: 'customer quote (Staffbase), stays as said' },
  { locale: 'nl', text: 'als u met een klein team echte resultaten wilt halen', why: 'customer quote (Elium), stays as said' },
  // The pricing table lists flow nodes under their product names, which stay
  // English in every language (src/data/pricing-features.ts).
  { locale: 'de', page: '/de/pricing/', word: 'email', why: 'node names in the pricing table stay English' },
  { locale: 'nl', page: '/nl/pricing/', word: 'email', why: 'node names in the pricing table stay English' },
];
