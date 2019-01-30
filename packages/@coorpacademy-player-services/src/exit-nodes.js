// @flow strict

import type {ExitNodeAPI, ExitNodeRef, ContentService} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNodeAPI>;
type ExitNodesService = {|
  findById: FindById
|};

export const findById = (contentService: ContentService): FindById => async (
  id: ExitNodeRef
): Promise<ExitNodeAPI> => {
  const {getExitNode} = contentService;
  const exitNode = await getExitNode(id);
  return exitNode;
};

const ExitNodes = (contentService: ContentService): ExitNodesService => ({
  findById: findById(contentService)
});

export type {ExitNodesService};
export default ExitNodes;
