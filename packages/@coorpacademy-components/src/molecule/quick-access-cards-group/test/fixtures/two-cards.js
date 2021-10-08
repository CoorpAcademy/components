import cockpit from '../../../quick-access-card/test/fixtures/default';
import analytics from '../../../quick-access-card/test/fixtures/analytics';

export default {
  props: {
    list: [cockpit.props, analytics.props],
    loading: false
  }
};
