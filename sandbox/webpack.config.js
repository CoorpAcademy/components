var path = require('path');
var webpack = require('webpack');
var colorFunction = require('postcss-color-function');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src')
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [path.join(__dirname, 'src'), path.join(__dirname, '../src'), path.join(__dirname, '../example')] },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss' }
    ]
  },

  postcss: [
    colorFunction()
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
