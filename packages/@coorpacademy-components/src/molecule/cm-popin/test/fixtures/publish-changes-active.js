export default {
  props: {
    content: 'Publish changes?',
    descriptionText: 'This assignment is active: learners see the change at the next sync.',
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
          },
          {
            type: 'text',
            text: '57 learners who had finished go back to in progress: they must complete the added modules.'
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
