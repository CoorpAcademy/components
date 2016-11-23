import test from 'ava';
import {createMemoryHistory} from '@coorpacademy/history';
import {createStore, applyMiddleware} from 'redux';
import {
  LOCATION,
  historyReducer,
  historyMiddleware,
  syncStoreWithHistory
} from '..';

test('should navigate on push', t => {
  const history = createMemoryHistory({
    initialEntries: ['/foo']
  });

  const store = createStore(
    historyReducer,
    applyMiddleware(
      historyMiddleware({history})
    )
  );

  const action = syncStoreWithHistory(store, history);
  const state = store.getState();

  t.is(action.type, LOCATION);
  t.is(action.payload.pathname, '/foo');
  t.is(action.payload, state);
});
