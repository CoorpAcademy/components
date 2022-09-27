export default {
  props: {
    content: 'An unexpected error has occurred',
    icon: 'AlertDiamond',
    mode: 'alert',
    descriptionText: 'Please reload the page and try again',
    secondButton: {
      largeButton: true,
      label: 'Reload',
      type: 'primary',
      'aria-label': 'Reload',
      handleOnClick: () => {}
    },
    onClose: () => console.log('onClose')
  }
};
