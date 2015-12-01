var path = require('path');
var webpack = require('webpack');

// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  // devtool: 'source-map',
  entry: [
    './src'
  ],
  externals: {
    react: 'react'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: "./node_modules" },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('[name].css', { allChunks: true }),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
