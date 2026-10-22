import {filter} from 'lodash/fp';
import Logged from './logged';

// Battles moves from navigation to an optional stat.
export default {
  props: {
    ...Logged.props,
    user: {
      ...Logged.props.user,
      stats: {
        ...Logged.props.user.stats,
        battles: {
          href: '#battles',
          label: 'Battles',
          'aria-label': 'I have 3 waiting battles',
          counter: 3
        }
      }
    },
    pages: {
      ...Logged.props.pages,
      displayed: filter(page => page.title !== 'Battles', Logged.props.pages.displayed)
    }
  }
};
