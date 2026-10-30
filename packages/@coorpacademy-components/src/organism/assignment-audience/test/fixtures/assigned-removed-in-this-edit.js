import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    total: {
      label: 'Estimated audience: 298 learners',
      detail: '300 already assigned · 1 added · 3 removed in this edit'
    },
    assigned: {
      ...expanded.props.assigned,
      title: '300 learners already assigned · 3 removed in this edit',
      filters: expanded.props.assigned.filters.map(filter => ({
        ...filter,
        label: filter.key === 'removed' ? 'Removed in this edit (3)' : filter.label,
        selected: filter.key === 'removed'
      })),
      pagination: {label: '1–3 of 3'},
      rows: expanded.props.assigned.rows.slice(0, 3).map(row => ({
        ...row,
        action: {
          label: 'Undo',
          variant: 'neutral',
          onClick: () => console.log('undo removal', row.id)
        }
      })),
      footnote:
        '3 learners will be removed when you publish the changes. They keep their progress and stay in tracking, under “Removed”.'
    }
  }
};
