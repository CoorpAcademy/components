import includes from 'lodash/fp/includes';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import values from 'lodash/fp/values';
import {ANSWER_EDIT} from '../../actions/ui/answers';
import {PROGRESSION_CREATE_ANSWER_SUCCESS} from '../../actions/api/progressions';

const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

const uiAnswersReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {progressionId} = meta;
      return unset([progressionId], state);
    }
  }

  if (includes(type, ANSWER_EDIT_ACTIONS)) {
    const {progressionId} = meta;
    return set([progressionId, 'value'], payload, state);
  }

  return state;
};

export default uiAnswersReducer;
