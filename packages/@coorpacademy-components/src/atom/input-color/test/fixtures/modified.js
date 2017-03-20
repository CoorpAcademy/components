export default {
  props: {
    type: 'color',
    title: 'Color',
    placeholder: '#FFFFFF',
    value: '#CC88F7',
    modified: true,
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
