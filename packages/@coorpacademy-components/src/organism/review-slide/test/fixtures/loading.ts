import type {Fixture} from '../../prop-types';

const fixture: Fixture = {
  props: {
    slideIndex: '',
    num: 0,
    slide: {
      position: 0,
      loading: true,
      loadingAriaLabel: 'Review slide container is loading'
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    }
  }
};

export default fixture;
