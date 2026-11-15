---
term: "DKIM"
category: "Entregabilidad"
definition: "DKIM, o DomainKeys Identified Mail, es un método de autenticación de email que añade una firma criptográfica que demuestra que un mensaje no se ha modificado durante el envío."
related:
  - spf
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "julio de 2026"
---

## Por qué importa

DKIM permite que un servidor receptor confirme que un mensaje procede realmente de tu dominio y que nadie lo ha manipulado por el camino. Esa prueba aumenta la confianza y favorece la llegada a la bandeja de entrada. Junto con SPF y DMARC, forma parte de lo mínimo que los proveedores de correo esperan hoy de cualquier remitente legítimo, y prescindir de él perjudica la entregabilidad.

## Cómo funciona en la práctica

DKIM añade una firma a cada mensaje, creada con una clave privada que guarda el remitente. La clave pública correspondiente está en tu DNS. El servidor receptor usa esa clave pública para verificar la firma y confirmar que el mensaje es auténtico y no ha cambiado. Una firma válida favorece la entrega; una firma ausente o rota es una señal negativa.

## Errores comunes

Un error frecuente es configurar DKIM una vez y no rotar nunca las claves ni corregirlas tras un cambio de proveedor, de modo que las firmas dejan de funcionar sin que nadie lo note. Otro es activarlo en una herramienta de envío pero no en otra. Un tercero es tratar DKIM como algo opcional, cuando los proveedores lo exigen cada vez más para una buena colocación en la bandeja de entrada.

## Cómo lo aborda hubsell

hubsell firma los envíos con DKIM mediante una infraestructura autenticada y te ayuda a publicar los registros DNS correctos, para que tus mensajes lleven la prueba que buscan los proveedores.
