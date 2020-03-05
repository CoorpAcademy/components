import Default from './default';

export default {
  props: {
    ...Default.props,
    type: 'error',
    buttonTitle: 'Try Again',
    message: "Sorry we couldn't upload your file."
  }
};
