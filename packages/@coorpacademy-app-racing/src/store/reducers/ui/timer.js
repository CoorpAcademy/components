import set from 'lodash/fp/set';
import {TIMER_START_ON, TIMER_START_OFF} from '../../actions/ui/route';

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

const uiTimerReducer = (state = {highlight: false, nextQuestion: 0}, action) => {
  switch (action.type) {
    case TIMER_HIGHLIGHT_ON: {
      return set('highlight', true, state);
    }
    case TIMER_HIGHLIGHT_OFF: {
      return set('highlight', false, state);
    }
    case TIMER_NEXT_QUESTION_ON: {
      const {time} = action.meta;
      return set('nextQuestion', time, state);
    }
    case TIMER_NEXT_QUESTION_OFF: {
      return set('nextQuestion', 0, state);
    }
    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      return set('waitingCorrection', true, state);
    }
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      return set('waitingCorrection', false, state);
    }
    case TIMER_START_ON: {
      return set('startAnimation', true, state);
    }
    case TIMER_START_OFF: {
      return set('startAnimation', false, state);
    }
    default:
      return state;
  }
};

export default uiTimerReducer;
