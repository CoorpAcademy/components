import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    'aria-label': 'Learner Skill Card',
    type: 'skill',
    cardIndex: 0,
    title: 'Critical thinking and analysis ',
    label: 'Skill label',
    focus: false,
    progress: 65,
    metrics: {
      content: 89,
      questionsToReview: 25
    },
    icon: {
      color: COLORS.purple_700,
      name: 'banana'
    },
    onClick: () => console.log('explore')
  }
};
