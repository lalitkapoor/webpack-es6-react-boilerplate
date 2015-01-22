var gulp = require('gulp')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

gulp.task('default', function (cb) {
  webpack(webpackConfig, function(err, stats) {
    console.log(stats.toString());
    cb()
  })
})
