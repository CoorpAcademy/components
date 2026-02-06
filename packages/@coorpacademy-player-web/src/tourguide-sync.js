import {get} from 'lodash/fp';
import {showTourguide, shouldAutoShowTourguide} from '@coorpacademy/player-store';

const getTourguideState = state => get('ui.tourguide', state) || {};

const createTourguideSync = (options, store) => {
  let lastShouldEnable = null;

  const sync = () => {
    const state = store.getState();
    const {visible} = getTourguideState(state);
    const shouldAutoShow = shouldAutoShowTourguide(state, options, getTourguideState(state));

    if (shouldAutoShow === lastShouldEnable) {
      return;
    }

    lastShouldEnable = shouldAutoShow;

    if (shouldAutoShow && !visible) {
      store.dispatch(showTourguide());
    }
  };

  sync();
  return store.subscribe(sync);
};

export default createTourguideSync;
