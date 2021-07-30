import test from 'ava';
import {post} from '../comments';

test('post should not do anything', t => {
  t.is(post(), undefined);
});
