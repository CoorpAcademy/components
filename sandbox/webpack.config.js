import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

module.exports = ({
  context: __dirname,
  devtool: 'source-map',

  entry: {
    main: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src/main')
    ],
    angular: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'angular/main')
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
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
        path.join(__dirname, 'src'),
        path.join(__dirname, 'angular'),
        path.join(__dirname, '../src')
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }]
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
