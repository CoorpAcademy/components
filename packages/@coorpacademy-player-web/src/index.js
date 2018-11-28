import {render, unmountComponentAtNode} from 'react-dom';
import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import Provider from '@coorpacademy/components/es/atom/provider';
import {selectProgression} from '@coorpacademy/player-store/es/actions/ui/progressions';
import {updateCoaches} from '@coorpacademy/player-store/es/actions/ui/coaches';
import start from '@coorpacademy/player-store/es/start';
import createStore from '@coorpacademy/player-store/es';
import {selectMapStateToVNode} from './map-state-to-props';
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
    module.hot.accept('@coorpacademy/player-store/es/view', () => {
      unsubscribe();
      update = createUpdate(container, store, options)(
        require('@coorpacademy/player-store/es/view').default
      );
      update();
      unsubscribe = store.subscribe(update);
    });
    module.hot.accept('@coorpacademy/player-store/es/reducers', () => {
      const reducers = require('@coorpacademy/player-store/es/reducers').default(options);
      store.replaceReducer(reducers);
    });
  }

  start(options, store);

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

export {create}; // eslint-disable-line import/prefer-default-export
