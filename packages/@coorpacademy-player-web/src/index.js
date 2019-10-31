import {render, unmountComponentAtNode} from 'react-dom';
import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import {Provider} from '@coorpacademy/components';
import {selectProgression, updateCoaches} from '@coorpacademy/player-store';
import runApp from './run-app';
import createStore from './store';
import {selectMapStateToVNode} from './map-state-to-props';
import {createStateToVNode, views} from './views';

const createUpdate = (container, store, options) => _selectMapStateToVNode => {
  const {getState} = store;
  const mapStateToVNode = _selectMapStateToVNode(options, store, views, createStateToVNode);
  const mapStateToView = pipe(
    mapStateToVNode,
    vNode => createElement(Provider, options, vNode)
  );

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
    module.hot.accept('./views', () => {
      unsubscribe();
      update = createUpdate(container, store, options)(require('./views').default);
      update();
      unsubscribe = store.subscribe(update);
    });
  }

  runApp(options, store);

  const {dispatch} = store;
  return {
    update: () => update(),

    updateCoaches: coachState => dispatch(updateCoaches(coachState)),
    selectProgression: id => dispatch(selectProgression(id)),

    unsubscribe: () => {
      unmountComponentAtNode(container);
      return unsubscribe();
    }
  };
};

export {create};
