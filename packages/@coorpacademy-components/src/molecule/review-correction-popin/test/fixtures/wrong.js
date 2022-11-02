export default {
  props: {
    type: 'wrong',
    resultLabel: 'WRONG ANSWER',
    information: {
      label: 'Correct Answer',
      message: 'Corporate lawyers trying to understand software.'
    },
    klf: {
      label: 'Key learning factor',
      tooltip:
        '17 frustrated <i><font color="blue">software engineers</font></i> grappling with the complexities of software development.'
    },
    next: {
      label: 'Next Question',
      onClick: () => console.log('Next Question')
    }
  }
};
