import {set} from 'lodash/fp';
import {SEND_POST_COMMENT_REQUEST} from '../../actions/api/comments';
import {UI_PROGRESSION_ACTION_TYPES} from '../../actions/ui/progressions';

const dataCommentsReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION: {
      const {payload} = action;
      const {id} = payload;
      return set(['entities', id, 'isSent'], false, state);
    }
    case SEND_POST_COMMENT_REQUEST: {
      const {meta} = action;
      const {progressionId} = meta;
      return set(['entities', progressionId, 'isSent'], true, state);
    }
    default:
      return state;
  }
};

export default dataCommentsReducer;
