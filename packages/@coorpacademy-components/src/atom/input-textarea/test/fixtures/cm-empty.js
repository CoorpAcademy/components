export default {
  props: {
    type: 'textarea',
    title: 'Input name',
    hint: 'Hint <span style="color:red;">10<span>/40',
    placeholder: 'This is an input',
    theme: 'coorpmanager',
    description: 'This is the tooltip text',
    value: '',
    disabled: false,
    valid: false,
    error: '',
    required: true,
    onChange: value => console.log(value)
  }
};
