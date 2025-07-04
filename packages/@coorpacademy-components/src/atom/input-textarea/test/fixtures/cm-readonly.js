export default {
  props: {
    type: 'textarea',
    title: 'Readonly Field',
    placeholder: 'This field is readonly',
    value: 'This text cannot be edited in coorpmanager theme',
    readonly: true,
    theme: 'coorpmanager',
    onChange: value => console.log(value)
  }
};
