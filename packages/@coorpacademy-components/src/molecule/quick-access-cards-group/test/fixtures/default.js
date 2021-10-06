import cockpit from '../../../quick-access-card/test/fixtures/default';
import analytics from '../../../quick-access-card/test/fixtures/analytics';
import lookAndFeel from '../../../quick-access-card/test/fixtures/look-and-feel';
import email from '../../../quick-access-card/test/fixtures/manage-email';

export default {
  props: {
    list: [cockpit.props, analytics.props, lookAndFeel.props, email.props],
    loading: false
  }
};
