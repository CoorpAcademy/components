import {readFile} from 'fs';
import {join} from 'path';
import test from 'ava';
import {Observable} from 'rxjs/Rx';
import split from 'lodash/fp/split';
import {readStorybookIndex$} from '../../scripts/storybook-index';

const readFile$ = file =>
  Observable.bindNodeCallback(readFile)(file, 'utf8')
    .map(split('\n'))
    .concatMap(Observable.from);

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
