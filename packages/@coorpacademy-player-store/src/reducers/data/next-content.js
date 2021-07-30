import {set, update, isNull, get, unset, pipe} from 'lodash/fp';
import {
  NEXT_CONTENT_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_FAILURE,
  NEXT_CONTENT_FETCH_REQUEST
} from '../../actions/api/next-content';

const nextContentReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case NEXT_CONTENT_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], nextContent => nextContent || null, state);
    }
    case NEXT_CONTENT_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      const nextContent = payload;
      if (nextContent) {
        return set(['entities', id], nextContent, state);
      }
      return unset(['entities', id], state);
    }
    case NEXT_CONTENT_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export default nextContentReducer;
