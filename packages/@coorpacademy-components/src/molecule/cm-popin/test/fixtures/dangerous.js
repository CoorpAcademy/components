export default {
  props: {
    content: 'Are you sure to undo this changes? This will be permanent',
    type: 'dangerous',
    icon: 'AlertDiamond',
    firstButtonLabel: 'Cancel',
    onFirstButtonClick: () => {},
    secondButtonLabel: 'Undo',
    onSecondButtonClick: () => {}
  }
};
