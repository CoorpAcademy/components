import {applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import memoizeTask from '../utils/memoize-task';
import ErrorLogger from './error-logger';

const memoizeService = keyPath => options => {
  const service = get(keyPath, options);

  return set(keyPath, memoizeTask(service), options);
};

const wrapOptions = pipe(
  memoizeService('services.Progressions.acceptExtraLife'),
  memoizeService('services.Progressions.refuseExtraLife'),
  memoizeService('services.Progressions.postAnswer')
);

const middlewares = options => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(wrapOptions(options)), ErrorLogger(options)),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
};

export default middlewares;
