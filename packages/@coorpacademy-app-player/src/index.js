import {createStore} from 'redux';
import {render, unmountComponentAtNode} from 'react-dom';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import createMapStateToVnode from './view';
import start from './start';

const createUpdate = (container, store, options) => createMapStateToView => {
  const mapStateToView = createMapStateToView(options, store);
  const {getState} = store;

  return () => {
    const state = getState();
    const view = mapStateToView(state);
    return render(view, container);
  };
};

const create = options => {
  const {container} = options;

  const store = createStore(createReducer(options), {}, createMiddleware(options));

  let update = createUpdate(container, store, options)(createMapStateToVnode);
  let unsubscribe = store.subscribe(update);

  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./view', () => {
      unsubscribe();
      update = createUpdate(container, store, options)(require('./view').default);
      update();
      unsubscribe = store.subscribe(update);
    });
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default(options);
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
