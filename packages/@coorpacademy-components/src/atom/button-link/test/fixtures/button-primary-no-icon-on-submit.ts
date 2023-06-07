import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'primary',
    label: 'See my platform',
    'data-name': 'default-button',
    onSubmit: () => console.log('submit'),
    buttonType: 'submit'
  }
};
export default fixture;
