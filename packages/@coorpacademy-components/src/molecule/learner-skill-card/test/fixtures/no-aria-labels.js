export const defaultProps = {
  'aria-label': 'Learner Skill Card',
  skillTitle: 'Critical thinking and analysis',
  metrics: {
    skillCourses: 89,
    skillQuestions: 25,
    completedCourses: 50
  },
  onReviewClick: () => console.log('review'),
  onExploreClick: () => console.log('explore')
};

export default {
  props: defaultProps
};
