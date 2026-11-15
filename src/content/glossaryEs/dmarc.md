---
term: "DMARC"
category: "Entregabilidad"
definition: "DMARC es una política de autenticación de email que indica a los servidores receptores qué hacer cuando un mensaje no supera SPF ni DKIM, y que informa sobre quién envía en nombre de tu dominio."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "julio de 2026"
---

## Por qué importa

DMARC une SPF y DKIM y te da control y visibilidad. Indica a los proveedores si deben aceptar, poner en cuarentena o rechazar el correo que no supera las comprobaciones, lo que protege tu dominio contra la suplantación y protege a los destinatarios contra el fraude enviado en tu nombre. Además, se ha vuelto casi obligatorio: los grandes proveedores esperan ya una política DMARC de quienes envían en volumen.

## Cómo funciona en la práctica

DMARC es un registro DNS que fija una política (none, quarantine o reject) y una dirección para los informes. Cuando un mensaje no supera la alineación ni de SPF ni de DKIM, el servidor receptor aplica tu política. Los informes muestran qué servidores envían en nombre de tu dominio, para que puedas detectar abusos y confirmar que tus propias herramientas están alineadas antes de endurecer la política.

## Errores comunes

Un error frecuente es pasar directamente a una política reject sin confirmar que todos tus remitentes legítimos superan las comprobaciones, lo que bloquea tu propio correo. El error contrario es dejar la política en none para siempre, de modo que nunca llega a proteger nada. Un tercero es no leer nunca los informes, que son precisamente la razón de esa visibilidad.

## Cómo lo aborda hubsell

hubsell te ayuda a alinear tus envíos con DMARC y a pasar con seguridad de la supervisión a la aplicación de la política, para que tu dominio esté protegido sin bloquear tu propia prospección.
