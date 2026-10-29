export default {
  props: {
    content: 'Publish changes?',
    descriptionText: 'This assignment is active: learners see the change at the next sync.',
    warning: 'The impact of this change could not be computed.',
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-label': 'Cancel',
      handleOnclick: () => {}
    },
    secondButton: {
      label: 'Publish changes',
      type: 'primary',
      'aria-label': 'Publish changes',
      handleOnclick: () => {}
    }
  }
};
