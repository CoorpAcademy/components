import set from 'lodash/fp/set';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../actions/api/slides';

export default (state = {entities: {}}, action) => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return set(['entities', id], null, state);
    }
    case SLIDE_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;
      return set(['entities', id], payload, state);
    }
    default:
      return state;
  }
};
