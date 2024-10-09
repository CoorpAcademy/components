import DefaultProps from './default';

export default {
  props: {
    ...DefaultProps.props,
    ongoingCourses: {
      list: []
    }
  }
};
