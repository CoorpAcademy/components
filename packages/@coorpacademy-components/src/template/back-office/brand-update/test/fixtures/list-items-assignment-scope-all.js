import All from '../../../../../atom/radio-group/test/fixtures/segmented-all';
import Assignment from './list-items-assignment-without-scope';

export default {
  props: {
    ...Assignment.props,
    scopeControl: All.props
  }
};
