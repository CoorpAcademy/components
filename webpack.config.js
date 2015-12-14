var path = require('path');
var webpack = require('webpack');
var colorFunction = require('postcss-color-function');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',

  entry: [
    path.join(__dirname, 'src')
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [path.join(__dirname, 'src'), path.join(__dirname, '..', 'src')] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') }
    ]
  },

  postcss: [
    colorFunction()
  ],

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
