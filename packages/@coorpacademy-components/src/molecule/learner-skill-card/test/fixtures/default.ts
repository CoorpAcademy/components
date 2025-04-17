import {LearnerSkillCardProps} from '../../prop-types';
import {COLORS} from '../../../../variables/colors';

const defaultProps: LearnerSkillCardProps = {
  'aria-label': 'Learner Skill Card',
  cardIndex: 0,
  skillTitle: 'Critical thinking and analysis ',
  skillAriaLabel: 'Skill aria label',
  focus: false,
  metrics: {
    content: 89,
    score: 65,
    questionsToReview: 25
  },
  icon: {
    color: COLORS.purple_700,
    name: 'banana'
  },
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
