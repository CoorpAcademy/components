import DesktopReset from './desktop-reset-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    imageTypes: ['png', 'jpg', 'svg+xml']
  }
};
