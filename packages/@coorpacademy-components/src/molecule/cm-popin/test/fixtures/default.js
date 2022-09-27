export default {
  props: {
    content: 'Do you want to publish the custom playlist?',
    icon: 'WindowUpload',
    onClose: () => {
      console.log('close');
    },
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      handleOnclick: () => {
        console.log('cancel');
      },
      'aria-label': 'Cancel this operation',
    },
    secondButton: {
      label: 'Undo',
      type: 'primary',
      handleOnclick: () => {
        console.log('undo');
      },
      'aria-label': 'Undo this operation'
    }
  }
};
