import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  CHAPTER_FETCH_REQUEST,
  CHAPTER_FETCH_SUCCESS,
  CHAPTER_FETCH_FAILURE
} from '../../actions/api/chapters';
import {PROGRESSION_FETCH_BESTOF_SUCCESS} from '../../actions/api/progressions';

const dataChaptersReducer = (state = {entities: {}}, action) => {
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
    case PROGRESSION_FETCH_BESTOF_SUCCESS: {
      const {payload: progression, meta} = action;
      const {chapterId} = meta;
      return set(['entities', chapterId, 'bestScore'], getOr(0, 'state.stars', progression), state);
    }
    default:
      return state;
  }
};

export default dataChaptersReducer;
