export default {
  props: {
    type: 'textarea',
    title: 'Name',
    placeholder: 'Your text',
    value: '',
    onChange: value => console.log(value)
  }
};
