export default {
  props: {
    type: 'checkbox',
    title: 'OK',
    checked: false,
    onChange: value => console.log('onChange', value)
  }
};
