import {cardListWithoutMicrolearning} from '../../../../organism/cards-grid/test/fixtures/catalog';

const onGoingCourses = {list: cardListWithoutMicrolearning.slice(0, 2)};

export const defaultProps = {
  title: 'Expert techniques for managing team conflict',
  coverImages: [
    {
      type: 'video',
      image:
        'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90'
    },
    {
      type: 'interactive',
      image: 'https://minecraft.fr/wp-content/uploads/2013/05/Pa8WZj1-235x300.jpg'
    },
    {
      type: 'podcast',
      image:
        'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-digital-core/cockpit-digital-2016/default/shutterstock_777835606-1616609267419.jpg&h=500&w=500&q=90&m=contain'
    },
    {
      type: 'document',
      image:
        'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=500&w=500&q=90'
    }
  ],
  playlistRef: 'expert-techniques',
  description:
    '<h3>This playlist</h3> is a comprehensive eLearning playlist designed for leaders, managers, and team members who want to master conflict resolution skills.',
  ongoingCourses: onGoingCourses,
  playlistCourses: {list: cardListWithoutMicrolearning},
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
