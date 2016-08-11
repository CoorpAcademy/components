import {applyMiddleware, compose} from 'redux';

export const createMiddlewares = options => {
  const middlewares = [
  ];

  return compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};
