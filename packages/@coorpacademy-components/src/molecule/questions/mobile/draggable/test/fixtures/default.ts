import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {choices} from '../../../switch/test/fixtures/qcm';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    choices,
    onPress: () => noop
  }
};

export default fixture;
