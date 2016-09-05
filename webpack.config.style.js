const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const hash = '[folder]__[local]___[hash:base64:5]';
const componentCSS = new ExtractTextPlugin('styles.css');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  postcss: []
};

if (NODE_ENV === 'production')
  config.postcss.unshift(autoprefixer({ browsers: ['last 2 versions'] }));

const cssLoader = {
  test: /\.css$/,
  loader: NODE_ENV === 'production' ? componentCSS.extract({
    fallbackLoader: 'style',
    loader: `css?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss`
  }) : `style!css?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss`,
  include: path.join(__dirname, 'src')
};

const plugins = [];

if (NODE_ENV === 'production')
  plugins.unshift(componentCSS);

module.exports = Object.assign(
  config,
  {
    module: {
      loaders: [cssLoader]
    },
    plugins
  }
);
