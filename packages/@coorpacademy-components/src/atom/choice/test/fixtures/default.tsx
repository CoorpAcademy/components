import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    questionType: 'qcm',
    onPress: noop,
    children: 'Option 1'
  }
};

export default fixture;
