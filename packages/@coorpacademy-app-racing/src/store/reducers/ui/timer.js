import set from 'lodash/fp/set';
import {TIMER_LAST_ON, TIMER_LAST_OFF} from '../../middlewares/polling-saga';
import {TIMER_ME_ON, TIMER_ME_OFF} from '../../actions/ui/answers';

const uiTimerReducer = (state = {me: false, last: false}, action) => {
  switch (action.type) {
    case TIMER_ME_ON: {
      return set('me', true, state);
    }
    case TIMER_ME_OFF: {
      return set('me', false, state);
    }
    case TIMER_LAST_ON: {
      return set('last', true, state);
    }
    case TIMER_LAST_OFF: {
      return set('last', false, state);
    }
    default:
      return state;
  }
};

export default uiTimerReducer;
