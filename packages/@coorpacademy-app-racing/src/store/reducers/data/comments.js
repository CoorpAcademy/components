import set from 'lodash/fp/set';
import {SEND_POST_COMMENT_REQUEST} from '../../actions/api/comments';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const dataCommentsReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
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
