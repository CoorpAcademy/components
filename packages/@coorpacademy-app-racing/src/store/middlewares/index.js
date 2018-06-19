import {applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import ErrorLogger from './error-logger';

const middlewares = (options, sagaMiddleware) => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(options), ErrorLogger(options), sagaMiddleware),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
};

export default middlewares;
