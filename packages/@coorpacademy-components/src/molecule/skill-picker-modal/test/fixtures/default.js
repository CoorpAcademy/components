export default {
  props: {
    skills: [
      {
        skillTitle: 'Creativity and innovation',
        focus: false
      },
      {
        skillTitle: 'Critical thinking and analysis',
        focus: true
      },
      {
        skillTitle: 'Digital culture',
        focus: false
      },
      {
        skillTitle: 'Digital dexterity',
        focus: false
      },
      {
        skillTitle: 'Digital communication',
        focus: false
      },
      {
        skillTitle: 'Active listening',
        focus: false
      },
      {
        skillTitle: 'Agility',
        focus: false
      },
      {
        skillTitle: 'Learning how to learn',
        focus: false
      }
    ],
    isOpen: true,
    isLoading: false,
    onCancel: () => console.log('cancel'),
    onConfirm: () => console.log('confirm'),
    onClose: () => console.log('close modal')
  }
};
