export default {
  props: {
    title: 'Learning Path:',
    theme: 'setup',
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
        name:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        value: 'loremIpsum',
        selected: true
      },
      {
        name: 'Le monde du projet',
        value: 'project',
        selected: false
      }
    ],
    onChange: () => true
  }
};
