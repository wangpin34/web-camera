var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');

gulp.task('clean:www', function () {
  return del([
    '!www/index.html',
    'www/*.js',
    'www/*.css',
    'www/*.png',
    'www/*.map'
  ]);
});

gulp.task('default', ['clean:www'], function() {
  return gulp.src('src/index.jsx')
    .pipe(webpack(require('./webpack.prod.js')))
    .pipe(gulp.dest('www/'));
});