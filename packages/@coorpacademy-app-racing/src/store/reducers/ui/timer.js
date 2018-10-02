import set from 'lodash/fp/set';
import {
  TIMER_HIGHLIGHT_ON,
  TIMER_HIGHLIGHT_OFF,
  TIMER_NEXT_QUESTION_ON,
  TIMER_NEXT_QUESTION_OFF
} from '../../actions/ui/answers';

import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../actions/api/progressions';

const uiTimerReducer = (state = {highlight: false, nextQuestion: false}, action) => {
  switch (action.type) {
    case TIMER_HIGHLIGHT_ON: {
      return set('highlight', true, state);
    }
    case TIMER_HIGHLIGHT_OFF: {
      return set('highlight', false, state);
    }
    case TIMER_NEXT_QUESTION_ON: {
      return set('nextQuestion', true, state);
    }
    case TIMER_NEXT_QUESTION_OFF: {
      return set('nextQuestion', false, state);
    }
    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      return set('waiting-correction', true, state);
    }
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      return set('waiting-correction', false, state);
    }
    default:
      return state;
  }
};

export default uiTimerReducer;
