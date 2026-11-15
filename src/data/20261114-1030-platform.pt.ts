// Platform pages: Brazilian Portuguese, "você".
// Same shape as the English source, which stays the reference.
// Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PlatformData } from './platform-content';

export const platformPt: PlatformData = {
  overview: {
    title: "Plataforma de sales engagement com dados e CRM | hubsell",
    metaDescription: "A hubsell é uma plataforma de sales engagement com dados B2B próprios em tempo real. Busque contatos, rode e-mail, LinkedIn e ligações em um Flow e sincronize tudo com o CRM.",
    eyebrow: "Plataforma de sales engagement",
    h1Pre: "O trabalho de seis ferramentas. ",
    h1Accent: "Uma plataforma",
    h1Post: ".",
    sub: "A hubsell é uma plataforma de sales engagement com dados próprios. Ela busca contatos em tempo real, roda e-mail, LinkedIn e tarefas de ligação em um só Flow e sincroniza cada ponto de contato com o Salesforce, HubSpot ou Pipedrive.",
    compare: {
      eyebrow: "Sales engagement tudo em um",
      titlePre: "Uma stack de outbound com seis ferramentas ou ",
      titleAccent: "uma plataforma",
      titlePost: "",
      colA: "Ferramentas separadas",
      colB: "hubsell",
      rows: [
        [
          "Dados de contato",
          "Uma base de dados comprada uma vez e usada por meses",
          "Buscados em tempo real para cada pesquisa, alinhados ao seu ICP",
        ],
        [
          "Enriquecimento",
          "Uma segunda ferramenta, um CSV entra e outro CSV sai",
          "E-mails e telefones verificados adicionados no mesmo lugar",
        ],
        [
          "Prospecção por e-mail",
          "Uma ferramenta de e-mail que não sabe nada do LinkedIn",
          "Etapas de e-mail e LinkedIn em um só Flow",
        ],
        [
          "LinkedIn",
          "Feito à mão ou em outra ferramenta de automação",
          "Visitas ao perfil, convites, mensagens e InMail como etapas do Flow",
        ],
        ["Ligações", "Um discador e anotações digitadas depois", "Tarefas de ligação criadas no seu CRM"],
        [
          "CRM",
          "Atividades registradas à mão, quando registradas",
          "Contatos e atividades sincronizados com o Salesforce, HubSpot ou Pipedrive",
        ],
        ["Custo", "Várias assinaturas e o trabalho entre elas", "Um login, uma fatura"],
      ],
    },
    heads: {
      stages: {
        eyebrow: "Visão geral da plataforma",
        pre: "Todas as etapas do outbound ",
        accent: "em um só lugar",
        post: "",
      },
      also: {
        eyebrow: "Também na plataforma",
        pre: "Parte da plataforma, ",
        accent: "não um acessório",
        post: "",
      },
      why: {
        eyebrow: "Por que uma só plataforma",
        pre: "Cada parte faz ",
        accent: "as outras funcionarem melhor",
        post: "",
      },
      proof: {
        eyebrow: "Resultados de clientes",
        pre: "Equipes que ",
        accent: "migraram para uma só plataforma",
        post: "",
      },
      closing: {
        eyebrow: "Plataforma de sales engagement",
        pre: "Conheça a plataforma inteira ",
        accent: "em uma só conversa",
        post: ".",
      },
      faq: {
        eyebrow: "Perguntas sobre sales engagement",
        pre: "Perguntas sobre ",
        accent: "a plataforma hubsell",
        post: "",
      },
    },
    stages: [
      {
        eyebrow: "Dados B2B em tempo real",
        title: "Encontre prospects a partir de sinais de compra",
        slice: "live-data",
        href: "/platform/live-data",
        linkLabel: "Conheça os dados em tempo real",
        body: "Os contatos são buscados em tempo real no LinkedIn e em sites de empresas, para a sua pesquisa, a partir de sinais como interação com posts, mudanças de emprego, contratações e seguidores de concorrentes. Cada um é comparado com o seu ICP antes de você usá-lo.",
      },
      {
        eyebrow: "Enriquecimento de dados de contato",
        title: "E-mails e telefones verificados",
        slice: "enrichment",
        href: "/platform/enrichment",
        linkLabel: "Conheça o enriquecimento",
        body: "95% dos e-mails corporativos estão corretos, incluindo domínios catch-all, e cada registro passa por uma verificação de qualidade antes de chegar à prospecção. Os telefones são opcionais e vêm de parceiros escolhidos pela qualidade.",
      },
      {
        eyebrow: "Prospecção multicanal",
        title: "E-mail, LinkedIn e ligações em um só Flow",
        slice: "multichannel",
        href: "/platform/multichannel-outreach",
        linkLabel: "Conheça a prospecção multicanal",
        body: "Visitas ao perfil, solicitações de conexão, mensagens, InMail, e-mails e tarefas de ligação rodam como etapas de um só Flow. Condições encaminham cada contato conforme o que ele faz, então ninguém recebe um e-mail depois de já ter respondido no LinkedIn.",
      },
      {
        eyebrow: "Sincronização com o CRM",
        title: "Cada ponto de contato no registro certo",
        slice: "crm-sync",
        href: "/platform/crm-sync",
        linkLabel: "Conheça a sincronização com o CRM",
        body: "Contatos e atividades vão para o Salesforce, HubSpot ou Pipedrive, enviados à mão ou por regra, e associados aos registros existentes para que nada seja duplicado.",
      },
    ],
    also: [
      {
        title: "Entregabilidade de e-mails",
        href: "/platform/deliverability",
        linkLabel: "Conheça a entregabilidade",
        body: "Os e-mails saem das suas próprias caixas de e-mail do Google ou da Microsoft, pelas APIs deles. Os contatos são verificados antes do primeiro envio, e o volume fica entre baixo e médio, voltado para pessoas que se encaixam no perfil.",
      },
      {
        title: "Personalização com base em sinais",
        href: "/platform/personalisation",
        linkLabel: "Conheça a personalização",
        body: "As mensagens podem começar pelo sinal que colocou o contato na sua lista: o post com que ele interagiu, o emprego que acabou de assumir ou a vaga que a empresa dele está contratando.",
      },
    ],
    why: [
      {
        title: "Dados atuais, menos devoluções",
        body: "Contatos buscados e verificados no dia em que você os usa geram menos devoluções, o que protege a reputação do remetente em todos os e-mails seguintes.",
      },
      {
        title: "Canais coordenados, mais respostas",
        body: "Quando o e-mail e o LinkedIn sabem um do outro, cada contato recebe a próxima etapa que combina com o que ele fez, e não uma segunda mensagem em um canal em que já respondeu.",
      },
      {
        title: "Registro automático, relatórios confiáveis",
        body: "Quando cada ponto de contato chega ao CRM no momento em que acontece, os relatórios de pipeline mostram o que realmente aconteceu, e os vendedores recuperam o tempo que gastavam digitando.",
      },
    ],
    ratingsLine: "Avaliação de 4,6+ no G2, Capterra e GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Leia a história da Workspace 365",
    closingSub: "Traga a sua stack atual para uma conversa rápida e mostraremos como ela fica como um único sistema.",
    faqs: [
      {
        question: "O que é uma plataforma de sales engagement?",
        answer: "<p>Uma plataforma de sales engagement cuida da parte de prospecção das vendas: e-mails, etapas no LinkedIn e ligações, na ordem que você define, com cada ponto de contato rastreado. A hubsell acrescenta as duas coisas que a maioria delas deixa de fora: dados de contato B2B em tempo real para abordar e a sincronização automática dos resultados com o seu CRM.</p>",
      },
      {
        question: "Qual é a diferença entre a hubsell e o Outreach ou o Salesloft?",
        answer: "<p>Outreach e Salesloft são ferramentas de sequências de e-mail. Eles não buscam dados de contato e não trabalham com o LinkedIn de forma nativa, então você ainda precisa de um fornecedor de dados e de um processo manual no LinkedIn ao lado deles. A hubsell cobre os três: dados em tempo real, e-mail e LinkedIn em um só Flow com tarefas de ligação, e sincronização com o CRM.</p>",
      },
      {
        question: "Quais ferramentas a hubsell pode substituir?",
        answer: "<p>Um fornecedor de dados B2B, uma ferramenta de enriquecimento, uma ferramenta de prospecção por e-mail e uma ferramenta de automação do LinkedIn. As ligações rodam como tarefas no seu CRM, então você não precisa de um discador separado para as etapas de outbound, e as atividades são registradas no CRM sem uma ferramenta de sincronização no meio.</p>",
      },
      {
        question: "A hubsell inclui dados de contato B2B?",
        answer: "<p>Sim. A hubsell busca contatos em tempo real para cada pesquisa, no LinkedIn e em sites de empresas, e enriquece os que se encaixam no seu ICP com um e-mail corporativo verificado e, se você quiser, um telefone. Não existe uma base de dados estática cujo acesso você precise comprar. Veja os <a class=\"link\" href=\"/pt/platform/live-data/\">dados em tempo real</a>.</p>",
      },
      {
        question: "Quais canais a hubsell oferece?",
        answer: "<p>E-mail a partir das suas próprias caixas de e-mail do Google ou da Microsoft, LinkedIn (visitas ao perfil, solicitações de conexão, mensagens e InMail) e telefone, como tarefas de ligação no seu CRM. Todos rodam como etapas de um só Flow.</p>",
      },
      {
        question: "Com quais CRMs a hubsell funciona?",
        answer: "<p>Salesforce, HubSpot e Pipedrive. Contatos, empresas e atividades são sincronizados da hubsell para o CRM em tempo real e associados aos registros existentes, para que nada seja duplicado. Veja a <a class=\"link\" href=\"/pt/platform/crm-sync/\">sincronização com o CRM</a>.</p>",
      },
      {
        question: "A hubsell está em conformidade com o GDPR (RGPD)?",
        answer: "<p>Sim. A hubsell fica em Berlim e hospeda os dados em Frankfurt. Ela processa os dados para a finalidade que você define e não os guarda para revender. Você continua sendo o controlador dos dados e a hubsell é a sua operadora, sob um acordo de processamento de dados.</p>",
      },
      {
        question: "Quanto tempo leva para começar?",
        answer: "<p>A equipe da hubsell cuida com você da configuração da campanha, da busca de dados e da configuração do Flow, então a maioria das equipes roda a primeira campanha de outbound em menos de 7 dias.</p>",
      },
      {
        question: "Quanto custa a hubsell?",
        answer: "<p>O Start custa a partir de € 120 por licença por mês e o Grow a partir de € 4.320 por ano. O Scale tem preço definido em uma proposta personalizada, para equipes a partir de 10 licenças. Veja os <a class=\"link\" href=\"/pt/pricing/\">preços</a>.</p>",
      },
      {
        question: "Para quem é a hubsell?",
        answer: "<p>Empresas B2B que vendem para outras empresas: equipes de vendas e SDRs, fundadores que vendem pessoalmente, equipes de RevOps e agências que fazem outbound para clientes. A maioria dos clientes está na Europa.</p>",
      },
    ],
  },
  details: [
    {
      path: "/platform/live-data",
      title: "Fornecedor de dados B2B em tempo real, conforme o RGPD | hubsell",
      metaDescription: "A hubsell é um fornecedor de dados B2B que busca contatos em tempo real, alinhados ao seu ICP e verificados no momento do uso. Dados B2B conforme o RGPD, hospedados em Frankfurt.",
      heroSlice: "live-data",
      compare: {
        eyebrow: "Fornecedor de dados B2B",
        titlePre: "Base de contatos B2B ou ",
        titleAccent: "dados B2B buscados em tempo real",
        titlePost: "",
        colA: "Base de dados comprada",
        colB: "Dados em tempo real da hubsell",
        rows: [
          ["Coletados", "Meses ou anos antes de você usá-los", "No dia em que você pede"],
          [
            "Desatualização",
            "De 25 a 30% ficam desatualizados a cada ano",
            "Buscados do zero a cada pedido, então nada fica parado envelhecendo",
          ],
          [
            "Precisão",
            "Desconhecida até as devoluções chegarem",
            "95%, incluindo domínios catch-all, verificados no momento do uso",
          ],
          [
            "Relevância",
            "Filtrados por cargo e setor",
            "Alinhados ao seu ICP e aos sinais de compra que você escolher",
          ],
          [
            "Pelo que você paga",
            "Acesso a toda a base de dados, usada ou não",
            "Resultados de processamento, etapa por etapa, pelos contatos que você mantém",
          ],
          [
            "Quem controla os dados",
            "O fornecedor guarda e revende",
            "Você é o controlador, a hubsell é a operadora",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Sinais de compra",
          pre: "Seis formas de encontrar ",
          accent: "prospects B2B a partir de sinais de compra",
          post: "",
        },
        steps: {
          eyebrow: "Zero-day sourcing",
          pre: "Como funciona a ",
          accent: "busca de dados B2B em tempo real",
          post: "",
        },
        extra: {
          eyebrow: "GDPR (RGPD)",
          pre: "Dados B2B ",
          accent: "conforme o RGPD",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "dados B2B precisos",
          post: "",
        },
        closing: {
          eyebrow: "Ferramenta de prospecção B2B",
          pre: "Comece a prospecção B2B com ",
          accent: "dados buscados hoje",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre dados B2B",
          pre: "Perguntas sobre ",
          accent: "dados B2B em tempo real",
          post: "",
        },
        explained: {
          eyebrow: "Prospecção no LinkedIn",
          pre: "Prospecção no LinkedIn, ",
          accent: "sinal por sinal",
          post: "",
        },
      },
      signals: {
        sub: "Cada sinal parte de um link, de uma pesquisa ou do seu ICP. A hubsell reúne as pessoas, compara cada uma com o seu ICP e enriquece as que se encaixam, prontas para a prospecção.",
        startLabel: "Parte de",
        items: [
          {
            id: "post",
            title: "Interação com posts do LinkedIn",
            body: "Quem reage, comenta ou compartilha um post do LinkedIn já mostrou interesse no assunto. A hubsell reúne essas pessoas a partir do post, compara cada uma com o seu ICP e enriquece as que se encaixam. Use os seus próprios posts, os de um concorrente ou os de uma voz conhecida do seu setor.",
            start: "Um link para qualquer post do LinkedIn",
          },
          {
            id: "event",
            title: "Participantes de eventos do LinkedIn",
            body: "Quem se inscreve em um evento do LinkedIn se interessou por um tema. A hubsell reúne a lista de participantes, qualifica cada um em relação ao seu ICP e enriquece os contatos que se encaixam, para que você os aborde antes, durante ou depois do evento.",
            start: "Um link para um evento do LinkedIn",
          },
          {
            id: "followers",
            title: "Seguidores da sua empresa e de concorrentes",
            body: "Quem segue a página da sua empresa já conhece você. Quem segue a página de um concorrente se interessa pelo que você vende. A hubsell reúne os dois grupos e mantém só as pessoas que se encaixam no seu ICP.",
            start: "A página da sua empresa ou a de um concorrente",
          },
          {
            id: "jobs",
            title: "Mudanças de emprego",
            body: "Quem acabou de assumir um cargo está montando a sua stack e a sua equipe, por isso os primeiros meses são o melhor momento para abordá-lo. A hubsell encontra pessoas que mudaram de emprego recentemente nas suas contas e cargos-alvo.",
            start: "O seu ICP: cargos e empresas-alvo",
          },
          {
            id: "hiring",
            title: "Empresas contratando para cargos específicos",
            body: "Uma empresa que contrata SDRs ou executivos de contas está investindo em vendas agora. A hubsell usa uma pesquisa do LinkedIn filtrada por empresas que estão contratando para esses cargos e encontra os decisores dessas empresas.",
            start: "Uma pesquisa do LinkedIn com o filtro de contratação",
          },
          {
            id: "search",
            title: "Pesquisas do LinkedIn e do Sales Navigator",
            body: "Se você já sabe quem quer, cole uma pesquisa de pessoas do LinkedIn ou uma pesquisa de leads do Sales Navigator. A hubsell executa a pesquisa, qualifica os resultados com IA e enriquece os que se encaixam, sem exportar uma lista à mão.",
            start: "Um link de pesquisa do LinkedIn ou do Sales Navigator",
          },
        ],
      },
      faqs: [
        {
          question: "O que são dados B2B buscados em tempo real e qual é a diferença para uma base de contatos B2B?",
          answer: "<p>Dados buscados em tempo real são coletados no momento em que você pede, para a sua pesquisa, em vez de virem de uma base de dados montada meses ou anos antes. A hubsell monta um conjunto novo de contatos para cada pedido, alinhado ao seu ICP e verificado no momento do uso. Uma base de contatos vende acesso a registros que estão envelhecendo desde o dia em que foram coletados.</p>",
        },
        {
          question: "Com que rapidez os dados de contato B2B ficam desatualizados?",
          answer: "<p>Os decisores B2B mudam de emprego a cada 2,5 anos, em média, então uma base de dados estática perde de 25 a 30% da precisão a cada ano. E-mails voltam, cargos mudam e pessoas vão para outra empresa. Dados buscados no dia em que você os usa evitam essa desatualização.</p>",
        },
        {
          question: "De onde vêm os dados B2B da hubsell?",
          answer: "<p>A hubsell busca dados em tempo real no LinkedIn e em sites de empresas, e também cria dados ela mesma, por exemplo gerando e validando endereços de e-mail corporativos. Os telefones vêm de parceiros escolhidos pela precisão e pela qualidade, não pelo preço.</p>",
        },
        {
          question: "Os dados B2B da hubsell estão em conformidade com o GDPR (RGPD)?",
          answer: "<p>Sim. A hubsell busca e processa os dados sob demanda para cada cliente e não os guarda para revender. O cliente é o controlador dos dados e a hubsell é a operadora, sob um acordo de processamento de dados. A hubsell fica em Berlim, roda em servidores em Frankfurt e exclui os dados da conta em até 30 dias após o fim do contrato.</p>",
        },
        {
          question: "Qual é a base legal para a prospecção B2B segundo o RGPD?",
          answer: "<p>Na prospecção de contatos profissionais, a base legal costuma ser o legítimo interesse. Com a hubsell, o cliente continua sendo o controlador dos dados e define a finalidade antes de qualquer contato ser buscado, e a hubsell processa os dados somente para essa finalidade. As regras para cold e-mail variam de país para país, então leia o nosso <a class=\"link\" href=\"/insights/b2b-data-compliance/\">guia sobre conformidade de dados B2B</a> (em inglês).</p>",
        },
        {
          question: "A partir de quais sinais de compra a hubsell pode buscar contatos?",
          answer: "<p>A hubsell pode buscar pessoas que interagiram com um post do LinkedIn, participaram de um evento do LinkedIn, seguem a página da sua empresa ou a de um concorrente, mudaram de emprego recentemente ou trabalham em empresas que estão contratando para cargos específicos. Você também pode partir de uma pesquisa do LinkedIn ou do Sales Navigator, ou importar a sua própria lista.</p>",
        },
        {
          question: "Como a hubsell encontra as pessoas que interagiram com um post do LinkedIn ou participaram de um evento?",
          answer: "<p>Cole o link do post ou do evento na hubsell. Ela reúne as pessoas que reagiram, comentaram ou se inscreveram, qualifica cada uma em relação ao seu ICP e enriquece as que se encaixam com dados de contato verificados. Depois, elas podem entrar direto em um Flow de LinkedIn, e-mail e tarefas de ligação.</p>",
        },
        {
          question: "Qual é a precisão dos dados de contato da hubsell?",
          answer: "<p>Os dados da hubsell têm 95% de precisão, incluindo domínios catch-all, e cobrem de 80 a 90% de um mercado-alvo. Cada registro é verificado no momento do uso, e não quando foi coletado pela primeira vez. A hubsell faz com prazer um teste comparativo com o seu fornecedor atual.</p>",
        },
        {
          question: "Como a hubsell cobra pelos dados, e eu pago por contatos que não posso usar?",
          answer: "<p>Você paga por resultados de processamento, etapa por etapa: a busca, depois o enriquecimento, os endereços de e-mail validados e os telefones. Como cada etapa é cobrada separadamente, você pode revisar primeiro os contatos buscados e suprimir os que não são relevantes, e assim só paga para enriquecer os contatos que mantém. <a class=\"link\" href=\"/pt/pricing/\">Veja os preços</a>.</p>",
        },
        {
          question: "Como a hubsell se compara ao ZoomInfo, Apollo ou Cognism em dados B2B?",
          answer: "<p>ZoomInfo, Apollo e Cognism vendem acesso a uma base de dados. A hubsell busca os dados do zero a cada pedido, então eles estão atualizados, qualificados em relação ao seu ICP e ligados aos sinais que você escolhe. A hubsell também roda a prospecção e a sincroniza com o seu CRM, enquanto essas ferramentas param, na maior parte, nos dados. Compare: <a class=\"link\" href=\"/pt/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/pt/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/pt/vs/cognism/\">Cognism</a>.</p>",
        },
      ],
      extra: {
        title: "Dados B2B conforme o RGPD",
        paras: [
          "A hubsell busca e processa os dados sob demanda, para uma finalidade que você define antes de qualquer contato ser buscado, e não os guarda para revender. Você continua sendo o controlador dos dados e a hubsell é a sua operadora. Um fornecedor de base de dados funciona ao contrário: coleta dados para vendê-los de novo.",
          "A prospecção de contatos profissionais se apoia no legítimo interesse previsto no GDPR (RGPD). A hubsell fica em Berlim, na Alemanha, e a plataforma roda em servidores da Amazon Web Services em Frankfurt.",
          "Todo cliente pode assinar o acordo de processamento de dados da hubsell, que define como os dados pessoais são tratados, quais suboperadores podem trabalhar com eles e como são respondidos os pedidos das pessoas que constam nos seus dados. Quando um contrato termina, os dados da sua conta são excluídos em até 30 dias.",
        ],
        links: [
          {
            label: "Leia o acordo de processamento de dados (em inglês)",
            href: "/data-processing-agreement",
          },
          {
            label: "Guia: conformidade de dados B2B e prospecção fria (em inglês)",
            href: "/insights/b2b-data-compliance",
          },
          {
            label: "Alternativa ao Cognism: como os dois se comparam",
            href: "/vs/cognism",
          },
          {
            label: "Alternativa ao ZoomInfo: como os dois se comparam",
            href: "/vs/zoominfo",
          },
        ],
      },
      eyebrow: "Dados B2B em tempo real",
      h1Pre: "Dados B2B buscados ",
      h1Accent: "hoje",
      h1Post: ", não há dois anos",
      sub: "A hubsell é um fornecedor de dados B2B que não vende acesso a uma base de dados estática. Defina o seu ICP e nós buscamos contatos em tempo real no LinkedIn, acrescentamos sinais de compra e verificamos cada registro antes de ele entrar no seu Flow.",
      demoCta: "Agende uma demo",
      heroTimeline: true,
      row: {
        titlePre: "Buscados a partir de ",
        titleAccent: "sinais de compra em tempo real",
        titlePost: "",
        points: [
          "A maioria das plataformas deixa você filtrar por cargo e setor. A hubsell também lê o comportamento.",
          "Pessoas que seguem a página da sua empresa ou a de um concorrente, interagem com um post do LinkedIn, mudam de emprego, vão a eventos ou estão contratando para cargos específicos.",
          "Os sinais mostram quem vale a pena contatar nesta semana, e não só quem passa em um filtro.",
        ],
        embed: "05-sp-widget",
        stepEyebrow: "Como funciona",
        stepTitle: "Do sinal em tempo real ao contato verificado",
      },
      gridTitlePre: "Dados de contato B2B ",
      gridTitleAccent: "corretos no dia em que você os usa",
      gridTitlePost: "",
      blocks: [
        {
          title: "Zero-day sourcing",
          body: "Uma base de dados sob medida, montada no momento do seu pedido, e não uma lista compartilhada coletada anos atrás. Atualizada naquele dia, com cobertura de 80 a 90% do seu mercado-alvo.",
        },
        {
          title: "Alinhados ao seu ICP",
          body: "Defina o seu perfil de cliente ideal uma vez. Cada contato que entra no seu Flow é comparado com ele antes de você gastar um único crédito com prospecção.",
        },
        {
          title: "Verificados no momento do uso",
          body: "Cada registro é verificado no momento em que é buscado, incluindo domínios catch-all. As devoluções ficam baixas e a reputação do seu remetente continua intacta.",
        },
        {
          title: "Feitos para não envelhecer",
          body: "O decisor B2B médio muda de emprego a cada 2,5 anos, então listas estáticas perdem de 25 a 30% da validade por ano. A busca em tempo real torna essa desatualização irrelevante: os dados estão corretos no dia em que você os usa.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda com dados precisos",
      quoteSlug: "alon-even",
      storySlug: "sensolus",
      storyLabel: "Leia a história da Sensolus",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre dados em tempo real",
      faqSlugs: ["stop-sales-email-bounces", "build-b2b-audience-no-decay"],
      closing: {
        titlePre: "Veja o seu mercado, buscado ",
        titleAccent: "hoje",
        titlePost: ".",
        sub: "Conte para nós o seu ICP em uma conversa rápida e mostraremos o que o zero-day sourcing encontra para ele.",
      },
      closingCta: "Agende uma demo",
    },
    {
      path: "/platform/multichannel-outreach",
      title: "Prospecção multicanal: e-mail, LinkedIn e telefone | hubsell",
      metaDescription: "Rode LinkedIn, e-mail e tarefas de ligação em um só Flow. Automação segura do LinkedIn com vários perfis de remetente, e-mail das suas caixas e ligações no CRM.",
      heroSlice: "multichannel",
      compare: {
        eyebrow: "Prospecção no LinkedIn e por e-mail",
        titlePre: "Três ferramentas separadas ou ",
        titleAccent: "um Flow multicanal",
        titlePost: "",
        colA: "Ferramentas separadas",
        colB: "Prospecção multicanal da hubsell",
        rows: [
          [
            "Canais",
            "Uma ferramenta de e-mail, uma de LinkedIn e uma lista de tarefas, cada uma isolada",
            "E-mail, LinkedIn e tarefas de ligação em um só Flow",
          ],
          [
            "Reação ao contato",
            "Alguém precisa parar as outras ferramentas à mão",
            "Ramificações encaminham cada contato conforme o que ele faz: aceitou, abriu, respondeu ou ficou em silêncio",
          ],
          [
            "Quem envia no LinkedIn",
            "Perfis de SDR, menos de 20% dos convites aceitos",
            "Perfis de fundadores e especialistas, mais de 50% aceitos",
          ],
          [
            "Volume no LinkedIn",
            "Um único perfil concentra toda a atividade",
            "Distribuído entre 5 e 10 perfis de remetente, dentro de limites rígidos",
          ],
          [
            "Envio de e-mails",
            "Por servidores de envio externos e links de rastreamento",
            "Das suas próprias caixas de e-mail, pelas APIs do Google e da Microsoft",
          ],
          [
            "Ligações",
            "Um discador separado e registro manual",
            "Tarefas de ligação no Salesforce, HubSpot ou Pipedrive, registradas junto com o Flow",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Plataforma de prospecção multicanal",
          pre: "Uma plataforma de prospecção multicanal, ",
          accent: "não três ferramentas",
          post: "",
        },
        explained: {
          eyebrow: "Automação do LinkedIn",
          pre: "Prospecção no LinkedIn e por e-mail, ",
          accent: "etapa por etapa",
          post: "",
        },
        steps: {
          eyebrow: "Como funciona",
          pre: "Como roda ",
          accent: "um Flow multicanal",
          post: "",
        },
        extra: {
          eyebrow: "Segurança no LinkedIn",
          pre: "",
          accent: "Automação segura do LinkedIn",
          post: ", dentro dos limites",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "uma prospecção coordenada",
          post: "",
        },
        closing: {
          eyebrow: "Prospecção no LinkedIn e por e-mail",
          pre: "Rode LinkedIn, e-mail e ligações em ",
          accent: "um só Flow",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre prospecção multicanal",
          pre: "Perguntas sobre ",
          accent: "prospecção multicanal",
          post: "",
        },
      },
      signals: {
        sub: "Cada etapa é um bloco no editor de Flows. Coloque as etapas na ordem que combina com os seus compradores e deixe as condições decidirem quem vai para onde.",
        startLabel: "Use para",
        items: [
          {
            id: "visit",
            title: "Visitas ao perfil",
            body: "Uma visita ao perfil mostra ao prospect quem está prestes a entrar em contato, antes de qualquer pedido.",
            start: "Aquecer um contato antes do convite",
          },
          {
            id: "invite",
            title: "Solicitações de conexão",
            body: "Os convites saem dos perfis que os compradores aceitam. Solicitações de fundadores e especialistas são aceitas em mais de 50% dos casos, enquanto perfis de SDR ficam abaixo de 20%.",
            start: "Construir uma rede de 1º grau com os seus compradores",
          },
          {
            id: "message",
            title: "Mensagens no LinkedIn",
            body: "Quando um convite é aceito, uma mensagem direta vem depois do tempo de espera que você definir. O que acontece em seguida depende de o contato responder ou não.",
            start: "A primeira conversa de verdade",
          },
          {
            id: "inmail",
            title: "InMail",
            body: "O InMail alcança pessoas fora da sua rede sem uma solicitação de conexão antes.",
            start: "Contatos importantes demais para esperar",
          },
          {
            id: "email",
            title: "Etapas de e-mail",
            body: "Os e-mails saem das suas próprias caixas de e-mail do Google ou da Microsoft, pelas APIs deles, sem servidor externo nem redirecionamento de rastreamento no caminho.",
            start: "Todos com um e-mail verificado, incluindo quem não aceitou",
          },
          {
            id: "call",
            title: "Tarefas de ligação",
            body: "As etapas de telefone criam tarefas de ligação no Salesforce, HubSpot ou Pipedrive. Os vendedores ligam a partir do CRM e o resultado é registrado junto com o resto do Flow.",
            start: "Os contatos que valem uma conversa",
          },
          {
            id: "branch",
            title: "Condições e ramificações",
            body: "Cada contato é encaminhado conforme o que faz: aceitou, abriu, respondeu ou ficou em silêncio. Quem aceita recebe uma mensagem, quem não aceita recebe um e-mail no lugar.",
            start: "Manter cada contato no caminho certo",
          },
          {
            id: "wait",
            title: "Esperas",
            body: "As etapas de espera espaçam os pontos de contato, por exemplo um dia depois de um convite aceito, ou uma semana antes de retirar um convite sem resposta.",
            start: "Um ritmo que parece pessoal, não automatizado",
          },
        ],
      },
      extra: {
        title: "Automação segura do LinkedIn",
        paras: [
          "O LinkedIn restringe contas quando muita atividade se concentra em pouco tempo. A hubsell faz o contrário: constrói a sua rede de 1º grau de forma lenta e constante, 365 dias por ano, dentro dos limites rígidos da plataforma.",
          "A atividade é distribuída entre 5 e 10 perfis de remetente da sua equipe, então nenhum perfil carrega o volume sozinho. Menos volume por remetente mantém cada perfil saudável e também protege o seu domínio de e-mail.",
          "Convites não aceitos são retirados depois do tempo de espera que você definir, para que as solicitações pendentes não se acumulem em um perfil.",
        ],
        links: [
          {
            label: "Como a hubsell protege a entregabilidade dos e-mails",
            href: "/platform/deliverability",
          },
        ],
      },
      faqs: [
        {
          question: "O que é uma plataforma de prospecção multicanal?",
          answer: "<p>Uma plataforma de prospecção multicanal roda LinkedIn, e-mail e telefone em um só Flow, em vez de três ferramentas separadas. A hubsell decide a próxima etapa de cada contato com base no que ele fez em qualquer canal, então um convite aceito, um e-mail aberto ou uma resposta fazem o contato avançar sem ninguém trocar de ferramenta.</p>",
        },
        {
          question: "Posso rodar a prospecção no LinkedIn e por e-mail em um só Flow?",
          answer: "<p>Sim. Na hubsell, as etapas do LinkedIn (visitas ao perfil, solicitações de conexão, mensagens, InMail), as etapas de e-mail e as tarefas de ligação ficam em um só Flow. Condições encaminham cada contato: quem aceita o convite recebe uma mensagem no LinkedIn, quem não aceita recebe um e-mail no lugar.</p>",
        },
        {
          question: "A automação do LinkedIn é segura? Como a hubsell evita restrições?",
          answer: "<p>O LinkedIn restringe contas quando muita atividade se concentra em um período curto. A hubsell constrói a sua rede de 1º grau de forma lenta e constante, 365 dias por ano, dentro dos limites rígidos da plataforma, e distribui a atividade entre 5 e 10 perfis de remetente, para que nenhum perfil carregue o volume sozinho.</p>",
        },
        {
          question: "Quais ações do LinkedIn a hubsell pode automatizar?",
          answer: "<p>Visitas ao perfil, solicitações de conexão, mensagens diretas e InMail, além da retirada de convites que não foram aceitos. Cada ação é uma etapa no mesmo Flow dos seus e-mails e tarefas de ligação.</p>",
        },
        {
          question: "A hubsell envia e-mails da minha própria caixa de e-mail?",
          answer: "<p>Sim. Os e-mails saem das suas próprias caixas de e-mail do Google ou da Microsoft, pelas APIs deles. Não há servidor SMTP externo nem redirecionamento de rastreamento no e-mail, o que faz as suas mensagens parecerem o que são: e-mails reais de uma pessoa real. Saiba mais sobre <a class=\"link\" href=\"/pt/platform/deliverability/\">entregabilidade</a>.</p>",
        },
        {
          question: "Quem deve fazer a prospecção no LinkedIn: SDRs ou executivos?",
          answer: "<p>O remetente muda o resultado. Solicitações de conexão de SDRs costumam ser aceitas em menos de 20% dos casos, porque os compradores esperam um pitch. A mesma solicitação vinda de um fundador, executivo ou especialista no assunto é aceita em mais de 50% dos casos. A hubsell faz a prospecção a partir dos perfis que os compradores aceitam.</p>",
        },
        {
          question: "A hubsell pode fazer prospecção com vários perfis do LinkedIn ao mesmo tempo?",
          answer: "<p>Sim. A hubsell faz a prospecção com o seu CEO, os seus líderes de vendas e os seus especialistas a partir de um só lugar, para que várias pessoas abordem a mesma conta de forma coordenada, e o volume é distribuído entre os perfis delas.</p>",
        },
        {
          question: "Que resultados posso esperar da prospecção no LinkedIn e por e-mail com a hubsell?",
          answer: "<p>Seguindo o playbook da hubsell, as equipes costumam ver de 25 a 40% das solicitações de conexão aceitas, de 10 a 15% de respostas e de 3 a 5% de conversas iniciadas. Os resultados ficam no nível mais alto quando os perfis dos remetentes não parecem comerciais demais.</p>",
        },
        {
          question: "A hubsell pode fazer ligações?",
          answer: "<p>A hubsell não tem discador próprio. As etapas de telefone criam tarefas de ligação no Salesforce, HubSpot ou Pipedrive, então os vendedores ligam a partir do CRM que já usam e o resultado é registrado junto com o resto do Flow. Veja a <a class=\"link\" href=\"/pt/platform/crm-sync/\">sincronização com o CRM</a>.</p>",
        },
        {
          question: "Como a hubsell se compara ao Outreach ou ao Salesloft?",
          answer: "<p>Outreach e Salesloft são ferramentas de sequências de e-mail: não buscam dados e não trabalham com o LinkedIn de forma nativa, então você ainda precisa de um fornecedor de dados e de um processo manual no LinkedIn. A hubsell cobre as três camadas: dados de prospects em tempo real, LinkedIn e e-mail em um só Flow com tarefas de ligação, e sincronização automática com o CRM.</p>",
        },
      ],
      eyebrow: "Prospecção multicanal",
      h1Pre: "Prospecção multicanal por ",
      h1Accent: "e-mail, LinkedIn e telefone",
      h1Post: "",
      sub: "Pare de equilibrar uma ferramenta de e-mail, uma de LinkedIn e uma lista de tarefas. A hubsell roda os três canais em um só Flow coordenado, que reage ao que cada contato faz.",
      demoCta: "Agende uma demo",
      row: {
        titlePre: "Uma plataforma de prospecção multicanal, ",
        titleAccent: "não três ferramentas",
        titlePost: "",
        points: [
          "Arraste e solte etapas de e-mail, LinkedIn e telefone em um único Flow.",
          "Visitas ao perfil, solicitações de conexão, mensagens diretas, InMail e tarefas de ligação, tudo coordenado com a cadência dos seus e-mails.",
          "Condições de ramificação encaminham cada contato conforme o que ele faz: abriu, respondeu, aceitou ou ficou em silêncio.",
        ],
        embed: "06-multichannel-flow",
        stepEyebrow: "Como funciona",
        stepTitle: "Um Flow para todos os canais",
      },
      gridTitlePre: "Feito para ",
      gridTitleAccent: "chegar à caixa de entrada e ter resposta",
      gridTitlePost: "",
      blocks: [
        {
          title: "Entregabilidade desde a concepção",
          body: "Os e-mails são enviados pelas APIs do Google e da Microsoft diretamente das suas próprias caixas de e-mail, sem servidores externos no caminho. As taxas de abertura continuam confiáveis e os filtros de spam não se alarmam.",
        },
        {
          title: "Envio seguro e distribuído",
          body: "A prospecção é distribuída entre 5 e 10 perfis de remetente internos, dentro de limites rígidos da plataforma. Menos volume por remetente, mais entregabilidade, nenhum domínio queimado. A automação do LinkedIn roda com limites diários seguros em cada perfil.",
        },
        {
          title: "Enviado dos perfis certos",
          body: "Solicitações de conexão de SDRs ficam abaixo de 20% de aceite porque os compradores esperam um pitch. A mesma solicitação de um fundador ou especialista passa de 50%. A hubsell faz a prospecção a partir dos perfis que os compradores aceitam.",
        },
        {
          title: "Ligações onde os vendedores trabalham",
          body: "As etapas de telefone viram tarefas de ligação no Salesforce, HubSpot ou Pipedrive, então os vendedores ligam a partir do CRM que já usam e o resultado é registrado junto com o resto do Flow.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda com uma prospecção coordenada",
      quoteSlug: "meetyoo",
      storySlug: "verhaert",
      storyLabel: "Leia a história da Verhaert",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre prospecção",
      faqSlugs: [
        "mass-email-brand-reputation",
        "sdr-vs-executive-linkedin-outreach",
        "hubsell-email-infrastructure",
      ],
      closing: {
        titlePre: "Rode os três canais em ",
        titleAccent: "um só Flow",
        titlePost: ".",
        sub: "Traga uma das suas campanhas atuais para uma conversa rápida e vamos montá-la em um único Flow da hubsell.",
      },
      closingCta: "Agende uma demo",
    },
    {
      path: "/platform/crm-sync",
      title: "Sincronização com o CRM: LinkedIn e e-mail no HubSpot, Salesforce e Pipedrive | hubsell",
      metaDescription: "Sincronize atividades do LinkedIn e de e-mail com o HubSpot, Salesforce ou Pipedrive. Envie contatos à mão ou por regra, associe registros e registre cada ponto de contato.",
      heroSlice: "crm-sync",
      compare: {
        eyebrow: "Integração com o CRM",
        titlePre: "Registro manual no CRM ou ",
        titleAccent: "sincronização automática com o CRM",
        titlePost: "",
        colA: "Registro à mão",
        colB: "Sincronização com o CRM da hubsell",
        rows: [
          [
            "Entrada de contatos",
            "Exportações e importações de CSV, ou registros digitados",
            "Enviados à mão ou automaticamente, pelas condições que você define",
          ],
          [
            "Duplicados",
            "Um segundo registro cada vez que alguém importa uma lista",
            "Associados aos registros existentes, em vez de criar novos",
          ],
          [
            "Atividade no LinkedIn",
            "Fica no LinkedIn, invisível para o resto da equipe",
            "Visitas, convites, mensagens e respostas no registro do contato",
          ],
          [
            "Atividade de e-mail",
            "Registrada quando um vendedor lembra",
            "Envios, aberturas e respostas registrados no momento em que acontecem",
          ],
          [
            "Ligações",
            "Um discador e uma anotação digitada depois",
            "Tarefas de ligação no CRM, resultado no registro",
          ],
          [
            "Clientes atuais",
            "Contatados de novo porque ninguém consultou o CRM",
            "Contatos do CRM suprimidos antes de a prospecção começar",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Integração com o CRM",
          pre: "Cada ponto de contato ",
          accent: "registrado no seu CRM",
          post: "",
        },
        explained: {
          eyebrow: "Sincronize o LinkedIn com o seu CRM",
          pre: "O que a hubsell sincroniza ",
          accent: "com o seu CRM",
          post: "",
        },
        steps: {
          eyebrow: "Como funciona",
          pre: "Da etapa do Flow ",
          accent: "ao registro no CRM",
          post: "",
        },
        extra: {
          eyebrow: "Integração com Salesforce, HubSpot e Pipedrive",
          pre: "O seu CRM continua sendo ",
          accent: "o sistema de registro",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "o registro automático no CRM",
          post: "",
        },
        closing: {
          eyebrow: "Sincronização automática com o CRM",
          pre: "O seu CRM ",
          accent: "sempre atualizado",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre a sincronização com o CRM",
          pre: "Perguntas sobre ",
          accent: "a sincronização com o CRM",
          post: "",
        },
      },
      signals: {
        sub: "Tudo o que está abaixo pode ir para o Salesforce, HubSpot ou Pipedrive. Você escolhe o que é enviado e quando.",
        startLabel: "No CRM",
        items: [
          {
            id: "company",
            title: "Contatos e empresas",
            body: "As pessoas e as empresas delas são criadas no CRM, ou associadas ao registro que já existe e atualizadas.",
            start: "Um registro por pessoa",
          },
          {
            id: "email",
            title: "Atividade de e-mail",
            body: "Cada e-mail que um Flow envia, além das aberturas e respostas, é registrado no contato no momento em que acontece.",
            start: "Atividade na linha do tempo do contato",
          },
          {
            id: "invite",
            title: "Convites e conexões do LinkedIn",
            body: "Solicitações de conexão e convites aceitos aparecem no contato ao lado do e-mail, para que toda a equipe veja o lado do LinkedIn na prospecção.",
            start: "Atividade na linha do tempo do contato",
          },
          {
            id: "message",
            title: "Mensagens e respostas no LinkedIn",
            body: "Mensagens e InMails enviados dos perfis da sua equipe, e as respostas a eles, são registrados no registro do contato.",
            start: "Atividade na linha do tempo do contato",
          },
          {
            id: "call",
            title: "Tarefas de ligação e resultados",
            body: "As etapas de telefone criam uma tarefa de ligação no CRM. O vendedor liga a partir do CRM e registra o resultado lá.",
            start: "Uma tarefa no CRM",
          },
          {
            id: "branch",
            title: "Regras de envio",
            body: "Decida quais contatos vão para o CRM: envie à mão ou defina condições, por exemplo apenas os contatos que respondem.",
            start: "Só os contatos que merecem um registro",
          },
          {
            id: "map",
            title: "Mapeamento de campos",
            body: "Escolha qual campo da hubsell preenche qual campo do CRM, para que os dados cheguem onde os seus relatórios esperam.",
            start: "Os seus campos, a sua estrutura",
          },
          {
            id: "ban",
            title: "Supressão de contatos do CRM",
            body: "Contatos que já estão no seu CRM, como clientes ou negócios em aberto, podem ficar de fora antes de a prospecção começar.",
            start: "Não contatar clientes por engano",
          },
        ],
      },
      extra: {
        title: "O seu CRM continua sendo o sistema de registro",
        paras: [
          "A hubsell grava no Salesforce, HubSpot e Pipedrive. Ela não os substitui, e a sua equipe não precisa trabalhar em dois lugares.",
          "Antes de gravar, a hubsell procura o registro que já existe e o atualiza, então enviar a mesma pessoa duas vezes não cria um segundo contato.",
          "Contatos que já estão no seu CRM podem ser suprimidos antes de um Flow começar, para que clientes e negócios em aberto não sejam contatados por engano.",
        ],
        links: [
          {
            label: "Como conectar o seu CRM (em inglês)",
            href: "/knowledge/connect-your-crm",
          },
        ],
      },
      faqs: [
        {
          question: "A hubsell se integra ao HubSpot, Salesforce e Pipedrive?",
          answer: "<p>Sim. A hubsell tem integrações nativas com os três. Você conecta o seu CRM uma vez em Integrações e concede as permissões que ele pede. A partir daí, a sincronização roda em tempo real, sem Zapier, middleware ou arquivos CSV. Veja <a class=\"link\" href=\"/knowledge/connect-your-crm/\">como conectar o seu CRM</a> (em inglês).</p>",
        },
        {
          question: "Como sincronizo a atividade do LinkedIn com o HubSpot?",
          answer: "<p>Conecte o HubSpot à hubsell e rode a sua prospecção no LinkedIn em um Flow da hubsell. Visitas ao perfil, solicitações de conexão, convites aceitos, mensagens e respostas passam a ser registrados no contato do HubSpot, ao lado da atividade de e-mail e das tarefas de ligação. Salesforce e Pipedrive funcionam da mesma forma.</p>",
        },
        {
          question: "O que a hubsell sincroniza com o meu CRM?",
          answer: "<p>Contatos e as empresas deles, atividade de e-mail (enviado, aberto, respondido), atividade no LinkedIn (visitas ao perfil, solicitações de conexão, convites aceitos, mensagens, InMail e respostas) e tarefas de ligação com os resultados.</p>",
        },
        {
          question: "Os contatos são enviados ao meu CRM automaticamente?",
          answer: "<p>Só se você quiser. Você pode enviar contatos à mão ou definir condições que os enviam automaticamente, por exemplo apenas os contatos que respondem. Conectar o seu CRM não envia nada por si só.</p>",
        },
        {
          question: "A hubsell vai criar registros duplicados no meu CRM?",
          answer: "<p>Não. Antes de gravar, a hubsell associa cada contato e cada empresa ao registro que já existe e o atualiza, em vez de criar um segundo.</p>",
        },
        {
          question: "Posso excluir contatos que já estão no meu CRM?",
          answer: "<p>Sim. Contatos que já estão no seu CRM, como clientes ou pessoas em negócios em aberto, podem ser suprimidos antes de a prospecção começar, para que ninguém seja contatado por engano.</p>",
        },
        {
          question: "A sincronização da hubsell com o CRM é bidirecional?",
          answer: "<p>Hoje a sincronização vai da hubsell para o seu CRM. A hubsell grava contatos, empresas e atividades, e consulta o CRM para encontrar registros existentes e contatos a suprimir. Alterações feitas no CRM ainda não são gravadas de volta na hubsell. A sincronização bidirecional está planejada.</p>",
        },
        {
          question: "Posso escolher quais campos do CRM a hubsell preenche?",
          answer: "<p>Sim. Você mapeia os campos da hubsell para os campos do seu CRM, para que os dados cheguem onde os seus relatórios e processos esperam.</p>",
        },
        {
          question: "Como as ligações são registradas no CRM?",
          answer: "<p>A hubsell não tem discador próprio. Uma etapa de telefone em um Flow cria uma tarefa de ligação no Salesforce, HubSpot ou Pipedrive. O vendedor liga a partir do CRM e registra o resultado no mesmo registro da atividade de e-mail e do LinkedIn.</p>",
        },
        {
          question: "Por que registrar a atividade de prospecção no CRM automaticamente?",
          answer: "<p>O registro manual é lento e incompleto, então os relatórios de pipeline mostram o que os vendedores lembraram de digitar. Quando cada ponto de contato é registrado no momento em que acontece, o registro fica completo e os vendedores recuperam o tempo. A Elium economizou cerca de 20 horas por semana depois de migrar para a hubsell.</p>",
        },
      ],
      eyebrow: "Sincronização com o CRM",
      h1Pre: "LinkedIn e e-mail ",
      h1Accent: "sincronizados com o seu CRM",
      h1Post: "",
      sub: "A hubsell alimenta o HubSpot, Salesforce e Pipedrive, não os substitui. Você decide quais contatos vão para o CRM, à mão ou por regra, e cada e-mail, etapa do LinkedIn e tarefa de ligação chega ao registro certo no momento em que acontece.",
      demoCta: "Agende uma demo",
      row: {
        titlePre: "Registrado ",
        titleAccent: "no momento em que acontece",
        titlePost: "",
        points: [
          "Envios, aberturas e respostas de e-mail, etapas do LinkedIn e tarefas de ligação chegam ao registro do contato no Salesforce, HubSpot ou Pipedrive.",
          "Contatos e empresas são associados aos registros existentes, então a sincronização atualiza o que já existe em vez de criar duplicados.",
          "Sem digitação manual e sem CSV no meio. A sua equipe trabalha o pipeline, não a planilha.",
        ],
        embed: "07-crm-sync-tracker",
        stepEyebrow: "Como funciona",
        stepTitle: "Da atividade ao registro sincronizado",
      },
      gridTitlePre: "Um sistema de registro em que você ",
      gridTitleAccent: "finalmente pode confiar",
      gridTitlePost: "",
      blocks: [
        {
          title: "Salesforce, HubSpot e Pipedrive",
          body: "Sincronização nativa com os três CRMs, em tempo real. Sem middleware, sem exportações de CSV, sem processos noturnos.",
        },
        {
          title: "Relatórios confiáveis",
          body: "Quando cada atividade é registrada no momento em que acontece, os seus relatórios de pipeline refletem a realidade, e não o que os vendedores lembraram de digitar.",
        },
        {
          title: "Horas de volta toda semana",
          body: "O registro manual no CRM consome tempo de venda sem ninguém perceber. O registro automático devolve esse tempo: a Elium economizou cerca de 20 horas por semana depois de migrar para a hubsell.",
        },
        {
          title: "Ligações como tarefas no CRM",
          body: "As etapas de telefone criam tarefas que os seus vendedores concluem dentro do CRM. A hubsell não tem discador próprio e não precisa de um: a ligação acontece onde o registro está.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda com o registro automático",
      quoteSlug: "spryker",
      storySlug: "elium",
      storyLabel: "Leia a história da Elium",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre a sincronização com o CRM",
      faqSlugs: ["hubsell-crm-integration", "hubsell-replace-outbound-stack"],
      closing: {
        titlePre: "Alimente o seu CRM ",
        titleAccent: "automaticamente",
        titlePost: ".",
        sub: "Mostre a configuração do seu CRM em uma conversa rápida e explicaremos exatamente o que a hubsell registra e onde.",
      },
      closingCta: "Agende uma demo",
    },
    {
      path: "/platform/deliverability",
      title: "Entregabilidade de cold e-mail a partir das suas caixas | hubsell",
      metaDescription: "Entregabilidade de cold e-mail com a hubsell: envie da sua caixa do Google ou da Microsoft, com SPF, DKIM e DMARC configurados, limite diário, janelas de envio e contatos verificados.",
      heroSlice: "deliverability",
      compare: {
        eyebrow: "Entregabilidade de cold e-mail",
        titlePre: "Envio em massa ou ",
        titleAccent: "envio pensado para a caixa de entrada",
        titlePost: "",
        colA: "Ferramentas de e-mail em massa",
        colB: "hubsell",
        rows: [
          [
            "Servidor de envio",
            "Servidores SMTP externos compartilhados com outros remetentes",
            "A sua própria caixa de e-mail do Google ou da Microsoft, pela API dela",
          ],
          [
            "Autenticação",
            "Fica por sua conta",
            "SPF, DKIM e DMARC configurados com a equipe da hubsell",
          ],
          [
            "Dados de contato",
            "Listas compradas meses atrás, com muitos endereços que já não são válidos",
            "Verificados no dia da abordagem, incluindo domínios catch-all",
          ],
          [
            "Volume",
            "O máximo que o plano permite, em picos",
            "Volume baixo a médio dentro de um limite diário, voltado para pessoas que se encaixam no perfil",
          ],
          ["Horário", "Enviados no instante em que a campanha começa", "Dentro das janelas de envio que você define"],
          [
            "Respostas e devoluções",
            "Os follow-ups continuam até alguém pará-los",
            "O Flow para para aquele contato quando há uma resposta ou uma devolução",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Chegada à caixa de entrada",
          pre: "Enviado do jeito ",
          accent: "em que as caixas de entrada confiam",
          post: "",
        },
        explained: {
          eyebrow: "Checklist de entregabilidade de e-mail",
          pre: "O que mantém o seu e-mail ",
          accent: "fora do spam",
          post: "",
        },
        steps: {
          eyebrow: "Como funciona",
          pre: "Do contato verificado ",
          accent: "à caixa de entrada",
          post: "",
        },
        extra: {
          eyebrow: "Qualidade dos dados e entregabilidade",
          pre: "Dados bons significam ",
          accent: "boa entregabilidade",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "uma entregabilidade melhor",
          post: "",
        },
        closing: {
          eyebrow: "Entregabilidade de e-mails",
          pre: "Descubra onde ",
          accent: "os seus e-mails chegam",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre entregabilidade",
          pre: "Perguntas sobre ",
          accent: "entregabilidade de e-mails",
          post: "",
        },
      },
      signals: {
        sub: "Cada um destes pontos é tratado na hubsell, então chegar à caixa de entrada não fica nas mãos dos seus vendedores.",
        startLabel: "Protege",
        items: [
          {
            id: "email",
            title: "A sua própria caixa de e-mail",
            body: "Os e-mails saem da sua conta do Google Workspace ou do Microsoft 365, pela API dela, e não de um servidor compartilhado em que os filtros já não confiam.",
            start: "A reputação do seu remetente",
          },
          {
            id: "clean",
            title: "SPF, DKIM e DMARC",
            body: "A equipe da hubsell configura os três registros com você, para que os provedores de e-mail confirmem que as suas mensagens vêm mesmo do seu domínio.",
            start: "O seu domínio",
          },
          {
            id: "profile",
            title: "Contatos verificados",
            body: "Cada endereço é verificado no dia em que é usado, incluindo domínios catch-all, então poucos e-mails voltam e os provedores veem uma lista limpa.",
            start: "A sua taxa de devolução",
          },
          {
            id: "wait",
            title: "Um limite diário",
            body: "A sua caixa de e-mail envia um número limitado de e-mails por dia, então o volume nunca dispara nem chama atenção.",
            start: "Cada remetente",
          },
          {
            id: "event",
            title: "Janelas de envio",
            body: "Os e-mails saem dentro dos horários que você define, espaçados ao longo do dia, como uma pessoa envia e-mails.",
            start: "O seu timing",
          },
          {
            id: "branch",
            title: "Parar quando há resposta ou devolução",
            body: "Quando um contato responde ou um e-mail volta, o Flow para para aquele contato, então ninguém recebe um follow-up depois de responder.",
            start: "A boa vontade do comprador",
          },
          {
            id: "ban",
            title: "Sem redirecionamentos de rastreamento",
            body: "Os links não são reescritos por um domínio de rastreamento, o que mantém os seus e-mails com cara de e-mail comum.",
            start: "A chegada à sua caixa de entrada",
          },
          {
            id: "search",
            title: "Segmentado, não em massa",
            body: "A hubsell foi feita para volume baixo a médio: menos e-mails, enviados para pessoas que se encaixam no seu ICP e têm um motivo para ouvir você. A prospecção segmentada gera respostas, e as respostas constroem a reputação do seu remetente.",
            start: "A sua conversão",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Verifique o contato",
            body: "O e-mail corporativo é gerado e validado no dia da abordagem, incluindo domínios catch-all.",
          },
          {
            title: "Envie da sua caixa de e-mail",
            body: "O e-mail sai da sua caixa de e-mail conectada, dentro do limite diário dela.",
          },
          {
            title: "Respeite a janela",
            body: "Os e-mails são espaçados dentro da janela de envio que você define, pela API do Google ou da Microsoft.",
          },
          {
            title: "Pare quando houver resposta",
            body: "Respostas e devoluções encerram o Flow para aquele contato. Todos os outros seguem para a próxima etapa.",
          },
        ],
      },
      extra: {
        title: "Dados bons significam boa entregabilidade",
        paras: [
          "A maioria dos problemas de entregabilidade começa antes do primeiro e-mail. Listas antigas estão cheias de pessoas que mudaram de emprego, e cada devolução diz aos provedores de e-mail que o seu e-mail não é bem-vindo.",
          "A hubsell busca contatos quando você precisa deles e verifica cada e-mail no mesmo dia, então você escreve para quem ocupa o cargo hoje, em endereços que existem.",
          "Dados relevantes e recentes também geram respostas, e as respostas são o sinal mais forte para um provedor de e-mail de que o seu e-mail deve ir para a caixa de entrada.",
        ],
        links: [
          {
            label: "Saiba mais sobre os dados em tempo real",
            href: "/platform/live-data",
          },
          {
            label: "Saiba mais sobre o enriquecimento",
            href: "/platform/enrichment",
          },
        ],
      },
      faqs: [
        {
          question: "O que é entregabilidade de e-mails?",
          answer: "<p>Entregabilidade de e-mails é a capacidade do seu e-mail de chegar à caixa de entrada do destinatário, e não à pasta de spam ou a lugar nenhum. Ela depende de como você envia, da reputação do seu domínio e da qualidade dos endereços para os quais você escreve.</p>",
        },
        {
          question: "Por que os cold e-mails vão para o spam?",
          answer: "<p>As causas mais comuns são servidores de envio compartilhados, registros SPF, DKIM ou DMARC ausentes, endereços que voltam, picos repentinos de volume e mensagens que ninguém responde. A hubsell trata cada uma delas.</p>",
        },
        {
          question: "Como a hubsell protege a minha entregabilidade?",
          answer: "<p>Ela envia da sua própria caixa de e-mail pela API do Google ou da Microsoft, configura SPF, DKIM e DMARC com você, respeita um limite diário, envia dentro das suas janelas, para quando há respostas e devoluções e verifica cada contato no dia em que ele é usado.</p>",
        },
        {
          question: "A hubsell envia da minha própria caixa de e-mail?",
          answer: "<p>Sim. Os e-mails saem das suas caixas de e-mail do Google Workspace ou do Microsoft 365, pelas APIs deles. Não há servidor SMTP externo nem redirecionamento de rastreamento no e-mail.</p>",
        },
        {
          question: "Quem configura SPF, DKIM e DMARC?",
          answer: "<p>A equipe da hubsell configura tudo com você durante a implantação, para que o seu domínio passe nas verificações que os provedores de e-mail fazem antes de a sua primeira campanha sair.</p>",
        },
        {
          question: "Existe um limite diário de envio?",
          answer: "<p>Sim. A sua caixa de e-mail tem um limite diário. A hubsell foi feita para volume baixo a médio: um número menor de e-mails para contatos bem segmentados converte melhor do que um número grande para uma lista ampla.</p>",
        },
        {
          question: "Posso escolher quando os e-mails são enviados?",
          answer: "<p>Sim. Você define janelas de envio, e os e-mails saem dentro delas, espaçados ao longo do dia em vez de todos de uma vez.</p>",
        },
        {
          question: "O que acontece quando um contato responde ou um e-mail volta?",
          answer: "<p>O Flow para para aquele contato. Ninguém recebe um follow-up depois de responder, e um endereço inválido não é tentado de novo.</p>",
        },
        {
          question: "Como a qualidade dos dados afeta a entregabilidade?",
          answer: "<p>Cada devolução prejudica a reputação do seu remetente. A hubsell verifica cada e-mail no dia em que ele é usado, incluindo domínios catch-all, e 95% dos e-mails corporativos estão corretos, então muito menos e-mails voltam. Veja o <a class=\"link\" href=\"/pt/platform/enrichment/\">enriquecimento</a>.</p>",
        },
        {
          question: "Por que a hubsell foca em volume baixo a médio?",
          answer: "<p>Porque a prospecção segmentada converte. Menos e-mails para pessoas que se encaixam no seu ICP e têm um motivo para ouvir você geram mais respostas, e as respostas mostram aos provedores de e-mail que o seu e-mail deve ir para a caixa de entrada. Enviar para uma lista ampla faz o contrário.</p>",
        },
      ],
      eyebrow: "Entregabilidade de e-mails",
      h1Pre: "Cold e-mails que chegam ",
      h1Accent: "à caixa de entrada",
      h1Post: "",
      sub: "A entregabilidade começa por quem recebe os seus e-mails. A hubsell mantém o volume baixo a médio e segmentado, envia da sua própria caixa de e-mail com a autenticação configurada pela nossa equipe, respeita um limite diário e uma janela de envio e verifica cada contato no dia da abordagem.",
      demoCta: "Agende uma demo",
      row: {
        titlePre: "Enviado do jeito ",
        titleAccent: "em que as caixas de entrada confiam",
        titlePost: "",
        points: [
          "Os e-mails saem da sua própria caixa de e-mail do Google Workspace ou do Microsoft 365, pela API dela, sem servidor externo nem redirecionamento de rastreamento no caminho.",
          "SPF, DKIM e DMARC são configurados com você pela equipe da hubsell, para que os provedores de e-mail confirmem que o seu e-mail vem mesmo de você.",
          "A sua caixa de e-mail tem um limite diário e uma janela de envio, e o Flow para para um contato assim que ele responde ou um e-mail volta.",
        ],
        embed: "08-deliverability",
        stepEyebrow: "Como funciona",
        stepTitle: "Do contato verificado à caixa de entrada",
      },
      gridTitlePre: "Feito para ",
      gridTitleAccent: "chegar à caixa de entrada",
      gridTitlePost: "",
      blocks: [
        {
          title: "Verificados na origem",
          body: "Cada endereço é verificado no momento do uso, e não tirado de uma lista coletada meses atrás. Domínios catch-all são sinalizados antes do envio, então você gasta créditos com contatos que realmente podem receber e-mails.",
        },
        {
          title: "Enviado das suas caixas de e-mail",
          body: "A prospecção passa pelas APIs do Google e da Microsoft diretamente das suas próprias contas. Não há servidor de terceiros no caminho para os filtros desconfiarem, então os seus envios parecem o que são: e-mails reais de uma pessoa real.",
        },
        {
          title: "Autenticação bem feita",
          body: "SPF, DKIM e DMARC são as verificações que os provedores fazem para decidir se um e-mail vem mesmo de você. A hubsell orienta você a configurar os três corretamente, para que o seu domínio passe e as suas mensagens sejam confiáveis.",
        },
        {
          title: "No ritmo certo, não em disparos",
          body: "O volume fica baixo a médio e dentro de um limite diário. Um domínio novo constrói a sua reputação aos poucos, em vez de disparar no primeiro envio.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda quando você chega à caixa de entrada",
      quoteSlug: "staffbase",
      storySlug: "staffbase",
      storyLabel: "Leia a história da Staffbase",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre entregabilidade",
      faqSlugs: ["stop-sales-email-bounces", "hubsell-email-infrastructure", "hubsell-catch-all-domains"],
      closing: {
        titlePre: "Veja ",
        titleAccent: "onde os seus e-mails chegam",
        titlePost: ", não só a sua taxa de abertura.",
        sub: "Traga a sua configuração de envio atual para uma conversa rápida e mostraremos onde os seus e-mails realmente estão chegando e por quê.",
      },
      closingCta: "Agende uma demo",
    },
    {
      path: "/platform/personalisation",
      title: "Personalização com sinais para cold e-mail e LinkedIn | hubsell",
      metaDescription: "Prospecção personalizada com base em sinais de compra. A IA da hubsell redige cada mensagem a partir do sinal e do site da empresa, em Flows montados para cada sinal.",
      heroSlice: "personalization",
      signalsAccordion: true,
      compare: {
        eyebrow: "Personalização de cold e-mail",
        titlePre: "Mala direta ou ",
        titleAccent: "mensagens baseadas em sinais",
        titlePost: "",
        colA: "Mala direta",
        colB: "hubsell",
        rows: [
          ["Ponto de partida", "Uma lista e um modelo", "O sinal que colocou o contato na sua lista"],
          [
            "O que é personalizado",
            "Nome e nome da empresa",
            "A mensagem, construída a partir do sinal e da empresa",
          ],
          ["Pesquisa", "Feita à mão, ou pulada", "O site da empresa, lido para cada contato"],
          ["Redação", "Um modelo para todos", "Um rascunho de IA para cada contato"],
          [
            "Flows",
            "Uma campanha para todos os leads",
            "Um Flow para cada sinal, com mensagem e timing próprios",
          ],
          ["Dados por trás", "Registros antigos e cargos errados", "Verificados no dia da abordagem"],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Personalização com base em sinais",
          pre: "Um motivo para escrever ",
          accent: "para cada contato",
          post: "",
        },
        explained: {
          eyebrow: "Sinais de personalização",
          pre: "Os sinais que ",
          accent: "abrem as suas mensagens",
          post: "",
        },
        steps: {
          eyebrow: "Como funciona",
          pre: "Do sinal de compra ",
          accent: "a uma mensagem pessoal",
          post: "",
        },
        extra: {
          eyebrow: "Personalização com IA",
          pre: "IA que escreve ",
          accent: "a partir de fatos, não de suposições",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "uma prospecção pessoal",
          post: "",
        },
        closing: {
          eyebrow: "Prospecção personalizada",
          pre: "Veja o que a sua prospecção ",
          accent: "poderia dizer",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre personalização",
          pre: "Perguntas sobre ",
          accent: "prospecção personalizada",
          post: "",
        },
      },
      signals: {
        sub: "Cada sinal pode virar um Flow próprio, e cada mensagem começa por ele.",
        startLabel: "Começa com",
        items: [
          {
            id: "post",
            title: "Interação com posts",
            body: "Pessoas que curtiram, comentaram ou compartilharam um post do LinkedIn, seu ou de um concorrente.",
            start: "O post e o assunto dele",
          },
          {
            id: "event",
            title: "Participantes de eventos",
            body: "Pessoas que se inscreveram em um evento do LinkedIn no seu mercado.",
            start: "O evento a que vão",
          },
          {
            id: "jobs",
            title: "Mudanças de emprego",
            body: "Pessoas que assumiram um novo cargo recentemente, quando prioridades e orçamentos estão sendo definidos.",
            start: "O novo cargo",
          },
          {
            id: "hiring",
            title: "Sinais de contratação",
            body: "Empresas contratando para cargos que o seu produto apoia.",
            start: "Os cargos que estão contratando",
          },
          {
            id: "followers",
            title: "Seguidores de concorrentes",
            body: "Pessoas que seguem a página de um concorrente.",
            start: "O problema que o concorrente resolve",
          },
          {
            id: "company",
            title: "Site da empresa",
            body: "O que a empresa diz sobre si mesma: o que vende, para quem vende e em que está focada.",
            start: "Uma frase sobre o negócio dela",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Escolha o sinal",
            body: "Comece um Flow a partir de um sinal, como um post, um evento, uma pesquisa de contratações ou os seguidores de um concorrente.",
          },
          {
            title: "Qualifique e enriqueça",
            body: "Cada pessoa é comparada com o seu ICP e recebe um e-mail verificado antes de qualquer texto ser escrito.",
          },
          {
            title: "Leia a empresa",
            body: "A hubsell lê o site da empresa para entender o que o negócio faz e para quem vende.",
          },
          {
            title: "Redija com IA",
            body: "A IA escreve uma mensagem para cada contato a partir do sinal e dos dados da empresa.",
          },
          {
            title: "Rode o Flow",
            body: "A mensagem sai como uma etapa do Flow, e as próximas etapas seguem conforme o que o contato faz.",
          },
        ],
      },
      extra: {
        title: "IA que escreve a partir de fatos, não de suposições",
        paras: [
          "Textos genéricos de IA são fáceis de reconhecer. Elogiam a empresa, tentam adivinhar os desafios dela e parecem escritos para qualquer um. Os compradores percebem e ignoram.",
          "A hubsell dá fatos para a IA trabalhar: o sinal, o cargo atual da pessoa e o que o site da empresa diz. O rascunho fala de coisas verdadeiras, então parece uma mensagem de alguém que pesquisou.",
          "Como cada contato é verificado no mesmo dia, os detalhes da mensagem estão atualizados. Ninguém recebe parabéns por um emprego que deixou há um ano.",
        ],
        links: [
          {
            label: "Saiba mais sobre os dados em tempo real",
            href: "/platform/live-data",
          },
          {
            label: "Saiba mais sobre a prospecção multicanal",
            href: "/platform/multichannel-outreach",
          },
        ],
      },
      faqs: [
        {
          question: "O que é personalização com base em sinais?",
          answer: "<p>A personalização com base em sinais abre cada mensagem com o motivo pelo qual você está escrevendo: algo que a pessoa ou a empresa dela fez recentemente, como interagir com um post, mudar de emprego ou contratar. Ela substitui a mala direta com o nome por um motivo real para conversar.</p>",
        },
        {
          question: "Como a hubsell personaliza cold e-mails?",
          answer: "<p>A hubsell parte do sinal que colocou o contato na sua lista, lê o site da empresa e usa IA para redigir uma mensagem para cada contato a partir desses fatos. Cada sinal pode rodar em um Flow próprio, então a mensagem e o timing combinam com o motivo da abordagem.</p>",
        },
        {
          question: "Quais sinais a hubsell pode usar para personalizar?",
          answer: "<p>Interação com posts do LinkedIn, participantes de eventos, mudanças de emprego, empresas que estão contratando e seguidores de um concorrente, além do que o site da empresa diz. Veja nos <a class=\"link\" href=\"/pt/platform/live-data/\">dados em tempo real</a> como esses contatos são buscados.</p>",
        },
        {
          question: "A hubsell usa IA para escrever mensagens?",
          answer: "<p>Sim. A IA redige uma mensagem para cada contato a partir do sinal e do site da empresa. Ela trabalha com fatos sobre a pessoa e a empresa, não com suposições.</p>",
        },
        {
          question: "O que são Flows focados em sinais?",
          answer: "<p>Em vez de uma campanha para todos os leads, cada sinal ganha um Flow próprio. Pessoas que interagiram com um post recebem uma mensagem, um timing e um conjunto de canais diferentes das pessoas cuja empresa está contratando.</p>",
        },
        {
          question: "Qual é a diferença para a mala direta?",
          answer: "<p>A mala direta troca um nome e o nome de uma empresa dentro de um único modelo. A personalização com base em sinais muda o que a mensagem diz, com base no motivo pelo qual você está escrevendo para aquela pessoa.</p>",
        },
        {
          question: "Por que a personalização genérica com IA não funciona?",
          answer: "<p>Os compradores reconhecem textos de IA escritos do nada: bajuladores, vagos e centrados no remetente. Um texto que fala de um sinal real e do negócio real da empresa parece escrito por alguém que pesquisou.</p>",
        },
        {
          question: "A personalização ajuda na entregabilidade dos e-mails?",
          answer: "<p>Sim. E-mails relevantes recebem mais respostas, e as respostas mostram aos provedores de e-mail que o seu e-mail é bem-vindo. Veja a <a class=\"link\" href=\"/pt/platform/deliverability/\">entregabilidade de e-mails</a>.</p>",
        },
        {
          question: "Posso personalizar a prospecção em escala?",
          answer: "<p>Sim. O sinal, os dados da empresa e o rascunho se juntam para cada contato, então o mesmo Flow funciona para dez contatos ou para milhares, sem escrever cada mensagem do zero.</p>",
        },
        {
          question: "A prospecção com base em sinais está em conformidade com o GDPR (RGPD)?",
          answer: "<p>A hubsell processa os dados para uma finalidade que você define antes da busca e não os guarda para revender. Você continua sendo o controlador dos dados e a hubsell é a sua operadora, sob um acordo de processamento de dados. Veja os <a class=\"link\" href=\"/pt/platform/live-data/\">dados B2B conforme o RGPD</a>.</p>",
        },
      ],
      eyebrow: "Personalização com base em sinais",
      h1Pre: "Personalizado com base em ",
      h1Accent: "sinais de compra",
      h1Post: "",
      sub: "A personalização começa com um sinal. A hubsell acrescenta o contexto do cargo da pessoa e do site da empresa, usa IA para redigir a mensagem a partir dos dois, e você faz a abordagem com um motivo que importa para quem lê. É isso que gera respostas.",
      demoCta: "Agende uma demo",
      row: {
        titlePre: "Escrito para a ",
        titleAccent: "pessoa e o momento",
        titlePost: "",
        points: [
          "Cada mensagem parte de um motivo real para escrever: o post com que a pessoa interagiu, o emprego que assumiu, o evento em que se inscreveu ou a vaga que a empresa dela está contratando.",
          "A IA redige cada mensagem a partir desse sinal e do que o site da empresa diz sobre o negócio.",
          "Cada sinal ganha um Flow próprio, então a mensagem, o timing e os canais combinam com o motivo da abordagem.",
        ],
        embed: "09-personalization",
        stepEyebrow: "Como funciona",
        stepTitle: "Do sinal em tempo real a uma mensagem que faz sentido",
      },
      gridTitlePre: "Relevância que ",
      gridTitleAccent: "cresce com você",
      gridTitlePost: "",
      blocks: [
        {
          title: "Além do nome",
          body: "A personalização de verdade usa o que é verdadeiro sobre a conta: o cargo, a empresa, o momento. A hubsell parte de dados verificados e sinais em tempo real, então a mensagem cita algo que realmente importa para quem lê.",
        },
        {
          title: "Baseada em sinais em tempo real",
          body: "Uma mudança de emprego, uma rodada de investimento, uma onda de contratações ou o interesse em um tema dão à prospecção um gancho genuíno. A hubsell lê esses sinais e os coloca para trabalhar, então a mensagem chega com um motivo.",
        },
        {
          title: "Consistente em volume",
          body: "Personalizar à mão não escala, e campos de mala direta soam vazios. A hubsell mantém cada mensagem relevante, quer você envie dez ou dez mil, então alcance e relevância deixam de puxar em direções opostas.",
        },
        {
          title: "Dados corretos por trás",
          body: "A personalização só é tão boa quanto os dados por trás dela. Como cada contato é verificado na origem, os detalhes que você cita estão certos, e uma frase personalizada nunca vira um erro de empresa trocada.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda com relevância de verdade",
      quoteSlug: "elium",
      storySlug: "elium",
      storyLabel: "Leia a história da Elium",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre personalização",
      faqSlugs: ["personalize-outreach-at-scale", "hubsell-conversion-rates"],
      closing: {
        titlePre: "Veja uma prospecção que ",
        titleAccent: "soa pessoal",
        titlePost: ", em escala.",
        sub: "Mostre o seu público em uma conversa rápida e vamos redigir como fica para ele uma prospecção personalizada em escala.",
      },
      closingCta: "Agende uma demo",
    },
    {
      path: "/platform/enrichment",
      title: "Enriquecimento de dados: e-mails e telefones verificados | hubsell",
      metaDescription: "A hubsell enriquece contatos em tempo real: e-mails corporativos 95% corretos, catch-all incluído, telefones de parceiros de qualidade. Você só paga pelas etapas bem-sucedidas.",
      heroSlice: "enrichment",
      compare: {
        eyebrow: "Enriquecimento de dados B2B",
        titlePre: "Enriquecimento por base de dados ou ",
        titleAccent: "enriquecimento em tempo real",
        titlePost: "",
        colA: "Enriquecimento por base de dados",
        colB: "Enriquecimento em tempo real da hubsell",
        rows: [
          [
            "De onde vêm os dados",
            "Da base de dados de um fornecedor, preenchida uma vez e revendida",
            "Buscados e orquestrados pela hubsell no dia do enriquecimento; só os telefones vêm de parceiros",
          ],
          [
            "Precisão dos e-mails",
            "Desconhecida até as devoluções chegarem",
            "95%, incluindo domínios catch-all",
          ],
          [
            "Nomes, cargos, empresas",
            "Tão atuais quanto a última atualização do registro",
            "99% de precisão, alinhados ao perfil atual",
          ],
          [
            "Domínios catch-all",
            "Muitas vezes marcados como desconhecidos e deixados de fora",
            "Validados como qualquer outro endereço",
          ],
          [
            "Pelo que você paga",
            "Um registro, esteja ele completo ou não",
            "Cada etapa bem-sucedida, em créditos",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Buscador de e-mails e de telefones",
          pre: "Um registro, ",
          accent: "orquestrado pela hubsell",
          post: "",
        },
        explained: {
          eyebrow: "Enriquecimento de dados",
          pre: "Enriquecimento de dados de contato, ",
          accent: "campo por campo",
          post: "",
        },
        steps: {
          eyebrow: "Como funciona o enriquecimento",
          pre: "Como uma lista é ",
          accent: "enriquecida, etapa por etapa",
          post: "",
        },
        extra: {
          eyebrow: "Verificação de e-mails",
          pre: "",
          accent: "Verificação de e-mails em domínios catch-all",
          post: ", já incluída",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "O que muda com ",
          accent: "dados de contato completos",
          post: "",
        },
        closing: {
          eyebrow: "Buscador de e-mails B2B",
          pre: "Enriqueça a sua lista com ",
          accent: "dados de contato verificados",
          post: ".",
        },
        faq: {
          eyebrow: "Perguntas sobre enriquecimento",
          pre: "Perguntas sobre ",
          accent: "enriquecimento de dados de contato",
          post: "",
        },
      },
      signals: {
        sub: "Cada campo é buscado ou gerado pela hubsell no dia do enriquecimento e verificado antes de chegar à sua prospecção ou ao seu CRM.",
        startLabel: "Precisão",
        items: [
          {
            id: "email",
            title: "Endereços de e-mail corporativos",
            body: "A hubsell gera e valida o endereço de e-mail corporativo de cada contato com métodos próprios, no momento do uso. Endereços em domínios catch-all também são validados, então não precisam ser descartados.",
            start: "95%, incluindo domínios catch-all",
          },
          {
            id: "phone",
            title: "Telefones diretos e celulares",
            body: "Telefones diretos e celulares vêm de parceiros escolhidos pela precisão e pela qualidade, não pelo preço. O enriquecimento de telefone é opcional, então você o adiciona só para os contatos para os quais pretende ligar.",
            start: "De bases de parceiros escolhidos pela qualidade",
          },
          {
            id: "profile",
            title: "URLs de perfis do LinkedIn",
            body: "Em uma lista importada, a hubsell associa cada contato ao perfil do LinkedIn dele a partir do nome completo, do nome da empresa e do cargo. É o perfil que permite que um contato entre nas etapas de LinkedIn de um Flow.",
            start: "99%",
          },
          {
            id: "clean",
            title: "Nomes, cargos e empresas, revisados",
            body: "Listas importadas trazem cargos antigos, erros de digitação e nomes de empresas inconsistentes. A hubsell limpa e padroniza cada registro com IA e corrige o que mudou desde que a lista foi montada.",
            start: "99%",
          },
        ],
      },
      howSteps: {
        note: "Cada etapa é cobrada em créditos, e só quando é bem-sucedida: uma etapa que falha não custa nada, e as etapas já concluídas são cobradas.",
        items: [
          {
            title: "Busque os dados",
            body: "Os dados de cada contato são coletados em tempo real no LinkedIn e em sites de empresas.",
          },
          {
            title: "Limpe e padronize com IA",
            body: "Nomes, cargos e empresas são limpos e colocados em um formato único e consistente.",
          },
          {
            title: "Complete os dados que faltam",
            body: "As lacunas do registro são preenchidas, como um cargo ou um dado da empresa que faltava.",
          },
          {
            title: "Gere e valide o e-mail",
            body: "Os e-mails corporativos são gerados e validados com métodos próprios da hubsell, catch-all incluído.",
          },
          {
            title: "Busque o telefone",
            body: "Opcional: um telefone direto ou um celular de um parceiro de qualidade.",
          },
          {
            title: "Verificação de qualidade",
            body: "Cada registro é verificado antes de ser entregue para uso.",
          },
        ],
      },
      extra: {
        title: "Verificação de e-mails em domínios catch-all",
        paras: [
          "Um domínio catch-all aceita e-mails para qualquer endereço, então uma verificação comum não consegue distinguir uma caixa de e-mail real de uma errada. As listas costumam marcar esses contatos como desconhecidos, e você fica entre descartá-los ou arriscar devoluções.",
          "A hubsell verifica endereços em domínios catch-all em todo enriquecimento, no momento em que você usa os dados. É assim que 95% dos e-mails que ela entrega estão corretos, incluindo domínios catch-all, e é por isso que a sua taxa de devolução continua baixa.",
        ],
        links: [
          {
            label: "Como a hubsell protege a entregabilidade",
            href: "/platform/deliverability",
          },
          {
            label: "Alternativa ao Lusha: como os dois se comparam",
            href: "/vs/lusha",
          },
          {
            label: "Alternativa ao Seamless: como os dois se comparam",
            href: "/vs/seamless",
          },
          {
            label: "Alternativa ao Apollo: como os dois se comparam",
            href: "/vs/apollo",
          },
        ],
      },
      faqs: [
        {
          question: "O que é enriquecimento de dados de contato?",
          answer: "<p>O enriquecimento de dados de contato acrescenta os dados que faltam a um registro de contato: um e-mail corporativo, um telefone, um perfil do LinkedIn e o cargo e a empresa atuais. A hubsell enriquece cada contato em tempo real, no dia do seu pedido, e verifica o resultado antes de ele chegar à sua prospecção ou ao seu CRM.</p>",
        },
        {
          question: "Do que eu preciso para enriquecer uma lista com a hubsell?",
          answer: "<p>Nome completo, nome da empresa e cargo de cada contato. A partir disso, a hubsell busca os dados da pessoa em tempo real, limpa e padroniza esses dados com IA, preenche as lacunas, gera e valida o e-mail corporativo e, se você quiser, acrescenta um telefone. Cada registro passa por uma verificação de qualidade antes de você usá-lo.</p>",
        },
        {
          question: "Qual é a precisão do enriquecimento da hubsell?",
          answer: "<p>95% dos endereços de e-mail corporativos estão corretos, incluindo domínios catch-all. Nomes, cargos, empresas e perfis do LinkedIn têm 99% de precisão. Os telefones vêm de bases de parceiros, então a hubsell não informa um índice de precisão único para eles, mas esses parceiros são escolhidos pela precisão e pela qualidade, não pelo preço.</p>",
        },
        {
          question: "A hubsell consegue verificar endereços de e-mail em domínios catch-all?",
          answer: "<p>Sim. Um domínio catch-all aceita e-mails para qualquer endereço, então uma verificação comum não consegue distinguir uma caixa de e-mail real de uma errada. A hubsell também verifica endereços em domínios catch-all, e eles fazem parte do índice de 95% de precisão.</p>",
        },
        {
          question: "A hubsell encontra celulares e telefones diretos?",
          answer: "<p>Sim, os dois. Os telefones vêm de parceiros escolhidos pela precisão e pela qualidade, e não pelo preço. O enriquecimento de telefone é opcional, então você só o adiciona para os contatos para os quais pretende ligar.</p>",
        },
        {
          question: "Como a hubsell cobra pelo enriquecimento?",
          answer: "<p>O enriquecimento é cobrado em créditos para cada etapa bem-sucedida. Buscar um contato usa 1 crédito, um e-mail corporativo validado usa 5 (incluindo domínios catch-all) e um telefone usa 5. Se uma etapa falha, ela não custa nada; as etapas já concluídas são cobradas. <a class=\"link\" href=\"/pt/pricing/\">Veja os preços</a>.</p>",
        },
        {
          question: "De onde vêm os dados de enriquecimento da hubsell?",
          answer: "<p>A hubsell busca e orquestra os dados ela mesma, em tempo real, no LinkedIn e em sites de empresas, e gera e valida endereços de e-mail corporativos com métodos próprios. Ela não passa os seus contatos pelas bases de dados de outros fornecedores. Só os telefones vêm de parceiros, escolhidos pela precisão e pela qualidade.</p>",
        },
        {
          question: "Qual é a diferença entre o enriquecimento em tempo real e o enriquecimento a partir de uma base de dados B2B?",
          answer: "<p>Uma base de dados enriquece a sua lista com registros que coletou antes, então os dados podem ter meses ou anos. A hubsell consulta cada contato no dia do enriquecimento, então o cargo, a empresa e o e-mail estão atualizados quando você os usa.</p>",
        },
        {
          question: "Os contatos enriquecidos podem ir direto para a prospecção e para o meu CRM?",
          answer: "<p>Sim. Os contatos enriquecidos vão direto para os seus Flows de LinkedIn, e-mail e ligações na hubsell e são sincronizados com o Salesforce, HubSpot ou Pipedrive, sem etapa de exportação ou limpeza. Veja a <a class=\"link\" href=\"/pt/platform/multichannel-outreach/\">prospecção multicanal</a> e a <a class=\"link\" href=\"/pt/platform/crm-sync/\">sincronização com o CRM</a>.</p>",
        },
        {
          question: "Os dados enriquecidos estão em conformidade com o GDPR (RGPD)?",
          answer: "<p>Sim. A hubsell enriquece os dados sob demanda para cada cliente e não os guarda para revender. Você continua sendo o controlador dos dados e a hubsell é a operadora, sob um acordo de processamento de dados. Saiba mais sobre <a class=\"link\" href=\"/pt/platform/live-data/#pf-extra\">dados B2B conforme o RGPD</a>.</p>",
        },
      ],
      eyebrow: "Enriquecimento de dados de contato",
      h1Pre: "Enriquecimento de dados de contato, ",
      h1Accent: "verificado hoje",
      h1Post: "",
      sub: "Um registro de contato pela metade trava a prospecção. A partir do nome completo, da empresa e do cargo, a hubsell busca os dados da pessoa em tempo real, limpa tudo com IA, preenche as lacunas e acrescenta um e-mail corporativo validado e, se você quiser, um telefone.",
      demoCta: "Agende uma demo",
      row: {
        titlePre: "Um registro, ",
        titleAccent: "orquestrado pela hubsell",
        titlePost: "",
        points: [
          "A hubsell busca e orquestra cada campo ela mesma: perfil, cargo e empresa a partir do LinkedIn e de sites de empresas, e e-mails corporativos gerados e validados com métodos próprios.",
          "Só os telefones vêm de parceiros, escolhidos pela precisão e pela qualidade, e não pelo preço.",
          "Cada registro passa por uma verificação de qualidade antes de ser entregue, então está correto no dia em que você o usa.",
        ],
        embed: "10-enrichment",
        stepEyebrow: "Como funciona",
        stepTitle: "De uma linha incompleta a um registro completo e verificado",
      },
      gridTitlePre: "Registros ",
      gridTitleAccent: "completos e atualizados",
      gridTitlePost: "",
      blocks: [
        {
          title: "Várias fontes, um registro",
          body: "A hubsell consulta várias fontes em tempo real, uma depois da outra, então quando uma não tem o dado, outra preenche a lacuna. O resultado é um contato completo, e não uma linha sem os campos importantes.",
        },
        {
          title: "Verificados no momento do uso",
          body: "Enriquecimento sem verificação só preenche campos com palpites desatualizados. A hubsell verifica o registro pronto no momento em que você o usa, incluindo domínios catch-all, então um registro completo também é um registro correto.",
        },
        {
          title: "Sem base de dados envelhecendo",
          body: "Uma lista enriquecida estática começa a envelhecer no dia em que é montada. A hubsell enriquece em tempo real, no dia do seu pedido, então você não paga para completar registros coletados anos atrás que já mudaram desde então.",
        },
        {
          title: "Pronto para a prospecção",
          body: "Um registro completo e verificado vai direto para os seus Flows e para o seu CRM. Sem exportação, sem rodada de limpeza, sem segunda ferramenta: os dados que você enriquece são os dados para os quais você envia.",
        },
      ],
      proofEyebrow: "Resultados",
      proofTitle: "O que muda com dados completos",
      quoteSlug: "verhaert",
      storySlug: "verhaert",
      storyLabel: "Leia a história da Verhaert",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Perguntas comuns sobre enriquecimento",
      faqSlugs: ["build-b2b-audience-no-decay", "third-party-intent-data-accuracy"],
      closing: {
        titlePre: "Veja a sua lista ",
        titleAccent: "preenchida e verificada",
        titlePost: ".",
        sub: "Envie uma amostra dos seus dados em uma conversa rápida e mostraremos o que o enriquecimento em tempo real encontra para ela.",
      },
      closingCta: "Agende uma demo",
    },
  ],
};
