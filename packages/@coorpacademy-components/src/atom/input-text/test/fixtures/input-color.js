export default {
  props: {
    type: 'text',
    title: 'Icon color',
    placeholder: 'This is an input',
    theme: 'coorpmanager',
    description: 'This is the tooltip text',
    value: '#1B7B88',
    disabled: false,
    valid: false,
    error: '',
    required: true,
    onChange: value => console.log(value),
    inputColor: true
  }
};
