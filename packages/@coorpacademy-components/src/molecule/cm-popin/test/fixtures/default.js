export default {
  props: {
    content: 'Do you want to publish the custom playlist?',
    icon: 'WindowUpload',
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      handleOnClick: () => {},
      'aria-lable': 'Cancel this operation'
    },
    secondButton: {
      label: 'Undo',
      type: 'primary',
      handleOnClick: () => {},
      'aria-lable': 'Undo this operation'
    }
  }
};
