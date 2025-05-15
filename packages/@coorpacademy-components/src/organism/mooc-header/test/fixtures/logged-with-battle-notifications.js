import {defaultsDeep} from 'lodash/fp';
import SearchBar from '../../../../atom/input-search/test/fixtures/default';
import Default from './default';

const research = SearchBar.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    pages: {
      displayed: [
        {},
        {
          counter: 3,
          'page-count-aria-label': 'You have 3 waiting battles'
        }
      ]
    },
    search: {
      ...research,
      onChange: value => console.log(value),
      onFocus: () => console.log('on Focus'),
      onBlur: () => console.log('blur')
    },
    onSubmitSearch: () => console.log('onSubmitSearch'),
    onResetSearch: () => console.log('onResetSearch'),
    user: {
      picture: 'https://scontent-mrs2-2.xx.fbcdn.net/v/t1.6435-1/120761227_1722332637949054_8571977201663070803_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=0ZdRe3yT0RwQ7kNvwFSiHUv&_nc_oc=AdnYBkMDt2ioIej7NcYf6j50r3VPqg7SER4qFP7TC1PxncWJOif1eyUKvntfv7R6A8zk8tCkbRt6lXtNKnfH97L7&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=DC2DI06smfYb1YJXPLK-OQ&oh=00_AfL-GI_R2CzdsTv_O8LUcxznnuZz8BDQBYEcwJwXLa5iyA&oe=684C066B',
      'picture-aria-label': 'My account',
      profileAvatarAlt: 'Your profile picture',
      notifications: {
        href: '#notifications',
        value: 0,
        'aria-label': 'you have 5 new notificationss'
      },
      href: '#account',
      stats: {
        stars: {
          href: '#',
          label: '124',
          'aria-label': 'You have 124 stars'
        },
        ranking: {
          href: '#',
          label: '5ème',
          'aria-label': 'You are ranked 5th'
        },
        badge: {
          href: '#',
          label: 'Gold',
          'aria-label': 'You have a gold badge'
        }
      }
    }
  })
};
