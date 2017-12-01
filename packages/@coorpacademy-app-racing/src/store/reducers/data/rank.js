import update from 'lodash/fp/update';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import isNull from 'lodash/fp/isNull';
import pipe from 'lodash/fp/pipe';
import unset from 'lodash/fp/unset';

import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../../actions/api/rank';

const dataRankReducer = (state = {}, action) => {
  switch (action.type) {
    case RANK_FETCH_START_REQUEST: {
      return update('start', rank => rank || null, state);
    }
    case RANK_FETCH_START_SUCCESS: {
      const {payload} = action;
      return set('start', payload, state);
    }
    case RANK_FETCH_START_FAILURE: {
      if (pipe(get('start'), isNull)(state)) return unset('start', state);
      return state;
    }
    case RANK_FETCH_END_REQUEST: {
      return update('end', rank => rank || null, state);
    }
    case RANK_FETCH_END_SUCCESS: {
      const {payload} = action;
      return set('end', payload, state);
    }
    case RANK_FETCH_END_FAILURE: {
      if (pipe(get('end'), isNull)(state)) return unset('end', state);
      return state;
    }
    default:
      return state;
  }
};

export default dataRankReducer;
