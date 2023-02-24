import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'text',
    label: 'Button',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    icon: {
      position: 'right',
      type: 'chevron-left'
    },
    link: {
      href: 'http://www.google.com',
      target: '_blank'
    }
  }
};
export default fixture;
