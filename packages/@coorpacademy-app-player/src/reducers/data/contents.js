import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE
} from '../../actions/api/contents';
import {PROGRESSION_FETCH_BESTOF_SUCCESS} from '../../actions/api/progressions';

const dataContentReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_FETCH_REQUEST: {
      const {meta} = action;
      const {type, ref} = meta;
      return update([type, ref], content => content || null, state);
    }
    case CONTENT_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {type, ref} = meta;
      return set([type, ref], payload, state);
    }
    case CONTENT_FETCH_FAILURE: {
      const {meta} = action;
      const {type, ref} = meta;
      if (pipe(get([type, ref]), isNull)(state)) return unset([type, ref], state);
      return state;
    }
    case PROGRESSION_FETCH_BESTOF_SUCCESS: {
      const {payload: progression, meta} = action;
      const {type, ref} = meta;
      return set([type, ref, 'bestScore'], getOr(0, 'state.stars', progression), state);
    }
    default:
      return state;
  }
};

export default dataContentReducer;
