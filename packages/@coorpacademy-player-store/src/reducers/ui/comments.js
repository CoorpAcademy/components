import {set} from 'lodash/fp';
import {UI_EDIT_COMMENT} from '../../actions/ui/comments';
import {UI_PROGRESSION_ACTION_TYPES} from '../../actions/ui/progressions';

const uiCommentReducer = (state = {text: null}, action) => {
  switch (action.type) {
    case UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION: {
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
