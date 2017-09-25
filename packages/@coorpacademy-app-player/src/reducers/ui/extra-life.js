import set from 'lodash/fp/set';
import {UI_EXTRALIFE_PENDING} from '../../actions/ui/video';

const uiExtraLifeReducer = (state = {acceptPending: false}, action) => {
  switch (action.type) {
    case UI_EXTRALIFE_PENDING: {
      return set('acceptPending', true, state);
    }
    default:
      return state;
  }
};

export default uiExtraLifeReducer;
