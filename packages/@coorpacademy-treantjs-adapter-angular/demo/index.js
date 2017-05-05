import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const app = express();

const compiler = webpack(config);

process.env.BABEL_ENV = 'es';
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler)
);

app.get('*', (req, res) => {
  res.send(
    `
    <body ng-app="app" ng-controller="main">
      <input ng-model="props.children" />
      <coorp-display-value props="props" context="context"></coorp-display-value>
      <script type="text/javascript" src="/dist/angular.js"></script>
    </body>
  `
  );
});

if (!module.parent) {
  app.listen(3001);
  process.stdout.write('Open your browser: http://localhost:3001\n');
}

export default app;
