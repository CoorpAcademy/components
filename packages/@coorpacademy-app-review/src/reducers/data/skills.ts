import {SkillsState} from '../../types/common';
import {SKILLS_FETCH_SUCCESS, ReceivedSkills} from '../../actions/api/fetch-skills';

// eslint-disable-next-line default-param-last
const reducer = (state: SkillsState = [], action: ReceivedSkills): SkillsState => {
  switch (action.type) {
    case SKILLS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
