// @flow strict

import type {ExitNodeAPI, ExitNodeRef, DataLayer} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNodeAPI>;
type ExitNodesService = {|
  findById: FindById
|};

export const findById = (contentService: DataLayer): FindById => async (
  id: ExitNodeRef
): Promise<ExitNodeAPI> => {
  const {getExitNode} = contentService;
  const exitNode = await getExitNode(id);
  return exitNode;
};

const ExitNodes = (contentService: DataLayer): ExitNodesService => ({
  findById: findById(contentService)
});

export type {ExitNodesService};
export default ExitNodes;
