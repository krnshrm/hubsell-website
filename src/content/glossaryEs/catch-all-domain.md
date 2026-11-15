---
term: "Dominio catch-all"
category: "Datos y enriquecimiento"
definition: "Un dominio catch-all es un dominio de email configurado para aceptar correo dirigido a cualquier dirección, lo que dificulta saber si un buzón concreto existe de verdad."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "julio de 2026"
---

## Por qué importa

Los dominios catch-all impiden la verificación de email normal. Una comprobación estándar pregunta al servidor de correo si una dirección existe, pero un servidor catch-all responde que sí a todo, así que la comprobación no puede confirmar que el buzón sea real. Si envías igualmente, el mensaje puede rebotar más tarde o no llegar a ninguna parte, lo que sube poco a poco tu tasa de rebote y perjudica la entregabilidad.

## Cómo funciona en la práctica

En un dominio normal, el servidor receptor rechaza el correo dirigido a una dirección que no existe, lo que permite a un verificador confirmar el buzón. Un dominio catch-all está configurado para aceptar todo el correo y clasificarlo o descartarlo después, así que el servidor acepta cualquier dirección en el momento de la comprobación. Los verificadores solo pueden marcar estas direcciones como arriesgadas, no como válidas, por lo que requieren un tratamiento aparte.

## Errores comunes

El error es tratar las direcciones catch-all como verificadas y enviarles grandes volúmenes. Superan una comprobación ingenua, pero una parte de ellas no son buzones reales, así que rebotan o desaparecen. Ignorar la marca catch-all es una de las formas más rápidas de disparar la tasa de rebote en una lista que, por lo demás, está limpia.

## Cómo lo aborda hubsell

hubsell marca los dominios catch-all durante su verificación en el momento de uso, para que estas direcciones arriesgadas se identifiquen antes de gastar un crédito, y no después de un rebote.
