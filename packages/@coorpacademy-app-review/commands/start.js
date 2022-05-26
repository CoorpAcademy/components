const chalk = require('chalk');
const liveServer = require('live-server');
const historyApiFallback = require('connect-history-api-fallback');
const build = require('./build-static-webapp.js');

const PUBLIC = 'public';

build().then(() => {
  liveServer.start({
    root: PUBLIC,
    open: false,
    middleware: [historyApiFallback()]
  });

  console.log('☢️  server running:');
  console.log(chalk.bold.blue(`  - http://localhost:8080`));
  console.log(' ');
});
