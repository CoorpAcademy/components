import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import {create} from '..';

test('app-player should provide a create function', t => {
  t.is(isFunction(create), true);
});
