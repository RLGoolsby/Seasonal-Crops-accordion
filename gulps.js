gulp.task('browserSync', function() {

  // Browser sync config
  browserSync({
      proxy: 'localhost:3000'
  });

});
