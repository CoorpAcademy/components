import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {UI_SELECT_USER} from '../../actions/ui/users';
import {
  PROGRESSION_WAIT_FOR_REFRESH_REQUEST,
  PROGRESSION_WAIT_FOR_REFRESH_SUCCESS,
  PROGRESSION_WAIT_FOR_REFRESH_FAILURE
} from '../../actions/api/progressions';

const uiCurrentReducer = (state = {progressionId: null, userId: null}, action) => {
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
    case PROGRESSION_WAIT_FOR_REFRESH_REQUEST: {
      const {meta: {id}} = action;
      return set([id, 'polling'], true, state);
    }
    case PROGRESSION_WAIT_FOR_REFRESH_FAILURE:
    case PROGRESSION_WAIT_FOR_REFRESH_SUCCESS: {
      const {meta: {id}} = action;
      return set([id, 'polling'], false, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
