import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    metrics: {
      questionsToReview: 25,
      contentCompleted: 50
    }
  }
};
