import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        selectedIds: expanded.props.assigned.rows.map(row => row.id),
        onToggleRow: id => console.log('toggle learner', id),
        onTogglePage: () => console.log('toggle page'),
        summary: '10 selected',
        bulkActions: [
          {
            label: 'Remove 9 learners',
            variant: 'danger',
            onClick: () => console.log('remove selected')
          },
          {
            label: 'Restore 1 learner',
            variant: 'neutral',
            onClick: () => console.log('restore selected')
          }
        ],
        notice: {
          message: 'All 10 learners on this page are selected.',
          action: {
            label: 'Select all 300 learners of this filter',
            onClick: () => console.log('select filter')
          }
        }
      }
    }
  }
};
