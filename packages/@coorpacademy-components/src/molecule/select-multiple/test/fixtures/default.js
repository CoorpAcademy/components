export default {
  props: {
    title: 'Learning Path:',
    options: [
      {
        name: 'Digital',
        value: 'digital',
        selected: false
      },
      {
        name: 'Esprit du temps',
        value: 'espritDuTemps',
        selected: false
      },
      {
        name: 'Le 3e révolution mobile',
        value: 'revolution',
        selected: false
      },
      {
        name: 'Le monde du projet',
        value: 'projet',
        selected: false
      }
    ],
    onChange: () => true
  }
};
