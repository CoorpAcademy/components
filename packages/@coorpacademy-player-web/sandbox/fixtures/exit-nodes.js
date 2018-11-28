import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

import exitNodesData from './data/exit-nodes';

const exitNodeStore = pipe(
  values,
  reduce((exitNodeMap, exitNode) => exitNodeMap.set(exitNode.ref, exitNode), new Map())
)(exitNodesData);

const getExitNode = id => {
  if (!exitNodeStore.has(id)) throw new Error('ExitNode not found');
  return exitNodeStore.get(id);
};

// eslint-disable-next-line import/prefer-default-export
export {getExitNode};
