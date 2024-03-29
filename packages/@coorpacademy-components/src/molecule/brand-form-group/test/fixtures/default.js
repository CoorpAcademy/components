export default {
  props: {
    title: 'Platform Name',
    fields: [
      {
        title: 'Domain name',
        value: 'samsung.coorpacademy.com',
        theme: 'coorpmanager',
        type: 'text',
        disabled: true
      },
      {
        title: 'Platform name',
        value: 'Samsung',
        theme: 'coorpmanager',
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
        theme: 'coorpmanager',
        type: 'textarea',
        hint: ''
      },
      {
        title: 'Default field',
        value: '',
        theme: 'coorpmanager',
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
