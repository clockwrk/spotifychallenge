let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify')

gulp.task('buildJS', function() {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});