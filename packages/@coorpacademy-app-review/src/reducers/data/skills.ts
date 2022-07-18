import {SKILLS_FETCH_SUCCESS, ReceivedSkills} from '../../actions/api/fetch-skills';
import {Skill} from '../../types/skills';

export type SkillsState = Skill[];
export const initialState: SkillsState = [];

// eslint-disable-next-line default-param-last
const reducer = (state: SkillsState = initialState, action: ReceivedSkills): SkillsState => {
  switch (action.type) {
    case SKILLS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
