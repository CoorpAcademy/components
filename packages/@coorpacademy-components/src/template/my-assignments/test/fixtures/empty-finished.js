import fixture, {tabs} from './default';

export default {
  props: {
    ...fixture.props,
    tabs: tabs('done', 6, 0),
    sections: [],
    cards: [],
    emptyState: {
      title: 'Nothing finished yet',
      message: 'Modules you complete show up here.',
      link: {label: 'Back to dashboard', href: '/dashboard'}
    }
  }
};
