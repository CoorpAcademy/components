export default {
  props: {
    type: 'wrong',
    resultLabel: 'WRONG ANSWER',
    information: {
      label: 'Correct Answer',
      message: 'Corporate lawyers trying to understand software.'
    },
    cta: {
      label: 'Kery learning favor',
      tooltip:
        '17 frustrated software engineers grappling with the complexities of software development.'
    },
    next: {
      label: 'Next Question',
      onClick: () => console.log('Next Question')
    }
  }
};
