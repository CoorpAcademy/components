import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import join from 'lodash/fp/join';
import keys from 'lodash/fp/keys';
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

app.get('/angular', (req, res) => {
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

const fonts = [
  '//fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&amp;ver=4.5.2', // eslint-disable-line max-len
  '//fonts.googleapis.com/css?family=Open+Sans&amp;ver=4.5.2'
];

app.get('/:engine*', (req, res) => {
  res.send(`
    ${join('', map(font => `<link rel="stylesheet" href="${font}"/>`, fonts))}
    <div id="app"></div>
    <script>window.engine = '${req.params.engine}'</script>
    <script type="text/javascript" src="/dist/main.js"></script>
  `);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Sandbox</h1>
    <ul>
      ${map(name => `<li><a href="/${name}/">${name}</a></li>`, engines).join('')}
    </ul>
    <h2>Adapteur</h2>
    <ul>
      <li><a href="/angular">angular</a></li>
    </lu>
  `);
});

app.listen(3004);
