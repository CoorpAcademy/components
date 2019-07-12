import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';

import {
  VIDEOS_FETCH_URI_REQUEST,
  VIDEOS_FETCH_URI_SUCCESS,
  VIDEOS_FETCH_URI_FAILURE
} from '../../actions/api/videos';

const dataContentReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case VIDEOS_FETCH_URI_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], videos => videos || null, state);
    }
    case VIDEOS_FETCH_URI_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case VIDEOS_FETCH_URI_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) {
        return unset(['entities', id], state);
      }
      return state;
    }
    default:
      return state;
  }
};

export default dataContentReducer;
