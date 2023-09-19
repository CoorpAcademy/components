import DesktopReset from './desktop-reset-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    imageTypes: ['image/png', 'image/jpeg', 'image/svg+xml']
  }
};
