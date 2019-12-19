import {set, update, isNull, get, unset, pipe} from 'lodash/fp';

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
      return update(['entities', id, 'url'], videos => videos || null, state);
    }
    case VIDEOS_FETCH_URI_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id, 'url'], payload, state);
    }
    case VIDEOS_FETCH_URI_FAILURE: {
      const {meta} = action;
      const {id} = meta;

      if (
        pipe(
          get(['entities', id, 'url']),
          isNull
        )(state)
      ) {
        return unset(['entities', id, 'url'], state);
      }
      return state;
    }
    default:
      return state;
  }
};

export default dataContentReducer;
