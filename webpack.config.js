var path = require('path')
var webpack = require('webpack')

module.exports = {
  cache: true
, debug: true
, devtool: 'source-map'
, entry: {
    app: './public/js/app'
  }
, devServer: {
    contentBase: './public'
  }
, output: {
    path: path.join(__dirname, 'public/dist')
  , publicPath: '/dist'
  , filename: '[name].js'
  , chunkFilename: '[chunkhash].js'
  , sourceMapFilename: 'debugging/[file].map'
  , hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js'
  , hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  }
, module: {
    loaders: [
    , { test: /\.js$/, exclude:[/node_modules/, /public\/components/], loader: '6to5-loader?experimental&runtime' }
    , { test: /\.jsx$/, exclude:[/node_modules/, /public\/components/], loaders: ['6to5-loader?experimental&runtime', 'react-hot', 'jsx'] }
    , { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  , noParse: /\.min\.js/
  }
, resolve: {
    modulesDirectories: ['public/components', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  , new webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
    })
  , new webpack.ProvidePlugin({
      jQuery: 'jquery'
    , $: 'jquery'
    })
  ]
}
