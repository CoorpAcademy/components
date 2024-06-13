export default {
  props: {
    skills: [
      {
        ref: 'skill-ref-1',
        locale: 'Skill 1',
        focused: true
      },
      {
        ref: 'skill-ref-2',
        locale: 'Skill 2',
        focused: false
      },
      {
        ref: 'skill-ref-3',
        locale: 'Skill 3',
        focused: false
      }
    ],
    onSkillClick: () => console.log('skill clicked')
  }
};
