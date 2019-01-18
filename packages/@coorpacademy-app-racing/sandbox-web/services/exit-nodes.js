import reduce from 'lodash/fp/reduce';
import exitNodesData from './fixtures/exit-nodes';

const exitNodeStore = reduce(
  (exitNodeMap, exitNode) => exitNodeMap.set(exitNode.ref, exitNode),
  new Map(),
  exitNodesData
);

// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = async id => {
  if (!exitNodeStore.has(id)) throw new Error('ExitNode not found');
  return exitNodeStore.get(id);
};
