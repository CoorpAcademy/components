export default {
  props: {
    content: 'Are you sure to undo this changes? This will be permanent',
    icon: 'AlertDiamond',
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-label': 'Cancel this operation',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Undo',
      type: 'dangerous',
      'aria-label': 'Undo this operation',
      handleOnClick: () => {}
    }
  }
};
