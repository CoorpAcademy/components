import {readFileSync} from 'fs';
import {join} from 'path';
import test from 'ava';
import generatedComponentContent from '../../scripts/generate-components-index';
import generatedStorybookContent from '../../scripts/generate-storybook-index';

test('index should be up to date', t => {
  const content = readFileSync(join(__dirname, '../index.js'), 'utf8');

  t.deepEqual(content, generatedComponentContent, 'run `npm run generate:index` command');
});

test('storybook\'s index should be up to date', t => {
  const content = readFileSync(join(__dirname, '../../storybook/components.js'), 'utf8');

  t.deepEqual(content, generatedStorybookContent, 'run `npm run generate:storybook` command');
});
