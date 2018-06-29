# changelog

## v1.6.0

- Incluye todos los cambios de la versión **pre-release**, con algunas modificaciones (1.5.20)
- Mejor legibilidad (+ux)
- Se toman en cuenta las páginas estáticas para `og:` y `twitter:card` (fix)
- Se comprueba la existencia de `data:view.featuredImage` en donde haga falta (fix)
- Se elimina el soporte de IE9 para HTML5 (+limpieza)
- Se eliminan etiquetas HTML sin relevancia (+limpieza)
- Los textos se traducen automáticamente al idioma configurado en Blogger (+ux)
- Los comentarios "guía" se tradujeron al inglés para facilitar la comprensión (+ux)
- Corrección para imágenes responsive sin interferir con los estilos del editor (fix)

## v1.5.20

- Se agrega `og:site_name` y el protocolo de marcado para Open Graph (+seo)
- Configuracion global a través de variables (+ux)
- Sistema de comentarios de Blogger re-estructurado (+limpieza)
- Codigo javascript de Disqus actualizado (+limpieza)
- Actualizado estándar de w3c para HTML5 (+seo)
- Reemplazo de HTML por la sintaxis de Blogger (+limpieza)
- Corrección a la salida de datos de `data:view.description` y `data:view.title` (+limpieza)
- Ahora los comentarios de disqus y facebook heredan la configuración de Blogger (fix)
- Corrección del avatar en los comentarios (fix)
- Solucion a contenedor vacío en la paginación (fix)

## v1.5.0

- Elimando widget.js de forma oficial `b:js=false`
- Eliminado datos del usuario (mas limpieza)
- Se elimina meta robots `noodp,noydir` por la clausura de ODP/DMOZ
- Titulos relativos mejorados
- Se retira el "Hack body", ya no se necesita.