const {join} = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const hash = '[folder]__[local]';
const componentCSS = new ExtractTextPlugin({
  filename: '[name].css',
  ignoreOrder: true
});

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  devtool: NODE_ENV === 'production' ? false : 'eval',

  stats: {
    children: false,
    chunks: false, // Makes the build much quieter
    colors: true
  },

  output: {
    library: 'bundle',
    filename: '[name].js',
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|svg|woff)$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: join(process.cwd(), 'src')
      },
      {
        test: /\.css$/,
        loader: componentCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: `${hash}`
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: (() => {
    const plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      }),
      componentCSS
    ];

    if (NODE_ENV === 'production')
      plugins.push(
        new CompressionPlugin({
          asset: '[path].gz',
          algorithm: 'gzip',
          regExp: /\.js$|\.css$/,
          threshold: 10240,
          minRatio: 0.8
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname
          },
          minimize: true,
          debug: false
        }),
        new BabiliPlugin({
          comments: false,
          sourceMap: false,
          simplify: false
        })
      );

    return plugins;
  })()
};

module.exports = config;
