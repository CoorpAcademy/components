import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'tertiary',
    label: 'Button',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    icon: {
      position: 'left',
      faIconName: 'eye',
      faIconSize: 16
    },
    onClick: () => console.log('click')
  }
};
export default fixture;
