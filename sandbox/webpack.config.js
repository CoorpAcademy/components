var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

function entries(names){
  var entries = {};
  names.forEach(function(name){
    entries[name] = [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src', name)
    ];
  });

  return entries;
}

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',

  entry: entries([
    'sandbox-react',
    'sandbox-virtual-dom'
  ]),

  output: {
    filename: '[name].js',
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
    colorFunction(),
    autoprefixer({ browsers: ['last 2 versions'] })
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
