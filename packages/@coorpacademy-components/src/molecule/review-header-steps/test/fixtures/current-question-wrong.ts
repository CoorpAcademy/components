import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
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
        icon: 'wrong',
        current: false,
        value: '2'
      },
      {
        icon: 'wrong',
        current: true,
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
