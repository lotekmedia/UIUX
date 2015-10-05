// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./CSS3/*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});


gulp.task('default', function() {
    gulp.watch('./CSS3/*.less', ['less']);
})