import cardsGrid from '../../../../organism/cards-grid/test/fixtures/catalog';

const cards = cardsGrid.props;
const allCourses = cards;

export const defaultProps = {
  title: 'Conflict management',
  skillRef: 'conflict-management',
  description:
    'Conflict management is the skill of handling disagreements constructively through effective communication, active listening, and finding mutually beneficial resolutions. It helps navigate tensions, foster collaboration, and maintain a positive environment by preventing conflicts from escalating.',
  focused: true,
  availableForReview: true,
  ongoingCoursesAvailable: true,
  skillIncludedCourses: allCourses,
  totalCourses: 10,
  filters: {
    options: [
      {
        name: 'All content',
        value: 'ALL',
        selected: true
      },
      {
        name: "5' learning",
        value: 'microlearning',
        selected: false
      },
      {
        name: 'Courses',
        value: 'learner',
        selected: false
      },
      {
        name: 'Video',
        value: 'scorm',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  },
  sorting: {
    theme: 'skillDetail',
    options: [
      {
        name: 'Position',
        value: 'Position',
        selected: true
      },
      {
        name: 'Most popular',
        value: 'Most popular',
        selected: false
      },
      {
        name: 'Newest',
        value: 'Newest',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  },
  onBackClick: () => console.log('Back clicked'),
  onReviewClick: () => console.log('Review clicked'),
  onContinueLearningClick: () => console.log('Continue learning clicked')
};

export default {
  props: defaultProps
};
