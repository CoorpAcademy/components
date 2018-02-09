import path from 'path';
import test from 'ava';
import glob from 'glob';
import locales from '../../../locales/en/player';
import localesUseMacro from '../../../../../test/helpers/locales';

const files = glob
  .sync(path.join(__dirname, '../**/*.js'))
  .filter(file => !file.includes('/test/'));

test(
  'All locale keys should be used, and used properly',
  localesUseMacro,
  __dirname,
  files,
  locales
);
