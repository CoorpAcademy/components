import test from 'ava';
import {intersection, keys, pipe, size} from 'lodash/fp';
import reducer from '..';

test('ui reducer exposes expected keys', t => {
  const state = reducer(undefined, {type: '@@INIT'});
  const expectedKeys = [
    'answers',
    'coaches',
    'comments',
    'corrections',
    'current',
    'location',
    'route',
    'tourguide',
    'tourguideTracking'
  ];
  const sharedCount = pipe(keys, intersection(expectedKeys), size)(state);
  t.is(sharedCount, size(expectedKeys));
});
