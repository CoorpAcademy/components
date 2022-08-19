import {Skill} from '../../types/common';
import {ReceivedSkills, SKILLS_FETCH_SUCCESS} from '../../actions/api/fetch-skills';

export type SkillsState = Skill[];

// eslint-disable-next-line default-param-last
const reducer = (state: SkillsState = [], action: ReceivedSkills): SkillsState => {
  switch (action.type) {
    case SKILLS_FETCH_SUCCESS:
      return action.payload;
    case 'ACTION': {
      return [
        {
          skillRef: 'string',
          slidesToReview: 3,
          custom: false,
          name: 'string'
        }
      ];
    }
    default:
      return state;
  }
};

export default reducer;
