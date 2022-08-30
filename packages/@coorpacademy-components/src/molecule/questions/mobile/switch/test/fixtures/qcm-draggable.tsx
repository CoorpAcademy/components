import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {answers, choices} from './qcm';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'qcmDrag',
    items: choices,
    userChoices: answers,
    onItemPress: noop
  }
};

export default fixture;
