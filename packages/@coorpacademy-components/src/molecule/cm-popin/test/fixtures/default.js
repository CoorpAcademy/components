export default {
  props: {
    content: 'Do you want to publish the custom playlist?',
    icon: 'WindowUpload',
    firstButton: {
      label: 'Cancel',
      type: 'default',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Undo',
      type: 'warning',
      handleOnClick: () => {}
    }
  }
};
