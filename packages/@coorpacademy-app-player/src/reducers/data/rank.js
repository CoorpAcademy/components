import update from 'lodash/fp/update';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';

import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../../actions/api/rank';

export default (state = {start: null, end: null}, action) => {
  switch (action.type) {
    case RANK_FETCH_START_REQUEST: {
      return update('start', rank => rank || null, state);
    }
    case RANK_FETCH_START_SUCCESS: {
      const {payload} = action;
      return set('start', payload, state);
    }
    case RANK_FETCH_START_FAILURE: {
      return unset('start', state);
    }
    case RANK_FETCH_END_REQUEST: {
      return update('end', rank => rank || null, state);
    }
    case RANK_FETCH_END_SUCCESS: {
      const {payload} = action;
      return set('end', payload, state);
    }
    case RANK_FETCH_END_FAILURE: {
      return unset('end', state);
    }
    default:
      return state;
  }
};
