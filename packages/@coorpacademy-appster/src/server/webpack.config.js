const join = require('path').join;
const concat = require('lodash/fp/concat');
const webpack = require('webpack');

const hash = '[folder]__[local]';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (name, input) => ({
  entry: {
    [name]: addHMR([
      'babel-polyfill',
      input
    ])
  },
  output: {
    library: name,
    filename: '[name].js',
    publicPath: '/dist'
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(ttf|otf|eot|svg|woff)$/,
      loader: 'file'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: [
        join(__dirname, '../app'),
        input
      ]
    }, {
      test: /\.css$/,
      loader: `style!css?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss`
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
