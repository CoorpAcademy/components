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
        icon: 'right',
        current: false,
        value: '2'
      },
      {
        icon: 'right',
        current: false,
        value: '3'
      },
      {
        icon: 'right',
        current: false,
        value: '4'
      },
      {
        icon: 'right',
        current: true,
        value: '5'
      }
    ]
  }
};

export default fixture;
