import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {choices} from './qcm';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'basic',
    choices,
    onItemPress: noop
  }
};

export default fixture;
