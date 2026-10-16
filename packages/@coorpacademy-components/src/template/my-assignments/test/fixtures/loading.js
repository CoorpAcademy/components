import fixture from './default';

export default {
  props: {
    ...fixture.props,
    loading: true,
    tabs: fixture.props.tabs.map(tab => ({...tab})),
    emptyState: {...fixture.props.emptyState},
    cards: fixture.props.cards.map(card => ({
      ...card,
      notification: {...card.notification},
      assignments: card.assignments.map(assignment => ({...assignment}))
    }))
  }
};
