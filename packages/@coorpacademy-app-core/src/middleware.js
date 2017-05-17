import {applyMiddleware, compose} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import ReduxThunk from 'redux-thunk'
import {historyMiddleware} from '@coorpacademy/redux-history';
import {createRouterMiddleware} from './router';

export default (createRoutes, customMiddlewares = [], options = {}) => {
  const middlewares = [
    ReduxThunk.withExtraArgument(options),
    ...customMiddlewares,
    historyMiddleware(options),
    createRouterMiddleware(createRoutes)(options),
    apiMiddleware
  ];

  return compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};

if (module.hot) module.hot.accept();
