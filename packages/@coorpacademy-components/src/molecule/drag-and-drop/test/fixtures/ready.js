import Default from './default';

export default {
  props: {
    ...Default.props,
    type: 'ready',
    message: 'Your file is successfully imported!',
    content: {
      type: 'scorm',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491560713685.svg'
    },
    onDelete: () => console.log('Delete')
  }
};
