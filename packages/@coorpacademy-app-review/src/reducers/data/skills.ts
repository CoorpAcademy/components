import {ReceivedSkills, RECEIVED_SKILLS} from '../../actions/data/skills';
import {Skills} from '../../types/skills';

export type SkillsState = Skills;
export const initialState: SkillsState = [];

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: SkillsState = initialState, action: ReceivedSkills): SkillsState => {
  switch (action.type) {
    case RECEIVED_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
