import assignments from '../../../../../organism/list-items/test/fixtures/assignments';
import Default from './default';

export default {
  props: {
    ...Default.props,
    content: {
      ...assignments.props,
      type: 'list-content'
    }
  }
};
