#! /usr/bin/env node

const webpack = require('webpack');
const {join} = require('path');
const createConfig = require('./webpack.bundler.config');

const adapt = (factories, adapter) => {
  switch (adapter) {
    case 'angular': {
      // PB ES5/ES6
      const treant = require('./src/@treantjs/core');
      const engine = require('./src/@treantjs/engine-virtual-dom');
      const createDirectives = require('./src/@treantjs/adapter-angular');
      const setup = app => {
        createDirectives(app, treant, engine, factories);
      };
      return {setup};
    }
    default:
      return factories;
  }
};

// bundler bundle.js [-a angular/dust] -o path/to/dist/
const argv = require('minimist')(process.argv.slice(2));
const factories = join(process.cwd(), argv._[0]);
const dist = join(process.cwd(), argv.o);
const adapter = argv.a;
const bundler = '[components:bundler]';

process.stdout.write(`${bundler} preparing a bundle with: ${argv._[0]}\n`);
process.stdout.write(adapter ? `${bundler} adapter: ${adapter}\n` : '');
process.stdout.write(`${bundler} webpack is running...\n`);

const config = createConfig(adapt(factories, adapter), dist);

webpack(config, function(err, stats) {
  process.stdout.write(`${bundler} ${stats.toString({
    chunks: false, // Makes the build much quieter
    colors: true
  })}`);
});
