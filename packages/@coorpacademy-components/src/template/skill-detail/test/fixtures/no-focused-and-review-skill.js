import {cardListWithoutMicrolearning} from '../../../../organism/cards-grid/test/fixtures/catalog';

export const defaultProps = {
  title: 'Conflict management',
  skillRef: 'conflict-management',
  description:
    'Conflict management is the skill of handling disagreements constructively through effective communication, active listening, and finding mutually beneficial resolutions. It helps navigate tensions, foster collaboration, and maintain a positive environment by preventing conflicts from escalating.',
  metrics: {
    score: 60,
    totalContents: 10,
    questionsToReview: 25
  },
  focused: false,
  availableForReview: false,
  ongoingCoursesAvailable: true,
  skillIncludedCourses: {list: cardListWithoutMicrolearning},
  filters: {
    options: [
      {
        name: 'All content',
        value: 'ALL',
        selected: true
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
  onReviewClick: () => console.log('Review clicked'),
  onContinueLearningClick: () => console.log('Continue learning clicked'),
  bannerMicrolearningRuleAction: () => console.log('click on banner')
};

export default {
  props: defaultProps
};
