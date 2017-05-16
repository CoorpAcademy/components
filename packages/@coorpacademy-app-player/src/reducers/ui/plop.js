import {UI_UPDATE_PLOP} from '../../actions/ui-demo';

const plop = (state = {}, action) => {
  switch (action.type) {
    case UI_UPDATE_PLOP:
      return action.plop;
    default:
      return state;
  }
};

export default plop;
