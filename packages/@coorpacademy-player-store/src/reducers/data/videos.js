import {set, update, isNull, get, unset, pipe} from 'lodash/fp';

import {
  VIDEOS_FETCH_URI_REQUEST,
  VIDEOS_FETCH_URI_SUCCESS,
  VIDEOS_FETCH_URI_FAILURE,
  FETCH_VIDEOS_SUBTITLE_REQUEST,
  FETCH_VIDEOS_SUBTITLE_SUCCESS,
  FETCH_VIDEOS_SUBTITLE_FAILURE
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

    case FETCH_VIDEOS_SUBTITLE_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id, 'tracks'], tracks => tracks || null, state);
    }

    case FETCH_VIDEOS_SUBTITLE_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id, 'tracks'], payload, state);
    }
    case FETCH_VIDEOS_SUBTITLE_FAILURE: {
      const {meta} = action;
      const {id} = meta;

      if (
        pipe(
          get(['entities', id, 'tracks']),
          isNull
        )(state)
      ) {
        return unset(['entities', id, 'tracks'], state);
      }
      return state;
    }

    default:
      return state;
  }
};

export default dataContentReducer;
