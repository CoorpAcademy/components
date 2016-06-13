import test from 'ava';
import { checker, createValidate } from '../../validation';

test('should provide a vaildate function', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions);
  t.pass();
});
