import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import {checker, createValidate} from '../../validation';

test('should provide a validate function with warn', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions);
  t.true(isFunction(validate));
});

test('should provide a validate function with throw', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions, true);
  t.true(isFunction(validate));
});
