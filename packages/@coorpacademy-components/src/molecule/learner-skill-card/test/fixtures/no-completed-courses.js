import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    metrics: {
      skillQuestions: 25,
      skillCourses: 50
    }
  }
};
