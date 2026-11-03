import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      notice: '1 deleted account was removed from this assignment’s learners.',
      filters: expanded.props.assigned.filters.map(filter => ({
        ...filter,
        label: filter.key === 'deleted' ? 'Deleted accounts (1)' : filter.label
      })),
      rows: expanded.props.assigned.rows.map((row, index) =>
        index === 9
          ? {
              id: 'deleted-account',
              fields: ['Deleted account', '—'],
              actionText: 'Deleted account'
            }
          : row
      ),
      selection: {
        selectedIds: [],
        onToggleRow: id => console.log('toggle learner', id),
        onTogglePage: () => console.log('toggle page')
      }
    }
  }
};
