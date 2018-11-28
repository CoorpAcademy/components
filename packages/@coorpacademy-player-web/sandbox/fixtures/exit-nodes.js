import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
import values from 'lodash/fp/values';

import exitNodesData from './data/exit-nodes';
import appendJWPOptions from './utils/jwp-options';

const exitNodeStore = pipe(
  values,
  reduce((exitNodeMap, exitNode) => exitNodeMap.set(exitNode.ref, exitNode), new Map())
)(exitNodesData);

const getExitNode = id => {
  if (!exitNodeStore.has(id)) throw new Error('ExitNode not found');
  const exitNode = exitNodeStore.get(id);
  return update('media', appendJWPOptions('src.0.'), exitNode);
};

// eslint-disable-next-line import/prefer-default-export
export {getExitNode};
