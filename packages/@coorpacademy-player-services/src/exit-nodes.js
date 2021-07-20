// @flow strict

import type {ExitNodeAPI, ExitNodeRef, DataLayer} from './definitions';

type FindById = (id: ExitNodeRef) => Promise<ExitNodeAPI>;
type ExitNodesService = {|
  findById: FindById,
|};

export const findById =
  (dataLayer: DataLayer): FindById =>
  async (id: ExitNodeRef): Promise<ExitNodeAPI> => {
    const {getExitNode} = dataLayer;
    const exitNode = await getExitNode(id);
    return exitNode;
  };

const ExitNodes = (dataLayer: DataLayer): ExitNodesService => ({
  findById: findById(dataLayer),
});

export type {ExitNodesService};
export default ExitNodes;
