import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isEmpty from 'lodash/fp/isEmpty';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE,
  CONTENT_INFO_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_FAILURE
} from '../../actions/api/contents';
import {PROGRESSION_FETCH_BESTOF_SUCCESS} from '../../actions/api/progressions';

const dataContentReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_FETCH_REQUEST: {
      const {meta} = action;
      const {type, ref} = meta;
      return update([type, 'entities', ref], content => content || null, state);
    }
    case CONTENT_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {type, ref} = meta;
      return set([type, 'entities', ref], payload, state);
    }
    case CONTENT_FETCH_FAILURE: {
      const {meta} = action;
      const {type, ref} = meta;
      if (pipe(get([type, 'entities', ref]), isNull)(state))
        return unset([type, 'entities', ref], state);
      return state;
    }
    case NEXT_CONTENT_FETCH_REQUEST: {
      const {meta} = action;
      const {ref} = meta;
      return update(['nextContent', ref], nextContentRef => nextContentRef || null, state);
    }
    case NEXT_CONTENT_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {type, ref} = meta;
      if (isEmpty(payload)) {
        return state;
      }
      return pipe(
        set([type, 'entities', payload.ref], payload),
        set(['nextContent', ref], payload.ref)
      )(state);
    }
    case NEXT_CONTENT_FETCH_FAILURE: {
      const {meta} = action;
      const {ref} = meta;
      return unset(['nextContent', ref], state);
    }
    case CONTENT_INFO_FETCH_SUCCESS: {
      const {payload: info, meta} = action;
      const {type, ref} = meta;
      return set([type, 'entities', ref, 'info'], info, state);
    }
    case PROGRESSION_FETCH_BESTOF_SUCCESS: {
      const {payload: progression, meta} = action;
      const {type, ref} = meta;
      return set([type, 'entities', ref, 'bestScore'], getOr(0, 'state.stars', progression), state);
    }
    default:
      return state;
  }
};

export default dataContentReducer;
