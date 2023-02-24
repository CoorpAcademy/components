import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'primary',
    disabled: true,
    label: 'Global Analytics',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    icon: {
      position: 'right',
      type: 'analytics'
    },
    link: {
      href: 'https://www.google.com'
    }
  }
};
export default fixture;
