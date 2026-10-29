export default {
  props: {
    content: 'Publish changes?',
    descriptionText: 'This assignment is active: learners see the change at the next sync.',
    sections: [
      {
        title: 'Modules:',
        counterText: '2 added · 1 removed',
        items: [
          {type: 'text', text: 'Introduction to management', diff: 'removed', diffLabel: 'Removed'},
          {type: 'text', text: 'Clear communication', diff: 'added', diffLabel: 'Added'},
          {type: 'text', text: 'Giving feedback', diff: 'added', diffLabel: 'Added'}
        ]
      },
      {
        title: 'Learners:',
        counterText: '12 added · 3 removed · 640 unchanged',
        items: [
          {
            type: 'text',
            text: 'Removed learners keep their progress and stay in tracking, under “Removed” (removed by an edit). They no longer see this assignment.'
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
