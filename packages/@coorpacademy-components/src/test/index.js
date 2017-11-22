import {readFile} from 'fs';
import {join} from 'path';
import test from 'ava';
import {Observable} from 'rxjs/Rx';
import split from 'lodash/fp/split';
import {readComponentIndex$} from '../../scripts/component-index';
import {readStorybookIndex$} from '../../scripts/storybook-index';

const readFile$ = file =>
  Observable.bindNodeCallback(readFile)(file, 'utf8')
    .map(split('\n'))
    .concatMap(Observable.from);

test('index should be up to date', async t => {
  const cwd = join(__dirname, '..');
  const target = join(__dirname, '../index.js');
  const expected$ = readComponentIndex$(cwd, target).concat(Observable.of(''));
  const actual$ = readFile$(target);

  t.true(
    await expected$
      .sequenceEqual(actual$, (expected, actual) => {
        t.deepEqual(expected, actual, 'run `npm run generate:index` command');
        return true;
      })
      .toPromise(),
    "Component's index is not complete, run `npm run generate:index` command"
  );
});

test("storybook's index should be up to date", async t => {
  const cwd = join(__dirname, '..');
  const target = join(__dirname, '../../storybook/components.js');
  const expected$ = readStorybookIndex$(cwd, target).concat(Observable.of(''));
  const actual$ = readFile$(target);

  t.true(
    await expected$
      .sequenceEqual(actual$, (expected, actual) => {
        t.deepEqual(expected, actual, 'run `npm run generate:storybook` command');
        return true;
      })
      .toPromise(),
    "Storybook's index is not complete, run `npm run generate:storybook` command"
  );
});
