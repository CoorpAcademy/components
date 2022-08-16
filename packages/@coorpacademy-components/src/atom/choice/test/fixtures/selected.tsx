import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    questionType: 'qcm',
    onPress: noop,
    isSelected: true,
    children: 'Option 2'
  }
};

export default fixture;
