import createPlayerStateToProps from './state-to-props/player';
import createRaceStateToProps from './state-to-props/race';

// // eslint-disable-next-line import/prefer-default-export
// export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
//   createStateToVNode(views.player, createPlayerStateToProps(options, store));

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  createStateToVNode(views.race, createRaceStateToProps(options, store));
