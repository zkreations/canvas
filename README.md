<p align="center">
	<a href="#url" target="_blank">
		<img src="./static/logo.svg" style='opacity: .8' width="400" alt="Canvas.xml Logo">
	</a>
</p>

<p align="center">
   <a href="https://github.com/zkreations/Canvas.xml/releases/tag/v1.6.0">
		<img src="https://img.shields.io/badge/release-v1.6.0-yellowgreen.svg" alt="version">
	</a>
   <a href="https://raw.githubusercontent.com/zkreations/Canvas.xml/master/Canvas.xml">
		<img src="https://img.shields.io/badge/layout%20version-2-lightgrey.svg" alt="layout version">
	</a>
	<a href="https://github.com/zkreations/Canvas.xml/blob/master/changelog.md">
		<img src="https://img.shields.io/badge/changelog-md-blue.svg" alt="changelog">
	</a>
	<a href="https://github.com/zkreations/Canvas.xml/blob/master/LICENSE">
		<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
	</a>
</p>

Canvas.xml es una base para Blogger que le permite crear plantillas desde cero. Está optimizada para seo, no contiene javascript, html ni css intrusivo e integra de forma inteligente comentarios de Disqus y facebook.

## Instalación

Copia todo el contenido de <a href="https://raw.githubusercontent.com/zkreations/Canvas.xml/master/Canvas.xml" target="_blank">Canvas.xml</a>. Ahora ve a blogger, crea un nuevo blog y selecciona la plantilla **Sencillo**, luego ve a Temas > Editar HTML, elimina todo el código dentro del editor y pega el código copiado con anterioridad. No olvides guardar los cambios.


## Opciones

A partir de la versión 1.6.x las opciones son manejadas por variables dentro de `b:skin`. La siguiente tabla contiene los datos disponibles hasta el momento

| Variable                | Type   |  Default  | Description | 
| ----------------------- | ------ | ----------| ----------------------------- |
| `config.comments`       | string | `blogger` | Establece los comentarios por defecto: `blogger`, `facebook` o `disqus` |
| `config.dq.shortname`   | string | `shortname` | Nombre corto del sitio en Disqus - [Ver más](https://help.disqus.com/installation/whats-a-shortname) |
| `config.fb.commentNums` | number | `10` | Establece el valor de **data-numposts** - [Ver más](https://developers.facebook.com/docs/plugins/comments/#settings) |
| `config.fb.commentSkin` | string | `light` | Tema para los comentarios de facebook: `light` o `dark` |

### Modo de uso

Solo se cambia el valor del campo `value`, por otro valor  que sea aceptable, por ejemplo:

```html
<Variable name="config.comments" description="Comment system" type="string" default="blogger" value="facebook"/>
```

## Includables

| Includables                                  |  Description | 
| -------------------------------------------- | ----------------------------------- |
| `post`       | Inserta entradas en la pagina principal, post y pagina estática |
| `nextprev`       | Inserta la paginación |
| `comments`       | Inserta el sistema de comentarios, de acuerdo a la configuración de la variable `config.comments` |
| `comments-blogger`       | Inserta el sistema de comentarios de Blogger |
| `comments-disqus`       | Inserta el sistema de comentarios de disqus |
| `comments-facebook`       | Inserta el sistema de comentarios de facebook |

### Modo de uso

Se emplea una etiqueta `b:include` mas el nombre del includable a solicitar, por ejemplo:

```html
<b:include data='post' name='post'/>
```

En este otro ejemplo se llama a los comentarios de disqus:

```html
<b:include data='post' name='disqus'/>
```

## License

**Canvas.xml** and **Single.css** is licensed under the GNU GENERAL PUBLIC LICENSE.