import course from './course-with-modules';

export default {
  props: {
    ...course.props,
    subItems: course.props.subItems.map((item, index) => ({...item, disabled: index === 1}))
  }
};
