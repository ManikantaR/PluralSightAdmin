"use strict";

var  gulp = require('gulp');
var  connect = require('gulp-connect'); //fire browser
var  open = require('gulp-open'); //open url in web browser


var config = {
    port:9005,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./src/*.html',
        dist:'./dist'

    }
}
//start task to setup 

gulp.task('connect',function(){
    connect.server({
        root:['dist'],
        port:config.port,
        base: config.devBaseUrl,
        livereload:true
    });
});
//has dependency on connect
gulp.task('open',['connect'],function(){
    gulp.src('dist/index.html')
        .pipe(open({uri:config.devBaseUrl+":"+config.port+'/'}));
});