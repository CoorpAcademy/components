import {createStateToVNode, views} from '../..';
import {selectMapStateToVNode} from '../../../../store/view';

const stateToVNode = (options, store) =>
  selectMapStateToVNode(options, store, views, createStateToVNode);

export default stateToVNode;
