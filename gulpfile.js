//gulp-sass gulp-autoprefixer gulp-plumber gulp-livereload browser-sync
//plugins for development
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create();


var srcDir = 'src/';

gulp.task('sass', function(){
  return gulp.src(srcDir + 'scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 3 version'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
});

gulp.task('js', function(){
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
});

gulp.task('html', function(){
  return gulp.src('**/*.html')
    .pipe(browserSync.stream())
});


gulp.task('browser-sync', function(){
  browserSync.init({
    port: 8888,
    server: {
      baseDir: './'
    }
  })
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch(srcDir + 'scss/**/*.scss', ['sass'])
  gulp.watch('js/**/*.js', ['js'])
  gulp.watch('**/*.html', ['html'])
});

gulp.task('default', ['html', 'sass', 'js', 'browser-sync', 'watch'])
