import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    metrics: {
      content: 85,
      contentCompleted: 50
    }
  }
};
