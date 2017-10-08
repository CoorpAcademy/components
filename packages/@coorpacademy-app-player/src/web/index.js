import {createStore} from 'redux';
import {render, unmountComponentAtNode} from 'react-dom';
import {createStateToView} from '../redux/view';
import createReducer from '../redux/reducers';
import createMiddleware from '../redux/middlewares';
import start from '../redux/start';
import {createView, views} from './views';

const createUpdate = (container, store, options) => _createStateToView => {
  const {getState} = store;
  const stateToView = _createStateToView(options, store, views, createView(options));

  return () => {
    const state = getState();
    const view = stateToView(state);
    return render(view, container);
  };
};

const create = options => {
  const {container} = options;

  const store = createStore(createReducer(options), {}, createMiddleware(options));

  let update = createUpdate(container, store, options)(createStateToView);
  let unsubscribe = store.subscribe(update);

  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('../redux/view', () => {
      unsubscribe();
      update = createUpdate(container, store, options)(require('../redux/view').default);
      update();
      unsubscribe = store.subscribe(update);
    });
    module.hot.accept('../redux/reducers', () => {
      const reducers = require('../redux/reducers').default(options);
      store.replaceReducer(reducers);
    });
  }

  start(options, store);

  return {
    update: () => update(),
    unsubscribe: () => {
      unmountComponentAtNode(container);
      return unsubscribe();
    }
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
