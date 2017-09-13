export default {
  props: {
    confirmValue: 'Confirm',
    type: 'doublestep',
    toggleValue: 'Delete Platform',
    cancelValue: 'Cancel',
    description:
      'Are you sure you want to delete your platform? Deleting your platform is irreversible!',
    onClick: () => console.log('confirm')
  }
};
