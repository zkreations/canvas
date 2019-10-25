<img src="https://github.com/zkreations/Canvas.xml/raw/master/static/logo.svg?sanitize=true" width="280" alt="Canvas.xml Logo">

[![](https://img.shields.io/badge/release-v1.9.0-yellowgreen.svg)](https://github.com/zkreations/Canvas.xml/releases/tag/v1.9.0)
[![](https://img.shields.io/badge/layout-v3-lightgrey.svg)](https://raw.githubusercontent.com/zkreations/Canvas.xml/master/Canvas.xml)
[![](https://img.shields.io/badge/changelog-md-blue.svg)](./changelog.md)
[![](https://img.shields.io/badge/license-GPL%203.0-orange.svg)](./LICENSE)

Base para Blogger SEO optimizada, no contiene javascript, html ni css intrusivo e integra de forma inteligente comentarios de Disqus, Facebook y Blogger.

## Caracteristicas

- **Código limpio** - Sin javascript, html ni css intrusivo
- **SEO** - Meta etiquetas esenciales para SEO
- **Twitter Cards** - Integra las Cards de twitter
- **Open graph** - Meta etiquetas open graph para facebook y twitter
- **Layout 3** - Basado en la version mas reciente de Blogger

## Instalacion

Copia todo el contenido de <a href="./Canvas.xml" target="_blank">Canvas.xml</a>, luego ve a Blogger, crea un nuevo blog y selecciona la plantilla  "Contemporánea", "Soho", "Emporio" o "Destacado", luego preciona **Editar HTML**, elimina todo el código y pega el código copiado con anterioridad. Guarda los cambios.

## Configuracion

Antes de proceder a utilizar Canvas.xml, puede realizar algunas configuraciones básicas. Esta configuración es opcional asi que puede saltarlo.

#### Referrer

En la **línea 20** se encuentra la etiqueta meta referrer para especificar qué datos de referente, de entre los que se envían con la cabecera deben incluirse con las solicitudes realizadas.

```html
<!-- Meta Referrer Tag -->
<meta content='unsafe-url' name='referrer'/>
```

Por defecto esta establecido en `unsafe-url` (cualquier dominio o ruta de acceso de referencia). Leer [Referrer-Policy](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Referrer-Policy) redactado por **moz://a** para más información.

#### Twitter

Las Cards de Twitter estan configuradas con sus valores mínimos y el estilo por defecto `summary_large_image`. Puede cambiarlo en la **linea 23**:

```html
<!-- Type of twitter card -->
<meta content='summary_large_image' name='twitter:card'/>
```

También puedes agregar otras etiquetas meta opcionales si asi lo requiere:

```html
<meta content='@userProfile' name='twitter:site'/>
<meta content='@pageProfile' name='twitter:creator'/>
```

Visite la documentación en [twitter developers](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html) para mas información

## Opciones

| Variable                | Type   |  Default  | Description |
| ----------------------- | ------ | ----------| ----------------------------- |
| `config.comments`       | string | `blogger` | Establece los comentarios por defecto: `blogger`, `facebook` o `disqus` |
| `config.shortname`   | string | `shortname` | Nombre corto del sitio en [Disqus](https://help.disqus.com/installation/whats-a-shortname) |


#### Modo de uso

Solo se cambia el valor del campo `value`, por otro valor que sea aceptable, ejemplo:

```xml
<Variable {{..}} default="blogger" value="disqus"/>
```

El valor dentro del atributo `default`, lo volverá a tomar Canvas.xml si restaura la configuración desde el **Diseñador de Plantilla**.

## License

**Canvas.xml** and **single.css** is licensed under the GNU GENERAL PUBLIC LICENSE.