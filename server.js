var config = require('./webpack.config')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
, contentBase: config.devServer.contentBase
, hot: true
, quiet: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) return console.log(err)
  console.log('Listening at localhost:3000');
})
