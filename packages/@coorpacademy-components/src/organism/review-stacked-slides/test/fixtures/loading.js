export default {
  props: {
    slides: {
      '0': {
        hidden: false,
        position: 0
      },
      '1': {
        hidden: false,
        position: 1
      },
      '2': {
        hidden: false,
        position: 2
      },
      '3': {
        hidden: false,
        position: 3
      },
      '4': {
        hidden: false,
        position: 4
      }
    },
    endReview: false,
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    },
    finishedSlides: {
      '0': true
    },
    finishedSlidesSize: 1,
    loadingAriaLabel: 'Review slides container is loading'
  }
};
