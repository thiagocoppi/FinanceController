const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')


gulp.task('app',['app.html','app.css','app.js','app.assets'])

gulp.task('app.html',function(){
    gulp.src(['app/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
})

gulp.task('app.css',function(){
    gulp.src(['app/**/*.css'])
        .pipe(uglifycss({"ugglyComments" : true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
    
})

gulp.task('app.js',function(){
    gulp.src(['app/**/*.js'])
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets',function(){
    gulp.src(['app/**/*.*'])
        .pipe(gulp.dest('public/assets'))
})