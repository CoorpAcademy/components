import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'slider',
    value: 8,
    step: 2,
    isDisabled: false,
    choices: [],
    onSliderChange: noop
  }
};

export default fixture;
