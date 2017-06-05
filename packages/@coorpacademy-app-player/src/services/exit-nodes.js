import reduce from 'lodash/fp/reduce';
import exitNodesData from './exit-nodes.data';

const exitNodes = reduce(
  (exitNodeMap, exitNode) => exitNodeMap.set(exitNode.ref, exitNode),
  new Map(),
  exitNodesData
);

export const findById = id => {
  if (exitNodes.has(id)) return Promise.resolve(exitNodes.get(id));
  return Promise.reject(new Error('ExitNode not found'));
};

export const find = () => {
  return Promise.resolve(Array.from(exitNodes.values()));
};
