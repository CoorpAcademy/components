import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import {allTeammatesHaveAnswered} from '../../utils/state-extract';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {UI_SELECT_USER} from '../../actions/ui/users';
import {UI_SEE_QUESTION} from '../../actions/ui/location';
import {PROGRESSION_CREATE_ANSWER_SUCCESS} from '../../actions/api/progressions';
import {CHECK_READY_FOR_NEXT_QUESTION} from '../../middlewares/polling-saga';

const uiCurrentReducer = (
  state = {progressionId: null, userId: null, readyForNextQuestion: false},
  action
) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    case UI_SELECT_USER: {
      const {payload} = action;
      const {id} = payload;
      return set('userId', id, state);
    }
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {payload: progression} = action;
      const currentUserId = get('userId', state);
      const readyForNextQuestion = allTeammatesHaveAnswered(progression, currentUserId);
      return set('readyForNextQuestion', readyForNextQuestion, state);
    }
    case CHECK_READY_FOR_NEXT_QUESTION: {
      const {payload, meta} = action;
      const {progression} = payload;
      const {currentUserId, currentView} = meta;
      const readyForNextQuestion =
        currentView === 'race' && allTeammatesHaveAnswered(progression, currentUserId);
      return set('readyForNextQuestion', readyForNextQuestion, state);
    }
    case UI_SEE_QUESTION: {
      return set('readyForNextQuestion', false, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
