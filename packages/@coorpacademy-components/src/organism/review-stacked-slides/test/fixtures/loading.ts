import {ReviewStackProps} from '../../prop-types';

type Fixture = {
  props: ReviewStackProps;
};

const fixture: Fixture = {
  props: {
    slides: {
      0: {
        position: 0,
        loading: true,
        loadingAriaLabel: 'Review slide container is loading'
      },
      1: {
        position: 1,
        loading: false
      },
      2: {
        position: 2,
        loading: false
      },
      3: {
        position: 3,
        loading: false
      },
      4: {
        position: 4,
        loading: false
      }
    },
    endReview: false,
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    }
  }
};

export default fixture;
