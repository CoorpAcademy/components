import ReduxThunk from 'redux-thunk';
import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import memoizeTask from '../utils/memoize-task';

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

const ReduxThunkMemoized = options => {
  const optionsWithMemoizedServices = memoizeMoveTypeServices(options);
  return ReduxThunk.withExtraArgument(optionsWithMemoizedServices);
};

export default ReduxThunkMemoized;
