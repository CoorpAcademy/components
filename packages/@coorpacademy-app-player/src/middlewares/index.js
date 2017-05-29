import {applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

export default options => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(options)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};
