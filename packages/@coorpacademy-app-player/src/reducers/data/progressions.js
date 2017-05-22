import set from 'lodash/fp/set';
import {PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_REQUEST} from '../../actions/progressions';

export default (state = {entities: {}}, action) => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    case PROGRESSION_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return set(['entities', id], null, state);
    }
    default:
      return state;
  }
};
