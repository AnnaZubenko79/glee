const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const cheerio= require('gulp-cheerio');
const sprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();
const ssi =  require('browsersync-ssi')


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/',
            middleware: ssi({ baseDir: 'app/', ext: '.html'}),
        }, 
        notify: false
    })
}


// function styles() {
//     return src([
//     'node_modules/swiper/swiper.scss',
//     'node_modules/@fancyapps\fancybox/dist/jquery.fancybox.min.css',
//     'app/scss/style.scss'])
//       .pipe(scss({ outputStyle: 'compressed'}))
//       .pipe(concat('style.min.css'))
//       .pipe(autoprefixer({
//         overrideBrowserslist: ['last 10 version'],
//         grid: true
//       }))
//       .pipe(dest('app/css'))
//       .pipe(browserSync.stream()) 
//   }

function styles() {
    return src('app/scss/style.scss')
      .pipe(scss({ outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(dest('app/css'))
      .pipe(browserSync.stream()) 
  }

  function scripts() {
      return src([
          'node_modules/jquery/dist/jquery.js',
          'node_modules/swiper/swiper-bundle.js',
          'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
          'node_modules/mixitup/dist/mixitup.js',
          'app/js/main.js'
      ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(dest('app/js'))
      .pipe(browserSync.stream())
  }

  
  function images() {
      return src('app/images/**/*.*')
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
      .pipe(dest('dist/images'))
  }

  function svgSprite() {
    return src('app/images/sprite/*.svg')
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {
            xmlMode: true
        }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(sprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('app/images'));
}


  function build() {
      return src([
          'app/**/*.html',
          'app/css/style.min.css',
          'app/js/main.min.js'
      ], {base: 'app'})
      .pipe(dest('dist'))
  }

  function cleanDist() {
      return del('dist')

  }

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
    watch(['app/images/sprite/*.svg'], svgSprite);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprite = svgSprite;

exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, svgSprite, browsersync, watching);