# Canvas.xml

Canvas te proporciona una base para blogger limpia, eliminando el código css/javascript por defecto, integra **facebook Open Graph**, **twitter card** y metadatos necesarios para el **SEO**.

### Ventajas de usar Canvas

Es mucho mas fácil diseñar para blogger. Tus diseños pueden ser como que tu quieras debido a la exclusión del código de blogger. Con Canvas.xml es fácil lograr un blog con una velocidad de carga optima. 

## Instalación

Descarga **Canvas**, abre el archivo con cualquier editor de texto y copia todo el contenido. Ahora ve a blogger, crea un nuevo blog, luego ve a edición html y elimina todo el código dentro del editor, pega el código copiado con anterioridad y guarda los cambios.

## Comentarios Disqus

Busca `<b:with value='["blogger","Shortname","10"]' var='commentsType'>` y cambia **blogger** por **disqus** y cambia **Shortname** por el nombre corto que se encuentra en tu panel de administracion de Disqus.

## Comentarios facebook

Busca `<body>` y debajo de eso pega el **sdk de facebook**:

```html
<div id="fb-root"></div>
<script>//<![CDATA[
   (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
   fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
//]]></script>
```

Ahora Busca `<b:with value='["blogger","Shortname","10"]' var='commentsType'>` y cambia **blogger** por **facebook**. Ahora cambia **10** por el numero de comentarios a mostrar de facebook.

## Comentarios Blogger

En caso de usar disqus o facebook, puedes volver a los comentarios de blogger dejando el valor por defecto: `<b:with value='["blogger","Shortname","10"]' var='commentsType'>`


# Single.css

Single es un archivo css que rediseña los widgets de blogger, les añade aspectos responsive y ademas los vuelve modulares, de tal forma que dependiendo del maquetado, el widget interactue cambiando su diseño en caso de encontrarse en el sidebar, el main o el header.

## Licencia

**Canvas.xml** is licensed under the GNU GENERAL PUBLIC LICENSE.
**Single.css** is licensed under the GNU GENERAL PUBLIC LICENSE.
