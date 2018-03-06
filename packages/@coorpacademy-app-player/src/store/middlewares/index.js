import {applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import memoizeTask from '../utils/memoize-task';
import ErrorLogger from './error-logger';

const memoizeService = (options, keyPath) => {
  const service = get(keyPath, options);

  return service ? set(keyPath, memoizeTask(service), options) : options;
};

const memoizeMoveTypeServices = options =>
  reduce(memoizeService, options, [
    'services.Progressions.acceptExtraLife',
    'services.Progressions.refuseExtraLife',
    'services.Progressions.postAnswer'
  ]);

const middlewares = options => {
  const optionsWithMemoizedServices = memoizeMoveTypeServices(options);

  return compose(
    applyMiddleware(
      ReduxThunk.withExtraArgument(optionsWithMemoizedServices),
      ErrorLogger(options)
    ),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
};

export default middlewares;
