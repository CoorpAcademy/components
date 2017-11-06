import test from 'ava';
import macro from '../../actions/test/helpers/macro';

const payloadError = new Error('Something wrong');
const loggerError = new Error('Logger Error');
const NORMAL_ACTION = {type: '@test/NORMAL_ACTION'};
const ERROR_ACTION = {
  type: '@test/ERROR_ACTION',
  error: true,
  payload: payloadError
};

test(
  'should not call Logger when an action does not have an error',
  macro,
  {},
  t => ({
    Logger: {
      error: e => {
        t.fail();
      }
    }
  }),
  NORMAL_ACTION,
  [NORMAL_ACTION],
  0
);

test(
  'should call Logger when an action have an error',
  macro,
  {},
  t => ({
    Logger: {
      error: e => {
        t.deepEqual(e, payloadError);
      }
    }
  }),
  ERROR_ACTION,
  [ERROR_ACTION],
  1
);

test(
  'should not call Logger which can throw an exception when an action does not have an error',
  macro,
  {},
  t => ({
    Logger: {
      error: e => {
        t.fail();
      }
    }
  }),
  NORMAL_ACTION,
  [NORMAL_ACTION],
  0
);

test(
  'should dispatch error using Logger',
  macro,
  {},
  t => ({
    Logger: {
      error: e => {
        t.pass();
        throw loggerError;
      }
    }
  }),
  ERROR_ACTION,
  [
    {
      type: '@@logger/ERROR',
      payload: {
        message: loggerError.message,
        stack: loggerError.stack
      }
    },
    ERROR_ACTION
  ],
  1
);
