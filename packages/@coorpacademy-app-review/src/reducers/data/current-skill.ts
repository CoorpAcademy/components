import {Skill} from '@coorpacademy/review-services/es/types/services-types';
import {ReceivedSkill, SKILL_FETCH_SUCCESS} from '../../actions/api/fetch-skill';

export type CurrentSkillState = Skill | null;

const initialState: CurrentSkillState = null;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CurrentSkillState = initialState,
  action: ReceivedSkill
): CurrentSkillState => {
  switch (action.type) {
    case SKILL_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
