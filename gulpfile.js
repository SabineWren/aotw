var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

	gulp.task('css', function () {
	var plugins = [
		autoprefixer({browsers: ['> 1%'], cascade: false})
	];
	
	return gulp.src('./proto/css-dev/*.css')
	.pipe(postcss(plugins))
	.pipe(gulp.dest('./proto/css'));
});
