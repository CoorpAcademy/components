import {FetchSkillAction, FETCH_SKILL_REQUEST, FETCH_SKILL_SUCCESS} from '../../actions/api/skills';
import {Skills} from '../../types/skills';

export type SkillsState = Skills | null;
export const initialState: SkillsState = [];

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: SkillsState = initialState, action: FetchSkillAction): SkillsState => {
  switch (action.type) {
    case FETCH_SKILL_REQUEST:
      return null;
    case FETCH_SKILL_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
