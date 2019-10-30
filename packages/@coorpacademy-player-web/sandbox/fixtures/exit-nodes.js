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
  if (!exitNodeStore.has(id)) return Promise.reject(new Error('ExitNode not found'));
  const exitNode = exitNodeStore.get(id);
  return Promise.resolve(update('media', appendJWPOptions('src.0.'), exitNode));
};

export {getExitNode};
