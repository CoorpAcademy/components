export default {
  props: {
    content: 'Do you want to save changes before quiting?',
    icon: 'AlertDiamond',
    firstButton: {
      label: 'Quit without saving',
      'aria-lable': 'Quit this operation without saving',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Save & Quit',
      type: 'primary',
      'aria-lable': 'Save and quit',
      handleOnClick: () => {}
    },
    onClose: () => console.log('onClose')
  }
};
