import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import constant from 'lodash/fp/constant';
import isString from 'lodash/fp/isString';
import map from 'lodash/fp/map';
import pathMatch from 'path-match';
import {LOCATION} from '@coorpacademy/redux-history';

const createMatch = pathMatch({
  sensitive: false,
  strict: false,
  end: false
});

export const createRouter = routeDefinitions => {
  const routes = map(
    ({path, view}) => ({
      match: isString(path) ? createMatch(path) : path,
      view
    }),
    routeDefinitions
  );

  return ({pathname} = {}) => {
    const {match, view} = find(route => route.match(pathname), routes);
    const params = match(pathname);
    return {
      params,
      view
    };
  };
};

export const createRouterMiddleware = routeDefinitions => {
  const routes = map(
    ({path, actions, action}) => ({
      match: isString(path) ? createMatch(path) : path,
      action
    }),
    routeDefinitions
  );

  return store => next => async action => {
    if (action.type === LOCATION) {
      const currentPathname = get('route.pathname', store.getState());
      const pathname = getOr(currentPathname, 'payload.pathname', action);
      const {match, action: routeAction} = find(route => route.match(pathname), routes);
      const params = match(pathname);
      const updatedAction = await next(action); // eslint-disable-line callback-return

      await store.dispatch(routeAction(params));
      return constant(updatedAction);
    }

    return next(action);
  };
};
