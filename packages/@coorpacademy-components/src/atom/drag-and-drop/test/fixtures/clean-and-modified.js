import defaultProps from './default';

const {props} = defaultProps;

export default {
  props: {
    ...props,
    modified: true
  }
};
