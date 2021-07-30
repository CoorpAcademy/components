import test from 'ava';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunkMemoized from '../redux-thunk-memoized';

const createMiddlewares = options => applyMiddleware(ReduxThunkMemoized(options));

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
    createMiddlewares(appOptions)
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
