// Integrations page: Spanish (Spain), "tú". Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { IntegrationsPageData } from './integrations-i18n';

export const integrationsEs: IntegrationsPageData = {
  title: "Integraciones: HubSpot, Salesforce, Pipedrive, Google, Microsoft | hubsell",
  metaDescription: "Conecta hubsell con HubSpot, Salesforce o Pipedrive y envía desde tus buzones de Google Workspace o Microsoft 365. Integraciones nativas, listas en minutos.",
  eyebrow: "Integraciones",
  h1Pre: "Integraciones para ",
  h1Accent: "CRM y email",
  h1Post: "",
  sub: "hubsell se conecta con Salesforce, HubSpot y Pipedrive, y envía desde tus propios buzones de Google Workspace o Microsoft 365. Conexiones nativas, autorizadas en unos clics, sin middleware que mantener.",
  hubLabels: {
    mail: "Envía desde tu buzón",
    crm: "Sincroniza con tu CRM",
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
  groups: {
    CRM: "CRM",
    Email: "Email",
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
  trademark: "Salesforce, HubSpot y Pipedrive son marcas de sus respectivos propietarios. Google Workspace es una marca de Google LLC y Microsoft 365, una marca de Microsoft Corporation. hubsell no está afiliado a estas empresas ni cuenta con su respaldo.",
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
