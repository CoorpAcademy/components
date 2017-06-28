export default {
  props: {
    title: 'Learning Path:',
    selection:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    choices: [
      {
        label: 'Digital',
        checked: false
      },
      {
        label: 'Esprit du temps',
        checked: false
      },
      {
        label:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        checked: true
      },
      {
        label: 'Le monde du projet',
        checked: false
      }
    ],
    onToggle: () => true
  }
};
