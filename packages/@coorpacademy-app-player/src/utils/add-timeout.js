import curryN from 'lodash/fp/curryN';

const addTimeout = curryN(2, (TIMEOUT, fun) => (...args) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(fun(...args));
    }, TIMEOUT)
  ));

export default addTimeout;
