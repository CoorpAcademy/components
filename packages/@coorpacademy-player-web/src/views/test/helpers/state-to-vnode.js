import {createStateToVNode, views} from '../..';
import {selectMapStateToVNode} from '../../../map-state-to-props';

const stateToVNode = (options, store) =>
  selectMapStateToVNode(options, store, views, createStateToVNode);

export default stateToVNode;
