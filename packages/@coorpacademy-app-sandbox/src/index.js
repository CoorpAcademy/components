const pkg = require('../package.json');
const createServer = require('./server');

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3100
};

const app = createServer(config);

if (!module.parent) {
  const PORT = config.port;
  const ENV = config.env;

  process.on('uncaughtException', err => {
    // eslint-disable-next-line no-console
    console.error('uncaughtException', err.stack || err);
    process.exit(1);
  });

  app.listen(PORT, () =>
    process.stdout.write(`${pkg.name}(${ENV}) listening on http://localhost:${PORT}`)
  );
}

module.exports = app;
