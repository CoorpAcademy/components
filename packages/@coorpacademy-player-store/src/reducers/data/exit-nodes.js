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
      return pipe(set('isFailure', false), set(['entities', id], payload))(state);
    }
    case EXIT_NODE_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      const _state = set('isFailure', true, state);
      if (pipe(get(['entities', id]), isNull)(_state)) return unset(['entities', id], _state);
      return _state;
    }
    default:
      return state;
  }
};

export default dataExitNodesReducer;
