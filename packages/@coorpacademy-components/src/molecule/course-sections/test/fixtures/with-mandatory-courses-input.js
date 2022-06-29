import mandatoryCoursesInput from '../../../../atom/input-text-with-title/test/fixtures/error';
import props from './default';

export default {
  props: {
    ...props.props,
    mandatoryCoursesInput: mandatoryCoursesInput.props,
    inputTitle: 'Minimun courses completion',
    totalCourses: '14 module among 6 courses'
  }
};
