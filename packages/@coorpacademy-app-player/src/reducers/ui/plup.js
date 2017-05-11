import {UI_UPDATE_PLUP} from '../../actions/ui-demo';

const plup = (state = {}, action) => {
  switch (action.type) {
    case UI_UPDATE_PLUP:
      return action.plup;
    default:
      return state;
  }
};

export default plup;
