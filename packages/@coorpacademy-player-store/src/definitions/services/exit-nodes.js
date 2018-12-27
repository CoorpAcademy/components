// @flow strict

type FindById = (id: ExitNodeRef) => Promise<ExitNode>;
type ExitNodesService = {|
  findById: FindById
|};
 
export type {FindById, ExitNodesService};
