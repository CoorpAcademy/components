import test from 'ava';
import { checker, createValidate } from '../../validation';

const createFailure = conditions => {
  const validate = createValidate(conditions);
  return (t, props, children) => {
    t.plan(1);

    try {
      validate(props, children);
    }
    catch (error) {
      t.pass();
    }
  };
};

const createSuccess = conditions => {
  const validate = createValidate(conditions);
  return (t, props, children) => validate(props, children);
};

const noShape = checker.shape({});
const success = createSuccess(noShape);
test('should provide a success macro', success);

const conditions = checker.shape({foo: checker.string});
const failure = createFailure(conditions);
test('should provide a failure macro', failure);

export {
  createFailure,
  createSuccess
};
