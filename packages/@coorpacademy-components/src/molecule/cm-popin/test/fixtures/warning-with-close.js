export default {
  props: {
    content: 'Do you want to save changes before quiting?',
    icon: 'AlertDiamond',
    firstButton: {
      label: 'Quit without saving',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Save & Quit',
      type: 'warningWithClose',
      handleOnClick: () => {}
    },
    onClose: () => console.log('onClose')
  }
};
