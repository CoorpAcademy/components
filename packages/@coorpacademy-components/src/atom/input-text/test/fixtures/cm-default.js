export default {
  props: {
    type: 'text',
    title: 'Input name',
    hint: 'Hint <span style="color:red;">10<span>/40',
    placeholder: 'This is an input',
    theme: 'coorpmanager',
    description: 'This is the tooltip text',
    value: 'This is an input',
    disabled: false,
    valid: true,
    error: '',
    required: true,
    onChange: value => console.log(value)
  }
};
