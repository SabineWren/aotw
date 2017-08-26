var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

	gulp.task('css', function () {
	var plugins = [
		autoprefixer({browsers: ['> 1%'], cascade: false})
	];
	
	return gulp.src('./dev/css/*.css')
	.pipe(postcss(plugins))
	.pipe(gulp.dest('./css'));
});
