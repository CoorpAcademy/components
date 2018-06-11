import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import isNull from 'lodash/fp/isNull';
import {UI_SELECT_ROUTE} from '../../actions/ui/route';

const uiRouteReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_SELECT_ROUTE: {
      const route = payload;
      const {progressionId} = meta;
      if (isNull(route)) return unset(progressionId, state);
      return set(progressionId, route, state);
    }
    default:
      return state;
  }
};

export default uiRouteReducer;
