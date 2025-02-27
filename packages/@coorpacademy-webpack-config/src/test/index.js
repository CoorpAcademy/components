import test from 'ava';
import {join} from 'path';
import webpack from 'webpack';
import generateConfig, {getLocalIdent} from '..';

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

test('should include lodash babel plugin by default', t => {
  const config = generateConfig('production');
  t.truthy(
    config.module.rules.find(el => el.loader === 'babel-loader').options.plugins.includes('lodash')
  );
});

test('should be validate by webpack schema', t => {
  t.notThrows(() => webpack.validate(generateConfig('development')));
  t.notThrows(() => webpack.validate(generateConfig('production')));
  t.notThrows(() => webpack.validate(generateConfig('development'), {esModules: true}));
  t.notThrows(() => webpack.validate(generateConfig('development'), {esModules: false}));
  t.notThrows(() => webpack.validate(generateConfig('development'), {additionalPlugins: []}));
});

test('should hash className', t => {
  t.is(
    getLocalIdent(
      {
        resourcePath: join(
          process.cwd(),
          'node_modules/@coorpacademy/components/es/atom/provider/style.css'
        )
      },
      '',
      'wrapper'
    ),
    'wrapper-QDgbU'
  );
});
