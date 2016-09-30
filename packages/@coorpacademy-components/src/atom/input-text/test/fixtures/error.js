export default {
  props: {
    type: 'text',
    title: 'Name',
    placeholder: 'Your name',
    value: '',
    error: 'Error\'s message',
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
