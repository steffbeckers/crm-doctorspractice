/// <binding AfterBuild='default' ProjectOpened='watch' />

var babelPolyfill = require("babel-polyfill");
var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var tsc = require('gulp-typescript');

var tsProject = tsc.createProject('tsconfig.json');

var config = {
	//Include all js files but exclude any min.js files
	src: [
		//'../node_modules/babel-polyfill/dist/polyfill.min.js',
		'**/*.ts'
		
		//'!**/*.min.js',
		//'!gulpfile.js',
	]
}

gulp.task('default', function ()
{
	console.log('Building TS files.')

	var temp = gulp.src(config.src)
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(tsc(tsProject, {}))
		.pipe(babel())
		.pipe(sourcemaps.write(".")) //{ sourceRoot: "../Scripts" }
		.pipe(gulp.dest("."));

});

gulp.task('watch', function ()
{
	return gulp.watch(config.src, ['default']);
});