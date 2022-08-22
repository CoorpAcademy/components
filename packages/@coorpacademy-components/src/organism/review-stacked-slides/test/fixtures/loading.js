export default {
  props: {
    slides: {
      '0': {
        hidden: false,
        position: 0,
        loading: true,
        loadingAriaLabel: 'Review slide container is loading'
      },
      '1': {
        hidden: false,
        position: 1,
        loading: false
      },
      '2': {
        hidden: false,
        position: 2,
        loading: false
      },
      '3': {
        hidden: false,
        position: 3,
        loading: false
      },
      '4': {
        hidden: false,
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
