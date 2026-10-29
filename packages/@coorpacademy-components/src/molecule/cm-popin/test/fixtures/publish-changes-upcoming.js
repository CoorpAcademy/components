export default {
  props: {
    content: 'Publish changes?',
    descriptionText: 'This assignment is upcoming: learners see the change at its start date.',
    sections: [
      {
        title: 'Modules:',
        counterText: '+2 · −1',
        items: [
          {type: 'text', text: '+ Clear communication'},
          {type: 'text', text: '+ Giving feedback'},
          {type: 'text', text: '− Introduction to management'}
        ]
      },
      {
        title: 'Learners:',
        counterText: '+12 · −3',
        items: [
          {
            type: 'text',
            text: 'Removed learners are kept in tracking as “Removed by an edit”.'
          }
        ]
      }
    ],
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-label': 'Cancel',
      handleOnclick: () => {}
    },
    secondButton: {
      label: 'Publish changes',
      type: 'primary',
      'aria-label': 'Publish changes',
      handleOnclick: () => {}
    }
  }
};
