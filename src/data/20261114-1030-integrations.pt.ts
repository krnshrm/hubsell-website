// Integrations page: Brazilian Portuguese, "você".
// Same shape as the English source, which stays the reference.
// Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsPt: IntegrationsPageData = {
  title: "Integrações: HubSpot, Salesforce, Pipedrive e mais | hubsell",
  metaDescription: "Conecte a hubsell ao HubSpot, Salesforce ou Pipedrive e envie das suas caixas de e-mail do Google Workspace ou Microsoft 365. Integrações nativas, prontas em minutos.",
  eyebrow: "Integrações",
  h1Pre: "Integrações com ",
  h1Accent: "CRM e e-mail",
  h1Post: "",
  sub: "A hubsell se conecta ao Salesforce, HubSpot e Pipedrive e envia das suas próprias caixas de e-mail do Google Workspace ou Microsoft 365. Conexões nativas, autorizadas em poucos cliques, sem middleware para manter.",
  hubLabels: {
    mail: "Envia da sua caixa de e-mail",
    crm: "Sincroniza com o seu CRM",
  },
  heads: {
    list: {
      eyebrow: "Integrações disponíveis",
      pre: "Com o que a hubsell ",
      accent: "se conecta hoje",
      post: "",
    },
    crm: {
      eyebrow: "Integração com o CRM",
      pre: "Como funciona a ",
      accent: "integração com o CRM",
      post: "",
    },
    mail: {
      eyebrow: "Integração de e-mail",
      pre: "Como funciona o envio pela ",
      accent: "sua própria caixa de e-mail",
      post: "",
    },
    steps: {
      eyebrow: "Configuração",
      pre: "Conectado em ",
      accent: "três etapas",
      post: "",
    },
    security: {
      eyebrow: "Segurança e GDPR (RGPD)",
      pre: "Seus dados ficam ",
      accent: "sob o seu controle",
      post: "",
    },
    closing: {
      eyebrow: "Integrações",
      pre: "Não sabe se combina com ",
      accent: "a sua stack",
      post: "?",
    },
    faq: {
      eyebrow: "Perguntas sobre integrações",
      pre: "Perguntas sobre as ",
      accent: "integrações da hubsell",
      post: "",
    },
  },
  statusLabel: "Disponível",
  groups: {
    CRM: "CRM",
    Email: "E-mail",
  },
  items: [
    {
      name: "Salesforce",
      category: "CRM",
      blurb: "Contatos, empresas e atividades da hubsell chegam aos registros certos do Salesforce, em tempo real.",
    },
    {
      name: "HubSpot",
      category: "CRM",
      blurb: "Contatos, empresas e atividades da hubsell chegam aos registros certos do HubSpot, sem digitação manual.",
    },
    {
      name: "Pipedrive",
      category: "CRM",
      blurb: "Contatos e atividades da hubsell mantêm o seu pipeline no Pipedrive atualizado, sem CSV no meio do caminho.",
    },
    {
      name: "Google Workspace",
      category: "Email",
      blurb: "Os e-mails saem das suas próprias caixas de e-mail do Google pela API do Gmail, sem servidor de envio externo.",
    },
    {
      name: "Microsoft 365",
      category: "Email",
      blurb: "Os e-mails saem das suas próprias caixas de e-mail do Outlook pela API da Microsoft, sem servidor de envio externo.",
    },
  ],
  crmPoints: [
    "Envie contatos ao CRM manualmente ou defina condições para enviá-los automaticamente, por exemplo, só os contatos que responderem.",
    "Cada contato e cada empresa é associado ao registro que já existe e atualizado, então a sincronização não cria duplicatas.",
    "As atividades de e-mail, as atividades no LinkedIn e as tarefas de ligação são registradas no registro conforme acontecem, e você escolhe qual campo da hubsell preenche qual campo do CRM.",
    "Contatos que já estão no seu CRM, como clientes ou negócios em aberto, podem ser excluídos antes de a prospecção começar.",
  ],
  crmLink: {
    label: "Mais sobre a sincronização com o CRM",
    href: "/platform/crm-sync",
  },
  mailPoints: [
    "Os e-mails são enviados das suas próprias caixas de e-mail do Google Workspace ou Microsoft 365 pelas APIs delas. Não há servidor SMTP externo nem redirecionamento de rastreamento no caminho.",
    "Sua caixa de e-mail tem um limite diário de envio, e os e-mails saem dentro das janelas de envio que você define, espaçados e não em rajadas.",
    "Quando um contato responde ou um e-mail é devolvido, o Flow para para esse contato, então ninguém recebe um follow-up depois de responder.",
  ],
  mailLink: {
    label: "Mais sobre a entregabilidade de e-mails",
    href: "/platform/deliverability",
  },
  steps: [
    {
      title: "Abra Integrações",
      body: "Na hubsell, abra o menu do perfil no canto inferior esquerdo e escolha Integrações.",
    },
    {
      title: "Escolha e autorize",
      body: "Escolha o seu CRM ou provedor de e-mail. A hubsell leva você à tela de login dele, onde você concede as permissões solicitadas.",
    },
    {
      title: "Decida o que sincronizar",
      body: "De volta à hubsell, a conexão aparece como ativa. Nada é enviado sozinho: você escolhe o que vai para o CRM e quando.",
    },
  ],
  stepsLink: {
    label: "Guia passo a passo: conecte o seu CRM (em inglês)",
    href: "/knowledge/connect-your-crm/",
  },
  security: [
    "Você conecta cada ferramenta pela tela de login e de permissões dela, então a hubsell só recebe o acesso que você concede, e você pode removê-lo na ferramenta a qualquer momento.",
    "A hubsell fica em Berlim e hospeda os dados em Frankfurt. Você continua sendo o controlador dos dados e a hubsell é a sua operadora, sob um acordo de processamento de dados.",
  ],
  noteTitle: "Mais a caminho",
  noteBody: "Este é o conjunto que suportamos hoje. Se você precisa de outra ferramenta, conte para nós em uma conversa rápida e diremos em que pé ela está.",
  trademark: "Salesforce, HubSpot e Pipedrive são marcas registradas dos seus proprietários. Google Workspace é uma marca registrada da Google LLC, e Microsoft 365, da Microsoft Corporation. A hubsell não é afiliada nem endossada por essas empresas.",
  closingSub: "Conte para nós, em uma conversa rápida, quais ferramentas você usa e mostraremos como a hubsell se encaixa na sua stack.",
  faqs: [
    {
      question: "Com quais CRMs a hubsell se integra?",
      answer: "<p>Salesforce, HubSpot e Pipedrive. As três são integrações nativas, então não há Zapier nem outro middleware no meio.</p>",
    },
    {
      question: "Quanto tempo leva para conectar o meu CRM?",
      answer: "<p>Poucos minutos. Você abre Integrações na hubsell, escolhe o seu CRM e concede as permissões solicitadas. Veja o <a class=\"link\" href=\"/knowledge/connect-your-crm/\">guia passo a passo</a> (em inglês).</p>",
    },
    {
      question: "Conectar o meu CRM envia contatos automaticamente?",
      answer: "<p>Não. Conectar a conta não envia nada sozinho. Você envia os contatos manualmente ou define condições para enviá-los automaticamente.</p>",
    },
    {
      question: "A integração com o CRM é bidirecional?",
      answer: "<p>Hoje a sincronização vai da hubsell para o seu CRM, e a hubsell consulta o CRM para encontrar registros existentes e contatos a excluir. As alterações feitas no CRM ainda não voltam para a hubsell. A sincronização bidirecional está planejada.</p>",
    },
    {
      question: "A hubsell vai criar duplicatas no meu CRM?",
      answer: "<p>Não. Antes de gravar, a hubsell associa cada contato e cada empresa ao registro que já existe e o atualiza.</p>",
    },
    {
      question: "Com quais provedores de e-mail a hubsell funciona?",
      answer: "<p>Google Workspace e Microsoft 365. A hubsell envia das suas próprias caixas de e-mail pelas APIs do Gmail e da Microsoft, não de um servidor de envio externo.</p>",
    },
    {
      question: "De qual caixa de e-mail a hubsell envia?",
      answer: "<p>Da caixa de e-mail do Google Workspace ou Microsoft 365 que você conecta, dentro de um limite diário. A hubsell foi feita para prospecção bem segmentada, de volume baixo a médio, não para envios em massa. Veja <a class=\"link\" href=\"/pt/platform/deliverability/\">entregabilidade</a>.</p>",
    },
    {
      question: "A hubsell se integra ao LinkedIn?",
      answer: "<p>As etapas do LinkedIn (visitas ao perfil, solicitações de conexão, mensagens e InMail) rodam dentro dos Flows da hubsell, junto com e-mails e tarefas de ligação. Veja <a class=\"link\" href=\"/pt/platform/multichannel-outreach/\">prospecção multicanal</a>.</p>",
    },
    {
      question: "Meus dados ficam seguros quando conecto uma ferramenta?",
      answer: "<p>Você conecta cada ferramenta pela tela de login e de permissões dela e pode remover o acesso a qualquer momento. A hubsell hospeda os dados em Frankfurt e atua como sua operadora sob um acordo de processamento de dados.</p>",
    },
    {
      question: "E se a ferramenta que eu uso não estiver na lista?",
      answer: "<p>Conte para nós em uma conversa rápida. Estamos adicionando integrações e diremos em que pé está a sua ferramenta.</p>",
    },
  ],
  crumbHome: "Início",
  crumbSelf: "Integrações",
};
