import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: {
    ...props,
    title: 'Email (*)',
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp_mail-1491561014878.svg'
    }
  }
};
