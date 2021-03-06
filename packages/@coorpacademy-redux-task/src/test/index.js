import test from 'ava';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {constant, size, last} from 'lodash/fp';
import createTask from '..';

const macro = async (t, input, expected) => {
  t.plan(1 + size(expected));
  const task = createTask(input);

  const expectedActions = [null, ...expected];
  const options = 'options';

  const {dispatch} = createStore(
    (state, action) => {
      const _expected = expectedActions.shift();
      if (_expected === null) return state;
      t.deepEqual(action, _expected);
      return state;
    },
    'state',
    applyMiddleware(ReduxThunk.withExtraArgument(options))
  );

  const result = await dispatch(task);

  t.deepEqual(last(expected), result);
};

test(
  'should create task',
  macro,
  {
    types: ['request', 'success', 'failure'],
    task: () => 'result',
    meta: 'meta'
  },
  [
    {
      type: 'request',
      meta: 'meta'
    },
    {
      type: 'success',
      meta: 'meta',
      payload: 'result'
    }
  ]
);

test(
  'should support async task',
  macro,
  {
    types: ['request', 'success', 'failure'],
    task: () => Promise.resolve('result')
  },
  [
    {
      type: 'request'
    },
    {
      type: 'success',
      payload: 'result'
    }
  ]
);

test(
  'should support async failed task',
  macro,
  {
    types: ['request', 'success', 'failure'],
    task: () => Promise.reject(new Error('result'))
  },
  [
    {
      type: 'request'
    },
    {
      type: 'failure',
      error: true,
      payload: new Error('result')
    }
  ]
);

test(
  'should support sync failed task',
  macro,
  {
    types: ['request', 'success', 'failure'],
    task: () => {
      throw new Error('result');
    }
  },
  [
    {
      type: 'request'
    },
    {
      type: 'failure',
      error: true,
      payload: new Error('result')
    }
  ]
);

test(
  'should support bailout',
  macro,
  {
    types: ['request', 'success', 'failure'],
    task: () => {},
    bailout: constant(true)
  },
  [
    {
      type: 'request'
    }
  ]
);

test(
  'should catch sync error',
  macro,
  {
    types: ['request', 'success', 'failure']
  },
  [
    {
      type: 'request'
    },
    {
      type: 'failure',
      error: true,
      payload: new TypeError('task is not a function')
    }
  ]
);
