import defaultProps from './default';

const withoutQuestionsToReview = {
  ...defaultProps.props,
  metrics: {
    content: 85
  }
};

export default {
  props: withoutQuestionsToReview
};
