import {ReceivedSkill, SKILL_FETCH_SUCCESS} from '../../actions/api/fetch-skill';
import {Skill} from '../../types/common';

export type SkillState = Skill;

const initialState: Skill = {
  ref: '',
  name: ''
};
const reducer = (
  // eslint-disable-next-line default-param-last
  state: SkillState = initialState,
  action: ReceivedSkill
): SkillState => {
  switch (action.type) {
    case SKILL_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
