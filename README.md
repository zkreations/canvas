<div align="center">

  <img width='192' src="https://raw.githubusercontent.com/zkreations/canvas/master/.github/canvas.png" align="center" />

  # Canvas 

  <p>Punto de partida construido con pugjs, que brinda facilidades para desarrollar un tema para Blogger.</p>

  <p>
    <a href="https://github.com/zkreations/canvas/releases"><img src="https://img.shields.io/github/v/release/zkreations/canvas" alt="Release"></a>
    <a href="https://github.com/zkreations/canvas/blob/main/LICENSE"><img src="https://img.shields.io/github/license/zkreations/canvas" alt="LICENSE"></a>
  </p>
</div>

## Características

- Código limpio sin CSS ni JS de Blogger 🚀 
- Optimizado para SEO. 🌏
- Optimizado con AdSense. 🔮
- Carga rápida. ⚡️
- Fácil de entender y modificar. 🔰


## Empezando

Clona o descarga este repositorio y luego instala las dependencias con el siguiente comando:

```
npm i
```

Ejecuta el comando `gulp` para empezar a escuchar los cambios de la carpeta "**themes**". Cada vez que guardes un archivo se compila todo en una plantilla xml válida de Blogger. Los archivos con el prefijo "_" serán ignorados.

## Mixins

### variables

Crea variables de Blogger, para usarlas dentro de una etiqueta `b:skin` con el siguiente mixin:

```pug
mixin variables(object)
```

Como único parámetro se requiere un objeto que contendrá los atributos aceptados en [variables de Blogger](https://bloggercode-blogconnexion.blogspot.com/2014/06/tag-b-skin-b-template-skin.html). Por ejemplo:

```pug
+variables({ 
  "body.background": {
    description: "Background",
    type: "background",
    color: "$(body.background.color)",
    value: "$(color) none repeat scroll top center"
  },
})
```

Solo el campo `value` es obligatorio, todos los demás son opcionales. Si el campo `type` no se especifica se usará por defecto "**string**". Ejemplo de variables con los datos mínimos:

```pug
+variables({
  "c.test" : { value: "example"},
  "c.get" : { value: "false"},
})
```

El código resultante sería:

```xml
<Variable name="c.test" description="c.test" type="string" value="example"/>
<Variable name="c.get" description="c.get" type="string" value="false"/>
```

### cdata

Este mixin crea etiquetas html cuyo contenido siempre estará dentro de etiquetas Character DATA.

```pug
mixin cdata(tag="style")
```

Como único parámetro acepta el nombre de una etiqueta html. Si no se especifica la etiqueta html por defecto sera `<style>`, por ejemplo:

```pug
+cdata
```

El código resultante será:

```html
<style>/*<![CDATA[*/ /*]]>*/</style>
```

### markups

Crea las etiquetas `b:defaultmarkups` necesarias para configurar inclusiones predeterminadas de Blogger.

```pug
mixin markups(object={})
```

Como único parámetro opcional acepta un objeto de matrices string, las cuales deben corresponder a inclusiones de widgets.

```pug
+markups({
  "AdSense,Blog": [
    "defaultAdUnit",
  ],
})
```

El código resultante será:

```xml
<b:defaultmarkups>
  <b:defaultmarkup type="AdSense,Blog">
    <b:includable id="defaultAdUnit"/>
  </b:defaultmarkup>
</b:defaultmarkups>
```

### markup

Crea el marcado predeterminado para widgets, requiere el mixin `+markups` como padre para su correcta interpretación en Blogger.

```pug
mixin markup(type="Common")
```

Como único parámetro especifica un tipo de widget valido de Blogger, si no se especifica se usara "**Common**" por ejemplo:

```pug
+markups
  +markup
```

El código resultante será:

```xml
<b:defaultmarkups>
  <b:defaultmarkup type="Common"></b:defaultmarkup>
</b:defaultmarkups>
```

> **Nota:** Si el tipo especificado no es válido o si el tipo especificado es un widget de **solo lectura** de Blogger, veras un aviso en la consola al compilar.

### default-tools

Crea inclusiones globales que sirven para ayudar en la construcción de temas, requiere el mixin `+markups` como padre para su correcta interpretación en Blogger.

```pug
mixin default-tools(tools=defaultTools)
```
Las herramientas disponibles (y que se incluyen por defecto) son:

```js
[ "ads", "adsense", "attr", "image", "kind", "meta" ]
```

### section

Crea una etiqueta `b:section` que verifica si contiene widgets, de lo contrario no genera html de la sección en el código fuente.

```pug
mixin section(id)
```

Como único parámetro acepta un **identificador único**, el cual es obligatorio. Todos los atributos especificados en el mixin también formarán parte del código final:

```pug
+section("sidebar")
```

El código resultante será:

```xml
<b:section id="sidebar" cond='data:widgets any (w => w.sectionId == "sidebar")'></b:section>
```

### widget

Crea una etiqueta `b:widget` que requiera las veces que ha sido llamado, incrementando su contador en 1 tras cada inclusion.

```pug
mixin widget(type="HTML", settings={}, number)
```

El primer parámetro define el tipo, si no se especifica se creará un widget "HTML". El segundo parámetro es un objeto que crea la [configuración predeterminada del widget](https://bloggercode-blogconnexion.blogspot.com/2018/02/tags-b-widget-settings.html), el tercer parámetro es un numero que define un valor arbitrario al contador.

```pug
+widget("Text", {
  content: "Prueba de contenido"
}, 59)
```

El código resultante será:

```xml
<b:widget id="Text59" type="Text" version="2">
  <b:widget-settings>
    <b:widget-setting name="content">Prueba de contenido</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

> **Nota:** por defecto el contador de widgets comienza desde el número `1`, pero puedes establecer el numero inicial del contador declarando la variable `initCall`.


## Tools

Estas inclusiones facilitan algunas tareas en la creación de plantillas, para ello solo debes incluirlas en donde las necesitas.

### @:ads

Genera código de adsense que siempre es responsive, para ello se ignorara cualquier configuración del usuario. También acepta código de anuncios personalizados:

```xml
<b:include name='@:ads'/>
```

| Parámetro | Tipo       | Descripcion                     | Requerido |
| --------- | ---------- | ------------------------------- | --------- |
| `style`   | `string`   | Estilos en línea                | opcional  |
| `slot`    | `string`   | ID de bloque personalizado      | opcional  |
| `layout`  | `string`   | ID de anuncio creado en Adsense | opcional  |

### @:adsense

Agrega la etiqueta que incluye el código javascript de ADsense, la cual esta actualizada y solo carga si AdSense esta habilitado en el blog:

```xml
<b:include name='@:adsense'/>
```

### @:attr

Agrega o remueve multiples atributos al nodo superior. Cada matriz debe estar conformada por dos elementos tipo `string`, el primer elemento sera el nombre del atributo, el segundo elemento corresponderá a su valor, pero si está vació o no está presente, el atributo especificado se borrara del nodo superior:

```xml
<b:include name='@:attr'/>
```

| Parámetro | Tipo             | Descripcion          | Requerido        |
| --------- | ---------------- | -------------------- | ---------------- |
| -         | `array[array]`   | Matriz de matrices   | **obligatorio**  |

### @:image

Manipula imágenes alojadas en los servidores de Google, principalmente trabaja con [datos de Blogger tipo imagen](https://bloggercode-blogconnexion.blogspot.com/2016/04/typeof-image.html):

```xml
<b:include name='@:image'/>
```

| Parámetro | Tipo       | Descripcion                     | Requerido        |
| --------- | ---------- | ------------------------------- | ---------------- |
| `src`     | `image`    | Url o dato de imagen            | **obligatorio**  |
| `alt`     | `string`   | Texto de respaldo               | opcional         |
| `id`      | `string`   | Identificador único             | opcional         |
| `class`   | `string`   | Clases adicionales              | opcional         |
| `width`   | `string`   | Ancho explícito                 | opcional         |
| `height`  | `string`   | Alto explícito                  | opcional         |
| `resize`  | `number`   | Cambia las dimensiones          | opcional         |
| `ratio`   | `string`   | Relación de aspecto             | opcional         |
| `sizes`   | `string`   | Valor del atributo sizes        | opcional         |
| `srcset`  | `array`    | Matriz de tamaños               | opcional         |
| `loading` | `string`   | Atributo loading                | opcional         |
| `params`  | `string`   | Parámetros adicionales          | opcional         |

> **Nota:** los parámetros adicionales son exclusivos de imágenes alojadas en blogger y puedes [conocerlos aqui](https://zkreations.com/2022/11/parametros-de-imagenes-de-blogger.html).

### @:kind

Agrega clases al nodo superior que contiene información según el tipo de página visualizado.

```xml
<b:include name='@:kind'/>
```

### @:meta

Meta datos y otras etiquetas para SEO optimizadas, destinados a la cabecera HTML

```xml
<b:include name='@:meta'/>
```

| Parámetro  | Tipo       | Descripcion                     | Requerido        |
| ---------- | ---------- | ------------------------------- | ---------------- |
| `cardType` | `string`   | Tipo de tarjeta de Twitter      | opcional         |
| `favicon`  | `image`    | Imagen de favicon HD (192x192)  | opcional         |
| `favSizes` | `array`    | Matriz de números (favicons)    | opcional         |
| `robots`   | `string`   | Meta robots personalizado       | opcional         |
| `ogImage`  | `image`    | Imagen para redes sociales      | opcional         |


## Contribuir

Puedes ayudar a mantener este código siempre y cuando tomes en cuenta los siguientes puntos:

- No agregar más estilos CSS
- No agregar más código JavaScript
- Ayudar a corregir y optimizar únicamente el código XML de Blogger

## Apoyar

Si deseas ayudarme a mantener este y más proyectos, puedes [invitarme un café](https://ko-fi.com/zkreations) ☕. Te lo agradeceré mucho 👏.

## License

**Canvas** is licensed under the GNU General Public License v3.0