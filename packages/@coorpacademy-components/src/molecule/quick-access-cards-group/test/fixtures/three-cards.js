import cockpit from '../../../quick-access-card/test/fixtures/default';
import analytics from '../../../quick-access-card/test/fixtures/analytics';
import massiveBattle from '../../../quick-access-card/test/fixtures/massive-battle';

export default {
  props: {
    list: [cockpit.props, analytics.props, massiveBattle.props],
    loading: false
  }
};
