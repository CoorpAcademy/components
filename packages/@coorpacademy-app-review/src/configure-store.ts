import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

import {State as NavigationState} from './reducers/navigation';
import {State as TokenState} from './reducers/token';
import onStartApp from './middlewares/on-start-app';

const preloadedState = undefined;

// -----------------------------------------------------------------------------

export default function configureStore() {
  const _compose =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools({
          name: 'app-review',
          trace: true,
          traceLimit: 25
        })
      : compose;

  const enhancer = _compose(applyMiddleware(thunk, onStartApp));
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}

// -----------------------------------------------------------------------------

export type StoreState = {
  navigation: NavigationState;
  token: TokenState;
};
