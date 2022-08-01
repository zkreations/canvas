const { src, dest, series, watch } = require('gulp')

// Rutas
const dir = {
  allFiles: 'dev/**/*',
  templates: 'dev/themes/*/*.pug',
  xml: 'dev/themes/*/*.xml'
}

// Plugins
const rename = require("gulp-rename")
const pug = require('gulp-pug')

const build = () => {
  return src( [dir.templates], { base: "." } )
    .pipe(pug({
      pretty: true,
    }))
    .pipe( rename( { extname: '.xml' } ) )
    .pipe( dest( './' ) )
}

const watchFiles = () => {
  watch(
    [ dir.allFiles, `!${dir.xml}` ],
    series( build )
  );
};

exports.build = build;
exports.watch = watchFiles;
exports.default = watchFiles;