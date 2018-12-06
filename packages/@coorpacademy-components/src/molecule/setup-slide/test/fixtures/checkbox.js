export default {
  props: {
    fields: [
      {
        type: 'text',
        title: 'Name',
        value: 'value',
        required: true,
        autoFocus: true
      },
      {
        type: 'checkbox',
        title: 'checkbox checked',
        checked: true
      },
      {
        type: 'checkbox',
        title: 'checkbox not checked',
        checked: false
      }
    ]
  }
};
