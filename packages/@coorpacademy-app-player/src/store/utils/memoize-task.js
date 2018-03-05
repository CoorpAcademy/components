import memoize from 'lodash/fp/memoize';
import partial from 'lodash/fp/partial';

const memoizeTask = task => {
  const memoizedTask = memoize(task);

  return function(first, ...rest) {
    const callTaskWithArgs = partial(memoizedTask, [first, ...rest]);
    const promise = Promise.resolve(callTaskWithArgs());
    const clearCache = () => memoizedTask.cache.delete(first);

    promise.then(clearCache).catch(clearCache);

    return promise;
  };
};

export default memoizeTask;
