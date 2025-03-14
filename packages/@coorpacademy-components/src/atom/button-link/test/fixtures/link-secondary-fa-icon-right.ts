import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'secondary',
    label: 'Global Analytics',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    icon: {
      position: 'right',
      faIcon: {
        name: 'analytics',
        color: '#515161',
        size: 16
      }
    },
    onClick: () => {
      console.log('Click on link');
      return;
    },
    link: {
      href: 'https://www.google.com'
    }
  }
};
export default fixture;
