export default {
  props: {
    content: 'Do you want to save changes before quiting?',
    icon: 'AlertDiamond',
    type: 'warningWithClose',
    firstButtonLabel: 'Quit without saving',
    onFirstButtonClick: () => {},
    secondButtonLabel: 'Save & Quit',
    onSecondButtonClick: () => {},
    onClose: () => console.log('onClose')
  }
};
