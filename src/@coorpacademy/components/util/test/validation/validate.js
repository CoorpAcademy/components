import test from 'ava';
import {checker, createValidate} from '../../validation';

test('should provide a validate function', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions);
  t.pass();
});
