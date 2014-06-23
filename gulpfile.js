var gulp = require('gulp');

var htmlify = require('gulp-angular-htmlify');

gulp.task('htmlify', function() {
    gulp.src('views/*.html')
        .pipe(htmlify())
        .pipe(gulp.dest('views/'));
});