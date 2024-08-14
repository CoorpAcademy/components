export const defaultProps = {
  title: 'Conflict management',
  tag: {
    label: 'Skill',
    type: 'default'
  },
  progression: 0,
  onclick: () => console.log('clicked'),
  type: 'learningPriority'
};

export default {
  props: defaultProps
};
