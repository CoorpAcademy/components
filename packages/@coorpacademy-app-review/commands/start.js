/* eslint-disable no-console */
const chalk = require('chalk');
const liveServer = require('live-server');
const historyApiFallback = require('connect-history-api-fallback');
const build = require('./build-static-webapp.js');

const PUBLIC = 'public';

build()
  .then(() => {
    liveServer.start({
      root: PUBLIC,
      open: false,
      middleware: [historyApiFallback()]
    });
    console.log('☢️  server running:');
    console.log(chalk.bold.blue(`  - http://localhost:8080`));

    if (process.env.SERVICES === 'mocks') {
      console.log('Mocks are used.');
    } else {
      console.log('Services will fetch data from host included in token.');
    }

    console.log(' ');
    return;
  })
  .catch(error => {
    console.error('Server start error', error);
    throw new Error(error);
  });
