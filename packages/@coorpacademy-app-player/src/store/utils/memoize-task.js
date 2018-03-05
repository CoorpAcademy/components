import memoize from 'lodash/fp/memoize';
import partial from 'lodash/fp/partial';

export const _memoizeTask = _memoize => task => {
  const memoizedTask = _memoize(task);

  return function(first, ...rest) {
    const callTaskWithArgs = partial(memoizedTask, [first, ...rest]);
    const promise = Promise.resolve(callTaskWithArgs());

    return promise
      .then(res => {
        memoizedTask.cache.delete(first);
        return res;
      })
      .catch(taskError => {
        memoizedTask.cache.delete(first);
        throw taskError;
      });
  };
};

const memoizeTask = _memoizeTask(memoize);

export default memoizeTask;
