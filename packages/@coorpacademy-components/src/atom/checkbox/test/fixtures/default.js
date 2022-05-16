export default {
  props: {
    type: 'checkbox',
    title: 'OK',
    checked: false,
    'aria-label': 'checkbox-aria-label',
    onChange: value => console.log('onChange', value)
  }
};
