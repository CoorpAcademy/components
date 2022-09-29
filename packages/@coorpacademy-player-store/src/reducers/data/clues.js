import {set, update, isNull, get, unset, pipe} from 'lodash/fp';
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
      return pipe(
        set('isFailure', false),
        set(['entities', progressionId, slideId], payload)
      )(state);
    }
    case CLUE_FETCH_FAILURE: {
      const {meta} = action;
      const {progressionId, slideId} = meta;
      const _state = set('isFailure', true, state);
      if (pipe(get(['entities', progressionId, slideId]), isNull)(_state))
        return unset(['entities', progressionId, slideId], _state);
      return _state;
    }
    default:
      return state;
  }
};

export default dataCluesReducer;
