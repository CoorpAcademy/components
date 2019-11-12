export default {
  props: {
    confirmValue: 'Whatever',
    type: 'doublestep',
    toggleValue: 'Delete Platform',
    disabled: true,
    cancelValue: 'Whatever also',
    description:
      'Are you sure you want to delete your platform? Deleting your platform is irreversible!',
    onClick: () => console.log('Sorry, wont happen')
  }
};
