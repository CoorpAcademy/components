import createPlayerStateToProps from './state-to-props/player';

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  createStateToVNode(views.player, createPlayerStateToProps(options, store));
