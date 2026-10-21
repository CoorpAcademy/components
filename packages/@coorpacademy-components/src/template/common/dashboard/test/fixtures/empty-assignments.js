import fixture from './with-assignments';

export default {
  props: {
    ...fixture.props,
    sections: [
      {
        ...fixture.props.sections[0],
        cards: [],
        emptyState: {
          message: 'Nothing to do right now. You’re all caught up.',
          link: {label: 'See finished modules', onClick: () => console.log('go to /assigned')}
        }
      }
    ]
  }
};
