var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant');


gulp.task('sass', function(){
	return gulp.src('app/sass/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/jquery-validation/dist/jquery.validate.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'));
});

gulp.task('css-libs',['sass'], function(){
	return gulp.src('app/css/style.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:'app'
		},
		notify: false
		});
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
		}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync','sass','scripts'], function(){
	gulp.watch('app/sass/**/*.scss', ['sass'])
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['img', 'css-libs','scripts'], function(){
	var buildCss = gulp.src([
		'app/css/style.min.css'
		])
		.pipe(gulp.dest('dist/css'));
	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));
	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});