// Platform pages: Spanish (Spain), "tú". Same shape as the English source
// (platform-content.ts), which stays the reference. Product terms:
// docs/20261113-1401-APP-TERMS.md.
import type { PlatformData } from './platform-content';

export const platformEs: PlatformData = {
  overview: {
    title: "Plataforma de sales engagement con datos y CRM | hubsell",
    metaDescription: "hubsell es una plataforma de sales engagement con datos B2B propios en tiempo real. Obtén contactos, gestiona email, LinkedIn y llamadas en un Flow y sincronízalo con tu CRM.",
    eyebrow: "Plataforma de sales engagement",
    h1Pre: "El trabajo de seis herramientas. ",
    h1Accent: "Una sola plataforma",
    h1Post: ".",
    sub: "hubsell es una plataforma de sales engagement con datos propios. Obtiene contactos en tiempo real, gestiona email, LinkedIn y tareas de llamada en un Flow y sincroniza cada interacción con Salesforce, HubSpot o Pipedrive.",
    compare: {
      eyebrow: "Sales engagement todo en uno",
      titlePre: "Un stack de outbound de seis herramientas frente a ",
      titleAccent: "una sola plataforma",
      titlePost: "",
      colA: "Herramientas separadas",
      colB: "hubsell",
      rows: [
        [
          "Datos de contacto",
          "Una base de datos comprada una vez y usada durante meses",
          "Obtenidos en tiempo real para cada búsqueda y contrastados con tu ICP",
        ],
        [
          "Enriquecimiento",
          "Una segunda herramienta, un CSV que entra y otro que sale",
          "Emails y teléfonos verificados añadidos en el mismo lugar",
        ],
        [
          "Prospección por email",
          "Una herramienta de email que no sabe nada de LinkedIn",
          "Pasos de email y LinkedIn en un mismo Flow",
        ],
        [
          "LinkedIn",
          "A mano o en otra herramienta de automatización",
          "Visitas al perfil, invitaciones, mensajes e InMail como pasos del Flow",
        ],
        ["Llamadas", "Un marcador y notas escritas después", "Tareas de llamada creadas en tu CRM"],
        [
          "CRM",
          "Actividad registrada a mano, si es que se registra",
          "Contactos y actividad sincronizados con Salesforce, HubSpot o Pipedrive",
        ],
        ["Coste", "Varias suscripciones y el trabajo entre ellas", "Un acceso, una factura"],
      ],
    },
    heads: {
      stages: {
        eyebrow: "Resumen de la plataforma",
        pre: "Cada fase del outbound, ",
        accent: "en un solo lugar",
        post: "",
      },
      also: {
        eyebrow: "También en la plataforma",
        pre: "Integrado de serie, ",
        accent: "no añadido después",
        post: "",
      },
      why: {
        eyebrow: "Por qué una sola plataforma",
        pre: "Cada parte hace que ",
        accent: "las demás funcionen mejor",
        post: "",
      },
      proof: {
        eyebrow: "Resultados de clientes",
        pre: "Equipos que ",
        accent: "se pasaron a una sola plataforma",
        post: "",
      },
      closing: {
        eyebrow: "Plataforma de sales engagement",
        pre: "Conoce toda la plataforma ",
        accent: "en una sola llamada",
        post: ".",
      },
      faq: {
        eyebrow: "Preguntas frecuentes sobre la plataforma",
        pre: "Preguntas sobre ",
        accent: "la plataforma hubsell",
        post: "",
      },
    },
    stages: [
      {
        eyebrow: "Datos B2B en tiempo real",
        title: "Encuentra prospectos a partir de señales de compra",
        slice: "live-data",
        href: "/platform/live-data",
        linkLabel: "Descubre los datos en tiempo real",
        body: "Los contactos se obtienen en tiempo real de LinkedIn y de webs de empresas, para tu búsqueda, a partir de señales como interacciones con publicaciones, cambios de empleo, contrataciones y seguidores de la competencia. Cada uno se contrasta con tu ICP antes de que lo uses.",
      },
      {
        eyebrow: "Enriquecimiento de datos de contacto",
        title: "Emails y números de teléfono verificados",
        slice: "enrichment",
        href: "/platform/enrichment",
        linkLabel: "Descubre el enriquecimiento",
        body: "El 95 % de los emails profesionales son correctos, dominios catch-all incluidos, y cada registro pasa un control de calidad antes de llegar a la prospección. Los números de teléfono son opcionales y proceden de socios elegidos por su calidad.",
      },
      {
        eyebrow: "Prospección multicanal",
        title: "Email, LinkedIn y llamadas en un solo Flow",
        slice: "multichannel",
        href: "/platform/multichannel-outreach",
        linkLabel: "Descubre la prospección multicanal",
        body: "Visitas al perfil, solicitudes de conexión, mensajes, InMail, emails y tareas de llamada se ejecutan como pasos de un mismo Flow. Las condiciones dirigen a cada contacto según lo que hace, así que nadie recibe un email después de haber respondido ya en LinkedIn.",
      },
      {
        eyebrow: "Sincronización con el CRM",
        title: "Cada interacción en el registro correcto",
        slice: "crm-sync",
        href: "/platform/crm-sync",
        linkLabel: "Descubre la sincronización con el CRM",
        body: "Los contactos y la actividad llegan a Salesforce, HubSpot o Pipedrive, enviados a mano o por regla, y se asocian a los registros existentes para que nada se duplique.",
      },
    ],
    also: [
      {
        title: "Entregabilidad del email",
        href: "/platform/deliverability",
        linkLabel: "Descubre la entregabilidad",
        body: "Los emails salen de tus propios buzones de Google o Microsoft a través de sus API. Los contactos se verifican antes del primer envío y el volumen se mantiene bajo o medio, dirigido a personas que encajan.",
      },
      {
        title: "Personalización basada en señales",
        href: "/platform/personalisation",
        linkLabel: "Descubre la personalización",
        body: "Los mensajes pueden empezar con la señal que puso a un contacto en tu lista: la publicación con la que interactuó, el puesto que acaba de empezar o el perfil que su empresa está contratando.",
      },
    ],
    why: [
      {
        title: "Datos frescos, menos rebotes",
        body: "Los contactos obtenidos y verificados el mismo día en que los usas rebotan menos, lo que protege tu reputación de remitente en cada email que sigue.",
      },
      {
        title: "Canales coordinados, más respuestas",
        body: "Cuando el email y LinkedIn saben el uno del otro, cada contacto recibe el siguiente paso que encaja con lo que hizo, no un segundo mensaje en un canal en el que ya respondió.",
      },
      {
        title: "Registro automático, informes fiables",
        body: "Cuando cada interacción llega al CRM en el momento en que ocurre, los informes de pipeline muestran lo que pasó de verdad, y los comerciales recuperan el tiempo que dedicaban a escribirlo.",
      },
    ],
    ratingsLine: "Valoración de 4,6+ en G2, Capterra y GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Lee la historia de Workspace 365",
    closingSub: "Trae tu stack actual a una llamada corta y te mostraremos cómo queda como un solo sistema.",
    faqs: [
      {
        question: "¿Qué es una plataforma de sales engagement?",
        answer: "<p>Una plataforma de sales engagement gestiona la parte de prospección de las ventas: emails, pasos en LinkedIn y llamadas, en el orden que tú defines, con cada interacción registrada. hubsell añade las dos cosas que la mayoría deja fuera: datos de contacto B2B en tiempo real a los que dirigirte y la sincronización automática de los resultados con tu CRM.</p>",
      },
      {
        question: "¿En qué se diferencia hubsell de Outreach o Salesloft?",
        answer: "<p>Outreach y Salesloft son herramientas de secuencias de email. No obtienen datos de contacto ni trabajan LinkedIn de forma nativa, así que sigues necesitando un proveedor de datos y un proceso manual en LinkedIn junto a ellas. hubsell cubre las tres cosas: datos en tiempo real, email y LinkedIn en un Flow con tareas de llamada, y sincronización con el CRM.</p>",
      },
      {
        question: "¿Qué herramientas puede sustituir hubsell?",
        answer: "<p>Un proveedor de datos B2B, una herramienta de enriquecimiento, una herramienta de prospección por email y una herramienta de automatización de LinkedIn. Las llamadas se gestionan como tareas en tu CRM, así que no necesitas un marcador aparte para los pasos de outbound, y la actividad se registra en el CRM sin una herramienta de sincronización en medio.</p>",
      },
      {
        question: "¿Incluye hubsell datos de contacto B2B?",
        answer: "<p>Sí. hubsell obtiene los contactos en tiempo real para cada búsqueda, de LinkedIn y de webs de empresas, y enriquece los que encajan con tu ICP con un email profesional verificado y, si lo quieres, un número de teléfono. No hay ninguna base de datos estática a la que comprar acceso. Consulta los <a class=\"link\" href=\"/es/platform/live-data/\">datos en tiempo real</a>.</p>",
      },
      {
        question: "¿Qué canales admite hubsell?",
        answer: "<p>Email desde tus propios buzones de Google o Microsoft, LinkedIn (visitas al perfil, solicitudes de conexión, mensajes e InMail) y teléfono, como tareas de llamada en tu CRM. Todos se ejecutan como pasos de un mismo Flow.</p>",
      },
      {
        question: "¿Con qué CRM funciona hubsell?",
        answer: "<p>Salesforce, HubSpot y Pipedrive. Los contactos, las empresas y la actividad se sincronizan de hubsell al CRM en tiempo real y se asocian a los registros existentes para que nada se duplique. Consulta la <a class=\"link\" href=\"/es/platform/crm-sync/\">sincronización con el CRM</a>.</p>",
      },
      {
        question: "¿Cumple hubsell el RGPD?",
        answer: "<p>Sí. hubsell tiene su sede en Berlín y aloja los datos en Fráncfort. Trata los datos para la finalidad que tú defines y no los guarda para revenderlos. Tú sigues siendo el responsable del tratamiento y hubsell es tu encargado del tratamiento, con un contrato de encargo del tratamiento.</p>",
      },
      {
        question: "¿Cuánto se tarda en empezar?",
        answer: "<p>El equipo de hubsell se encarga contigo de configurar la campaña, obtener los datos y configurar el Flow, así que la mayoría de los equipos lanzan su primera campaña de outbound en menos de 7 días.</p>",
      },
      {
        question: "¿Cuánto cuesta hubsell?",
        answer: "<p>Start cuesta desde 120 € por licencia al mes y Grow desde 4.320 € al año. Scale se presupuesta en una oferta a medida para equipos a partir de 10 licencias. Consulta los <a class=\"link\" href=\"/es/pricing/\">precios</a>.</p>",
      },
      {
        question: "¿Para quién es hubsell?",
        answer: "<p>Para empresas B2B que venden a otras empresas: equipos de ventas y SDR, fundadores que venden ellos mismos, equipos de RevOps y agencias que hacen outbound para sus clientes. La mayoría de los clientes están en Europa.</p>",
      },
    ],
  },
  details: [
    {
      path: "/platform/live-data",
      title: "Proveedor de datos B2B en tiempo real y con RGPD | hubsell",
      metaDescription: "hubsell es un proveedor de datos B2B que obtiene contactos en tiempo real, ajustados a tu ICP y verificados en el momento de uso. Datos B2B conformes al RGPD, alojados en Fráncfort.",
      heroSlice: "live-data",
      compare: {
        eyebrow: "Proveedor de datos B2B",
        titlePre: "Base de datos de contactos B2B frente a ",
        titleAccent: "datos B2B obtenidos en tiempo real",
        titlePost: "",
        colA: "Base de datos comprada",
        colB: "Datos en tiempo real de hubsell",
        rows: [
          ["Captura", "Meses o años antes de que la uses", "El día en que la pides"],
          [
            "Envejecimiento",
            "Entre un 25 y un 30 % queda obsoleto cada año",
            "Obtenidos de nuevo para cada solicitud, así que nada se queda guardado envejeciendo",
          ],
          [
            "Precisión",
            "Desconocida hasta que llegan los rebotes",
            "95 %, dominios catch-all incluidos, verificados en el momento de uso",
          ],
          [
            "Relevancia",
            "Filtrados por cargo y sector",
            "Ajustados a tu ICP y a las señales de compra que elijas",
          ],
          [
            "Qué pagas",
            "Acceso a toda la base de datos, la uses o no",
            "Resultados de procesamiento, paso a paso, para los contactos que conservas",
          ],
          [
            "Quién controla los datos",
            "El proveedor los guarda y los revende",
            "Tú eres el responsable del tratamiento, hubsell es el encargado",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Señales de compra",
          pre: "Seis formas de encontrar ",
          accent: "prospectos B2B a partir de señales de compra",
          post: "",
        },
        steps: {
          eyebrow: "Obtención en el día cero",
          pre: "Cómo funciona la ",
          accent: "obtención de datos B2B en tiempo real",
          post: "",
        },
        extra: {
          eyebrow: "RGPD",
          pre: "Datos B2B ",
          accent: "conformes al RGPD",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "datos B2B precisos",
          post: "",
        },
        closing: {
          eyebrow: "Herramienta de prospección B2B",
          pre: "Empieza la prospección B2B con ",
          accent: "datos obtenidos hoy",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre datos B2B",
          pre: "Preguntas sobre ",
          accent: "los datos B2B en tiempo real",
          post: "",
        },
        explained: {
          eyebrow: "Prospección en LinkedIn",
          pre: "Prospección en LinkedIn, ",
          accent: "señal a señal",
          post: "",
        },
      },
      signals: {
        sub: "Cada señal parte de un enlace, una búsqueda o tu ICP. hubsell reúne a las personas, las contrasta con tu ICP y enriquece las que encajan, listas para la prospección.",
        startLabel: "Punto de partida",
        items: [
          {
            id: "post",
            title: "Interacción con publicaciones de LinkedIn",
            body: "Quien reacciona, comenta o comparte una publicación de LinkedIn ya ha mostrado interés por el tema. hubsell reúne a esas personas a partir de la publicación, contrasta cada una con tu ICP y enriquece las que encajan. Usa tus propias publicaciones, las de un competidor o las de una voz conocida de tu sector.",
            start: "Un enlace a cualquier publicación de LinkedIn",
          },
          {
            id: "event",
            title: "Asistentes a eventos de LinkedIn",
            body: "Quien se inscribe en un evento de LinkedIn se ha apuntado a un tema. hubsell reúne la lista de asistentes, la cualifica según tu ICP y enriquece los contactos que encajan, para que puedas contactarlos antes, durante o después del evento.",
            start: "Un enlace a un evento de LinkedIn",
          },
          {
            id: "followers",
            title: "Seguidores de tu empresa y de la competencia",
            body: "Quien sigue la página de tu empresa ya te conoce. Quien sigue la página de un competidor está interesado en lo que vendes. hubsell reúne ambos grupos y conserva solo a las personas que encajan con tu ICP.",
            start: "La página de tu empresa o la de un competidor",
          },
          {
            id: "jobs",
            title: "Cambios de empleo",
            body: "Quien acaba de llegar a un puesto está montando sus herramientas y su equipo, así que los primeros meses son el mejor momento para contactarlo. hubsell encuentra a las personas que han cambiado de empleo hace poco en tus cuentas y puestos objetivo.",
            start: "Tu ICP: puestos y empresas objetivo",
          },
          {
            id: "hiring",
            title: "Empresas que contratan para puestos concretos",
            body: "Una empresa que contrata SDR o account executives está invirtiendo en ventas ahora mismo. hubsell toma una búsqueda de LinkedIn filtrada por empresas que contratan para esos puestos y encuentra a quienes toman las decisiones allí.",
            start: "Una búsqueda de LinkedIn con el filtro de contratación",
          },
          {
            id: "search",
            title: "Búsquedas de LinkedIn y Sales Navigator",
            body: "Si ya sabes a quién quieres llegar, pega una búsqueda de personas de LinkedIn o una búsqueda de leads de Sales Navigator. hubsell la ejecuta, cualifica los resultados con IA y enriquece los que encajan, sin exportar una lista a mano.",
            start: "Un enlace a una búsqueda de LinkedIn o Sales Navigator",
          },
        ],
      },
      faqs: [
        {
          question: "¿Qué son los datos B2B obtenidos en tiempo real y en qué se diferencian de una base de datos de contactos B2B?",
          answer: "<p>Los datos obtenidos en tiempo real se recopilan en el momento en que los pides, para tu búsqueda, en lugar de salir de una base de datos capturada meses o años antes. hubsell crea un conjunto nuevo de contactos para cada solicitud, ajustado a tu ICP y verificado en el momento de uso. Una base de datos de contactos vende acceso a registros que llevan envejeciendo desde el día en que se recopilaron.</p>",
        },
        {
          question: "¿Con qué rapidez quedan obsoletos los datos de contacto B2B?",
          answer: "<p>Quienes toman las decisiones en B2B cambian de empleo aproximadamente cada 2,5 años, así que una base de datos estática pierde entre un 25 y un 30 % de su precisión cada año. Los emails rebotan, los cargos cambian y las personas se van a otra empresa. Los datos obtenidos el mismo día en que los usas evitan ese deterioro.</p>",
        },
        {
          question: "¿De dónde proceden los datos B2B de hubsell?",
          answer: "<p>hubsell obtiene datos en tiempo real de LinkedIn y de webs de empresas, y genera datos por sí mismo, por ejemplo creando y validando direcciones de email profesionales. Los números de teléfono proceden de socios elegidos por su precisión y calidad, no por su precio.</p>",
        },
        {
          question: "¿Cumplen el RGPD los datos B2B de hubsell?",
          answer: "<p>Sí. hubsell obtiene y trata los datos ad hoc para cada cliente y no los guarda para revenderlos. El cliente es el responsable del tratamiento y hubsell es el encargado, con un contrato de encargo del tratamiento. hubsell tiene su sede en Berlín, funciona en servidores de Fráncfort y elimina los datos de la cuenta en un plazo de 30 días desde que termina el contrato.</p>",
        },
        {
          question: "¿Cuál es la base jurídica de la prospección B2B según el RGPD?",
          answer: "<p>Para contactar con contactos profesionales, la base jurídica suele ser el interés legítimo. Con hubsell, el cliente sigue siendo el responsable del tratamiento y define la finalidad antes de que se obtenga un solo contacto, y hubsell trata los datos solo para esa finalidad. Las normas del email en frío varían según el país, así que lee nuestra <a class=\"link\" href=\"/insights/b2b-data-compliance/\">guía sobre el cumplimiento normativo de los datos B2B</a> (en inglés).</p>",
        },
        {
          question: "¿A partir de qué señales de compra puede hubsell obtener contactos?",
          answer: "<p>hubsell puede obtener personas que han interactuado con una publicación de LinkedIn, han asistido a un evento de LinkedIn, siguen la página de tu empresa o la de un competidor, han cambiado de empleo hace poco o trabajan en empresas que contratan para puestos concretos. También puedes partir de una búsqueda de LinkedIn o Sales Navigator, o importar tu propia lista.</p>",
        },
        {
          question: "¿Cómo encuentra hubsell a las personas que interactuaron con una publicación de LinkedIn o asistieron a un evento?",
          answer: "<p>Pega en hubsell el enlace a la publicación o al evento. hubsell reúne a las personas que reaccionaron, comentaron o se inscribieron, las cualifica según tu ICP y enriquece las que encajan con datos de contacto verificados. Después pueden pasar directamente a un Flow de LinkedIn, email y tareas de llamada.</p>",
        },
        {
          question: "¿Qué precisión tienen los datos de contacto de hubsell?",
          answer: "<p>Los datos de hubsell tienen un 95 % de precisión, dominios catch-all incluidos, y cubren entre el 80 y el 90 % de un mercado objetivo. Cada registro se verifica en el momento de uso, no cuando se recopiló por primera vez. hubsell hace encantado una prueba comparativa con tu proveedor actual.</p>",
        },
        {
          question: "¿Cómo cobra hubsell los datos? ¿Pago por contactos que no puedo usar?",
          answer: "<p>Pagas por resultados de procesamiento, paso a paso: obtención y, después, enriquecimiento, direcciones de email validadas y números de teléfono. Como cada paso se cobra por separado, puedes revisar primero los contactos obtenidos y excluir los que no son relevantes, de modo que solo pagas por enriquecer los contactos que conservas. <a class=\"link\" href=\"/es/pricing/\">Consulta los precios</a>.</p>",
        },
        {
          question: "¿Cómo se compara hubsell con ZoomInfo, Apollo o Cognism en datos B2B?",
          answer: "<p>ZoomInfo, Apollo y Cognism venden acceso a una base de datos. hubsell obtiene los datos de nuevo para cada solicitud, así que están actualizados, cualificados según tu ICP y son relevantes para las señales que eliges. hubsell además gestiona la prospección y la sincroniza con tu CRM, mientras que esas herramientas suelen quedarse en los datos. Compara: <a class=\"link\" href=\"/es/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/es/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/es/vs/cognism/\">Cognism</a>.</p>",
        },
      ],
      extra: {
        title: "Datos B2B conformes al RGPD",
        paras: [
          "hubsell obtiene y trata los datos ad hoc, para una finalidad que defines antes de que se obtenga un solo contacto, y no los guarda para revenderlos. Tú sigues siendo el responsable del tratamiento y hubsell es tu encargado. Un proveedor de bases de datos funciona al revés: recopila datos para volver a venderlos.",
          "La prospección de contactos profesionales se basa en el interés legítimo según el RGPD. hubsell tiene su sede en Berlín (Alemania) y la plataforma funciona en servidores de Amazon Web Services en Fráncfort.",
          "Cualquier cliente puede firmar el contrato de encargo del tratamiento de hubsell, que establece cómo se tratan los datos personales, qué subencargados pueden trabajar con ellos y cómo se responden las solicitudes de las personas que figuran en tus datos. Cuando termina un contrato, los datos de tu cuenta se eliminan en un plazo de 30 días.",
        ],
        links: [
          {
            label: "Lee el contrato de encargo del tratamiento (en inglés)",
            href: "/data-processing-agreement",
          },
          {
            label: "Guía: cumplimiento normativo de datos B2B y prospección en frío (en inglés)",
            href: "/insights/b2b-data-compliance",
          },
          {
            label: "Alternativa a Cognism: comparativa",
            href: "/vs/cognism",
          },
          {
            label: "Alternativa a ZoomInfo: comparativa",
            href: "/vs/zoominfo",
          },
        ],
      },
      eyebrow: "Datos B2B en tiempo real",
      h1Pre: "Datos B2B obtenidos ",
      h1Accent: "hoy",
      h1Post: ", no hace dos años",
      sub: "hubsell es un proveedor de datos B2B que no vende acceso a una base de datos estática. Defines tu ICP y nosotros obtenemos los contactos en tiempo real de LinkedIn, añadimos señales de compra y verificamos cada registro antes de que entre en tu Flow.",
      demoCta: "Reserva una demo",
      heroTimeline: true,
      row: {
        titlePre: "Obtenidos a partir de ",
        titleAccent: "señales de compra en tiempo real",
        titlePost: "",
        points: [
          "La mayoría de las plataformas te dejan filtrar por cargo y sector. hubsell también lee el comportamiento.",
          "Personas que siguen la página de tu empresa o la de un competidor, interactúan con una publicación de LinkedIn, cambian de empleo, asisten a eventos o contratan para puestos concretos.",
          "Las señales te dicen a quién merece la pena contactar esta semana, no solo quién encaja con un filtro.",
        ],
        embed: "05-sp-widget",
        stepEyebrow: "Cómo funciona",
        stepTitle: "De la señal en tiempo real al contacto verificado",
      },
      gridTitlePre: "Datos de contacto B2B ",
      gridTitleAccent: "correctos el día en que los usas",
      gridTitlePost: "",
      blocks: [
        {
          title: "Obtención en el día cero",
          body: "Una base de datos a medida creada en el momento de tu solicitud, no una lista compartida capturada hace años. Actualizada a ese día, con una cobertura de entre el 80 y el 90 % de tu mercado objetivo.",
        },
        {
          title: "Ajustados a tu ICP",
          body: "Define tu perfil de cliente ideal una sola vez. Cada contacto que entra en tu Flow se contrasta con él antes de que gastes un solo crédito en prospección.",
        },
        {
          title: "Verificados en el momento de uso",
          body: "Cada registro se comprueba en el momento en que se obtiene, dominios catch-all incluidos. Los rebotes se mantienen bajos y tu reputación de remitente queda intacta.",
        },
        {
          title: "Pensados contra el deterioro",
          body: "Quien toma las decisiones en B2B cambia de empleo de media cada 2,5 años, así que las listas estáticas se deterioran entre un 25 y un 30 % al año. Con la obtención en tiempo real, el deterioro deja de importar: los datos son correctos el día en que los usas.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia con datos precisos",
      quoteSlug: "alon-even",
      storySlug: "sensolus",
      storyLabel: "Lee la historia de Sensolus",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre los datos en tiempo real",
      faqSlugs: ["stop-sales-email-bounces", "build-b2b-audience-no-decay"],
      closing: {
        titlePre: "Mira tu mercado, obtenido ",
        titleAccent: "hoy",
        titlePost: ".",
        sub: "Cuéntanos tu ICP en una llamada corta y te mostraremos lo que devuelve para él la obtención en el día cero.",
      },
      closingCta: "Reserva una demo",
    },
    {
      path: "/platform/multichannel-outreach",
      title: "Prospección multicanal: email, LinkedIn y teléfono | hubsell",
      metaDescription: "Gestiona LinkedIn, email y tareas de llamada en un solo Flow. Automatización segura de LinkedIn con varios perfiles remitentes, email desde tus buzones y llamadas en tu CRM.",
      heroSlice: "multichannel",
      compare: {
        eyebrow: "Prospección por LinkedIn y email",
        titlePre: "Tres herramientas separadas frente a ",
        titleAccent: "un solo Flow multicanal",
        titlePost: "",
        colA: "Herramientas separadas",
        colB: "Prospección multicanal de hubsell",
        rows: [
          [
            "Canales",
            "Una herramienta de email, otra de LinkedIn y una lista de tareas, cada una por su lado",
            "Email, LinkedIn y tareas de llamada en un solo Flow",
          ],
          [
            "Reacción al contacto",
            "Alguien tiene que detener las demás herramientas a mano",
            "Las ramas dirigen a cada contacto según lo que hace: aceptó, abrió, respondió o no reaccionó",
          ],
          [
            "Quién envía en LinkedIn",
            "Perfiles de SDR, menos del 20 % de invitaciones aceptadas",
            "Perfiles de fundadores y expertos, más del 50 % aceptadas",
          ],
          [
            "Volumen en LinkedIn",
            "Un solo perfil soporta toda la actividad",
            "Repartido entre 5 y 10 perfiles remitentes dentro de límites estrictos",
          ],
          [
            "Envío de emails",
            "A través de servidores de envío externos y enlaces de seguimiento",
            "Desde tus propios buzones a través de las API de Google y Microsoft",
          ],
          [
            "Llamadas",
            "Un marcador aparte y registro manual",
            "Tareas de llamada en Salesforce, HubSpot o Pipedrive, registradas junto al Flow",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Plataforma de prospección multicanal",
          pre: "Una plataforma de prospección multicanal, ",
          accent: "no tres herramientas",
          post: "",
        },
        explained: {
          eyebrow: "Automatización de LinkedIn",
          pre: "Prospección por LinkedIn y email, ",
          accent: "paso a paso",
          post: "",
        },
        steps: {
          eyebrow: "Cómo funciona",
          pre: "Cómo se ejecuta ",
          accent: "un Flow multicanal",
          post: "",
        },
        extra: {
          eyebrow: "Seguridad en LinkedIn",
          pre: "",
          accent: "Automatización segura de LinkedIn",
          post: ", dentro de los límites",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "una prospección coordinada",
          post: "",
        },
        closing: {
          eyebrow: "Prospección por LinkedIn y email",
          pre: "Gestiona LinkedIn, email y llamadas en ",
          accent: "un solo Flow",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre prospección multicanal",
          pre: "Preguntas sobre ",
          accent: "la prospección multicanal",
          post: "",
        },
      },
      signals: {
        sub: "Cada paso es un bloque en el editor de Flows. Colócalos en el orden que encaje con tus compradores y deja que las condiciones decidan quién va a dónde.",
        startLabel: "Úsalo para",
        items: [
          {
            id: "visit",
            title: "Visitas al perfil",
            body: "Una visita al perfil le muestra al prospecto quién está a punto de contactarle, antes de pedirle nada.",
            start: "Preparar el terreno con un contacto antes de la invitación",
          },
          {
            id: "invite",
            title: "Solicitudes de conexión",
            body: "Las invitaciones salen de los perfiles que los compradores aceptan. Las solicitudes de fundadores y expertos se aceptan más del 50 % de las veces, mientras que los perfiles de SDR se quedan por debajo del 20 %.",
            start: "Crear una red de primer grado con tus compradores",
          },
          {
            id: "message",
            title: "Mensajes de LinkedIn",
            body: "Cuando se acepta una invitación, sigue un mensaje directo tras la espera que definas. Lo que pase después depende de si el contacto responde.",
            start: "La primera conversación de verdad",
          },
          {
            id: "inmail",
            title: "InMail",
            body: "InMail llega a personas fuera de tu red sin necesidad de una solicitud de conexión previa.",
            start: "Contactos demasiado importantes para esperar",
          },
          {
            id: "email",
            title: "Pasos de email",
            body: "Los emails salen de tus propios buzones de Google o Microsoft a través de sus API, sin servidores externos ni redirecciones de seguimiento por el camino.",
            start: "Todos los que tienen un email verificado, incluidos los que no aceptaron",
          },
          {
            id: "call",
            title: "Tareas de llamada",
            body: "Los pasos de teléfono crean tareas de llamada en Salesforce, HubSpot o Pipedrive. Los comerciales llaman desde el CRM y el resultado se registra junto con el resto del Flow.",
            start: "Los contactos que merecen una conversación",
          },
          {
            id: "branch",
            title: "Condiciones y ramas",
            body: "Cada contacto se dirige según lo que hace: aceptó, abrió, respondió o dejó de reaccionar. Quien acepta recibe un mensaje; quien no acepta recibe un email.",
            start: "Mantener a cada contacto en el camino correcto",
          },
          {
            id: "wait",
            title: "Esperas",
            body: "Los pasos de espera espacian las interacciones, por ejemplo un día después de una invitación aceptada o una semana antes de retirar una invitación sin respuesta.",
            start: "Un ritmo que parece personal, no automatizado",
          },
        ],
      },
      extra: {
        title: "Automatización segura de LinkedIn",
        paras: [
          "LinkedIn restringe las cuentas cuando se concentra mucha actividad en poco tiempo. hubsell hace lo contrario: crea tu red de primer grado de forma lenta y constante, los 365 días del año, dentro de límites estrictos de la plataforma.",
          "La actividad se reparte entre 5 y 10 perfiles remitentes de tu equipo, así que ningún perfil soporta todo el volumen. Un volumen menor por remitente mantiene sano cada perfil y protege también tu dominio de email.",
          "Las invitaciones que no se aceptan se retiran tras la espera que definas, para que las solicitudes pendientes no se acumulen en un perfil.",
        ],
        links: [
          {
            label: "Cómo protege hubsell la entregabilidad del email",
            href: "/platform/deliverability",
          },
        ],
      },
      faqs: [
        {
          question: "¿Qué es una plataforma de prospección multicanal?",
          answer: "<p>Una plataforma de prospección multicanal gestiona LinkedIn, email y teléfono como un solo Flow en lugar de tres herramientas separadas. hubsell decide el siguiente paso de cada contacto según lo que hizo en cualquier canal, así que una invitación aceptada, un email abierto o una respuesta lo hacen avanzar sin que nadie cambie de herramienta.</p>",
        },
        {
          question: "¿Puedo gestionar la prospección por LinkedIn y por email en un solo Flow?",
          answer: "<p>Sí. En hubsell, los pasos de LinkedIn (visitas al perfil, solicitudes de conexión, mensajes, InMail), los pasos de email y las tareas de llamada están en un mismo Flow. Las condiciones dirigen a cada contacto: quien acepta la invitación recibe un mensaje de LinkedIn; quien no la acepta recibe un email.</p>",
        },
        {
          question: "¿Es segura la automatización de LinkedIn? ¿Cómo evita hubsell las restricciones?",
          answer: "<p>LinkedIn restringe las cuentas cuando se concentra mucha actividad en poco tiempo. hubsell crea tu red de primer grado de forma lenta y constante, los 365 días del año, dentro de límites estrictos de la plataforma, y reparte la actividad entre 5 y 10 perfiles remitentes para que ningún perfil soporte todo el volumen.</p>",
        },
        {
          question: "¿Qué acciones de LinkedIn puede automatizar hubsell?",
          answer: "<p>Visitas al perfil, solicitudes de conexión, mensajes directos e InMail, además de retirar las invitaciones que no se aceptaron. Cada acción es un paso del mismo Flow que tus emails y tus tareas de llamada.</p>",
        },
        {
          question: "¿Envía hubsell los emails desde mi propio buzón?",
          answer: "<p>Sí. Los emails salen de tus propios buzones de Google o Microsoft a través de sus API. No hay ningún servidor SMTP externo ni redirecciones de seguimiento en el email, así que tus mensajes parecen lo que son: correo real de una persona real. Más sobre la <a class=\"link\" href=\"/es/platform/deliverability/\">entregabilidad</a>.</p>",
        },
        {
          question: "¿Quién debería hacer la prospección en LinkedIn: los SDR o los directivos?",
          answer: "<p>El remitente cambia el resultado. Las solicitudes de conexión de los SDR suelen aceptarse menos del 20 % de las veces, porque los compradores esperan un discurso de venta. La misma solicitud de un fundador, un directivo o un experto en la materia se acepta más del 50 % de las veces. hubsell hace la prospección desde los perfiles que los compradores aceptan.</p>",
        },
        {
          question: "¿Puede hubsell hacer prospección desde varios perfiles de LinkedIn a la vez?",
          answer: "<p>Sí. hubsell gestiona la prospección de tu CEO, tus responsables de ventas y tus expertos en la materia desde un solo lugar, para que varias personas puedan dirigirse a la misma cuenta de forma coordinada, y el volumen se reparte entre sus perfiles.</p>",
        },
        {
          question: "¿Qué resultados puedo esperar de la prospección por LinkedIn y email con hubsell?",
          answer: "<p>Siguiendo el método de hubsell, los equipos suelen conseguir entre un 25 y un 40 % de solicitudes de conexión aceptadas, entre un 10 y un 15 % de respuestas y entre un 3 y un 5 % de conversaciones iniciadas. Los resultados están en la parte alta cuando los perfiles remitentes no parecen comerciales.</p>",
        },
        {
          question: "¿Puede hubsell hacer llamadas?",
          answer: "<p>hubsell no tiene marcador integrado. Los pasos de teléfono crean tareas de llamada en Salesforce, HubSpot o Pipedrive, así que los comerciales llaman desde el CRM que ya usan y el resultado se registra junto con el resto del Flow. Consulta la <a class=\"link\" href=\"/es/platform/crm-sync/\">sincronización con el CRM</a>.</p>",
        },
        {
          question: "¿Cómo se compara hubsell con Outreach o Salesloft?",
          answer: "<p>Outreach y Salesloft son herramientas de secuencias de email: no obtienen datos ni trabajan LinkedIn de forma nativa, así que sigues necesitando un proveedor de datos y un proceso manual en LinkedIn. hubsell cubre las tres capas: datos de prospectos en tiempo real, LinkedIn y email en un Flow con tareas de llamada, y sincronización automática con el CRM.</p>",
        },
      ],
      eyebrow: "Prospección multicanal",
      h1Pre: "Prospección multicanal por ",
      h1Accent: "email, LinkedIn y teléfono",
      h1Post: "",
      sub: "Deja de hacer malabares con una herramienta de email, otra de LinkedIn y una lista de tareas. hubsell gestiona los tres canales como un solo Flow coordinado que reacciona a lo que hace cada contacto.",
      demoCta: "Reserva una demo",
      row: {
        titlePre: "Una plataforma de prospección multicanal, ",
        titleAccent: "no tres herramientas",
        titlePost: "",
        points: [
          "Arrastra y suelta pasos de email, LinkedIn y teléfono en un solo Flow.",
          "Visitas al perfil, solicitudes de conexión, mensajes directos, InMail y tareas de llamada, todo coordinado con tu cadencia de emails.",
          "Las condiciones con ramas dirigen a cada contacto según lo que hace: abrió, respondió, aceptó o dejó de reaccionar.",
        ],
        embed: "06-multichannel-flow",
        stepEyebrow: "Cómo funciona",
        stepTitle: "Un solo Flow para todos los canales",
      },
      gridTitlePre: "Pensado para ",
      gridTitleAccent: "llegar a la bandeja de entrada y recibir respuesta",
      gridTitlePost: "",
      blocks: [
        {
          title: "Entregabilidad desde el diseño",
          body: "Los emails se envían a través de las API de Google y Microsoft directamente desde tus propios buzones, sin servidores externos por el camino. Las tasas de apertura son fiables y los filtros de spam no se alteran.",
        },
        {
          title: "Envíos seguros y repartidos",
          body: "La prospección se reparte entre 5 y 10 perfiles remitentes internos, dentro de límites estrictos de la plataforma. Menos volumen por remitente, más entregabilidad y ningún dominio quemado. La automatización de LinkedIn funciona con límites diarios seguros en cada perfil.",
        },
        {
          title: "Enviado desde los perfiles adecuados",
          body: "Las solicitudes de conexión de los SDR se quedan por debajo del 20 % de aceptación porque los compradores esperan un discurso de venta. La misma solicitud de un fundador o un experto supera el 50 %. hubsell hace la prospección desde los perfiles que los compradores aceptan.",
        },
        {
          title: "Llamadas donde trabajan los comerciales",
          body: "Los pasos de teléfono llegan como tareas de llamada a Salesforce, HubSpot o Pipedrive, así que los comerciales llaman desde el CRM que ya usan y el resultado se registra junto con el resto del Flow.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia con una prospección coordinada",
      quoteSlug: "meetyoo",
      storySlug: "verhaert",
      storyLabel: "Lee la historia de Verhaert",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre la prospección",
      faqSlugs: [
        "mass-email-brand-reputation",
        "sdr-vs-executive-linkedin-outreach",
        "hubsell-email-infrastructure",
      ],
      closing: {
        titlePre: "Gestiona los tres canales en ",
        titleAccent: "un solo Flow",
        titlePost: ".",
        sub: "Trae una de tus campañas actuales a una llamada corta y la convertiremos en un solo Flow de hubsell.",
      },
      closingCta: "Reserva una demo",
    },
    {
      path: "/platform/crm-sync",
      title: "Sincroniza LinkedIn y email con tu CRM | hubsell",
      metaDescription: "Sincroniza la actividad de LinkedIn y email con HubSpot, Salesforce o Pipedrive. Envía contactos a mano o por regla, asócialos a registros existentes y registra cada interacción.",
      heroSlice: "crm-sync",
      compare: {
        eyebrow: "Integración con el CRM",
        titlePre: "Registro manual en el CRM frente a ",
        titleAccent: "sincronización automática con el CRM",
        titlePost: "",
        colA: "Registro a mano",
        colB: "Sincronización con el CRM de hubsell",
        rows: [
          [
            "Cómo entran los contactos",
            "Exportaciones e importaciones de CSV, o registros escritos a mano",
            "Enviados a mano o automáticamente, según las condiciones que definas",
          ],
          [
            "Duplicados",
            "Un segundo registro cada vez que alguien importa una lista",
            "Asociados a los registros existentes en lugar de crear otros nuevos",
          ],
          [
            "Actividad en LinkedIn",
            "Se queda en LinkedIn, invisible para el resto del equipo",
            "Visitas, invitaciones, mensajes y respuestas en la ficha del contacto",
          ],
          [
            "Actividad de email",
            "Se registra cuando un comercial se acuerda",
            "Envíos, aperturas y respuestas registrados en el momento",
          ],
          [
            "Llamadas",
            "Un marcador y una nota escrita después",
            "Tareas de llamada en el CRM, con el resultado en el registro",
          ],
          [
            "Clientes actuales",
            "Contactados de nuevo porque nadie revisó el CRM",
            "Contactos del CRM excluidos antes de empezar la prospección",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Integración con el CRM",
          pre: "Cada interacción ",
          accent: "registrada en tu CRM",
          post: "",
        },
        explained: {
          eyebrow: "Sincroniza LinkedIn con tu CRM",
          pre: "Qué sincroniza hubsell ",
          accent: "con tu CRM",
          post: "",
        },
        steps: {
          eyebrow: "Cómo funciona",
          pre: "Del paso del Flow ",
          accent: "al registro del CRM",
          post: "",
        },
        extra: {
          eyebrow: "Integración con Salesforce, HubSpot y Pipedrive",
          pre: "Tu CRM sigue siendo ",
          accent: "el sistema de referencia",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "el registro automático en el CRM",
          post: "",
        },
        closing: {
          eyebrow: "Sincronización automática con el CRM",
          pre: "Tu CRM, ",
          accent: "siempre al día",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre la sincronización con el CRM",
          pre: "Preguntas sobre ",
          accent: "la sincronización con el CRM",
          post: "",
        },
      },
      signals: {
        sub: "Todo lo que aparece a continuación puede ir a Salesforce, HubSpot o Pipedrive. Tú eliges qué se envía y cuándo.",
        startLabel: "En el CRM",
        items: [
          {
            id: "company",
            title: "Contactos y empresas",
            body: "Las personas y sus empresas se crean en el CRM, o se asocian al registro que ya existe y se actualizan.",
            start: "Un registro por persona",
          },
          {
            id: "email",
            title: "Actividad de email",
            body: "Cada email que envía un Flow, junto con las aperturas y las respuestas, se registra en el contacto en el momento en que ocurre.",
            start: "Actividad en el historial del contacto",
          },
          {
            id: "invite",
            title: "Invitaciones y conexiones de LinkedIn",
            body: "Las solicitudes de conexión y las invitaciones aceptadas aparecen en el contacto junto al email, para que todo el equipo vea la parte de LinkedIn de la prospección.",
            start: "Actividad en el historial del contacto",
          },
          {
            id: "message",
            title: "Mensajes y respuestas de LinkedIn",
            body: "Los mensajes e InMail enviados desde los perfiles de tu equipo, y sus respuestas, se registran en la ficha.",
            start: "Actividad en el historial del contacto",
          },
          {
            id: "call",
            title: "Tareas de llamada y resultados",
            body: "Los pasos de teléfono crean una tarea de llamada en el CRM. El comercial llama desde el CRM y registra allí el resultado.",
            start: "Una tarea en el CRM",
          },
          {
            id: "branch",
            title: "Reglas de envío",
            body: "Decide qué contactos pasan al CRM: envíalos a mano o define condiciones, por ejemplo solo los contactos que responden.",
            start: "Solo los contactos que merecen un registro",
          },
          {
            id: "map",
            title: "Mapeo de campos",
            body: "Elige qué campo de hubsell rellena cada campo del CRM, para que los datos lleguen donde tus informes los esperan.",
            start: "Tus campos, tu estructura",
          },
          {
            id: "ban",
            title: "Exclusión de contactos del CRM",
            body: "Los contactos que ya están en tu CRM, como clientes u oportunidades abiertas, pueden quedar fuera antes de empezar la prospección.",
            start: "No contactar con clientes por error",
          },
        ],
      },
      extra: {
        title: "Tu CRM sigue siendo el sistema de referencia",
        paras: [
          "hubsell escribe en Salesforce, HubSpot y Pipedrive. No los sustituye, y tu equipo no tiene que trabajar en dos sitios.",
          "Antes de escribir, hubsell busca el registro que ya existe y lo actualiza, así que enviar dos veces a la misma persona no crea un segundo contacto.",
          "Los contactos que ya están en tu CRM se pueden excluir antes de que empiece un Flow, para no contactar por error con clientes ni con oportunidades abiertas.",
        ],
        links: [
          {
            label: "Cómo conectar tu CRM (en inglés)",
            href: "/knowledge/connect-your-crm",
          },
        ],
      },
      faqs: [
        {
          question: "¿Se integra hubsell con HubSpot, Salesforce y Pipedrive?",
          answer: "<p>Sí. hubsell tiene integraciones nativas con los tres. Conectas tu CRM una sola vez en Integraciones y concedes los permisos que pide. A partir de ahí, la sincronización funciona en tiempo real, sin Zapier, middleware ni archivos CSV. Consulta <a class=\"link\" href=\"/knowledge/connect-your-crm/\">cómo conectar tu CRM</a> (en inglés).</p>",
        },
        {
          question: "¿Cómo sincronizo la actividad de LinkedIn con HubSpot?",
          answer: "<p>Conecta HubSpot con hubsell y gestiona tu prospección en LinkedIn en un Flow de hubsell. Las visitas al perfil, las solicitudes de conexión, las invitaciones aceptadas, los mensajes y las respuestas se registran entonces en el contacto de HubSpot, junto a la actividad de email y las tareas de llamada. Salesforce y Pipedrive funcionan igual.</p>",
        },
        {
          question: "¿Qué sincroniza hubsell con mi CRM?",
          answer: "<p>Los contactos y sus empresas, la actividad de email (enviado, abierto, respondido), la actividad de LinkedIn (visitas al perfil, solicitudes de conexión, invitaciones aceptadas, mensajes, InMail y respuestas) y las tareas de llamada con sus resultados.</p>",
        },
        {
          question: "¿Se envían los contactos a mi CRM automáticamente?",
          answer: "<p>Solo si quieres. Puedes enviar los contactos a mano o definir condiciones que los envíen automáticamente, por ejemplo solo los contactos que responden. Conectar tu CRM no envía nada por sí solo.</p>",
        },
        {
          question: "¿Creará hubsell registros duplicados en mi CRM?",
          answer: "<p>No. Antes de escribir, hubsell asocia cada contacto y cada empresa al registro que ya existe y lo actualiza, en lugar de crear uno nuevo.</p>",
        },
        {
          question: "¿Puedo excluir a los contactos que ya están en mi CRM?",
          answer: "<p>Sí. Los contactos que ya están en tu CRM, como clientes o personas en oportunidades abiertas, se pueden excluir antes de empezar la prospección, para no contactar con nadie por error.</p>",
        },
        {
          question: "¿La sincronización de hubsell con el CRM es bidireccional?",
          answer: "<p>Hoy la sincronización va de hubsell a tu CRM. hubsell escribe contactos, empresas y actividad, y consulta el CRM para encontrar registros existentes y contactos que excluir. Los cambios hechos en el CRM todavía no se escriben de vuelta en hubsell. La sincronización bidireccional está prevista.</p>",
        },
        {
          question: "¿Puedo elegir qué campos del CRM rellena hubsell?",
          answer: "<p>Sí. Asignas los campos de hubsell a los campos de tu CRM, para que los datos lleguen donde tus informes y tus procesos los esperan.</p>",
        },
        {
          question: "¿Cómo se registran las llamadas en el CRM?",
          answer: "<p>hubsell no tiene marcador integrado. Un paso de teléfono en un Flow crea una tarea de llamada en Salesforce, HubSpot o Pipedrive. El comercial llama desde el CRM y registra el resultado en el mismo registro que la actividad de email y LinkedIn.</p>",
        },
        {
          question: "¿Por qué registrar la actividad de prospección en el CRM automáticamente?",
          answer: "<p>El registro manual es lento e incompleto, así que los informes de pipeline muestran lo que los comerciales se acordaron de escribir. Cuando cada interacción se registra en el momento en que ocurre, el registro está completo y los comerciales recuperan ese tiempo. Elium ahorró unas 20 horas a la semana tras pasarse a hubsell.</p>",
        },
      ],
      eyebrow: "Sincronización con el CRM",
      h1Pre: "LinkedIn y email, ",
      h1Accent: "sincronizados con tu CRM",
      h1Post: "",
      sub: "hubsell alimenta HubSpot, Salesforce y Pipedrive, no los sustituye. Tú decides qué contactos pasan al CRM, a mano o por regla, y cada email, paso de LinkedIn y tarea de llamada llega al registro correcto en el momento en que ocurre.",
      demoCta: "Reserva una demo",
      row: {
        titlePre: "Registrado ",
        titleAccent: "en el momento en que ocurre",
        titlePost: "",
        points: [
          "Los envíos, aperturas y respuestas de email, los pasos de LinkedIn y las tareas de llamada llegan a la ficha del contacto en Salesforce, HubSpot o Pipedrive.",
          "Los contactos y las empresas se asocian a los registros existentes, así que la sincronización actualiza lo que ya hay en lugar de crear duplicados.",
          "Sin introducción manual y sin CSV en medio. Tu equipo trabaja el pipeline, no la hoja de cálculo.",
        ],
        embed: "07-crm-sync-tracker",
        stepEyebrow: "Cómo funciona",
        stepTitle: "De la actividad al registro sincronizado",
      },
      gridTitlePre: "Un sistema de referencia en el que ",
      gridTitleAccent: "por fin puedes confiar",
      gridTitlePost: "",
      blocks: [
        {
          title: "Salesforce, HubSpot y Pipedrive",
          body: "Sincronización nativa con los tres CRM, en tiempo real. Sin middleware, sin exportaciones de CSV, sin procesos nocturnos.",
        },
        {
          title: "Informes fieles a la realidad",
          body: "Cuando cada actividad se registra en el momento en que ocurre, tus informes de pipeline reflejan la realidad y no lo que los comerciales se acordaron de escribir.",
        },
        {
          title: "Horas recuperadas cada semana",
          body: "Introducir datos a mano en el CRM se come en silencio el tiempo de venta. El registro automático te lo devuelve: Elium ahorró unas 20 horas a la semana tras pasarse a hubsell.",
        },
        {
          title: "Llamadas como tareas del CRM",
          body: "Los pasos de teléfono crean tareas que tus comerciales completan dentro del CRM. hubsell no tiene marcador integrado ni lo necesita: la llamada se hace donde está el registro.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia con el registro automático",
      quoteSlug: "spryker",
      storySlug: "elium",
      storyLabel: "Lee la historia de Elium",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre la sincronización con el CRM",
      faqSlugs: ["hubsell-crm-integration", "hubsell-replace-outbound-stack"],
      closing: {
        titlePre: "Alimenta tu CRM ",
        titleAccent: "automáticamente",
        titlePost: ".",
        sub: "Enséñanos la configuración de tu CRM en una llamada corta y te explicaremos exactamente qué registra hubsell y dónde.",
      },
      closingCta: "Reserva una demo",
    },
    {
      path: "/platform/deliverability",
      title: "Entregabilidad del email en frío desde tus buzones | hubsell",
      metaDescription: "Entregabilidad del email en frío con hubsell: envía desde tu buzón de Google o Microsoft, con SPF, DKIM y DMARC configurados, límite diario, franjas de envío y contactos verificados.",
      heroSlice: "deliverability",
      compare: {
        eyebrow: "Entregabilidad del email en frío",
        titlePre: "Envíos masivos frente a ",
        titleAccent: "envíos pensados para la bandeja de entrada",
        titlePost: "",
        colA: "Herramientas de email masivo",
        colB: "hubsell",
        rows: [
          [
            "Servidor de envío",
            "Servidores SMTP externos compartidos con otros remitentes",
            "Tu propio buzón de Google o Microsoft, a través de su API",
          ],
          [
            "Autenticación",
            "Tienes que resolverla tú",
            "SPF, DKIM y DMARC configurados con el equipo de hubsell",
          ],
          [
            "Datos de contacto",
            "Listas compradas hace meses, con muchas direcciones que ya no son válidas",
            "Verificados el día en que contactas, dominios catch-all incluidos",
          ],
          [
            "Volumen",
            "Todo lo que permite el plan, en ráfagas",
            "Volumen bajo o medio dentro de un límite diario, dirigido a personas que encajan",
          ],
          ["Momento del envío", "Se envía en cuanto empieza la campaña", "Dentro de las franjas de envío que definas"],
          [
            "Respuestas y rebotes",
            "Los seguimientos continúan hasta que alguien los detiene",
            "El Flow se detiene para ese contacto ante una respuesta o un rebote",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Llegada a la bandeja de entrada",
          pre: "Enviado como ",
          accent: "confían las bandejas de entrada",
          post: "",
        },
        explained: {
          eyebrow: "Lista de comprobación de entregabilidad",
          pre: "Lo que mantiene tu email ",
          accent: "fuera del spam",
          post: "",
        },
        steps: {
          eyebrow: "Cómo funciona",
          pre: "Del contacto verificado ",
          accent: "a la bandeja de entrada",
          post: "",
        },
        extra: {
          eyebrow: "Calidad de los datos y entregabilidad",
          pre: "Buenos datos son ",
          accent: "buena entregabilidad",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "una mejor entregabilidad",
          post: "",
        },
        closing: {
          eyebrow: "Entregabilidad del email",
          pre: "Descubre dónde ",
          accent: "llegan tus emails",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre entregabilidad",
          pre: "Preguntas sobre ",
          accent: "la entregabilidad del email",
          post: "",
        },
      },
      signals: {
        sub: "hubsell se ocupa de cada uno de estos puntos, para que llegar a la bandeja de entrada no dependa de tus comerciales.",
        startLabel: "Protege",
        items: [
          {
            id: "email",
            title: "Tu propio buzón",
            body: "Los emails salen de tu cuenta de Google Workspace o Microsoft 365 a través de su API, no de un servidor compartido del que los filtros ya desconfían.",
            start: "Tu reputación de remitente",
          },
          {
            id: "clean",
            title: "SPF, DKIM y DMARC",
            body: "El equipo de hubsell configura contigo los tres registros, para que los proveedores de correo puedan confirmar que tus mensajes vienen realmente de tu dominio.",
            start: "Tu dominio",
          },
          {
            id: "profile",
            title: "Contactos verificados",
            body: "Cada dirección se comprueba el día en que se usa, dominios catch-all incluidos, así que rebotan pocos emails y los proveedores ven una lista limpia.",
            start: "Tu tasa de rebote",
          },
          {
            id: "wait",
            title: "Un límite diario",
            body: "Tu buzón envía un número limitado de emails al día, así que el volumen nunca se dispara ni llama la atención.",
            start: "Cada remitente",
          },
          {
            id: "event",
            title: "Franjas de envío",
            body: "Los emails salen dentro de las horas que definas, espaciados a lo largo del día, como envía el correo una persona.",
            start: "Tus tiempos",
          },
          {
            id: "branch",
            title: "Parada ante respuesta o rebote",
            body: "Cuando un contacto responde o un email rebota, el Flow se detiene para ese contacto, así que nadie recibe un seguimiento después de haber respondido.",
            start: "La buena disposición del comprador",
          },
          {
            id: "ban",
            title: "Sin redirecciones de seguimiento",
            body: "Los enlaces no se reescriben a través de un dominio de seguimiento, lo que hace que tus emails parezcan correo normal.",
            start: "Tu llegada a la bandeja de entrada",
          },
          {
            id: "search",
            title: "Segmentado, no masivo",
            body: "hubsell está pensado para un volumen bajo o medio: menos emails, enviados a personas que encajan con tu ICP y tienen un motivo para saber de ti. La prospección segmentada recibe respuestas, y las respuestas construyen tu reputación de remitente.",
            start: "Tu conversión",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Verifica el contacto",
            body: "El email profesional se genera y se valida el día en que contactas, dominios catch-all incluidos.",
          },
          {
            title: "Envía desde tu buzón",
            body: "El email sale de tu buzón conectado, dentro de su límite diario.",
          },
          {
            title: "Respeta la franja",
            body: "Los emails se espacian dentro de la franja de envío que definas, a través de la API de Google o Microsoft.",
          },
          {
            title: "Detente ante una respuesta",
            body: "Las respuestas y los rebotes terminan el Flow para ese contacto. Todos los demás pasan al siguiente paso.",
          },
        ],
      },
      extra: {
        title: "Buenos datos son buena entregabilidad",
        paras: [
          "La mayoría de los problemas de entregabilidad empiezan antes de enviar el primer email. Las listas antiguas están llenas de personas que han cambiado de empleo, y cada rebote les dice a los proveedores de correo que tu email no es bienvenido.",
          "hubsell obtiene los contactos cuando los necesitas y verifica cada email el mismo día, así que escribes a personas que ocupan el puesto hoy, en direcciones que existen.",
          "Los datos relevantes y recientes también consiguen respuestas, y las respuestas son la señal más fuerte para un proveedor de correo de que tu email merece estar en la bandeja de entrada.",
        ],
        links: [
          {
            label: "Más sobre los datos en tiempo real",
            href: "/platform/live-data",
          },
          {
            label: "Más sobre el enriquecimiento",
            href: "/platform/enrichment",
          },
        ],
      },
      faqs: [
        {
          question: "¿Qué es la entregabilidad del email?",
          answer: "<p>La entregabilidad del email indica si tu email llega a la bandeja de entrada del destinatario, en lugar de a la carpeta de spam o a ninguna parte. Depende de cómo envías, de la reputación de tu dominio y de la calidad de las direcciones a las que escribes.</p>",
        },
        {
          question: "¿Por qué los emails en frío acaban en spam?",
          answer: "<p>Las causas habituales son los servidores de envío compartidos, la falta de registros SPF, DKIM o DMARC, las direcciones que rebotan, los picos repentinos de volumen y los mensajes que nadie responde. hubsell se ocupa de cada una de ellas.</p>",
        },
        {
          question: "¿Cómo protege hubsell mi entregabilidad?",
          answer: "<p>Envía desde tu propio buzón a través de la API de Google o Microsoft, configura contigo SPF, DKIM y DMARC, respeta un límite diario, envía dentro de tus franjas, se detiene ante respuestas y rebotes, y verifica cada contacto el día en que se usa.</p>",
        },
        {
          question: "¿Envía hubsell desde mi propio buzón?",
          answer: "<p>Sí. Los emails salen de tus buzones de Google Workspace o Microsoft 365 a través de sus API. No hay ningún servidor SMTP externo ni redirecciones de seguimiento en el email.</p>",
        },
        {
          question: "¿Quién configura SPF, DKIM y DMARC?",
          answer: "<p>El equipo de hubsell los configura contigo durante el onboarding, para que tu dominio supere las comprobaciones que hacen los proveedores de correo antes de que salga tu primera campaña.</p>",
        },
        {
          question: "¿Hay un límite diario de envío?",
          answer: "<p>Sí. Tu buzón tiene un límite diario. hubsell está pensado para un volumen bajo o medio: un número menor de emails a contactos bien segmentados convierte mejor que un gran número a una lista amplia.</p>",
        },
        {
          question: "¿Puedo elegir cuándo se envían los emails?",
          answer: "<p>Sí. Defines franjas de envío y los emails salen dentro de ellas, espaciados a lo largo del día en lugar de todos a la vez.</p>",
        },
        {
          question: "¿Qué pasa cuando un contacto responde o un email rebota?",
          answer: "<p>El Flow se detiene para ese contacto. Nadie recibe un seguimiento después de responder, y una dirección errónea no se vuelve a intentar.</p>",
        },
        {
          question: "¿Cómo afecta la calidad de los datos a la entregabilidad?",
          answer: "<p>Cada rebote perjudica tu reputación de remitente. hubsell verifica cada email el día en que se usa, dominios catch-all incluidos, y el 95 % de los emails profesionales son correctos, así que rebotan muchos menos emails. Consulta el <a class=\"link\" href=\"/es/platform/enrichment/\">enriquecimiento</a>.</p>",
        },
        {
          question: "¿Por qué se centra hubsell en un volumen bajo o medio?",
          answer: "<p>Porque la prospección segmentada convierte. Menos emails a personas que encajan con tu ICP y tienen un motivo para saber de ti consiguen más respuestas, y las respuestas les dicen a los proveedores de correo que tu email merece estar en la bandeja de entrada. Enviar a una lista amplia consigue lo contrario.</p>",
        },
      ],
      eyebrow: "Entregabilidad del email",
      h1Pre: "Emails en frío que llegan ",
      h1Accent: "a la bandeja de entrada",
      h1Post: "",
      sub: "La entregabilidad empieza por a quién escribes. hubsell mantiene un volumen bajo o medio y segmentado, envía desde tu propio buzón con la autenticación configurada por nuestro equipo, respeta un límite diario y una franja de envío, y verifica cada contacto el día en que contactas.",
      demoCta: "Reserva una demo",
      row: {
        titlePre: "Enviado como ",
        titleAccent: "confían las bandejas de entrada",
        titlePost: "",
        points: [
          "Los emails salen de tu propio buzón de Google Workspace o Microsoft 365 a través de su API, sin servidores externos ni redirecciones de seguimiento por el camino.",
          "El equipo de hubsell configura contigo SPF, DKIM y DMARC, para que los proveedores de correo puedan comprobar que tu email viene realmente de ti.",
          "Tu buzón tiene un límite diario y una franja de envío, y el Flow se detiene para un contacto en cuanto responde o un email rebota.",
        ],
        embed: "08-deliverability",
        stepEyebrow: "Cómo funciona",
        stepTitle: "Del contacto verificado a la bandeja de entrada",
      },
      gridTitlePre: "Pensado para ",
      gridTitleAccent: "llegar a destino",
      gridTitlePost: "",
      blocks: [
        {
          title: "Verificado en origen",
          body: "Cada dirección se comprueba en el momento de uso, no sale de una lista capturada hace meses. Los dominios catch-all se marcan antes de enviar, así que gastas créditos en contactos que realmente pueden recibir correo.",
        },
        {
          title: "Enviado desde tus buzones",
          body: "La prospección pasa por las API de Google y Microsoft directamente desde tus propias cuentas. No hay ningún servidor de terceros por el camino del que los filtros puedan desconfiar, así que tus envíos parecen lo que son: correo real de una persona real.",
        },
        {
          title: "Autenticación bien hecha",
          body: "SPF, DKIM y DMARC son las comprobaciones que hacen los proveedores para decidir si el correo es realmente tuyo. hubsell te guía para configurar bien los tres, así que tu dominio las supera y tus mensajes generan confianza.",
        },
        {
          title: "A ritmo, no en ráfagas",
          body: "El volumen se mantiene bajo o medio y dentro de un límite diario. Un dominio nuevo construye su reputación paso a paso en lugar de dispararse con el primer envío.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia al llegar a la bandeja de entrada",
      quoteSlug: "staffbase",
      storySlug: "staffbase",
      storyLabel: "Lee la historia de Staffbase",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre la entregabilidad",
      faqSlugs: ["stop-sales-email-bounces", "hubsell-email-infrastructure", "hubsell-catch-all-domains"],
      closing: {
        titlePre: "Descubre ",
        titleAccent: "dónde llegan tus emails",
        titlePost: ", no solo tu tasa de apertura.",
        sub: "Trae tu configuración de envío actual a una llamada corta y te mostraremos dónde llega realmente tu correo y por qué.",
      },
      closingCta: "Reserva una demo",
    },
    {
      path: "/platform/personalisation",
      title: "Personalización por señales para email y LinkedIn | hubsell",
      metaDescription: "Prospección personalizada a partir de señales de compra. La IA de hubsell redacta cada mensaje con la señal del contacto y la web de su empresa, en Flows pensados para cada señal.",
      heroSlice: "personalization",
      signalsAccordion: true,
      compare: {
        eyebrow: "Personalización del email en frío",
        titlePre: "Combinación de correspondencia o ",
        titleAccent: "mensajes basados en señales",
        titlePost: "",
        colA: "Combinación de correspondencia",
        colB: "hubsell",
        rows: [
          ["Punto de partida", "Una lista y una plantilla", "La señal que puso al contacto en tu lista"],
          [
            "Qué se personaliza",
            "El nombre y el nombre de la empresa",
            "El mensaje, construido a partir de la señal y de la empresa",
          ],
          ["Investigación", "Hecha a mano, o ninguna", "La web de la empresa, leída para cada contacto"],
          ["Redacción", "Una plantilla para todos", "Un borrador con IA para cada contacto"],
          [
            "Flows",
            "Una campaña para todos los leads",
            "Un Flow para cada señal, con su propio mensaje y su propio ritmo",
          ],
          ["Datos de base", "Registros antiguos y cargos equivocados", "Verificados el día en que contactas"],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Personalización basada en señales",
          pre: "Un motivo para escribir ",
          accent: "a cada contacto",
          post: "",
        },
        explained: {
          eyebrow: "Señales de personalización",
          pre: "Las señales con las que ",
          accent: "empiezan tus mensajes",
          post: "",
        },
        steps: {
          eyebrow: "Cómo funciona",
          pre: "De la señal de compra ",
          accent: "a un mensaje personal",
          post: "",
        },
        extra: {
          eyebrow: "Personalización con IA",
          pre: "IA que escribe ",
          accent: "a partir de hechos, no de suposiciones",
          post: "",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "una prospección personal",
          post: "",
        },
        closing: {
          eyebrow: "Prospección personalizada",
          pre: "Descubre lo que ",
          accent: "podría decir tu prospección",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre personalización",
          pre: "Preguntas sobre ",
          accent: "la prospección personalizada",
          post: "",
        },
      },
      signals: {
        sub: "Cada señal puede convertirse en su propio Flow, y cada mensaje empieza con ella.",
        startLabel: "Empieza con",
        items: [
          {
            id: "post",
            title: "Interacción con publicaciones",
            body: "Personas que han dado me gusta, comentado o compartido una publicación de LinkedIn, tuya o de un competidor.",
            start: "La publicación y su tema",
          },
          {
            id: "event",
            title: "Participantes en eventos",
            body: "Personas que se han inscrito en un evento de LinkedIn de tu mercado.",
            start: "El evento al que van a asistir",
          },
          {
            id: "jobs",
            title: "Cambios de empleo",
            body: "Personas que han empezado hace poco en un puesto nuevo, cuando se fijan las prioridades y los presupuestos.",
            start: "Su nuevo puesto",
          },
          {
            id: "hiring",
            title: "Señales de contratación",
            body: "Empresas que contratan para puestos a los que da soporte tu producto.",
            start: "Los puestos para los que contratan",
          },
          {
            id: "followers",
            title: "Seguidores de la competencia",
            body: "Personas que siguen la página de empresa de un competidor.",
            start: "El problema que resuelve el competidor",
          },
          {
            id: "company",
            title: "Web de la empresa",
            body: "Lo que la empresa dice de sí misma: qué vende, a quién y en qué se centra.",
            start: "Una frase sobre su negocio",
          },
        ],
      },
      howSteps: {
        items: [
          {
            title: "Elige la señal",
            body: "Empieza un Flow a partir de una señal, como una publicación, un evento, una búsqueda de contratación o los seguidores de un competidor.",
          },
          {
            title: "Cualifica y enriquece",
            body: "Cada persona se contrasta con tu ICP y recibe un email verificado antes de que se escriba nada.",
          },
          {
            title: "Lee la empresa",
            body: "hubsell lee la web de la empresa para saber a qué se dedica y a quién vende.",
          },
          {
            title: "Redacta con IA",
            body: "La IA escribe un mensaje para cada contacto a partir de la señal y de los datos de la empresa.",
          },
          {
            title: "Ejecuta el Flow",
            body: "El mensaje sale como un paso del Flow, y los pasos siguientes dependen de lo que haga el contacto.",
          },
        ],
      },
      extra: {
        title: "IA que escribe a partir de hechos, no de suposiciones",
        paras: [
          "Los textos genéricos escritos con IA se reconocen enseguida. Elogian a la empresa, adivinan sus retos y parecen escritos para cualquiera. Los compradores los reconocen y los ignoran.",
          "hubsell le da a la IA hechos con los que trabajar: la señal, el puesto actual de la persona y lo que dice la web de la empresa. El borrador menciona cosas que son ciertas, así que se lee como una nota de alguien que se ha informado.",
          "Como cada contacto se verifica el mismo día, los detalles del mensaje están actualizados. Nadie recibe una felicitación por un puesto que dejó hace un año.",
        ],
        links: [
          {
            label: "Más sobre los datos en tiempo real",
            href: "/platform/live-data",
          },
          {
            label: "Más sobre la prospección multicanal",
            href: "/platform/multichannel-outreach",
          },
        ],
      },
      faqs: [
        {
          question: "¿Qué es la personalización basada en señales?",
          answer: "<p>La personalización basada en señales empieza cada mensaje con el motivo por el que escribes: algo que la persona o su empresa ha hecho hace poco, como interactuar con una publicación, cambiar de empleo o contratar. Sustituye la combinación de correspondencia con el nombre por un motivo real para hablar.</p>",
        },
        {
          question: "¿Cómo personaliza hubsell los emails en frío?",
          answer: "<p>hubsell parte de la señal que puso a un contacto en tu lista, lee la web de la empresa y hace que la IA redacte un mensaje para cada contacto a partir de esos hechos. Cada señal puede tener su propio Flow, así que el mensaje y el ritmo encajan con el motivo del contacto.</p>",
        },
        {
          question: "¿Qué señales puede usar hubsell para personalizar?",
          answer: "<p>Interacción con publicaciones de LinkedIn, participantes en eventos, cambios de empleo, empresas que están contratando y seguidores de un competidor, además de lo que dice la web de la empresa. Consulta los <a class=\"link\" href=\"/es/platform/live-data/\">datos en tiempo real</a> para ver cómo se obtienen estos contactos.</p>",
        },
        {
          question: "¿Usa hubsell la IA para redactar mensajes?",
          answer: "<p>Sí. La IA redacta un mensaje para cada contacto a partir de la señal y de la web de la empresa. Trabaja con hechos sobre la persona y la empresa, no con suposiciones.</p>",
        },
        {
          question: "¿Qué son los Flows centrados en señales?",
          answer: "<p>En lugar de una campaña para todos los leads, cada señal tiene su propio Flow. Las personas que interactuaron con una publicación reciben un mensaje, un ritmo y unos canales distintos de los de las personas cuya empresa está contratando.</p>",
        },
        {
          question: "¿En qué se diferencia de la combinación de correspondencia?",
          answer: "<p>La combinación de correspondencia inserta un nombre y el nombre de una empresa en una plantilla. La personalización basada en señales cambia lo que dice el mensaje, según el motivo por el que escribes a esa persona.</p>",
        },
        {
          question: "¿Por qué no funciona la personalización genérica con IA?",
          answer: "<p>Los compradores reconocen los textos de IA escritos de la nada: halagadores, vagos y centrados en el remitente. Un texto que menciona una señal real y el negocio real de la empresa se lee como escrito por alguien que se ha informado.</p>",
        },
        {
          question: "¿Ayuda la personalización a la entregabilidad del email?",
          answer: "<p>Sí. Los emails relevantes reciben más respuestas, y las respuestas les dicen a los proveedores de correo que tu email es bienvenido. Consulta la <a class=\"link\" href=\"/es/platform/deliverability/\">entregabilidad del email</a>.</p>",
        },
        {
          question: "¿Puedo personalizar la prospección a gran escala?",
          answer: "<p>Sí. La señal, los datos de la empresa y el borrador se reúnen para cada contacto, así que el mismo Flow funciona para diez contactos o para miles sin escribir cada mensaje desde cero.</p>",
        },
        {
          question: "¿Cumple el RGPD la prospección basada en señales?",
          answer: "<p>hubsell trata los datos para una finalidad que defines antes de la obtención y no los guarda para revenderlos. Tú sigues siendo el responsable del tratamiento y hubsell es tu encargado, con un contrato de encargo del tratamiento. Consulta los <a class=\"link\" href=\"/es/platform/live-data/\">datos B2B conformes al RGPD</a>.</p>",
        },
      ],
      eyebrow: "Personalización basada en señales",
      h1Pre: "Personalizado con ",
      h1Accent: "señales de compra",
      h1Post: "",
      sub: "La personalización empieza con una señal. hubsell añade contexto a partir del puesto de la persona y de la web de su empresa, la IA redacta el mensaje con ambos y tú contactas con un motivo que le importa a quien lo lee. Eso es lo que consigue respuestas.",
      demoCta: "Reserva una demo",
      row: {
        titlePre: "Escrito para la ",
        titleAccent: "persona y el momento",
        titlePost: "",
        points: [
          "Cada mensaje parte de un motivo real para escribir: la publicación con la que interactuó, el puesto que empezó, el evento en el que se inscribió o el perfil que su empresa está contratando.",
          "La IA redacta cada mensaje a partir de esa señal y de lo que dice la web de la empresa sobre su negocio.",
          "Cada señal tiene su propio Flow, así que el mensaje, el ritmo y los canales encajan con el motivo por el que contactas.",
        ],
        embed: "09-personalization",
        stepEyebrow: "Cómo funciona",
        stepTitle: "De la señal en tiempo real a un mensaje que encaja",
      },
      gridTitlePre: "Relevancia que ",
      gridTitleAccent: "crece contigo",
      gridTitlePost: "",
      blocks: [
        {
          title: "Más allá del nombre",
          body: "La personalización real usa lo que es cierto sobre la cuenta: el puesto, la empresa, el momento. hubsell parte de datos verificados y señales en tiempo real, así que cada mensaje menciona algo que de verdad le importa a quien lo lee.",
        },
        {
          title: "Basada en señales en tiempo real",
          body: "Un cambio de empleo, una ronda de financiación, una ola de contrataciones o el interés por un tema le dan a la prospección un gancho auténtico. hubsell lee estas señales y las aprovecha, así que el mensaje llega con un motivo.",
        },
        {
          title: "Constante a gran volumen",
          body: "Personalizar a mano no escala, y los campos de la combinación de correspondencia suenan vacíos. hubsell mantiene cada mensaje relevante tanto si envías diez como diez mil, así que alcance y relevancia dejan de estar reñidos.",
        },
        {
          title: "Datos correctos de base",
          body: "La personalización solo es tan buena como los datos que hay detrás. Como cada contacto se verifica en origen, los detalles que mencionas son correctos, así que una frase personalizada nunca acaba siendo un error con la empresa equivocada.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia con una relevancia real",
      quoteSlug: "elium",
      storySlug: "elium",
      storyLabel: "Lee la historia de Elium",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre la personalización",
      faqSlugs: ["personalize-outreach-at-scale", "hubsell-conversion-rates"],
      closing: {
        titlePre: "Descubre una prospección que ",
        titleAccent: "se lee como personal",
        titlePost: ", a gran escala.",
        sub: "Enséñanos tu público en una llamada corta y redactaremos cómo sería para él una prospección personalizada a gran escala.",
      },
      closingCta: "Reserva una demo",
    },
    {
      path: "/platform/enrichment",
      title: "Enriquecimiento de contactos: emails y teléfonos | hubsell",
      metaDescription: "hubsell enriquece contactos en tiempo real: emails profesionales con un 95 % de precisión, catch-all incluido, y teléfonos de socios de calidad. Solo pagas cada paso que funciona.",
      heroSlice: "enrichment",
      compare: {
        eyebrow: "Enriquecimiento de datos B2B",
        titlePre: "Enriquecimiento con base de datos frente a ",
        titleAccent: "enriquecimiento en tiempo real",
        titlePost: "",
        colA: "Enriquecimiento con base de datos",
        colB: "Enriquecimiento en tiempo real de hubsell",
        rows: [
          [
            "De dónde vienen los datos",
            "La base de datos de un proveedor, rellenada una vez y revendida",
            "Obtenidos y orquestados por hubsell el día en que enriqueces; solo los teléfonos vienen de socios",
          ],
          [
            "Precisión del email",
            "Desconocida hasta que llegan los rebotes",
            "95 %, dominios catch-all incluidos",
          ],
          [
            "Nombres, cargos, empresas",
            "Tan actuales como la última vez que se actualizó el registro",
            "99 % de precisión, asociados al perfil actual",
          ],
          [
            "Dominios catch-all",
            "A menudo marcados como desconocidos y descartados",
            "Validados como cualquier otra dirección",
          ],
          [
            "Qué pagas",
            "Un registro, esté completo o no",
            "Cada paso que funciona, en créditos",
          ],
        ],
      },
      heads: {
        signals: {
          eyebrow: "Buscador de emails y teléfonos",
          pre: "Un registro, ",
          accent: "orquestado por hubsell",
          post: "",
        },
        explained: {
          eyebrow: "Enriquecimiento de datos",
          pre: "Enriquecimiento de datos de contacto, ",
          accent: "campo a campo",
          post: "",
        },
        steps: {
          eyebrow: "Cómo funciona el enriquecimiento",
          pre: "Cómo se enriquece una lista, ",
          accent: "paso a paso",
          post: "",
        },
        extra: {
          eyebrow: "Verificación de emails",
          pre: "",
          accent: "Verificación de emails en dominios catch-all",
          post: ", integrada",
        },
        proof: {
          eyebrow: "Resultados de clientes",
          pre: "Lo que cambia con ",
          accent: "datos de contacto completos",
          post: "",
        },
        closing: {
          eyebrow: "Buscador de emails B2B",
          pre: "Enriquece tu lista con ",
          accent: "datos de contacto verificados",
          post: ".",
        },
        faq: {
          eyebrow: "Preguntas frecuentes sobre enriquecimiento",
          pre: "Preguntas sobre ",
          accent: "el enriquecimiento de datos de contacto",
          post: "",
        },
      },
      signals: {
        sub: "hubsell obtiene o genera cada campo el día en que enriqueces, y lo comprueba antes de que llegue a tu prospección o a tu CRM.",
        startLabel: "Precisión",
        items: [
          {
            id: "email",
            title: "Direcciones de email profesionales",
            body: "hubsell genera y valida la dirección de email profesional de cada contacto con sus propios métodos, en el momento de uso. Las direcciones en dominios catch-all también se validan, así que no hay que descartarlas.",
            start: "95 %, dominios catch-all incluidos",
          },
          {
            id: "phone",
            title: "Teléfonos directos y móviles",
            body: "Los teléfonos directos y los números de móvil proceden de socios elegidos por su precisión y calidad, no por su precio. El enriquecimiento de teléfonos es opcional, así que solo lo añades para los contactos a los que piensas llamar.",
            start: "De bases de datos de socios elegidos por su calidad",
          },
          {
            id: "profile",
            title: "URL de perfiles de LinkedIn",
            body: "En una lista importada, hubsell asocia cada contacto a su perfil de LinkedIn a partir de su nombre completo, el nombre de la empresa y el cargo. El perfil es lo que permite que un contacto entre en los pasos de LinkedIn de un Flow.",
            start: "99 %",
          },
          {
            id: "clean",
            title: "Nombres, cargos y empresas, depurados",
            body: "Las listas importadas arrastran cargos antiguos, erratas y nombres de empresa incoherentes. hubsell depura y normaliza cada registro con IA y corrige lo que ha cambiado desde que se creó la lista.",
            start: "99 %",
          },
        ],
      },
      howSteps: {
        note: "Cada paso se cobra en créditos, y solo cuando funciona: un paso que falla no cuesta nada, mientras que los pasos ya completados sí se cobran.",
        items: [
          {
            title: "Obtén los datos",
            body: "Los datos de cada contacto se recopilan en tiempo real de LinkedIn y de webs de empresas.",
          },
          {
            title: "Depura y normaliza con IA",
            body: "Los nombres, cargos y empresas se depuran y se pasan a un formato uniforme.",
          },
          {
            title: "Completa los datos que faltan",
            body: "Se rellenan los huecos del registro, como un cargo o un dato de la empresa que falta.",
          },
          {
            title: "Genera y valida el email",
            body: "Los emails profesionales se generan y validan con los métodos propios de hubsell, catch-all incluido.",
          },
          {
            title: "Obtén el número de teléfono",
            body: "Opcional: un teléfono directo o un móvil de un socio de calidad.",
          },
          {
            title: "Control de calidad",
            body: "Cada registro se comprueba antes de entregarlo para su uso.",
          },
        ],
      },
      extra: {
        title: "Verificación de emails en dominios catch-all",
        paras: [
          "Un dominio catch-all acepta correo para cualquier dirección, así que una comprobación estándar no puede distinguir un buzón real de uno equivocado. Las listas suelen marcar estos contactos como desconocidos, lo que te obliga a descartarlos o a arriesgarte a los rebotes.",
          "hubsell verifica las direcciones en dominios catch-all en cada enriquecimiento, en el momento en que usas los datos. Por eso el 95 % de los emails que entrega son correctos, dominios catch-all incluidos, y por eso tu tasa de rebote se mantiene baja.",
        ],
        links: [
          {
            label: "Cómo protege hubsell la entregabilidad",
            href: "/platform/deliverability",
          },
          {
            label: "Alternativa a Lusha: comparativa",
            href: "/vs/lusha",
          },
          {
            label: "Alternativa a Seamless: comparativa",
            href: "/vs/seamless",
          },
          {
            label: "Alternativa a Apollo: comparativa",
            href: "/vs/apollo",
          },
        ],
      },
      faqs: [
        {
          question: "¿Qué es el enriquecimiento de datos de contacto?",
          answer: "<p>El enriquecimiento de datos de contacto añade a un registro los datos que le faltan: un email profesional, un número de teléfono, un perfil de LinkedIn y el cargo y la empresa actuales. hubsell enriquece cada contacto en tiempo real, el día en que lo pides, y verifica el resultado antes de que llegue a tu prospección o a tu CRM.</p>",
        },
        {
          question: "¿Qué necesito para enriquecer una lista con hubsell?",
          answer: "<p>El nombre completo, el nombre de la empresa y el cargo de cada contacto. A partir de ahí, hubsell obtiene los datos de la persona en tiempo real, los depura y normaliza con IA, rellena los huecos, genera y valida el email profesional y, si lo quieres, añade un número de teléfono. Cada registro pasa un control de calidad antes de que lo uses.</p>",
        },
        {
          question: "¿Qué precisión tiene el enriquecimiento de hubsell?",
          answer: "<p>El 95 % de las direcciones de email profesionales son correctas, dominios catch-all incluidos. Los nombres, cargos, empresas y perfiles de LinkedIn tienen un 99 % de precisión. Los números de teléfono proceden de bases de datos de socios, así que hubsell no da una cifra de precisión única para ellos, pero esos socios se eligen por su precisión y calidad, no por su precio.</p>",
        },
        {
          question: "¿Puede hubsell verificar direcciones de email en dominios catch-all?",
          answer: "<p>Sí. Un dominio catch-all acepta correo para cualquier dirección, así que una comprobación estándar no puede distinguir un buzón real de uno equivocado. hubsell también verifica las direcciones en dominios catch-all, y forman parte de la cifra del 95 % de precisión.</p>",
        },
        {
          question: "¿Encuentra hubsell números de móvil y teléfonos directos?",
          answer: "<p>Sí, ambos. Los números de teléfono proceden de socios elegidos por su precisión y calidad, no por su precio. El enriquecimiento de teléfonos es opcional, así que solo lo añades para los contactos a los que piensas llamar.</p>",
        },
        {
          question: "¿Cómo cobra hubsell el enriquecimiento?",
          answer: "<p>El enriquecimiento se cobra en créditos por cada paso que funciona. Obtener un contacto cuesta 1 crédito, un email profesional validado 5 (dominios catch-all incluidos) y un número de teléfono 5. Si un paso falla, ese paso no cuesta nada; los pasos ya completados sí se cobran. <a class=\"link\" href=\"/es/pricing/\">Consulta los precios</a>.</p>",
        },
        {
          question: "¿De dónde proceden los datos de enriquecimiento de hubsell?",
          answer: "<p>hubsell obtiene y orquesta los datos por sí mismo, en tiempo real, de LinkedIn y de webs de empresas, y genera y valida las direcciones de email profesionales con sus propios métodos. No pasa tus contactos por bases de datos de otros proveedores. Solo los números de teléfono vienen de socios, elegidos por su precisión y calidad.</p>",
        },
        {
          question: "¿En qué se diferencia el enriquecimiento en tiempo real del enriquecimiento con una base de datos B2B?",
          answer: "<p>Una base de datos enriquece tu lista con registros que recopiló antes, así que los datos pueden tener meses o años. hubsell busca cada contacto el día en que enriqueces, así que el cargo, la empresa y el email están actualizados cuando los usas.</p>",
        },
        {
          question: "¿Pueden los contactos enriquecidos pasar directamente a la prospección y a mi CRM?",
          answer: "<p>Sí. Los contactos enriquecidos pasan directamente a tus Flows de LinkedIn, email y llamadas en hubsell y se sincronizan con Salesforce, HubSpot o Pipedrive, sin exportaciones ni pasos de limpieza. Consulta la <a class=\"link\" href=\"/es/platform/multichannel-outreach/\">prospección multicanal</a> y la <a class=\"link\" href=\"/es/platform/crm-sync/\">sincronización con el CRM</a>.</p>",
        },
        {
          question: "¿Cumplen el RGPD los datos enriquecidos?",
          answer: "<p>Sí. hubsell enriquece los datos ad hoc para cada cliente y no los guarda para revenderlos. Tú sigues siendo el responsable del tratamiento y hubsell es el encargado, con un contrato de encargo del tratamiento. Más sobre los <a class=\"link\" href=\"/es/platform/live-data/#pf-extra\">datos B2B conformes al RGPD</a>.</p>",
        },
      ],
      eyebrow: "Enriquecimiento de datos de contacto",
      h1Pre: "Enriquecimiento de datos de contacto, ",
      h1Accent: "verificado hoy",
      h1Post: "",
      sub: "Un registro de contacto a medio rellenar frena la prospección. A partir del nombre completo, la empresa y el cargo, hubsell obtiene los datos de la persona en tiempo real, los depura con IA, rellena los huecos y añade un email profesional validado y, si lo quieres, un número de teléfono.",
      demoCta: "Reserva una demo",
      row: {
        titlePre: "Un registro, ",
        titleAccent: "orquestado por hubsell",
        titlePost: "",
        points: [
          "hubsell obtiene y orquesta cada campo por sí mismo: perfil, cargo y empresa de LinkedIn y de webs de empresas, y emails profesionales generados y validados con sus propios métodos.",
          "Solo los números de teléfono vienen de socios, elegidos por su precisión y calidad, no por su precio.",
          "Cada registro pasa un control de calidad antes de entregarse, así que es correcto el día en que lo usas.",
        ],
        embed: "10-enrichment",
        stepEyebrow: "Cómo funciona",
        stepTitle: "De una fila incompleta a un registro completo y verificado",
      },
      gridTitlePre: "Registros ",
      gridTitleAccent: "completos y actualizados",
      gridTitlePost: "",
      blocks: [
        {
          title: "Varias fuentes, un registro",
          body: "hubsell recurre a varias fuentes en tiempo real una tras otra, así que donde una se queda corta, otra rellena el hueco. El resultado es un contacto completo y no una fila a la que le faltan los campos importantes.",
        },
        {
          title: "Verificados en el momento de uso",
          body: "Enriquecer sin verificar solo rellena campos con suposiciones obsoletas. hubsell comprueba el registro terminado en el momento en que lo usas, dominios catch-all incluidos, así que un registro completo también es un registro correcto.",
        },
        {
          title: "Sin una base de datos que se deteriora",
          body: "Una lista enriquecida estática empieza a quedarse obsoleta el día en que se crea. hubsell enriquece en tiempo real, el día en que lo pides, así que no pagas por actualizar registros capturados hace años que han cambiado desde entonces.",
        },
        {
          title: "Listos para la prospección",
          body: "Un registro completo y verificado pasa directamente a tus Flows y a tu CRM. Sin exportaciones, sin pasos de limpieza, sin una segunda herramienta, así que los datos que enriqueces son los datos a los que envías.",
        },
      ],
      proofEyebrow: "Pruebas",
      proofTitle: "Lo que cambia con datos completos",
      quoteSlug: "verhaert",
      storySlug: "verhaert",
      storyLabel: "Lee la historia de Verhaert",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre el enriquecimiento",
      faqSlugs: ["build-b2b-audience-no-decay", "third-party-intent-data-accuracy"],
      closing: {
        titlePre: "Mira tu lista ",
        titleAccent: "completa y verificada",
        titlePost: ".",
        sub: "Envíanos una muestra de tus datos en una llamada corta y te mostraremos lo que devuelve para ella el enriquecimiento en tiempo real.",
      },
      closingCta: "Reserva una demo",
    },
  ],
};
