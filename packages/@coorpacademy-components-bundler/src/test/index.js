import {join} from 'path';
import test from 'ava';
import last from 'lodash/fp/last';

test('createConfig should override defualt wbpack config', t => {
  const createConfig = require('../../webpack.bundler.config');

  const config = createConfig('foo', 'bar', 'baz');
  t.is(config.entry.bundle, 'bar');
  t.is(config.output.library, 'Coorponents');
  t.is(config.output.path, 'baz');

  const babelInclude = last(config.module.loaders).include;
  t.is(babelInclude, join(process.cwd(), 'foo'));
});
