export default {
  props: {
    type: 'switch',
    'aria-labelledby': 'select-aria-labelledby',
    value: true,
    onChange: value => console.log(value)
  }
};
