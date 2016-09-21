#! /usr/bin/env node

const webpack = require('webpack');
const {join} = require('path');
const createConfig = require('./webpack.bundler.config');

// bundler bundle.js --dist path/to/dist/
const argv = require('minimist')(process.argv.slice(2));
const factories = join(process.cwd(), argv._[0]);
const dist = join(process.cwd(), argv.dist);

const config = createConfig(factories, dist);

webpack(config, function(err, stats) {
  process.stdout.write(`[components:bundler]' ${stats.toString({
    chunks: false, // Makes the build much quieter
    colors: true
  })}`);
});
