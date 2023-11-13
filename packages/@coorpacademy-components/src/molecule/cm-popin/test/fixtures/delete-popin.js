export default {
  props: {
    content: 'Delete import',
    descriptionText: `Do you want to delete this import? \n This will be permanent`,
    icon: 'AlertIcon',
    onClose: () => {
      console.log('close');
    },
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-label': 'Cancel this operation',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Delete',
      type: 'dangerous',
      'aria-label': 'Delete this operation',
      icon: {
        position: 'left',
        type: 'delete'
      },
      handleOnClick: () => {}
    }
  }
};
