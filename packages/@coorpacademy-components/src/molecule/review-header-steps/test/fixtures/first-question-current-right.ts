import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    steps: [
      {
        icon: 'right',
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
