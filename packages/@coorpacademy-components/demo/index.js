import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import map from 'lodash/fp/map';
import config from './webpack.config';

import ssrMiddleware from './ssr';

const engines = [
  'Virtualdom',
  'React',
  'Snabbdom'
];

const app = express();

process.env.BABEL_ENV='es';
const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler)
);

app.use('/:engine', ssrMiddleware);

app.get('/', (req, res) => {
  res.send(`
    <h1>Sandbox</h1>
    <ul>
      ${map(name => `<li><a href="/${name}/">${name}</a></li>`, engines).join('')}
    </ul>
  `);
});


if (!module.parent) {
  app.listen(3004);
  console.log('Open your browser: http://localhost:3004');
}

export default app;
