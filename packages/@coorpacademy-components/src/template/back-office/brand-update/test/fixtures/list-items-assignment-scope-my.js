import My from '../../../../../atom/radio-group/test/fixtures/segmented-my';
import Assignment from './list-items-assignment-without-scope';

export default {
  props: {
    ...Assignment.props,
    scopeControl: My.props
  }
};
