import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
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
      notifications: {
        href: '#notifications',
        value: 5
      },
      href: '#account',
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
        },
        myList: {
          href: '#',
          label: 'My List',
          'aria-label': 'My List'
        }
      }
    }
  })
};
