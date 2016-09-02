import test from 'ava';
import {checker, createValidate} from '../../validation';

test('should provide a validate function with warn', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions);
});

test('should provide a validate function with throw', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions, true);
});
