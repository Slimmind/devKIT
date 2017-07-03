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
var cmq = require('gulp-combine-mq');
var cssMin = require('gulp-cssmin');
var csscomb = require('gulp-csscomb');
var rigger = require('gulp-rigger');

var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');

var del = require('del');
var taskSequence = require('gulp-sequence');
var sourceMaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var webpackStream = require('webpack-stream');
var webpack = webpackStream.webpack;
var named = require('vinyl-named');
var plumber = require('gulp-plumber');
var gulpplog = require('gulp-log');


var pages = '_*.html';
var syncPages = '*.html';
var startPage = 'octoKit.lo/menu.php';

//gulp -p _home.html
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
    .pipe(changed(syncPages))
    .pipe(rigger())
    .pipe(rename(function (path) {
      var newName = path.basename;
      if (newName.charAt(0) === '_')
        newName = newName.slice(1);
      path.basename = newName;
    }))
    .pipe(gulp.dest(''));
});

// Images, Fonts
gulp.task('images', function () {
  return gulp.src('assets/images/**')
    .pipe(changed('dist/images'))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('images-prod', function () {
  return gulp.src('assets/images/**')
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false}
      ],
      use: [pngCrush()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  gulp.src('assets/fonts/**')
    .pipe(gulp.dest('dist/fonts'));
});

// CSS
gulp.task('scss', function () {
  var plugins = [
    autoprefixer({
      browsers: ['last 1 version'],
      supports: true
    })
  ];
  gulp.src(['assets/css/global.scss', 'assets/css/pages/*.scss'])
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'SCSS',
          message: err.message
        }
      })
    }))
    .pipe(sourceMaps.init())
    .pipe(changed('dist/css'))
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(cmq({
      beautify: true
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(csscomb())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scss-prod', function () {
  gulp.src(['assets/css/global.scss', 'assets/css/pages/*.scss'])
    .pipe(sass())
    .pipe(cmq({
      beautify: true
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(csscomb())
    .pipe(cssMin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(debug({title: 'dest'}))
    .pipe(gulp.dest('dist/css'));
});

// JS
gulp.task('jscs', function () {
  gulp.src(['assets/js/*.js'])
    .pipe(jscs());
});

gulp.task('lint', function () {
  gulp.src(['assets/js/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', ['jscs', /*'webpack',*/ 'lint'], function () {
  gulp.src(['assets/js/*.js'])
    .pipe(sourceMaps.init())
    .pipe(rigger())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-prod', ['jscs', 'lint'], function () {
  gulp.src(['assets/js/*.js'])
    .pipe(rigger())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'));
});

// BROWSERSYNC
gulp.task('serve', function () {
  browserSync.init({
    proxy: startPage
    // server: 'dist'
  });

  browserSync.watch(['dist/**/*.*', syncPages]).on('change', browserSync.reload)

});

// CLEAN
gulp.task('clean', function () {
  del.sync(['dist/**']);
} );

// WEBPACK
gulp.task('webpack', function (callback) {
  var firstBuildREady = false;

  function done(err, stats) {
    firstBuildREady = true;
    if(err) {
      return;
    }
    gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
      colors: true
    }));
  }

  var options = {
    output: {
      pubclicPath: '/js/'
    },
    watch: true,
    devtool: 'cheap-module-inline-source-map',
    module:{
      loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, 'assets'),
        loader: 'babel?presets[]=es2015'
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  };
  gulp.src('assets/js/*.js')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return ({
          title: '[WEBPACK]',
          message: err.message
        })
      })
    }))
    .pipe(named())
    .pipe(webpackStream(options, null, done))
    .on('data', function () {
      if(firstBuildREady) {
        callback();
      }
    } )
    .pipe(gulp.dest('dist/js'))
} );

// WATCH
gulp.task('watch', function () {
  gulp.watch('assets/js/**/*.js', ['js']);
  gulp.watch(pagesWatch, ['html']);
  gulp.watch('assets/css/**/*.scss', ['scss']);
});

// DEFAULTS
gulp.task('default', taskSequence(/*'clean', */['html', 'images', 'fonts', 'scss', 'js', /*'serve',*/ 'watch']));
gulp.task('prod', ['fonts', 'images-prod', 'scss-prod', 'js-prod']);