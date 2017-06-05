import {applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

export default options => {
  return compose(
    applyMiddleware(ReduxThunk.withExtraArgument(options)),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
};
