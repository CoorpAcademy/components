import {render, unmountComponentAtNode} from 'react-dom';
import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import Provider from '@coorpacademy/components/es/atom/provider';
import {selectMapStateToVNode} from '../store/view';
import start from '../store/start';
import createStore from '../store';
import {createStateToVNode, views} from './views';

const createUpdate = (container, store, options) => _selectMapStateToVNode => {
  const {getState} = store;
  const mapStateToVNode = _selectMapStateToVNode(options, store, views, createStateToVNode);
  const mapStateToView = pipe(mapStateToVNode, vNode => createElement(Provider, options, vNode));

  return () => {
    const state = getState();
    const view = mapStateToView(state);
    return render(view, container);
  };
};

const create = options => {
  const {container} = options;
  const store = createStore(options);

  let update = createUpdate(container, store, options)(selectMapStateToVNode);
  let unsubscribe = store.subscribe(update);

  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('../store/view', () => {
      unsubscribe();
      update = createUpdate(container, store, options)(require('../store/view').default);
      update();
      unsubscribe = store.subscribe(update);
    });
    module.hot.accept('../store/reducers', () => {
      const reducers = require('../store/reducers').default(options);
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
