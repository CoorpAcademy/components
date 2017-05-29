import {applyMiddleware, compose} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import ReduxThunk from 'redux-thunk';

export default options => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(options), apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};
