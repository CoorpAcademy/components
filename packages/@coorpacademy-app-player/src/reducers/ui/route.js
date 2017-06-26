import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import isNull from 'lodash/fp/isNull';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../actions/api/progressions';
import {UI_SELECT_ROUTE} from '../../actions/ui/route';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

export default (state = {}, {type, payload, meta}) => {
  switch (type) {
    case PROGRESSION_CREATE_ANSWER_REQUEST:
    case PROGRESSION_CREATE_ANSWER_SUCCESS:
    case PROGRESSION_CREATE_ANSWER_FAILURE: {
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
