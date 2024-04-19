export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillCourses: 89,
  skillQuestions: 25,
  skillTitle: 'Critical thinking and analysis',
  completedCourses: 20,
  buttonReviewLabel: 'Review',
  buttonExploreLabel: 'Explore',
  onReviewClick: () => console.log('review'),
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
