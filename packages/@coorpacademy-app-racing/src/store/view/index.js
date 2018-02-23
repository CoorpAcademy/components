import get from 'lodash/fp/get';
import size from 'lodash/fp/size';
import createPlayerStateToProps from './state-to-props/player';
import createRaceStateToProps from './state-to-props/race';
import {getCurrentUserState} from '../utils/user-state-extract';

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) => state => {
  const userState = getCurrentUserState(state);
  const answeredSlidesCount = size(get('slides', userState));

  return answeredSlidesCount > 0
    ? createStateToVNode(views.race, createRaceStateToProps(options, store))(state)
    : createStateToVNode(views.player, createPlayerStateToProps(options, store))(state);
};
