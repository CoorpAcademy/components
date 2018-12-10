import test from 'ava';
import {createStore} from 'redux';
import createMiddleware from '..';

const appOptions = {
  services: {
    error: () => {
      throw new Error('error logger should not have been called');
    }
  }
};

test('should apply redux-thunk', async t => {
  t.plan(5);

  const store = createStore(
    state => {
      t.pass();
      return state;
    },
    'state',
    createMiddleware(appOptions)
  );

  await store.dispatch({type: 1});
  return store.dispatch((dispatch, getState, options) => {
    t.is(options, appOptions);
    t.is(getState(), 'state');
    return dispatch({
      type: 2
    });
  });
});

test('should enable devtools', t => {
  t.plan(1);
  global.window = {
    __REDUX_DEVTOOLS_EXTENSION__: () => {
      t.pass();
      return f => f;
    }
  };

  createStore(state => state, 'state', createMiddleware(appOptions));
});
