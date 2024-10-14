export default {
  props: {
    skills: [
      'skillRef1',
      'skillRef2',
      'skillRef3',
      'skillRef4',
      'skillRef5',
      'skillRef6',
      'skillRef7'
    ],
    selectedSkills: ['skillRef1', 'skillRef2'],
    skillsLocales: {
      skillRef1: 'Skill 1',
      skillRef2: 'Skill 2',
      skillRef3: 'Skill 3',
      skillRef4: 'Skill 4',
      skillRef5: 'Skill 5',
      skillRef6: 'Skill 6',
      skillRef7: 'Skill 7'
    },
    skillsScore: {
      skillRef1: 23,
      skillRef2: 56.3,
      skillRef3: 80.89,
      skillRef4: 0,
      skillRef5: 4,
      skillRef6: 32.22,
      skillRef7: 12
    },
    isOpen: true,
    isLoading: false,
    onCancel: () => console.log('cancel'),
    onConfirm: () => console.log('confirm'),
    onClose: () => console.log('close modal')
  }
};
