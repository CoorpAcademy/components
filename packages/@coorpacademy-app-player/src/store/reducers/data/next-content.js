import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
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
