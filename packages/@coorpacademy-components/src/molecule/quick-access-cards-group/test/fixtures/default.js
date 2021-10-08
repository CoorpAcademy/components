import cockpit from '../../../quick-access-card/test/fixtures/default';
import analytics from '../../../quick-access-card/test/fixtures/analytics';
import lookAndFeel from '../../../quick-access-card/test/fixtures/look-and-feel';
import massiveBattle from '../../../quick-access-card/test/fixtures/massive-battle';
import uploadUsers from '../../../quick-access-card/test/fixtures/upload-users';

export default {
  props: {
    list: [
      cockpit.props,
      analytics.props,
      lookAndFeel.props,
      massiveBattle.props,
      uploadUsers.props
    ],
    loading: false
  }
};
