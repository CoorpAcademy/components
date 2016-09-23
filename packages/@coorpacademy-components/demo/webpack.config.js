import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackConfig from '@coorpacademy/components-bundler/webpack.config';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const sandboxConfig = ({
  output: {
    publicPath: '/dist'
  },

  entry: {
    components: addHMR(join(__dirname, 'client'))
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        join(__dirname, '../src'),
        join(__dirname, './')
      ]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

const config = merge.smart(
  webpackConfig,
  sandboxConfig
);

export default config;
