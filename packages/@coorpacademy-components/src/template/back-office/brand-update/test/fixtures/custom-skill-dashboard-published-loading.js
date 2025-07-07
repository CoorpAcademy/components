import listItemsProps from '../../../../../organism/list-items/test/fixtures/custom-skill-loading';
import Default from './custom-skill-dashboard-published';

export default {
  props: {
    ...Default.props,
    content: {
      ...listItemsProps.props,
      type: 'list-content'
    }
  }
};
