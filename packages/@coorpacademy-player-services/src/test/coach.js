import test from 'ava';
import {startChat} from '../coach';

test('startChat should not do anything', t => {
  t.is(startChat(), undefined);
});
