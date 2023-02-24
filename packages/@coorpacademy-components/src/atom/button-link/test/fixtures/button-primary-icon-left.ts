import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'primary',
    label: 'See my platform',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    icon: {
      position: 'left',
      type: 'chevron-left'
    },
    onClick: () => console.log('click')
  }
};
export default fixture;
