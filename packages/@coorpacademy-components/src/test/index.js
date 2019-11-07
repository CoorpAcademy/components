import {readFile} from 'fs';
import {join} from 'path';
import test from 'ava';
import {split} from 'lodash/fp';
import {of, from, bindNodeCallback} from 'rxjs';
import {map, concat, concatMap, sequenceEqual} from 'rxjs/operators';
import {readStorybookIndex$} from '../../scripts/storybook-index';

const readFile$ = file =>
  bindNodeCallback(readFile)(file, 'utf8').pipe(
    map(split('\n')),
    concatMap(from)
  );

test("storybook's index should be up to date", async t => {
  const cwd = join(__dirname, '..');
  const target = join(__dirname, '../../storybook/components.js');
  const expected$ = readStorybookIndex$(cwd, target).pipe(concat(of('')));
  const actual$ = readFile$(target);

  t.true(
    await expected$
      .pipe(
        sequenceEqual(actual$, (expected, actual) => {
          t.deepEqual(expected, actual, 'run `npm run generate:storybook` command');
          return true;
        })
      )
      .toPromise(),
    "Storybook's index is not complete, run `npm run generate:storybook` command"
  );
});
