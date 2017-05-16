import set from 'lodash/fp/set';
import {PROGRESSION_FETCH_SUCCESS, ANSWER_CREATE_SUCCESS} from '../../actions/progressions';

export default (state = {entities: {}}, action) => {
  switch (action.type) {
    case ANSWER_CREATE_SUCCESS:
    case PROGRESSION_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    default:
      return state;
  }
};
