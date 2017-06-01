var gulp = require('gulp');

gulp.task('default', function() {
	console.log('Hello Gulp!');
});

var tslint = require('gulp-tslint');

gulp.task('lint', function() {
//	return gulp.src([
//		'./source/ts/**/**.ts', './test/**/**.test.ts'
//	]).pipe(tslist())
//	  .pipe(tslint.report('verbose'));
	console.log('lint');
});	
