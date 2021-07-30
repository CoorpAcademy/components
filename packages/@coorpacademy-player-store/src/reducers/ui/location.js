import {set} from 'lodash/fp';
import {
  SET_REDIRECT_URL_AFTER_END_REQUEST,
  SET_REDIRECT_URL_AFTER_END_SUCCESS
} from '../../actions/ui/location';

const uiLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REDIRECT_URL_AFTER_END_REQUEST: {
      return set('redirectURLAfterEnd', '', state);
    }
    case SET_REDIRECT_URL_AFTER_END_SUCCESS: {
      const {payload} = action;
      return set('redirectURLAfterEnd', payload, state);
    }
    default:
      return state;
  }
};

export default uiLocationReducer;
