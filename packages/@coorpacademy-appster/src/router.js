import constant from 'lodash/fp/constant';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isString from 'lodash/fp/isString';
import map from 'lodash/fp/map';
import pathMatch from 'path-match';
import {NAVIGATE} from '@coorpacademy/redux-history';

const createMatch = pathMatch({
  sensitive: false,
  strict: false,
  end: false
});

export const createRouter = createRoutes => (...argz) => {
  const routes = map(({path, view}) => ({
    match: isString(path) ? createMatch(path) : path,
    view
  }), createRoutes(...argz));

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
  const routes = map(({path, actions}) => ({
    match: isString(path) ? createMatch(path) : path,
    actions
  }), createRoutes(...argz));

  return store => next => action => {
    if (action.type === NAVIGATE) {
      const currentPathname = get('route.pathname', store.getState());
      const pathname = getOr(currentPathname, 'payload.pathname', action);
      const {match, actions} = find(route => route.match(pathname), routes);
      const params = match(pathname);

      return next(action).then(updatedAction => {
        const state = store.getState();
        return Promise.all(// eslint-disable-line promise/no-nesting
          map(_action => _action(store.dispatch, {state, params}), actions)
        ).then(constant(updatedAction));
      });
    }

    return next(action);
  };
};
