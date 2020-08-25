import Default from './ready';

export default {
  props: {
    ...Default.props,
    type: 'podcast',
    warningMessage: 'We can’t verify this url. Please check its authenticity before saving.'
  }
};
