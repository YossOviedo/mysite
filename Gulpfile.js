var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('compileSass', shell.task(['npm run styles']));

gulp.task('watch', function (){
  gulp.watch('styles.scss', ['compileSass']);
});
