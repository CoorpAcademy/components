import {find, get, getOr, constant, isString, map} from 'lodash/fp';
import pathMatch from 'path-match';
import {LOCATION} from '@coorpacademy/redux-history';

const createMatch = pathMatch({
  sensitive: false,
  strict: false,
  end: false
});

export const createRouter = routeDefinitions => {
  const routes = map(
    ({path, match = () => true, view}) => ({
      path: isString(path) ? createMatch(path) : path,
      match,
      view
    }),
    routeDefinitions
  );

  return state => {
    const currentPathname = get('route.pathname', state);
    const {path, view} = find(route => {
      const params_ = route.path(currentPathname);
      return params_ && route.match(params_, state);
    }, routes);
    const params = path(currentPathname);
    return {
      params,
      view
    };
  };
};

export const createRouterMiddleware = routeDefinitions => {
  const routes = map(
    ({path, match = () => true, action}) => ({
      path: isString(path) ? createMatch(path) : path,
      match,
      action
    }),
    routeDefinitions
  );

  return store => next => async action => {
    if (action.type === LOCATION) {
      const state = store.getState();
      const currentPathname = get('route.pathname', state);
      const pathname = getOr(currentPathname, 'payload.pathname', action);
      const route = find(route_ => {
        const params_ = route_.path(pathname);
        return params_ && route_.match(params_, state);
      }, routes);

      if (!route) return next(action);

      const {path, action: routeAction} = route;
      const params = path(pathname);
      // eslint-disable-next-line n/callback-return
      const updatedAction = await next(action);

      await store.dispatch(routeAction(params));
      return constant(updatedAction);
    }

    return next(action);
  };
};
