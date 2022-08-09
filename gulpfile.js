const { src, dest, series, watch } = require('gulp')

// Rutas
const dir = {
  allFolders: 'dev/**/',
  allFiles: 'dev/**/*',
  templates: 'dev/themes/*/*.pug',
  xml: 'dev/themes/*/*.xml'
}

// Plugins
const rename = require("gulp-rename")
const pug = require('gulp-pug')

const build = () => {
  return src( [dir.templates, `!${dir.allFolders}_*`], { base: "." } )
    .pipe(pug({
      pretty: true,
      basedir: "./dev/"
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