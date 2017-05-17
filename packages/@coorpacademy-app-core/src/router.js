import constant from 'lodash/fp/constant';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isString from 'lodash/fp/isString';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import pathMatch from 'path-match';
import {LOCATION} from '@coorpacademy/redux-history';

const createMatch = pathMatch({
  sensitive: false,
  strict: false,
  end: false
});

export const createRouter = createRoutes => (...argz) => {
  const routes = map(
    ({path, view}) => ({
      match: isString(path) ? createMatch(path) : path,
      view
    }),
    createRoutes(...argz)
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

export const createRouterMiddleware = createRoutes => (...argz) => {
  const routes = map(
    ({path, actions}) => ({
      match: isString(path) ? createMatch(path) : path,
      actions
    }),
    createRoutes(...argz)
  );

  return ({dispatch, getState}) => next => async action => {
    if (action.type === LOCATION) {
      const currentPathname = get('route.pathname', getState());
      const pathname = getOr(currentPathname, 'payload.pathname', action);
      const {match, actions} = find(route => route.match(pathname), routes);
      const params = match(pathname);

      const updatedAction = await next(action); // eslint-disable-line callback-return
      await Promise.all(map(pipe(_action => _action(params), dispatch), actions));
      return constant(updatedAction);
    }

    return next(action);
  };
};
