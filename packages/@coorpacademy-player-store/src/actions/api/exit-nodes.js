// @flow strict

import buildTask from '@coorpacademy/redux-task';
import {getExitNode} from '../../utils/state-extract';
import type {ExitNodeRef} from '../../definitions/models';
import type {Services} from '../../definitions/services';
import type {Dispatch, ExitNodesActions, GetState} from '../../definitions/redux';

export const EXIT_NODE_FETCH_REQUEST: string = '@@exit_node/FETCH_REQUEST';
export const EXIT_NODE_FETCH_SUCCESS: string = '@@exit_node/FETCH_SUCCESS';
export const EXIT_NODE_FETCH_FAILURE: string = '@@exit_node/FETCH_FAILURE';

export const fetchExitNode = (id: ExitNodeRef) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): Dispatch => {
  const {ExitNodes} = services;

  const action: ExitNodesActions = buildTask({
    types: [EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS, EXIT_NODE_FETCH_FAILURE],
    task: () => ExitNodes.findById(id),
    meta: {id},
    bailout: getExitNode(id)
  });

  return dispatch(action);
};
