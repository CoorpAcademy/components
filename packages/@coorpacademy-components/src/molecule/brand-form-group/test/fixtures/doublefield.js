export default {
  props: {
    title: 'Password Privacy',
    subtitle: 'A little explanation about what is Password Privacy',
    fieldsLayout: 'grid',
    fields: [
      {
        type: 'switch',
        title: 'Activate',
        value: true,
        isFirst: true,
        onChange: () => {}
      },
      {
        istitle: true,
        value: '',
        type: 'text',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      }
    ]
  }
};
