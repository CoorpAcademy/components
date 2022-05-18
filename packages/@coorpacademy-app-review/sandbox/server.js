import chalk from 'chalk';
import esbuild from 'esbuild';
import liveServer from 'live-server';
import historyApiFallback from 'connect-history-api-fallback';
import svgrPlugin from 'esbuild-plugin-svgr';

// -----------------------------------------------------------------------------

const SANDBOX = 'sandbox';
const entry = `${SANDBOX}/sandbox.js`;

// -----------------------------------------------------------------------------
// inspired by reactor start command https://github.com/uralys/reactor/blob/master/src/commands/start.js

const start = () => {
  console.log('☢️  building', {entry});

  esbuild
    .build({
      entryPoints: [entry],
      outfile: `${SANDBOX}/app.min.js`,
      format: 'cjs',
      loader: {
        '.js': 'jsx'
      },
      bundle: true,
      sourcemap: true,
      watch: true,
      plugins: [svgrPlugin()],
      define: {
        'process.env.NODE_ENV': '"development"',
        global: 'globalThis'
      },
    })
    .then(result => {
      console.log('☢️  server running:');
      console.log(chalk.bold.blue(`  - http://localhost:8080`))
      console.log(' ');

      liveServer.start({
        root: SANDBOX,
        open: false,
        middleware: [historyApiFallback()]
      });
    })
};

// -----------------------------------------------------------------------------

start();
