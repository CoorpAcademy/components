import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import isNull from 'lodash/fp/isNull';
import get from 'lodash/fp/get';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import {CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS, CLUE_FETCH_FAILURE} from '../../actions/api/clues';

const dataCluesReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case CLUE_FETCH_REQUEST: {
      const {meta} = action;
      const {progressionId, slideId} = meta;
      return update(['entities', progressionId, slideId], clue => clue || null, state);
    }
    case CLUE_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {progressionId, slideId} = meta;
      return set(['entities', progressionId, slideId], payload, state);
    }
    case CLUE_FETCH_FAILURE: {
      const {meta} = action;
      const {progressionId, slideId} = meta;
      if (pipe(get(['entities', progressionId, slideId]), isNull)(state))
        return unset(['entities', progressionId, slideId], state);
      return state;
    }
    default:
      return state;
  }
};

export default dataCluesReducer;
