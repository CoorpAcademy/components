import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    metrics: {
      ...defaultProps.metrics,
      progression: 100
    }
  }
};
