import buildTask from '@coorpacademy/redux-task';
import {getExitNode} from '../../utils/state-extract';

export const EXIT_NODE_FETCH_REQUEST = '@@exit_node/FETCH_REQUEST';
export const EXIT_NODE_FETCH_SUCCESS = '@@exit_node/FETCH_SUCCESS';
export const EXIT_NODE_FETCH_FAILURE = '@@exit_node/FETCH_FAILURE';

export const fetchExitNode = id => (dispatch, getState, {services}) => {
  const {ExitNodes} = services;

  const action = buildTask({
    types: [EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS, EXIT_NODE_FETCH_FAILURE],
    task: () => {
      return ExitNodes.findById(id);
    },
    meta: {id},
    bailout: getExitNode(id)
  });

  return dispatch(action);
};
