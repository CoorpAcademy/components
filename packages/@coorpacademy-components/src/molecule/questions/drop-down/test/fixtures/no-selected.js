export default {
  props: {
    options: [
      {
        name: 'Select an answer',
        selected: true,
        notAnOption: true
      },
      {
        name: 'There is no need for a password',
        selected: false
      },
      {
        name: 'Lorem ipsum',
        selected: false
      },
      {
        name: 'Lorem',
        selected: false
      },
      {
        name: 'You need to have a password',
        selected: false
      },
      {
        name: 'Pouet',
        selected: false
      },
      {
        name: 'Lorem ipsum dolor sit amet',
        selected: false
      },
      {
        name: 'Lorem ipsum dolor',
        selected: false
      },
      {
        name: 'all your base are belong to us',
        selected: false
      }
    ],
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
