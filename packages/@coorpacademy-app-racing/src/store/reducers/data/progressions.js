import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_FAILURE
} from '../../actions/api/progressions';
import {POLL_RECEPTION} from '../../middlewares/polling-saga';

const dataProgressionsReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case POLL_RECEPTION: {
      const {payload, meta} = action;
      const {progression} = payload;
      const {id} = meta;
      return set(['entities', id], progression, state);
    }
    case PROGRESSION_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], progression => progression || null, state);
    }
    case PROGRESSION_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export default dataProgressionsReducer;
