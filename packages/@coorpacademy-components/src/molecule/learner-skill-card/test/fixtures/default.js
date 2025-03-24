export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillTitle: 'Critical thinking and analysis',
  skillAriaLabel: 'Skill aria label',
  metrics: {
    content: 89,
    score: 65,
    questionsToReview: 25
  },
  skill: {
    title: 'Critical thinking and analysis',
    ariaLabel: 'Skill aria label',
    iconColor: '#A32700',
    iconName: 'circle'
  },
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
