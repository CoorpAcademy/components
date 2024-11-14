export default {
  props: {
    title: 'URLs',
    ssodescription: 'test',
    disabled: true,
    fields: [
      {
        title: 'Issuer URL',
        value: 'https://www.coorpacademy.com',
        type: 'readonly',
        description: 'Lorem Ipsum dolor sit amet.'
      },
      {
        title: 'Entrypoint:',
        value: '',
        type: 'text',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Callback URL:',
        value: '',
        type: 'text',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Logout URL:',
        value: 'https://www.coorpacademy.com/logout',
        type: 'text',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Certificat PEM:',
        value: 'XXX-XXX-XXX-XXX',
        type: 'password',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      }
    ]
  }
};
