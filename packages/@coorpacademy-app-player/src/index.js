import {prepareApp} from '@coorpacademy/app-core';
import createReducer from './reducers';
import createRoutes from './routes';
import createMiddlewares from './middlewares';
import scenario from './scenarios/default';
// @TODO import translate

// eslint-disable-next-line import/prefer-default-export
export const create = options => {
  const {store} = prepareApp(createReducer, createRoutes, createMiddlewares(options), options);

  return Promise.all(scenario(store.dispatch));
};
