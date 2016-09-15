var args = process.argv.slice(2);
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var imageMin = require('gulp-imagemin');
var pngCrush = require('imagemin-pngcrush');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var cssMin = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rigger = require('gulp-rigger');
var newer = require('gulp-newer');
var webserver = require("gulp-webserver");
var pages = '_*.html';
var _p = args.indexOf('-p');
if (_p !== -1) {
  var pageName = args[_p + 1];
  if (pageName) {
    pages = pageName;
  }
}
var pagesWatch = [pages, 'templates/*.html'];

//HTML include

gulp.task('html', function () {
  gulp.src(pages)
    .pipe(rigger())
    .pipe(rename(function (path) {
      var newName = path.basename;
      if (newName.charAt(0) === '_')
        newName = newName.slice(1);
      path.basename = newName;
    }))
    .pipe(gulp.dest(''))
});

// Images, Fonts

gulp.task('images', function () {
  return gulp.src('src/img/**')
    .pipe(newer('build/img'))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false}
      ],
      use: [pngCrush()]
    }))
    .pipe(gulp.dest('build/img'))
});

gulp.task('fonts', function () {
  gulp.src('src/fonts/**')
    .pipe(newer('build/fonts'))
    .pipe(gulp.dest('build/fonts'))
});

// CSS

gulp.task('scss', function () {
  gulp.src(['src/css/global.scss', 'src/css/pages/*.scss'])
    .pipe(newer('build/css'))
    .pipe(sass())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
    .pipe(cmq({
      log: true,
      beautify: true
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(csscomb())
    .pipe(cssMin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/css'))
});

// JS

function getFiles(dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isFile();
    });
}

function mapJs(callback) {
  if (typeof callback !== 'function') {
    return;
  }
  getFiles('src/js')
    .forEach(function (file) {
      file = file.slice(0, -3);
      callback(file);
    });
}

gulp.task('jscs', function () {
  mapJs(function (file) {
    gulp.src(['src/js/' + file + '.js'])
      .pipe(jscs());
  });
});

gulp.task('lint', function () {
  mapJs(function (file) {
    gulp.src(['src/js/' + file + '.js'])
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
  });
});

gulp.task('js', ['jscs', 'lint'], function () {
  mapJs(function (file) {
    gulp.src(['src/js/' + file + '/**', 'src/js/' + file + '.js'])
      .pipe(newer('build/js'))
      .pipe(concat(file + '.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('build/js'))
  });
});

// SERVER

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 9000
    }));
});

// WATCH

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch(pagesWatch, ['html']);
  gulp.watch('src/css/**/*.scss', ['scss']);
});

// DEFAULT

gulp.task('default', ['html', 'images', 'fonts', 'scss', 'js', 'webserver', 'watch']);