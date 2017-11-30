import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import {UI_EDIT_COMMENT} from '../../actions/ui/comments';
import {SEND_POST_COMMENT_REQUEST} from '../../actions/api/comments';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const uiCommentReducer = (state = {text: null, isSent: false}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      return pipe(set('text', null), set('isSent', false))(state);
    }
    case SEND_POST_COMMENT_REQUEST: {
      return set('isSent', true, state);
    }
    case UI_EDIT_COMMENT: {
      const {payload} = action;
      const {text} = payload;
      return set('text', text, state);
    }
    default:
      return state;
  }
};

export default uiCommentReducer;
