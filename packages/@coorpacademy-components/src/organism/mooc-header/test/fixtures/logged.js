import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../mooc/image-slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    slider,
    pages: {
      displayed: [
        {},
        {
          counter: 3
        }
      ]
    },
    user: {
      picture: 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg',
      notifications: 5,
      href: '#',
      stats: {
        stars: {
          href: '#',
          label: '124'
        },
        ranking: {
          href: '#',
          label: '5ème'
        },
        badge: {
          href: '#',
          label: 'Gold'
        }
      }
    }
  })
};
