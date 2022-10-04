import {AnyAction, applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import onViewChanged from './middlewares/on-view-change';
import rootReducer, {StoreState} from './reducers';
import {getServices} from './services';

import {AppOptions} from './types/common';

export default function configureStore(options: AppOptions): Store<StoreState, AnyAction> {
  const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'app-review',
        trace: true,
        traceLimit: 25
      })
    : compose;

  const thunkMiddleware = thunk.withExtraArgument({services: options.services || getServices()});
  let middlewares = [thunkMiddleware];

  if (options.callbackOnViewChanged) {
    middlewares = [...middlewares, onViewChanged(options.callbackOnViewChanged)];
  }

  const enhancer = _compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, undefined, enhancer);

  return store;
}
