import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'secondary',
    label: 'See my platform',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    onClick: () => console.log('click'),
    disabled: true
  }
};
export default fixture;
