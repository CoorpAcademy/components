import cardsGrid from '../../../../organism/cards-grid/test/fixtures/catalog';

const cards = cardsGrid.props;
const allCourses = cards;
const onGoingCourses = {list: cards.list.slice(0, 2)};

export const defaultProps = {
  certificationRef: 'cert_1',
  title: 'Expert techniques for managing team conflict',
  logoUrl: 'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png',
  metrics: {
    progression: 50,
    stars: 250,
    completedCourses: 5,
    completedModules: 10
  },
  badge: {
    badgeUrl:
      'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png',
    onDownloadBadge: () => console.log('click on download badge')
  },
  playlistRef: 'expert-techniques',
  description:
    'This playlist is a comprehensive eLearning playlist designed for leaders, managers, and team members who want to master conflict resolution skills. This series will equip you with proven strategies to identify, address, and resolve conflicts within teams, fostering a collaborative and productive work environment. Through real-world scenarios, expert insights, and practical tools, you will learn how to navigate challenging conversations, mediate disputes, and build stronger, more cohesive teams. Perfect for anyone looking to enhance their leadership skills and promote harmony in the workplace.',
  ongoingCourses: onGoingCourses,
  certificationCourses: allCourses,
  totalCourses: 5,
  totalModules: 12,
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
        value: 'video',
        selected: false
      },
      {
        name: 'Animated ressources',
        value: 'scorm',
        selected: false
      },
      {
        name: 'Podcast',
        value: 'podcast',
        selected: false
      },
      {
        name: 'Document',
        value: 'document',
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
