import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import {NEXT_CONTENT_FETCH_SUCCESS} from '../../actions/api/contents';

const uiCurrentReducer = (state = {progressionId: null}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return pipe(set('progressionId', id), unset('nextContentRef'))(state);
    }
    case NEXT_CONTENT_FETCH_SUCCESS: {
      const {payload} = action;
      if (isEmpty(payload)) {
        return state;
      }
      return set('nextContentRef', payload.ref, state);
    }
    default:
      return state;
  }
};

export default uiCurrentReducer;
