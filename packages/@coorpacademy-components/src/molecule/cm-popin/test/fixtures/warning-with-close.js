export default {
  props: {
    content: 'Do you want to save changes before quiting?',
    icon: 'AlertDiamond',
    mode: 'alert',
    firstButton: {
      label: 'Quit without saving',
      type: 'secondary',
      'aria-label': 'Quit this operation without saving',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Save & Quit',
      type: 'primary',
      'aria-label': 'Save and quit',
      handleOnClick: () => {}
    },
    onClose: () => console.log('onClose')
  }
};
