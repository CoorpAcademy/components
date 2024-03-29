import {ReviewHeaderStepsProps} from '../../prop-types';

type Fixture = {
  props: ReviewHeaderStepsProps;
};

const fixture: Fixture = {
  props: {
    steps: [
      {
        icon: 'right',
        current: false,
        value: '1'
      },
      {
        icon: 'right',
        current: false,
        value: '2'
      },
      {
        icon: 'no-answer',
        current: true,
        value: '3'
      },
      {
        icon: 'right',
        current: false,
        value: '4'
      },
      {
        icon: 'right',
        current: false,
        value: '5'
      }
    ]
  }
};

export default fixture;
