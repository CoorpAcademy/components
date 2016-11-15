import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';

const hash = '[folder]__[local]';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const NODE_ENV = process.env.NODE_ENV || 'development';

export default ({
  output: {
    library: 'Coorponents',
    filename: '[name].js',
    publicPath: '/dist'
  },

  entry: {
    components: addHMR(join(__dirname, 'client'))
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(ttf|otf|eot|svg|woff)$/,
      loader: 'file-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        join(__dirname, '../src'),
        join(__dirname, './')
      ]
    }, {
      test: /\.css$/,
      loader: `style-loader!css-loader?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss-loader`
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
