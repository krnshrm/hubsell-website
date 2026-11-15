---
term: "Waterfall enrichment"
category: "Datos y enriquecimiento"
definition: "El waterfall enrichment (enriquecimiento en cascada) consulta varios proveedores de datos uno tras otro y toma el primer resultado válido para cada campo, para conseguir más coincidencias que con una sola fuente."
related:
  - data-enrichment
  - data-provider
  - b2b-data
  - email-verification
updated: "julio de 2026"
---

## Por qué importa

Ningún proveedor tiene todos los registros, y la cobertura varía según la región y el puesto. Consultar proveedores uno tras otro rellena más campos que cualquier fuente por sí sola, lo que sube la tasa de coincidencia y reduce los huecos con los que se encuentra un comercial. Para los equipos que necesitan mucha cobertura, el enfoque en cascada es la forma de conseguirla sin apostarlo todo a un solo proveedor.

## Cómo funciona en la práctica

Una cascada pasa un registro por varios proveedores en un orden fijo. Para cada campo que falta consulta al primer proveedor, y si la respuesta viene vacía o con poca fiabilidad consulta al siguiente, hasta la primera respuesta válida. Esto se repite campo a campo, así que un mismo contacto puede obtener el email de una fuente y el teléfono de otra. El coste se controla poniendo primero a los proveedores más baratos o con más aciertos.

## Errores comunes

Un error común es usar una cascada sin verificar el resultado elegido, de modo que aceptas la primera respuesta aunque sea errónea. Otro es un mal orden de proveedores que gasta en fuentes caras antes de que las baratas hayan podido responder. Un tercero es perseguir tanto la cobertura que la exactitud cae.

## Cómo lo aborda hubsell

hubsell se centra en verificar cada contacto en el momento de usarlo, así que el resultado que obtienes se comprueba cuando lo necesitas en lugar de aceptarse como la primera respuesta disponible de una cadena de bases de datos.
