import set from 'lodash/fp/set';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../actions/slides';

export default (state = {entities: {}}, action) => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      const {meta} = action;
      const {ref} = meta;
      return set(['entities', ref], null, state);
    }
    case SLIDE_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {ref} = meta;
      return set(['entities', ref], payload, state);
    }
    default:
      return state;
  }
};
