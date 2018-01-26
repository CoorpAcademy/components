import includes from 'lodash/fp/includes';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import values from 'lodash/fp/values';
import {ANSWER_EDIT} from '../../actions/ui/answers';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

const uiAnswersReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_SELECT_PROGRESSION: {
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
