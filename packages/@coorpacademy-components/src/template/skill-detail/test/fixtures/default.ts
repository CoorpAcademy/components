import {cardListWithoutMicrolearning} from '../../../../organism/cards-grid/test/fixtures/catalog';

export const defaultProps = {
  title: 'Conflict management',
  skillRef: 'conflict-management',
  description: `**Conditions** - complete the Basics levels of the following courses:
 - The tire e-commerce market
 - The mobile revolution 
 - Big Data 
 - The user experience 
 - Connected point of sale
`,
  icon: {color: '#AC8E4F', name: 'circle'},
  metrics: {
    score: 60.73738,
    totalContents: 10,
    questionsToReview: 25
  },
  focused: true,
  availableForReview: true,
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
    onChange: (value: string) => console.log(value)
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
    onChange: (value: string) => console.log(value)
  },
  onBackClick: () => console.log('Back clicked'),
  onReviewClick: () => console.log('Review clicked'),
  onContinueLearningClick: () => console.log('Continue learning clicked'),
  bannerMicrolearning: {
    action: () => console.log('click on banner')
  },
  search: {
    onChange: () => console.log('on change search')
  }
};

export default {
  props: defaultProps
};
