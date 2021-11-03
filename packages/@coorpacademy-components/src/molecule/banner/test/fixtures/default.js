export default {
  props: {
    type: 'information',
    message: 'Changes saved but not published. Do you want to update this custom playlist now? ',
    firstCTALabel: 'Undo',
    firstCTA: () => console.log('first cta'),
    secondCTALabel: 'Update',
    secondCTA: () => console.log('second cta')
  }
};
