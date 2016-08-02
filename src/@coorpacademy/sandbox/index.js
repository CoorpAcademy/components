import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import config from './webpack.config';

const engines = [
  'VirtualDom',
  'React',
  'SnabbDom'
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

// app.get('/angular', (req, res) => {
//   res.send(`
//     <body ng-app="app" ng-controller="main">
//       <input ng-model="props.value"/>
//       ${map((name => `
//         <${name}-title props="props"></${name}-title>
//       `).join('')}
//       <script type="text/javascript" src="/dist/angular.js"></script>
//     </body>
//   `);
// });

app.get('/:engine', (req, res) => {
  res.send(`
    <div id="app"></div>
    <script>window.engine = '${req.params.engine}'</script>
    <script type="text/javascript" src="/dist/main.js"></script>
  `);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Sandbox</h1>
    <ul>
      ${map(name => `<li><a href="/${name}">${name}</a></li>`, engines).join('')}
    </ul>
    <h2>Adapteur</h2>
    <ul>
      <li><a href="/angular">angular</a></li>
    </lu>
  `);
});

app.listen(3003);
