export default {
  props: {
    type: 'warning',
    message: 'Changes saved but not published. Do you want to update this custom playlist now? ',
    cta: [
      {label: 'Delete all changes', action: () => console.log('first cta')},
      {label: 'Update', action: () => console.log('second cta')}
    ]
  }
};
