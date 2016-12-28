# Blogger-core

Canvas te proporciona una base para blogger limpia, eliminando el código css/javascript por defecto, integra facebook Open Graph, twitter card y metadatos necesarios que mejoran el SEO. Una gran opción para empezar a diseñar en blogger desde 0. 

### Ventajas de usar Canvas

Es mucho mas fácil diseñar para blogger e incluso puedes hacerlo en local. Tus diseños pueden ser como que tu quieras debido a la exclusión del código de blogger, el limite está en tu imaginación. Con canvas.xml es fácil lograr un blog con una velocidad de carga optima. Para tener un ejemplo claro, los siguientes blogs usan **Canvas** y pasaron por diferentes test de velocidad: 

* [zkreations](http://www.zkreations.com/) usa Canvas.nano 1.0.14 - [PageSpeed](https://goo.gl/ldwghm) [thinkwithgoogle](https://goo.gl/7hAh2S) [pingdom](https://goo.gl/sWuryK)

## Formas de uso

Hay 3 distintas formas de usar Canvas, las cuales son **Canvas**, **Canvas.core** y **Canvas.nano**.

### Canvas.xml

Base que elimina todo el código css/javascript y la mayor parte del código propio de blogger, solo conserva los comentarios nativos. 

### Canvas.core.xml

Base que elimina todo el código css y la mayor parte del código de blogger, pero conserva javascript y los comentarios nativos. También cuenta con **blogger.core.css**, desarrollado por daniel, el cual re-diseña los widgets de blogger. 

### Canvas.nano.xml

Base que elimina por completo el código css/javascript de blogger, y reemplaza los comentarios nativos por **disqus** y **facebook** (a elección). **Canvas.nano** es la versión mas pequeña de las 3 opciones.

## Instalación

Descarga **Canvas**, **Canvas.core** o **Canvas.nano**, abre el archivo de tu elección con cualquier editor de texto (hasta blog de notas sirve) y copia todo el contenido. Ahora ve a blogger, crea un nuevo blog con cualquier diseño, luego ve a edición html y elimina todo el código dentro del editor, pega el código copiado con anterioridad y guarda los cambios.

## Configuración solo para Canvas.nano

En la linea **197** se encuentra el siguiente código:

```html
<b:with var='disqus' value='"[Shortname_DISQUS]"'>
```
Reemplazar `[Shortname_DISQUS]` por el nombre corto que se encuentra en tu panel de Disqus. Si deseas utilizar los **comentarios de facebook** en lugar de **Disqus** crea una [app en facebook](https://developers.facebook.com/apps/), luego dirígete a [Plugin de comentarios](https://developers.facebook.com/docs/plugins/comments/) y da clic en **Obtener código**, Solo copia **SDK para JavaScript** y pégalo debajo de `<body>` dentro de **Canvas.nano**. Por ultimo, busca esto: 

```html
<b:include name='comment-disqus'/>
```

Y Cambia **disqus** por **facebook**

## Licencia

**Canvas**, **Canvas.core** and **Canvas.nano** is licensed under the GNU GENERAL PUBLIC LICENSE.
