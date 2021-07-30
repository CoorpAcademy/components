import {set, update, isNull, get, unset, pipe} from 'lodash/fp';
import {
  RECO_FETCH_REQUEST,
  RECO_FETCH_SUCCESS,
  RECO_FETCH_FAILURE
} from '../../actions/api/recommendations';

const dataRecommendationsReducer = (state = {entities: {}}, action) => {
  switch (action.type) {
    case RECO_FETCH_REQUEST: {
      const {meta} = action;
      const {id} = meta;
      return update(['entities', id], reco => reco || null, state);
    }
    case RECO_FETCH_SUCCESS: {
      const {payload, meta} = action;
      const {id} = meta;

      return set(['entities', id], payload, state);
    }
    case RECO_FETCH_FAILURE: {
      const {meta} = action;
      const {id} = meta;
      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export default dataRecommendationsReducer;
