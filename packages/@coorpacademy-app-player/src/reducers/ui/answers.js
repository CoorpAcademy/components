import includes from 'lodash/fp/includes';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import values from 'lodash/fp/values';
import {ANSWER_EDIT} from '../../actions/ui/answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../actions/api/progressions';
import {
  ANSWER_FETCH_REQUEST,
  ANSWER_FETCH_SUCCESS,
  ANSWER_FETCH_FAILURE
} from '../../actions/api/answers';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

export default (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_SELECT_PROGRESSION: {
      const {id: progressionId} = payload;
      return unset([progressionId], state);
    }
    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      const {progressionId} = meta;
      return set([progressionId, 'isCorrect'], null, state);
    }
    case PROGRESSION_CREATE_ANSWER_FAILURE: {
      const {progressionId} = meta;
      return unset([progressionId, 'isCorrect'], state);
    }
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {progressionId} = meta;
      const {state: {isCorrect}} = payload;
      return set([progressionId, 'isCorrect'], isCorrect, state);
    }
    case ANSWER_FETCH_REQUEST: {
      const {progressionId} = meta;
      return set([progressionId, 'correction'], null, state);
    }
    case ANSWER_FETCH_FAILURE: {
      const {progressionId} = meta;
      return unset([progressionId, 'correction'], state);
    }
    case ANSWER_FETCH_SUCCESS: {
      const {progressionId} = meta;
      return set([progressionId, 'correction'], payload, state);
    }
  }

  if (includes(type, ANSWER_EDIT_ACTIONS)) {
    const {progressionId} = meta;
    return set([progressionId, 'value'], payload, state);
  }

  return state;
};
