import fixture from './with-assignments';

export default {
  props: {
    ...fixture.props,
    sections: [
      {
        ...fixture.props.sections[0],
        icon: undefined,
        cards: [],
        emptyState: {
          message: 'You have no assignments yet',
          link: {label: 'View all assignments', href: '/my-assignments', onClick: () => {}}
        }
      }
    ]
  }
};
