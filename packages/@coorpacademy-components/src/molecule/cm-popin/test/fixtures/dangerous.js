export default {
  props: {
    content: 'Are you sure to undo this changes? This will be permanent',
    icon: 'AlertDiamond',
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-lable': 'Cancel this operation',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Undo',
      type: 'dangerous',
      'aria-lable': 'Undo this operation',
      handleOnClick: () => {}
    }
  }
};
