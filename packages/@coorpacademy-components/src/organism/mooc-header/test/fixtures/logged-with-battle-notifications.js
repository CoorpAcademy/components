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
          counter: 3
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
        }
      }
    }
  })
};
