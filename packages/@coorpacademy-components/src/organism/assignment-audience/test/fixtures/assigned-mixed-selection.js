import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        selectedIds: ['alice', 'diego'],
        onToggleRow: id => console.log('toggle learner', id),
        onTogglePage: () => console.log('toggle page'),
        summary: '2 selected',
        bulkActions: [
          {
            label: 'Remove 1 learner',
            variant: 'danger',
            onClick: () => console.log('remove selected')
          },
          {
            label: 'Restore 1 learner',
            variant: 'neutral',
            onClick: () => console.log('restore selected')
          }
        ]
      }
    }
  }
};
