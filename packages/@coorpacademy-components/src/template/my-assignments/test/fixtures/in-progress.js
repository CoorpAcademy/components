import card from '../../../../molecule/assignment-card/test/fixtures/due-soon';
import fixture from './default';

export default {
  props: {
    ...fixture.props,
    tabs: fixture.props.tabs.map(tab => ({
      ...tab,
      selected: tab.key === 'inProgress',
      count: tab.key === 'done' ? 2 : tab.count
    })),
    emptyState: {...fixture.props.emptyState},
    cards: [
      {
        ...card.props,
        notification: {...card.props.notification},
        assignments: card.props.assignments.map(assignment => ({...assignment}))
      }
    ]
  }
};
