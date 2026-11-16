// Integrations page: Spanish (Spain), "tú". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsEs: IntegrationsPageData = {
  title: "Integraciones: CRM, email y asistentes de IA como ChatGPT | hubsell",
  metaDescription: "Conecta hubsell con HubSpot, Salesforce o Pipedrive, envía desde Google Workspace o Microsoft 365 y trabaja con hubsell desde ChatGPT, Claude, Gemini o cualquier asistente de IA compatible con MCP.",
  eyebrow: "Integraciones",
  h1Pre: "Integraciones para ",
  h1Accent: "CRM, email y asistentes de IA",
  h1Post: "",
  sub: "hubsell se conecta con Salesforce, HubSpot y Pipedrive, envía desde tus propios buzones de Google Workspace o Microsoft 365 y funciona con cualquier asistente de IA compatible con MCP, como ChatGPT, Claude o Gemini. Autorizado en unos clics, sin middleware que mantener.",
  hubLabels: {
    mail: "Envía desde tu buzón",
    crm: "Sincroniza con tu CRM",
    ai: "Pregunta desde tu asistente de IA",
  },
  heads: {
    list: {
      eyebrow: "Integraciones disponibles",
      pre: "Con qué se ",
      accent: "conecta hubsell hoy",
      post: "",
    },
    crm: {
      eyebrow: "Integración con el CRM",
      pre: "Cómo funciona ",
      accent: "la integración con el CRM",
      post: "",
    },
    mail: {
      eyebrow: "Integración de email",
      pre: "Cómo funciona el envío ",
      accent: "desde tu propio buzón",
      post: "",
    },
    ai: {
      eyebrow: "Asistentes de IA (MCP)",
      pre: "Trabaja con hubsell desde ",
      accent: "el asistente de IA que ya usas",
      post: "",
    },
    steps: {
      eyebrow: "Configuración",
      pre: "Conectado en ",
      accent: "tres pasos",
      post: "",
    },
    security: {
      eyebrow: "Seguridad y RGPD",
      pre: "Tus datos siguen ",
      accent: "bajo tu control",
      post: "",
    },
    closing: {
      eyebrow: "Integraciones",
      pre: "¿No sabes si encaja con ",
      accent: "tu stack",
      post: "?",
    },
    faq: {
      eyebrow: "Preguntas sobre integraciones",
      pre: "Preguntas sobre ",
      accent: "las integraciones de hubsell",
      post: "",
    },
  },
  statusLabel: "Disponible",
  aiStatusLabel: "Vía MCP",
  groups: {
    CRM: "CRM",
    Email: "Email",
    AI: "Asistentes de IA",
  },
  items: [
    {
      name: "Salesforce",
      category: "CRM",
      blurb: "Los contactos, las empresas y la actividad de hubsell llegan a los registros correctos de Salesforce, en tiempo real.",
    },
    {
      name: "HubSpot",
      category: "CRM",
      blurb: "Los contactos, las empresas y la actividad de hubsell llegan a los registros correctos de HubSpot, sin introducir nada a mano.",
    },
    {
      name: "Pipedrive",
      category: "CRM",
      blurb: "Los contactos y la actividad de hubsell mantienen al día tu pipeline de Pipedrive, sin ningún CSV de por medio.",
    },
    {
      name: "Google Workspace",
      category: "Email",
      blurb: "Los emails salen desde tus propios buzones de Google a través de la API de Gmail, sin ningún servidor de envío externo.",
    },
    {
      name: "Microsoft 365",
      category: "Email",
      blurb: "Los emails salen desde tus propios buzones de Outlook a través de la API de Microsoft, sin ningún servidor de envío externo.",
    },
    {
      name: "ChatGPT",
      category: "AI",
      blurb: "Pregunta a ChatGPT por tus contactos, Flows y estadísticas, o pídele que etiquete, enriquezca e inicie Flows, con los permisos que concedas.",
    },
    {
      name: "Claude",
      category: "AI",
      blurb: "Añade hubsell como conector personalizado en Claude y pregunta por contactos, Flows y resultados, con los permisos que concedas.",
    },
    {
      name: "Gemini",
      category: "AI",
      blurb: "Añade hubsell como app personalizada en Gemini para consultar contactos y resultados de Flows, etiquetar o enriquecer contactos e iniciar Flows.",
    },
    {
      name: "Mistral Vibe",
      category: "AI",
      blurb: "El asistente de Mistral, antes Le Chat: añade hubsell como conector MCP personalizado para buscar contactos, leer estadísticas de Flows, etiquetar, enriquecer e iniciar Flows.",
    },
    {
      name: "Perplexity",
      category: "AI",
      blurb: "Añade hubsell como conector remoto personalizado en Perplexity y pregunta por tus contactos, Flows y estadísticas, con los permisos que concedas.",
    },
    {
      name: "Microsoft Copilot Studio",
      category: "AI",
      blurb: "Da a tus agentes de Copilot Studio acceso a hubsell para consultar contactos y resultados de Flows, etiquetar, enriquecer e iniciar Flows, con los permisos que conceda cada persona.",
    },
    {
      name: "Cursor",
      category: "AI",
      blurb: "Añade hubsell como servidor MCP en Cursor para consultar contactos y resultados de Flows, etiquetar, enriquecer e iniciar Flows desde el editor.",
    },
    {
      name: "Claude Code",
      category: "AI",
      blurb: "Añade hubsell con un solo comando en la terminal y trabaja con tus contactos, Flows y estadísticas desde Claude Code, con los permisos que concedas.",
    },
    {
      name: "Codex",
      category: "AI",
      blurb: "Añade hubsell con un solo comando de Codex para consultar contactos y resultados de Flows, etiquetar, enriquecer e iniciar Flows, con los permisos que concedas.",
    },
    {
      name: "Visual Studio Code",
      category: "AI",
      blurb: "Añade hubsell como servidor MCP para GitHub Copilot en Visual Studio Code y consulta contactos y resultados de Flows, etiqueta, enriquece e inicia Flows.",
    },
    {
      name: "Windsurf",
      category: "AI",
      blurb: "Añade hubsell como servidor MCP en Windsurf para consultar contactos y resultados de Flows, etiquetar, enriquecer e iniciar Flows, con los permisos que concedas.",
    },
  ],
  crmPoints: [
    "Envía contactos al CRM a mano, o define condiciones para que se envíen automáticamente, por ejemplo solo los contactos que responden.",
    "Cada contacto y cada empresa se asocia al registro que ya existe y lo actualiza, así que la sincronización no crea duplicados.",
    "La actividad de email, la actividad de LinkedIn y las tareas de llamada se registran en la ficha en cuanto ocurren, y tú eliges qué campo de hubsell rellena cada campo del CRM.",
    "Los contactos que ya están en tu CRM, como clientes u oportunidades abiertas, pueden quedar fuera antes de empezar la prospección.",
  ],
  crmLink: {
    label: "Más sobre la sincronización con el CRM",
    href: "/platform/crm-sync",
  },
  mailPoints: [
    "Los emails se envían desde tus propios buzones de Google Workspace o Microsoft 365 a través de sus API. No hay ningún servidor SMTP externo ni redirecciones de seguimiento por el camino.",
    "Tu buzón tiene un límite diario de envíos, y los emails salen dentro de las franjas de envío que definas, espaciados y no en ráfagas.",
    "Cuando un contacto responde o un email rebota, el Flow se detiene para ese contacto, así que nadie recibe un seguimiento después de haber contestado.",
  ],
  mailLink: {
    label: "Más sobre la entregabilidad del email",
    href: "/platform/deliverability",
  },
  aiPoints: [
    "hubsell tiene un servidor MCP. MCP (Model Context Protocol) es el estándar abierto con el que las apps de IA trabajan con otro software, así que cualquier asistente que permita añadir un servidor MCP por su dirección puede conectarse, sea de la empresa que sea.",
    "Inicias sesión con tu cuenta de hubsell y eliges qué puede hacer el asistente: Lectura, Escritura, Gastar créditos o Enviar emails. Actúa en tu nombre, así que tu rol en hubsell sigue aplicándose.",
    "Pregunta en lenguaje normal por tus contactos, Flows y estadísticas, o pídele que etiquete y enriquezca contactos e inicie Flows. hubsell le indica al asistente que te pregunte antes de gastar créditos o enviar nada.",
    "Usas tu propia suscripción de IA. hubsell no ve tus chats y no cobra créditos por la IA. Algunas apps solo ofrecen servidores MCP propios en ciertos planes o países.",
  ],
  aiLink: {
    label: "Guía: usa hubsell con tu asistente de IA (en inglés)",
    href: "/knowledge/use-hubsell-with-your-ai-assistant/",
  },
  steps: [
    {
      title: "Abre Integraciones",
      body: "En hubsell, abre el menú de perfil abajo a la izquierda y elige Integraciones.",
    },
    {
      title: "Elige y autoriza",
      body: "Elige tu CRM o tu proveedor de correo. hubsell te lleva a su pantalla de inicio de sesión, donde concedes los permisos que solicita.",
    },
    {
      title: "Decide qué se sincroniza",
      body: "De vuelta en hubsell, la conexión aparece como activa. Nada se envía por sí solo: tú decides qué va al CRM y cuándo.",
    },
  ],
  stepsLink: {
    label: "Guía paso a paso: conecta tu CRM (en inglés)",
    href: "/knowledge/connect-your-crm/",
  },
  security: [
    "Conectas cada herramienta a través de su propia pantalla de inicio de sesión y permisos, así que hubsell solo obtiene el acceso que concedes, y puedes retirarlo en la herramienta cuando quieras.",
    "hubsell tiene su sede en Berlín y aloja los datos en Fráncfort. Tú sigues siendo el responsable del tratamiento y hubsell es tu encargado, con un contrato de encargo de tratamiento.",
  ],
  noteTitle: "Vienen más",
  noteBody: "Estas son las integraciones que admitimos hoy. Si necesitas otra herramienta, cuéntanoslo en una llamada breve y te diremos en qué punto está.",
  trademark: "Salesforce, HubSpot, Pipedrive, ChatGPT, Codex, Claude, Claude Code, Mistral Vibe, Perplexity, Cursor y Windsurf son marcas de sus respectivos propietarios. Google Workspace y Gemini son marcas de Google LLC; Microsoft 365, Microsoft Copilot Studio y Visual Studio Code, marcas de Microsoft Corporation. hubsell no está afiliado a estas empresas ni cuenta con su respaldo.",
  closingSub: "Cuéntanos con qué trabajas en una llamada breve y te enseñamos cómo encaja hubsell en tu stack.",
  faqs: [
    {
      question: "¿Con qué CRM se integra hubsell?",
      answer: "<p>Salesforce, HubSpot y Pipedrive. Las tres son integraciones nativas, así que no hay Zapier ni otro middleware de por medio.</p>",
    },
    {
      question: "¿Cuánto se tarda en conectar mi CRM?",
      answer: "<p>Unos minutos. Abres Integraciones en hubsell, eliges tu CRM y concedes los permisos que solicita. Consulta la <a class=\"link\" href=\"/knowledge/connect-your-crm/\">guía paso a paso</a> (en inglés).</p>",
    },
    {
      question: "¿Al conectar mi CRM se envían los contactos automáticamente?",
      answer: "<p>No. Conectar la cuenta no envía nada por sí solo. Envías los contactos a mano o defines condiciones para que se envíen automáticamente.</p>",
    },
    {
      question: "¿La integración con el CRM es bidireccional?",
      answer: "<p>Hoy la sincronización va de hubsell a tu CRM, y hubsell consulta el CRM para encontrar registros existentes y contactos que dejar fuera. Los cambios hechos en el CRM todavía no se escriben de vuelta en hubsell. La sincronización bidireccional está prevista.</p>",
    },
    {
      question: "¿Creará hubsell duplicados en mi CRM?",
      answer: "<p>No. Antes de escribir, hubsell asocia cada contacto y cada empresa al registro que ya existe y lo actualiza.</p>",
    },
    {
      question: "¿Con qué proveedores de email funciona hubsell?",
      answer: "<p>Google Workspace y Microsoft 365. hubsell envía desde tus propios buzones a través de las API de Gmail y Microsoft, no desde un servidor de envío externo.</p>",
    },
    {
      question: "¿Desde qué buzón envía hubsell?",
      answer: "<p>Desde el buzón de Google Workspace o Microsoft 365 que conectes, dentro de un límite diario. hubsell está pensado para una prospección de volumen bajo o medio y bien segmentada, no para envíos masivos. Consulta <a class=\"link\" href=\"/es/platform/deliverability/\">entregabilidad</a>.</p>",
    },
    {
      question: "¿Se integra hubsell con LinkedIn?",
      answer: "<p>Los pasos de LinkedIn (visitas al perfil, solicitudes de conexión, mensajes e InMail) se ejecutan dentro de los Flows de hubsell, junto al email y las tareas de llamada. Consulta <a class=\"link\" href=\"/es/platform/multichannel-outreach/\">prospección multicanal</a>.</p>",
    },
    {
      question: "¿Qué asistentes de IA funcionan con hubsell?",
      answer: "<p>Cualquier app que permita añadir un servidor MCP por su dirección e iniciar sesión en él. Entre ellas, ChatGPT, Claude y Claude Code, Gemini, Mistral Vibe (antes Le Chat), Perplexity, Microsoft Copilot Studio, Cursor, Visual Studio Code con GitHub Copilot, Codex y Windsurf. Algunas apps solo lo ofrecen en ciertos planes o países. Los pasos para cada app están en la <a class=\"link\" href=\"/knowledge/use-hubsell-with-your-ai-assistant/\">guía</a> (en inglés).</p>",
    },
    {
      question: "¿Ve hubsell mis chats con el asistente?",
      answer: "<p>No. Tu asistente solo envía a hubsell las consultas que necesita resolver, como una búsqueda de contactos, y recibe los resultados. La conversación queda entre tú y la app que usas.</p>",
    },
    {
      question: "¿Usar un asistente de IA gasta créditos de hubsell?",
      answer: "<p>No. Usas tu propia suscripción de IA, y hubsell no cobra créditos por la IA. Solo el enriquecimiento gasta créditos, igual que en la app, y solo si concedes el permiso Gastar créditos.</p>",
    },
    {
      question: "¿Están seguros mis datos cuando conecto una herramienta?",
      answer: "<p>Conectas cada herramienta a través de su propia pantalla de inicio de sesión y permisos, y puedes retirar el acceso cuando quieras. hubsell aloja los datos en Fráncfort y actúa como tu encargado del tratamiento con un contrato de encargo de tratamiento.</p>",
    },
    {
      question: "¿Y si la herramienta que uso no aparece?",
      answer: "<p>Cuéntanoslo en una llamada breve. Estamos añadiendo integraciones y te diremos en qué punto está tu herramienta.</p>",
    },
  ],
  crumbHome: "Inicio",
  crumbSelf: "Integraciones",
};
