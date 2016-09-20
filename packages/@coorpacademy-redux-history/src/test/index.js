import test from 'ava';
import isFunction from 'lodash/fp/isFunction';

import {
  navigate,
  historyReducer,
  connectHistory
} from '..';

test('navigate should be a function', t => {
  t.true(isFunction(navigate));
});

test('historyReducer should be a function', t => {
  t.true(isFunction(historyReducer));
});

test('connectHistory should be a function', t => {
  t.true(isFunction(connectHistory));
});
