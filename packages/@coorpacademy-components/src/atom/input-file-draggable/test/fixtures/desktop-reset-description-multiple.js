import DesktopReset from './desktop-reset-description';

const {props} = DesktopReset;

export default {
  props: {
    ...props,
    filesTypes: ['image/png', 'image/jpeg', 'image/svg+xml']
  }
};
