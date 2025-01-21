export default {
  props: {
    type: 'info',
    message: "5' Learning do not count towards the learning priorities and have been hidden.",
    cta: [
      {
        label: "Show 5'Learning",
        type: 'switch',
        action: () => console.log('first cta')
      },
      {
        label: 'DELETE',
        type: 'button',
        action: () => console.log('second cta')
      },
      {
        label: 'PUBLISH',
        type: 'button',
        action: () => console.log('third cta')
      }
    ]
  }
};
