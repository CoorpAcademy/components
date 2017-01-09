import includes from 'lodash/fp/includes';
import {combineReducers} from 'redux';
import {
  UI_UPDATE_DISCUSSION_TEXTAREA,
  UI_RESET_DISCUSSION_TEXTAREA
} from '../../actions/ui-discussion';

const textarea = (state = {}, action) => {
  if (includes(action.type, [UI_UPDATE_DISCUSSION_TEXTAREA])) {
    state.value = action.payload.value;
    state.postDisabled = state.value.trim().length === 0;
  }

  if (includes(action.type, [UI_RESET_DISCUSSION_TEXTAREA])) {
    state.value = '';
    state.postDisabled = true;
  }

  return state;
};

export default combineReducers({
  textarea
});
