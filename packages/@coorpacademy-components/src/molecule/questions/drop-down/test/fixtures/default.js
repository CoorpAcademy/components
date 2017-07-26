export default {
  props: {
    options: [
      {
        name: 'There is no need for a password',
        selected: false,
        validOption: true
      },
      {
        name: 'Lorem ipsum',
        selected: false,
        validOption: true
      },
      {
        name: 'Lorem',
        selected: true
      },
      {
        name: 'You need to have a password',
        selected: false,
        validOption: true
      },
      {
        name: 'Pouet',
        selected: false,
        validOption: true
      },
      {
        name: 'Lorem ipsum dolor sit amet',
        selected: false,
        validOption: true
      },
      {
        name: 'Lorem ipsum dolor',
        selected: false,
        validOption: true
      },
      {
        name: 'all your base are belong to us',
        selected: false,
        validOption: true
      }
    ],
    onChange: value => console.log(value)
  }
};
