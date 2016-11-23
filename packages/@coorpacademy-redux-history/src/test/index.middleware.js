import test from 'ava';
import {createMemoryHistory} from '@coorpacademy/history';
import {createStore, applyMiddleware} from 'redux';
import {
  historyReducer,
  historyMiddleware,
  createPushNavigate,
  createReplaceNavigate,
  createGoNavigate,
  createGoBackNavigate,
  createGoForwardNavigate
} from '..';

test.beforeEach(t => {
  const history = createMemoryHistory({
    initialEntries: ['/foo', '/bar', '/baz'],
    initialIndex: 1
  });

  const store = createStore(
    historyReducer,
    history.location,
    applyMiddleware(
      historyMiddleware({history})
    )
  );

  t.context.store = store;
});

test('should navigate on push', t => {
  const store = t.context.store;
  store.dispatch(createPushNavigate('/qux?quux#quuz'));
  const state = store.getState();

  t.is(state.pathname, '/qux');
  t.is(state.search, '?quux');
  t.is(state.hash, '#quuz');
  t.truthy(state.key);
});

test('should navigate on replace', t => {
  const store = t.context.store;
  store.dispatch(createReplaceNavigate('/qux?quux#quuz'));
  const state = store.getState();

  t.is(state.pathname, '/qux');
  t.is(state.search, '?quux');
  t.is(state.hash, '#quuz');
  t.truthy(state.key);
});

test('should navigate on go', t => {
  const store = t.context.store;
  store.dispatch(createGoNavigate(0));
  const state = store.getState();

  t.is(state.pathname, '/bar');
});

test('should navigate on goBack', t => {
  const store = t.context.store;
  store.dispatch(createGoBackNavigate());
  const state = store.getState();

  t.is(state.pathname, '/foo');
});

test('should navigate on goForward', t => {
  const store = t.context.store;
  store.dispatch(createGoForwardNavigate());
  const state = store.getState();

  t.is(state.pathname, '/baz');
});
