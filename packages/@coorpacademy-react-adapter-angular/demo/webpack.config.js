import {join} from 'path';
import {concat} from 'lodash/fp';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const addHMR = entries => {
  if (isProduction) return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const sandboxConfig = {
  mode: isProduction ? 'production' : 'development',

  output: {
    publicPath: '/dist'
  },

  entry: {
    adapterAngular: addHMR(join(__dirname, 'app'))
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]
};

export default sandboxConfig;
