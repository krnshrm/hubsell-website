// Integrations page: Brazilian Portuguese, "você".
// Same shape as the English source, which stays the reference.
// Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsPt: IntegrationsPageData = {
  title: "Integrações: CRM, e-mail e assistentes de IA como ChatGPT | hubsell",
  metaDescription: "Conecte a hubsell ao HubSpot, Salesforce ou Pipedrive, envie do Google Workspace ou Microsoft 365 e trabalhe com a hubsell no ChatGPT, Claude, Gemini ou em qualquer assistente de IA compatível com MCP.",
  eyebrow: "Integrações",
  h1Pre: "Integrações com ",
  h1Accent: "CRM, e-mail e assistentes de IA",
  h1Post: "",
  sub: "A hubsell se conecta ao Salesforce, HubSpot e Pipedrive, envia das suas próprias caixas de e-mail do Google Workspace ou Microsoft 365 e funciona com qualquer assistente de IA compatível com MCP, como ChatGPT, Claude ou Gemini. Autorizado em poucos cliques, sem middleware para manter.",
  hubLabels: {
    mail: "Envia da sua caixa de e-mail",
    crm: "Sincroniza com o seu CRM",
    ai: "Pergunte pelo seu assistente de IA",
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
    ai: {
      eyebrow: "Assistentes de IA (MCP)",
      pre: "Trabalhe com a hubsell a partir ",
      accent: "do assistente de IA que você já usa",
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
  aiStatusLabel: "Via MCP",
  groups: {
    CRM: "CRM",
    Email: "E-mail",
    AI: "Assistentes de IA",
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
    {
      name: "ChatGPT",
      category: "AI",
      blurb: "Pergunte ao ChatGPT sobre seus contatos, Flows e estatísticas, ou peça para adicionar tags, enriquecer e iniciar Flows, com as permissões que você conceder.",
    },
    {
      name: "Claude",
      category: "AI",
      blurb: "Adicione a hubsell como conector personalizado no Claude e pergunte sobre contatos, Flows e resultados, com as permissões que você conceder.",
    },
    {
      name: "Gemini",
      category: "AI",
      blurb: "Adicione a hubsell como app personalizado no Gemini para consultar contatos e resultados de Flows, adicionar tags, enriquecer contatos e iniciar Flows.",
    },
    {
      name: "Mistral Vibe",
      category: "AI",
      blurb: "O assistente da Mistral, antes chamado Le Chat: adicione a hubsell como conector MCP personalizado para buscar contatos, ler estatísticas de Flows, adicionar tags, enriquecer e iniciar Flows.",
    },
    {
      name: "Perplexity",
      category: "AI",
      blurb: "Adicione a hubsell como conector remoto personalizado no Perplexity e pergunte sobre seus contatos, Flows e estatísticas, com as permissões que você conceder.",
    },
    {
      name: "Microsoft Copilot Studio",
      category: "AI",
      blurb: "Dê aos seus agentes do Copilot Studio acesso à hubsell para consultar contatos e resultados de Flows, adicionar tags, enriquecer e iniciar Flows, com as permissões que cada pessoa conceder.",
    },
    {
      name: "Cursor",
      category: "AI",
      blurb: "Adicione a hubsell como servidor MCP no Cursor para consultar contatos e resultados de Flows, adicionar tags, enriquecer e iniciar Flows a partir do editor.",
    },
    {
      name: "Claude Code",
      category: "AI",
      blurb: "Adicione a hubsell com um único comando no terminal e trabalhe com seus contatos, Flows e estatísticas no Claude Code, com as permissões que você conceder.",
    },
    {
      name: "Codex",
      category: "AI",
      blurb: "Adicione a hubsell com um único comando do Codex para consultar contatos e resultados de Flows, adicionar tags, enriquecer e iniciar Flows, com as permissões que você conceder.",
    },
    {
      name: "Visual Studio Code",
      category: "AI",
      blurb: "Adicione a hubsell como servidor MCP do GitHub Copilot no Visual Studio Code para consultar contatos e resultados de Flows, adicionar tags, enriquecer e iniciar Flows.",
    },
    {
      name: "Windsurf",
      category: "AI",
      blurb: "Adicione a hubsell como servidor MCP no Windsurf para consultar contatos e resultados de Flows, adicionar tags, enriquecer e iniciar Flows, com as permissões que você conceder.",
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
  aiPoints: [
    "A hubsell tem um servidor MCP. MCP (Model Context Protocol) é o padrão aberto que os apps de IA usam para trabalhar com outros softwares, então qualquer assistente que permita adicionar um servidor MCP pelo endereço pode se conectar, seja de qual empresa for.",
    "Você entra com a sua conta da hubsell e escolhe o que o assistente pode fazer: Leitura, Escrita, Gastar créditos ou Enviar e-mails. Ele age em seu nome, então a sua função na hubsell continua valendo.",
    "Pergunte em linguagem comum sobre seus contatos, Flows e estatísticas, ou peça para adicionar tags, enriquecer contatos e iniciar Flows. A hubsell orienta o assistente a perguntar a você antes de gastar créditos ou enviar qualquer coisa.",
    "Você usa a sua própria assinatura de IA. A hubsell não vê seus chats e não cobra créditos pela IA. Alguns apps só oferecem servidores MCP próprios em certos planos ou países.",
  ],
  aiLink: {
    label: "Guia: use a hubsell com o seu assistente de IA (em inglês)",
    href: "/knowledge/use-hubsell-with-your-ai-assistant/",
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
  trademark: "Salesforce, HubSpot, Pipedrive, ChatGPT, Codex, Claude, Claude Code, Mistral Vibe, Perplexity, Cursor e Windsurf são marcas registradas dos seus proprietários. Google Workspace e Gemini são marcas registradas da Google LLC, e Microsoft 365, Microsoft Copilot Studio e Visual Studio Code, da Microsoft Corporation. A hubsell não é afiliada nem endossada por essas empresas.",
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
      question: "Quais assistentes de IA funcionam com a hubsell?",
      answer: "<p>Qualquer app que permita adicionar um servidor MCP pelo endereço e fazer login nele. Isso inclui ChatGPT, Claude e Claude Code, Gemini, Mistral Vibe (antes Le Chat), Perplexity, Microsoft Copilot Studio, Cursor, Visual Studio Code com GitHub Copilot, Codex e Windsurf. Alguns apps só oferecem isso em certos planos ou países. Os passos para cada app estão no <a class=\"link\" href=\"/knowledge/use-hubsell-with-your-ai-assistant/\">guia</a> (em inglês).</p>",
    },
    {
      question: "A hubsell vê meus chats com o assistente?",
      answer: "<p>Não. O seu assistente só envia à hubsell as consultas de que precisa, como uma busca de contatos, e recebe os resultados. A conversa fica entre você e o app que você usa.</p>",
    },
    {
      question: "Usar um assistente de IA gasta créditos da hubsell?",
      answer: "<p>Não. Você usa a sua própria assinatura de IA, e a hubsell não cobra créditos pela IA. Só o enriquecimento gasta créditos, como no app, e só se você conceder a permissão Gastar créditos.</p>",
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
