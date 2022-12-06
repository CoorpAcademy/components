import {Fixture} from '../../prop-types';

const fixture: Fixture = {
  props: {
    type: 'right',
    resultLabel: 'CORRECT ANSWER',
    information: {
      label: 'Key learning factor',
      message:
        '17 frustrated <i><font color="blue">software engineers</font></i> grappling with <b>the complexities</b> of software development.'
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
