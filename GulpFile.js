/*	Required modules
********************************************/
var gulp = require('gulp');
var sass = require('gulp-sass');

/*	Paths
********************************************/
var cssPath = './Styles/';
var sassPath = './SASS/**/*.scss'

/*	Tasks
********************************************/
gulp.task('styles', function() {
	gulp.src(sassPath)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(cssPath));
});

/*	Watch tasks
********************************************/
gulp.task('default',function() {
	gulp.watch(sassPath,['styles']);
});