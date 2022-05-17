import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import * as actionCreators from './actions';
import rootReducer from './reducers';

const preloadedState = undefined;

export default function configureStore(services) {
  const _compose = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

  const composeEnhancers = _compose({
    actionCreators,
    name: 'app-review',
    trace: true,
    traceLimit: 25
  });

  const composedEnhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
