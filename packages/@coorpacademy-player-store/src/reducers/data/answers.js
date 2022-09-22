import {set, update, isNull, get, unset, pipe} from 'lodash/fp';
import {
  ANSWER_FETCH_REQUEST,
  ANSWER_FETCH_SUCCESS,
  ANSWER_FETCH_FAILURE
} from '../../actions/api/answers';

const dataAnswersReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case ANSWER_FETCH_REQUEST: {
      const {meta} = action;
      const {progressionId, slideId} = meta;
      return update(['entities', progressionId, slideId], answers => answers || null, state);
    }
    case ANSWER_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {progressionId, slideId} = meta;
      return pipe(
        set(['entities', progressionId, slideId, 'correctAnswer'], payload.correctAnswer),
        set(['entities', progressionId, slideId, 'corrections'], payload.corrections),
        set('isFailure', false)
      )(state);
    }
    case ANSWER_FETCH_FAILURE: {
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

export default dataAnswersReducer;
