export default {
  props: {
    type: 'textarea',
    title: 'Name',
    placeholder: 'Your text',
    value: '',
    error: "Error's message",
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
