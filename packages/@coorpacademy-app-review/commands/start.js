import chalk from 'chalk';
import liveServer from 'live-server';
import historyApiFallback from 'connect-history-api-fallback';
import build from './build-static-webapp.js';

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
