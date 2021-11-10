export default {
  props: {
    title: 'Platform Name',
    fields: [
      {
        title: 'Domain name',
        value: 'samsung.coorpacademy.com',
        hint: 'Hint <span style="color:red;">10<span>/40',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        type: 'text',
        disabled: true
      },
      {
        title: 'Platform name',
        value: 'Samsung',
        hint: 'Hint <span style="color:red;">10<span>/40',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        type: 'text',
        disabled: true
      },
      {
        title: 'Description',
        value: '',
        theme: 'coorpmanager',
        type: 'html'
      },
      {
        title: 'TextArea',
        value: '',
        hint: 'Hint <span style="color:red;">10<span>/40',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        type: 'textarea'
      },
      {
        title: 'Default field',
        value: '',
        hint: 'Hint <span style="color:red;">10<span>/40',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        type: 'unknow'
      },
      {
        title: 'Select Multiple',
        value: '',
        theme: 'coorpmanager',
        type: 'selectMultiple'
      }
    ]
  }
};
