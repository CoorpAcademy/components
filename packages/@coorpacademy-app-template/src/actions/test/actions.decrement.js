import test from 'ava';
import {decrement, DECREMENT} from '..';

test('should create an decrement action', t => {
  t.deepEqual(decrement(), {
    type: DECREMENT
  });
});
