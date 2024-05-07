export default {
  props: {
    skills: [
      {
        name: 'Creativity and innovation',
        selected: false
      },
      {
        name: 'Critical thinking and analysis',
        selected: true
      },
      {
        name: 'Digital culture',
        selected: false
      },
      {
        name: 'Digital dexterity',
        selected: false
      },
      {
        name: 'Digital communication',
        selected: false
      },
      {
        name: 'Active listening',
        selected: false
      },
      {
        name: 'Agility',
        selected: false
      },
      {
        name: 'Learning how to learn',
        selected: false
      }
    ],
    isOpen: true,
    isLoading: false,
    isError: false,
    footerDescription: 'Select at least 3 more skills',
    onSkillClick: skill => console.log('skill clicked', skill),
    onCancel: () => console.log('cancel'),
    onConfirm: () => console.log('confirm'),
    onClose: () => console.log('close modal')
  }
};
