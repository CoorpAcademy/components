import Default from './default';

export default {
  props: {
    ...Default.props,
    state: 'success',
    message: 'Your file is successfully imported!',
    type: 'video',
    fields: [
      {
        title: 'Url',
        value: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491560713685.svg',
        type: 'text'
      }
    ],
    onDelete: () => console.log('Delete')
  }
};
