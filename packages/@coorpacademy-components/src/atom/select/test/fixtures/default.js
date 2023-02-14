export default {
  props: {
    'aria-label': 'select aria-label',
    'aria-labelledby': 'select-aria-labelledby',
    options: [
      {
        name: 'Pouet',
        value: 'Pouet',
        selected: false
      },
      {
        name: 'Pouet2',
        value: 'Pouet2',
        selected: true
      },
      {
        name: 'Pouet3',
        value: 'Pouet3',
        selected: false
      },
      {
        name: 'Pouet4',
        value: 'Pouet4',
        selected: false
      },
      {
        name: 'Pouet5',
        value: 'Pouet5',
        selected: false
      },
      {
        name: 'Pouet6',
        value: 'Pouet6',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  }
};
