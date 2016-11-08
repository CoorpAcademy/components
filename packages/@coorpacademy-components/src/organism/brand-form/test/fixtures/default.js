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
        title: 'Delete Platform',
        type: 'doublestep',
        description: 'Deleting your platform is irreversible!',
        onChange: () => {}
      }]
    }]
  }
};
