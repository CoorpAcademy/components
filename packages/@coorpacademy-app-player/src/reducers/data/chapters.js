import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  CHAPTER_FETCH_REQUEST,
  CHAPTER_FETCH_SUCCESS,
  CHAPTER_FETCH_FAILURE
} from '../../actions/api/chapters';

export default (state = {entities: {}}, action) => {
  switch (action.type) {
    case CHAPTER_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], exitNode => exitNode || null, state);
    }
    case CHAPTER_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case CHAPTER_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};
