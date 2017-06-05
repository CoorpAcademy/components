import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../../actions/api/exit-nodes';

export default (state = {entities: {}}, action) => {
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
    default:
      return state;
  }
};
