import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {UI_OPEN_GAME} from '../../actions/ui/games';

const uiCurrentReducer = (state = {progressionId: null, userId: null}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    case UI_OPEN_GAME: {
      const {payload} = action;
      const {userId} = payload;
      console.log('set userId', userId)
      return set('userId', userId, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
