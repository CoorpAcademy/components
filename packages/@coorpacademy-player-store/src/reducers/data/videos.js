import {set, update, isNull, get, unset, pipe} from 'lodash/fp';

import {
  FETCH_VIDEOS_URI_REQUEST,
  FETCH_VIDEOS_URI_SUCCESS,
  FETCH_VIDEOS_URI_FAILURE,
  FETCH_VIDEOS_TRACKS_REQUEST,
  FETCH_VIDEOS_TRACKS_SUCCESS,
  FETCH_VIDEOS_TRACKS_FAILURE
} from '../../actions/api/videos';

const dataContentReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_URI_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id, 'uri'], videos => videos || null, state);
    }
    case FETCH_VIDEOS_URI_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id, 'uri'], payload, state);
    }
    case FETCH_VIDEOS_URI_FAILURE: {
      const {meta} = action;
      const {id} = meta;

      if (pipe(get(['entities', id, 'uri']), isNull)(state)) {
        return unset(['entities', id, 'uri'], state);
      }
      return state;
    }

    case FETCH_VIDEOS_TRACKS_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id, 'tracks'], tracks => tracks || null, state);
    }

    case FETCH_VIDEOS_TRACKS_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id, 'tracks'], payload, state);
    }
    case FETCH_VIDEOS_TRACKS_FAILURE: {
      const {meta} = action;
      const {id} = meta;

      if (pipe(get(['entities', id, 'tracks']), isNull)(state)) {
        return unset(['entities', id, 'tracks'], state);
      }
      return state;
    }

    default:
      return state;
  }
};

export default dataContentReducer;
