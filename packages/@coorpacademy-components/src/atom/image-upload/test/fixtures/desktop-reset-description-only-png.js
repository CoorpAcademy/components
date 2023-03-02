import DesktopReset from './desktop-reset-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/batman.png'
    },
    imageTypes: ['image/png']
  }
};
