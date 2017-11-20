import buildTask from '../../utils/redux-task';
import {
  getProgressionContent,
  getCurrentContent,
  getNextContentFromRecommendations
} from '../../utils/state-extract';

export const UI_EDIT_COMMENT = '@@ui/EDIT_COMMENT';

export const editComment = text => (dispatch, getState, {services}) => {
  payload: {text};
  return payload;
};



