const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

module.exports = function imageMinify() {
  if (process.env.NODE_ENV === 'development') {
    return gulp.src(["src/**/*.{gif,png,jpg,svg,webp}", "!src/**/_*.{gif,png,jpg,svg,webp}"])
      .pipe(
        webp({
          quality: 100
        })
      )
      .pipe(gulp.dest('build/'))
      .pipe(gulp.src(["src/**/*.{gif,png,jpg,svg,webp}", "!src/**/_*.{gif,png,jpg,svg,webp}"]))
      .pipe(gulp.dest('build/'))
  } else {
    return gulp.src(["src/**/*.{gif,png,jpg,svg,webp}", "!src/**/_*.{gif,png,jpg,svg,webp}"])
      .pipe(
        webp({
          quality: 90
        })
      )
      .pipe(gulp.dest('build/'))
      .pipe(gulp.src(["src/**/*.{gif,png,jpg,svg,webp}", "!src/**/_*.{gif,png,jpg,svg,webp}"]))
      .pipe(imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.mozjpeg({
          quality: 90,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [{
              removeViewBox: true
            },
            {
              cleanupIDs: true
            }
          ]
        })
      ]))
      .pipe(gulp.dest('build/'))
  }

}