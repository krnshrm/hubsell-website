// Homepage copy: Brazilian Portuguese, "você".
// Same shape as the English source, which stays the reference.
// Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const homePt: {
  steps: PipelineStep[]; features: Feature[]; roles: Role[]; testimonials: Testimonial[];
  insights: Insight[]; comparison: ComparisonData; faqs: Faq[]; s: HomeStrings;
} = {
  steps: [
    {
      n: "01",
      label: "Dados em tempo real",
      title: "Encontre as ",
      titleAccent: "pessoas certas",
      tail: ", não só os filtros certos",
      points: [
        "A maioria das plataformas deixa você filtrar por cargo e setor.",
        "A hubsell busca a partir de sinais de comportamento em tempo real: pessoas que seguem a página de uma empresa, interagem com um post no LinkedIn, mudam de emprego, vão a eventos ou estão contratando para cargos específicos.",
        "Cada contato que entra no seu Flow é alinhado ao seu ICP e validado no momento do uso.",
      ],
      cta: "Busque seus dados",
      more: "Conheça os dados em tempo real",
      embed: "05-sp-widget",
      flip: false,
    },
    {
      n: "02",
      label: "Prospecção multicanal",
      title: "Rode um único ",
      titleAccent: "Flow multicanal coordenado",
      tail: "",
      points: [
        "Arraste e solte etapas de e-mail, LinkedIn e telefone em um único Flow.",
        "Visitas ao perfil, solicitações de conexão, mensagens diretas, InMail e tarefas de ligação, tudo coordenado com a cadência dos seus e-mails.",
        "Condições de ramificação encaminham os contatos automaticamente com base no que eles fazem, então cada caminho é tratado sem intervenção manual.",
      ],
      cta: "Peça uma demo",
      more: "Conheça a prospecção multicanal",
      embed: "06-multichannel-flow",
      recolor: "espresso",
      flip: true,
    },
    {
      n: "03",
      label: "Sincronização automática com o CRM",
      title: "Registre todas as atividades ",
      titleAccent: "no seu CRM em tempo real",
      tail: "",
      points: [
        "Cada ponto de contato (enviado, aberto, respondido, conectado) é registrado automaticamente no Salesforce, HubSpot ou Pipedrive.",
        "Sem digitação manual. Sem dados apodrecendo. Sua equipe trabalha o pipeline, não a planilha.",
      ],
      cta: "Veja ao vivo",
      more: "Conheça a sincronização com o CRM",
      embed: "07-crm-sync-tracker",
      recolor: "espresso",
      flip: false,
    },
  ],
  features: [
    {
      title: "Dados de prospects buscados em tempo real",
      body: "Troque bases de dados estáticas por contatos buscados em tempo real e alinhados ao seu ICP. Sem dados desatualizados, sem verba de prospecção desperdiçada.",
    },
    {
      title: "E-mail, LinkedIn e telefone em um só Flow",
      body: "Rode e-mail, LinkedIn e telefone em um único Flow coordenado, não em ferramentas separadas. Visitas ao perfil, solicitações de conexão, mensagens diretas, InMail e tarefas de ligação rodam todas a partir de um só Flow.",
    },
    {
      title: "Qualificação e roteamento com IA",
      body: "Use IA para qualificar contatos em relação ao seu ICP e encaminhá-los automaticamente para o Flow certo, antes de gastar um único crédito com prospecção.",
      beta: true,
    },
    {
      title: "Cobertura do comitê de compra",
      body: "Alcance todos os decisores de uma conta-alvo por e-mail e LinkedIn a partir de uma única campanha. Sem trocar de ferramenta.",
    },
    {
      title: "Prospecção inteligente com vários remetentes",
      body: "Distribua a prospecção com segurança entre os perfis do CEO, do VP de Vendas e de especialistas para multiplicar o alcance sem queimar nenhum remetente.",
    },
    {
      title: "Verificação de domínios catch-all",
      body: "Uma validação própria verifica domínios catch-all e protege a reputação do seu remetente contra hard bounces e blacklists.",
    },
    {
      title: "Transforme conteúdo do LinkedIn em pipeline",
      body: "Publique um post no LinkedIn e aborde automaticamente todos que curtirem, comentarem ou compartilharem, transformando esses sinais de interesse em pipeline antes dos seus concorrentes.",
      beta: true,
    },
    {
      title: "Segmentação por intenção e sinais",
      body: "Identifique os 5% de compradores ativos no mercado com sinais de intenção em tempo real e encaminhe-os automaticamente para Flows segmentados.",
      beta: true,
    },
  ],
  roles: [
    {
      title: "Vendas",
      line: "Busque, aborde e feche negócios a partir de um só espaço de trabalho. Sem alternar entre abas.",
    },
    {
      title: "Fundadores",
      line: "Faça um outbound liderado pelo fundador que dá resultado, sem contratar uma equipe de SDRs.",
    },
    {
      title: "Operações de vendas",
      line: "Um único sistema de registro, sincronizado automaticamente com o seu CRM.",
    },
    {
      title: "RevOps",
      line: "Dados limpos e validados na entrada e na saída. Sem higienização manual.",
    },
    {
      title: "Marketing",
      line: "Transforme a demanda do LinkedIn em pipeline qualificado e mensurável.",
    },
    {
      title: "Engenheiros de GTM",
      line: "Combine dados em tempo real, Flows multicanal e roteamento em um só lugar.",
    },
  ],
  testimonials: [
    {
      quote: "A automação da hubsell dá o máximo de retorno com o mínimo de esforço na coleta de dados e na prospecção fria. A funcionalidade de prospecção deles é excelente.",
      name: "Richard Wood",
      title: "CEO",
      company: "Safran Software",
      slug: "safran",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp",
      results: [
        {
          metric: "30%",
          label: "de redução no custo de aquisição de clientes",
        },
        {
          metric: "1.000+",
          label: "contas com mais reconhecimento da marca",
        },
        {
          metric: "25 h",
          label: "economizadas por semana",
        },
      ],
    },
    {
      quote: "Graças à hubsell, conseguimos alcançar mais pessoas em menos tempo e, ainda assim, nos comunicar de forma muito personalizada, como faríamos manualmente.",
      name: "Laurent Schauvliege",
      title: "Business Manager",
      company: "Verhaert",
      slug: "verhaert",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif",
      results: [
        {
          metric: "3x",
          label: "mais oportunidades geradas",
        },
        {
          metric: "60%",
          label: "ou mais de taxa de abertura",
        },
        {
          metric: "90%+",
          label: "de personalização",
        },
      ],
    },
    {
      quote: "A hubsell é mais do que um fornecedor: eles podem ser um verdadeiro parceiro e ajudar você em toda a sua abordagem.",
      name: "Peter Mallozzi",
      title: "Outbound Sales",
      company: "Staffbase",
      slug: "staffbase",
      image: "https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png",
      results: [
        {
          metric: "15,6%",
          label: "de respostas em diferentes mercados",
        },
        {
          metric: "3,5%",
          label: "de taxa de engajamento que resulta em uma ligação",
        },
        {
          metric: "15",
          label: "mercados trabalhados com sucesso",
        },
      ],
    },
    {
      quote: "Eu recomendo a hubsell como parceira se você quer gerar resultados reais com vendas e marketing outbound com uma equipe enxuta.",
      name: "Rachel Chan",
      title: "Digital Marketing Team Lead",
      company: "Elium",
      slug: "elium",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif",
      results: [
        {
          metric: "25%",
          label: "de aumento na geração de leads",
        },
        {
          metric: "53%",
          label: "ou mais de taxa de abertura",
        },
        {
          metric: "20 h+",
          label: "economizadas por semana",
        },
      ],
    },
    {
      quote: "Não encontrei nenhuma ferramenta que chegue perto da hubsell em segmentação, detecção de respostas e integrações com redes sociais e CRM.",
      name: "Mark Grasmayer",
      title: "Product Evangelist",
      company: "Workspace 365",
      slug: "workspace365",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif",
      results: [
        {
          metric: "100+",
          label: "novas oportunidades de negócio geradas",
        },
        {
          metric: "71%",
          label: "ou mais de taxa de abertura",
        },
        {
          metric: "33%",
          label: "de redução nos custos de aquisição de clientes",
        },
      ],
    },
    {
      quote: "A hubsell nos ajuda a gerar interações com prospects de vários setores, o que é essencial para a nossa expansão.",
      name: "Eylül Eygi",
      title: "Head of Marketing",
      company: "Sensolus",
      slug: "sensolus",
      image: "https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png",
      results: [
        {
          metric: "30%",
          label: "de redução no CAC",
        },
        {
          metric: "22%",
          label: "de taxa de resposta",
        },
        {
          metric: "61%",
          label: "de taxa de abertura",
        },
      ],
    },
  ],
  insights: [
    {
      title: "A venda começa com um não: uma lição sobre como lidar com objeções",
      excerpt: "Por que \"a venda começa com um não\", os motivos reais pelos quais os prospects rejeitam você e três estratégias para transformar a rejeição em negócios fechados.",
      slug: "the-sale-starts-with-a-no-objection-handling",
      image: "https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png",
    },
    {
      title: "Sete métodos para aumentar a produtividade dos seus vendedores",
      excerpt: "Os maiores fatores que tornam uma equipe de vendas ineficiente e sete formas comprovadas de aumentar a produção sem esgotar a equipe.",
      slug: "methods-increase-productivity-salespeople",
      image: "https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png",
    },
    {
      title: "Por que a geração de leads precisa ser um processo qualitativo",
      excerpt: "Da quantidade à qualidade no outbound automatizado: os perigos do spam, por que dados precisos importam e textos de e-mail que geram confiança.",
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
        label: "Plataformas tudo em um",
        href: "/vs/apollo",
      },
      data: {
        label: "Dados corporativos",
        href: "/vs/zoominfo",
      },
      lookup: {
        label: "Ferramentas de consulta",
        href: "/vs/lusha",
      },
    },
    rows: [
      {
        label: "Dados validados e em tempo real",
        cells: {
          hub: ["yes", "Buscados em tempo real, verificados no momento do uso"],
          aio: ["part", "Base de dados pronta com cerca de 275 milhões"],
          data: ["part", "Grande base de dados estática"],
          lookup: ["part", "Consultas pontuais de contatos"],
        },
      },
      {
        label: "E-mail, LinkedIn e telefone em um Flow",
        cells: {
          hub: ["yes", "Um Flow, ligações como tarefas no CRM"],
          aio: ["part", "E-mail automatizado, LinkedIn manual"],
          data: ["no", "Prospecção vendida à parte"],
          lookup: ["no", "Sem camada de prospecção"],
        },
      },
      {
        label: "Sincronização automática com o CRM",
        cells: {
          hub: ["yes", "Salesforce, HubSpot e Pipedrive"],
          aio: ["part", "Nativa com Salesforce e HubSpot"],
          data: ["part", "Nativa com os principais CRMs"],
          lookup: ["part", "Básica, muitas vezes via Zapier"],
        },
      },
      {
        label: "Você paga pelo que está correto",
        cells: {
          hub: ["yes", "Por contato buscado e validado"],
          aio: ["no", "Por licença, mais créditos"],
          data: ["no", "Contratos anuais de cinco dígitos"],
          lookup: ["part", "Créditos gastos também com resultados ruins"],
        },
      },
      {
        label: "Uma plataforma, não uma stack",
        cells: {
          hub: ["yes", "Dados, prospecção e sincronização juntos"],
          aio: ["part", "Duas das peças"],
          data: ["no", "Só dados"],
          lookup: ["no", "Uma única peça"],
        },
      },
    ],
  },
  faqs: [
    {
      question: "A hubsell pode substituir a minha stack de outbound atual?",
      slug: "hubsell-replace-outbound-stack",
      answer: "<p>Para a maioria das equipes, sim. A hubsell substitui a sua ferramenta de sales intelligence, a sua plataforma de sales engagement e o seu processo manual de prospecção no LinkedIn em uma só plataforma. A maioria das equipes que mudam elimina 2 ou 3 assinaturas de ferramentas em 30 dias. A única coisa que a hubsell não substitui é o seu CRM: ela sincroniza com ele.</p>",
      onHomepage: true,
    },
    {
      question: "Temos que montar as campanhas sozinhos ou a hubsell oferece implantação e estratégia guiadas?",
      slug: "hubsell-onboarding-strategy",
      answer: "<p>Nós não entregamos só um login e desejamos boa sorte. Nossa equipe cuida de toda a configuração da campanha, da busca de dados e da configuração do Flow, para que você rode a sua primeira campanha de outbound em menos de 7 dias e continue melhorando a partir daí.</p>",
      onHomepage: true,
    },
    {
      question: "A hubsell se integra diretamente ao nosso CRM atual?",
      slug: "hubsell-crm-integration",
      answer: "<p>Nós não substituímos o seu sistema de registro; nós o fortalecemos. Todas as atividades, incluindo e-mails enviados, solicitações de conexão no LinkedIn, visualizações de perfil e respostas, são registradas automaticamente no Salesforce, HubSpot ou Pipedrive, acabando com os silos de dados da sua equipe de receita.</p>",
      onHomepage: true,
    },
    {
      question: "Como fazer prospecção no LinkedIn com segurança, sem ter a conta restringida?",
      slug: "safely-outreach-linkedin",
      answer: "<p>O problema é concentrar muita atividade em pouco tempo, o que aciona os algoritmos de segurança do LinkedIn. A hubsell constrói a sua rede de 1º grau de forma lenta e segura, 365 dias por ano, dentro dos limites rígidos da plataforma. O limite do LinkedIn para mensagens diretas é bem mais alto.</p>",
      onHomepage: true,
    },
    {
      question: "Como gerar leads quando as nossas contas-alvo não estão procurando ativamente o nosso software?",
      slug: "generate-leads-out-of-cycle",
      answer: "<p>A maioria dos compradores está presa a contratos ou fora do ciclo de compra. Se você faz um pitch, eles ignoram. Em vez disso, use uma estratégia de conexão \"sempre ativa\" para compartilhar conteúdo útil, insights do setor e convites para eventos. Ao gerar valor de igual para igual agora, você garante que a sua equipe seja a primeira que eles chamam quando a janela de compra realmente abrir.</p>",
      onHomepage: true,
    },
    {
      question: "Como a hubsell se compara ao Outreach ou ao Salesloft?",
      slug: "hubsell-vs-outreach-salesloft",
      answer: "<p>Outreach e Salesloft são ferramentas de sequências de e-mail: não buscam dados e não trabalham com o LinkedIn de forma nativa. Você ainda precisa de um fornecedor de dados à parte e de um processo manual no LinkedIn. A hubsell cobre as três camadas: dados de prospects em tempo real, Flows coordenados de e-mail e LinkedIn com tarefas de ligação e sincronização automática com o CRM. Uma plataforma, uma assinatura. Veja <a href=\"/pt/comparisons/\">como a hubsell se compara</a> com Apollo, ZoomInfo, Cognism, Lusha e Seamless.</p>",
      onHomepage: true,
    },
    {
      question: "Qual é a diferença entre a hubsell e bases de dados B2B estáticas como ZoomInfo ou Apollo?",
      slug: "hubsell-catch-all-domains",
      answer: "<p>A maioria das ferramentas de sales intelligence entrega uma exportação estática e deixa a prospecção para outra plataforma. A hubsell busca os contatos em tempo real no momento do seu pedido e depois permite que você os aborde por e-mail, LinkedIn e telefone e sincronize tudo com o seu CRM, sem trocar de ferramenta. Sem base de dados desatualizada, sem uma stack remendada. Compare em detalhes: <a href=\"/pt/vs/zoominfo/\">alternativa ao ZoomInfo</a> e <a href=\"/pt/vs/apollo/\">alternativa ao Apollo</a>.</p>",
      onHomepage: true,
    },
    {
      question: "A hubsell está em conformidade com o GDPR (RGPD)?",
      slug: "hubsell-gdpr-compliance",
      answer: "<p>Sim. A hubsell fica em Berlim, na Alemanha. Seguimos rigorosamente o RGPD e padrões de privacidade de dados, garantindo que todas as atividades de abordagem atendam às exigências legais.</p>",
      onHomepage: true,
    },
    {
      question: "Qual é a forma mais eficaz de construir uma audiência B2B que não se desatualiza com o tempo?",
      slug: "build-b2b-audience-no-decay",
      answer: "<p>Os endereços de e-mail pertencem ao empregador, então as listas perdem cerca de 30% de validade por ano à medida que as pessoas mudam de emprego. As conexões do LinkedIn estão ligadas à pessoa e vão com ela. Construa a sua audiência como uma rede de 1º grau no LinkedIn e cada mudança de emprego vira uma porta de entrada calorosa em uma nova conta, em vez de um contato perdido.</p>",
      onHomepage: true,
    },
    {
      question: "Que taxas de conversão (aceite, respostas e engajamento) podemos esperar com a hubsell?",
      slug: "hubsell-conversion-rates",
      answer: "<p>Seguindo corretamente o playbook da hubsell, você pode esperar de 25 a 40% de taxa de aceite, de 10 a 15% de taxa de resposta e de 3 a 5% de conversas iniciadas. As conversões ficam no nível mais alto quando os perfis dos remetentes não são comerciais demais.</p>",
      onHomepage: true,
    },
  ],
  s: {
    hero: {
      eyebrow: "Para fundadores e líderes de vendas com mais de 6 ferramentas",
      titlePre: "Gere o mesmo pipeline com ",
      titleAccent: "50 vezes menos",
      titlePost: " prospects.",
      sub: "A hubsell busca contatos em tempo real com base em sinais de compra e roda e-mail, LinkedIn e telefone em um só Flow sincronizado com o seu CRM. Menos pessoas abordadas, as mesmas reuniões marcadas.",
      ctaPrimary: "Agende uma demo",
      stats: [
        {
          value: "30%",
          label: "menos custo de aquisição",
          company: "Safran",
        },
        {
          value: "3x",
          label: "mais oportunidades",
          company: "Verhaert",
        },
        {
          value: "25%",
          label: "mais leads",
          company: "Elium",
        },
      ],
    },
    logos: {
      eyebrow: "Três destas equipes reduziram o custo de aquisição de clientes em 30% ou mais",
      aria: "Logos de empresas que usam a hubsell: Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall e Monotype",
    },
    vvp: {
      eyebrow: "Volume vs. precisão",
      titlePre: "As mesmas 42 oportunidades. ",
      titleAccent: "Uma das abordagens consome todo o seu mercado.",
      titlePost: "",
      lede: "Os dois trimestres terminam com o mesmo pipeline. A diferença é quanto do seu mercado cada um consome e se ainda sobra alguém com quem falar no segundo trimestre.",
      volTag: "Alto volume",
      volTitle: "Enviar para todo o TAM",
      volSub: "Lista comprada, domínios descartáveis, só e-mail, todos os contatos do mercado, todo trimestre.",
      volAria: "Uma grade que representa 100.000 prospects. Todos os pontos ficam vermelhos, porque o mercado inteiro é abordado.",
      preTag: "Prospecção segmentada",
      preTitle: "Enviar para 2% do TAM",
      preSub: "Buscados em tempo real com base em sinais de compra, domínio real, e-mail, LinkedIn e telefone em um só Flow.",
      preAria: "A mesma grade de 100.000 prospects. Só alguns pontos ficam verdes, mostrando 2.000 prospects alcançados.",
      dotCaption: "1 ponto = 100 prospects",
      contactsLabel: "prospects abordados",
      oppsLabel: "oportunidades",
      volChain: "100.000 enviados · 80.000 entregues · 64.000 pessoas certas · 25.600 aberturas · 768 no mercado · 77 positivos · 42 oportunidades",
      preChain: "2.000 buscados · 1.960 entregues · 1.921 pessoas certas · 1.537 alcançados · 307 no mercado · 77 positivos · 42 oportunidades",
      volAfter: "Sobra 0% do seu mercado. No segundo trimestre, as mesmas caixas de entrada recebem tudo de novo.",
      preAfter: "98% do seu mercado continua intacto. O processo pode ser repetido no próximo trimestre.",
      kickerLabel: "Prospects necessários por oportunidade",
      vs: "vs",
      kickerXPost: " vezes menos",
      noteVolLabel: "Alto volume:",
      noteVolBody: "20% de devolução, 20% de pessoas erradas, 40% de abertura, 3% de qualquer mercado está em ciclo de compra em um dado momento, 10% desses confiam o suficiente em um remetente desconhecido para responder, 55% das respostas positivas viram oportunidades.",
      notePreLabel: "Prospecção segmentada:",
      notePreBody: "98% válidos no momento do uso, 80% alcançados por e-mail, LinkedIn e telefone, 20% no mercado porque a lista é buscada com base em sinais de compra, 25% de resposta, os mesmos 55% viram oportunidades.",
    },
    frag: {
      eyebrow: "O problema da stack fragmentada",
      titlePre: "Seis ferramentas na sua stack. Seis faturas. ",
      titleAccent: "E nenhuma conversa com as outras.",
      titlePost: "",
      lede: "A equipe de receita média compra seis ferramentas para fazer um único trabalho. Veja quanto cada uma custa para você e o que a hubsell faz no lugar delas.",
      colTool: "O que você compra",
      colHub: "O que a hubsell faz",
      pairs: [
        {
          tool: "Bases de leads",
          cost: "Os dados perdem 30% de validade por ano. Lacunas de cobertura no seu ICP.",
          cap: "Busca em tempo real",
          capDesc: "Montada com base no seu ICP no dia em que você precisa.",
        },
        {
          tool: "Buscadores de e-mail",
          cost: "Vários fornecedores para gerenciar. Tudo juntado à mão, sem Flow.",
          cap: "Validados no momento do uso",
          capDesc: "Limpos por IA, verificados por pessoas.",
        },
        {
          tool: "Ferramentas de intenção de compra",
          cost: "Sem camada de ação nativa. Os sinais nunca disparam a prospecção.",
          cap: "Camadas de sinais",
          capDesc: "Compradores ativos a partir de mudanças de emprego e eventos.",
        },
        {
          tool: "Ferramentas de cold e-mail",
          cost: "O e-mail roda isolado. O LinkedIn é outra ferramenta.",
          cap: "E-mail e LinkedIn em um só Flow",
          capDesc: "Um único Flow coordenado.",
        },
        {
          tool: "Prospecção no LinkedIn",
          cost: "Só uma solução pontual. Sem ligação com sequências de e-mail.",
          cap: "Todos os decisores, uma campanha",
          capDesc: "Todo o grupo de compra, não uma só pessoa.",
        },
        {
          tool: "Administração do CRM",
          cost: "Os vendedores registram à mão, ou nem registram. CRM sempre desatualizado.",
          cap: "CRM sincronizado",
          capDesc: "Registro automático no Salesforce, HubSpot e Pipedrive.",
        },
      ],
      cta: "Unifique a sua stack hoje",
    },
    zds: {
      eyebrow: "Zero-day sourcing",
      titlePre: "Dados B2B buscados ",
      titleAccent: "no momento em que você precisa",
      titlePost: ". Não no momento em que outra pessoa os coletou.",
      sub: "A hubsell não vende dados de uma base desatualizada. No momento em que você define o seu ICP, buscamos em tempo real no LinkedIn, de acordo com os seus critérios, e validamos no momento do uso. A hubsell fica em Berlim e está em conformidade com o GDPR (RGPD).",
      closer: "Você paga por um contato que está correto hoje, não pelo acesso a 300 milhões de contatos que estavam certos dois anos atrás.",
      cta: "Veja como fazemos",
    },
    ratings: {
      titlePre: "Nota ",
      titleAccent: "4,6+",
      titlePost: " no G2, Capterra e GetApp",
      cue: "Leia as avaliações →",
      aria: (platform2, score, out) => `Leia as avaliações da hubsell no ${platform2} (nota ${score}${out})`,
    },
    pipeline: {
      eyebrow: "O pipeline em três etapas",
      titlePre: "Do ",
      titleAccent: "cadastro à reunião marcada",
      titlePost: " em três etapas.",
    },
    pricing: {
      eyebrow: "Preços",
      titlePre: "Planos para ",
      titleAccent: "fundadores e equipes de vendas",
      titlePost: "",
    },
    usecases: {
      eyebrow: "Casos de uso",
      titlePre: "",
      titleAccent: "Uma só plataforma",
      titlePost: " para GTM",
      sub: "Seja qual for o seu papel na área de receita, a hubsell troca o excesso de ferramentas por uma única abordagem coordenada.",
    },
    featuresSec: {
      eyebrow: "A plataforma",
      titlePre: "Dados em tempo real, e-mail e LinkedIn orquestrados ",
      titleAccent: "em uma só solução",
      titlePost: "",
      beta: "Beta",
      comingSoon: "Em breve",
    },
    testimonialsSec: {
      eyebrow: "Histórias de clientes",
      titlePre: "O que acontece quando ",
      titleAccent: "equipes B2B",
      titlePost: " substituem a stack",
      readPre: "Leia a história de ",
      readPost: " →",
    },
    loop: {
      eyebrow: "Publicar e acompanhar · Beta",
      titlePre: "Seu conteúdo no LinkedIn já gera demanda. Agora ",
      titleAccent: "feche o ciclo",
      titlePost: ".",
      body: "A maior parte do outbound começa fria. Mas todo mundo que curte, comenta ou compartilha o seu conteúdo no LinkedIn já levantou a mão. Hoje você já pode importar para a hubsell as pessoas que interagiram com um post e incluí-las em um Flow. O que chega em beta é o ciclo completo: publicar direto da hubsell, acompanhar cada interação no momento em que acontece e incluir automaticamente cada pessoa em um Flow para contatos aquecidos, sem exportar listas nem trocar de aba.",
      cta: "Agende uma demo",
      nowLabel: "Disponível hoje",
      betaLabel: "Em breve, em beta",
      now: [
        "Importe todos que curtem, comentam ou compartilham",
        "Inclua hoje mesmo em um Flow quem interagiu com o post",
      ],
      beta: [
        "Publique direto da hubsell",
        "Acompanhe cada interação no momento em que acontece",
        "Inclua automaticamente cada pessoa em um Flow para contatos aquecidos",
        "Sem exportar listas, sem trocar de aba",
      ],
    },
    insightsSec: {
      newsTitle: "O que está funcionando no outbound agora",
      newsSub: "Playbooks, entregabilidade e estratégia de outbound, direto na sua caixa de entrada.",
      subscribeLabel: "Inscrever-se",
      emailPlaceholder: "Seu e-mail",
      eyebrow: "Insights",
      titlePre: "",
      titleAccent: "Playbooks",
      titlePost: " e insights de vendas outbound B2B",
      readMore: "Mais insights (em inglês) →",
      cardTag: "Vendas B2B",
    },
    cmp: {
      eyebrow: "Por que a hubsell",
      titlePre: "A maioria das ferramentas para nos dados. ",
      titleAccent: "A hubsell vai além.",
      titlePost: "",
      sub: "A hubsell busca contatos em tempo real, roda e-mail e LinkedIn em um só Flow e sincroniza automaticamente com o seu CRM. Cada ferramenta que você compraria no lugar cobre só uma parte disso. A hubsell cobre tudo.",
      moat: "Muitas ferramentas fazem uma ou duas dessas coisas. Nenhuma faz as três em um só lugar.",
      linksLabel: "Comparando a hubsell com uma ferramenta específica?",
      srYes: "Sim: ",
      srPart: "Parcial: ",
      srNo: "Não: ",
    },
    faqSec: {
      eyebrow: "Perguntas frequentes",
      titlePre: "",
      titleAccent: "Respostas honestas",
      titlePost: ", porque o outbound já é difícil o bastante.",
      seeAll: "Ver todas as perguntas →",
    },
  },
};

// Quotes of the six testimonials that are not on the homepage, by slug.
export const quotesPt: Record<string, string> = {
  matterway: "Testamos várias ferramentas e serviços diferentes, mas só a hubsell entrega tanto a funcionalidade quanto os dados de qualidade para automatizar de verdade o processo de geração de leads.",
  spryker: "A automação da hubsell nos permitiu alcançar e converter mais parceiros e clientes do que qualquer outra plataforma ou canal que eu já usei. A nossa empresa simplesmente não teria crescido sem ela.",
  cibt: "Um excelente produto para vendas B2B. Sempre achei que o conteúdo que a hubsell consegue encontrar é preciso e adequado para os meus prospects. É fácil de usar e acelera a parte de pesquisa da prospecção para a minha equipe.",
  "alon-even": "Excelente prospecção 1:1 em escala por e-mail, LinkedIn e telefone. Dados excelentes que não envelhecem. Um conceito muito inteligente.",
  meetyoo: "Recomendo a hubsell para qualquer pessoa que usa outbound no seu mix de marketing B2B. Ótimo atendimento ao cliente, prestativo e super-rápido!",
  aspire: "Ótimo produto, suporte fantástico. A hubsell melhorou muito a geração de leads na nossa organização. Um ótimo produto com um suporte que realmente se destaca: a equipe sempre faz muito mais do que o esperado para resolver as dúvidas a tempo.",
};
