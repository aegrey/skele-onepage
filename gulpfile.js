// DEPENDENCIES
// =======================================================
var gulp 	= require('gulp'),
runSequence = require('run-sequence'),
gutil       = require('gulp-util'),
jshint 		= require('gulp-jshint'),
clean       = require('gulp-clean'),
sass        = require('gulp-sass'),
rename 		= require('gulp-rename'),
concat 		= require('gulp-concat'),
jade 		= require("gulp-jade"),
uglify 		= require("gulp-uglify"), //disable for dev
minifyCSS 	= require('gulp-minify-css'),
sftp 		= require('gulp-sftp'),
path 		= require('path'),
fs 			= require('fs');

var config = require('./config.js');


//SCRIPTS
//======================================
gulp.task('lint', function() {
    return gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    var scriptOrder = ['./app/js/global.js', './app/js/ie.js'];

    return gulp.src(scriptOrder)
        .pipe(concat('site.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .on('error', gutil.log);
});

gulp.task('vendors', function() {
    return gulp.src('./app/js/vendors/**/*')
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('build/js'));
});


//STYLES
//======================================
gulp.task('styles', function() {
	return gulp.src('./app/sass/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('site.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('build/css'))
        .on('error', gutil.log);
});


//IMAGES
//======================================
gulp.task('images', function() {
    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('build/images'));
});


//JSON
//======================================
gulp.task('json', function() {
    return gulp.src('./app/js/json/*.json')
        .pipe(gulp.dest('build/js/json'));
});

//LIBRARY
//======================================
gulp.task('lib', function() {
    return gulp.src('./app/lib/**/*')
        .pipe(gulp.dest('build/lib'));
});


//VIEWS
//======================================
gulp.task('views',function() {
	gulp.src('./app/views/*.jade')
		.pipe(jade({
			'pretty': false
		}))
		.pipe(gulp.dest('build'))
        .on('error', gutil.log);
});


//HELPERS
//======================================
gulp.task('deploy', function() {
	gulp.src('build')
	    .pipe(sftp({
	        host: config.server.host,
	        user: config.server.user,
	        pass: config.server.pass,
	        remotePath: path.join(config.server.path, config.project.name),
	    }))
        .on('error', gutil.log);
});

gulp.task('clean', function () {
  return gulp.src('build', { read: false })
    .pipe(clean())
    .on('error', gutil.log);
});


//TASKS
//======================================
gulp.task('watch', function() {
	gulp.watch('app/**/*.js', [ 'scripts' ]);
    gulp.watch('app/**/**/*.js', [ 'vendors' ]);
	gulp.watch('app/**/*.scss', [ 'styles' ]);
	gulp.watch('app/images/*', [ 'images' ]);
    gulp.watch('app/json/*', [ 'json' ]);
	gulp.watch('app/**/*.jade', [ 'views' ]);
});

gulp.task('build', function(callback) {
	runSequence(['scripts','vendors','styles','images','json','lib'], 'views', callback);
});

gulp.task('default', [ 'build', 'watch' ]);
