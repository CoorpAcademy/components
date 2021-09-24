export default {
  props: {
    header: '',
    content: 'Do you want to deactivate this content',
    type: 'hiddenStateManagment',
    firstButtonLabel: 'Yes, Update',
    onFirstButtonClick: () => {},
    secondeButtonLabel: 'Np, do not update',
    onSecondeButtonClick: () => {},
    onClose: () => {}
  }
};
