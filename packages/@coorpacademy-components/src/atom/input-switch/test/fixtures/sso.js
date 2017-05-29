export default {
  props: {
    type: 'switch',
    title: 'Name',
    value: true,
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
