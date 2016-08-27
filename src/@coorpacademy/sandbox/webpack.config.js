import {join} from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

module.exports = ({
  context: __dirname,
  devtool: 'source-map',

  entry: {
    main: [
      'webpack-hot-middleware/client',
      join(__dirname, 'src/main')
    ],
    angular: [
      'webpack-hot-middleware/client',
      join(__dirname, 'angular/main')
    ]
  },

  output: {
    filename: '[name].js',
    path: join(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: [
        join(__dirname, '../..')
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }, {
      test: /\.(ttf|otf|eot|svg|woff)$/,
      loader: 'file-loader'
    }]
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    nested
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});
