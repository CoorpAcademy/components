export default {
  props: {
    type: 'text',
    title: 'Search...',
    placeholder: 'Search...',
    description: 'This is the tooltip text',
    value: 'This is an input',
    disabled: false,
    onChange: value => console.log(value)
  }
};
