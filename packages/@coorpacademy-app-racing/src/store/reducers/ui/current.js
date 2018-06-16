import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {UI_SELECT_USER} from '../../actions/ui/users';

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
    default:
      return state;
  }
};

export default uiCurrentReducer;
