// FAQs that are not on the homepage, by slug: Spanish (Spain), "tú". Same shape as the English
// source, which stays the reference. Product terms: docs/20261113-1401-APP-TERMS.md.
export const faqsEsExtra: Record<string, { question: string; answer: string }> = {
  "orchestrate-multiple-profiles": {
    question: "¿Puede hubsell coordinar la prospección desde varios perfiles directivos a la vez?",
    answer: "<p>Con hubsell gestionas la prospección de tu CEO, tu director de ventas y tus expertos en la materia desde un único centro de control, para que la conversación sea coordinada y de igual a igual en toda la cuenta objetivo.</p>",
  },
  "hubsell-email-infrastructure": {
    question: "¿hubsell envía los emails desde servidores externos o desde nuestros propios buzones?",
    answer: "<p>La infraestructura de hubsell no aparece en absoluto en el email enviado. No usamos servidores SMTP externos ni enlaces de redirección para el seguimiento, que activan los filtros de spam. Los emails se envían mediante una integración directa por API (Google/Microsoft), lo que da tasas de apertura mucho más altas.</p>",
  },
  "personalize-outreach-at-scale": {
    question: "¿Cómo personalizamos la prospección en frío a gran escala sin sonar como un robot de IA?",
    answer: "<p>Los compradores detectan al instante los halagos escritos por una IA, y eso te cuesta respuestas. Un mensaje sencillo y directo, enviado a una lista muy relevante (por ejemplo, los asistentes a un webinar concreto o las personas que interactúan con una publicación concreta), funciona siempre mejor que un texto personalizado por una máquina y enviado a un perfil genérico. hubsell aporta la relevancia desde los datos: contactos obtenidos en tiempo real que encajan con tu ICP, para que el mensaje pueda ser breve y honesto.</p>",
  },
  "stop-sales-email-bounces": {
    question: "¿Cómo evitamos que nuestros emails comerciales reboten por datos erróneos en el CRM?",
    answer: "<p>Un responsable de decisiones B2B permanece de media unos 2,5 años en su puesto, así que los CRM estáticos y las listas compradas pierden entre un 25 y un 30 % de validez cada año. hubsell lo resuelve con la obtención en el día cero, nuestro método de datos en tiempo real: obtenemos y verificamos los datos de contacto en el momento exacto de tu solicitud, lo que mantiene una alta precisión y protege tu reputación como remitente.</p>",
  },
  "hubsell-high-volume-sales": {
    question: "¿Es hubsell adecuado para ventas transaccionales de gran volumen y bajo valor por contrato?",
    answer: "<p>Sí. Aunque hubsell puede usarse para prospección de gran volumen, te recomendamos usarlo para una prospección muy segmentada.</p>",
  },
  "mass-email-brand-reputation": {
    question: "¿Está dañando el envío masivo de emails en frío la reputación de nuestra marca y la entregabilidad?",
    answer: "<p>Con las nuevas reglas de Google y Yahoo, enviar en masa a ciegas arruina rápidamente la reputación de remitente de tu dominio. hubsell la protege con una segmentación precisa, envío nativo por API a través de Google y Microsoft, y repartiendo la prospección de forma segura entre 5 y 10 perfiles remitentes internos. Menos volumen por remitente, mejor entregabilidad y ningún dominio quemado.</p>",
  },
  "third-party-intent-data-accuracy": {
    question: "¿Son realmente precisos los datos de intención B2B de terceros?",
    answer: "<p>La mayoría de los datos de intención se basan en algoritmos probabilísticos (adivinan quién está comprando a partir de tráfico web anónimo). Como el 95 % de los compradores B2B no está en fase de compra en un momento dado, aplicar un algoritmo genérico a un mercado que no compra hace que tu equipo de ventas persiga fantasmas.</p>",
  },
  "sdr-vs-executive-linkedin-outreach": {
    question: "¿Deben hacer la prospección en LinkedIn nuestros SDR o nuestros directivos?",
    answer: "<p>Quién envía el mensaje cambia el resultado. Cuando un SDR envía una solicitud de conexión, la tasa de aceptación suele quedarse por debajo del 20 %, porque el comprador espera un discurso de venta. Cuando un fundador, un directivo o un experto en la materia envía exactamente la misma solicitud, la tasa de aceptación supera el 50 %. hubsell está pensado para prospectar desde los perfiles que los compradores realmente aceptan.</p>",
  },
  "cold-email-reply-rates-dropping": {
    question: "¿Por qué han caído tanto de repente nuestras tasas de respuesta a los emails en frío?",
    answer: "<p>La prospección tradicional de envío masivo a ciegas está fallando por dos motivos estructurales. Primero, los nuevos y estrictos umbrales de spam de Google y Yahoo (un 0,3 % de quejas) hacen que los envíos masivos dañen activamente la reputación de tu dominio. Segundo, los compradores reconocen al instante la personalización automática con IA. Parece personal, pero suena vacía, y activa un cortafuegos mental.</p>",
  },
  "sdr-first-meetings-week-one": {
    question: "¿Puede un SDR nuevo conseguir reuniones de verdad en su primera semana?",
    answer: "<p>Sí, si se cumplen tres condiciones: la oferta encaja con el mercado al que te diriges, la segmentación es correcta (los cargos adecuados en las organizaciones adecuadas) y la ejecución no se atasca (segmentación acordada y textos aprobados en los primeros días). hubsell elimina los obstáculos habituales del arranque, como crear listas, configurar herramientas y limpiar datos, para que la primera semana se dedique a prospectar y no a tareas administrativas.</p>",
  },
  "hubsell-setup-before-first-sdr": {
    question: "Vamos a contratar a nuestro primer SDR. ¿Cuándo deberíamos configurar hubsell?",
    answer: "<p>Antes del primer día, para que la primera semana se dedique a vender y no a configurar herramientas. La segmentación y el primer Flow pueden estar listos cuando llegue el SDR y, como los contactos se obtienen en tiempo real, nada se queda desactualizado mientras contratas.</p>",
  },
};
