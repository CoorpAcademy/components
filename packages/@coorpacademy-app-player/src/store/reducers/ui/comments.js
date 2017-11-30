import set from 'lodash/fp/set';
import {UI_EDIT_COMMENT} from '../../actions/ui/comments';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const uiCommentReducer = (state = {text: null}, action) => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      return set('text', null, state);
    }
    case UI_EDIT_COMMENT: {
      return set('text', action.payload.text, state);
    }
    default:
      return state;
  }
};

export default uiCommentReducer;
