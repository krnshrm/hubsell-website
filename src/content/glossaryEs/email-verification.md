---
term: "Verificación de email"
category: "Datos y enriquecimiento"
definition: "La verificación de email (email verification) es el proceso de comprobar que una dirección de email es válida y puede recibir correo antes de enviarle nada."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "julio de 2026"
---

## Por qué importa

Enviar a direcciones no válidas provoca rebotes, y una tasa de rebote alta daña tu reputación como remitente, lo que a su vez perjudica la entrega también a las direcciones buenas. La verificación protege esa reputación al filtrar primero las direcciones erróneas. Es una de las formas más baratas de mantener sano un programa de outbound, y su coste es muy inferior al daño que causa un pico de rebotes.

## Cómo funciona en la práctica

La verificación comprueba una dirección por fases: que el formato sea válido, que el dominio exista y acepte correo y que el buzón concreto responda. Los dominios catch-all, que aceptan correo para cualquier dirección, se marcan como arriesgados porque no se puede confirmar el buzón. La verificación se ejecuta en bloque sobre una lista o en tiempo real a medida que se añade cada dirección.

## Errores comunes

Un error habitual es verificar una vez al importar y no volver a hacerlo, porque las direcciones dejan de ser válidas con el tiempo. Otro es enviar a direcciones catch-all como si estuvieran confirmadas. Un tercero es no verificar las listas pequeñas, en las que unos pocos rebotes ya empujan la reputación en la dirección equivocada.

## Cómo lo aborda hubsell

hubsell verifica cada contacto en el momento de uso, con comprobación catch-all incluida, para que solo gastes un crédito en una dirección que de verdad puede recibir correo hoy.
