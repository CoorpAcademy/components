import {inspect} from 'util';
import {join} from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import defaultConfig from '../../../webpack.config.default';
import styleConfig from '../../../webpack.config.style';

const sandboxConfig = ({
  output: {
    publicPath: '/dist'
  },

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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

export default merge.smart(
  styleConfig,
  defaultConfig,
  sandboxConfig
);
