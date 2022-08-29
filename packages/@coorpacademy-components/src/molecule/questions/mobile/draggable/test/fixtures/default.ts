import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {choices} from '../../../switch/test/fixtures/qcm';

type Fixture = {props: Props};

export const userChoices = choices.slice(0, 2).map(item => item.label);

const fixture: Fixture = {
  props: {
    choices,
    userChoices,
    onPress: noop
  }
};

export default fixture;
