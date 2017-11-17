import {promisify} from 'util';
import {readFile} from 'fs';
import {execFile} from 'child_process';
import {join} from 'path';
import test from 'ava';

const readFileP = promisify(readFile);
const execFileP = promisify(execFile);

test('index should be up to date', async t => {
  const content = readFileP(join(__dirname, '../index.js'), 'utf8');
  const expected = execFileP('node', ['scripts/component-index.js', 'src', 'src/index.js'], {
    cwd: join(__dirname, '../..'),
    encoding: 'utf8'
  }).then(({stdout}) => stdout);

  t.deepEqual(await content, await expected, 'run `npm run generate:index` command');
});

test("storybook's index should be up to date", async t => {
  const content = readFileP(join(__dirname, '../../storybook/components.js'), 'utf8');

  const expected = execFileP(
    'node',
    ['scripts/storybook-index.js', 'src', 'storybook/components.js'],
    {
      cwd: join(__dirname, '../..'),
      encoding: 'utf8'
    }
  ).then(({stdout}) => stdout);

  t.deepEqual(await content, await expected, 'run `npm run generate:storybook` command');
});
