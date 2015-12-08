var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  devtool: 'source-map',

  entry: {
    'bundle': './src'
  },

  output: {
    filename: 'bundle.js',
    path: 'dist',
    publicPath: 'dist'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: './node_modules' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss' }
    ]
  },

  postcss: [
  ],

  resolve: {
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
