// @flow strict

import type {ExitNode, ExitNodeRef} from '../models';

type FindById = (id: ExitNodeRef) => Promise<ExitNode>;
type ExitNodesService = {|
  findById: FindById
|};

export type {FindById, ExitNodesService};
