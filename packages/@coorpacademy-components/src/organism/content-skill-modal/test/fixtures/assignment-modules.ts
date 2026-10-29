import course from '../../../list-item/test/fixtures/course-with-modules';
import defaultFixture from './default';

const props = {
  ...defaultFixture.props,
  modal: {
    ...defaultFixture.props.modal,
    title: 'Assign content',
    description: 'Select the modules to include in this assignment',
    cancelLabel: 'Cancel assignment',
    confirmLabel: 'Assign'
  },
  contentList: {
    ...defaultFixture.props.contentList,
    title: '1 result',
    content: {
      ...defaultFixture.props.contentList.content,
      items: [{...course.props, id: 'team-cohesion'}]
    }
  }
};

export default {props};
