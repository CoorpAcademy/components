import {set, update, isNull, get, unset, pipe} from 'lodash/fp';
import {
  EXIT_NODE_FETCH_REQUEST,
  EXIT_NODE_FETCH_SUCCESS,
  EXIT_NODE_FETCH_FAILURE
} from '../../actions/api/exit-nodes';

const dataExitNodesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case EXIT_NODE_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], exitNode => exitNode || null, state);
    }
    case EXIT_NODE_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case EXIT_NODE_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export default dataExitNodesReducer;
