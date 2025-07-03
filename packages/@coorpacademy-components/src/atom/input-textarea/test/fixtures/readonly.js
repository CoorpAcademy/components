export default {
  props: {
    type: 'textarea',
    title: 'Readonly Field',
    placeholder: 'This field is readonly',
    value: 'This text cannot be edited',
    readOnly: true,
    onChange: value => console.log(value)
  }
};
