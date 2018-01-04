import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import isNull from 'lodash/fp/isNull';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../actions/api/progressions';
import {UI_SELECT_ROUTE} from '../../actions/ui/route';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const uiRouteReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const {progressionId} = meta;
      const {state: {isCorrect}} = payload;

      if (!isNull(isCorrect)) return state;
      return unset(progressionId, state);
    }
    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      const {progressionId} = meta;
      return set(progressionId, 'correction', state);
    }
    case UI_SELECT_PROGRESSION: {
      const {id: progressionId} = payload;
      return unset(progressionId, state);
    }
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
