import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import createDirective from '..';

test('should expose a function', t => {
  t.true(isFunction(createDirective));
});
