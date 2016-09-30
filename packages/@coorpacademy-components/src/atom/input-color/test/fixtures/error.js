export default {
  props: {
    type: 'color',
    title: 'Color',
    placeholder: '#FFFFFF',
    value: '',
    error: 'Error\'s message',
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
