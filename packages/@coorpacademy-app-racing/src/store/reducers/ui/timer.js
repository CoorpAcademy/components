import set from 'lodash/fp/set';
import {TIMER_NEXT_QUESTION_ON, TIMER_NEXT_QUESTION_OFF} from '../../middlewares/polling-saga';
import {TIMER_HIGHLIGHT_ON, TIMER_HIGHLIGHT_OFF} from '../../actions/ui/answers';

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
    default:
      return state;
  }
};

export default uiTimerReducer;
