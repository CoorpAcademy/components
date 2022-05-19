import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

const preloadedState = undefined;

export default function configureStore(services) {
  const _compose =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools({
          name: 'app-review',
          trace: true,
          traceLimit: 25
        })
      : compose;

  const enhancer = _compose(applyMiddleware(thunk));
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}
