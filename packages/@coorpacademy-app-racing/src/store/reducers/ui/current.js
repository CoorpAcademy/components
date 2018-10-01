import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import {allTeammatesHaveAnswered} from '../../utils/state-extract';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {UI_SELECT_USER} from '../../actions/ui/users';
import {PROGRESSION_CREATE_ANSWER_SUCCESS} from '../../actions/api/progressions';

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
      const currenUserId = get('userId', state);
      const readyForNextQuestion = allTeammatesHaveAnswered(progression, currenUserId);
      return set('readyForNextQuestion', readyForNextQuestion, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
