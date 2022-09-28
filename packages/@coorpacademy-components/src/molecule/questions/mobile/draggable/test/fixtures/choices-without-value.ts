import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice} from '../../../../types';

type Fixture = {props: Props};

const choices: Choice[] = [
  {
    _id: '1',
    label: 'Play Store',
    value: undefined
  },
  {
    _id: '2',
    label: 'App Store',
    value: undefined
  }
];

const fixture: Fixture = {
  props: {
    choices,
    onPress: () => noop
  }
};

export default fixture;
