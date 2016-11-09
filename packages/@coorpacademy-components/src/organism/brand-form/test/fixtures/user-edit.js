export default {
  props: {
    groups: [{
      title: 'User Edit',
      fields: [{
        type: 'text',
        title: 'name'
      }]
    }],
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
