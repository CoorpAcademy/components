import {AnyAction, applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {getServices} from '@coorpacademy/review-services';
import {identity} from 'lodash/fp';
import rootReducer, {StoreState} from './reducers';
import type {ThunkOptions, AppOptions} from './types/common';

export default function configureStore(options: AppOptions): Store<StoreState, AnyAction> {
  const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'app-review',
        trace: true,
        traceLimit: 25
      })
    : compose;

  const thunkOptions: ThunkOptions = {
    services: options.services || getServices(),
    callbackOnViewChanged: options.callbackOnViewChanged,
    appendVideoOptions: options.appendVideoOptions || identity
    // this identity is temporary added to avoir errors on mobile application,
    // while the function to compute the props is made
  };

  const thunkMiddleware = thunk.withExtraArgument(thunkOptions);

  const enhancer = _compose(applyMiddleware(thunkMiddleware));
  const store = createStore(rootReducer, undefined, enhancer);

  return store;
}
