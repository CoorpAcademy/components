#! /usr/bin/env node

// bundle-components input/to/bundle/index.js -o path/to/dist/
//         optional [-s path/to/src/] (default src/)
//         optional [-a angular/dust]

const bundler = '[components:bundler]';
process.stdout.write(`${bundler} preparing a bundle\n`);

const {join} = require('path');
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));
const createConfig = require('../webpack.bundler.config');

const input = join(process.cwd(), argv._[0]);
const dist = join(process.cwd(), argv.o);
const src = argv.s || 'src/';
const adapter = argv.a;

process.stdout.write(`${bundler}    input: ${argv._[0]}\n`);
process.stdout.write(`${bundler}    output: ${argv.o}\n`);
process.stdout.write(`${bundler}    src: ${src}\n`);
process.stdout.write(adapter ? `${bundler} adapter: ${adapter}\n` : '');
process.stdout.write(`${bundler} webpack is running...\n`);

const config = createConfig(src, input, dist);

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
