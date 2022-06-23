import {AnyAction, applyMiddleware, compose, createStore, EmptyObject, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import onStartApp from './middlewares/on-start-app';

import {StoreState} from './types/store-state';

const preloadedState: unknown = undefined;

// -----------------------------------------------------------------------------

export default async function configureStore(): Promise<
  Store<EmptyObject & StoreState, AnyAction> & {
    dispatch: {};
  }
> {
  const isExtensionEnabled = typeof window !== 'undefined' && !!window.__REDUX_DEVTOOLS_EXTENSION__;
  const isProd = process.env.NODE_ENV === 'production';

  const {composeWithDevTools} = isProd
    ? {composeWithDevTools: null}
    : // eslint-disable-next-line node/no-unsupported-features/es-syntax, import/dynamic-import-chunkname
      await import('redux-devtools-extension');
  const _compose =
    !isProd && isExtensionEnabled
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
