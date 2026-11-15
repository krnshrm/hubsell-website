// Homepage copy: Spanish (Spain), "tú". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const homeEs: {
  steps: PipelineStep[]; features: Feature[]; roles: Role[]; testimonials: Testimonial[];
  insights: Insight[]; comparison: ComparisonData; faqs: Faq[]; s: HomeStrings;
} = {
  steps: [
    {
      n: "01",
      label: "Datos en tiempo real",
      title: "Encuentra a las ",
      titleAccent: "personas adecuadas",
      tail: ", no solo los filtros adecuados",
      points: [
        "La mayoría de las plataformas te dejan filtrar por cargo y sector.",
        "hubsell obtiene contactos a partir de señales de comportamiento en tiempo real: personas que siguen la página de una empresa, interactúan con una publicación de LinkedIn, cambian de empleo, asisten a eventos o contratan para puestos concretos.",
        "Cada contacto que entra en tu Flow se ajusta a tu ICP y se valida en el momento de uso.",
      ],
      cta: "Obtén tus datos",
      more: "Descubre los datos en tiempo real",
      embed: "05-sp-widget",
      flip: false,
    },
    {
      n: "02",
      label: "Prospección multicanal",
      title: "Gestiona un único ",
      titleAccent: "Flow multicanal coordinado",
      tail: "",
      points: [
        "Arrastra y suelta pasos de email, LinkedIn y teléfono en un único Flow.",
        "Visitas al perfil, solicitudes de conexión, mensajes directos, InMail y tareas de llamada, todo coordinado con tu cadencia de emails.",
        "Las condiciones de ramificación dirigen automáticamente a los contactos según lo que hacen, así que cada camino se gestiona sin intervención manual.",
      ],
      cta: "Pide una demo",
      more: "Descubre la prospección multicanal",
      embed: "06-multichannel-flow",
      recolor: "espresso",
      flip: true,
    },
    {
      n: "03",
      label: "Sincronización automática con el CRM",
      title: "Registra toda la actividad ",
      titleAccent: "en tu CRM en tiempo real",
      tail: "",
      points: [
        "Cada interacción (enviado, abierto, respondido, conectado) se registra automáticamente en Salesforce, HubSpot o Pipedrive.",
        "Sin introducir datos a mano. Sin datos que se degradan. Tu equipo trabaja el pipeline, no la hoja de cálculo.",
      ],
      cta: "Míralo en directo",
      more: "Descubre la sincronización con el CRM",
      embed: "07-crm-sync-tracker",
      recolor: "espresso",
      flip: false,
    },
  ],
  features: [
    {
      title: "Datos de prospectos en tiempo real",
      body: "Sustituye las bases de datos estáticas por contactos obtenidos en tiempo real que encajan con tu ICP. Sin datos obsoletos, sin presupuesto de prospección malgastado.",
    },
    {
      title: "Email, LinkedIn y teléfono en un Flow",
      body: "Gestiona email, LinkedIn y teléfono como un único Flow coordinado, no como herramientas separadas. Visitas al perfil, solicitudes de conexión, mensajes directos, InMail y tareas de llamada funcionan desde un único Flow.",
    },
    {
      title: "Cualificación y enrutamiento con IA",
      body: "Usa la IA para cualificar contactos según tu ICP y llevarlos automáticamente al Flow adecuado, antes de gastar un solo crédito en prospección.",
      beta: true,
    },
    {
      title: "Todo el comité de compra",
      body: "Llega a cada persona clave de una cuenta objetivo por email y LinkedIn desde una sola campaña. Sin saltar entre herramientas.",
    },
    {
      title: "Prospección inteligente con varios remitentes",
      body: "Reparte la prospección de forma segura entre los perfiles del CEO, el director de ventas y los expertos en la materia para multiplicar el alcance sin quemar a ningún remitente.",
    },
    {
      title: "Verificación de dominios catch-all",
      body: "Nuestra validación propia verifica los dominios catch-all y protege tu reputación como remitente frente a rebotes y listas negras.",
    },
    {
      title: "Convierte tu contenido de LinkedIn en pipeline",
      body: "Publica en LinkedIn y contacta automáticamente con todas las personas que reaccionan, comentan o comparten, para convertir esas señales en pipeline antes que tu competencia.",
      beta: true,
    },
    {
      title: "Segmentación por intención y señales",
      body: "Identifica al 5 % de compradores en fase de compra con señales de intención en tiempo real y llévalos automáticamente a Flows segmentados.",
      beta: true,
    },
  ],
  roles: [
    {
      title: "Ventas",
      line: "Obtén contactos, prospecta y cierra desde un único espacio de trabajo. Sin saltar entre pestañas.",
    },
    {
      title: "Fundadores",
      line: "Haz un outbound liderado por el fundador que funcione, sin contratar un equipo de SDR.",
    },
    {
      title: "Operaciones de ventas",
      line: "Un único sistema de registro, sincronizado automáticamente con tu CRM.",
    },
    {
      title: "RevOps",
      line: "Datos limpios y validados de entrada y de salida. Sin limpieza manual.",
    },
    {
      title: "Marketing",
      line: "Convierte la demanda de LinkedIn en pipeline cualificado y medible.",
    },
    {
      title: "Ingenieros GTM",
      line: "Combina datos en tiempo real, Flows multicanal y enrutamiento en un solo lugar.",
    },
  ],
  testimonials: [
    {
      quote: "La automatización de hubsell da el máximo rendimiento con el mínimo esfuerzo en la recopilación de datos y la prospección en frío. Su funcionalidad de prospección es excelente.",
      name: "Richard Wood",
      title: "CEO",
      company: "Safran Software",
      slug: "safran",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp",
      results: [
        {
          metric: "30 %",
          label: "menos coste de adquisición de clientes",
        },
        {
          metric: "1.000+",
          label: "cuentas que ahora nos conocen mejor",
        },
        {
          metric: "25 h",
          label: "ahorradas cada semana",
        },
      ],
    },
    {
      quote: "Gracias a hubsell llegamos a más personas en menos tiempo, sin dejar de comunicarnos de una forma muy personalizada, como lo haríamos a mano.",
      name: "Laurent Schauvliege",
      title: "Business Manager",
      company: "Verhaert",
      slug: "verhaert",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif",
      results: [
        {
          metric: "x3",
          label: "más oportunidades generadas",
        },
        {
          metric: "60 %",
          label: "o más de tasa de apertura",
        },
        {
          metric: "90 %+",
          label: "de personalización",
        },
      ],
    },
    {
      quote: "hubsell es más que un proveedor: de verdad puede ser tu socio y ayudarte con todo tu enfoque.",
      name: "Peter Mallozzi",
      title: "Outbound Sales",
      company: "Staffbase",
      slug: "staffbase",
      image: "https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png",
      results: [
        {
          metric: "15,6 %",
          label: "de respuestas en distintos mercados",
        },
        {
          metric: "3,5 %",
          label: "de interacciones que acaban en llamada",
        },
        {
          metric: "15",
          label: "mercados trabajados con éxito",
        },
      ],
    },
    {
      quote: "Recomendaría hubsell como socio si quieres conseguir resultados reales con ventas y marketing outbound con un equipo reducido.",
      name: "Rachel Chan",
      title: "Digital Marketing Team Lead",
      company: "Elium",
      slug: "elium",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif",
      results: [
        {
          metric: "25 %",
          label: "más generación de leads",
        },
        {
          metric: "53 %",
          label: "o más de tasa de apertura",
        },
        {
          metric: "20 h+",
          label: "ahorradas cada semana",
        },
      ],
    },
    {
      quote: "No he encontrado ninguna herramienta que se acerque a hubsell en segmentación, detección de respuestas e integraciones con redes sociales y CRM.",
      name: "Mark Grasmayer",
      title: "Product Evangelist",
      company: "Workspace 365",
      slug: "workspace365",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif",
      results: [
        {
          metric: "100+",
          label: "nuevas oportunidades de negocio generadas",
        },
        {
          metric: "71 %",
          label: "o más de tasa de apertura",
        },
        {
          metric: "33 %",
          label: "menos costes de adquisición de clientes",
        },
      ],
    },
    {
      quote: "hubsell nos ayuda a generar interacciones con prospectos de distintos sectores, algo clave para nuestra expansión.",
      name: "Eylül Eygi",
      title: "Head of Marketing",
      company: "Sensolus",
      slug: "sensolus",
      image: "https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png",
      results: [
        {
          metric: "30 %",
          label: "menos CAC",
        },
        {
          metric: "22 %",
          label: "de tasa de respuesta",
        },
        {
          metric: "61 %",
          label: "de tasa de apertura",
        },
      ],
    },
  ],
  insights: [
    {
      title: "La venta empieza con un no: una lección sobre cómo gestionar objeciones",
      excerpt: "Por qué «la venta empieza con un no», los motivos reales por los que los prospectos te rechazan y tres estrategias para convertir el rechazo en acuerdos cerrados.",
      slug: "the-sale-starts-with-a-no-objection-handling",
      image: "https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png",
    },
    {
      title: "Siete métodos para aumentar la productividad de tus comerciales",
      excerpt: "Los factores que más restan eficiencia a un equipo de ventas y siete formas probadas de aumentar los resultados sin agotar al equipo.",
      slug: "methods-increase-productivity-salespeople",
      image: "https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png",
    },
    {
      title: "Por qué la generación de leads debe ser un proceso cualitativo",
      excerpt: "De la cantidad a la calidad en el outbound automatizado: los peligros del spam, por qué importan los datos precisos y textos de email que generan confianza.",
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
        label: "Plataformas todo en uno",
        href: "/vs/apollo",
      },
      data: {
        label: "Datos para grandes empresas",
        href: "/vs/zoominfo",
      },
      lookup: {
        label: "Herramientas de búsqueda",
        href: "/vs/lusha",
      },
    },
    rows: [
      {
        label: "Datos validados en tiempo real",
        cells: {
          hub: ["yes", "Obtenidos en tiempo real, verificados en el momento de uso"],
          aio: ["part", "Base de datos ya creada de ~275 M"],
          data: ["part", "Gran base de datos estática"],
          lookup: ["part", "Búsquedas puntuales de contactos"],
        },
      },
      {
        label: "Email, LinkedIn y teléfono, un Flow",
        cells: {
          hub: ["yes", "Un Flow, llamadas como tareas en el CRM"],
          aio: ["part", "Email automatizado, LinkedIn manual"],
          data: ["no", "La prospección se vende aparte"],
          lookup: ["no", "Sin capa de prospección"],
        },
      },
      {
        label: "Sincronización automática con el CRM",
        cells: {
          hub: ["yes", "Salesforce, HubSpot y Pipedrive"],
          aio: ["part", "Salesforce y HubSpot nativos"],
          data: ["part", "Nativa con los principales CRM"],
          lookup: ["part", "Básica, a menudo con Zapier"],
        },
      },
      {
        label: "Pagas por lo que es correcto",
        cells: {
          hub: ["yes", "Por contacto obtenido y validado"],
          aio: ["no", "Por licencia, más créditos"],
          data: ["no", "Contratos anuales de cinco cifras"],
          lookup: ["part", "Créditos gastados también en resultados erróneos"],
        },
      },
      {
        label: "Una plataforma, no un stack",
        cells: {
          hub: ["yes", "Datos, prospección y sincronización juntos"],
          aio: ["part", "Dos de las piezas"],
          data: ["no", "Solo datos"],
          lookup: ["no", "Una sola pieza"],
        },
      },
    ],
  },
  faqs: [
    {
      question: "¿Puede hubsell sustituir mi stack de outbound actual?",
      slug: "hubsell-replace-outbound-stack",
      answer: "<p>Para la mayoría de los equipos, sí. hubsell sustituye en una sola plataforma tu herramienta de sales intelligence, tu plataforma de sales engagement y tu proceso manual de prospección en LinkedIn. La mayoría de los equipos que se pasan a hubsell eliminan 2 o 3 suscripciones a herramientas en 30 días. Lo único que hubsell no sustituye es tu CRM: se sincroniza con él.</p>",
      onHomepage: true,
    },
    {
      question: "¿Tenemos que crear las campañas nosotros o hubsell ofrece acompañamiento y estrategia en los primeros pasos?",
      slug: "hubsell-onboarding-strategy",
      answer: "<p>No te damos un acceso y te deseamos suerte. Nuestro equipo se encarga de configurar la campaña completa, obtener los datos y configurar el Flow para que lances tu primera campaña outbound en menos de 7 días, y a partir de ahí sigas mejorando.</p>",
      onHomepage: true,
    },
    {
      question: "¿Se integra hubsell directamente con nuestro CRM actual?",
      slug: "hubsell-crm-integration",
      answer: "<p>No sustituimos tu sistema de registro: lo hacemos más útil. Toda la actividad, incluidos los emails enviados, las solicitudes de conexión de LinkedIn, las visitas al perfil y las respuestas, se registra automáticamente en Salesforce, HubSpot o Pipedrive, y así tu equipo comercial deja de tener datos aislados.</p>",
      onHomepage: true,
    },
    {
      question: "¿Cómo se prospecta en LinkedIn de forma segura sin que te restrinjan la cuenta?",
      slug: "safely-outreach-linkedin",
      answer: "<p>El problema es concentrar mucha actividad en poco tiempo, porque eso activa los algoritmos de seguridad de LinkedIn. hubsell amplía tu red de primer grado de forma lenta y segura los 365 días del año, dentro de los límites estrictos de la plataforma. El límite de LinkedIn para mensajes directos es mucho más alto.</p>",
      onHomepage: true,
    },
    {
      question: "¿Cómo generamos leads si nuestras cuentas objetivo no están buscando activamente un software como el nuestro?",
      slug: "generate-leads-out-of-cycle",
      answer: "<p>La mayoría de los compradores están atados a un contrato o fuera de su ciclo de compra. Si les lanzas tu discurso de venta, te ignoran. En su lugar, usa una estrategia de conexión permanente para compartir contenido útil, conocimiento del sector e invitaciones a eventos. Si aportas valor de igual a igual ahora, tu equipo será el primero al que llamen cuando de verdad se abra su ventana de compra.</p>",
      onHomepage: true,
    },
    {
      question: "¿En qué se diferencia hubsell de Outreach o Salesloft?",
      slug: "hubsell-vs-outreach-salesloft",
      answer: "<p>Outreach y Salesloft son herramientas de secuencias de email: no obtienen datos y no trabajan LinkedIn de forma nativa. Sigues necesitando un proveedor de datos aparte y un proceso manual en LinkedIn. hubsell cubre las tres capas: datos de prospectos en tiempo real, Flows coordinados de email y LinkedIn con tareas de llamada, y sincronización automática con el CRM. Una plataforma, una suscripción. Mira <a href=\"/es/comparisons/\">cómo se compara hubsell</a> con Apollo, ZoomInfo, Cognism, Lusha y Seamless.</p>",
      onHomepage: true,
    },
    {
      question: "¿En qué se diferencia hubsell de las bases de datos B2B estáticas como ZoomInfo o Apollo?",
      slug: "hubsell-catch-all-domains",
      answer: "<p>La mayoría de las herramientas de sales intelligence te entregan una exportación estática y dejan la prospección a otra plataforma. hubsell obtiene los contactos en tiempo real en el momento de tu solicitud y después te permite contactarlos por email, LinkedIn y teléfono y sincronizarlo todo con tu CRM, sin cambiar de herramienta. Sin bases de datos que se degradan, sin un stack hecho de parches. Compara en detalle: <a href=\"/es/vs/zoominfo/\">alternativa a ZoomInfo</a> y <a href=\"/es/vs/apollo/\">alternativa a Apollo</a>.</p>",
      onHomepage: true,
    },
    {
      question: "¿Cumple hubsell el RGPD?",
      slug: "hubsell-gdpr-compliance",
      answer: "<p>Sí. hubsell tiene su sede en Berlín (Alemania). Cumplimos de forma estricta el RGPD y las normas de privacidad de datos, para que toda la actividad de prospección cumpla los requisitos legales.</p>",
      onHomepage: true,
    },
    {
      question: "¿Cuál es la forma más eficaz de crear una audiencia B2B que no se degrade con el tiempo?",
      slug: "build-b2b-audience-no-decay",
      answer: "<p>Las direcciones de email pertenecen a la empresa, así que las listas pierden alrededor de un 30 % de validez cada año a medida que las personas cambian de empleo. Las conexiones de LinkedIn están ligadas a la persona y se van con ella. Construye tu audiencia como una red de LinkedIn de primer grado y cada cambio de empleo se convertirá en una vía de entrada a una nueva cuenta en lugar de en un contacto perdido.</p>",
      onHomepage: true,
    },
    {
      question: "¿Qué tasas de conversión (aceptación, respuestas e interacción) podemos esperar con hubsell?",
      slug: "hubsell-conversion-rates",
      answer: "<p>Si sigues bien el método de hubsell, puedes esperar una tasa de aceptación de entre el 25 y el 40 %, una tasa de respuesta de entre el 10 y el 15 % y una tasa de inicio de conversaciones de entre el 3 y el 5 %. Las conversiones son más altas cuando los perfiles remitentes no son demasiado comerciales.</p>",
      onHomepage: true,
    },
  ],
  s: {
    hero: {
      eyebrow: "Para fundadores y directores de ventas con más de 6 herramientas",
      titlePre: "Consigue el mismo pipeline con ",
      titleAccent: "50 veces menos",
      titlePost: " contactos.",
      sub: "hubsell obtiene contactos en tiempo real a partir de señales de compra y gestiona email, LinkedIn y teléfono en un único Flow sincronizado con tu CRM. Menos personas contactadas, las mismas reuniones concertadas.",
      ctaPrimary: "Reserva una demo",
      stats: [
        {
          value: "30 %",
          label: "menos coste de adquisición",
          company: "Safran",
        },
        {
          value: "x3",
          label: "más oportunidades",
          company: "Verhaert",
        },
        {
          value: "25 %",
          label: "más leads",
          company: "Elium",
        },
      ],
    },
    logos: {
      eyebrow: "Tres de estos equipos redujeron su coste de adquisición de clientes un 30 % o más",
      aria: "Logotipos de empresas que usan hubsell: Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall y Monotype",
    },
    vvp: {
      eyebrow: "Volumen o precisión",
      titlePre: "Las mismas 42 oportunidades. ",
      titleAccent: "Uno de los enfoques te cuesta todo tu mercado.",
      titlePost: "",
      lede: "Los dos trimestres terminan con el mismo pipeline. La diferencia está en cuánto de tu mercado consume cada uno, y en si queda alguien con quien hablar en el segundo trimestre.",
      volTag: "Gran volumen",
      volTitle: "Enviar a todo el TAM",
      volSub: "Lista comprada, dominios desechables, solo email, cada contacto del mercado, cada trimestre.",
      volAria: "Una cuadrícula que representa 100.000 prospectos. Todos los puntos se vuelven rojos a medida que se contacta con todo el mercado.",
      preTag: "Prospección segmentada",
      preTitle: "Enviar al 2 % del TAM",
      preSub: "Obtenidos en tiempo real a partir de señales de compra, dominio real, email, LinkedIn y teléfono en un único Flow.",
      preAria: "La misma cuadrícula de 100.000 prospectos. Solo unos pocos puntos se vuelven verdes: 2.000 prospectos contactados.",
      dotCaption: "1 punto = 100 prospectos",
      contactsLabel: "prospectos contactados",
      oppsLabel: "oportunidades",
      volChain: "100.000 enviados · 80.000 entregados · 64.000 personas correctas · 25.600 aperturas · 768 en fase de compra · 77 positivos · 42 oportunidades",
      preChain: "2.000 obtenidos · 1.960 entregados · 1.921 personas correctas · 1.537 contactados · 307 en fase de compra · 77 positivos · 42 oportunidades",
      volAfter: "Te queda el 0 % de tu mercado. En el segundo trimestre vuelves a escribir a las mismas bandejas de entrada.",
      preAfter: "El 98 % de tu mercado sigue sin tocar. Puedes repetir el proceso el próximo trimestre.",
      kickerLabel: "Prospectos necesarios por oportunidad",
      vs: "vs",
      kickerXPost: " veces menos",
      noteVolLabel: "Gran volumen:",
      noteVolBody: "20 % de rebotes, 20 % de personas equivocadas, 40 % de aperturas, el 3 % de cualquier mercado está en ciclo de compra en un momento dado, el 10 % de ellos confía lo bastante en un remitente desconocido como para responder y el 55 % de las respuestas positivas se convierten en oportunidades.",
      notePreLabel: "Prospección segmentada:",
      notePreBody: "98 % de contactos válidos en el momento de uso, 80 % alcanzados por email, LinkedIn y teléfono, 20 % en fase de compra porque la lista se obtiene a partir de señales de compra, 25 % de respuestas y el mismo 55 % convertido en oportunidades.",
    },
    frag: {
      eyebrow: "El problema del stack fragmentado",
      titlePre: "Seis herramientas en tu stack. Seis facturas. ",
      titleAccent: "Y ninguna se comunica con las demás.",
      titlePost: "",
      lede: "El equipo comercial medio compra seis herramientas para hacer un solo trabajo. Esto es lo que te cuesta cada una y lo que hace hubsell en su lugar.",
      colTool: "Lo que compras",
      colHub: "Lo que hace hubsell",
      pairs: [
        {
          tool: "Bases de datos de leads",
          cost: "Los datos se degradan un 30 % al año. Huecos de cobertura en tu ICP.",
          cap: "Obtención en tiempo real",
          capDesc: "Creada a partir de tu ICP el día que la necesitas.",
        },
        {
          tool: "Buscadores de emails",
          cost: "Varios proveedores que gestionar. Combinación manual, sin Flow.",
          cap: "Validados en el momento de uso",
          capDesc: "Limpiados con IA, verificados por personas.",
        },
        {
          tool: "Herramientas de intención de compra",
          cost: "Sin capa de acción propia. Las señales nunca activan la prospección.",
          cap: "Combinación de señales",
          capDesc: "Compradores activos gracias a cambios de empleo y eventos.",
        },
        {
          tool: "Herramientas de email en frío",
          cost: "El email va por su cuenta. LinkedIn es otra herramienta.",
          cap: "Email y LinkedIn en un Flow",
          capDesc: "Un único Flow coordinado.",
        },
        {
          tool: "Prospección en LinkedIn",
          cost: "Solo una solución aislada. Sin conexión con las secuencias de email.",
          cap: "Cada persona clave, una campaña",
          capDesc: "Todo el grupo de compra, no una sola persona.",
        },
        {
          tool: "Gestión del CRM",
          cost: "Los comerciales registran a mano, o nada. El CRM siempre desactualizado.",
          cap: "CRM sincronizado",
          capDesc: "Registro automático en Salesforce, HubSpot y Pipedrive.",
        },
      ],
      cta: "Unifica tu stack hoy",
    },
    zds: {
      eyebrow: "Obtención en el día cero",
      titlePre: "Datos B2B obtenidos ",
      titleAccent: "en el momento en que los necesitas",
      titlePost: ". No cuando otro los capturó.",
      sub: "hubsell no vende datos de una base de datos obsoleta. En cuanto defines tu ICP, obtenemos los contactos en tiempo real de LinkedIn, ajustados a tus criterios y validados en el momento de uso. hubsell tiene su sede en Berlín y cumple el RGPD.",
      closer: "Pagas por un contacto que es correcto hoy, no por acceder a 300 millones de contactos que eran correctos hace dos años.",
      cta: "Mira cómo lo hacemos",
    },
    ratings: {
      titlePre: "Valorado con ",
      titleAccent: "4,6+",
      titlePost: " en G2, Capterra y GetApp",
      cue: "Lee las opiniones →",
      aria: (platform2, score, out) => `Lee las opiniones sobre hubsell en ${platform2} (valoración de ${score}${out})`,
    },
    pipeline: {
      eyebrow: "El pipeline en tres pasos",
      titlePre: "Del ",
      titleAccent: "registro a la reunión",
      titlePost: " en tres pasos.",
    },
    pricing: {
      eyebrow: "Precios",
      titlePre: "Planes para ",
      titleAccent: "fundadores y equipos de ventas",
      titlePost: "",
    },
    usecases: {
      eyebrow: "Casos de uso",
      titlePre: "",
      titleAccent: "Una plataforma",
      titlePost: " para tu GTM",
      sub: "Ocupes el puesto que ocupes en el equipo comercial, hubsell sustituye la maraña de herramientas por un único enfoque coordinado.",
    },
    featuresSec: {
      eyebrow: "La plataforma",
      titlePre: "Datos en tiempo real, email y LinkedIn coordinados ",
      titleAccent: "en una sola solución",
      titlePost: "",
      beta: "Beta",
      comingSoon: "Próximamente",
    },
    testimonialsSec: {
      eyebrow: "Casos de clientes",
      titlePre: "Qué pasa cuando ",
      titleAccent: "los equipos B2B",
      titlePost: " sustituyen su stack",
      readPre: "Lee el caso de ",
      readPost: " →",
    },
    loop: {
      eyebrow: "Publica y mide · Beta",
      titlePre: "Tu contenido de LinkedIn ya genera demanda. Ahora ",
      titleAccent: "cierra el círculo",
      titlePost: ".",
      body: "La mayor parte del outbound empieza en frío. Pero quien reacciona, comenta o comparte tu contenido de LinkedIn ya ha levantado la mano. Hoy ya puedes importar a hubsell a quienes interactúan con tus publicaciones e incluirlos en un Flow. Lo que llega en beta es el círculo completo: publica directamente desde hubsell, sigue cada interacción en cuanto ocurre e incluye automáticamente a cada persona en un Flow de contactos que ya te conocen, sin exportar listas ni cambiar de pestaña.",
      cta: "Reserva una demo",
      nowLabel: "Disponible hoy",
      betaLabel: "Llega en beta",
      now: [
        "Importa a todos los que reaccionan, comentan o comparten",
        "Incluye hoy en un Flow a quienes interactúan con tus publicaciones",
      ],
      beta: [
        "Publica directamente desde hubsell",
        "Sigue cada interacción en cuanto ocurre",
        "Incluye automáticamente a cada persona en un Flow",
        "Sin exportar listas ni cambiar de pestaña",
      ],
    },
    insightsSec: {
      newsTitle: "Lo que funciona en outbound ahora mismo",
      newsSub: "Métodos, entregabilidad y estrategia de outbound, directamente en tu bandeja de entrada.",
      subscribeLabel: "Suscríbete",
      emailPlaceholder: "Tu email",
      eyebrow: "Insights",
      titlePre: "",
      titleAccent: "Métodos",
      titlePost: " y análisis para la venta outbound B2B",
      readMore: "Más insights (en inglés) →",
      cardTag: "Ventas B2B",
    },
    cmp: {
      eyebrow: "Por qué hubsell",
      titlePre: "La mayoría de las herramientas se quedan en los datos. ",
      titleAccent: "hubsell va más allá.",
      titlePost: "",
      sub: "hubsell obtiene contactos en tiempo real, gestiona email y LinkedIn en un único Flow y se sincroniza automáticamente con tu CRM. Las herramientas que comprarías en su lugar cubren cada una solo una parte. hubsell lo cubre todo.",
      moat: "Muchas herramientas hacen una o dos de estas cosas. Ninguna hace las tres en un solo lugar.",
      linksLabel: "¿Comparas hubsell con una herramienta concreta?",
      srYes: "Sí: ",
      srPart: "Parcial: ",
      srNo: "No: ",
    },
    faqSec: {
      eyebrow: "Preguntas frecuentes",
      titlePre: "",
      titleAccent: "Respuestas sinceras",
      titlePost: ", porque el outbound ya es bastante difícil.",
      seeAll: "Ver todas las preguntas →",
    },
  },
};

// Quotes of the six testimonials that are not on the homepage, by slug.
export const quotesEs: Record<string, string> = {
  matterway: "Hemos probado varias herramientas y servicios distintos, pero solo hubsell ofrece a la vez las funciones y la calidad de datos necesarias para automatizar de verdad la generación de leads.",
  spryker: "La automatización de hubsell nos ha permitido llegar a más socios y clientes, y convertirlos, que cualquier otra plataforma o canal que haya usado. Sin ella, nuestra empresa sencillamente no habría crecido.",
  cibt: "Un producto excelente para la venta B2B. Siempre he comprobado que la información que hubsell consigue encontrar es precisa y adecuada para mis prospectos. Es fácil de usar y acelera la fase de investigación de la prospección para mi equipo.",
  "alon-even": "Una prospección individualizada excelente a gran escala por email, LinkedIn y teléfono. Datos excelentes que no envejecen. Un concepto muy inteligente.",
  meetyoo: "Recomiendo hubsell a cualquiera que use el outbound en su mix de marketing B2B. ¡Un servicio de atención al cliente estupendo, útil y superrápido!",
  aspire: "Gran producto, soporte fantástico. hubsell ha mejorado mucho la generación de leads en nuestra organización. Un gran producto con un soporte que destaca de verdad: el equipo siempre va más allá para resolver las consultas a tiempo.",
};
