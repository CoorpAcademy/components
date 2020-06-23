import Default from './default';

export default {
  props: {
    ...Default.props,
    state: 'ready',
    message: 'Drag & Drop your file here',
    type: 'scorm',
    fields: [
      {
        title: 'Url',
        value: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491560713685.svg',
        required: true,
        type: 'text',
        placeholder: 'Your url',
        description: 'Lorem Ipsum dolor sit amet.',
        onChange: () => {}
      }
    ],
    onDelete: () => console.log('Delete'),
    mode: 'edit'
  }
};
