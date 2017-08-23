import {parse} from 'url';
import {
  createBrowserHistory as _createBrowserHistory,
  createMemoryHistory as _createMemoryHistory,
  createHashHistory as _createHashHistory
} from 'history';

export const useBasename = createHistory => options => {
  const {basename = ''} = options || {};

  const history = createHistory(options);

  return {
    ...history,
    createHref: location => {
      const locationObj = parse(location);
      if (locationObj.host || !locationObj.pathname) return location;
      return `${basename}${location}`;
    }
  };
};

export const createBrowserHistory = useBasename(_createBrowserHistory);
export const createMemoryHistory = useBasename(_createMemoryHistory);
export const createHashHistory = useBasename(_createHashHistory);
