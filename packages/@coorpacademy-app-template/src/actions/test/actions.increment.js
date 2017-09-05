import test from 'ava';
import {increment, INCREMENT} from '..';

test('should create an increment action', t => {
  t.deepEqual(increment(), {
    type: INCREMENT
  });
});
