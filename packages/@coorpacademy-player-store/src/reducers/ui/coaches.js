import {getOr, set} from 'lodash/fp';
import {UI_UPDATE_COACHES} from '../../actions/ui/coaches';

const uiCoachesReducer = (state = {availableCoaches: 0}, action) => {
  switch (action.type) {
    case UI_UPDATE_COACHES: {
      const {payload} = action;
      const coaches = getOr([], 'coachForDiscipline', payload);
      return set('availableCoaches', coaches.length, state);
    }
    default:
      return state;
  }
};

export default uiCoachesReducer;
