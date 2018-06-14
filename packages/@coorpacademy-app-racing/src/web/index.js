import {render, unmountComponentAtNode} from 'react-dom';
import {createElement} from 'react';
import pipe from 'lodash/fp/pipe';
import Provider from '@coorpacademy/components/es/atom/provider';
import {selectMapStateToVNode} from '../store/view';
import {refreshStateOnPolling, selectProgression} from '../store/actions/ui/progressions';
import {waitForRefresh} from '../store/actions/api/progressions';
import {getCurrentProgressionId, hasReceivedPollingData} from '../store/utils/state-extract';
import start from '../store/start';
import createStore from '../store';
import {createStateToVNode, views} from './views';

let i = 0;

const createUpdate = (container, store, options) => _selectMapStateToVNode => {
  const {getState, dispatch} = store;
  const mapStateToVNode = _selectMapStateToVNode(options, store, views, createStateToVNode);
  const mapStateToView = pipe(mapStateToVNode, vNode => createElement(Provider, options, vNode));

  return async () => {
    const state = getState();
    const view = mapStateToView(state);
    const progressionId = getCurrentProgressionId(state);
    const restartPolling = hasReceivedPollingData(state);

    if (restartPolling) {
      await dispatch(refreshStateOnPolling(progressionId));

      if (i++ < 2) {
        dispatch(waitForRefresh(progressionId));
      }
    }

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

  const {dispatch} = store;
  return {
    update: () => update(),
    selectProgression: id => dispatch(selectProgression(id)),
    unsubscribe: () => {
      unmountComponentAtNode(container);
      return unsubscribe();
    }
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
