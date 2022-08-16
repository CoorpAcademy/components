export default {
  props: {
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
