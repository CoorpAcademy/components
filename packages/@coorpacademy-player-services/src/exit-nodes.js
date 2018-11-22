import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
import values from 'lodash/fp/values';
import exitNodesData from './fixtures/exit-nodes';
import {appendJWPOptions} from './slides';

const exitNodeStore = pipe(
  values,
  reduce((exitNodeMap, exitNode) => exitNodeMap.set(exitNode.ref, exitNode), new Map())
)(exitNodesData);

// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = async id => {
  if (!exitNodeStore.has(id)) throw new Error('ExitNode not found');
  const exitNode = exitNodeStore.get(id);
  return update('media', appendJWPOptions('src.0.'), exitNode);
};
