import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  SLIDE_FETCH_REQUEST,
  SLIDE_FETCH_SUCCESS,
  SLIDE_FETCH_FAILURE
} from '../../actions/api/slides';

const dataSlidesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], slide => slide || null, state);
    }
    case SLIDE_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case SLIDE_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export default dataSlidesReducer;
