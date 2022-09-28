import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {SelectableChoice} from '../../../../types';

type Fixture = {props: Props};

const choices: SelectableChoice[] = [
  {
    _id: '1',
    label: 'Play Store',
    onPress: () => noop,
    selected: false
  },
  {
    _id: '2',
    label: 'App Store',
    onPress: () => noop,
    selected: false
  }
];

const fixture: Fixture = {
  props: {
    choices,
    onPress: () => noop
  }
};

export default fixture;
