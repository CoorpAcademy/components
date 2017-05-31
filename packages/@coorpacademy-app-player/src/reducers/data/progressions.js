import assign from 'lodash/fp/assign';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_REQUEST} from '../../actions/api/progressions';
import {ANSWER_CREATE_SUCCESS} from '../../actions/api/answers';

export default (state = {entities: {}}, action) => {
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
    case ANSWER_CREATE_SUCCESS: {
      const {payload, meta} = action;
      const {progressionId} = meta;
      return update(
        ['entities', progressionId],
        progression => assign(progression, payload),
        state
      );
    }
    default:
      return state;
  }
};
