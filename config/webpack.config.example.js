var constants = require('./constants')
var webpack = require('webpack')

var sha = exec('git rev-parse --short HEAD').stdout.trim();
var rootId = 'fp_' + sha;

module.exports = {
  devServer: {
    contentBase: constants.EXAMPLES_DIRECTORY
  },
  entry: {
    example: constants.EXAMPLES_DIRECTORY
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      }
    ]
  },
  output: {
    filename: 'examples.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
