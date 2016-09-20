import test from 'ava';
import {readFileSync} from 'fs';
import {join} from 'path';
import generatedContent from '../../scripts/generate-components-index';

test('index should be up to date', t => {
  const content = readFileSync(join(__dirname, '../index.js'), 'utf8');

  t.deepEqual(content, generatedContent, 'run `npm run generate:index` command');
});
