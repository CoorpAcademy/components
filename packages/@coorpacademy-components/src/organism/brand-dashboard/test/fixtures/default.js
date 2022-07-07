import QuickAccessCardGroup from '../../../../molecule/quick-access-cards-group/test/fixtures/default';
import Go1Banner from '../../../../molecule/go1-banner/test/fixtures/default';

export default {
  props: {
    header: {
      title: 'Hello Marianna!',
      subtitle: 'Welcome to the coorpmanager dashboard'
    },
    quickAccessCards: {
      title: 'Quick Access',
      cards: QuickAccessCardGroup.props
    },
    banner: Go1Banner.props
  }
};
