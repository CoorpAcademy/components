import {ReviewHeaderStepsProps} from '../../prop-types';

type Fixture = {
  props: ReviewHeaderStepsProps;
};

const fixture: Fixture = {
  props: {
    steps: [
      {
        icon: 'no-answer',
        current: true,
        value: '1'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '2'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '3'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '4'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '5'
      }
    ]
  }
};

export default fixture;
