export default {
  props: {
    confirmValue: 'Confirm',
    confirmDisabled: false,
    type: 'doublestep',
    toggleValue: 'Delete Platform',
    cancelValue: 'Cancel',
    description:
      "Deleting your platform is irreversible. Enter your brand's name (yolo1) below to confirm you want to permanently delete it.",
    onClick: () => console.log('confirm'),
    textValidation: true,
    onChange: e => console.log('on change text', e),
    placeholder: "Brand's name",
    isPending: true,
    onOpenConfirmation: () => console.log('open'),
    onCloseConfirmation: () => console.log('close')
  }
};
