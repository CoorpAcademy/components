import {includes, set, unset, values} from 'lodash/fp';
import {ANSWER_EDIT} from '../../actions/ui/answers';
import {UI_PROGRESSION_ACTION_TYPES} from '../../actions/ui/progressions';

const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

const uiAnswersReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION: {
      const {id: progressionId} = payload;
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
