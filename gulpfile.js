const { src, dest, series, watch } = require('gulp')

// Rutas
const dir = {
  build: 'build/',
  allFiles: 'dev/**/*',
  templates: 'dev/themes/*/*.pug'
}

const blogger = {
  tags: /<(b:*[^/>]*)>\s*<\/(b:*[^>]*)>/g,
  variables: /<(Variable[^>]*)><\/Variable>/g,
}

// Plugins
const rename = require("gulp-rename")
const pug = require('gulp-pug')
const replace = require('gulp-replace')

const build = () => {
  return src( [ dir.templates ] )
    .pipe(pug({
      pretty: true,
      doctype: 'xml',
    }))
    // Etiquetas de Blogger
    .pipe(replace(blogger.tags, "<$1/>"))
    .pipe(replace(blogger.variables, "<$1/>"))
    // Espacio adicional
    .pipe(replace(/(^|\G) {2}/gm, ""))
    // Extensión
    .pipe( rename( { extname: '.xml' } ) )
    .pipe( dest( dir.build ) )
}

const watchFiles = () => {
  watch(
    [ dir.allFiles ],
    series( build )
  );
};

exports.build = build;
exports.watch = watchFiles;
exports.default = watchFiles;