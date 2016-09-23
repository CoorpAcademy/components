#! /usr/bin/env node

const webpack = require('webpack');
const {join} = require('path');
const createConfig = require('../webpack.bundler.config');

// bundler bundle.js [-a angular/dust] -o path/to/dist/
const argv = require('minimist')(process.argv.slice(2));
const input = join(process.cwd(), argv._[0]);
const dist = join(process.cwd(), argv.o);
const adapter = argv.a;
const bundler = '[components:bundler]';

process.stdout.write(`${bundler} preparing a bundle with: ${argv._[0]}\n`);
process.stdout.write(adapter ? `${bundler} adapter: ${adapter}\n` : '');
process.stdout.write(`${bundler} webpack is running...\n`);

const config = createConfig(input, dist);
console.log(config);

webpack(config, function(err, stats) {
  if (err) {
    process.stderr.write(err.stack);
    return;
  }

  process.stdout.write(`${bundler} ${stats.toString({
    chunks: false, // Makes the build much quieter
    colors: true
  })}`);
});
