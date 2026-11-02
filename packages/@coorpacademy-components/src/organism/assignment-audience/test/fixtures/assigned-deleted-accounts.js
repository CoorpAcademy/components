import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      notice: '12 deleted accounts were removed from this assignment’s learners.',
      filters: expanded.props.assigned.filters.map(filter => ({
        ...filter,
        label: filter.key === 'deleted' ? 'Deleted accounts (12)' : filter.label,
        selected: filter.key === 'deleted'
      })),
      pagination: {label: '1–12 of 12'},
      rows: Array.from({length: 12}, (_, index) => ({
        id: `deleted-account-${index + 1}`,
        fields: [`Deleted account ${index + 1}`, '—'],
        actionText: 'Deleted account'
      }))
    }
  }
};
