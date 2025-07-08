import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    description:
      'Coordinating tasks and activities, either individually or as part of a project, paying attention to detail as well as to the big picture, in order to maximise productivity and performance while maintaining a balanced life for everyone.',
    focused: false,
    availableForReview: false
  }
};
