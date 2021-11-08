export default {
  props: {
    content: 'Are you sure to undo this changes? This will be permanent',
    icon: 'AlertDiamond',
    firstButton: {
      label: 'Cancel',
      type: 'default',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Undo',
      type: 'dangerous',
      handleOnClick: () => {}
    }
  }
};
