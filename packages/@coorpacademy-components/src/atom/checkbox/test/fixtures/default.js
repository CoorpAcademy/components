export default {
  props: {
    type: 'checkbox',
    title: 'OK',
    checked: false,
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
