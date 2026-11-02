import expanded from './assigned-some-selected';

export default {
  props: {
    ...expanded.props,
    disabled: true,
    assigned: {
      ...expanded.props.assigned,
      selection: {
        ...expanded.props.assigned.selection,
        notice: {
          message: 'Select all learners of this filter.',
          action: {
            label: 'Select all 300 learners of this filter',
            onClick: () => console.log('select filter')
          }
        }
      }
    }
  }
};
