export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillCourses: 89,
  skillQuestions: 25,
  skillTitle: 'Critical thinking and analysis',
  skillAriaLabel: 'Skill aria label',
  completedCourses: 50,
  buttonReviewLabel: 'Review',
  buttonReviewAriaLabel: 'Button review aria label',
  buttonExploreLabel: 'Explore',
  buttonExploreAriaLabel: 'Button explore aria label',
  onReviewClick: () => console.log('review'),
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
