import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        selectedIds: ['alice', 'camille'],
        onToggleRow: id => console.log('toggle learner', id),
        onTogglePage: () => console.log('toggle page'),
        summary: '2 selected',
        bulkActions: [
          {
            label: 'Remove 2 learners',
            variant: 'danger',
            onClick: () => console.log('remove selected')
          }
        ]
      }
    }
  }
};
