import {AnyAction, applyMiddleware, compose, createStore, EmptyObject, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import onStartApp from './middlewares/on-start-app';

import {StoreState} from './types/store-state';

const preloadedState: unknown = undefined;

// -----------------------------------------------------------------------------

export default function configureStore(): Store<EmptyObject & StoreState, AnyAction> & {
  dispatch: {};
} {
  // let _compose = compose;

  // if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  //   const {composeWithDevTools} = await import('redux-devtools-extension');
  //   _compose = composeWithDevTools({
  //     name: 'app-review',
  //     trace: true,
  //     traceLimit: 25
  //   });
  // }
  const {composeWithDevTools} = await import('redux-devtools-extension');
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
