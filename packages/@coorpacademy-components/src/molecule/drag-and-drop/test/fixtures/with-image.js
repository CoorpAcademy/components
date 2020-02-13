import Default from './default';

export default {
  props: {
    ...Default.props,
    previewLabel: 'File Preview',
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491560713685.svg'
    }
  }
};
