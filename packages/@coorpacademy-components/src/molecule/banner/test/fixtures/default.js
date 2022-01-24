export default {
  props: {
    type: 'warning',
    message: 'Changes saved but not published. Do you want to update this custom playlist now? ',
    firstCTALabel: 'Delete all changes',
    firstCTA: () => console.log('first cta'),
    secondCTALabel: 'Update',
    secondCTA: () => console.log('second cta')
  }
};
