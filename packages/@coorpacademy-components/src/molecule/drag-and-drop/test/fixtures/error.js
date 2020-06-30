import Default from './default';

export default {
  props: {
    ...Default.props,
    state: 'error',
    buttonTitle: 'Try Again',
    message: "Sorry we couldn't upload your file."
  }
};
