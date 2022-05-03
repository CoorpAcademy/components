import withImageReset from './with-image-reset';

const {props} = withImageReset;

export default {
  props: {
    ...props,
    disabled: true
  }
};
