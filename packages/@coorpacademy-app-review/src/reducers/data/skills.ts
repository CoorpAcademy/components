import {Skill} from '../../types/common';
import {ReceivedSkills, SKILLS_FETCH_SUCCESS} from '../../actions/api/fetch-skills';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type SkillsState = Skill[];

const initialState: SkillsState = [];

const reducer = (
  // eslint-disable-next-line default-param-last
  state: SkillsState = initialState,
  action: ReceivedSkills | FetchProgression
): SkillsState => {
  switch (action.type) {
    case SKILLS_FETCH_SUCCESS:
      return action.payload;
    case POST_PROGRESSION_REQUEST:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
