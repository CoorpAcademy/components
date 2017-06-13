export default {
  props: {
    title: 'Confirm',
    type: 'doublestep',
    toggleValue: 'Delete Platform',
    cancelValue: 'Cancel',
    description: 'Are you sure you want to delete your platform? Deleting your platform is irreversible!',
    onChange: () => console.log('confirm') // eslint-disable-line no-console
  }
};
