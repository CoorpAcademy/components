export default {
  props: {
    groups: [{
      title: 'Platform Name',
      fields: [{
        title: 'Domain name',
        value: 'samsung.coorpacademy.com',
        type: 'readonly'
      }, {
        title: 'Platform name',
        value: 'Samsung',
        type: 'readonly'
      }]
    },
    {
      title: 'Forum',
      fields: [{
        title: 'Activate',
        value: false,
        type: 'switch',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      }]
    }, {
      title: 'Danger Zone',
      fields: [{
        title: 'Confirm',
        type: 'doublestep',
        toggleValue: 'Delete Platform',
        cancelValue: 'Cancel',
        description: 'Are you sure you want to delete your platform? Deleting your platform is irreversible!',
        onChange: () => {}
      }]
    }],
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
