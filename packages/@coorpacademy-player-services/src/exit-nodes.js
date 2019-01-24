// @flow strict

import type {ExitNodeAPI, ExitNodeRef, Fixtures} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNodeAPI>;
type ExitNodesService = {|
  findById: FindById
|};

export const findById = (fixtures: Fixtures): FindById => async (
  id: ExitNodeRef
): Promise<ExitNodeAPI> => {
  const {getExitNode} = fixtures;
  const exitNode = await getExitNode(id);
  return exitNode;
};

const ExitNodes = (fixtures: Fixtures): ExitNodesService => ({
  findById: findById(fixtures)
});

export type {ExitNodesService};
export default ExitNodes;
