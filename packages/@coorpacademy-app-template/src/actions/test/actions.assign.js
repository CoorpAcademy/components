import test from 'ava';
import {assign, ASSIGN} from '..';

test('should create an assign action', t => {
  const payload = {foo: 'bar'};
  t.deepEqual(assign(payload), {
    type: ASSIGN,
    payload
  });
});
