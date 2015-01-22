var config = require('./webpack.config')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var port = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
, contentBase: config.devServer.contentBase
, hot: true
, quiet: true
}).listen(port, function (err, result) {
  if (err) return console.log(err)
  console.log('Listening at localhost:'+port);
})
