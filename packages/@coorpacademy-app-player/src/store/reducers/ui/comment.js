import set from 'lodash/fp/set';
import {UI_EDIT_COMMENT, UI_POST_COMMENT} from '../../actions/ui/comment';

const uiCommentReducer = (state = {progressionId: null}, action) => {
  switch (action.type) {
    case UI_EDIT_COMMENT: {
      const {payload} = action;
      const {text} = payload;
      return set('text', text, state);
    }
    case UI_POST_COMMENT: {
      const {payload} = action;
      const {text} = payload;
      return set('text', text, state);
    }
    default:
      return state;
  }
};

export default uiCommentReducer;
