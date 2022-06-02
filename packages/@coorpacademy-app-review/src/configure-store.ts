import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import {State as NavigationState} from './reducers/navigation';
import {State as TokenState} from './reducers/token';
import onStartApp from './middlewares/on-start-app';
import {Slide} from './types/slide';

const preloadedState = undefined;

// -----------------------------------------------------------------------------

export default async function configureStore() {
  let _compose = compose;

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const {composeWithDevTools} = await import('redux-devtools-extension');
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
  slide: Slide;
  token: TokenState;
};
