#! /usr/bin/env node

// bundle-components input/to/bundle/index.js -o path/to/dist/
//         optional [-s path/to/src/] (default src/)
//         optional [-a angular/dust]
//         optional [--cssScope "#catalog"]

if (!module.parent) {
  const bundler = '[components:bundler]';
  process.stdout.write(`${bundler} preparing a bundle\n`);

  const {join} = require('path');
  const webpack = require('webpack');
  const argv = require('minimist')(process.argv.slice(2));
  const {componentsConfig} = require('./webpack-config');

  const input = join(process.cwd(), argv._[0]);
  const dist = join(process.cwd(), argv.o);
  const src = argv.s || 'src/';
  const adapter = argv.a;
  const cssScope = argv.cssScope;

  process.stdout.write(`${bundler}    input: ${argv._[0]}\n`);
  process.stdout.write(`${bundler}    output: ${argv.o}\n`);
  process.stdout.write(`${bundler}    src: ${src}\n`);
  process.stdout.write(adapter ? `${bundler} adapter: ${adapter}\n` : '');
  process.stdout.write(cssScope ? `${bundler} cssScope: ${cssScope}\n` : '');
  process.stdout.write(`${bundler} webpack is running...\n`);

  const config = componentsConfig(src, input, dist, cssScope);

  webpack(config, function(err, stats) {
    if (err) {
      process.stderr.write(err.stack);
      process.exit(1);
    }

    const statsOutput = stats.toString(config.stats || 'none');
    process.stdout.write(`${bundler} ${statsOutput}`);

    if (stats.hasErrors()) {
      process.exit(1);
    }
  });
}
