import set from 'lodash/fp/set';
import {UI_REVIVAL_PENDING} from '../../actions/ui/extra-life';
import {PROGRESSION_FETCH_REQUEST} from '../../actions/api/progressions';

const uiExtraLifeReducer = (state = {acceptRevivalPending: false}, action) => {
  switch (action.type) {
    case UI_REVIVAL_PENDING: {
      return set('acceptRevivalPending', true, state);
    }
    case PROGRESSION_FETCH_REQUEST: {
      // return set('acceptRevivalPending', false, state);
      return state;
    }
    default:
      return state;
  }
};

export default uiExtraLifeReducer;
