import expanded from './assigned-page-selected';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        ...expanded.props.assigned.selection,
        summary: '300 selected',
        bulkActions: [
          {
            label: 'Remove 299 learners',
            variant: 'danger',
            onClick: () => console.log('remove filter')
          },
          {
            label: 'Restore 1 learner',
            variant: 'neutral',
            onClick: () => console.log('restore selected')
          }
        ],
        notice: {
          message: 'All 300 learners of this filter are selected.',
          action: {label: 'Clear selection', onClick: () => console.log('clear selection')}
        }
      }
    }
  }
};
