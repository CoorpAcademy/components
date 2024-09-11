export const defaultProps = {
  id: 'ref-1',
  priorityRef: 'ref-1',
  title: 'Learning Priority 1',
  type: 'skill',
  courses: 0,
  'aria-label': 'Learning Priority 1',
  onRemove: (priorityRef, type) => console.log(priorityRef, type)
};

export default {
  props: defaultProps
};
