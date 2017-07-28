
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('styles', function(){
	gulp.src('styles/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('styles/style.css'))
	});

