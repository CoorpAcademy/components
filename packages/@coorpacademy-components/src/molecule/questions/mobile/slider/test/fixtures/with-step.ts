import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    min: 0,
    max: 100,
    value: 10,
    step: 10,
    onSlidingComplete: () => null,
    testID: 'question-slider'
  }
};

export default fixture;
