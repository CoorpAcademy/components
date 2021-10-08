import QuickAccessCardGroup from '../../../../molecule/quick-access-cards-group/test/fixtures/default';

export default {
  props: {
    header: {
      title: 'Hello Marianna!',
      subtitle: 'Welcome to the coorpmanager dashboard'
    },
    quickAccessCards: {
      title: 'Quick Access',
      cards: QuickAccessCardGroup.props
    }
  }
};
