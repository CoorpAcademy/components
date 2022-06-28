import {ReceivedSkills, RECEIVED_SKILLS} from '../../actions/data/skills';
import {Skills} from '../../types/skills';

export type State = Skills;
export const initialState: State = [];

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: ReceivedSkills): State => {
  switch (action.type) {
    case RECEIVED_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
