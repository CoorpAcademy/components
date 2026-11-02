import expanded from './assigned-expanded';

export default {
  props: {
    ...expanded.props,
    assigned: {...expanded.props.assigned, expanded: false, toggleLabel: 'Show the list ▼'}
  }
};
