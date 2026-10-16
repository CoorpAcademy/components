import combined from '../../../assignment-audience/test/fixtures/combined';

export default {
  props: {
    wizardHeader: {title: 'Create assignment', onClick: () => console.log('Close')},
    steps: [
      {title: 'Contents', done: true},
      {title: 'Audience', current: true, done: false},
      {title: 'Dates and rule', done: false},
      {title: 'Review', done: false}
    ],
    content: {...combined.props, type: 'assignment-audience'},
    previousStep: {label: 'Previous step', onClick: () => console.log('Previous')},
    nextStep: {label: 'Next step', onClick: () => console.log('Next')}
  }
};
