import {getOr, isNumber} from 'lodash/fp';
import {HIDE_TOURGUIDE, SET_TOURGUIDE_STEP, SHOW_TOURGUIDE} from '../../actions/ui/tourguide';

const initialState = {
  visible: false,
  step: 0,
  hasTourGuideBeenShown: false,
  forceStart: false
};

const getNextStep = (action, currentState) =>
  action && action.payload && isNumber(action.payload.step)
    ? action.payload.step
    : currentState.step;

const reducer = (state, action) => {
  const currentState = state || initialState;
  switch (action.type) {
    case SHOW_TOURGUIDE: {
      const nextStep = getNextStep(action, currentState);
      return {
        ...currentState,
        visible: true,
        step: nextStep,
        hasTourGuideBeenShown: true,
        forceStart: getOr(false, 'payload.forceStart', action)
      };
    }
    case HIDE_TOURGUIDE:
      return {
        ...currentState,
        visible: false
      };
    case SET_TOURGUIDE_STEP: {
      const nextStep = getNextStep(action, currentState);
      return {
        ...currentState,
        step: nextStep
      };
    }
    default:
      return currentState;
  }
};

export default reducer;
