import card from '../../../../molecule/assignment-card/test/fixtures/default';

export default {
  props: {
    title: 'My assigned learning',
    tabs: [
      {key: 'todo', label: 'To do', count: 8, selected: true, onClick: () => {}},
      {key: 'inProgress', label: 'In progress', count: 3, selected: false, onClick: () => {}},
      {key: 'done', label: 'Finished', count: 0, selected: false, onClick: () => {}}
    ],
    cards: [
      {
        ...card.props,
        notification: {...card.props.notification},
        assignments: card.props.assignments.map(assignment => ({...assignment}))
      }
    ],
    emptyState: {title: 'Nothing here', message: 'Choose another tab'},
    onCardClick: () => {}
  }
};
