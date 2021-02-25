const { src, watch, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser-js');

const paths = {
	imagenes: 'src/img/**/*',
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
};

function css() {
	return src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./build/css'));
}

function javascript() {
	return src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./build/js'));
}

/* function minificarCss() {
	return src(paths.scss)
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(dest('./build/css'));
} */

function imagenes() {
	return src(paths.imagenes)
		.pipe(cache(imagemin({ optimizationLevel: 3 })))
		.pipe(dest('build/img'))
		.pipe(notify({ message: 'Imagen Completada' }));
}

function watchArchivos() {
	watch(paths.imagenes, imagenes);
	watch(paths.scss, css);
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = parallel(css, javascript, watchArchivos, imagenes);
