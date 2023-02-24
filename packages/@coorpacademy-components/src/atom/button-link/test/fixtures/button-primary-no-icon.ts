import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'primary',
    label: 'See my platform',
    'data-name': 'default-button',
    onClick: () => console.log('click')
  }
};
export default fixture;
