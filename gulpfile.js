"use strict";

var  gulp = require('gulp');
var  connect = require('gulp-connect'); //fire browser
var  open = require('gulp-open'); //open url in web browser
var  browserify = require('browserify'); //open url in web browser
var  reactify = require('reactify'); //open url in web browser
var  source = require('vinyl-source-stream'); //open url in web browser
var concat = require('gulp-concat');
var lint = require('gulp-eslint'); // lint jsx files

var config = {
    port:9005,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./src/*.html',
        dist:'./dist',
        js:'./src/**/*.js',
        images:'./src/images/*.*',
        css:['./node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/toastr/toastr.css'],
        mainJs:'./src/main.js',
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
        .pipe(open({uri: config.devBaseUrl + ":" + config.port + '/'}));
});

//copy html files from src to dist
gulp.task('html',function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});


//copy html files from src to dist
gulp.task('css',function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist+"/css"))
        .pipe(connect.reload());
});

//copy html files from src to dist
gulp.task('js',function(){
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest( config.paths.dist+"/scripts") )   
    .pipe(connect.reload());
});

gulp.task('lint',function(){
    return gulp.src(config.paths.js)
                .pipe(lint({config:'eslint.config.json'}))
                .pipe(lint.format());

})


gulp.task('images',function(){
     gulp.src(config.paths.images)
                .pipe(gulp.dest( config.paths.dist+"/images")).pipe(connect.reload());

    gulp.src('/src/favicon.ico')
         .pipe(gulp.dest( config.paths.dist))
         .pipe(connect.reload());
                

})

gulp.task('default',['html','open','js','images','css','lint','watch']);


gulp.task('watch',function(){
    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js']);    
    gulp.watch(config.paths.js,['lint']);
})