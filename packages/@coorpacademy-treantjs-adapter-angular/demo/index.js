import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import map from 'lodash/fp/map';
import config from './webpack.config';

const engines = [
  'Virtualdom',
  'React',
  'Snabbdom'
];

const app = express();

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler)
);

app.get('*', (req, res) => {
  res.send(`
    <body ng-app="app" ng-controller="main">
      <input ng-model="props.value"/>
      ${map(name => `
        <${name}-title props="props"></${name}-title>
      `, engines).join('')}
      <script type="text/javascript" src="/dist/angular.js"></script>
    </body>
  `);
});

if (!module.parent)
  app.listen(3004);

export default app;
