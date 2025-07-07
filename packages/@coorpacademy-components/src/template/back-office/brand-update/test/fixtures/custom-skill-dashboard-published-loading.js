import listItemsProps from '../../../../../organism/list-items/test/fixtures/custom-skill';
import Default from './custom-skill-dashboard-published';

export default {
  props: {
    ...Default.props,
    content: {
      ...listItemsProps.props,
      content: {},
      isFetching: true,
      type: 'list-content'
    }
  }
};
