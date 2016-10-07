import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const sandboxConfig = ({
  devtool: 'source-map',
  output: {
    publicPath: '/dist'
  },

  entry: {
    angular: addHMR(join(__dirname, 'app'))
  },
  
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        __dirname,
        join(__dirname, 'src')
      ]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

export default sandboxConfig;
