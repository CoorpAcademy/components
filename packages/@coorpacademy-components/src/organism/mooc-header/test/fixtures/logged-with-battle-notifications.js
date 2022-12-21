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
      picture: 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg',
      'picture-aria-label': 'My account',
      profileAvatarAlt: 'Your profile picture',
      notifications: {
        href: '#notifications',
        value: 5,
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
