var path = require('path');
var webpack = require('webpack');
var colorFunction = require('postcss-color-function');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',

  entry: {
    'bundle': path.join(__dirname, 'src', 'bundle'),
    'bundle-with-react': path.join(__dirname, 'src', 'bundle-with-react'),
    'bundle-with-virtual-dom': path.join(__dirname, 'src', 'bundle-with-virtual-dom')
  },

  output: {
    library: 'Components',
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [path.join(__dirname, 'src')] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') }
    ]
  },

  postcss: [
    colorFunction()
  ],

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: '{file}.gz',
      algorithm: 'gzip',
      regExp: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.9
    })
  ]
};
