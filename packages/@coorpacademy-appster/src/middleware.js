import {applyMiddleware, compose} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import {createRouterMiddleware} from '../router';

export default (createRoutes, options) => {
  const middlewares = [
    createRouterMiddleware(createRoutes)(options),
    apiMiddleware
  ];

  return compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};

if (module.hot)
  module.hot.accept();
