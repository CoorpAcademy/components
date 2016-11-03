export default {
  props: {
    type: 'switch',
    title: 'Name',
    value: false,
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
