'use strict';

var gulp = require('gulp'),
	// sass = require('gulp-sass'),
	// gl = require('gulp-load-plugins')();
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	csso = require('gulp-csso');

// sass.compiler = require('node-sass');

// starting server
// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "/"
//         }
//     });
// 	// gulp.watch("./").on('change', browserSync.reload)
// });
//proxy
// gulp.task('browser-sync', function() {
//     browserSync.init({
// 			proxy: "http://kinezis.perm/",
// 			host: 'kinezis.perm',
// 			port: 3000,
// 			open: 'external',
// 			notify:    true,
// 			ghost:     true,
// 			// files:     ['C:\\Users\\Александр\\Desktop\\ospanel\\domains\\kinezis.perm\\']
// 			files:     ['/']
// 	});
// // 	browserSync.watch("C:\\Users\\Александр\\Desktop\\ospanel\\domains\\kinezis.perm\\").on('change', browserSync.reload)
// });

// working whith sass
// gulp.task('sass', function () {
//   return gulp.src('./dev/css/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
// 	.pipe(gl.autoprefixer({
//     	browsers: ['last 10 versions'],
//     	cascade: false}))
// 	.pipe(gl.csso())
//     .pipe(gulp.dest('../../public/KP_P_test/test_css'))
// });


// Concat CSS - START
gulp.task('concat_css', function() {
	return gulp.src([
		'./css/grid.css',
		'./css/main_style.css',
		'./css/decoration_rules.css',
		'./css/header.css',
		'./css/navigation.css',
		'./css/content_activities.css',
		'./css/content_person.css',
		'./css/content_article.css',
		'./css/content_contacts.css',
		'./css/content_prices.css',
		'./css/footer.css',
		'./css/overlay.css',
		'./css/scrollingElements.css',
		'./css/slider.css',
		'./css/carousel.css',
		//TODO: Delete this after 31.12
		'./css/new_year.css',
		'./css/media_query.css'
		// './css/*.css'
	])
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
    	// browsers: ['last 10 versions'],
    	cascade: false}))
	.pipe(csso())
	.pipe(gulp.dest('./application/css/'))
  });
// Concat CSS - FINISH

// Concat JS - START
gulp.task('concat_js', function() {
	return gulp.src([
		'./js/menu_desktop_and_mobile_slideup.js',
		'./js/scroll_window.js',
		'./js/scrollTo.js',
		'./js/overlay_callback.js',
		'./js/overlay_menu.js',
		'./js/overlay_callback_submit.js',
		'./js/overlaySliderPainting.js',
		'./js/slider.js',
		'./js/openSlider.js',
		'./js/carousel.js',
		//TODO: Delete this after 31.12
		'./js/new_year.js', 
		// './js/*.js'
	])
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./application/js/'))
  });
// Concat JS - FINISH

// Start watching by *js and *css - START
gulp.task('concat', function() {
	gulp.watch("./js/**/*.js", gulp.series('concat_js'));
	gulp.watch("./css/*.css", gulp.series('concat_css'));
});
// Start watching by *js and *css - FINISH


// Delete all data from ./public/ - START
gulp.task('clean_public_dest', function() {
	return gulp.src('../public/',
	{read:false}).pipe(clean({force:true}))
});
// Delete all data from ./public/ - FINISH

// Copying data to public - START
gulp.task('copy_images', function() {
	return gulp.src('./images/**/*.*')
		.pipe(gulp.dest('../public/images/'))
});
gulp.task('copy_application', function() {
	return gulp.src([
		'./application/core/**/*.*',
		'./application/controllers/**/*.*',
		'./application/models/**/*.*',
		'./application/views/**/*.*',
		'./application/html/**/*.*',
		'./application/css/**/*.*',
		'./application/js/**/*.*',
		'./application/bootstrap.php'
	], {base: './application/'})
	.pipe(gulp.dest('../public/application/'))
});
gulp.task('copy_assets', function() {
	return gulp.src('./assets/**/*.*')
	.pipe(gulp.dest('../public/assets/'))
});
gulp.task('copy_productdata', function() {
	return gulp.src([
		'./prod_data/**/*.*',
		'./.gitignore',
		'./index.php'
	])
	.pipe(gulp.dest('../public/'))
});
gulp.task('copy_all_data', gulp.series(
	'copy_images',
	'copy_application',
	'copy_assets',
	'copy_productdata'
));
// Copying data to public - FINISH

// Make "PUBLIC" - START
gulp.task('make_new_public', gulp.series(
	'clean_public_dest',
	'copy_all_data'
));
// Make "PUBLIC" - FINISH


// watching for folders for any changes task
gulp.task('watchThis', function() {
	gulp.watch('./js/**/*.js', gulp.series('clean_dest_js', 'concat_js') );
	gulp.watch('./css/*.css', gulp.series('clean_dest_css', 'concat_css') );
	// gulp.watch('./dev/js/**/*.js', gulp.series('clean_dest_js', 'concat_js') );
	// gulp.watch('./dev/html/**/*.html', gulp.series('clean_dest_html', 'copy_html') );
	// gulp.watch('./dev/img/**/*.*', gulp.series('clean_dest_img', 'copy_img') );
	// gulp.watch('./dev/php/**/*.php', gulp.series('clean_dest_php', 'copy_php') );
	// gulp.watch('./dev/*.php', gulp.series('clean_dest_index', 'copy_index') );
});

gulp.task('default', 
	// gulp.parallel('watchThis', 'serve'),
	gulp.parallel('concat'),
	);