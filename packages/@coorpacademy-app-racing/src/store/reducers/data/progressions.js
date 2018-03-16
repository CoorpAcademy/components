import assign from 'lodash/fp/assign';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_REQUEST_CLUE_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS
} from '../../actions/api/progressions';

const dataProgressionsReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case PROGRESSION_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], progression => progression || null, state);
    }
    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      const {meta} = action;
      const {progressionId} = meta;
      return set(['entities', progressionId, 'state', 'isCorrect'], null, state);
    }
    case PROGRESSION_REQUEST_CLUE_SUCCESS:
    case PROGRESSION_RESOURCE_VIEWED_SUCCESS:
    case PROGRESSION_EXTRALIFEREFUSED_SUCCESS:
    case PROGRESSION_EXTRALIFEACCEPTED_SUCCESS:
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {payload, meta} = action;
      const {progressionId} = meta;

      return update(
        ['entities', progressionId],
        progression => assign(progression, payload),
        state
      );
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
