import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import isString from 'lodash/fp/isString';
import map from 'lodash/fp/map';
import pathMatch from 'path-match';

const createMatch = pathMatch({
  sensitive: false,
  strict: false,
  end: false
});

export const createRouter = routeDefinitions => (options = {}) => dispatch => {
  const routes = map(
    ({path, view}) => ({
      match: isString(path) ? createMatch(path) : path,
      view: view(options)(dispatch)
    }),
    routeDefinitions
  );

  const {routePath = 'route'} = options;
  return state => {
    const {pathname} = get(routePath, state);
    const {match, view} = find(route => route.match(pathname), routes);

    const params = match(pathname);
    return view(state, params);
  };
};

export const createRouterMiddleware = (routeDefinitions, LOCATION) => {
  const routes = map(
    ({path, action}) => ({
      match: isString(path) ? createMatch(path) : path,
      action
    }),
    routeDefinitions
  );

  return ({dispatch}) => next => async action => {
    if (action.type !== LOCATION) return next(action);

    const {pathname} = action.payload;
    const {match, action: _action} = find(route => route.match(pathname), routes);
    const params = match(pathname);
    const actionReturn = await next(action); // eslint-disable-line callback-return
    await dispatch(_action(params));
    return actionReturn;
  };
};
