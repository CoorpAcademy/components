import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    min: 0,
    max: 100,
    value: 10,
    testID: 'question-slider',
    onSlidingComplete: () => null
  }
};

export default fixture;
