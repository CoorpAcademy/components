import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'secondary',
    icon: {
      position: 'left',
      type: 'loader'
    },
    label: 'Saving...',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    onClick: () => console.log('click'),
    disabled: true
  }
};
export default fixture;
