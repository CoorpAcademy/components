export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillTitle: 'Critical thinking and analysis',
  skillAriaLabel: 'Skill aria label',
  metrics: {
    content: 89,
    questionsToReview: 25,
    contentCompleted: 50
  },
  onReviewClick: () => console.log('review'),
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
