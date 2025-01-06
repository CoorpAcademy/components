export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillTitle: 'Critical thinking and analysis',
  metrics: {
    content: 89,
    score: 65,
    questionsToReview: 25
  },
  onReviewClick: () => console.log('review'),
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
