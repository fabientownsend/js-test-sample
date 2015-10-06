var gulp = require('gulp');
var typescript = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('typescript', function() {
    console.log('trace');
    return gulp.src('scripts/typescript/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('scripts'));
});

gulp.task('unitTests', function() {
    return gulp.src('tests/unit/*.js')
        .pipe(mocha({
            reporter: 'dot'
        }))
});

gulp.task('integrationTests', function() {
    return gulp.src('tests/integration/*.js')
        .pipe(mocha({
            reporter: 'dot'
        }))
});

gulp.task('compilation', function() {
    gulp.watch('scripts/typescript/*.ts', ['typescript']);
});

gulp.task('tests', function() {
    gulp.watch('tests/unit/*.js', ['unitTests']);
    gulp.watch('tests/integration/*.js', ['integrationTests']);
});

gulp.task('default', ['compilation', 'tests']);
