// @flow strict

import type {ExitNodeAPI, ExitNodeRef, ContentService} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNodeAPI>;
type ExitNodesService = {|
  findById: FindById
|};

export const findById = (fixtures: ContentService): FindById => async (
  id: ExitNodeRef
): Promise<ExitNodeAPI> => {
  const {getExitNode} = fixtures;
  const exitNode = await getExitNode(id);
  return exitNode;
};

const ExitNodes = (fixtures: ContentService): ExitNodesService => ({
  findById: findById(fixtures)
});

export type {ExitNodesService};
export default ExitNodes;
