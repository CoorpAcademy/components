export default {
  props: {
    title: 'Learning Path:',
    selection: 'Tous',
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
        label: 'Le 3e révolution mobile',
        checked: false
      },
      {
        label: 'Le monde du projet',
        checked: false
      }
    ],
    onToggle: () => true
  }
};
