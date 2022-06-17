import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import {State as NavigationState} from './reducers/navigation';
import {State as TokenState} from './reducers/token';
import onStartApp from './middlewares/on-start-app';

const preloadedState = undefined;

// -----------------------------------------------------------------------------

export default function configureStore() {
  let _compose = compose;

  // if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const composeWithDevTools = require('redux-devtools-extension').default;
    _compose = composeWithDevTools({
      name: 'app-review',
      trace: true,
      traceLimit: 25
    });
  }

  const enhancer = _compose(applyMiddleware(thunk, onStartApp));
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}

// -----------------------------------------------------------------------------

export type StoreState = {
  navigation: NavigationState;
  token: TokenState;
};
