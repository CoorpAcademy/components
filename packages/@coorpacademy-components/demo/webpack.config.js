import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const hash = '[folder]__[local]';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const NODE_ENV = process.env.NODE_ENV || 'development';

export default ({
  devtool: 'source-map',
  output: {
    library: 'Coorponents',
    filename: '[name].js',
    publicPath: '/dist'
  },

  entry: {
    components: addHMR(join(__dirname, 'client'))
  },

  module: {
    rules: [{
      test: /\.json$/,
      use: ['json-loader']
    }, {
      test: /\.(ttf|otf|eot|svg|woff)$/,
      use: ['file-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
          modules: true,
          importLoaders: 1,
          localIdentName: `${hash}`
        }
      }, {
        loader: 'postcss-loader'
      }]
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      },
      minimize: true,
      debug: false
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
