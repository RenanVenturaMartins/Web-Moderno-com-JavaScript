const gulp = require('gulp')
const {series, parallel, src } = require('gulp')
const concat = require('gulp-concat')
const ugfly = require('gulp-uglify')
const babel = require('gulp-babel')


function padrao(cb) {
   gulp.src('src/**/*.js')
   .pipe(babel({
        comments: false,
        presets: ['env']
   }))
   .pipe(ugfly())
   .pipe(concat('codigo.min.js'))
   .pipe(gulp.dest('build'))
   return cb()
}

module.exports.default = series(padrao)