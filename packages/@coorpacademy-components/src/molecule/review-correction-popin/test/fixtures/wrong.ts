import {Fixture} from '../../prop-types';

const fixture: Fixture = {
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
      'aria-label': 'next question button',
      'data-name': 'next-question-button',
      onClick: () => console.log('Next Question')
    }
  }
};

export default fixture;
