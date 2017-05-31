import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import values from 'lodash/fp/values';
import includes from 'lodash/fp/includes';
import {ANSWER_EDIT} from '../../actions/ui/answers';
import {ANSWER_CREATE_SUCCESS} from '../../actions/api/answers';

const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

export default (state = {}, {type, payload, meta}) => {
  if (includes(type, ANSWER_EDIT_ACTIONS)) {
    const {progressionId} = meta;
    return set(progressionId, payload, state);
  }

  switch (type) {
    case ANSWER_CREATE_SUCCESS: {
      const {progressionId} = meta;
      return unset(progressionId, state);
    }
    default:
      return state;
  }
};
