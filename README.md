# Canvas.xml

Canvas te proporciona una base para blogger limpia, eliminando el código css/javascript por defecto, integra facebook Open Graph, twitter card y metadatos necesarios que mejoran el SEO. Una gran opción para empezar a diseñar en blogger desde 0. 

### Ventajas de usar Canvas

Es mucho mas fácil diseñar para blogger. Tus diseños pueden ser como que tu quieras debido a la exclusión del código de blogger, el limite está en tu imaginación. Con canvas.xml es fácil lograr un blog con una velocidad de carga optima. Para tener un ejemplo claro, los siguientes blogs usan **Canvas** y pasaron por diferentes test de velocidad: 

* [zkreations](http://www.zkreations.com/) | usa Canvas.xml (ultima version) - [PageSpeed](https://goo.gl/ldwghm) [thinkwithgoogle](https://goo.gl/7hAh2S) [pingdom](https://goo.gl/sWuryK)

## Instalación

Descarga **Canvas**, abre el archivo con cualquier editor de texto y copia todo el contenido. Ahora ve a blogger, crea un nuevo blog, luego ve a edición html y elimina todo el código dentro del editor, pega el código copiado con anterioridad y guarda los cambios.

## Comentarios Disqus

Busca `[Shortname_DISQUS]` en la plantilla (esta dos veces). Reemplazar ambos por el nombre corto que se encuentra en tu panel de Disqus. Luego busca `<b:include data='post' name='comment-blogger'/>` y cambia **blogger** por **disqus**

## Comentarios facebook

Busca `<b:include data='post' name='comment-blogger'/>` y cambia **blogger** por **facebook**

## Comentarios Blogger

En caso de usar disqus o facebook, puedes volver a los comentarios de blogger dejando el valor por defecto del include: `<b:include data='post' name='comment-blogger'/>`


# Single.css

Single es un archivo css que rediseña los widgets de blogger, les añade aspectos responsive y ademas los vuelve modulares, de tal forma que dependiendo del maquetado, el widget interactue cambiando su diseño en caso de encontrarse en el sidebar, el main o el header.

## Licencia

**Canvas.xml** is licensed under the GNU GENERAL PUBLIC LICENSE.
**Single.css** is licensed under the GNU GENERAL PUBLIC LICENSE.
