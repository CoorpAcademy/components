export default {
  props: {
    content: 'Publish changes?',
    descriptionText: 'This assignment is upcoming: learners see the change at its start date.',
    sections: [
      {
        title: 'Modules:',
        counterText: '2 added · 1 removed',
        items: [
          {type: 'text', text: '+ Clear communication'},
          {type: 'text', text: '+ Giving feedback'},
          {type: 'text', text: '− Introduction to management'}
        ]
      },
      {
        title: 'Learners:',
        counterText: '12 added · 3 removed · 640 unchanged',
        items: [
          {
            type: 'text',
            text: 'Removed learners keep their progress and stay in tracking, under “Removed” (removed by an edit). They no longer see this assignment.'
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
