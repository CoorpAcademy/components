import test from 'ava';
import webpack from 'webpack';
import generateConfig from '..';

test('should provide a default config', t => {
  const config = generateConfig();
  t.is(config.entry, undefined);
  t.is(config.output.library, 'bundle');
  t.is(config.devtool, 'eval');
  t.is(config.module.rules.length, 3);
  t.is(config.plugins.length, 1);
});

test('should provide a production config', t => {
  const config = generateConfig('production');
  t.is(config.entry, undefined);
  t.is(config.output.library, 'bundle');
  t.is(config.devtool, false);
  t.is(config.module.rules.length, 3);
  t.is(config.plugins.length, 2);
});

test('should be validate by webpack schema', t => {
  t.notThrows(() => webpack.validate(generateConfig('development')));
  t.notThrows(() => webpack.validate(generateConfig('production')));
});
