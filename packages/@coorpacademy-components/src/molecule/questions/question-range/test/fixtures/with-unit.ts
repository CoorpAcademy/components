import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    min: 0,
    max: 100,
    unit: '°C',
    value: 10,
    step: 10,
    testID: 'question-slider'
  }
};

export default fixture;
