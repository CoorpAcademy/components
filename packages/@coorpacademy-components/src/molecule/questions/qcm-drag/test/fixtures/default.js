export default {
  props: {
    answers: [
      {
        title: 'There is no need for a password',
        onClick: () => {},
        selected: false
      },
      {
        title: 'Lorem ipsum',
        onClick: () => {},
        selected: false
      },
      {
        title: 'Lorem',
        onClick: () => {},
        selected: true,
        order: 1
      },
      {
        title: 'You need to have a password',
        onClick: () => {},
        selected: false
      },
      {
        title: 'Pouet',
        onClick: () => {},
        selected: true,
        order: 0
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        onClick: () => {},
        selected: false
      },
      {
        title: 'Lorem ipsum dolor',
        onClick: () => {},
        selected: false
      },
      {
        title: 'all your base are belong to us',
        onClick: () => {},
        selected: false
      }
    ],
    groupAriaLabel: 'Answer the question'
  }
};
