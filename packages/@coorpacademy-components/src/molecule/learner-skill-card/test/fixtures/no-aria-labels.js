export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  title: 'Critical thinking and analysis',
  metrics: {
    content: 89,
    score: 65,
    questionsToReview: 25
  },
  skill: {
    title: 'Critical thinking and analysis'
  },
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
