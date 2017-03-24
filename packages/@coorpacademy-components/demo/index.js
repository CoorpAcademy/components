import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import ssrMiddleware from './ssr';

const app = express();
const port = process.env.PORT || 3004;

process.env.BABEL_ENV = 'es';
const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler)
);

app.use('/', ssrMiddleware);

if (!module.parent) {
  app.listen(port);
  process.stdout.write(`Open your browser: http://localhost:${port}\n`);
}

export default app;
