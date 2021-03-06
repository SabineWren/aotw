var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
	var plugins = [
		autoprefixer({browsers: ['> 1%'], cascade: false})
	];
	
	return gulp.src('./development/css/*.css')
	.pipe(postcss(plugins))
	.pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
	return gulp.src('./development/js/*')
	.pipe(gulp.dest('./js/'));
});

gulp.task('make', ['css', 'js'], function () {
	return gulp.src('./development/index.html')
	.pipe(gulp.dest('./'));
});
