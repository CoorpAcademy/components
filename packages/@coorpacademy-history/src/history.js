import {parse} from 'url';
import _createBrowserHistory from 'history/createBrowserHistory';
import _createMemoryHistory from 'history/createMemoryHistory';
import _createHashHistory from 'history/createHashHistory';

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
