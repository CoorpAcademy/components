import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    description: null,
    focused: false,
    availableForReview: false
  }
};
