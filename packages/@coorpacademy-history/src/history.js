import {
  createBrowserHistory as _createBrowserHistory,
  createMemoryHistory as _createMemoryHistory,
  createHashHistory as _createHashHistory
} from 'history';
import browserEnv from 'browser-env';

browserEnv();

export const useBasename = createHistory => options => {
  const {basename} = options || {};

  const history = createHistory(options);

  return {
    ...history,
    createHref: location => {
      if (!basename) return history.createHref(location);
      const basenameLocation = typeof basename === 'string' ? basename : basename.pathname;
      return `${basenameLocation}${history.createHref(location)}`;
    }
  };
};

export const createBrowserHistory = useBasename(_createBrowserHistory);
export const createMemoryHistory = useBasename(_createMemoryHistory);
export const createHashHistory = _createHashHistory;
