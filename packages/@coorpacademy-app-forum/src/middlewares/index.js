import {applyMiddleware, compose} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import ReduxThunk from 'redux-thunk';

const middlewares = options => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(options), apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};

export default middlewares;
