import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'tertiary',
    label: 'Go to google',
    'data-name': 'default-button',
    'data-testid': 'default-button',
    'aria-label': 'aria button',
    onClick: () => {
      console.log('Click on link');
      return;
    },
    link: {
      href: 'https://www.google.com'
    },
    useTitle: false
  }
};
export default fixture;
