import test from 'ava';
import {intersection, keys, pipe, size} from 'lodash/fp';
import reducer from '..';

test('data reducer exposes expected keys', t => {
  const state = reducer(undefined, {type: '@@INIT'});
  const expectedKeys = [
    'answers',
    'comments',
    'configs',
    'contents',
    'clues',
    'exitNodes',
    'progressions',
    'rank',
    'recommendations',
    'nextContent',
    'videos'
  ];
  const sharedCount = pipe(keys, intersection(expectedKeys), size)(state);
  t.is(sharedCount, size(expectedKeys));
});
