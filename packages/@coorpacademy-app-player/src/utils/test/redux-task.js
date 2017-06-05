import test from 'ava';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import constant from 'lodash/fp/constant';
import size from 'lodash/fp/size';
import last from 'lodash/fp/last';
import createTask from '../redux-task';

const macro = async (t, input, expected) => {
  t.plan(2 + size(expected));
  const task = createTask(input);

  const expectedActions = [{type: '@@redux/INIT'}, ...expected];
  const options = 'options';

  const {dispatch} = createStore(
    (_state, _action) => {
      t.deepEqual(_action, expectedActions.shift());
      return _state;
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
