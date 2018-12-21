// @flow strict

import type {ExitNode, ExitNodeRef, Fixtures} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNode>;
type ExitNodesService = {|
  findById: FindById
|};

// eslint-disable-next-line import/prefer-default-export
export const findById = (fixtures: Fixtures): FindById => async (
  id: ExitNodeRef
  // eslint-disable-next-line require-await
): Promise<ExitNode> => {
  const {getExitNode} = fixtures;
  const exitNode = getExitNode(id);
  return exitNode;
};

const ExitNodes = (fixtures: Fixtures): ExitNodesService => ({
  findById: findById(fixtures)
});

export type {ExitNodesService};
export default ExitNodes;
