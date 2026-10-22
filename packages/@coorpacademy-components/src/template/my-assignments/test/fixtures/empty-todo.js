import fixture, {tabs} from './default';

export default {
  props: {
    ...fixture.props,
    tabs: tabs('todo', 0),
    sections: [],
    emptyState: {
      title: 'Nothing to do right now',
      message:
        'You’re all caught up. New modules show up here as soon as they are assigned to you.',
      link: {label: 'Back to dashboard', href: '/dashboard'}
    }
  }
};
