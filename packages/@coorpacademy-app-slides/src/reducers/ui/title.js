import includes from 'lodash/fp/includes';
import {combineReducers} from 'redux';
import {UI_UPDATE_TITLE} from '../../actions/ui-slider';

const updateTitle = (state = {}, action) => {
  if (includes(action.type, [UI_UPDATE_TITLE])) {
    state.label = action.payload.value;
  }

  return state;
};

export default combineReducers({
  updateTitle
});
