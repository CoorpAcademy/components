export const defaultProps = {
  'aria-label': 'Skill Card',
  skillTitle: 'Critical thinking and analysis',
  buttonLabel: 'Revise this skill',
  reviseLabel: '75 questions to revise',
  isCustom: undefined,
  onClick: () => console.log('revise - no aria')
};

export default {
  props: defaultProps
};
