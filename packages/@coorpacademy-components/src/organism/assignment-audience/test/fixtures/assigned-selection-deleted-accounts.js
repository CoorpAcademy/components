import expanded from './assigned-deleted-accounts';

export default {
  props: {
    ...expanded.props,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        selectedIds: [],
        onToggleRow: id => console.log('toggle learner', id),
        onTogglePage: () => console.log('toggle page')
      }
    }
  }
};
