import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS
} from '../../actions/api/progressions';

const uiCurrentReducer = (state = {progressionId: null}, action) => {
  switch (action.type) {
    // case PROGRESSION_EXTRALIFEACCEPTED_SUCCESS:
    // case PROGRESSION_EXTRALIFEREFUSED_SUCCESS: {
    //   return set('ready', false, state);
    // }

    case UI_SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
