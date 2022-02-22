export default {
  props: {
    type: 'right',
    resultLabel: 'CORRECT ANSWER',
    information: {
      label: 'Key learning factor',
      message:
        '17 frustrated software engineers grappling with the complexities of software development.'
    },
    next: {
      label: 'Next Question',
      onClick: () => console.log('Next Question')
    }
  }
};
