# changelog
## v2.0.0

- Nueva versión desarrollada desde cero para el nuevo escritorio de Blogger
- Ahora el código JavaScript cargará por defecto
- Mejora en los comentarios nativos:
  - Ahora puedes borrar comentarios y destacar como autor
  - Ahora los blogs pueden mostrar más de 200 comentarios
  - Mejora en la configuración basada en variables
  - Se retiraron todas las etiquetas de datos obsoletas (http://bit.ly/3l3icbn)
  - Sistema de temas y mejor optimización
- Mejora del SEO en la plantilla:
  - Nuevo conjunto de meta controles robots para los fragmentos en los resultados de búsqueda
  - Mejora del código necesario para Open graph
  - Ahora se generan datos estructurados JSON para las entradas
- Mejoras para desarrolladores:
  - Reducción de CSS necesario para Blogger
  - Variables para establecer fondo predeterminado y fondo responsivo
  - Ahora Canvas puede generar el código de AdSense entre las entradas, el contenido y los widgets
- Añadidas etiquetas `b:includable` del widget Blog para desarrolladores:
  - `postAds` inserta los anuncios de AdSense
  - `postAuthor` inserta los datos del autor (requiere `postAuthorName` y `postAuthorPhoto`)
  - `postBody` inserta el contenido
  - `postBodySnippet` genera un resumen del texto
  - `postFeaturedImage` inserta la imagen destacada
  - `postMeta` genera los metadatos JSON para buscadores
  - `postLabels` genera las etiquetas
  - `postLocation` inserta la ubicación
  - `postPagination` genera la paginación (requiere `previousPageLink` y `nextPageLink`)
  - `postTitle` inserta el título que puede contener el enlace alternativo del título
  - `postTimestamp` inserta la fecha de publicación
  - `sharingButtons` genera botones de compartir
- Añadidas etiquetas `b:includable` globales para desarrolladores:
  - `cv_head` genera todo el código debajo de `<head>`
  - `cv_footer` genera todo el código arriba de `</body>`
  - `cv_devClass` genera las clases de desarrollo
  - `cv_alerts` genera todos los mensajes del blog
  - `cv_featuredImage` genera imágenes responsive compatibles con plugins lazyload
  - `cv_fbSDK` genera el código SDK necesario para plugins de facebook
  - `cv_sharing` genera enlaces para compartir
  - `cv_gtag` genera el còdigo de Google Analytics
  - `cv_gads` genera el còdigo de Google Adsense
  - `cv_sharing` genera botones de compartir para widgets tipo Blog, FeaturedPost y PopularPosts
  - `cv_disqusComments` genera comentarios de disqus

## v1.10.0

- Corrige la visualización de imágenes y videos en el nuevo editor de entradas

## v1.9.0

- Actualización de sintaxis a **Layout 3** de Blogger
- Ahora las twitter card funcionan con Open graph
- Integración con widgets de adsense de Blogger
- Ahora los estilos `b:template-skin` solo afectan a la vista de diseño
- Ahora se obtiene `og:image` en la pagina principal, a partir de las entradas
- Corrección general de la estructura xml

## v1.8.0

- Se agrega la class `noAllowNewComments` si no se permiten nuevos comentarios de Blogger
- Se corrigen los estilos obligatorios para el correcto funcionamiento de la plantilla

## v1.7.0

- Se retira `meta=rating` puesto que no influye en SEO
- Se retira `image_src` puesto que no se le da uso
- Ahora `meta=robots` solo bloquea páginas sin impedir el rastreo
- Se agrega `og:image:width` y `og:image:height` requerido por facebook
- Se retiran variables de configuración innecesarias
- Se retiran comentarios de google plus
- Solución para comentarios de facebook responsive
- Etiquetas mejor organizadas y correcciones varias

## v1.6.8

- Se elimina la opción "responder" si no se permiten nuevos comentarios (+ux)
- Los comentarios no renderizan si no están permitidos (+ux)
- Informacion de la version del tema

## v1.6.4

- Se retira `meta=generator` puesto que no influye en SEO
- Se agrega `meta=referrer` para especificar los datos de referente.
- Se agrega `meta=application-name` que especifica el nombre del ícono de la aplicación en dispositivos móviles cuando el usuario selecciona la función "Agregar a pantalla de inicio" en su navegador web.
- Se agrega `data:blog.locale.languageDirection` la cual especifica la dirección de lectura según el idioma establecido en la configuración de Blogger.

## v1.6.2

- Se agrega `b:template-skin` para estilos de "Diseño" del panel de administración

## v1.6.1

- Se establece el idioma del blog configurado en Blogger (+ux)

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