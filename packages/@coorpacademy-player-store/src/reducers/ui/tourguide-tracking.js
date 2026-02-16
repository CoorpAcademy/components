import {
  TOURGUIDE_TRACK_COMPLETED,
  TOURGUIDE_TRACK_DISMISSED,
  TOURGUIDE_TRACK_STARTED,
  TOURGUIDE_TRACK_STEP_VIEWED
} from '../../actions/ui/tourguide-tracking';

const initialState = {
  lastEvent: null
};

const reducer = (state, action) => {
  const currentState = state || initialState;
  switch (action.type) {
    case TOURGUIDE_TRACK_STARTED:
    case TOURGUIDE_TRACK_STEP_VIEWED:
    case TOURGUIDE_TRACK_COMPLETED:
    case TOURGUIDE_TRACK_DISMISSED:
      return {
        ...currentState,
        lastEvent: {
          type: action.type,
          payload: action.payload
        }
      };
    default:
      return currentState;
  }
};

export default reducer;
