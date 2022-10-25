import {SkillsToReview} from '../../types/common';
import {ReceivedSkills, SKILLS_FETCH_SUCCESS} from '../../actions/api/fetch-skills';

export type SkillsState = SkillsToReview[];

const initialState: SkillsState = [];

const reducer = (
  // eslint-disable-next-line default-param-last
  state: SkillsState = initialState,
  action: ReceivedSkills
): SkillsState => {
  switch (action.type) {
    case SKILLS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
