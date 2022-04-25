import defaultProps from './default';

export default {
  props: {
    ...defaultProps.props,
    autoplay: false,
    animationControl: 'loading'
  }
};
