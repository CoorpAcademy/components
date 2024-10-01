import cardsGrid from '../../../../organism/cards-grid/test/fixtures/catalog';

const cards = cardsGrid.props;
const allCourses = cards;
const onGoingCourses = {list: cards.list.slice(0, 2)};

export const defaultProps = {
  title: 'Expert techniques for managing team conflict',
  coverImages: [
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    'https://minecraft.fr/wp-content/uploads/2013/05/Pa8WZj1-235x300.jpg',
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-digital-core/cockpit-digital-2016/default/shutterstock_777835606-1616609267419.jpg&h=500&w=500&q=90&m=contain',
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=500&w=500&q=90'
  ],
  playlistRef: 'expert-techniques',
  description:
    'This playlist is a comprehensive eLearning playlist designed for leaders, managers, and team members who want to master conflict resolution skills. This series will equip you with proven strategies to identify, address, and resolve conflicts within teams, fostering a collaborative and productive work environment. Through real-world scenarios, expert insights, and practical tools, you will learn how to navigate challenging conversations, mediate disputes, and build stronger, more cohesive teams. Perfect for anyone looking to enhance their leadership skills and promote harmony in the workplace.',
  ongoingCourses: onGoingCourses,
  playlistCourses: allCourses,
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
