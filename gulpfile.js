var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {

    connect.server({
        root: ['app', 'bower_components'],
        livereload: 'true'
    });
});

gulp.task('source', function() {
    gulp.src('./app/**/*')
        .pipe(connect.reload());
});

gulp.task('test', function(){
    var Server = require('karma').Server;
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();

});

gulp.task('default', ['connect']);