import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui';

export default (state = {progressionId: null}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    default:
      return state;
  }
};
