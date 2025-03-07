import defaultProps from './default';

export default {
  props: {
    ...defaultProps.props,
    options: [
      {
        ...defaultProps.props.options[0],
        selected: true
      },
      {
        ...defaultProps.props.options[1],
        selected: true
      },
      ...defaultProps.props.options.slice(2)
    ]
  }
};
