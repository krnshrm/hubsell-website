---
term: "SPF"
category: "Entregabilidad"
definition: "SPF (Sender Policy Framework) es un registro de autenticación de email que indica qué servidores pueden enviar correo en nombre de tu dominio."
related:
  - dkim
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "julio de 2026"
---

## Por qué importa

SPF es una de las comprobaciones que hacen los proveedores de correo para decidir si un mensaje viene de verdad de tu dominio. Sin él, es más probable que tus emails se traten como sospechosos o suplantados, lo que perjudica la entregabilidad. Es un requisito básico para cualquier equipo que haga outbound con volumen, y si falta, limita lo que puede conseguir el resto de tu configuración.

## Cómo funciona en la práctica

SPF es un registro DNS que nombra los servidores y servicios autorizados a enviar en nombre de tu dominio. Cuando un servidor recibe un mensaje, comprueba si el servidor de envío aparece en esa lista. Si la comprobación se supera, ayuda a la entrega; si falla, es una señal de que el email podría ser falso. SPF funciona junto con DKIM y DMARC, no por sí solo.

## Errores comunes

Un error común es incluir demasiados remitentes o dejar servicios antiguos en el registro, lo que debilita la comprobación o supera el límite de consultas. Otro es suponer que basta con SPF, cuando los proveedores esperan cada vez más también DKIM y DMARC. Un tercero es olvidarse de actualizar SPF al añadir una nueva herramienta de envío.

## Cómo lo aborda hubsell

hubsell envía a través de una infraestructura autenticada y te guía para configurar correctamente SPF, DKIM y DMARC, para que tu prospección supere las comprobaciones que protegen la bandeja de entrada.
