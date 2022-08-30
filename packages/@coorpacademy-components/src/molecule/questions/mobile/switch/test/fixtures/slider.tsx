import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'slider',
    min: 0,
    max: 20,
    unit: '°C',
    value: 8,
    step: 2,
    isDisabled: false,
    items: [],
    onInputValueChange: noop,
    userChoices: [],
    onSliderChange: noop
  }
};

export default fixture;
