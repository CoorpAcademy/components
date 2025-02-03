export default {
  props: {
    type: 'info',
    message: "5' Learning do not count towards the learning priorities and have been hidden.",
    cta: [
      {
        label: "Show 5'Learning",
        type: 'switch',
        oldSwitchValue: true,
        action: () => console.log('first cta')
      }
    ]
  }
};
