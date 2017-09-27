import set from 'lodash/fp/set';
import {UI_REVIVAL_PENDING} from '../../actions/ui/extra-life';

const uiExtraLifeReducer = (state = {acceptRevivalPending: false}, action) => {
  switch (action.type) {
    case UI_REVIVAL_PENDING: {
      return set('acceptRevivalPending', true, state);
    }
    default:
      return state;
  }
};

export default uiExtraLifeReducer;
