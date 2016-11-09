export default {
  props: {
    groups: [{
      title: 'Import',
      fields: [{
        type: 'text',
        title: 'name'
      }]
    }],
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
