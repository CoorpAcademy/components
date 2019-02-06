import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import isNull from 'lodash/fp/isNull';
import {UI_SELECT_ROUTE} from '../../actions/ui/route';
import {UI_PROGRESSION_ACTION_TYPES} from '../../actions/ui/progressions';

const uiRouteReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION: {
      const {id: progressionId} = payload;
      return unset(progressionId, state);
    }
    case UI_SELECT_ROUTE: {
      const route = payload;
      const {progressionId} = meta;
      if (isNull(route)) return set(progressionId, 'answer', state);
      return set(progressionId, route, state);
    }
    default:
      return state;
  }
};

export default uiRouteReducer;
